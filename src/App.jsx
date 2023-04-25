import "./App.css";
import Movie from "./components/Movie";
import Header from "./components/Header";
const App = () => {
  return (
    <div className="container">
      <Header />
      <Movie />
    </div>
  );
};
export default App;
