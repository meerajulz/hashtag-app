import React, { useState, useEffect } from 'react';
import TagSuggestion from '../tag-suggestion/tag-suggestion.component';

const tagList = [
  'liver',
  'pain',
  'right',
  'left',
  'pancreas',
  'kidney',
  'brain',
  'severe_pain',
  'tumour',
  'cancer',
  'MRI',
  'CT',
  'male',
  'female',
  'bone',
  'shoulder',
  'hip',
  'XRAY',
  'knee',
  'spine',
  'head',
  'abdomen',
  'contrast',
  'fragment',
  'detached',
  'injury',
  'torn',
  'rotator',
  'cuff',
  'abdominal',
  'dilatation',
];

const TextInput = () => {
  const [input, setInput] = useState('');
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
      <div className="mt-2 flex flex-wrap">
        {selectedTags.map((tag, index) => (
          <span key={index} className="m-1 p-2 bg-blue-200 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextInput;
