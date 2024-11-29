import React, { useState, forwardRef } from 'react';
import { TagSuggestionProps } from '../../types/types';
import './tag-suggestion.style.css';

const TagSuggestion = forwardRef<HTMLUListElement, TagSuggestionProps>(
  ({ suggestions, onTagClick, textInputRef, onSuggestionsClear }, ref) => {
    const [focusedIndex, setFocusedIndex] = useState(0);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
      const isUpDown = event.key === 'ArrowDown' || event.key === 'ArrowUp';
      if (isUpDown) {
        setFocusedIndex((prevIndex) => {
          const nextIndex =
            event.key === 'ArrowDown'
              ? (prevIndex + 1) % suggestions.length
              : (prevIndex - 1 + suggestions.length) % suggestions.length;
          return nextIndex;
        });
        event.preventDefault();
      } else if (event.key === 'Enter' && suggestions.length) {
        onTagClick(suggestions[focusedIndex]);
        event.preventDefault();
      } else if (event.key === 'Escape') {
        // Handle escaping from tag suggestions back to text input
        if (textInputRef && textInputRef.current) {
          textInputRef.current.focus();
          if (typeof onSuggestionsClear === 'function') {
            onSuggestionsClear(); // Call a function to clear/close suggestions
          }
        }
        event.preventDefault();
      }
    };

    return (
      <ul
        className="list-none mt-2 p-2 bg-white shadow rounded"
        onKeyDown={handleKeyDown}
        ref={ref}
        tabIndex={0}
      >
        {suggestions.map((tag: string, index: number) => (
          <li
            key={index}
            className={`p-2 border-b border-gray-200 ${index === focusedIndex ? 'focused-tag' : ''}`}
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
