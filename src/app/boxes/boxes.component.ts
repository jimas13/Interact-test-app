import { Component, OnInit, Input, OnChanges } from '@angular/core';
import  * as interact  from 'interactjs';
import { ExampleService } from '../app/example.service';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css'],
  providers: [ExampleService]
})
export class BoxesComponent implements OnInit, OnChanges {
  
  style: any;
  @Input() dimensions: Array<any> = new Array<any>();
  @Input() index;
  selected: boolean;
  constructor(private _example: ExampleService) {
    this.selected = false;
    
   }

   ngOnChanges(): void {
    this.style = {
      width: (this.dimensions[2] - this.dimensions[0]) + 'px',
      heigth: (this.dimensions[3] - this.dimensions[1]) + 'px',
      left: this.dimensions[0] + 'px',
      top: this.dimensions[1] + 'px',
      right: 500 - (this.dimensions[0] + (this.dimensions[2] - this.dimensions[0])) + 'px',
      bottom: 500 - (this.dimensions[1] + (this.dimensions[3] - this.dimensions[1])) + 'px',
      position: 'absolute'
    }
  }

  ngOnInit() {
    console.log(this.style);
    this.enableDragging();
    console.log(this._example.str, this.index);
    if(this.index === 1) {
      this._example.str = 'component 1 changed str -> check changes ';
    }
    console.log(this._example.str, this.index);  
  }

  private enableDragging():void {
    interact(`.draggable-box-${this.index}`)
      .draggable({
        restrict: {
          restriction: "#image",
          endOnly: false,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        onmove: this.dragMoveListener.bind(this),
      });
  }
  private activateOrDeactivate():void {
    if(this.selected === false){
        // target elements with the "draggable" class
      let el1 = document.getElementById(`drag-${this.index}`);
      el1.classList.add(`draggable-box-${this.index}`);
      this.selected = true;
    } else {
      let el1 = document.getElementById(`drag-${this.index}`);
      el1.classList.remove(`draggable-box-${this.index}`);
      this.selected = false;
    }
    
  }

  private dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    
    console.log(event.dx, event.dy);
    
    // translate the element
    // target.style.webkitTransform =
    // target.style.transform =
    //   'translate(' + x + 'px, ' + y + 'px)';
    this.style['left'] = Number.parseFloat(this.style['left']) + event.dx + 'px';
    this.style['right'] = Number.parseFloat(this.style['right']) - event.dx + 'px';
    this.style['top'] = Number.parseFloat(this.style['top']) + event.dy + 'px';
    this.style['bottom'] = Number.parseFloat(this.style['bottom']) - event.dy + 'px';
  
    // update the posiion attributes
    // target.setAttribute('data-x', x);
    // target.setAttribute('data-y', y);
  }

}
