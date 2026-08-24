export type BulkEnquiry = {
  businessName: string;
  contactName: string;
  phone: string;
  businessType: "gym" | "fitness" | "restaurant" | "retailer" | "other";
  quantity: string;
  message: string;
};

export const B2B_BUSINESS_TYPES = ["gym", "fitness", "restaurant", "retailer", "other"] as const;

export function createBulkEnquiry(input: BulkEnquiry) {
  return { ...input, status: "pending" as const, createdAt: new Date().toISOString() };
}
