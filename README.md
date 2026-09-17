##  Meltemi Rentals 
Meltemi Rentals is a small car rental company based in Kos, Greece, with a fleet of 12 vehicles. It currently accepts bookings only by phone and needs a simple online presence to help potential customers discover the business and submit rental requests. The landing page is designed for international visitors searching for car hire in Kos. Its purpose is not to function as an instant booking or payment platform, but to turn online interest into clear, low-friction booking enquiries. It presents the company’s value proposition, rental conditions, vehicle categories and key inclusions, while guiding visitors toward submitting their preferred dates and vehicle category.

The page focuses on transparent pricing, practical information and trust-building elements such as zero-excess coverage, airport pickup and delivery, and no card deposit. Its primary goal is to generate qualified booking requests from visitors who are looking to rent a car during their stay in Kos.

## Images of the landing page ## 

<img width="1834" height="639" alt="Meltemi Rentals Kos — Car hire from €35_day all-inclusive home page" src="https://github.com/user-attachments/assets/6569734a-2356-47e6-8cf9-4860a3160a20" />

<img width="1606" height="626" alt="Meltemi Rentals Kos — Car hire from €35_day all-inclusive prise comparison" src="https://github.com/user-attachments/assets/89080d68-6a2c-4566-8bfd-ad8cf3f68b51" />

<img width="1766" height="427" alt="Meltemi Rentals Kos — Car hire from €35_day all-inclusive total detials" src="https://github.com/user-attachments/assets/db9dc790-0a00-4e31-8028-39f8b858113c" /> 

<img width="1772" height="722" alt="Meltemi Rentals Kos — Car hire from €35_day all-inclusive fleet cars" src="https://github.com/user-attachments/assets/a9801d53-ced1-4d8f-ad78-b2cb945708e6" /> 

<img width="1853" height="664" alt="Meltemi Rentals Kos — Car hire from €35_day all-inclusive How it works" src="https://github.com/user-attachments/assets/e17c344a-14b9-4279-adf0-8c0ab6dca233" />

<img width="1853" height="757" alt="Meltemi Rentals Kos — Car hire from €35_day all-inclusive booking form" src="https://github.com/user-attachments/assets/c7a8d049-5e40-447f-bd2d-60cf94a7b5f5" />

<img width="1853" height="569" alt="Meltemi Rentals Kos — Car hire from €35_day all-inclusive faq section" src="https://github.com/user-attachments/assets/7e9c674d-55b4-46de-a52f-459b0e4fa8aa" />

<img width="1852" height="558" alt="Meltemi Rentals Kos — Car hire from €35_day all-inclusive footer" src="https://github.com/user-attachments/assets/223df161-3f8a-412d-b3f3-d6a911121e42" />

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
