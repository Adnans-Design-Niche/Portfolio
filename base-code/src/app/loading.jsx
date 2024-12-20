// Loading component to display a full-screen loading indicator
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#365BAD] text-[#E1E3FC]">
      {/* Loading message with a pulsing animation */}
      <h1 className="text-4xl font-semibold animate-pulse">Loading...</h1>
    </div>
  );
}
