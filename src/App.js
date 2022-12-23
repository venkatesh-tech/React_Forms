import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import { PureComponent } from "react";

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo /> */}
      <PureComponent />
    </div>
  );
}

export default App;
