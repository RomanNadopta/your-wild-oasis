import { useMutation } from '@tanstack/react-query';
import { signup as signApi } from '../../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created. PLease verify the new account from user's email address."
      );
    },
  });
  return { signup, isLoading };
}
