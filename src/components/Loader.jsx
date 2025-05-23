import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center w-full py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
    </div>
  );
}
