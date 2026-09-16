import { createServerFn } from "@tanstack/react-start";
import { bookingRequestSchema } from "./booking-schema";

export type BookingResult = { status: "ok" } | { status: "error"; message: string };

/**
 * Stores a booking request. Runs server-side only; the browser never touches
 * the database directly and the table has no public read access.
 */
export const submitBookingRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => input)
  .handler(async ({ data }): Promise<BookingResult> => {
    const parsed = bookingRequestSchema.safeParse(data);
    if (!parsed.success) {
      return {
        status: "error",
        message: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
      };
    }

    const input = parsed.data;

    // Honeypot: silently accept, store nothing.
    if (input.website && input.website.length > 0) {
      return { status: "ok" };
    }

    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { error } = await supabaseAdmin.from("booking_requests").insert({
        request_id: input.requestId,
        full_name: input.fullName,
        email: input.email,
        pickup_date: input.pickupDate,
        return_date: input.returnDate,
        car_category: input.carCategory,
      });

      if (error) {
        // Duplicate request id -> the request is already recorded.
        if (error.code === "23505") return { status: "ok" };
        console.error("booking insert failed", error.code, error.message);
        return {
          status: "error",
          message: "We couldn't send your request just now. Please try again in a moment.",
        };
      }

      return { status: "ok" };
    } catch (err) {
      console.error("booking request failed", err);
      return {
        status: "error",
        message: "We couldn't send your request just now. Please try again in a moment.",
      };
    }
  });
