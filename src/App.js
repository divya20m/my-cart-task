import React from "react";
import "./App.css";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState , useEffect } from "react";

const Product = ({ name, price, cartItems, setCartItems, updateCartCount }) => {
  const handleAddToCart = () => {
    setCartItems([...cartItems, name]);
    updateCartCount(cartItems.length + 1);
  };

  const handleRemoveFromCart = () => {
    const newCartItems = cartItems.filter((item) => item !== name);
    setCartItems(newCartItems);
    updateCartCount(cartItems.length - 1);
  };

  const isItemInCart = cartItems.includes(name);

  return (
    <Card style={{ height: "300px", width: "250px", borderRadius: "10px", backgroundColor: "lavender", margin: "10px" }}>
      <CardContent>
        <h1>{name}</h1>
        <h3>price: {price}$</h3>
      </CardContent>
      {isItemInCart ? (
        <Button size="small" onClick={handleRemoveFromCart}>
          Remove from cart
        </Button>
      ) : (
        <Button size="small" onClick={handleAddToCart}>
          Add to cart
        </Button>
      )}
    </Card>
  );
};

function App() {
  const style = {
    height: "300px",
    width: "250px",
    borderRadius: "10px",
    backgroundColor: "lavender",
    margin:"10px"
  };
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const updateCartCount = (count) => {
    setCartCount(count);
  };
  return (
    <div>
      <div className="button">
        <IconButton aria-label="cart">
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        Cart
      </div>
      <div className="top">
        <h1 style={{ fontSize: "50px" }}>Shoping in style</h1>
        <h6 style={{ fontSize: "20px", fontWeight: "300" }}>
          With this shop hompeage template
        </h6>
      </div>
      <div className="boxes">
        <Product name="Product1" price={100} cartItems={cartItems} setCartItems={setCartItems} updateCartCount={updateCartCount} />
        <Product name="Product2" price={200} cartItems={cartItems} setCartItems={setCartItems} updateCartCount={updateCartCount} />
        <Product name="Product3" price={300} cartItems={cartItems} setCartItems={setCartItems}  updateCartCount={updateCartCount}/>
        <Product name="Product4" price={400} cartItems={cartItems} setCartItems={setCartItems} updateCartCount={updateCartCount} />
        <Product name="Product5" price={500} cartItems={cartItems} setCartItems={setCartItems} updateCartCount={updateCartCount}/>
        <Product name="Product6" price={600} cartItems={cartItems} setCartItems={setCartItems} updateCartCount={updateCartCount}/>
        <Product name="Product7" price={700} cartItems={cartItems} setCartItems={setCartItems} updateCartCount={updateCartCount}/>
        <Product name="Product8" price={800} cartItems={cartItems} setCartItems={setCartItems} updateCartCount={updateCartCount}/>
        <Product name="Product9" price={900} cartItems={cartItems} setCartItems={setCartItems} updateCartCount={updateCartCount}/>
        <Product name="Product10" price={1000} cartItems={cartItems} setCartItems={setCartItems} updateCartCount={updateCartCount}/>
        
      </div>
    </div>
  );
}

export default App;
