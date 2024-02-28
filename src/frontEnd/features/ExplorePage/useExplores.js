import { useQuery } from '@tanstack/react-query';
import { getExplores } from '../../../services/apiExplores';

export function useExplores() {
  const {
    isLoading,
    data: explores,
    error,
  } = useQuery({
    queryKey: ['explores'],
    queryFn: getExplores,
  });
  return { isLoading, error, explores };
}
