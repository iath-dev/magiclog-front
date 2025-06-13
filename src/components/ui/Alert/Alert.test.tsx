import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Alert from './Alert';

describe('Alert component', () => {
  it('renders the message and title', () => {
    render(<Alert variant="success" title="Éxito" message="Operación exitosa" />);
    expect(screen.getByText('Éxito')).toBeInTheDocument();
    expect(screen.getByText('Operación exitosa')).toBeInTheDocument();
  });
});
