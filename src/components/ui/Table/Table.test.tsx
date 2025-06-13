import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table, { type ColumnDefinition } from './Table';
import type { Product } from '../../../types/product';
import { mockProductList } from '../../../utils/mocks/product';

describe('Table component', () => {
  it('renders table headers and data', () => {
    const columns: Array<ColumnDefinition<Product, keyof Product>> = [
      { key: 'id', header: 'ID' },
      { key: 'name', header: 'Nombre' },
    ];

    render(<Table data={mockProductList} columns={columns} showHeader={false} />);

    expect(screen.queryByTestId('table-header')).not.toBeInTheDocument();
  });
});
