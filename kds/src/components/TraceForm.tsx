import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export type TraceFormProps = {
  onSubmit: (species1: string, species2: string, tssPosition: number) => void;
};

export default function TraceForm({ onSubmit }: TraceFormProps) {
  const [species1, setSpecies1] = useState("");
  const [species2, setSpecies2] = useState("");
  const [tssPosition, setTssPosition] = useState(100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (species1 && species2) {
      onSubmit(species1, species2, tssPosition);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-8 z-10 flex flex-col items-center"
      >
        <div className="text-center">
          <h1 className="text-5xl font-semibold">Try Our Tool Now!</h1>
          <p className="text-lg text-gray-400">
            Enter species names manually to see their compatibility
          </p>
        </div>

        <div className="w-full space-y-2">
          <Label htmlFor="species1" className="text-md">Species 1</Label>
          <Textarea
            id="species1"
            value={species1}
            onChange={(e) => setSpecies1(e.target.value)}
            placeholder="Enter Species 1 Name"
          />
        </div>

        <div className="w-full space-y-2">
          <Label htmlFor="species2" className="text-md">Species 2</Label>
          <Textarea
            id="species2"
            value={species2}
            onChange={(e) => setSpecies2(e.target.value)}
            placeholder="Enter Species 2 Name"
          />
        </div>

        <div className="w-full space-y-2">
          <Label htmlFor="tssPosition" className="text-md">TSS Position (bp from start)</Label>
          <input
            id="tssPosition"
            type="number"
            min={0}
            value={tssPosition}
            onChange={(e) => setTssPosition(parseInt(e.target.value) || 0)}
            className="w-full rounded-md border px-3 py-2"
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
