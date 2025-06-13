import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from './Pagination';

const pagination = jest.fn();

describe('Pagination component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders current page and total pages', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={pagination} />);

    expect(screen.getByText(/Pagina 2 de 5/i)).toBeInTheDocument();
  });

  it('event first page', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={pagination} />);

    fireEvent.click(screen.getByTestId('pagination-first-button'));

    expect(pagination).toHaveBeenCalledWith(1);
    expect(screen.getByText(/Pagina 2 de 5/i)).toBeInTheDocument();
  });

  it('event prev page', () => {
    render(<Pagination currentPage={4} totalPages={5} onPageChange={pagination} />);

    fireEvent.click(screen.getByTestId('pagination-prev-button'));

    expect(pagination).toHaveBeenCalledWith(3);
    expect(screen.getByText(/Pagina 4 de 5/i)).toBeInTheDocument();
  });

  it('event next page', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={pagination} />);

    fireEvent.click(screen.getByTestId('pagination-next-button'));

    expect(pagination).toHaveBeenCalledWith(3);
    expect(screen.getByText(/Pagina 2 de 5/i)).toBeInTheDocument();
  });

  it('event last page', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={pagination} />);

    fireEvent.click(screen.getByTestId('pagination-last-button'));

    expect(pagination).toHaveBeenCalledWith(5);
    expect(screen.getByText(/Pagina 2 de 5/i)).toBeInTheDocument();
  });
});
