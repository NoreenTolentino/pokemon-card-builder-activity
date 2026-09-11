import { useState, useEffect } from "react";
import "./App.css";
import Pikachu from "./assets/Pikachu2.png";

function App() {
  const [form, setForm] = useState({
    name: "",
    element: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [submittedCard, setSubmittedCard] = useState({
    name: "Pikachu",
    element: "Electric",
    hp: 60,
    attack: 23,
    defense: 11,
    speed: 80,
    image: Pikachu,
  });

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  function handleForm(event) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleImage(event) {
    const file = event.target.files[0];
    if (file) {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
      const fileUrl = URL.createObjectURL(file);
      setImagePreview(fileUrl);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedCard({
      name: form.name || "Pikachu",
      element: form.element || "Electric",
      hp: form.hp || 60,
      attack: form.attack || 0,
      defense: form.defense || 0,
      speed: form.speed || 0,
      image: imagePreview || Pikachu,
    });
  }

  return (
    <div className="main-layout">
      {}
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Pokémon Builder</h2>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleForm}
            value={form.name}
            placeholder="e.g. Pikachu"
          />
        </div>

        <div className="form-group">
          <label>Element</label>
          <input
            type="text"
            name="element"
            onChange={handleForm}
            value={form.element}
            placeholder="e.g. Electric"
          />
        </div>

        {}
        <div className="form-grid">
          <div className="form-group">
            <label>HP</label>
            <input
              type="number"
              name="hp"
              onChange={handleForm}
              value={form.hp}
              placeholder="60"
            />
          </div>

          <div className="form-group">
            <label>Attack</label>
            <input
              type="number"
              name="attack"
              onChange={handleForm}
              value={form.attack}
              placeholder="23"
            />
          </div>

          <div className="form-group">
            <label>Defense</label>
            <input
              type="number"
              name="defense"
              onChange={handleForm}
              value={form.defense}
              placeholder="11"
            />
          </div>

          <div className="form-group">
            <label>Speed</label>
            <input
              type="number"
              name="speed"
              onChange={handleForm}
              value={form.speed}
              placeholder="80"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Image</label>
          <input type="file" accept="image/*" onChange={handleImage} />
        </div>

        <button type="submit">Submit</button>
      </form>

      {}
      <Card
        name={submittedCard.name}
        element={submittedCard.element}
        hp={submittedCard.hp}
        attack={submittedCard.attack}
        defense={submittedCard.defense}
        speed={submittedCard.speed}
        image={submittedCard.image}
      />
    </div>
  );
}

function Card({ name, element, hp, attack, defense, speed, image }) {
  return (
    <div className="class-container">
      <div className="background-div"></div>
      <div id="hp-bar">HP {hp}</div>

      <img src={image} alt={name} />

      <div className="stats">
        <h1>{name}</h1>
        <h5 className="element">{element}</h5>

        <div className="fighting-stats">
          <p>Attack: {attack}</p>
          <p>Defense: {defense}</p>
          <p>Speed: {speed}</p>
        </div>
      </div>
    </div>
  );
}
export default App;