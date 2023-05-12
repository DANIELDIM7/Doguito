import "../assets/css/componentes/card.css";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // trae los datos del id del post
import { buscar } from "../api/api";

const Post = ({ url }) => {
  const [post, setPosts] = useState({});

  const { id } = useParams(); // Esta función trae los datos del identificador

  const navigate = useNavigate()

  useEffect(() => {
    buscar(`/posts/${id}`, setPosts).catch(() =>{
        navigate('/not-found') //Con catch en caso de una url inexistente entonces con navigate me va a redirijir al componente 404, dado a que la url es inexistente
    })
     // busca la url del post por medio de su identificador id que viene de la función useParams y guarda los datos en el state
  }, [id])
  

  return (
    <main className="container flex flex--center">
      <article className="card post">
        <h2 className="post-card__title">{post.title}</h2>
        <p className="text__card">{post.body}</p>
      </article>
    </main>
  );
};

export default Post;
