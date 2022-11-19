import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import ProductScreen from "./components/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <div>
        <header>
          <Link to="/">Lynx-cart</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen/>}></Route>
            <Route path="/" element={<HomeScreen/>}>

            </Route>
          </Routes>
          
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
