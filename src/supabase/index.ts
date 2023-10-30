import { createClient } from '@supabase/supabase-js';

const superBaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const superBaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const superBaseServiceRoleKey = import.meta.env.VITE_SERVICE_ROLE_KEY as string;

console.log(superBaseServiceRoleKey,superBaseUrl)

export const supabase = createClient(superBaseUrl, superBaseAnonKey);

export enum SUPBASE_ENUMS {
  UMCEBO_MONEY_USER = 'umcebo_active_user',
}
