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
      <TagSuggestion />
    </div>
  );
};

export default TextInput;
