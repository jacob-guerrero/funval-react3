import { useState, useEffect } from "react";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Options from "./components/Options";
import Loading from "./components/Loading";

function App() {
  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
  const [searchedImg, setSearchedImg] = useState("mountain");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImages = async (query) => {
    setLoading(true);
    try {
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
      const res = await fetch(url);
      const images = await res.json();
      setImages(images.photos.photo);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImages(searchedImg);
  }, [searchedImg]);

  return (
    <>
      <h1 className="text-center text-5xl font-bold py-4 px-2">SnapShot</h1>

      <Form setSearchedImg={setSearchedImg} />
      <Options setSearchedImg={setSearchedImg} />

      <h2 className="my-10 text-center text-3xl font-semibold">
        <span id="searched-word" className="capitalize">
          {searchedImg}
        </span>{" "}
        Images
      </h2>

      {loading ? <Loading /> : <Gallery images={images} />}
    </>
  );
}

export default App;
