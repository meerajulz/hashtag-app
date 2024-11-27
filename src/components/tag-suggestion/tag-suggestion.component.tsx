import React from 'react';

interface TagSuggestionProps {
  suggestions: string[];
}

const TagSuggestion: React.FC<TagSuggestionProps> = ({ suggestions }) => {
  if (!suggestions.length) return null;

  return (
    <ul className="list-none mt-2 p-2 bg-white shadow rounded">
      {suggestions.map((suggestion, index) => (
        <li key={index} className="p-2 border-b border-gray-200">
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default TagSuggestion;
