function App() {
  return (
    <>
      <h1 className="text-center text-5xl font-bold py-4 px-2">SnapShot</h1>

      <form action="GET" className="w-full max-w-md mx-auto my-10 flex">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="w-full bg-gray-200 px-4 py-2 rounded-tl-lg rounded-bl-lg"
        />
        <button className="w-20 bg-black flex justify-center items-center rounded-tr-lg rounded-br-lg">
          <img src="/icons/search.svg" alt="search button" className="w-6" />
        </button>
      </form>
    </>
  );
}

export default App;
