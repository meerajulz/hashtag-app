import React from 'react';
import { render, screen } from '@testing-library/react';
import TagSuggestion from './tag-suggestion.component';

describe('TextTagSuggestionInput', () => {
  test('renders TextInput component', () => {
    const tags = {
      /* define your tags here */
    };
    render(
      <TagSuggestion
        suggestions={[]}
        onTagClick={function (tag: string): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByPlaceholderText('Type here...')).toBeInTheDocument();
  });
});

export {}; // Ensures this file is a module
