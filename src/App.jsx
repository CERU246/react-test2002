import { Footer } from "./components/layouts/Footer/Footer";
import { Navbar } from "./components/layouts/Navbar/Navbar";
import { Productos } from "./components/pages/itemListContainer/Productos";

function App() {
  return (
    <div>
      <Navbar />
      <Productos hello="Hola Profe" goodbye="Chau Profe" />
      <Footer />
    </div>
  );
}

export default App;
