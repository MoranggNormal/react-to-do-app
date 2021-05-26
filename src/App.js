import React from 'react';
import './App.css';
import Global from './components/Global'
import Header from './components/Header'
import Aside from './components/Aside'
import Form from './components/Form'
import Content from './components/Content'
import Input from './components/Input'
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
    <Global>
    <Header>
      <Form handleSubmit={handleSubmit}>
        <Input handleChange={handleChange} />
        <Add handleClick={handleClick}/>
      </Form>
    </Header>

      <Content>
        <Aside>
        </Aside>

      </Content>

      <ul>
      {list.map((item, index) =>
        <li key={index}>
        {item.todo}

      <Delete handleDelete={() => handleDelete(item)} />

      <Edit handleEdit={() => handleEdit(item)}/>
        </li>
      )}
     </ul>
</Global>
  );
}

export default App;
