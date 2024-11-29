export interface TagSuggestionProps {
  suggestions: string[];
  onTagClick: (tag: string) => void;
  onTagSelect?: any; // Fix this
  textInputRef?: any; //fix this
}
