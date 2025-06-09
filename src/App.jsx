import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import Homepage from "./pages";
import Components from "./pages/components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
