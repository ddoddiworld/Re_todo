import React from "react";

// action value
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

// isDone의 값에 따른 switch
export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

// 초기 상태값 (state)
const initialState = [
  {
    id: Math.random().toString(36).substr(2, 16),
    title: "리액트 너무 어렵네요!",
    body: "망했네요...",
    isDone: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    // 추가
    case ADD_TODO:
      return [...state, action.payload];

    // 삭제
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);

    // 상태(isDone) 변경
    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });

    // 기본
    default:
      return state;
  }
};

export default todos;
