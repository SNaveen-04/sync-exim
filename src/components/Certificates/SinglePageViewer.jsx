/* eslint-disable react/prop-types */
import { Document, Page } from "react-pdf";

export default function SinglePage(props) {
  const { pdf } = props;

  return (
    <>
      <Document file={pdf}>
        <Page
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
    </>
  );
}
