import { useQuery } from '@tanstack/react-query';
import { getPolicy } from '../../../services/apiPolicy';

export function usePolicy() {
  const {
    isLoading,
    data: policy,
    error,
  } = useQuery({
    queryKey: ['policy'],
    queryFn: getPolicy,
  });
  return { isLoading, error, policy };
}
