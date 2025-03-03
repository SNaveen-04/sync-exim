import { pdfjs } from "react-pdf";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Flip, ToastContainer } from "react-toastify";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const About = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BusinessVerticalsPage = lazy(() =>
  import("./pages/BusinessVerticalsPage")
);
const CertificatesPage = lazy(() => import("./pages/CertificatesPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/sync-exim" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<>...</>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<>...</>}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="verticals"
            element={
              <Suspense fallback={<>...</>}>
                <BusinessVerticalsPage />
              </Suspense>
            }
          />
          <Route
            path="certificates"
            element={
              <Suspense fallback={<>...</>}>
                <CertificatesPage />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<div>Page Not found</div>} />
      </Routes>

      <ToastContainer
        position="bottom-left"
        transition={Flip}
        autoClose={2500}
        hideProgressBar
        theme="colored"
      />
    </>
  );
}

export default App;
