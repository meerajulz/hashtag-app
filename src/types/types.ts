export interface TagSuggestionProps {
  suggestions: string[];
  onTagClick: (tag: string) => void;
  textInputRef?: React.RefObject<HTMLDivElement>;
  onSuggestionsClear?: () => void;
}
