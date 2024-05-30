import { useState } from 'react'
import './App.css'
import './component/style.css'

function App() {
	const [email, setEmail] = useState("");
	const [password, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState('');

	const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePwChange = (event) => {
    setPw(event.target.value);
  }
  const handlePwConfirmChange = (event) => {
    setPwConfirm(event.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(!password) {
      alert('비밀번호를 입력하세요')
      return;
    } 
    if(!email) {
      alert('이메일을 입력하세요')
      return;
    } 
    if(password.length < 8) {
      alert('비밀번호는 8자 이상이어야 합니다.')
      return;
    }
    if(password !== pwConfirm) {
      alert('비밀번호가 일치하지 않습니다.')
      return;
    }
    alert(`이메일은 ${email}이고 비밀번호는 ${password}네`)
  }

  const onSubmit2 = (e) => {
    e.preventDefault();
  }
  const [input, setInput] = useState('');
  const onChangeInput = (e) => {
    setInput(e.target.value);
  }
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (e) => {
    e.preventDefault();
    if(!input.trim()) {
      return;
    }
    const newTodos = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodos]);
    setInput('');
  }
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? {...todo, completed: !todo.completed} : todo
        
      })
    )
  }
 console.log(todos)
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password" >비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password} onChange={handlePwChange}
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm" value={pwConfirm} onChange={handlePwConfirmChange}>비밀번호 확인:</label>
          <input
            type="password"
            id="passwordConfirm"
          />
        </div>
        <button type="submit">회원가입</button>
      </form>

      <div>
      <h1>할 일 목록</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" placeholder="할 일을 추가하세요" value={input} onChange={onChangeInput} />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return(
            <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
              {todo.text}
              <button onClick={() => handleToggleTodo(todo.id)}>{todo.completed ? '취소' : '완료'}</button>
              <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
            </li>
          )
        })}
      </ul>
      </div>
    </>

  );
}

export default App;