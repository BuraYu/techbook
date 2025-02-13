import "./App.css";
import AlternateButton from "./components/AlternateButton";
import PrimaryButton from "./components/PrimaryButton";

function App() {
  return (
    <div className="App">
      <PrimaryButton title={"button"} />
      <AlternateButton title={"alternate button"} />
    </div>
  );
}

export default App;
