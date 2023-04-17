import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LoadingBars from './LoadingBars';

describe('<LoadingBars />', () => {
  it('should render the component', () => {
    const { getByTestId } = render(<LoadingBars />);
    expect(getByTestId('loading-bars')).toBeInTheDocument();
  });

  it('should render four bars', () => {
    const { getAllByTestId } = render(<LoadingBars />);
    const bars = getAllByTestId('loading-bar');
    expect(bars).toHaveLength(4);
  });
});
