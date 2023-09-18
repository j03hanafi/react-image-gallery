const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 w-full max-w-sm shadow-lg">
      <div className="bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden shadow-lg">
        <img src={image.webformatURL} alt="" className="w-full" />
      </div>
      <div className="p-6 overflow-hidden">
        <div className="mb-3">
          <span className="block antialiased tracking-normal font-sans text-xl leading-snug font-medium">
            Photo by @{image.user}
          </span>
        </div>
        <ul className="block antialiased font-sans text-base font-light leading-relaxed text-gray-700">
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="p-6 mt-auto overflow-hidden">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-sans text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
