import "./App.css";
import { NavBar } from "./components/common/NavBar";
import { Company } from "./components/sections/Company";
import { Conversation } from "./components/sections/Coversation";
import { Home } from "./components/sections/Home";
import { Poster } from "./components/sections/Poster";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Home />
        <Conversation />
        <Poster />
        <Company />
      </main>
    </div>
  );
}

export default App;
