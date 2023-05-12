import { useState, useEffect } from "react";
import "../assets/css/blog.css";
import { buscar } from "../api/api";
import ListCategories from "../components/ListCategories";
import ListPosts from "../components/ListPost";
import {
  useParams,
  Routes,
  Route,
  Link,
  useResolvedPath,
} from "react-router-dom";
import SubCategoria from "./SubCategorias";

const Categoria = () => {
  const [subcategorias, setSucategorias] = useState([]);
  const { id } = useParams();
  const url = useResolvedPath("").pathname; // para encontrar la ruta inicial de la url


  useEffect(() => {
    buscar(`categorias?id=${id}`, (response) => {
      setSucategorias(response[0].subcategorias); //Guarda los datos de las subcategorias en un state
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="title-page">Pet Noticias</h2>
      </div>
      <ListCategories />
      <ul className="category-list container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`category-list__category category-list__category--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route
          path="/"
          element={<ListPosts url={`/posts?categoria=${id}`} />}
        />
        <Route path="/:subcategoria" element={<SubCategoria />} />
      </Routes>
    </>
  );
};

export default Categoria;
