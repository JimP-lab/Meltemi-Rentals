import { useId, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitBookingRequest } from "@/lib/booking.functions";
import { CAR_CATEGORIES, type CarCategory } from "@/lib/booking-schema";
import { FLEET } from "@/lib/fleet";

type Errors = Partial<Record<"fullName" | "email" | "pickupDate" | "returnDate" | "carCategory" | "form", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

function today() {
  return new Date().toISOString().slice(0, 10);
}

function newRequestId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random()}`;
}

const fieldClass =
  "h-12 w-full rounded-lg border border-input bg-card px-3 text-base text-foreground placeholder:text-muted-foreground";

export function BookingForm({
  category,
  onCategoryChange,
}: {
  category: CarCategory;
  onCategoryChange: (c: CarCategory) => void;
}) {
  const uid = useId();
  const submit = useServerFn(submitBookingRequest);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const requestIdRef = useRef<string>(newRequestId());
  const successRef = useRef<HTMLDivElement | null>(null);

  function validate(): Errors {
    const next: Errors = {};
    if (fullName.trim().length < 2) next.fullName = "Please enter your full name.";
    if (!emailPattern.test(email.trim())) next.email = "Please enter a valid email address.";
    if (!pickupDate) next.pickupDate = "Please choose a pick-up date.";
    if (!returnDate) next.returnDate = "Please choose a return date.";
    if (pickupDate && returnDate && returnDate < pickupDate)
      next.returnDate = "Return date must be on or after the pick-up date.";
    if (!CAR_CATEGORIES.includes(category)) next.carCategory = "Please choose a car category.";
    return next;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending || done) return;

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setPending(true);
    try {
      const result = await submit({
        data: {
          requestId: requestIdRef.current,
          fullName: fullName.trim(),
          email: email.trim(),
          pickupDate,
          returnDate,
          carCategory: category,
          website,
        },
      });

      if (result.status === "ok") {
        setDone(true);
        window.setTimeout(() => successRef.current?.focus(), 30);
      } else {
        setErrors({ form: result.message });
      }
    } catch {
      setErrors({
        form: "We couldn't send your request just now. Please check your connection and try again.",
      });
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-seafoam-deep/40 bg-accent p-6 text-accent-foreground"
      >
        <h3 className="text-xl font-semibold">Request received</h3>
        <p className="mt-2 text-base">
          Thank you, {fullName.trim().split(" ")[0]}. This is a booking <strong>request</strong>, not a
          confirmed reservation. Meltemi Rentals will follow up by email at{" "}
          <span className="font-medium">{email.trim()}</span> to confirm availability and the full price
          — with no hidden extras.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor={`${uid}-name`} className="mb-1.5 block text-sm font-semibold">
          Full name
        </label>
        <input
          id={`${uid}-name`}
          name="fullName"
          type="text"
          autoComplete="name"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? `${uid}-name-error` : undefined}
          className={fieldClass}
        />
        {errors.fullName && (
          <p id={`${uid}-name-error`} className="mt-1 text-sm text-destructive">
            {errors.fullName}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${uid}-email`} className="mb-1.5 block text-sm font-semibold">
          Email
        </label>
        <input
          id={`${uid}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${uid}-email-error` : undefined}
          className={fieldClass}
        />
        {errors.email && (
          <p id={`${uid}-email-error`} className="mt-1 text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-pickup`} className="mb-1.5 block text-sm font-semibold">
            Pick-up date
          </label>
          <input
            id={`${uid}-pickup`}
            name="pickupDate"
            type="date"
            required
            min={today()}
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            aria-invalid={Boolean(errors.pickupDate)}
            aria-describedby={errors.pickupDate ? `${uid}-pickup-error` : undefined}
            className={fieldClass}
          />
          {errors.pickupDate && (
            <p id={`${uid}-pickup-error`} className="mt-1 text-sm text-destructive">
              {errors.pickupDate}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${uid}-return`} className="mb-1.5 block text-sm font-semibold">
            Return date
          </label>
          <input
            id={`${uid}-return`}
            name="returnDate"
            type="date"
            required
            min={pickupDate || today()}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            aria-invalid={Boolean(errors.returnDate)}
            aria-describedby={errors.returnDate ? `${uid}-return-error` : undefined}
            className={fieldClass}
          />
          {errors.returnDate && (
            <p id={`${uid}-return-error`} className="mt-1 text-sm text-destructive">
              {errors.returnDate}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor={`${uid}-category`} className="mb-1.5 block text-sm font-semibold">
          Car category
        </label>
        <select
          id={`${uid}-category`}
          name="carCategory"
          required
          value={category}
          onChange={(e) => onCategoryChange(e.target.value as CarCategory)}
          aria-invalid={Boolean(errors.carCategory)}
          className={fieldClass}
        >
          {FLEET.map((car) => (
            <option key={car.category} value={car.category}>
              {car.categoryLabel} — {car.name}
            </option>
          ))}
        </select>
        {errors.carCategory && <p className="mt-1 text-sm text-destructive">{errors.carCategory}</p>}
      </div>

      {/* Honeypot: hidden from users, never stored. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${uid}-website`}>Website</label>
        <input
          id={`${uid}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {errors.form && (
          <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{errors.form}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-13 w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-aegean disabled:opacity-60"
      >
        {pending ? "Sending request…" : "Send booking request"}
      </button>

      <p className="text-center text-sm text-muted-foreground">
        No payment, no card details. We reply by email to confirm availability and the full price.
      </p>
    </form>
  );
}
