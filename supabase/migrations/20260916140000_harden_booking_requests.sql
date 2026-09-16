-- Keep booking requests server-only and preserve RLS as the final protection.
ALTER TABLE public.booking_requests ENABLE ROW LEVEL SECURITY;

REVOKE ALL PRIVILEGES ON TABLE public.booking_requests FROM anon, authenticated;
REVOKE ALL PRIVILEGES ON TYPE public.car_category FROM anon, authenticated;

GRANT USAGE ON TYPE public.car_category TO service_role;
GRANT ALL PRIVILEGES ON TABLE public.booking_requests TO service_role;

-- Reject invalid historic pick-up dates even if browser validation is bypassed.
CREATE OR REPLACE FUNCTION public.enforce_booking_request_dates()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.pickup_date < CURRENT_DATE THEN
    RAISE EXCEPTION 'Pick-up date must not be in the past'
      USING ERRCODE = '22007';
  END IF;

  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.enforce_booking_request_dates() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.enforce_booking_request_dates() TO service_role;

DROP TRIGGER IF EXISTS booking_requests_reject_past_pickup
  ON public.booking_requests;

CREATE TRIGGER booking_requests_reject_past_pickup
BEFORE INSERT OR UPDATE ON public.booking_requests
FOR EACH ROW
EXECUTE FUNCTION public.enforce_booking_request_dates();
