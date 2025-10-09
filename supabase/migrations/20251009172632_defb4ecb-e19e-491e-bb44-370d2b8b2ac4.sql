-- Allow user_id to be nullable for public form submissions
ALTER TABLE public.customers 
ALTER COLUMN user_id DROP NOT NULL;

-- Create policy to allow public insertions for Fast Track forms (with NULL user_id)
CREATE POLICY "Allow public Fast Track form submissions"
ON public.customers
FOR INSERT
TO anon
WITH CHECK (user_id IS NULL);

-- Create policy to allow public insertions for orders linked to public customers
CREATE POLICY "Allow public order creation for Fast Track"
ON public.orders
FOR INSERT
TO anon
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.customers
    WHERE customers.id = orders.customer_id
    AND customers.user_id IS NULL
  )
);