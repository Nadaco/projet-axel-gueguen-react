import { useEffect, useState } from "react";

const Article = (props) => {
  const [newArticle, setNewArticle] = useState(props.article);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    props.updateArticle(newArticle);
  }, [newArticle]);

  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          margin: "2em",
          padding: "1em",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ margin: "0" }}>{newArticle.author}</h1>
          <i>{`Posté le ${new Date(newArticle.date).toLocaleString("default", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })} à 
            ${new Date(newArticle.date).toLocaleString("default", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: false,
            })}
            `}</i>
        </div>
        {!isEditing ? (
          <p>{newArticle.content}</p>
        ) : (
          <textarea
            defaultValue={newArticle.content}
            style={{
              width: "100%",
              height: "6em",
              marginTop: "0.5em",
              marginBottom: "0.5em",
              maxWidth: "100%",
              minWidth: "100%",
            }}
            onChange={(e) => {
              setNewArticle({ ...newArticle, content: e.target.value });
            }}
          />
        )}
        <div style={{ display: "flex", justifyContent: "right" }}>
          <input
            type="button"
            value={isEditing ? "Valider" : "Modifier"}
            style={{ marginRight: "0.5em" }}
            onClick={(e) => {
              if (!isEditing) {
                setIsEditing(true);
              } else {
                setNewArticle({ ...newArticle, date: new Date().getTime() });
                setIsEditing(false);
              }
            }}
          />
          <input
            type="button"
            value="Supprimer"
            onClick={(e) => {
              props.deleteArticle(newArticle);
              e.target.parentNode.parentNode.remove();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
