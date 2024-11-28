import React, { useState, useEffect } from 'react';
import TagSuggestion from '../tag-suggestion/tag-suggestion.component';
import SelectedTag from '../selected-tag/selected-tag.component';
import tagList from '../../constants/tag-list';

const TextInput = () => {
  const [input, setInput] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  //extend selecting tags
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  //handle selection
  const handleSelection = (tag: string) => {
    // Add tag to selectedTags if not already included
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
    // Clear input and suggestions
    setInput('');
    setSuggestions([]);
  };

  useEffect(() => {
    if (input) {
      const regex = new RegExp(`^${input}`, 'i');
      const filteredTags = tagList.filter((tag) => tag.match(regex));
      setSuggestions(filteredTags);
      console.log(filteredTags);
    } else {
      setSuggestions([]);
      console.log([]);
    }
  }, [input]);

  return (
    <div className="p-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Type here..."
      />
      {/* Display tag suggestions */}
      <TagSuggestion suggestions={suggestions} onTagClick={handleSelection} />

      {/* Display selected tags */}
      <SelectedTag tags={selectedTags} />
    </div>
  );
};

export default TextInput;
