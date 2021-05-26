import React from 'react';
import './App.css';

function App() {

  const [input, setInput] = React.useState('')
  const [list, setList] = React.useState([])

  const handleClick = () => {
  if(input === '') return
  if(list.includes(input)) return
  setList([...list, {todo: `${input}`}])
  setInput('')
}

  const handleChange = ({target}) => {
    setInput(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={input}></input>
        <button type="submit" onClick={handleClick}>Enviar</button>
      </form>

      <ul>
      {list.map((lista, index) =>
        <li key={index}>
        {lista.todo}
        <button
        type="button"
        onClick={() => setList(list.filter((e) => e !== lista))}>
        Excluir
      </button>
      <button
        type="button" onClick={() => lista.todo = 'ola'}>
        Editar
      </button>
        </li>
      )}
     </ul>

    </div>
  );
}

export default App;
