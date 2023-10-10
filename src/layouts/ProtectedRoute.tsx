import { Navigate, Outlet } from 'react-router-dom';
import { useAuthUser } from '../features/authentication/hooks/useAuthUser';
import { signInPath } from '../routes';

export function ProtectedRoute() {
  const user = useAuthUser();
  if (user) return <Outlet />;
  return <Navigate to={signInPath} replace />;
}
