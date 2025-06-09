import { BrowserRouter, Routes, Route } from "react-router";
import Components from "./pages/components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={"hello"} />
        <Route path="components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
