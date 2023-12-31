import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { ConfirmedOrderSection } from "../../components/pages/home/ConfirmedOrderSection/ConfirmedOrderSection";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/confirmed" element={<ConfirmedOrderSection/>}></Route>
    </Routes>
  );
}
