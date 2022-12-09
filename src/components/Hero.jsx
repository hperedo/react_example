function Hero() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner mb-3">
        <div className="carousel-item active">
          <img
            src={"https://picsum.photos/200/300"}
            className="d-block w-100"
            alt="..."
            width="100vw"
            height="450vh"
          />
        </div>
        <div className="carousel-item">
          <img
            src={"https://picsum.photos/200/300"}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={"https://picsum.photos/200/300"}
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
