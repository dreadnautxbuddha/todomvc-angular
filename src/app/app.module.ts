import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { TodoEffects } from './store/effects/todo/todo.effects';
import { TodoComponent } from './components/todo/todo.component';
import { TodoReducer } from './store/reducers/todo/todo.reducer';
import { InputReducer } from './store/reducers/input/input.reducer';
import { FilterReducer } from './store/reducers/filter/filter.reducer';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoComponent,
    TodoListComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    StoreModule.forRoot({
      todos: TodoReducer,
      input: InputReducer,
      filter: FilterReducer,
    }),
    EffectsModule.forRoot([
      TodoEffects,
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
