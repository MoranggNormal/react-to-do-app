import React from 'react';
import './App.css';

function App() {

  const [input, setInput] = React.useState('')
  const [list, setList] = React.useState([])

  const handleClick = () => {
  if(input === '') return
  const find = list.findIndex(val => val.todo === input)
  if(find < 0){
  setList([...list, {todo: `${input}`}])
  setInput('')
  }else{
  return
}
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
      {list.map((item, index) =>
        <li key={index}>
        {item.todo}

        <button
        type="button"
        onClick={() => setList(list.filter((e) => e !== item))}>
        Excluir
      </button>
      <button
        type="button" onClick={() => item.todo = 'ola'}>
        Editar
      </button>
        </li>
      )}
     </ul>

    </div>
  );
}

export default App;
