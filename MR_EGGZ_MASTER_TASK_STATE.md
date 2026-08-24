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

# 3. DEVELOPMENT REPOSITORY
**Primary repository:** https://github.com/abhishek21lift-oss/mr.eggz.git

The project previously used **webdevstudios** as a development/base code source.

Do not blindly overwrite the existing Mr. Eggz codebase.

First inspect repository structure, stack, components, routes, assets, existing functionality, backend/API dependencies and current design.

# 4. BUSINESS MODEL
## D2C
Discover → Products → Pack Selection → Cart → Checkout → Order → Delivery / Status → Repeat Order

## B2B
Mr. Eggz → Business Enquiry → Bulk Requirement → Supply Discussion → Order / Recurring Supply

Do not implement complex B2B workflows until requirements are verified.

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

Story: FARM → FRESHNESS → QUALITY → PACKING → DELIVERY → CUSTOMER

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

Avoid generic templates, clutter, unnecessary UI, excessive dark UI, fake metrics/reviews/products/business claims and decorative features without conversion value.

# 7. CONVERSION PRIORITY
Primary actions may include Shop now, Buy eggs, Add to cart, Checkout, WhatsApp, Bulk enquiry, Become a business partner, Contact.

CTA hierarchy must be intentional.

# 8. PRODUCT DIRECTION
Current known pack sizes:
- 6 eggs
- 10 eggs
- 30 eggs

Never invent products, prices or availability.

# 9. WHATSAPP
WhatsApp is an existing customer/business contact and ordering channel.
Never pretend WhatsApp automation/integration exists unless actually configured.

# 10. FUTURE BUSINESS PLATFORM
Customer → Storefront → Orders → Customers → Inventory → B2B → Delivery → Analytics → Automation / AI

Future capabilities remain future scope unless explicitly activated.

# 11. AI / AUTOMATION
AI must provide genuine business value and use real business data.

# 12. NO FABRICATED DATA
Never fabricate sales, revenue, customers, orders, reviews, ratings, delivery statistics, farm production statistics, partner counts, testimonials, AI metrics, product availability or prices.

# 13. LIVE SITE VS DEVELOPMENT PROJECT
mreggz.com = current live/business reference
mr.eggz GitHub repo = development/product implementation

They must not be assumed identical.

# 14. AUDIT MODE
When the user says Audit / Analyze / Investigate / Review / Find issues / Check the website: do not modify code unless explicitly instructed.

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

# 16. NO BLIND REBUILD
Do not rebuild the entire site merely because a different design seems better. First determine what exists, works, is broken, missing, preserved, redesigned and removed.

# 17. ANTI-DRIFT RULE
A temporary task is NOT the master mission. All subtasks remain under:
**Build Mr. Eggz into a premium, conversion-focused egg brand + ecommerce + B2B business platform.**

# 18. CURRENT TASK STATE
## Master Mission
`Build Mr. Eggz into a premium egg brand + D2C ecommerce + B2B/bulk supply + future AI/automation platform.`

## Current Phase
`Responsive UX / Premium navigation implementation`

## Current Task
`Implement orientation-aware premium navigation based on the approved reference: portrait uses a sidebar/drawer; landscape uses the same navigation buttons in a top bar.`

## Current Subtask
`Integrate responsive navigation into the landing page and preserve existing D2C/B2B flows.`

## Status
`ACTIVE — verification pending`

# 19. COMPLETED / VERIFIED
- [x] Central product catalogue created
- [x] Landing page connected to central catalogue
- [x] Interactive 3D egg hero implemented
- [x] B2B route created
- [x] B2B enquiry form connected to enquiry domain model
- [x] Orientation-aware navigation component created
- [x] Orientation-aware navigation styles added
- [x] Navigation integrated into landing page

These items are implementation-complete; the latest navigation work still requires browser/live verification.

# 20. IN PROGRESS
```text
Browser/live verification of the new responsive navigation:
- portrait drawer/sidebar behavior
- landscape top-bar behavior
- navigation anchors
- mobile touch usability
- no overlap with 3D hero
```

# 21. BLOCKERS
| Blocker | Severity | Impact | Required Action |
|---|---|---|---|
| Live visual verification not yet performed for latest navigation | Medium | Cannot mark navigation DONE | Verify deployed page in portrait and landscape |

# 22. NEXT ACTION
Exactly ONE primary next action:
```text
Verify the deployed landing page in both portrait and landscape orientations, then fix any visual/interaction issues before marking the navigation complete.
```

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
| Portrait navigation uses a sidebar/drawer | Active |
| Landscape navigation uses a top bar | Active |

# 24. DRIFT RECOVERY
If the user says “You are drifting”, immediately stop and reconstruct the master mission, current task, intended work, drift, completed, blocked and next correct action, then return to the correct task.

# 25. VERIFICATION
Never claim Done, Working, Fixed or Production ready without appropriate verification. Possible verification includes build, typecheck, lint, tests, browser/UI verification, API verification, checkout verification, mobile verification, performance verification and deployment verification.

If verification is not possible: `Implementation completed, but verification is pending.`

# 26. MASTER RULE
**MR. EGGZ = PREMIUM EGG BRAND + D2C ECOMMERCE + B2B/BULK SUPPLY + FUTURE AI/AUTOMATION**

Always return to the current task under this mission.

# 27. LAST UPDATED
`2026-08-25`

Status:
`ACTIVE — RESPONSIVE NAVIGATION IMPLEMENTATION`
