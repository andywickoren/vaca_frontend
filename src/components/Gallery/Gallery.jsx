import "./Gallery.css";

function Gallery({ selectedTrip }) {
  const tripImages = selectedTrip.images;
  return (
    <div className="gallery">
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
