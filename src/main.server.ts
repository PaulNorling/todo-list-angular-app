import { bootstrapApplication } from '@angular/platform-browser';
import { TodoList } from './app/todo-list.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(TodoList, config);

export default bootstrap;
