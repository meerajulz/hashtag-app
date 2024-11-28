import React from 'react';
import { SelectedTagsProps } from '../../types/types';

const SelectedTag: React.FC<SelectedTagsProps> = ({ tags }) => {
  return (
    <div className="mt-2 flex flex-wrap">
      {tags.map((tag, index) => (
        <span key={index} className="m-1 p-2 bg-blue-200 rounded">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default SelectedTag;
