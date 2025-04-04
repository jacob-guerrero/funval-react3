export default function Options({ onClick }) {
  const searchOpts = ["Mountain", "Ocean", "Cats", "Food"];
  return (
    <ul className="w-full max-w-md mx-auto flex flex-col gap-2 md:flex-row md:gap-4">
      {searchOpts.map((opt, index) => (
        <li
          key={index}
          onClick={onClick}
          value={opt}
          className="bg-black text-white font-semibold text-center p-2 rounded-md md:flex-1 cursor-pointer"
        >
          {opt}
        </li>
      ))}
    </ul>
  );
}
