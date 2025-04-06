const Error = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-4 flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl font-semibold">No Images Found</h2>
      <p>
        We couldn't find any images matching your search. Please try again with
        a different keyword.
      </p>
    </div>
  );
};

export default Error;
