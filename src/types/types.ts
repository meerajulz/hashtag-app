export interface TagSuggestionProps {
  suggestions: string[];
  onTagClick: (tag: string) => void;
}

export interface SelectedTagsProps {
  tags: string[];
}
