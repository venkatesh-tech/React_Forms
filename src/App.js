import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import { PureComponent } from "react";
import RefDemo from "./components/RefDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <PureComponent /> */}
      {/* <RefDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      <PortalDemo />
    </div>
  );
}

export default App;
