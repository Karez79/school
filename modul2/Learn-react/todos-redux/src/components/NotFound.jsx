import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

export default function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/404') {
      navigate('/404', { replace: true });
    }
  }, [location.pathname, navigate]);

  const handleGoHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className='todo'>
      <div className='not-found'>
        <div className='not-found__content'>
          <h1 className='not-found__title'>404</h1>
          <h2 className='not-found__subtitle'>Page Not Found</h2>
          <p className='not-found__message'>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className='not-found__url'>
            Requested URL: <code>{location.pathname}</code>
          </p>
          <button className='todo__btn not-found__home-btn' onClick={handleGoHome}>
            ← Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}