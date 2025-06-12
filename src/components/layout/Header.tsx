import React from 'react';
import CartButton from '../cart/CartButton';
import Button from '../ui/Button';
import { useAuth } from '../../hooks/useAuth';
import { FiLogOut } from 'react-icons/fi';

interface HeaderProps {
  title: string;
  cartCount?: number;
  onCartClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, cartCount = 0, onCartClick }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{title}</span>
        <div className="flex items-center space-x-4">
          {user?.role === 'buyer' && (
            <CartButton count={cartCount} onClick={onCartClick} />
          )}
          <Button onClick={logout} variant="danger" icon={<FiLogOut />}>
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
