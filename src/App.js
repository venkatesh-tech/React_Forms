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
import Hero from "./components/Hero";
import HeroErrorBoundary from "./components/HeroErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

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
      {/* <PortalDemo /> */}
      {/* <HeroErrorBoundary>
        <Hero heroName="Batman" />
      </HeroErrorBoundary>
      <HeroErrorBoundary>
        <Hero heroName="Superman" />
      </HeroErrorBoundary>
      <HeroErrorBoundary>
        <Hero heroName="Joker" />
      </HeroErrorBoundary> */}
      <ClickCounter name="Venkatesh" />
      <HoverCounter />
    </div>
  );
}

export default App;
