import supabase from './supabase';

export async function getLeadership() {
  const { data, error } = await supabase
    .from('leadership')
    .select('*')
    .order('id');
  if (error) {
    console.error(error);
    throw new Error('leadership could not be loaded');
  }
  return data;
}
