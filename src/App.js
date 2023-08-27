import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  const onSubmit = (inputs) => {
    console.log(inputs);
    console.log('SUBMIT!');
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <p>SINGIN</p>
          <Signin handler={onSubmit} />
        </div>
        <div>
          <p>SINGUP</p>
          <Signup handler={onSubmit} />
        </div>
      </header>
    </div>
  );
}

export default App;
