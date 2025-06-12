import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Spinner from './Spinner';

describe('Spinner component', () => {
  it('renders the spinner', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
