import React, { useState } from 'react';

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <div className="card">
        <h2 style={{ marginBottom: '20px' }}>Customer Feedback</h2>
        
        {submitted ? (
          <div className="success-msg">
            <h3>Thank You!</h3>
            <p>We appreciate your feedback, {name}. It helps us improve our service.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name" 
                required 
              />
            </div>
            <div className="form-group">
              <label>Rating</label>
              <select required>
                <option value="">Select Rating</option>
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Good</option>
                <option value="3">3 - Average</option>
                <option value="2">2 - Poor</option>
                <option value="1">1 - Terrible</option>
              </select>
            </div>
            <div className="form-group">
              <label>Comments</label>
              <textarea 
                rows="4" 
                placeholder="Share your experience..." 
                required
              ></textarea>
            </div>
            <button type="submit" style={{ width: '100%' }}>Submit Feedback</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Feedback;
