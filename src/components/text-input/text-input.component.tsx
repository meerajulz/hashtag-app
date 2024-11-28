import React, { useState, useEffect } from 'react';
import TagSuggestion from '../tag-suggestion/tag-suggestion.component';
import SelectedTag from '../selected-tag/selected-tag.component';
import tagList from '../../constants/tag-list';

const TextInput = () => {
  const [input, setInput] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  //extend selecting tags
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // handle input change events
  const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    updateSuggestions(e.target.value);
  };

  //handle input change
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      e.preventDefault(); // Prevent form submission
      handleSelection(input.trim());
      setInput('');
      setSuggestions([]);
    }
  };

  //handle selection in tags
  const handleSelection = (tag: string) => {
    // Add tag to selectedTags if not already included
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
      // Clear input and suggestions
      setInput('');
      setSuggestions([]);
    }
  };

  //handle removing tags
  const handleRemoveTag = (tag: string) => {
    const updatedTags = selectedTags.filter(
      (selectedTag) => selectedTag !== tag
    );
    setSelectedTags(updatedTags);
  };

  // update suggestions based on input
  const updateSuggestions = (value: string) => {
    if (value) {
      const regex = new RegExp(`^${value}`, 'i');
      const filteredTags = tagList.filter((tag) => tag.match(regex));
      setSuggestions(filteredTags);
      console.log(filteredTags);
    } else {
      setSuggestions([]);
      console.log([]);
    }
  };

  useEffect(() => {
    updateSuggestions(input);
  }, [input]);

  return (
    <div className="p-4">
      <input
        type="text"
        value={input}
        onChange={handleInputChanged}
        onKeyDown={handleKeyPress}
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Type here..."
      />
      {/* Display tag suggestions */}
      <TagSuggestion suggestions={suggestions} onTagClick={handleSelection} />

      {/* Display selected tags */}
      <SelectedTag onTagRemove={handleRemoveTag} tags={selectedTags} />
    </div>
  );
};

export default TextInput;
