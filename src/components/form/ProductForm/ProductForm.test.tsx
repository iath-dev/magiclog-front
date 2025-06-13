import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductForm from './ProductForm';

describe('ProductForm component', () => {
  it('renders product form fields', () => {
    render(<ProductForm onSubmit={() => {}} onCancel={() => {}} errors={{}} />);

    expect(screen.getByTestId('product-form')).toBeInTheDocument();
  });
});
