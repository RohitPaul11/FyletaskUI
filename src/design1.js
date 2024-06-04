import "./styles/Design.css";
import img1 from "./photo/d1.png";

const Design1 = ({ openPopup }) => {
  return (
    <div className="m-container">
      <div className="text-section">
        <h2 className="award">AWARD WINNING</h2>
        <h1 className="title">DIGITAL MARKETING AGENCY</h1>
        <p className="description">
          Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
          Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
          lacus nec risus finibus feugiat et fermentum
        </p>
        <div>
          <button className="contact-btn" onClick={openPopup}>
            CONTACT US
          </button>
        </div>
      </div>

      <div className="image-section">
        <img
          src={img1}
          alt="Digital Marketing Agency"
          className="agency-image"
        />
      </div>
    </div>
  );
};

export default Design1;
