import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from './Card';

describe('<Card />', () => {
  it('renders without errors', () => {
    render(<Card />);
  });

  it('renders with the correct class name', () => {
    const { container } = render(<Card classes="test-class" />);
    expect(container.firstChild).toHaveClass('card');
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('renders with the correct ID', () => {
    const { container } = render(<Card idSelector="test-id" />);
    expect(container.firstChild).toHaveAttribute('id', 'test-id');
  });

  it('renders with the correct children', () => {
    const { container } = render(
      <Card>
        <div>Test</div>
      </Card>
    );
    expect(container.firstChild).toHaveTextContent('Test');
  });
});
