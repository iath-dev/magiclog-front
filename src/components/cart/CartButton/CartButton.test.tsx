import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartButton from './CartButton';

jest.mock('../../../hooks/useCart', () => ({
  useCart: () => ({
    items: [],
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
    clearCart: jest.fn(),
    updateQuantity: jest.fn(),
  }),
}));

describe('CartButton component', () => {
  it('renders the cart button', () => {
    render(<CartButton />);
    expect(screen.getByLabelText('Ver carrito')).toBeInTheDocument();
    expect(screen.getByText('Carrito')).toBeInTheDocument();
  });
});
