
import './styles/feedback.css';
import bottom from'./photo/NoPath.png';
import group from './photo/Group 500.png'
const FeedbackSection = () => {
  return (
    <div className="feedback-section">
      <h2 className="feedback-title">CLIENT'S FEEDBACK</h2>
      <h3 className="feedback-subtitle">PEOPLE SAY'S ABOUT US!</h3>
      <div className="testimonial">
        <p>

          Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original."
        </p>
        <p className="client-name">
          <strong>JANNAT TUMPA</strong> 
        </p>
        <h5 className='foot'>- COO, AMERIMAR ENTERPRISES, INC.</h5>
      </div>
      <div className="logos1">
       <img className='banner' src={bottom} alt='banner'/>
       <img className='group' src={group} alt='group'/>
      </div>
    </div>
  );
};

export default FeedbackSection;
