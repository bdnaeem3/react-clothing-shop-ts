import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={"hello"} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
