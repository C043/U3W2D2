import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";

import horrorBooks from "./data/horror.json";

const App = () => (
  <>
    <MyNav />;
    <Welcome />
    <BookList genre={horrorBooks} />
    <MyFooter />
  </>
);
export default App;
