import { useState } from "react";
import { ChevronDown } from "lucide-react"; // optional: lucide icon

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  id: string;
  options: Option[];
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
};

export default function CustomSelect({
  id,
  options,
  placeholder,
  value,
  onChange,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        id={id}
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
      >
        {value
          ? options.find((opt) => opt.value === value)?.label
          : placeholder}
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      {open && (
        <ul
          className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md max-h-60 overflow-auto"
          onBlur={() => setOpen(false)}
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-teal-50 ${
                value === opt.value ? "bg-teal-100 text-teal-600" : ""
              }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
