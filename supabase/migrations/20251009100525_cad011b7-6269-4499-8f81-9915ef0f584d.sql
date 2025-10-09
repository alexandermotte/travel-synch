-- Add INSERT policy for orders so users can create their own orders
CREATE POLICY "Authenticated users can create orders for their customers"
  ON public.orders
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.customers
      WHERE customers.id = orders.customer_id
        AND customers.user_id = auth.uid()
    )
  );

-- Add UPDATE policy for orders so users can modify their own orders
CREATE POLICY "Authenticated users can update their own orders"
  ON public.orders
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.customers
      WHERE customers.id = orders.customer_id
        AND customers.user_id = auth.uid()
    )
  );