import "./styles/why.css";

import img1 from "./photo/1.png";
import img2 from "./photo/2.png";
import img3 from "./photo/3.png";
import img4 from "./photo/4.png";

const Why = () => {
  return (
    <div className="container1">
      <div className="heading1">
        <h2>WHY CHOOSE US</h2>
        <h2 className="heading2">WHY WE ARE BEST</h2>
      </div>
      

      <div className="content">
        <div className="box1">
          <img src={img1} alt="icon" className="img" />
          <h3>Clarified Vision & Target</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </div>
        <div className="box2">
          <img src={img2} alt="icon" className="img" />
          <h3>High Performance</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </div>

        <div className="box3">
          <img src={img3} alt="icon" className="img" />
          <h3>Maintain Security</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </div>

        <div className="box4">
          <img src={img4} alt="icon" className="img" />
          <h3>Better Strategy & Quality</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
