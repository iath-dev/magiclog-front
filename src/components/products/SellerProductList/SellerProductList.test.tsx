import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SellerProductList from './SellerProductList';

describe('SellerProductList component', () => {
  it('shows empty message when no products', () => {
    render(<SellerProductList products={[]} />);
    expect(screen.getByTestId('empty-message')).toBeInTheDocument();
  });
});
