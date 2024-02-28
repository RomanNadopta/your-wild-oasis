import supabase from './supabase';

export async function getExplores() {
  const { data, error } = await supabase.from('explores').select('*');

  if (error) {
    console.error(error);
    throw new Error('explores could not be loaded');
  }
  return data;
}
