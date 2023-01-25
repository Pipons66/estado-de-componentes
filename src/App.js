import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import Boton from './components/Boton';



function App() {
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  const [message, setMessage] = useState('')
  const [displayAlert, setDisplayAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayAlert(true);
    if (user === 'ADL' && password === '252525') {
      setMessage('Los datos son correctos')
    } else {
      setMessage('Los datos son incorrectos')
    }
  }
  // ACA INTENTÉ HACER SUBMIT SIGUIENDO LOS PASOS DE LA CLASE Y NO ME RESULTÓ :(

  return (
    <div className="App text-center">
      <h1>Desafío - Estado de los componentes y eventos</h1>
      {displayAlert && <div className='alert alert-danger'> {message} </div>}
      <form onSubmit={handleSubmit}>
      <Input 
      user={user}
      setUser={setUser}
      password={password}
      setPassword={setPassword}
      />
      </form>
      {user==="ADL" && password==="252525" ? <Boton text="Ingresar" /> : null}
    </div>
  );
}

export default App;
