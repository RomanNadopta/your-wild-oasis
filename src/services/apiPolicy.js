import supabase from './supabase';

export async function getPolicy() {
  const { data, error } = await supabase.from('policy').select('*').order('id');
  if (error) {
    console.error(error);
    throw new Error('policy could not be loaded');
  }
  return data;
}
