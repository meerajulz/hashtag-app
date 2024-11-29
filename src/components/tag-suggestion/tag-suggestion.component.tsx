import React, { useState, forwardRef } from 'react';
import { TagSuggestionProps } from '../../types/types';

const TagSuggestion = forwardRef<HTMLUListElement, TagSuggestionProps>(
  ({ suggestions, onTagClick }, ref) => {
    const [focusedIndex, setFocusedIndex] = useState(0);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
      switch (event.key) {
        case 'ArrowDown':
          setFocusedIndex((prevIndex) => (prevIndex + 1) % suggestions.length);
          event.preventDefault();
          break;
        case 'ArrowUp':
          setFocusedIndex(
            (prevIndex) =>
              (prevIndex - 1 + suggestions.length) % suggestions.length
          );
          event.preventDefault();
          break;
        case 'Enter':
          onTagClick(suggestions[focusedIndex]);
          event.preventDefault();
          break;
      }
    };

    return (
      <ul
        className="list-none mt-2 p-2 bg-white shadow rounded"
        onKeyDown={handleKeyDown}
        ref={ref}
        tabIndex={0}
      >
        {suggestions.map((tag, index) => (
          <li
            key={index}
            className="p-2 border-b border-gray-200"
            onClick={() => onTagClick(tag)}
            onMouseEnter={() => setFocusedIndex(index)}
          >
            {tag}
          </li>
        ))}
      </ul>
    );
  }
);
export default TagSuggestion;
