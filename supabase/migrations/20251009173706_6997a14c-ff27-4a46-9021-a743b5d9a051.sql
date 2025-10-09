-- Allow admins to view ALL customers including public ones (with user_id IS NULL)
DROP POLICY IF EXISTS "Authenticated admins can view all customers" ON public.customers;
CREATE POLICY "Authenticated admins can view all customers"
ON public.customers
FOR SELECT
USING (
  has_role(auth.uid(), 'admin'::app_role)
);

-- Allow admins to view ALL orders including public ones
DROP POLICY IF EXISTS "Authenticated admins can view all orders" ON public.orders;
CREATE POLICY "Authenticated admins can view all orders"
ON public.orders
FOR SELECT
USING (
  has_role(auth.uid(), 'admin'::app_role)
);