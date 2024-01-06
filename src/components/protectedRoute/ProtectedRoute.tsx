import { Navigate } from 'react-router-dom';
import { useFirebaseAuth } from '../../services/auth/firebase';
import { ReactNode } from 'react';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useFirebaseAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
