import { createClient } from '@supabase/supabase-js';

const superBaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const superBaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(superBaseUrl, superBaseAnonKey);

export enum SUPBASE_ENUMS {
  UMCEBO_MONEY_USER = 'umcebo_active_user',
}
