import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
  title: string;
  options: string[];
  onSubmit: (selected: string[]) => void;
  icon?: React.ReactNode;
  selectedItems?: string[];
}

const DropdownSearch: React.FC<DropdownProps> = ({
  title,
  options,
  onSubmit,
  icon,
  selectedItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [activeButtonId, setActiveButtonId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setActiveButtonId(title);
    setIsOpen(!isOpen);
    setTimeout(() => setAnimate(true), 10);
  };

  const closeDropdown = () => {
    setAnimate(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  const handleCheckboxChange = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleClear = () => setSelectedValues([]);
  const handleSubmit = () => {
    onSubmit(selectedValues);
    closeDropdown();
  };

  //Filter selected items according to the chips that have been selected
  useEffect(() => {
    if (!selectedItems || selectedItems.length === 0) {
        setSelectedValues([]);
      } 
    if (selectedItems) {
        setSelectedValues((prev) =>
          selectedItems.filter((item) => prev.includes(item))
        );
      }
  }, [selectedItems]);

  // Close dropdown on outside click (desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        activeButtonId !== (event.target as HTMLElement).id
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen && window.innerWidth >= 768) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent background scroll when mobile drawer is open
  // useEffect(() => {
  //   document.body.style.overflow = isOpen ? "hidden" : "auto";
  // }, [isOpen]);

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        id={title}
        className="flex gap-2 bg-Neutrals-50 px-4 py-[11px] text-Body-Medium-16 text-Neutrals-950">
        {icon}
        {title}
        {selectedValues.length ? (
          <div className="ml-2 h-6 w-6 rounded-full bg-Accent-Orange-950 text-center text-white">
            {selectedValues.length}
          </div>
        ) : null}
        <ChevronDown />
      </button>

      {/* Desktop Dropdown */}
      <div
        ref={dropdownRef}
        className={`absolute left-0 z-40 mt-2 w-[270px] rounded-md border bg-white shadow-lg transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        } hidden md:block`}>
        <div className="hide-scrollbar max-h-60 space-y-2 overflow-y-auto p-4">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 text-sm font-medium">
              <input
                type="checkbox"
                checked={selectedValues.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>

        {/* Fixed buttons on desktop*/}
        <div className="flex justify-between bg-white p-4">
          <button
            onClick={handleClear}
            className="border border-Accent-Orange-950 px-4 py-[11px] text-Accent-Orange-950">
            Clear All
          </button>
          <button
            onClick={handleSubmit}
            className="border border-Accent-Orange-950 bg-Accent-Orange-950 px-4 py-[11px] text-white">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-40 flex items-end justify-center bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
            animate ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeDropdown}>
          <div
            className={`flex h-[70%] w-full transform flex-col rounded-t-lg bg-white transition-transform duration-500 ${
              animate ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()} // prevent click inside the content
          >
            {/* Mobile Header  */}
            <div className="sticky top-0 flex items-center justify-between rounded-t-lg border-b bg-white p-4">
              <h2 className="text-lg font-semibold">{title}</h2>
              <button onClick={closeDropdown} className="text-lg">
                ✖
              </button>
            </div>

            {/*Checkbox List */}
            <div className="flex-1 space-y-2 overflow-y-auto p-4">
              {options.map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Fixed Buttons */}
            <div className="sticky bottom-0 border-t bg-white p-4">
              <button
                onClick={handleSubmit}
                disabled={selectedValues.length < 1}
                className={`w-full border border-Accent-Orange-950 px-4 py-[11px] ${selectedValues.length < 1 ? "opacity-30" : "opacity-100"} bg-Accent-Orange-950 text-white`}>
                View Reports
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSearch;
