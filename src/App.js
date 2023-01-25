import './sass/main.scss';
import TypingAnimation from './components/TypingAnim';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App container">
      <div className="center">
        <h1>&lt; Noah Duminil &#47;&gt;</h1>
        <h2><TypingAnimation text="Bienvenue sur mon portfolio !" /></h2>
        <button onClick={() => navigate('/about')} className='enter'>Entrer dans mon monde</button>
      </div>
    </div>
  );
}

export default App;
