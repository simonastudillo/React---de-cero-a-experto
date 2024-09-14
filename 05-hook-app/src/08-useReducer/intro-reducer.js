const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del Alma',
  done: false
}];

const todoReducer = (state = initialState, {type, payload} = {}) => {

  switch (type) {
    case 'ADD_TODO':
      return [...state, payload];
  }

  return state;
};


let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false
};

const addTodoAction = {
  type: 'ADD_TODO',
  payload: newTodo
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);