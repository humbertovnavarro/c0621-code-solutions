import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('http://localhost:3000/api/todos')
    .then(req => req.json())
    .then(data => this.setState({todos: data}))
    .catch(err => console.error(err));
  }

  addTodo(newTodo) {
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * Do not mutate the original state array, nor any objects within it.
    * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    *
    * TIP: Use Array.prototype.concat to create a new array containing the contents
    * of the old array, plus the object returned by the server.
    */
   let data = JSON.stringify(newTodo);
   const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
   }
   fetch('http://localhost:3000/api/todos',params)
   .then(res => res.json())
   .then(data => {
     if(data.error) {
       console.error(data.error);
       return;
     }
     const newTodos = this.state.todos.concat(data);
     this.setState({todos: newTodos});
   }).catch(err => console.error(err));
  }

  toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * Do not mutate the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    const todo = this.state.todos.filter(todo => todo.todoId === todoId)[0];
    let reqData = JSON.stringify({
      isCompleted: !todo.isCompleted
    });
    const params = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: reqData
    };
    fetch(`http://localhost:3000/api/todos/${todoId}`,params)
    .then(res => res.json())
    .then(data => {
      const newTodos = this.state.todos.map(todo => {
        return todo.todoId === todoId ? data : todo;
      });
      this.setState({todos: newTodos});
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
