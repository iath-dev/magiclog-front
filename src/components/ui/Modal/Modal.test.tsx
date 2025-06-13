import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';

describe('Modal component', () => {
  it('renders children when open', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Contenido del modal</div>
      </Modal>
    );
    expect(screen.getByText('Contenido del modal')).toBeInTheDocument();
  });

  it('click close event', () => {
    const closeFn = jest.fn();

    render(
      <Modal isOpen={true} onClose={closeFn}>
        <p>Modal</p>
      </Modal>
    );

    const closeBtn = screen.getByTestId('modal-close-button');
    fireEvent.click(closeBtn);

    expect(closeFn).toHaveBeenCalled();
  });
});
