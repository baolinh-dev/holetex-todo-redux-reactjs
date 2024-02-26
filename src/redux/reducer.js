const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Yoga 2", completed: true, priority: "High" },
    { id: 3, name: "Learn Yoga 3", completed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload,
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;