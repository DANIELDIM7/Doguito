import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Page404 from "./pages/Page404.jsx";
import Sobre from "./pages/Sobre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./pages/Post";
import Categoria from "./pages/Categoria";
function App() {
  const location = window.location.pathname;
  console.log(location);

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* Des esta forma se van agregando las diferentes rutas que va a tener la página */}
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/posts/:id" element={<Post/>}/>
        <Route path="/categoria/:id/*" element={<Categoria/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
