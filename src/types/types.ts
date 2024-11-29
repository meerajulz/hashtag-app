export interface TagSuggestionProps {
  suggestions: string[];
  onTagClick: (tag: string) => void;
  onTagSelect?: any; // Fix this
}

export interface SelectedTagsProps {
  tags: string[];
  onTagRemove: (tag: string) => void;
}
