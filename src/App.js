import {BrowserRouter, Routes, Route} from "react-router-dom";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Header from "./Components/Header";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/products" element={<Products />}/>
                <Route path="/products/:slug" element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
