import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "pages/NotFound";
const Servicespage = React.lazy(() => import("pages/Servicespage"));
const Contactpage = React.lazy(() => import("pages/Contactpage"));
const Aboutpage = React.lazy(() => import("pages/Aboutpage"));
const Landingpage = React.lazy(() => import("pages/Landingpage"));
import SignInPage from "pages/SignIn page/SignIInPage";
import SignUpPage from "pages/SignUP/SignUp";
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/services" element={<Servicespage />} />
          <Route path='/signin' element= {<SignInPage />}   />
          <Route path='/signup' element= {<SignUpPage />}   />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
