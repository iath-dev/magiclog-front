import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import Button from '../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  actions?: () => React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, actions = () => <span></span> }) => {
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuth();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center max-w-[200px] sm:max-w-[220px] md:max-w-xl text-2xl truncate font-semibold whitespace-nowrap dark:text-white">
          {title}
        </span>
        <div className="flex items-center">
          {actions()}
          <Button
            onClick={isAuthenticated ? logout : () => navigate('/auth/login', { replace: true })}
            outline={isAuthenticated}
            variant={isAuthenticated ? 'danger' : 'light'}
            size="lg"
            icon={isAuthenticated ? <FiLogOut /> : <FiLogIn />}
          >
            <span className="hidden md:block">{isAuthenticated ? 'Logout' : 'LogIn'}</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
