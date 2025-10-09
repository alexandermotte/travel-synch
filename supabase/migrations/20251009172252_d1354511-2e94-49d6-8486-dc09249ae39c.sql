-- Add business and site columns to orders table
ALTER TABLE public.orders 
ADD COLUMN IF NOT EXISTS business TEXT,
ADD COLUMN IF NOT EXISTS site TEXT DEFAULT 'Travel Synch';