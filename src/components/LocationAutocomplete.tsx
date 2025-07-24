import { useState, useEffect, useRef } from "react";
import { MapPin, Search } from "lucide-react";
import { searchLocations } from "@/data/indianLocations";
import { Button } from "@/components/ui/button";

interface LocationAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const LocationAutocomplete = ({
  value,
  onChange,
  placeholder = "Search destinations",
  className = "",
}: LocationAutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value.length >= 2) {
      const results = searchLocations(value, 8);
      setSuggestions(results);
      setIsOpen(results.length > 0);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
    setHighlightedIndex(-1);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : 0,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : suggestions.length - 1,
        );
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSuggestionClick(suggestions[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  const handleBlur = () => {
    // Delay closing to allow for clicks on suggestions
    setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center gap-2">
        <input
          ref={inputRef}
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() =>
            value.length >= 2 && setSuggestions(searchLocations(value, 8))
          }
          onBlur={handleBlur}
          placeholder={placeholder}
          className="flex-1 text-sm bg-transparent border-0 outline-none placeholder-airbnb-text-secondary focus:placeholder-transparent"
        />
        <MapPin className="h-3 w-3 text-airbnb-text-secondary" />
      </div>

      {isOpen && suggestions.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto"
        >
          <div className="p-2">
            <div className="flex items-center gap-2 px-3 py-2 text-xs text-airbnb-text-secondary border-b border-gray-100 mb-2">
              <Search className="h-3 w-3" />
              <span>Suggestions for "{value}"</span>
            </div>
            {suggestions.map((suggestion, index) => {
              const parts = suggestion.split(", ");
              const main = parts[0];
              const location = parts.slice(1).join(", ");

              return (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={`w-full text-left px-3 py-3 rounded-lg transition-colors hover:bg-gray-50 flex items-center gap-3 ${
                    index === highlightedIndex ? "bg-gray-50" : ""
                  }`}
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-airbnb-text-secondary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-airbnb-medium text-airbnb-text-primary text-sm">
                      {main}
                    </div>
                    {location && (
                      <div className="text-xs text-airbnb-text-secondary truncate">
                        {location}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationAutocomplete;
