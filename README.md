##  Meltemi Rentals 
Meltemi Rentals is a small car rental company based in Kos, Greece, with a fleet of 12 vehicles. It currently accepts bookings only by phone and needs a simple online presence to help potential customers discover the business and submit rental requests. The landing page is designed for international visitors searching for car hire in Kos. Its purpose is not to function as an instant booking or payment platform, but to turn online interest into clear, low-friction booking enquiries. It presents the company’s value proposition, rental conditions, vehicle categories and key inclusions, while guiding visitors toward submitting their preferred dates and vehicle category.

The page focuses on transparent pricing, practical information and trust-building elements such as zero-excess coverage, airport pickup and delivery, and no card deposit. Its primary goal is to generate qualified booking requests from visitors who are looking to rent a car during their stay in Kos.

## Images of the landing page ## 

<img width="1797" height="636" alt="Screenshot 2026-09-16 atMeltemi Rentals Kos — Car hire from €35_day all-inclusive" src="https://github.com/user-attachments/assets/72d10d3b-0f9d-4047-8df7-18173d6122a1"/> 

<img width="1758" height="625" alt="Screenshot 2026-09-16 at 17-35-51 Meltemi Rentals Kos — Car hire from €35_day all-inclusive" src="https://github.com/user-attachments/assets/df7edbe2-4647-49fd-ad7a-5c54e8c9486d"/>

<img width="1799" height="455" alt="Screenshot 2026-09-16 at 17-36-03 Meltemi Rentals Kos — Car hire from €35_day all-inclusive" src="https://github.com/user-attachments/assets/35af270e-1885-4212-bf35-6381db1ce817"/>

<img width="1783" height="687" alt="Screenshot 2026-09-16 at 17-36-20 Meltemi Rentals Kos — Car hire from €35_day all-inclusive" src="https://github.com/user-attachments/assets/3509a9cb-2532-47cf-9017-c7d85a6c05e2"/>

<img width="1678" height="629" alt="Screenshot 2026-09-16 at 17-36-31 Meltemi Rentals Kos — Car hire from €35_day all-inclusive" src="https://github.com/user-attachments/assets/c70edc09-0150-47d5-9b9b-8a08c78d346b"/>

<img width="1714" height="505" alt="Screenshot 2026-09-16 at 17-37-06 Meltemi Rentals Kos — Car hire from €35_day all-inclusive" src="https://github.com/user-attachments/assets/8d847e0f-9723-4458-b323-b0d19e97c717"/>

<img width="1732" height="617" alt="Screenshot 2026-09-16 at 17-37-19 Meltemi Rentals Kos — Car hire from €35_day all-inclusive" src="https://github.com/user-attachments/assets/4fed8b39-afb1-4c7e-bdaf-3676afef5b87"/>

<img width="1840" height="126" alt="Screenshot 2026-09-16 at 17-37-38 Meltemi Rentals Kos — Car hire from €35_day all-inclusive" src="https://github.com/user-attachments/assets/28ff304a-6bbf-4c28-a2ee-06022a961e01"/>


# Meltemi Rentals Preview
https://meltemi-rentals.lovable.app/


## Visitor journey and conversion decisions

1. **Hero:** establishes the transparent €35/day July proposition and repeats the most important inclusions before asking for a commitment.
2. **Price clarity:** educates visitors to compare the total rather than only a headline rate, without attacking another supplier.
3. **Risk reduction:** uses three concrete decision drivers — zero-excess cover, airport pickup/delivery and no card deposit.
4. **Fleet:** presents four fictional but clearly labelled vehicle categories. Each CTA preselects the requested category and takes the visitor to the form.
5. **Objection handling and conversion:** inclusion strip, three-step process and concise FAQ answer common concerns before the final request form.

## Implementation

- React 19, TypeScript and TanStack Start
- Tailwind CSS and accessible UI components
- Supabase/PostgreSQL for booking-request persistence
- Zod validation in a server-side TanStack Start function
- Responsive, semantic HTML with visible labels, keyboard focus states and accessible validation feedback

## Booking request, validation and data security

The form requests only full name, email, pick-up date, return date and vehicle category. It is deliberately a **request flow**, not a payment or instant-booking engine.

- Client-side validation covers required fields, email format and return date after pick-up date.
- The same data is validated server-side before insertion.
- A honeypot field and opaque request ID reduce basic spam and accidental duplicate submissions.
- The browser never reads or writes the `booking_requests` table directly.
- Row Level Security is enabled; anonymous and authenticated roles have no public read or insert privileges.
- The trusted server-side client performs the insert, with no secrets exposed in client code.
- A database trigger rejects pick-up dates in the past, even if browser validation is bypassed.
- Raw database errors are not shown to visitors.

## QA completed

- Tested valid request submission and real success state on desktop and mobile.
- Confirmed persistence in the database.
- Tested missing required fields, invalid email input and invalid date order.
- Verified fleet CTAs preselect the intended vehicle category.
- Checked mobile scrolling, CTA usability and desktop layout; the live page loaded in approximately three seconds in a real mobile test.


## Scope and limitations
This is a fictional assessment implementation. Contact details and vehicle availability are placeholders, and quoted non-economy prices are example July prices.
It intentionally excludes payment, an inventory/availability engine, email notifications, an admin dashboard, analytics and tracking scripts. 
Those would be the next production steps after validating the conversion flow.
