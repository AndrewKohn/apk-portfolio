import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContactForm from './ContactForm';

describe('<ContactForm />', () => {
  it('should render form inputs', () => {
    render(
      <ContactForm
        validateNameForAvatar={() => undefined}
        validateEmailForAvatar={() => undefined}
        validateMessageForAvatar={() => undefined}
      />
    );
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'contact button' })
    ).toBeInTheDocument();
  });

  it('should ENABLE the send button when all inputs are valid', () => {
    render(
      <ContactForm
        validateNameForAvatar={() => undefined}
        validateEmailForAvatar={() => undefined}
        validateMessageForAvatar={() => undefined}
      />
    );
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');
    const sendButton = screen.getByRole('button', { name: 'contact button' });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(messageInput, {
      target: { value: 'Hello, how are you?  This is a test message.' },
    });

    expect(sendButton).toBeEnabled();
  });

  it('should DISABLE the send button when an input is invalid', () => {
    render(
      <ContactForm
        validateNameForAvatar={() => undefined}
        validateEmailForAvatar={() => undefined}
        validateMessageForAvatar={() => undefined}
      />
    );
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');
    const sendButton = screen.getByRole('button', { name: 'contact button' });

    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: 'invalid email' } });
    fireEvent.change(messageInput, { target: { value: '' } });

    expect(sendButton).toHaveClass('disabled');
  });
});
