import "./App.css";
import Form from "./pages/Form";
import Form2 from "./pages/Form2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form3 from "./pages/Form3";

function App() {
  return (
    <BrowserRouter>
      <div className="form">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;