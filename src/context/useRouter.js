import { useContext } from 'react';
import { RouterContext } from './routercontext';

/**
 * Hook to access router context
 * @returns {{currentRoute: string, navigate: (route:string)=>void}}
 */
const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useRouter must be used within Router');
  return context;
};

export { useRouter };
