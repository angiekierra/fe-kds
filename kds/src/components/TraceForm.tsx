import { useState } from "react";
import { Label } from "@/components/ui/label";
import CustomSelect from "./customSelect";

const speciesOptions = [
  { label: "Species A", value: "speciesA" },
  { label: "Species B", value: "speciesB" },
  { label: "Species C", value: "speciesC" },
];

export default function TraceForm() {
  const [species1, setSpecies1] = useState("");
  const [species2, setSpecies2] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Trace between:", species1, species2);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="space-y-8 z-10 flex flex-col items-center"
      >
        <div className="text-center">
          <h1 className="text-5xl font-semibold">Try Our Tool Now!</h1>
          <p className="text-lg text-gray-400">
            Select from our database to see their compatibility
          </p>
        </div>

        {/* Species 1 */}
        <div className="w-full space-y-2">
          <Label htmlFor="species1" className="text-md">Species 1</Label>
          <CustomSelect
            id="species1"
            options={speciesOptions}
            placeholder="Choose Your Species"
            value={species1}
            onChange={setSpecies1}
          />
        </div>

        {/* Species 2 */}
        <div className="w-full space-y-2">
          <Label htmlFor="species2" className="text-md">Species 2</Label>
          <CustomSelect
            id="species2"
            options={speciesOptions}
            placeholder="Choose Your Species"
            value={species2}
            onChange={setSpecies2}
          />
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-teal-400 p-2 text-white rounded-2xl hover:bg-teal-300"
          disabled={!species1 || !species2}
        >
          TRACE
        </button>
      </form>
    </div>
  );
}
