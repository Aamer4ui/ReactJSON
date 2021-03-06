import "./App.css";
import  EventGall  from "./components/EventGall/EventGall";
// import { Home } from "./components/Home";
import { FetchingDataParent } from "./components/MainBody/FetchingDataParent";
import { UseStatePracticeParent } from "./components/UseStatePractice/UseStatePracticeParent";

const App = () => {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <UseStatePracticeParent/>
      <FetchingDataParent/> */}
      <EventGall />
    </div>
  );
};

export default App;
