import React, { useState } from "react";

const CatForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to server, including the image data if needed
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  

  return (
    <div className="p-4 border border-gray-300 rounded">
      <h2 className="text-xl mb-4">Add Cat</h2>

      <div className="mb-4">
        <label htmlFor="image" className="block mb-1">
          Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="breed" className="block mb-1">
            Breed
          </label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block mb-1">
            Age
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="w-full px-3 py-2 border rounded"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>

      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
        Remove Cat
      </button>
    </div>
  );
};

export default CatForm;