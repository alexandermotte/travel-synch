-- Drop existing conflicting policies and recreate with correct permissions
DROP POLICY IF EXISTS "Allow public Fast Track form submissions" ON public.customers;
DROP POLICY IF EXISTS "Allow public order creation for Fast Track" ON public.orders;

-- Create policy to allow anonymous users to insert customers with NULL user_id
CREATE POLICY "Public can create Fast Track customers"
ON public.customers
FOR INSERT
TO public
WITH CHECK (user_id IS NULL);

-- Create policy to allow anonymous users to view their own customer record (for the insert response)
CREATE POLICY "Public can view Fast Track customers"
ON public.customers
FOR SELECT
TO public
USING (user_id IS NULL);

-- Create policy to allow anonymous users to create orders for public customers
CREATE POLICY "Public can create Fast Track orders"
ON public.orders
FOR INSERT
TO public
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.customers
    WHERE customers.id = orders.customer_id
    AND customers.user_id IS NULL
  )
);

-- Create policy to allow anonymous users to view orders for public customers
CREATE POLICY "Public can view Fast Track orders"
ON public.orders
FOR SELECT
TO public
USING (
  EXISTS (
    SELECT 1 FROM public.customers
    WHERE customers.id = orders.customer_id
    AND customers.user_id IS NULL
  )
);