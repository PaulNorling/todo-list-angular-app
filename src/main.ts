import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TodoList } from './app/todo-list.component';

bootstrapApplication(TodoList, appConfig)
  .catch((err) => console.error(err));
