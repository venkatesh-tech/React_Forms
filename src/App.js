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
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter from "./components/Counter";

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
      {/* <ClickCounter name="Venkatesh" /> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "Venkatesh" : "Guest")} /> */}
      <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
