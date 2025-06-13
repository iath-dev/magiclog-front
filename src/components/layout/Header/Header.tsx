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
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          {title}
        </span>
        <div className="flex items-center space-x-4">
          {actions()}
          <Button
            onClick={isAuthenticated ? logout : () => navigate('/auth/login', { replace: true })}
            outline={isAuthenticated}
            variant={isAuthenticated ? 'danger' : 'light'}
            icon={isAuthenticated ? <FiLogOut /> : <FiLogIn />}
          >
            {isAuthenticated ? 'Logout' : 'LogIn'}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
