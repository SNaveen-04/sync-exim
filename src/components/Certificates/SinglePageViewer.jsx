/* eslint-disable react/prop-types */
import { Document, Page } from "react-pdf";

export default function SinglePage(props) {
  const { pdf } = props;

  return (
    <div className="flex items-center flex-col">
      <div className="flex justify-center p-2 overflow-auto">
        <Document file={pdf}>
          <Page
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </div>
    </div>
  );
}
