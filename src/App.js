import React from 'react';
import './App.css';
import Global from './components/Global'
import Header from './components/Header'
import Aside from './components/Aside'
import Main from './components/Main'
import Form from './components/Form'
import Content from './components/Content'
import Input from './components/Input'
import Item from './components/Item'
import Add from './components/Add'
import Delete from './components/Delete'
import Edit from './components/Edit'
import Alert from './components/Alert'



function App() {

  const [input, setInput] = React.useState('')
  const [list, setList] = React.useState([])
  const [erro, setErro] = React.useState(false)

  const handleClick = () => {
    if(input.length > 31){
        return setErro(true)
     }
    if(input === '') return
    const find = list.findIndex(val => val.todo === input)
    if(find < 0){
    setList([...list, {todo: `${input}`}])
    setErro(false)
    setInput('')
  }else return

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
      {erro === true && <Alert></Alert>}

    <Header>
      <Form handleSubmit={handleSubmit}>
        <Input input={input} handleChange={handleChange} />
        <Add handleClick={handleClick}/>
      </Form>
    </Header>

      <Content>
        <Aside>
        </Aside>

        <Main>

          <ul>
          {list.map((item, index) =>
            <Item key={index} item={item}>




          <Delete handleDelete={() => handleDelete(item)} />

          <Edit handleEdit={() => handleEdit(item)}/>

          </Item>
          )}
         </ul>

        </Main>

      </Content>


</Global>
  );
}

export default App;
