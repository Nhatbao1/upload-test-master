import "./scss/Header.scss";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Header = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const dataCarts = useSelector(state => state.pay.carts);
    useEffect(() => {
        setData(dataCarts)
        console.log(data)
    },show)
    // console.log(data);
    return (
        <header>
            <div className="container flex a-center j-between">
                <h2 className="logo"><a href="#">Veggy</a></h2>
                <div className="search flex">
                    <input type="text" />
                    <button><BiSearchAlt2 /></button>
                </div>
                <div className="cart flex">
                    <div className="cart-infor">
                        <div className="cart-text no-of-items flex j-end ">
                            <span className="text">No. of items</span>
                            <span className="text m-5">:</span>
                            <span className="num-items price">0</span>
                        </div>
                        <div className="cart-text sub-total flex j-end">
                            <span className="text">Sub Total </span>
                            <span className="text m-5">:</span>
                            <span className="total price">0</span>
                        </div>
                    </div>
                    <div className="cart-icon">
                        <i><AiOutlineShoppingCart onClick={() => setShow(!show)} /></i>
                        {show && show === true
                            ?
                            <div className="cart-dropdown">
                                {data && data.length > 0
                                    ?
                                    <>
                                        <ul class="cart-item">
                                            {data.map((val,index)=>{
                                                return(
                                                    <li data-id= {val.id}>
                                                    <img src={val.image}/>
                                                        <span >{val.price}$</span >
                                                        <span class="quantity-cart"> No: {val.quantity} </span>
                                                        <span class="cart-total">{val.price * val.quantity}$</span>
                                                        <span class="btn-delete"> X </span>
                                                </li >
                                                )
                                            })}
                                        </ul>
                                        <button className="btn-checkout">PROCEED TO CHECKOUT</button>

                                    </>
                                    :
                                    <>
                                        <div className="img">
                                            {/* <img src="empty-cart.png"> */}
                                            <p>Yourt cart is empty</p>
                                            <button className="btn-checkout disabled">PROCEED TO CHECKOUT</button>
                                        </div>
                                    </>
                                }
                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
        </header >
    )
}
export default Header;