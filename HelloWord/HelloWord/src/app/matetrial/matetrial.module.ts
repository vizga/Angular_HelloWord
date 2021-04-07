import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
// import { CommonModule } from '@angular/common'; -> we dont need
//https://www.npmjs.com/package/json-server

const MaterialComponents =[
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
    // CommonModule
  ],
  exports : [MaterialComponents]
})
export class MatetrialModule { }
