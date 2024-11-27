import { render, screen } from '@testing-library/react';
import TextInput from './text-input.component';

describe('TextInput', () => {
  test('renders TextInput component', () => {
    render(<TextInput />);
    expect(screen.getByPlaceholderText('Type here...')).toBeInTheDocument();
  });
});

export {}; // Ensures this file is a module
