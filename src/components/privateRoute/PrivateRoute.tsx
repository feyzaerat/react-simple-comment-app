import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
 // Auth context'inizi burada sağladığınızı varsayıyorum

interface PrivateRouteProps {
  path: string;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState (false);
  const location = useLocation();
  const auth = useAuth(); // Kullanıcının giriş yapıp yapmadığını kontrol edin

  if (isAuthenticated == false) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;