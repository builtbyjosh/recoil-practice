import { atom } from "recoil";

export const textState = atom({
  key: 'textState',
  default: '',
});

export const todoListState = atom({
  key: 'TodoList',
  default: []
})