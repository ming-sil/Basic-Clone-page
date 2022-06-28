import { HelmetProvider } from "react-helmet-async";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./Pages/Home";
import { Work } from "./Pages/Work";
import { About } from "./Pages/About";
import { News } from "./Pages/News";
import { Thinking } from "./Pages/Thinking";
import { Pledge } from "./Pages/Pledge";
import { Careers } from "./Pages/Careers";
import { Contact } from "./Pages/Contact";
import { NotFound } from "./Pages/NotFound";
import { Footer } from "./components/Footer";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/thinking" element={<Thinking />} />
          <Route path="/pledge" element={<Pledge />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
