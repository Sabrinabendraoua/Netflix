import data from "../data.json";
console.log(data);
const movie = () => {
  return data.map((movieSelection) => {
    return (
      <section>
        <h2>{movieSelection.category}</h2>
        {data.map((movieSelection) => {
          return (
            <div className="caroussel">
              <img src={movieSelection.images} alt="" />
            </div>
          );
        })}
      </section>
    );
  });
};
export default movie;
