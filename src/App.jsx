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
const CertificatesPage = lazy(() => import("./pages/CertificatesPage"));
const ProductEnquiryPage = lazy(() => import("./pages/ProductEnquiryPage"));
const SpicesPage = lazy(() => import("./pages/SpicesPage"));
const GarmentsPage = lazy(() => import("./pages/GarmentsPage"));
const NoodlesPage = lazy(() => import("./pages/NoodlesPage"));
const OthersPage = lazy(() => import("./pages/OthersPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
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
            path="verticals/spices"
            element={
              <Suspense fallback={<>...</>}>
                <SpicesPage />
              </Suspense>
            }
          />
          <Route
            path="verticals/garments"
            element={
              <Suspense fallback={<>...</>}>
                <GarmentsPage />
              </Suspense>
            }
          />
          <Route
            path="verticals/noodles"
            element={
              <Suspense fallback={<>...</>}>
                <NoodlesPage />
              </Suspense>
            }
          />
          <Route
            path="verticals/others"
            element={
              <Suspense fallback={<>...</>}>
                <OthersPage />
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
          <Route
            path="product-enquiry"
            element={
              <Suspense fallback={<>...</>}>
                <ProductEnquiryPage />
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
