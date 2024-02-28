import { useQuery } from '@tanstack/react-query';
import { getLeadership } from '../../../services/apiLeadership';

export function useLeadership() {
  const {
    isLoading,
    data: leadership,
    error,
  } = useQuery({
    queryKey: ['leadership'],

    queryFn: getLeadership,
  });
  return { isLoading, error, leadership };
}
