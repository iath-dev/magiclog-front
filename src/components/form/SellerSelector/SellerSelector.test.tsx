import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SellerSelector from './SellerSelector';

jest.mock('../../../hooks/useSellers', () => ({
  useSellers: () => ({
    data: [],
    isLoading: false,
    error: null,
  }),
}));

describe('SellerSelector component', () => {
  it('renders input for seller search', () => {
    render(<SellerSelector onChange={() => {}} />);
    expect(screen.getByPlaceholderText('Busca por usuario')).toBeInTheDocument();
  });
});
