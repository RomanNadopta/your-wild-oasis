import supabase from './supabase';

export async function getCities() {
  const { data, error } = await supabase.from('cities').select('*').order('id');
  if (error) {
    console.error(error);
    throw new Error('cities could not be loaded');
  }
  return data;
}
