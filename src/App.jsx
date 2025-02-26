import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import BusinessVerticalsPage from "./pages/BusinessVerticalsPage";
// import ContactPage from "./pages/ContactPage";
// import CertificatesPage from "./pages/CertificatesPage";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function App() {
  return (
    <>
      <Routes>
        <Route path="/sync-exim" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="verticals" element={<BusinessVerticalsPage />} />
          <Route path="certificates" element={<CertificatesPage />} /> */}
        </Route>
        <Route path="*" element={<div>Page Not found</div>} />
      </Routes>
    </>
  );
}

export default App;
