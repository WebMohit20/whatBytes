'use client'
import { products } from "@/data/cart-data";
import CartContext from "@/context/globalContext";
import { useState, useContext } from "react";
import "../styles/index.css";

const Home = () => {
    const [search, setSearch] = useState('');
    const { cart } = useContext(CartContext);
    const [range,setRange] = useState([false,0]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const rangeFilter = products.filter(p => {
        
            return p.price <= range[1];
        
    });
    const radioFilter = selectedCategory === 'all'
        ? products
        : products.filter(p => p.category === selectedCategory);

    const filteredProducts = range[0]?rangeFilter:radioFilter;
    function handleRangeChange(e) {
        setRange([true,e.target.value]);
    }
    function handleCategoryChange(category) {
        setRange([false,0]);
        setSelectedCategory(category);
    }
    return (
        <div className="home-container min-h-screen bg-gradient-to-br from-blue-50 to-white">
           
            <header className="header flex items-center justify-between px-8 py-4 bg-blue-800">
                <div className="logo font-bold text-2xl text-white">Logo</div>
                <div className="search-bar flex-1 mx-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded bg-blue-700 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <span className="absolute left-3 top-2.5 text-blue-200 text-lg">🔍</span>
                    </div>
                </div>
                <button className="cart-button flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded transition">
                    <span className="text-xl">🛒</span>
                    Cart
                    {/* {cart.length > 0 && (
                        <span className="ml-1 bg-red-500 text-xs rounded-full px-2 py-0.5">{cart.length}</span>
                    )} */}
                </button>
            </header>

          
             <main className="main-section flex flex-col md:flex-row px-4 md:px-12 py-8 gap-8">
              
                <aside className="sidebar w-full md:w-72 bg-white rounded-xl shadow p-6 mb-8 md:mb-0">
                    <h3 className="filters text-xl font-semibold mb-6 text-blue-800">Filters</h3>
                    <div className="filter-section mb-6">
                        <h4 className="font-semibold mb-3 text-blue-700">Category</h4>
                        <div className="flex flex-col gap-2 text-blue-900">
                            <label className="category-filter flex items-center gap-2">
                                <input 
                                    type="radio" 
                                    name="category" 
                                    value="all"
                                    checked={selectedCategory === 'all'}
                                    onChange={() => handleCategoryChange('all')}
                                    className="accent-blue-600" 
                                      />
                                All
                            </label>
                            <label className="category-filter flex items-center gap-2">
                                <input 
                                    type="radio" 
                                    name="category" 
                                    value="electronics"
                                    checked={selectedCategory === 'electronics'}
                                    onChange={() => handleCategoryChange('electronics')}
                                    className="accent-blue-600" />
                                Electronics
                            </label>
                            <label className="category-filter flex items-center gap-2">
                                <input 
                                    type="radio" 
                                    name="category" 
                                    value="clothing"
                                    checked={selectedCategory === 'clothing'}
                                    onChange={() => handleCategoryChange('clothing')}
                                    className="accent-blue-600" />
                                Clothing
                            </label>
                            <label className="category-filter flex items-center gap-2">
                                <input 
                                    type="radio" 
                                    name="category" 
                                    value="home"
                                    checked={selectedCategory === 'home'}
                                    onChange={() => handleCategoryChange('home')}
                                    className="accent-blue-600" />
                                Home
                            </label>
                        </div>
                    </div>
                    <div className="filter-section mb-6">
                        <h4 className="font-semibold mb-3 text-blue-700">Price</h4>
                        <input 
                            type="range" 
                            min="0"
                            max="1000"
                            value ={range[1]} 
                            className="range-slider w-full accent-blue-600"
                            onChange={handleRangeChange} />
                        <div className="range-digits flex justify-between text-xs text-blue-400 mt-1">
                            <span>{range[1]}</span>
                            {/* <span>1000</span> */}
                        </div>
                    </div>
                    {/* <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Brand</h4>
                        <div className="flex flex-col gap-2 text-blue-900">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-blue-600" />
                                Apple
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-blue-600" />
                                Samsung
                            </label>
                        </div>
                    </div> */}
                </aside>

                
                <section className="product-grid flex-1">
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">Product Listing</h2>
                    <div className="product-layout grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="product-card bg-white rounded-xl shadow p-6 flex flex-col items-center">
                                <img src={product.image} alt={product.title} className="h-32 object-contain mb-4" />
                                <h3 className="font-semibold text-lg text-blue-900 mb-1 text-center">{product.title}</h3>
                                <p className="text-blue-700 font-bold mb-3 text-center">${product.price}</p>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition mb-2">
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
             </main>  
        </div>
    );
};

export default Home;