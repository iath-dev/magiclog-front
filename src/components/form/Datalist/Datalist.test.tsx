import { render, screen } from '@testing-library/react';
import DataList from './Datalist';

describe('DataList component', () => {
  const defaultProps = {
    id: 'test-input',
    options: ['Option 1', 'Option 2'],
    placeholder: 'Type something...',
  };

  it('renders input and datalist with options', () => {
    render(<DataList {...defaultProps} />);

    const input = screen.getByPlaceholderText('Type something...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('list', 'test-input-list');

    const dataList = screen.getByTestId('test-input-list');
    expect(dataList).toBeInTheDocument();
  });

  it('applies error styles when hasError is true', () => {
    render(<DataList {...defaultProps} hasError />);
    const input = screen.getByPlaceholderText('Type something...');
    expect(input).toHaveClass('border-red-500');
  });
});
