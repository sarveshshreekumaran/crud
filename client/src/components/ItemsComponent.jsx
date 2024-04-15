import React, { useState } from "react";
import UpdateItemComponent from "./UpdateItemComponent";

function ItemComponent(props) {
  const { items, setItems, isLoading, getItems } = props;
  const [edit, setEdit] = useState("");

  const onClick = (itemId) => {
    async function deleteItem(url) {
      const response = await fetch(url, {
        method: "DELETE",
      });

      return response.json();
    }

    deleteItem(`http://localhost:4000/${itemId}`)
      .then(() => {
        const updatedItems = items.filter((item) => item._id !== itemId);
        setItems(updatedItems);
        getItems().catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        console.log(console.error(error));
      });
  };
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: "none" }}>
          {items.map((item, index) => {
            return (
              <li key={index}>
                {index === edit ? (
                  <UpdateItemComponent
                    id={item._id}
                    title={item.title}
                    subtitle={item.subtitle}
                    setEdit={setEdit}
                    setItems={setItems}
                    getItems={getItems}
                  />
                ) : (
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.subtitle}</p>
                  </div>
                )}
                <button onClick={() => setEdit(index)}>Edit</button>
                <button onClick={() => onClick(item._id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ItemComponent;
