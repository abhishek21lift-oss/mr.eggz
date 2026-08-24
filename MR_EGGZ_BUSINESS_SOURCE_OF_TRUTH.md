# MR. EGGZ — BUSINESS SOURCE OF TRUTH

## Purpose

This document is the factual content gate for the Mr. Eggz website.

**Rule:** do not invent or silently infer business information. If a fact has not been verified, keep it marked `UNVERIFIED` and do not publish it as fact.

## Source priority

1. Current/official Mr. Eggz business source (mreggz.com)
2. Information explicitly supplied by the business owner
3. Verified repository/business documentation
4. Everything else = reference only, not a business fact

---

# 1. WEBSITE SOURCE CHECK

Official/live reference requested for verification:

`https://mreggz.com`

**Verification attempt:** 2026-08-25

**Result:** the live domain could not be fetched from the current browsing environment because the request timed out. Search indexing also returned no usable Mr. Eggz pages for the exact domain.

Therefore, this file does **not** claim that every field below was extracted from the live website during this verification run.

This distinction is intentional so the new website does not accidentally publish guessed information.

---

# 2. CURRENTLY CONFIRMED BUSINESS INFORMATION

The following information is already established in the project's master task state / existing development direction and may be treated as current project requirements, but should still be cross-checked against the live business source before final production copy is locked.

| Field | Value | Status |
|---|---|---|
| Brand | Mr. Eggz | CONFIRMED |
| Website reference | mreggz.com | CONFIRMED |
| Farm/source location | Uttari Village, Kanpur | PROJECT-CONFIRMED; LIVE-SITE RECHECK PENDING |
| Known pack size | 6 eggs | PROJECT-CONFIRMED; LIVE-SITE RECHECK PENDING |
| Known pack size | 10 eggs | PROJECT-CONFIRMED; LIVE-SITE RECHECK PENDING |
| Known pack size | 30 eggs | PROJECT-CONFIRMED; LIVE-SITE RECHECK PENDING |
| Customer segment | Families | PROJECT-CONFIRMED |
| Customer segment | Gym / fitness customers | PROJECT-CONFIRMED |
| Customer segment | Gyms | PROJECT-CONFIRMED |
| Customer segment | Restaurants | PROJECT-CONFIRMED |
| Customer segment | Retailers | PROJECT-CONFIRMED |
| Ordering channel | WhatsApp | PROJECT-CONFIRMED; ACTUAL NUMBER/URL PENDING |
| Business model | D2C egg sales | PROJECT-CONFIRMED |
| Business model | B2B / bulk supply | PROJECT-CONFIRMED |

---

# 3. PRODUCT CATALOGUE

## Current known packs

### 6 Egg Pack
- Quantity: 6 eggs
- Price: **UNVERIFIED**
- Availability: **UNVERIFIED**
- Product claims: **UNVERIFIED**

### 10 Egg Pack
- Quantity: 10 eggs
- Price: **UNVERIFIED**
- Availability: **UNVERIFIED**
- Product claims: **UNVERIFIED**

### 30 Egg Pack
- Quantity: 30 eggs
- Price: **UNVERIFIED**
- Availability: **UNVERIFIED**
- Product claims: **UNVERIFIED**

## Product-copy rule

Do not publish:
- prices
- discounts
- stock status
- nutritional/health claims
- freshness guarantees
- certifications
- delivery promises

until verified from the actual business source.

---

# 4. BUSINESS / B2B

Known target buyers:

- Gyms
- Fitness studios
- Restaurants
- Retailers
- Other bulk buyers

Intended flow:

```text
Business buyer
      ↓
Bulk enquiry
      ↓
Requirement discussion
      ↓
Supply terms
      ↓
Order / recurring supply
```

Bulk pricing, MOQ, delivery area, payment terms and recurring-order rules are **UNVERIFIED**.

---

# 5. WHATSAPP

WhatsApp is intended as a customer/business conversion channel.

**Actual WhatsApp phone number:** UNVERIFIED

**Actual WhatsApp deep link:** UNVERIFIED

Never place a placeholder number into production.

Never claim WhatsApp automation is active unless the integration has actually been configured and tested.

---

# 6. LOCATION / FARM STORY

Known project positioning:

`Uttari Village, Kanpur`

Current website story should be framed conservatively until the live source is rechecked.

Do not invent:
- farm size
- number of birds
- daily production
- years in business
- feed claims
- certifications
- testing claims
- delivery radius
- farm ownership claims

---

# 7. CONTACT INFORMATION

| Field | Value |
|---|---|
| Phone | UNVERIFIED |
| WhatsApp | UNVERIFIED |
| Email | UNVERIFIED |
| Address | Uttari Village, Kanpur (project-confirmed; exact postal address unverified) |
| Instagram | UNVERIFIED |
| Facebook | UNVERIFIED |
| Other social | UNVERIFIED |

---

# 8. PRICING

**No production price is currently approved by this document.**

The development UI must therefore use:

`Price pending`

until the actual catalogue is verified.

---

# 9. DELIVERY

The following are currently unknown and must not be invented:

- delivery zones
- delivery fee
- free-delivery threshold
- delivery time
- same-day availability
- next-day availability
- minimum order
- COD availability
- prepaid availability
- return/refund policy
- damaged-product policy

Status: **UNVERIFIED**

---

# 10. ORDERING / PAYMENT

Current development prototype supports customer details but does not create a real order or charge a payment.

Production activation requires verified:

- product prices
- delivery rules
- customer address requirements
- order status model
- payment method(s)
- cancellation rules
- refund rules
- invoice requirements
- notification channel(s)

---

# 11. CURRENT WEBSITE IMPLEMENTATION STATUS

The development repository currently contains:

- Homepage
- Product catalogue route
- Product detail route
- Persistent browser cart utility
- Cart route
- Checkout information form

These are implementation details, not business facts.

The repository identifies itself as an AI-first quick-commerce platform foundation. fileciteturn27file0L2-L6

The current frontend package uses Next.js, React, TypeScript and Tailwind CSS dependencies. fileciteturn35file0L2-L6

---

# 12. REQUIRED VERIFICATION BEFORE PRODUCTION

The owner/business source must be rechecked for:

- Exact product names
- Exact pack sizes
- Exact prices
- Exact product descriptions
- Actual product photos
- Actual WhatsApp number
- Actual phone number
- Actual email
- Exact business address
- Delivery coverage
- Delivery fees
- Payment methods
- Refund/cancellation policy
- B2B terms
- Social links
- Any claims shown on the old site

---

# 13. DO NOT COPY FROM OLD SITE BLINDLY

The old site is the **business/content reference**, not the new architecture.

Use verified facts from it, but independently implement the new UX and code.

---

# 14. CONTENT STATUS LEGEND

- `CONFIRMED` — verified from an authoritative source
- `PROJECT-CONFIRMED` — established project requirement; live-site verification may still be pending
- `UNVERIFIED` — do not publish as fact
- `PENDING` — requires owner/business confirmation

---

# 15. NEXT REQUIRED ACTION

Because the live website could not be fetched during the verification run, the next factual-content action is:

**Obtain a readable copy of the old website (screenshots, exported HTML/content, or repository) and reconcile it against this document before enabling real prices, contact details, delivery rules or payment.**

---

# LAST UPDATED

2026-08-25
