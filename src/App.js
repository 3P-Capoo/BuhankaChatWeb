import './App.css';

const logo = 'https://media.tenor.com/IyNb1v-ADZAAAAAC/pepe-loser.gif';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Running this locally hasn't proven that you can code yet LOL</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Click here to doxx yourself
        </a>
      </header>
    </div>
  );
}

export default App;
