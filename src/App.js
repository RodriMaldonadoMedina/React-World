import "bootstrap/dist/css/bootstrap.css";
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
