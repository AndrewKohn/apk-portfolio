import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Button from './Button';

describe('<Button />', () => {
  it('renders without errors', () => {
    render(<Button ariaLabel="test-label">Click me</Button>);
  });

  it('renders a button with the correct aria-label and classes', () => {
    const { getByRole } = render(
      <Button ariaLabel="test-label" classes="test-class">
        Click me
      </Button>
    );
    const button = getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'test-label');
    expect(button).toHaveClass('button test-class');
  });

  it('renders a button with the correct type', () => {
    const { getByRole } = render(
      <Button ariaLabel="test-label" type="submit">
        Click me
      </Button>
    );
    const button = getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
