import { Fragment, useContext, useState } from 'react';
import { CartItemsContext } from '../../../Context/CartItemsContext';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import CartCard from './CartCard/CartCard';
import './Cart.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '350px',
  width: '45%',
  height: '400px',
  bgcolor: 'background.paper',
  border: '5px solid #FFE26E',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cartItems = useContext(CartItemsContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.totalAmount > 0) {
      // ✅ Go to /checkout with totalAmount passed as router state
      navigate('/checkout', { state: { amount: cartItems.totalAmount } });
      handleClose(); // Close the cart modal
    } else {
      alert("Your cart is empty!");
    }
  };

  return (
    <Fragment>
      <Badge badgeContent={cartItems.items.length} color="error">
        <ShoppingCartIcon color="black" onClick={handleOpen} sx={{ width: '35px' }} />
      </Badge>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="cart__header">
            <h2>Your Cart</h2>
          </div>
          <div className="cart__items__container">
            <div className="cartItems">
              {cartItems.items.length === 0 ? (
                <div className="cart__empty">Empty cart!</div>
              ) : (
                <div className="shop__cart__items">
                  {cartItems.items.map((item) => (
                    <CartCard key={item._id} item={item} />
                  ))}
                </div>
              )}
              {cartItems.items.length > 0 && (
                <div className="options">
                  <div className="total__amount">
                    <div className="total__amount__label">Total Amount:</div>
                    <div className="total__amount__value">₹{cartItems.totalAmount}.00</div>
                  </div>
                  <div className="checkout">
                    <Button variant="outlined" onClick={handleCheckout}>
                      Checkout
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default Cart;
