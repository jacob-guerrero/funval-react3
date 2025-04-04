import { useState, useEffect } from "react";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Options from "./components/Options";

function App() {
  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImages = async (query) => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const images = await res.json();

    setImages(images.photos.photo);
  };

  useEffect(() => {
    getImages("mountain");
  }, []);

  return (
    <>
      <h1 className="text-center text-5xl font-bold py-4 px-2">SnapShot</h1>

      <Form />
      <Options />

      <h2 className="my-10 text-center text-3xl font-semibold">
        <span id="searched-word">Mountain</span> Images
      </h2>

      <Gallery images={images} />
    </>
  );
}

export default App;
