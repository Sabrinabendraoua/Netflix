import data from "../data.json";

console.log(data);

const movie = () => {
  return data.map((movieSelection) => {
    return (
      <section>
        <h2>{movieSelection.category}</h2>
        <div className="caroussel">
          <img src="" alt="" />
        </div>
      </section>
    );
  });
};
export default movie;
