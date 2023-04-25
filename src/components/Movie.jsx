import data from "../data.json";
console.log(data);

const movie = () => {
  return (
    <div>
      {data.map((movieSelection) => {
        console.log(movieSelection.images);
        const movieUrls = movieSelection.images;
        return (
          <section>
            <h2>{movieSelection.category}</h2>

            {movieUrls.map((url) => {
              console.log(url);
              return (
                <div className="caroussel">
                  <img src={url} alt="" />
                </div>
              );
            })}
          </section>
        );
      })}
      ;
    </div>
  );
};
export default movie;
