import { render } from '@testing-library/react';

import ExampleComp from './example-comp';

describe('ExampleComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExampleComp />);
    expect(baseElement).toBeTruthy();
  });
});
