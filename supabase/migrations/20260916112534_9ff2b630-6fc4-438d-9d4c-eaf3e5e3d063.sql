CREATE TYPE public.car_category AS ENUM ('economy','compact','automatic','suv');

CREATE TABLE public.booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id uuid NOT NULL UNIQUE,
  full_name text NOT NULL,
  email text NOT NULL,
  pickup_date date NOT NULL,
  return_date date NOT NULL,
  car_category public.car_category NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT booking_requests_dates_valid CHECK (return_date >= pickup_date),
  CONSTRAINT booking_requests_name_len CHECK (char_length(full_name) BETWEEN 2 AND 120),
  CONSTRAINT booking_requests_email_len CHECK (char_length(email) BETWEEN 5 AND 254)
);

GRANT ALL ON public.booking_requests TO service_role;

ALTER TABLE public.booking_requests ENABLE ROW LEVEL SECURITY;