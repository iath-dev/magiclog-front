import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormInput from './FormInput';

describe('FormInput component', () => {
  it('renders label and input', () => {
    render(<FormInput label="Nombre" name="nombre" value="" onChange={() => {}} />);
    expect(screen.getByTestId('form-input-label')).toBeInTheDocument();
  });
});
