import supabase from './supabase';

export async function getHome() {
  const { data, error } = await supabase.from('home').select('*').order('id');
  if (error) {
    console.error(error);
    throw new Error('home could not be loaded');
  }
  return data;
}
