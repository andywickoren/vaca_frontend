import "./Gallery.css";

function Gallery({ selectedTrip, dominantColor }) {
  const tripImages = selectedTrip.images;
  const backgroundColor = dominantColor
    ? `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.5)`
    : "white"; // Fallback to white if no dominant color is found

  return (
    <div
      className="gallery"
      style={{
        backgroundColor: backgroundColor, // Apply the dominant color as background
      }}
    >
      <div className="gallery__grid">
        {tripImages.map((image, index) => (
          <div key={index} className="gallery__item">
            <img
              src={image}
              alt={`Trip Image ${index}`}
              className="gallery__img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
