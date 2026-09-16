import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BadgeEuro,
  CalendarCheck,
  CarFront,
  CheckCircle2,
  CreditCard,
  Fuel,
  LifeBuoy,
  MailCheck,
  PlaneLanding,
  ShieldCheck,
  UserPlus,
} from "lucide-react";

import heroImage from "@/assets/hero-kos.jpg";
import { Header } from "@/components/site/Header";
import { BookingForm } from "@/components/site/BookingForm";
import { FLEET } from "@/lib/fleet";
import type { CarCategory } from "@/lib/booking-schema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TITLE = "Meltemi Rentals Kos — Car hire from €35/day, all-inclusive";
const DESCRIPTION =
  "Rent a car in Kos with everything included: zero-excess insurance, second driver, airport pickup, full-to-full fuel and no credit-card deposit. Small cars from €35/day in July.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

const INCLUSIONS = [
  "Full insurance, zero excess",
  "Second driver included",
  "Airport pickup & delivery",
  "Full-to-full fuel",
  "24/7 support phone",
  "No credit-card deposit",
];

function LandingPage() {
  const [category, setCategory] = useState<CarCategory>("economy");

  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />

      <main>
        {/* 2 — Hero */}
        <section className="relative overflow-hidden bg-sand">
          <div className="section-x grid gap-8 py-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16">
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                <ShieldCheck aria-hidden="true" className="size-4" />
                Kos, Greece
              </p>
              <h1 className="mt-4 text-4xl leading-[1.1] font-semibold text-foreground sm:text-5xl">
                Know what you'll pay before you land.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                July small car from{" "}
                <span className="font-semibold text-foreground">€35/day</span> — insurance, second
                driver and airport pickup already in the price.
              </p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {INCLUSIONS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-base text-foreground">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-seafoam-deep" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#request"
                  className="inline-flex h-13 items-center justify-center rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground transition-colors hover:bg-aegean"
                >
                  Request your car
                </a>
                <a
                  href="#fleet"
                  className="inline-flex h-13 items-center justify-center rounded-full border border-input bg-card px-7 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  See the fleet
                </a>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                No card deposit · Airport pickup included
              </p>
            </div>

            <div className="min-w-0">
              <img
                src={heroImage}
                alt="A small white rental car parked on a coastal road above a turquoise bay on a Greek island"
                width={1600}
                height={1008}
                fetchPriority="high"
                className="aspect-[16/10] w-full rounded-2xl object-cover shadow-card"
              />
            </div>
          </div>
        </section>

        {/* 3 — Price clarity */}
        <section id="pricing" className="scroll-mt-20 py-14 sm:py-16">
          <div className="section-x">
            <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
              Compare the total, not just the headline.
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Advertised daily rates on the island start as low as €8/day. That number can be genuine —
              but it describes a starting rate, not necessarily the total you pay. Inclusions and terms
              differ from supplier to supplier.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold">What a headline rate may leave out</h3>
                <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                  <li>Insurance excess, or an extra daily fee to reduce it</li>
                  <li>A card deposit blocked on your credit card</li>
                  <li>Airport pickup, delivery or out-of-hours fees</li>
                  <li>Fuel terms other than full-to-full</li>
                  <li>Charges for a second driver</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-seafoam-deep/40 bg-accent p-6 text-accent-foreground shadow-card">
                <h3 className="text-lg font-semibold">What €35/day in July includes here</h3>
                <ul className="mt-4 space-y-2 text-base">
                  {INCLUSIONS.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-base font-semibold">What you see is what you pay.</p>
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-sm text-muted-foreground">
              Rates and inclusions vary by supplier, season and vehicle. Before you book anywhere, read
              the full terms and compare the total price for your dates.
            </p>
          </div>
        </section>

        {/* 4 — Three benefits */}
        <section className="bg-sand py-14 sm:py-16">
          <div className="section-x">
            <h2 className="text-3xl font-semibold sm:text-4xl">Three things that change your total</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Zero-excess cover",
                  text: "Full insurance with zero excess is included. No upsell at the desk, no separate daily waiver.",
                },
                {
                  icon: PlaneLanding,
                  title: "Airport pickup & delivery",
                  text: "We meet you at Kos airport and take the car back there — included, not an add-on fee.",
                },
                {
                  icon: CreditCard,
                  title: "No credit-card deposit",
                  text: "Nothing blocked on your card while you're on holiday. You pay the agreed price, nothing else.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <Icon aria-hidden="true" className="size-8 text-primary" />
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-base text-muted-foreground">
              A second driver is included at no extra cost, and fuel is full-to-full — you get the car
              full and bring it back full.
            </p>
          </div>
        </section>

        {/* 5 — Fleet */}
        <section id="fleet" className="scroll-mt-20 py-14 sm:py-16">
          <div className="section-x">
            <h2 className="text-3xl font-semibold sm:text-4xl">Our fleet</h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Every category comes with the same inclusions. Prices below are per day in July.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FLEET.map((car) => (
                <article
                  key={car.category}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card"
                >
                  <img
                    src={car.image}
                    alt={car.alt}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-sm font-semibold tracking-wide text-seafoam-deep uppercase">
                      {car.categoryLabel}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold">{car.name}</h3>
                    <p className="mt-2 text-2xl font-semibold text-foreground">€{car.price}/day</p>
                    <p className="text-sm text-muted-foreground">{car.priceLabel}</p>
                    <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                      <li>{car.seats}</li>
                      <li>{car.luggage}</li>
                      <li>{car.transmission}</li>
                    </ul>
                    <a
                      href="#request"
                      onClick={() => setCategory(car.category)}
                      className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-aegean"
                    >
                      Request the {car.name}
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Non-economy rates are shown as example July prices and do not represent guaranteed
              availability. We confirm the exact car and price by email after your request.
            </p>
          </div>
        </section>

        {/* 6 — Trust strip */}
        <section className="bg-primary py-12 text-primary-foreground">
          <div className="section-x">
            <h2 className="text-2xl font-semibold sm:text-3xl">Included with every rental</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: ShieldCheck, label: "Full insurance, zero excess" },
                { icon: LifeBuoy, label: "24/7 support phone" },
                { icon: Fuel, label: "Full-to-full fuel policy" },
                { icon: UserPlus, label: "Second driver included" },
                { icon: PlaneLanding, label: "Airport delivery & collection" },
                { icon: CreditCard, label: "No credit-card deposit" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-base">
                  <Icon aria-hidden="true" className="size-6 shrink-0" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7 — Process */}
        <section id="how-it-works" className="scroll-mt-20 py-14 sm:py-16">
          <div className="section-x">
            <h2 className="text-3xl font-semibold sm:text-4xl">How it works</h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              This is a booking request, not an instant booking engine. Nothing is charged and nothing
              is reserved until we confirm with you.
            </p>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { icon: CalendarCheck, step: "1", title: "Send your dates", text: "Tell us when you arrive and when you leave." },
                { icon: CarFront, step: "2", title: "Choose your car", text: "Pick a category — the price you see includes everything." },
                { icon: MailCheck, step: "3", title: "Get confirmation", text: "We reply by email with availability, the total price and pickup details." },
              ].map(({ icon: Icon, step, title, text }) => (
                <li key={step} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                      {step}
                    </span>
                    <Icon aria-hidden="true" className="size-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 8 — FAQ */}
        <section id="faq" className="scroll-mt-20 bg-sand py-14 sm:py-16">
          <div className="section-x max-w-3xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">Frequently asked questions</h2>
            <Accordion type="single" collapsible className="mt-6">
              {[
                {
                  q: "What does the insurance cover?",
                  a: "Full insurance with zero excess is included in the price. There is no separate daily waiver to buy and no excess to pay.",
                },
                {
                  q: "Do you block a deposit on my credit card?",
                  a: "No. There is no credit-card deposit. Nothing is blocked on your card.",
                },
                {
                  q: "Is airport pickup included?",
                  a: "Yes. Airport pickup and delivery in Kos are included in the rate — we bring the car to you and collect it again.",
                },
                {
                  q: "Can someone else drive the car?",
                  a: "Yes. A second driver is included at no extra cost.",
                },
                {
                  q: "What happens after I send the form?",
                  a: "Your form is a request, not an instant reservation. We receive your dates and chosen category and reply by email to confirm availability, the total price and pickup arrangements. Our 24/7 support phone is available throughout your rental.",
                },
                {
                  q: "How does the fuel policy work?",
                  a: "Full-to-full. You receive the car with a full tank and return it full, so you only pay for the fuel you actually use.",
                },
              ].map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 9 — Conversion */}
        <section id="request" className="scroll-mt-20 py-14 sm:py-16">
          <div className="section-x grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="min-w-0">
              <h2 className="text-3xl font-semibold sm:text-4xl">Request your car</h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Send your dates and we'll come back by email with availability and the full price —
                insurance, second driver and airport pickup already included.
              </p>
              <ul className="mt-6 space-y-2">
                {INCLUSIONS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-base">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-seafoam-deep" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-center gap-2 text-base font-semibold">
                <BadgeEuro aria-hidden="true" className="size-5 text-primary" />
                What you see is what you pay.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-card sm:p-6">
              <BookingForm category={category} onCategoryChange={setCategory} />
            </div>
          </div>
        </section>
      </main>

      {/* 10 — Footer */}
      <footer className="border-t border-border bg-sand py-10">
        <div className="section-x grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-display text-lg font-semibold">Meltemi Rentals</p>
            <p className="mt-2 text-base text-muted-foreground">Kos, Greece</p>
          </div>
          <div className="text-base text-muted-foreground">
            <p>
              <a className="hover:text-foreground" href="mailto:hello@meltemi-rentals.example">
                hello@meltemi-rentals.example
              </a>
            </p>
            <p className="mt-1">
              <a className="hover:text-foreground" href="tel:+302242000000">
                +30 22420 00000
              </a>
            </p>
          </div>
        </div>
        <p className="section-x mt-8 text-sm text-muted-foreground">
          Assessment demo — contact details are placeholders.
        </p>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="sticky bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <a
          href="#request"
          className="flex h-12 items-center justify-center rounded-full bg-primary px-5 text-base font-semibold text-primary-foreground"
        >
          Request your car — from €35/day
        </a>
      </div>
    </div>
  );
}
