import React, { useState } from 'react';

const Payment = () => {
  const [method, setMethod] = useState('card');
  const [paymentDone, setPaymentDone] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentDone(true);
  };

  return (
    <div className="container" style={{ maxWidth: '500px' }}>
      <div className="card">
        <h2 style={{ marginBottom: '20px' }}>Mock Payment</h2>
        
        {paymentDone ? (
          <div className="success-msg">
            <h3>Payment Successful!</h3>
            <p>Your transaction has been processed successfully. Thank you!</p>
          </div>
        ) : (
          <div>
            <div style={{ padding: '15px', background: '#fff3e0', border: '1px solid #ffe0b2', marginBottom: '20px', textAlign: 'center' }}>
              <h3>Total Amount: ₹1,250</h3>
            </div>
            
            <form onSubmit={handlePayment}>
              <div className="form-group">
                <label>Select Payment Method</label>
                <select value={method} onChange={(e) => setMethod(e.target.value)}>
                  <option value="card">Credit/Debit Card</option>
                  <option value="upi">UPI ID</option>
                </select>
              </div>

              {method === 'card' ? (
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="XXXX XXXX XXXX XXXX" required />
                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <input type="text" placeholder="MM/YY" style={{ flex: 1 }} required />
                    <input type="password" placeholder="CVV" style={{ flex: 1 }} required />
                  </div>
                </div>
              ) : (
                <div className="form-group">
                  <label>UPI ID</label>
                  <input type="text" placeholder="username@upi" required />
                </div>
              )}

              <button type="submit" style={{ width: '100%', marginTop: '10px' }}>Pay Now</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
