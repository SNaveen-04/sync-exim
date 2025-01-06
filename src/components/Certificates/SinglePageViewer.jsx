import { useState } from "react";

/* eslint-disable react/prop-types */
export default function PDFViewer({ pdf }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <button
        onClick={handleToggle}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        {isVisible ? "Hide PDF" : "View PDF"}
      </button>

      {isVisible && (
        <div className="mt-4 w-full h-screen">
          <iframe
            src={pdf}
            className="w-full h-full border rounded-lg"
            title="PDF Viewer"
          />
        </div>
      )}
    </div>
  );
}
