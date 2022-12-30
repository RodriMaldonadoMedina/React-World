import "bootstrap/dist/css/bootstrap.css";
//lo tengo que importar porque si no, no me anda el dropdown
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./components/navbar.jsx";
import Main from "./components/main.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaisExtendido from "./components/paisExtendido.jsx";

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log(defaultDark);
  return (
    <BrowserRouter>
      {/* REVISAR ESTE DIV CON SU CLASE */}
      <div data-theme="dark" className="App">
        <header>
          <Navbar />
        </header>
        <main className="container">
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/info/:nombrePais" element={<PaisExtendido/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
