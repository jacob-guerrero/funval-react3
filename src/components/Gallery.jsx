export default function Gallery({ images }) {
  /* const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
      name: "Mountain",
      category: "Mountain",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      name: "Ocean",
      category: "Ocean",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      name: "Cats",
      category: "Cats",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80",
      name: "Food",
      category: "Food",
    },
    {
      id: 5,
      src: "https://images.unsplash.co/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80",
      name: "Mountain",
      category: "Mountain",
    },
  ]; */

  return (
    <ul className="w-full pb-5 max-w-4xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(210px,_1fr))] gap-4">
      {images.map(({ id, farm, server, secret, title }) => (
        <li key={id} className="rounded-sm overflow-hidden">
          <img
            src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
            alt={title}
            className="w-full h-auto aspect-[4/3] bg-gray-100 object-cover object-center hover:scale-105 transition-transform duration-500 ease-out"
          />
        </li>
      ))}
    </ul>
  );
}
