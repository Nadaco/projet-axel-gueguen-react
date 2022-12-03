import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [nameArticle, setNameArticle] = useState("");
  const [messageArticle, setMessageArticle] = useState("");
  const [errorForm, setErrorForm] = useState(false);

  // Met à jour un Article
  const updateArticle = (article) => {
    axios
      .put(`http://localhost:3003/articles/${article.id}`, article)
      .catch((error) => {
        console.log(error);
      });
  };

  // Supprime un Article
  const deleteArticle = (article) => {
    axios
      .delete(`http://localhost:3003/articles/${article.id}`)
      .then(() => {
        setArticles(articles.filter((art) => art.id !== article.id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Ajoute un Article
  const addArticle = (article) => {
    axios.post(`http://localhost:3003/articles`, article).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3003/articles")
      .then((response) => {
        if (response.data) {
          setArticles(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [articles]);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Blog</h1>
        <input
          type="text"
          value={nameArticle}
          placeholder="Nom"
          style={{
            border: "2px solid orange",
            padding: "0.5em",
            width: "40%",
          }}
          onChange={(event) => {
            setNameArticle(event.target.value);
            setErrorForm(false);
          }}
        />
        {errorForm && nameArticle.length === 0 ? (
          <p style={{ color: "red" }}>Veuillez remplir un Nom</p>
        ) : null}
        <textarea
          value={messageArticle}
          placeholder="Message"
          style={{
            border: "2px solid orange",
            marginTop: "1em",
            padding: "0.5em",
            minWidth: "40%",
            maxWidth: "40%",
            minHeight: "10em",
            maxHeight: "30em",
          }}
          onChange={(event) => {
            setMessageArticle(event.target.value);
            setErrorForm(false);
          }}
        />
        {errorForm && messageArticle.length < 140 ? (
          <p style={{ color: "red" }}>
            Veuillez écrire un minimum de 140 caractères
          </p>
        ) : null}
        <input
          type="button"
          value={"Envoyer"}
          style={{
            padding: "0.5em",
            marginTop: "1em",
            width: "20em",
            border: 0,
            borderRadius: "0.5em",
            backgroundColor: "white",
          }}
          onClick={() => {
            if (
              messageArticle.trim().length > 139 &&
              nameArticle.trim().length > 0
            ) {
              addArticle({
                author: nameArticle,
                content: messageArticle,
                date: new Date().getTime(),
                id: articles[articles.length - 1].id + 1,
              });
              setNameArticle("");
              setMessageArticle("");
            } else {
              setErrorForm(true);
            }
          }}
        />
      </div>
      {articles.map((article) => (
        <Article
          key={`article-${article.id}`}
          article={article}
          updateArticle={updateArticle}
          deleteArticle={deleteArticle}
        ></Article>
      ))}
    </>
  );
};

export default Blog;
