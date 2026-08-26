# MR. EGGZ — Production Architecture

## Applications

- Customer Web: `www.mreggz.com`
- Admin/Ops Web: `admin.mreggz.com`
- API Platform: `api.mreggz.com`
- Future mobile apps consume the same API platform.

## Platform boundaries

Customer and Admin are separate applications. They must never share public navigation or privileged UI routes.

Both applications communicate through authenticated APIs. Business rules live server-side; clients are not trusted for pricing, inventory, delivery eligibility, order totals, or permissions.

## Core domains

1. Identity & Access
2. Customers
3. Products & Pricing
4. Cart
5. Orders
6. Inventory
7. Delivery Zones
8. Delivery Operations
9. Payments
10. Notifications
11. Analytics

## Data architecture

PostgreSQL is the source of truth for transactional data. Redis is reserved for cache, rate limiting, short-lived state and queues. Object storage is for product/media assets and operational documents.

## AI operating layer

AI agents are advisory/orchestration components. They call controlled domain APIs and cannot write arbitrary database records. Sensitive actions such as pricing changes, refunds, inventory adjustments and order status transitions require server-side business rules and authorization.

## Migration rule

The current customer experience remains intact while the platform is migrated incrementally. Do not replace working customer UI merely to introduce the backend architecture.

## Target request flow

Customer/Admin UI -> API Gateway -> Authentication/RBAC -> Domain Service -> Business Rules -> PostgreSQL/Redis/Object Storage.

AI -> Tool/API layer -> Business Rules -> Domain Service -> Data layer.
