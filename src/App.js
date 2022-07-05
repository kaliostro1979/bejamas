import {BrowserRouter, Routes, Route} from "react-router-dom";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Header from "./Components/Header";
import {useSelector} from "react-redux";

function App() {
    const mobileFiltersState = useSelector(state => state.mobile_filters_state)

    return (
        <main className={mobileFiltersState.open ? 'main filters-show' : 'main'}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/products" element={<Products />}/>
                    <Route path="/products/:slug" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
