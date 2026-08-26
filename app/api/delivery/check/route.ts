import { NextRequest, NextResponse } from "next/server";

const HUB_LAT = Number(process.env.DELIVERY_HUB_LAT ?? "26.4499");
const HUB_LNG = Number(process.env.DELIVERY_HUB_LNG ?? "80.3319");
const RADIUS_KM = Number(process.env.DELIVERY_RADIUS_KM ?? "10");
const BASE_FEE = Number(process.env.DELIVERY_BASE_FEE ?? "40");
const PER_KM_FEE = Number(process.env.DELIVERY_PER_KM_FEE ?? "0");
const FREE_ABOVE = Number(process.env.DELIVERY_FREE_ABOVE ?? "499");

function distanceKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const rad = (v: number) => (v * Math.PI) / 180;
  const dLat = rad(lat2 - lat1);
  const dLng = rad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

export async function GET(request: NextRequest) {
  const lat = Number(request.nextUrl.searchParams.get("lat"));
  const lng = Number(request.nextUrl.searchParams.get("lng"));
  const subtotal = Number(request.nextUrl.searchParams.get("subtotal") ?? "0");

  if (!Number.isFinite(lat) || !Number.isFinite(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    return NextResponse.json({ available: false, error: "Invalid delivery location" }, { status: 400 });
  }

  const distance = distanceKm(lat, lng, HUB_LAT, HUB_LNG);
  const available = distance <= RADIUS_KM;
  const fee = !available ? null : subtotal >= FREE_ABOVE ? 0 : Number((BASE_FEE + distance * PER_KM_FEE).toFixed(2));

  return NextResponse.json({
    available,
    distanceKm: Number(distance.toFixed(2)),
    radiusKm: RADIUS_KM,
    deliveryFee: fee,
    freeAbove: FREE_ABOVE,
    eta: available ? "20–40 min" : null,
    hub: { latitude: HUB_LAT, longitude: HUB_LNG },
  });
}
