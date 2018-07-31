import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  str: string
  message: string;
  constructor() {
    this.str = 'this is component';
   }
}
