import React, { useState, useEffect, useRef } from 'react';
import TagSuggestion from '../tag-suggestion/tag-suggestion.component';
import tagList from '../../constants/tag-list';

const TextInput = () => {
  const [content, setContent] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const editableRef = useRef<HTMLDivElement>(null);
  const suggestionRef = useRef<HTMLUListElement>(null); //

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
    const lastWord = text.split(' ').pop();
    if (lastWord?.startsWith('#') && lastWord.length > 1) {
      const searchQuery = lastWord.slice(1);
      setSuggestions(tagList.filter((tag) => tag.startsWith(searchQuery)));
    } else {
      setSuggestions([]);
    }
  };

  const handleTagClick = (tag: string): void => {
    const newText = content.replace(/#\w+$/, `#${tag} `);
    if (editableRef.current) {
      editableRef.current.innerText = newText;
      setCaretToEnd();
    }
    setSuggestions([]);
    setContent(newText);
  };

  const setCaretToEnd = (): void => {
    const range = document.createRange();
    const sel = window.getSelection();
    if (editableRef.current) {
      range.selectNodeContents(editableRef.current);
      range.collapse(false);
      sel?.removeAllRanges();
      sel?.addRange(range);
      editableRef.current.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowDown' && suggestions.length > 0) {
      // focus on the suggestions if the user explicitly navigates
      suggestionRef.current?.focus();
      event.preventDefault();
    } else if (
      event.key === 'Enter' &&
      !suggestionRef.current?.contains(document.activeElement)
    ) {
      // Handle creating new tags on Enter press when not focusing on suggestions
      const newTag = content.split(' ').pop();
      if (newTag?.startsWith('#')) {
        handleTagClick(newTag.slice(1));
        event.preventDefault();
      }
    }
  };

  //when we click in ESC we move back to input field
  const clearSuggestions = (): void => {
    setSuggestions([]);
  };

  return (
    <div className="p-4">
      <div
        ref={editableRef}
        contentEditable
        className="w-full h-32 p-2 border border-gray-300 rounded-md"
        style={{ outline: 'none' }}
        data-placeholder="Type here..."
        onKeyDown={handleKeyDown}
      />
      {suggestions.length > 0 && (
        <TagSuggestion
          ref={suggestionRef}
          suggestions={suggestions}
          onTagClick={handleTagClick}
          textInputRef={editableRef}
          onSuggestionsClear={clearSuggestions}
        />
      )}
    </div>
  );
};

export default TextInput;
