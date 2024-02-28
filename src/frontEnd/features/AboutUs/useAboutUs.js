import { useQuery } from '@tanstack/react-query';
import { getAboutUs } from '../../../services/apiAboutUs';

export function useAboutUs() {
  const {
    isLoading,
    data: aboutUs,
    error,
  } = useQuery({
    queryKey: ['aboutUs'],
    queryFn: getAboutUs,
  });
  return { isLoading, error, aboutUs };
}
