import "./styles/popform.css";

const Popform = ({ closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-inner">

        <button className="close-btn" onClick={closePopup}>
          &times;
        </button>

        <form method="POST" action='https://getform.io/f/jbwxzxxa' className="form">
          <div className="talk">
            <h3>Talk to us</h3>
          </div>

          <div className='box'>
            <input  type="email" placeholder="Work email*" name="email" required />
          </div>

          <div className="box2">
            <input type="text" placeholder="First name*" name="First_name" required />
        
            <input type="text" placeholder="Last name*" name="Last_name" required />
          </div>

          <div>
            <input
              type="checkbox"
              value="checkbox"
              className="checkbox"
              id="consent"

              required
            />
            <label htmlFor="consent">
              I agree to Flye's terms and conditions, provide consent to send me
              communication
            </label>
          </div>
          <div className="button">
            <button type="submit" className="submit">
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popform;
