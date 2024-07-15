import "./App.css";
import CreatedImage from "./components/created_image";

function App() {
  return (
    <div className="App">
      <h1 className="title">Create Image With AI</h1>
      <CreatedImage />
      <div className="input_section">
        <input type="text" placeholder="prompt"/>
        <button>Create</button>
      </div>
    </div>
  );
}

export default App;
