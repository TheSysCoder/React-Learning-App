import { Routes, Route } from "react-router-dom";
import Advance from "./Routes/Advanced/Advance.routes";
import Basics from "./Routes/Basics/Basics.routes";
import Home from "./Routes/Home/Home.routes";
import Navigation from "./Routes/Navigation/Navigation.routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/basics" element={<Basics />}></Route>
        <Route path="/advance" element={<Advance />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
