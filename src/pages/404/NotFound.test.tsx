import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '../../pages/404/NotFound';

describe('NotFound page', () => {
  it('renders not found message', () => {
    render(<NotFound />);
    expect(screen.getByTestId('404-page')).toBeInTheDocument();
  });
});
