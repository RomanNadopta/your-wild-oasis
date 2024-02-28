import { useQuery } from '@tanstack/react-query';
import { getHome } from '../../../services/apiHome';

export function useHome() {
  const {
    isLoading,
    data: home,
    error,
  } = useQuery({
    queryKey: ['home'],
    queryFn: getHome,
  });
  return { isLoading, error, home };
}
