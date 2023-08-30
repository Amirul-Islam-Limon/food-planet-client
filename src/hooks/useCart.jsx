import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useCart = () => {
    const { user } = useContext(AuthContext);
    
    const { isLoading, data:cart = [], refetch} = useQuery({
        queryKey: ["carts", user?.email],
        queryFn: async () => {
            const response = fetch(`http://localhost:5000/carts?email=${user?.email}`);
            const data = (await response).json();
            return data;
        },
      })
    return [cart, isLoading, refetch];
};

export default useCart;