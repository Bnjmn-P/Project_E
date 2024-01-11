import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Gallery1 from "./Pages/Gallery1";
import Gallery2 from "./Pages/Gallery2";
import Gallery3 from "./Pages/Gallery3";
import Contact from "./Pages/Contact";

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Gallery1" element={<Gallery1 />} />
            <Route path="Gallery2" element={<Gallery2 />} />
            <Route path="Gallery3" element={<Gallery3 />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Router />);