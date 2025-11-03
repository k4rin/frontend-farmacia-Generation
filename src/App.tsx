import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/navbar/Navbar";
import Footer from "./componentes/footer/Footer";
import Home from "./pages/home/Home";
import ListaCategorias from "./componentes/categoria/listacategorias/ListaCategorias";
import FormCategoria from "./componentes/categoria/formcategoria/FormCategoria";
import DeletarCategoria from "./componentes/categoria/deletarcategoria/DeletarCategoria";


function App() {
  return (
    <BrowserRouter>
      {/* Navbar sempre visível */}
      <Navbar />

      {/* Conteúdo principal */}
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/categorias/cadastrar" element={<FormCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />}
          />
          {/* Outras páginas depois */}
        </Routes>
      </div>
      
      {/* Footer sempre visível */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;
