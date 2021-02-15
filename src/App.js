import "./App.css";
// import { Home } from "./components/Home";
import { FetchingDataParent } from "./components/MainBody/FetchingDataParent";
import { UseStatePracticeParent } from "./components/UseStatePractice/UseStatePracticeParent";

const App = () => {
  return (
    <div className="App">
      {/* <Home /> */}
      <UseStatePracticeParent/>
      <FetchingDataParent/>
    </div>
  );
};

export default App;
