import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartItemsList from './CartItemsList';

jest.mock('../../../hooks/useCart', () => ({
  useCart: () => ({ items: [], updateQuantity: jest.fn(), removeFromCart: jest.fn() }),
}));

describe('CartItemsList component', () => {
  it('shows empty cart message', () => {
    render(<CartItemsList />);
    expect(screen.getByText('El carrito está vacío.')).toBeInTheDocument();
  });
});
