import React from 'react';
import { SelectedTagsProps } from '../../types/types';

const SelectedTag: React.FC<SelectedTagsProps> = ({ tags, onTagRemove }) => {
  return (
    <div className="mt-2 flex flex-wrap">
      {tags.map((tag, index) => (
        <span key={index} className="m-1 p-2 bg-blue-200 rounded">
          {tag}
          <button
            className="ml-2 text-red-500 hover:text-red-700"
            onClick={() => onTagRemove(tag)}
          >
            &times;
          </button>
        </span>
      ))}
    </div>
  );
};

export default SelectedTag;
