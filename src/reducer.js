 export const counter = (state = [] , action) => {
   switch (action.type) {
     case 'INCREMENT':
       return state + 1;
     case 'DECREMENT':
       return state - 1;
     case 'ADD-TODO':
       return [...state,action.added ];
     case 'REMOVE-TODO':
       return state.filter(todo=> todo.id !== action.removedId)
     default:
       return state;
   }
 }