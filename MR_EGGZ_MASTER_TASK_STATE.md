# MR. EGGZ — MASTER TASK STATE
## Anti-Drift Project Contract

> Persistent source of truth for the Mr. Eggz website/ecommerce project.
> Read before major work. Update after meaningful milestones.

---

# 1. MASTER MISSION

Build **Mr. Eggz** into a premium, modern, conversion-focused:

**Egg Brand + D2C Ecommerce + B2B/Bulk Supply + Future AI/Automation Platform**

The website must NOT feel like a generic egg-selling website or generic Shopify template.

Core goals:
- Premium brand identity
- Farm-fresh positioning
- D2C ecommerce
- B2B bulk supply
- Gym/fitness customer acquisition
- Restaurant / retailer supply
- Strong mobile experience
- Modern visual storytelling
- Scalable business operations
- Future AI and automation

---

# 2. CURRENT LIVE WEBSITE

**Live reference:** https://mreggz.com

Treat the live website as the current business/brand reference, not automatically as the final design or architecture.

Known current positioning includes:
- Farm sourcing from Uttari Village, Kanpur
- 6, 10 and 30 egg packs
- Gym/fitness customers
- Family customers
- B2B customers
- WhatsApp ordering
- Bulk supply for gyms, restaurants and retailers

Do not invent new business claims. Verify factual claims before changing or adding them.

---

# 3. DEVELOPMENT REPOSITORY

**Primary repository:** https://github.com/abhishek21lift-oss/mr.eggz.git

The project previously used **webdevstudios** as a development/base code source.

Do not blindly overwrite the existing Mr. Eggz codebase.

First inspect:
- Repository structure
- Stack
- Components
- Routes
- Assets
- Existing functionality
- Backend/API dependencies
- Current design

---

# 4. BUSINESS MODEL

## D2C

Customer flow should support:

```text
Discover
  ↓
Products
  ↓
Pack Selection
  ↓
Cart
  ↓
Checkout
  ↓
Order
  ↓
Delivery / Status
  ↓
Repeat Order
```

## B2B

Important target customers:
- Gyms
- Fitness studios
- Restaurants
- Retailers
- Other bulk buyers

Potential B2B flow:

```text
Mr. Eggz
   ↓
Business Enquiry
   ↓
Bulk Requirement
   ↓
Supply Discussion
   ↓
Order / Recurring Supply
```

Do not implement complex B2B workflows until requirements are verified.

---

# 5. BRAND POSITIONING

Mr. Eggz should communicate:

- Farm fresh
- Quality
- Freshness
- Trust
- Reliable supply
- Fitness-friendly
- Family-friendly
- Premium but approachable
- Local farm-to-consumer story

Story:

```text
FARM
  ↓
FRESHNESS
  ↓
QUALITY
  ↓
PACKING
  ↓
DELIVERY
  ↓
CUSTOMER
```

The user should quickly understand:
1. What Mr. Eggz sells
2. Why it is different
3. Where the eggs come from
4. Why customers should trust the brand
5. How to order
6. How businesses can buy in bulk

---

# 6. WEBSITE EXPERIENCE

The website should be:

- Premium
- Modern
- Highly visual
- Professional
- Mobile-first
- Fast
- Conversion-focused
- Easy to navigate
- Strongly branded
- Visually distinctive

Avoid:
- Generic template appearance
- Clutter
- Unnecessary UI
- Excessive dark UI
- Fake metrics
- Fake reviews
- Fake products
- Fake business claims
- Decorative features that do not improve conversion

---

# 7. CONVERSION PRIORITY

Primary actions may include:
- Shop now
- Buy eggs
- Add to cart
- Checkout
- WhatsApp
- Bulk enquiry
- Become a business partner
- Contact

CTA hierarchy must be intentional.

Do not add multiple competing CTAs without a reason.

---

# 8. PRODUCT DIRECTION

Current known pack sizes:
- 6 eggs
- 10 eggs
- 30 eggs

Product presentation should clearly communicate:
- Product
- Pack size
- Quantity
- Price
- Availability
- Verified freshness/quality information
- Relevant benefits without unsupported health claims

Never invent products, prices or availability.

---

# 9. WHATSAPP

WhatsApp is an existing customer/business contact and ordering channel.

Use it as a conversion path where appropriate.

Never pretend WhatsApp automation/integration exists unless it is actually configured.

---

# 10. FUTURE BUSINESS PLATFORM

Long-term direction:

```text
CUSTOMER
   ↓
STOREFRONT
   ↓
ORDERS
   ↓
CUSTOMERS
   ↓
INVENTORY
   ↓
B2B
   ↓
DELIVERY
   ↓
ANALYTICS
   ↓
AUTOMATION / AI
```

Potential future capabilities:
- Order management
- Inventory
- Customer management
- B2B management
- Bulk orders
- Delivery management
- Revenue analytics
- Customer analytics
- Marketing
- WhatsApp automation
- AI assistance

These remain future scope unless explicitly activated as the current task.

---

# 11. AI / AUTOMATION

AI must provide genuine business value.

Potential future capabilities:
- Customer insights
- Repeat-order prediction
- B2B lead qualification
- Customer support assistance
- Sales follow-up
- Order intelligence
- Demand forecasting
- Inventory intelligence
- Marketing assistance
- Business analytics

Do not add meaningless AI features merely for appearance.

AI must use real business data.

---

# 12. NO FABRICATED DATA

Never fabricate:
- Sales
- Revenue
- Customers
- Orders
- Reviews
- Ratings
- Delivery statistics
- Farm production statistics
- Partner counts
- Testimonials
- AI metrics
- Product availability
- Prices

If data is unavailable:

`—`

or:

`Data unavailable`

---

# 13. LIVE SITE VS DEVELOPMENT PROJECT

Keep this distinction:

```text
mreggz.com
    =
Current live/business reference

mr.eggz GitHub repo
    =
Development / product implementation
```

They must not be assumed to be identical.

Use the live website as business/brand reference and inspect the repository before implementation decisions.

---

# 14. AUDIT MODE

When the user says:
- Audit
- Analyze
- Investigate
- Review
- Find issues
- Check the website

**DO NOT MODIFY CODE unless explicitly instructed.**

Findings should identify:
- Severity
- Status: Confirmed / Likely / Possible / Unknown
- Evidence
- Exact file
- Function/component
- Route/page
- API
- Database dependency
- Root cause
- Impact
- Recommended fix

Never present assumptions as confirmed evidence.

---

# 15. IMPLEMENTATION MODE

When explicitly told to Fix / Implement / Build / Modify / Redesign / Go:

1. Inspect current implementation.
2. Understand architecture.
3. Identify affected files.
4. Preserve working functionality.
5. Make the smallest safe change.
6. Consider responsive behavior.
7. Consider performance.
8. Consider accessibility.
9. Consider ecommerce/business implications.
10. Verify the result.

---

# 16. NO BLIND REBUILD

Do not rebuild the entire site merely because a different design seems better.

First determine:
- What exists
- What works
- What is broken
- What is missing
- What should be preserved
- What should be redesigned
- What should be removed

Then make a deliberate plan.

---

# 17. ANTI-DRIFT RULE

A temporary task is NOT the master mission.

Examples:

```text
Fix navbar
    ≠
Mr. Eggz mission

Fix checkout
    ≠
Mr. Eggz mission

Redesign homepage
    ≠
Mr. Eggz mission

Add animation
    ≠
Mr. Eggz mission
```

All are subtasks of:

> Build Mr. Eggz into a premium, conversion-focused egg brand + ecommerce + B2B business platform.

---

# 18. CURRENT TASK STATE

## Master Mission

`Build Mr. Eggz into a premium egg brand + D2C ecommerce + B2B/bulk supply + future AI/automation platform.`

## Current Phase

`Planning / Audit / Development`

## Current Task

`Not yet defined`

## Current Subtask

`None`

## Status

`ACTIVE`

---

# 19. COMPLETED

Only mark items after verification.

- [ ] Live website reviewed
- [ ] Development repository reviewed
- [ ] Existing architecture documented
- [ ] Current UI audited
- [ ] Ecommerce flow audited
- [ ] B2B flow audited
- [ ] Mobile UX audited
- [ ] Performance audited
- [ ] SEO audited
- [ ] Backend/API audited
- [ ] Business/admin requirements documented
- [ ] Final product architecture documented

---

# 20. IN PROGRESS

```text
None
```

---

# 21. BLOCKERS

| Blocker | Severity | Impact | Required Action |
|---|---|---|---|
| None | — | — | — |

---

# 22. NEXT ACTION

Exactly ONE primary next action:

```text
Inspect the current Mr. Eggz implementation and compare it with the live mreggz.com experience before making major changes.
```

---

# 23. IMPORTANT DECISIONS

| Decision | Status |
|---|---|
| Mr. Eggz is a premium egg brand | Active |
| Website is conversion-focused | Active |
| D2C is a core channel | Active |
| B2B is a core growth channel | Active |
| Gyms are an important B2B/fitness channel | Active |
| mreggz.com is the current business reference | Active |
| mr.eggz GitHub repo is the development project | Active |
| Do not blindly rebuild existing work | Active |
| Do not fabricate business data | Active |
| AI must provide genuine business value | Active |

---

# 24. DRIFT RECOVERY

If the user says:

> "You are drifting."

Immediately stop and reconstruct:

```text
MR. EGGZ DRIFT RECOVERY

MASTER MISSION:
...

CURRENT TASK:
...

WHAT WE WERE SUPPOSED TO DO:
...

WHAT I STARTED DOING:
...

WHERE I DRIFTED:
...

COMPLETED:
...

BLOCKED:
...

NEXT CORRECT ACTION:
...
```

Then return to the correct task.

---

# 25. VERIFICATION

Never claim:
- Done
- Working
- Fixed
- Production ready

without appropriate verification.

Possible verification:
- Build
- Typecheck
- Lint
- Tests
- Browser/UI verification
- API verification
- Checkout verification
- Mobile verification
- Performance verification
- Deployment verification

If verification is not possible:

`Implementation completed, but verification is pending.`

---

# 26. MASTER RULE

Regardless of conversation length:

> **MR. EGGZ = PREMIUM EGG BRAND + D2C ECOMMERCE + B2B/BULK SUPPLY + FUTURE AI/AUTOMATION**

Always return to the current task under this mission.

Do not let side discussions, temporary bugs, design experiments, or unrelated questions replace the project objective.

---

# 27. LAST UPDATED

`2026-08-25`

Status:

`INITIAL MASTER STATE`
