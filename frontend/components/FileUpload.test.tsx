import React from 'react';
import { render, screen } from '@testing-library/react';
import FileUpload from './FileUpload';

describe('FileUpload', () => {
  it('renders the component', () => {
    render(<FileUpload />);
    expect(screen.getByText('Key Features:')).toBeInTheDocument();
  });
});
