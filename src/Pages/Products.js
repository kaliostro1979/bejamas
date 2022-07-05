import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../redux/actions/getProducts";
import FeaturedProduct from "../Components/FeaturedProduct";
import {getFeaturedProduct} from "../redux/actions/getFeaturedProduct";
import ProductsGridItem from "../Components/Products/ProductsGridItem";
import CategoriesList from "../Components/Categories/CategoriesList";
import {getCategories} from "../redux/actions/getCategories";
import ProductsGridHeader from "../Components/Products/ProductsGridHeader";

function Products() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const categories = useSelector(state => state.categories)
    const featured = useSelector(state => state.featured_product)
    const filtered_products_by_category = useSelector(state => state.filtered_products_by_category)
    const filtered_products_by_price = useSelector(state => state.filtered_products_by_price)
    let filteredProductsArray = []

    const priceRange = [
        {
            name: "Lower than $20",
            min: 0,
            max: 20
        },
        {
            name: "$20 - $100",
            min: 20,
            max: 100
        },
        {
            name: "$100 - $200",
            min: 100,
            max: 200
        },
        {
            name: "More than $200",
            min: 200,
            max: null
        }
    ]
    let filterResult = false
    let notFiltered = false

    function compareArrays(prices, categories) {
        if (!prices.length) {
            return categories;
        }
        if (!categories.length) {
            return prices;
        }
        const arr = [];
        for (const price of prices) {
            for (const category of categories) {
                if (price.category === category.category && price.price === category.price) {
                    arr.push(price);
                }
            }
        }
        return arr;
    }

    filteredProductsArray = compareArrays(filtered_products_by_price, filtered_products_by_category)

    if (filtered_products_by_price.length || filtered_products_by_category.length) {
        if (filteredProductsArray.length && !notFiltered){
            filterResult = true
        }
        if (!filteredProductsArray.length && !notFiltered){
            filterResult = false
        }
    }

    if (!filtered_products_by_price.length && !filtered_products_by_category.length && !filteredProductsArray.length) {
        notFiltered = true
    }

    useEffect(() => {
        dispatch(getProducts('name'))
        dispatch(getFeaturedProduct())
        dispatch(getCategories())

    }, [dispatch])

    return (
        <main className={'products'}>
            <div className={'container'}>
                {
                    Object.keys(featured).length ? <FeaturedProduct featured={featured}/> : ""
                }
                <section className={'products-section'}>
                    <ProductsGridHeader/>
                    <div className="products-section__inner">
                        <div className={'products-categories products-section--left'}>
                            <CategoriesList items={categories} title={'Categories'}/>
                            <CategoriesList items={priceRange} title={'Price'}/>
                        </div>
                        <div className={'products-grid products-section--right'}>

                            {
                                notFiltered ? products.map((product, i) => {
                                    if (!product.featured) {
                                        return (
                                            <div className={'products-grid__item-wrapper'} key={product.slug}>
                                                <ProductsGridItem product={product}/>
                                            </div>
                                        )
                                    }
                                    return null
                                }) : filterResult ? filteredProductsArray.map((product, i) => {
                                    if (!product.featured) {
                                        return (
                                            <div className={'products-grid__item-wrapper'} key={product.slug}>
                                                <ProductsGridItem product={product}/>
                                            </div>
                                        )
                                    }
                                    return null
                                }) : <h1>No matching products</h1>
                            }
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Products;
