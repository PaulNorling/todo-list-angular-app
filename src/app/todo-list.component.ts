import { Component } from "@angular/core";
import {TodoListItem} from './todo-list-item.component.js';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [TodoListItem],
  template: `
    <ul>
    <todo-list-item></todo-list-item>
    </ul>
  `,
})
export class TodoList {
    
}