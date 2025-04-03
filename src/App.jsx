import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Options from "./components/Options";

function App() {
  return (
    <>
      <h1 className="text-center text-5xl font-bold py-4 px-2">SnapShot</h1>

      <Form />
      <Options />

      <h2 className="my-10 text-center text-3xl font-semibold">
        <span id="searched-word">Mountain</span> Images
      </h2>

      <Gallery />
    </>
  );
}

export default App;
