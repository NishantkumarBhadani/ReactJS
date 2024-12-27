import { createSlice,nanoid } from "@reduxjs/toolkit"

const initialState={
    todos:[
        {
            id:1,text:"Hello World"
        }
    ]
}

export const todoslice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid,
                text:action.payload
            }
            //now pushing the new todo in our initialstate

            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            const {id,newText}=action.payload;
            const todo=state.todos.find((todo)=>todo.id===id);
            if(todo){
                todo.text=newText;
            }
        }

        //By using map

        // updateTodo: (state, action) => {
        //     const { id, newText } = action.payload; // Destructure the payload to get id and newText
        //     // Use map to create a new array with updated text for the matching id
        //     state.todos = state.todos.map((todo) =>
        //         todo.id === id ? { ...todo, text: newText } : todo
        //     );
        // },
    }
})

export const{addTodo,removeTodo,updateTodo}=todoslice.actions
export default todoslice.reducer