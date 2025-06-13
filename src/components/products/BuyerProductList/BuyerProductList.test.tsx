import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BuyerProductList from './BuyerProductList';

describe('BuyerProductList component', () => {
  it('shows empty message when no products', () => {
    render(<BuyerProductList products={[]} />);
    expect(screen.getByText('No hay productos disponibles en este momento.')).toBeInTheDocument();
  });
});
