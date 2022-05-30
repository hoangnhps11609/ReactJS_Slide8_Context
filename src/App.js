import "./App.css";
import ThemeChange from "./components/ThemeChange";
import ThemeContextProvider from "./context/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <ThemeChange></ThemeChange>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
