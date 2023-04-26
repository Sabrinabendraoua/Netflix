import data from "../data.json";
console.log(data);

const movie = () => {
  return (
    <div>
      {data.map((movieSelection) => {
        console.log(movieSelection.images);
        const movieUrls = movieSelection.images;
        return (
          <section key={movieSelection.category}>
            <h2>{movieSelection.category}</h2>
            <div className="caroussel">
              {movieUrls.map((url) => {
                console.log(url);
                return <img src={url} alt="" />;
              })}
            </div>
          </section>
        );
      })}
      ;
    </div>
  );
};
export default movie;
