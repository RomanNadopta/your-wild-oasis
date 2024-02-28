import supabase from './supabase';

export async function getAboutUs() {
  const { data, error } = await supabase
    .from('aboutUs')
    .select('*')
    .order('id');
  if (error) {
    console.error(error);
    throw new Error('About Us could not be loaded');
  }
  return data;
}
