import './App.css';
import Top from './components/Top';
import Main from './components/Main';
import Bottom from './components/Bottom';


function App() {
  return (
    <div className="thework">
      <Top />
      <div className="holder">
        <Main />
      </div>
      <footer className="footer" style={{color: "var(--textcolor1)", fontSize: "12pt", fontWeight: "bold", alignSelf: "center", padding: "1%"}}><a href="https://github.com/mcjbyday/seemywork" target="_blank" rel="noreferrer"><span className="githubicon"></span></a></footer>
    </div>
  );
}

export default App;
