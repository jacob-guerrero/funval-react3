export default function Form() {
  return (
    <form action="GET" className="w-full max-w-md mx-auto my-10 flex">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search..."
        className="w-full bg-gray-200 px-4 py-2 rounded-tl-lg rounded-bl-lg"
      />
      <button className="w-20 bg-black flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer">
        <img src="/icons/search.svg" alt="search button" className="w-6" />
      </button>
    </form>
  );
}
