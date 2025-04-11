import React, { useEffect, useState } from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import './Checkout.css';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (location.state && location.state.amount) {
      setAmount(location.state.amount);
    }
  }, [location]);

  const upiID = '7241139383@ptsbi';
  const storeName = 'Harachi Thrift Store';
  const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(storeName)}&am=${amount}&cu=INR`;

  return (
    <div className="checkout-page">
      <h2>Proceed to Pay ₹{amount}</h2>
      {amount > 0 && (
        <div className="qr-container">
          <QRCodeSVG value={upiLink} size={220} className="qr-image" />
          <p className="instruction">Scan using any UPI app</p>
          <button className="back-button" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
