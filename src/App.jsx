import { Route, Routes } from "react-router-dom";
import { Products } from "./CodeHelp/components";
import NewProduct from "./CodeHelp/components/NewProduct";

// import { PasswordGenerator } from "./components/PasswordGenerator";

import TestimonialCard from "./components/TestimonialCard";
import { reviews } from "./constant/data";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Navigation from "./components/Navigation";
const App = () => {
  const products = [
    { id: "p1", title: "surf excel", amount: 100, date: new Date(2022, 19, 6) },
    { id: "p2", title: "Nirma", amount: 80, date: new Date(2023, 9, 7) },
    { id: "p3", title: "Gari", amount: 70, date: new Date(2021, 9, 8) },
    { id: "p4", title: "Maggi", amount: 20, date: new Date(2020, 9, 9) },
  ];
  return (
    <div>
      {/* <NewProduct />
      <Products items={products} />
      <TestimonialCard reviews={reviews} />
      {/* <PasswordGenerator /> */}
      <Navigation /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
