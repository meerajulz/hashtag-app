import React from 'react';
import { render, screen } from '@testing-library/react';
import TagSuggestion from './tag-suggestion.component';

describe('TextTagSuggestionInput', () => {
  test('renders TextInput component', () => {
    render(<TagSuggestion />);
    expect(screen.getByPlaceholderText('Type here...')).toBeInTheDocument();
  });
});

export {}; // Ensures this file is a module
