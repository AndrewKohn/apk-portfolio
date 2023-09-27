import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProjectGridItem from './ProjectGridItem';

describe('<ProjectGridItem />', () => {
  const exampleProps = {
    projectId: 5,
    image: 'projectImagePlaceholder',
    altText: 'exampleTitle',
    title: 'exampleTitle',
    description: 'exampleText',
    tags: [],
    gitHubPath: '',
    liveSitePath: '',
  };

  it('renders the Live Demo icon as ENABLED', () => {
    const props = {
      projectId: 5,
      image: 'projectImagePlaceholder',
      altText: 'exampleTitle',
      title: 'exampleTitle',
      description: 'exampleText',
      tags: [],
      gitHubPath: '',
      liveSitePath: 'www.notARealLink.com',
    };

    const { getByTestId } = render(<ProjectGridItem {...props} />);

    const liveDemoDisabledIconElement = getByTestId('live-demo-icon');
    expect(liveDemoDisabledIconElement).toBeInTheDocument();
  });

  it('renders the GitHub icon as DISABLED', () => {
    const { getByTestId } = render(<ProjectGridItem {...exampleProps} />);

    const gitHubIconElement = getByTestId('github-icon');
    expect(gitHubIconElement).toHaveClass('blurred--light');
  });

  it('renders the Live Demo icon as DISABLED', () => {
    const { getByTestId } = render(<ProjectGridItem {...exampleProps} />);

    const liveDemoDisabledIconElement = getByTestId('live-demo-disabled-icon');
    expect(liveDemoDisabledIconElement).toBeInTheDocument();
  });
});
