import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  )
  {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
   ngOnInit(): void {
    
   }
   todos =[
     new Todo(1, 'Learn to dance', false,new Date()),
     new Todo(2, 'learn to sing', false,new Date()),
     new Todo(3, 'Learn to draw', false,new Date()),
     new Todo(4, 'Learn to code', false,new Date())]
   }
     /*{id : 1,description :'Learn to dance'},
     {id : 2,description :'Learn to sing'},
     {id : 3,description :'Learn to draw'},
     {id : 4,description :'Learn to code'}
   ]*/
  /*todo = {
    id : 1,
    description: 'learn to dance'
  }*/
  

 


