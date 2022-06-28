import { HelmetProvider } from "react-helmet-async";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={""} />
          <Route path="/about" element={""} />
          <Route path="/news" element={""} />
          <Route path="/thinking" element={""} />
          <Route path="/pledge" element={""} />
          <Route path="/careears" element={""} />
          <Route path="/contact" element={""} />
          <Route path="/*" element={""} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
