import { z } from "zod";

export const CAR_CATEGORIES = ["economy", "compact", "automatic", "suv"] as const;
export type CarCategory = (typeof CAR_CATEGORIES)[number];

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Use a valid date")
  .refine((value) => !Number.isNaN(Date.parse(`${value}T00:00:00Z`)), "Use a valid date");

export const bookingRequestSchema = z
  .object({
    requestId: z.string().uuid(),
    fullName: z.string().trim().min(2, "Please enter your full name").max(120),
    email: z
      .string()
      .trim()
      .min(5)
      .max(254)
      .email("Please enter a valid email address"),
    pickupDate: isoDate,
    returnDate: isoDate,
    carCategory: z.enum(CAR_CATEGORIES, { message: "Choose a car category" }),
    website: z.string().max(0).optional().default(""),
  })
  .refine((data) => data.returnDate >= data.pickupDate, {
    message: "Return date must be on or after the pick-up date",
    path: ["returnDate"],
  });

export type BookingRequestInput = z.infer<typeof bookingRequestSchema>;
