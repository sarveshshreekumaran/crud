import React, { useState } from "react";

function UpdateItemComponent(props) {
  const { id, title, subtitle, setItems, setEdit, getItems } = props;
  const [item, setItem] = useState({
    title: title,
    subtitle: subtitle,
  });

  const onChange = (e) => {
    setItem((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    async function updateItem(url, data) {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return response.json();
    }

    updateItem(`http://localhost:4000/${id}`, item)
      .then((data) => {
        console.log(data);
        setEdit("");
        setItems((prevState) => [...prevState, item]);
        getItems().catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title"
            value={item.title}
            onChange={onChange}
            required
          />
        </label>
        <label htmlFor="subtitle">
          Subtitle:
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            placeholder="Enter subtitle"
            value={item.subtitle}
            onChange={onChange}
            required
          />
        </label>
        <button type="submit">Update Item</button>
        <button onClick={() => setEdit("")}>Cancel</button>
      </form>
    </div>
  );
}

export default UpdateItemComponent;
