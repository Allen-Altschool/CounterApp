import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Counter from "./components/counter";
import UseReducer from "./components/useReducer";
import NotFound from "./components/notfound";
import ErrorBoundary from "./components/errorboundary";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <ErrorBoundary>
      <section className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/useReducer" element={<UseReducer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </ErrorBoundary>
  );
}
export default App;
