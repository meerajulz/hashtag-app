import React, { useState, useEffect, useRef } from 'react';
import TagSuggestion from '../tag-suggestion/tag-suggestion.component';
import tagList from '../../constants/tag-list';

interface ITextInputProps {
  // Define props here if any
}

const TextInput: React.FC<ITextInputProps> = () => {
  const [content, setContent] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const editableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleInput = () => {
      const text = editableRef.current?.innerText || '';
      setContent(text);
      updateSuggestions(text);
    };

    const current = editableRef.current;
    current?.addEventListener('input', handleInput);
    return () => current?.removeEventListener('input', handleInput);
  }, []);

  const updateSuggestions = (text: string): void => {
    const words = text.split(' ');
    const lastWord = words[words.length - 1];
    if (lastWord.startsWith('#')) {
      const searchQuery = lastWord.slice(1);
      const matchedTags = tagList.filter((tag) => tag.startsWith(searchQuery));
      setSuggestions(matchedTags);
    } else {
      setSuggestions([]);
    }
  };

  const handleTagClick = (tag: string): void => {
    const newText = content.replace(/#\w+$/, `#${tag} `);
    if (editableRef.current) {
      editableRef.current.innerText = newText;
      // editableRef.current.focus();
      setCaretToEnd(); // Set the cursor position to the end
    }
    setSuggestions([]);
    setContent(newText);
  };

  const setCaretToEnd = () => {
    const range = document.createRange();
    const sel = window.getSelection();
    if (editableRef.current) {
      range.selectNodeContents(editableRef.current);
    }
    range.collapse(false); // false collapses the range to the end
    if (sel) {
      sel.removeAllRanges();
      sel.addRange(range);
    }
    if (editableRef.current) {
      editableRef.current.focus(); // Focus the contentEditable element
    }
  };

  return (
    <div className="p-4">
      <div
        ref={editableRef}
        contentEditable
        className="w-full h-32 p-2 border border-gray-300 rounded-md"
        style={{ outline: 'none' }}
        data-placeholder="Type here..."
      />
      {suggestions.length > 0 && (
        <TagSuggestion suggestions={suggestions} onTagClick={handleTagClick} />
      )}
    </div>
  );
};

export default TextInput;
