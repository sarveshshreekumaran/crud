import React, { useState } from "react";

function CreateItemComponent(props) {
  const { setItems, getItems } = props;
  const [item, setItem] = useState({ title: "", subtitle: "" });

  const onChange = (e) => {
    setItem((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    async function postItem(url, data) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return response.json();
    }

    postItem("http://localhost:4000", item)
      .then((data) => {
        setItems((prevState) => [...prevState, item]);
        getItems().catch((error) => {
          console.log(error);
        });
        setItem({ title: "", subtitle: "" });
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <main>
        <section>
          <form onSubmit={onSubmit}>
            <section>
              <label htmlFor="title">
                Title:
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter Title"
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
                  placeholder="Enter Subtitle"
                  value={item.subtitle}
                  onChange={onChange}
                  required
                />
              </label>
            </section>
            <section>
              <button type="submit">Add Item</button>
            </section>
          </form>
        </section>
      </main>
    </>
  );
}

export default CreateItemComponent;
