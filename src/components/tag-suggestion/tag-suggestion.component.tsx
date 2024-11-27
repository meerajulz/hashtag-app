import React from 'react';

interface TagSuggestionProps {
  suggestions: string[];
  onTagClick: (tag: string) => void;
}

const TagSuggestion: React.FC<TagSuggestionProps> = ({
  suggestions,
  onTagClick,
}) => {
  if (!suggestions.length) return null;

  return (
    <ul className="list-none mt-2 p-2 bg-white shadow rounded">
      {suggestions.map((tag, index) => (
        <li
          key={index}
          className="p-2 border-b border-gray-200"
          onClick={() => onTagClick(tag)}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagSuggestion;
