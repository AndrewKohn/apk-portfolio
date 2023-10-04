import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Background from './Background';

describe('<Background />', () => {
  it('should render without error', () => {
    const { container } = render(<Background />);
    expect(container).toBeDefined();
  });

  it('should render with custom class name', () => {
    const { container } = render(<Background className="custom-class" />);
    expect(container.firstChild).toHaveClass('background custom-class');
  });
});
