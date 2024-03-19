import './Cart.css'
import { Link } from "react-router-dom";
const Cart = () => {
    return (
        <div className="cart-container">
            <h1 className="cart-text">The cart is currently empty!</h1>
            <p className='cart-para'>How about filling your cart with fantastic finds?</p>
            <Link to={"/products"} className='book-button'>All products</Link>

        </div>
    );
}

export default Cart;
