-- Add INSERT policy for profiles (even though trigger handles creation)
-- This prevents security warnings and allows manual profile creation if needed
CREATE POLICY "Authenticated users can create their own profile"
  ON public.profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);