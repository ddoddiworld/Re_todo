// action value
const TODO_ADD = "TODO_ADD";
const TODO_DELETE = "TODO_DELETE";
const TODO_UPDATE = "TODO_UPDATE";

export const addTodo = (payload) => {
  return {
    type: TODO_ADD,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: TODO_DELETE,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: TODO_UPDATE,
    payload,
  };
};

// state
const initialState = [
  {
    id: new Date().getTime(),
    title: "리액트 너무 어렵네요!",
    body: "망했네요...",
    isDone: false,
  },
  {
    id: new Date().getTime(),
    title: "이번에는 패키지를 사용해서 다시 만들고 있어요",
    body: "어렵네요...",
    isDone: false,
  },
  {
    id: new Date().getTime(),
    title: "리덕스가 싫어요",
    body: "뭔 소린지 모르겠어요. 싫다구요😫!!!",
    isDone: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return state;
    case TODO_DELETE:
      return state;
    case TODO_UPDATE:
      return state;

    // 기본
    default:
      return state;
  }
};

export default todos;
