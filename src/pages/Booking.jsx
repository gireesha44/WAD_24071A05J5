import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    persons: '',
    date: '',
    time: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <div className="card">
        <h2 style={{ marginBottom: '20px' }}>Table Reservation</h2>

        {submitted ? (
          <div className="success-msg">
            <h3>Booking Successful!</h3>
            <p>Thank you, {formData.name}. Your table for {formData.persons} persons is reserved for {formData.date} at {formData.time}.</p>
            <button onClick={() => setSubmitted(false)} style={{ marginTop: '15px' }}>Book Another Table</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Customer Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />
            </div>
            <div className="form-group">
              <label>Number of Persons</label>
              <input
                type="number"
                name="persons"
                value={formData.persons}
                onChange={handleChange}
                placeholder="Number of guests"
                required
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" style={{ width: '100%' }}>Reserve Table</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Booking;
