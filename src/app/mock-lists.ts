import {TodoList} from "./todo-list";

export const LISTS: TodoList[] = [
  {id: 1, name: 'QA Todo', items: [
    {id: 11, topic: 'Write Paper', description: 'Due 21.04.2017', done: true},
    {id: 12, topic: 'Make Slides', description: 'Let PowerPoint do the magic', done: true},
    {id: 13, topic: 'Hold Presentation', description: '', done: false},
    {id: 14, topic: 'Get a good grade', description: '', done: false}
  ]},
  {id: 2, name: 'Shopping List', items: [
    {id: 21, topic: 'Apples', description: '', done: false},
    {id: 22, topic: 'Bananas', description: '', done: false},
    {id: 23, topic: 'Tomatoes', description: '', done: false},
    {id: 24, topic: 'Potatoes', description: '', done: false},
    {id: 25, topic: 'Toothpaste', description: '', done: false},
    {id: 26, topic: 'Snickers', description: 'You are not yourself when you are hungry', done: false}
  ]},
  {id: 3, name: 'Write Thesis', items: [
    {id: 31, topic: 'Research basic topics', description: '', done: true},
    {id: 32, topic: 'Make a Concept', description: '', done: true},
    {id: 33, topic: 'Implement Concept', description: '', done: false},
    {id: 34, topic: 'Evaluate Results', description: '', done: false},
    {id: 35, topic: 'Write down findings', description: '', done: false},
    {id: 36, topic: 'Make Slides', description: '', done: false}
  ]},
];
