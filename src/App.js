import React from 'react';
import './App.css';
import Add from './components/Add'
import Delete from './components/Delete'
import Edit from './components/Edit'


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
  const handleDelete = (item) => {
    setList(list.filter((e) => e !== item))
  }

  const handleEdit = (item) => {
    item.todo = 'ola'
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
        <Add handleClick={handleClick}/>
      </form>

      <ul>
      {list.map((item, index) =>
        <li key={index}>
        {item.todo}

      <Delete handleDelete={() => handleDelete(item)} />

      <Edit handleEdit={() => handleEdit(item)}/>
        </li>
      )}
     </ul>

    </div>
  );
}

export default App;
