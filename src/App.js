import "bootstrap/dist/css/bootstrap.css";
//lo tengo que importar porque si no, no me anda el dropdown
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./components/navbar";
import Main from "./components/main"

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Main />
      </main>
    </div>
  );
}

export default App;
