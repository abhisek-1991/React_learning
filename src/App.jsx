import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

function App() {
  return (
    <div>
      <div style={({background: "black"})}>
        Hi this is the topbar
      </div>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Landing/>}/>
      </Routes>

      </BrowserRouter>
      </div>
  )
}


export default App;

