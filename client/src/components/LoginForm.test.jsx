import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'; // optional but recommended
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  test('submits form with user input', async () => {
    const user = userEvent.setup();

    // mock submit handler
    const mockSubmit = jest.fn();

    render(<LoginForm onSubmit={mockSubmit} />);

    // find inputs (adjust labels/placeholders if needed)
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /login/i });

    // simulate typing
    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');

    // simulate click
    await user.click(submitButton);

    // assertions
    expect(mockSubmit).toHaveBeenCalled();
    expect(mockSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });
});