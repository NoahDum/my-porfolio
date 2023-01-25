import './sass/main.scss';
import TypingAnimation from './components/TypingAnim';

function App() {
  return (
    <div className="App">
      <div className="center">
        <h1>&lt; Noah Duminil &#47;&gt;</h1>
        <h2><TypingAnimation text="Bienvenue sur mon portfolio !" /></h2>
        <button className='enter'>Entrer dans mon monde</button>
      </div>
    </div>
  );
}

export default App;
