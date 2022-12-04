import { supabase, SUPBASE_ENUMS } from '.';

export async function profileSignIn(user_details: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: user_details.email,
    password: user_details.password,
  });
  if (data.user) {
    localStorage.setItem(
      SUPBASE_ENUMS.UMCEBO_MONEY_USER,
      JSON.stringify({ session: data.session, user: data.user })
    );
    return data.user;
  } else {
    throw error;
  }
  return;
}
