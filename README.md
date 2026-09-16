# Meltemi Magic

Build and implement a polished, production-oriented single-page landing page for a fictional rent-a-car business named "Meltemi Rentals" in Kos, Greece. This is a real hiring assessment for a local web/automation agency, so deliver working implementation, not a mock-up or plan.

GOAL
The page’s single conversion action is a booking request. The visitor is a price-conscious international tourist on mobile, comparing multiple rental companies and worried about hidden charges, insurance, card deposits, and airport pickup. The design should make them understand within seconds that a €35/day July small-car rate is a transparent, all-inclusive proposition—not merely a headline price.

FACTS YOU MAY STATE
€35/day in July for a small car includes:
- full insurance with zero excess
- a second driver
- airport pickup and delivery
- full-to-full fuel policy
- 24/7 support phone
- no credit-card deposit
- what you see is what you pay
A nearby supplier’s advertised rate can be as low as €8/day, but their total can vary because insurance, deposits, airport fees, and fuel terms may differ. Do NOT name competitors, attack them, or claim every low price turns into a particular final cost. Use an educational “compare the total, not just the headline” message. State tactfully that inclusions and terms vary by supplier.

VISITOR JOURNEY / SECTIONS
Use this intentional order:
1) sticky, mobile-friendly header with simple wordmark, minimal nav anchors and a prominent “Request your car” CTA
2) visually strong hero—Mediterranean/Kos, but original—not copied from any reference. Use a compact, clear value proposition such as “Know what you’ll pay before you land.” Show “July small car from €35/day” alongside the inclusions. Use clear CTA and trust microcopy such as “No card deposit · Airport pickup included.”
3) immediate price clarity: explain in an elegant compact “headline rate vs total cost” explainer. It must educate without using accusatory language. Include a small qualification that rates/inclusions vary and travelers should compare full terms.
4) exactly three high-impact benefit cards: zero-excess cover, airport pickup/delivery, no credit-card deposit. Mention the second driver and fuel policy naturally in this section or close by.
5) fleet: 4 factual-looking fictional category cards with strong image hierarchy and scannable key details. Include:
   - Economy — “Aegean Mini” — €35/day in July
   - Compact — “Island Compact” — example July price €44/day
   - Automatic — “Dodecanese Auto” — example July price €52/day
   - Family SUV — “Kos Explorer” — example July price €69/day
   Clearly label non-economy rates as “example July price” and do not imply real availability. Every card needs a CTA that preselects its category and scrolls to the form.
6) trust/risk-reduction strip: full insurance with zero excess, 24/7 support, full-to-full fuel, second driver, airport delivery, no credit-card deposit
7) simple three-step process: send dates → choose car → receive confirmation/follow-up. Explain this is a request, not an instant booking engine.
8) concise accessible FAQ that answers insurance, deposit, airport pickup, second driver, request process. Do not invent driver age, cancellation, documents, or other policies.
9) strong final conversion section with booking-request form and repeated transparent-pricing message
10) footer with fictional demo contact details: “Kos, Greece”, “hello@meltemi-rentals.example”, “+30 22420 00000” and a discreet “Assessment demo — contact details are placeholders.” No claims, testimonials, ratings, reviews, or invented social proof.

DESIGN
- Modern, sunlit Mediterranean aesthetic. Original visual identity: warm sand, deep Aegean blue, seafoam/mint accents, white backgrounds, crisp deep navy typography. It should be trustworthy, clean, tourism-oriented, well-designed but not a luxury showcase.
- Avoid generic AI-webpage feel, glassmorphism overload, gratuitous gradients, motion, carousels, video backgrounds, and clutter.
- Mobile is primary (about 80% usage): readable type, large touch targets, compact scrolling, form fields with comfortable height, no horizontal overflow or layout shifts. Desktop should feel deliberately composed rather than stretched.
- Use original/royalty-free vehicle and Kos imagery only; avoid copying reference websites. Keep image sizes sane and use lazy loading below the fold. Use consistent aspect ratios and descriptive alt text.
- Support keyboard navigation, focus states, semantic HTML, visible labels, error status accessible via aria-live, appropriate heading hierarchy, sufficient contrast.
- Add a small, thoughtful mobile sticky bottom request CTA only if it doesn’t obstruct form controls.

BOOKING REQUEST FORM — MUST BE REAL
Fields:
- Full name
- Email
- Pick-up date
- Return date
- Car category
Include clearly labeled optional? No: only these required fields, plus a visually hidden honeypot field (do not store it). Do not ask for phone or payment details.
Implement actual secure persistence using the project’s Lovable Cloud/Supabase backend:
- create a private booking_requests table that stores only full_name, email, pickup_date, return_date, car_category, created_at, and an opaque client request ID / duplicate guard where appropriate
- do not expose booking requests or provide any public read/list/admin interface
- submit through a server-side edge function or other backend endpoint, not direct client database access
- server-side validation must validate required name, sensible email format, ISO date strings, return >= pickup, and category against the supported enum
- reject/ignore honeypot submissions safely, return a controlled response without exposing internal details
- use a public client only for invoking the secured endpoint; never put secrets/private keys in browser code
- minimize public database access and enable RLS / equivalent least-privilege configuration. No public SELECT.
- prevent accidental repeated submission with disabled state and a short client request guard; handle already-submitted duplicate IDs gracefully.
- on success, show a genuine accessible success state that confirms it is a request and says Meltemi will follow up; on failure, give a safe useful retry state without raw backend errors.
- include clear inline validation. Test at least missing fields, invalid email, return-before-pickup, valid submit / persistence, and duplicate submission.

ENGINEERING
- Implement page title and concise meta description. No blog, auth, payments, CMS, booking engine, multilingual content, analytics, or unneeded integrations.
- No third-party tracking scripts. No API keys/secrets in client files. Avoid unsafe HTML injection and unnecessary dependencies.
- Make simple components, readable source, and good loading behavior. Optimize image loading and avoid huge resources.
- Build the complete page and backend now. Do not stop after a plan.
- At the end, inspect your own result for mobile/desktop layout issues, spelling, CTA destinations, form validation/error/success behavior, database persistence, security exposures, and performance regressions. Fix concrete issues you find.

The source should make a reviewer see good judgment: conversion/clarity/functionality first, visual polish second, scope discipline throughout.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://meltemi-rentals-kos.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/361dcdb4-4c26-45c1-8219-ed6c30324514).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
