import TraceForm from "@/components/TraceForm";

export default function Tool() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="fixed top-0 right-0 h-full flex items-center justify-end pointer-events-none z-0">
        <img src="dna.png" alt="bg-dna-right" className="h-full object-contain" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-teal-100 opacity-30 rounded-full blur-3xl"></div>
      </div>
      <TraceForm />
    </div>
  );
}
