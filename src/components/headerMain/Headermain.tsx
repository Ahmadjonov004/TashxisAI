import './HeaderMain.css';
import { useNavigate } from 'react-router-dom'; 

function Headermain() {
  const navigate = useNavigate(); 

  const handleStart = () => {
    navigate('/diagnosis'); 
  };

  return (
    <div>
      <div className="hero container">
        <div className="heroContent">
          <h1>Xush kelibsiz TashxisAI!</h1>
          <p>
            Oddiy savollarga javob bering va sog‘ligingiz holatini sun’iy intellekt yordamida aniqlang —
            hech qanday navbatlarsiz, shifoxonalarsiz.
          </p>
          <button className="startBtn" onClick={handleStart}>
            Tashxisni boshlash
          </button>
        </div>
      </div>
    </div>
  );
}

export default Headermain;
