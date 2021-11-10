import { Component } from '@angular/core';

function log(target: any, name: any, descriptor: any) {
  console.log(target, name, descriptor)
  // store the original function in a variable
  const original = descriptor.value
  // do some manipulations with descriptor.value
  descriptor.value = function() {
    console.log("This function was hacked!")
  }
  //return the descriptor
  return descriptor;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-next';

  constructor () {
    this.aSimpleMethod()
  }

  @log
  aSimpleMethod(){
    console.log("Hey there!")
  }
}
