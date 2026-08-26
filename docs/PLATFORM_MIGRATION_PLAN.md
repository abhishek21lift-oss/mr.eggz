# MR. EGGZ — Platform Migration Plan

## Phase 1 — Foundation
- Separate customer/admin application boundaries
- API contract conventions
- Authentication and role model
- PostgreSQL schema baseline
- Environment and secret conventions

## Phase 2 — Commerce Core
- Server-authoritative products and prices
- Cart validation
- Order creation and order lifecycle
- Delivery-zone service
- Inventory reservation

## Phase 3 — Admin/Ops
- Admin authentication
- Orders operations
- Product/pricing management
- Inventory operations
- Delivery dispatch
- Customer support tools

## Phase 4 — Customer Experience
- Location search and map pin
- Checkout
- Payment gateway
- Order tracking
- WhatsApp ordering

## Phase 5 — AI Operating Layer
- AI customer assistant
- AI sales assistant
- AI support assistant
- AI inventory recommendations
- AI delivery optimization
- AI analytics

## Non-negotiables

- Do not expose admin operations in the customer application.
- Never trust client-provided prices or totals.
- AI must use controlled tools/APIs; no unrestricted database writes.
- Payment secrets stay server-side.
- Every privileged action is authenticated and authorized.
