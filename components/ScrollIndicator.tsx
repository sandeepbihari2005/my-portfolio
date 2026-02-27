"use client";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400">
      <span className="text-sm mb-2 tracking-wide">Scroll</span>

      <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
        <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-scrollDot" />
      </div>
    </div>
  );
}