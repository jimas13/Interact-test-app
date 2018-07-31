import { Component, OnInit } from '@angular/core';
import * as interact from 'interactjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selected = false;
  style: any;
  staringStyle = [[0,0,50,50],[100,0,150,50],[200,0,250,50],[0,100,50,150]];
  constructor() {
    // this.style = {
    //   width: (this.staringStyle[2] - this.staringStyle[0]) + 'px',
    //   heigth: (this.staringStyle[3] - this.staringStyle[1]) + 'px',
    //   left: this.staringStyle[0] + 'px',
    //   top: this.staringStyle[1] + 'px',
    //   right: 500 - (this.staringStyle[0] + (this.staringStyle[2] - this.staringStyle[0])) + 'px',
    //   bottom: 500 - (this.staringStyle[1] + (this.staringStyle[3] - this.staringStyle[1])) + 'px',
    //   position: 'absolute'
    // }
  }

  // private enableDragging():void {
  //   interact('.draggable')
  //     .draggable({
  //       restrict: {
  //         restriction: "#image",
  //         endOnly: false,
  //         elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
  //       },
  //       onmove: this.dragMoveListener.bind(this),
  //     });
  // }
  ngOnInit(): void {
    // this.enableDragging();
    // interact('.draggable')
  //   .draggable({
  //     // enable inertial throwing
  //     inertia: true,
  //     // keep the element within the area of it's parent
      // restrict: {
      //   restriction: "parent",
      //   endOnly: true,
      //   elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      // },
  //     // enable autoScroll
  //     autoScroll: true,

  //     // call this function on every dragmove event
  //     onmove: this.dragMoveListener.bind(this),
  //     // call this function on every dragend event
  //     onend: null
  //     // function (event) {
  //     //   var textEl = event.target.querySelector('p');

  //     //   textEl && (textEl.textContent =
  //     //     'moved a distance of '
  //     //     + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
  //     //                 Math.pow(event.pageY - event.y0, 2) | 0))
  //     //         .toFixed(2) + 'px');
  //     // }
  //   }
  // )
  // .draggable({
  //   restrict: {
  //     restriction: "parent",
  //     endOnly: false,
  //     elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
  //   },
  //   onmove: this.dragMoveListener.bind(this),
  // })
  // .resizable({
  //   // resize from all edges and corners
  //   edges: { left: true, right: true, bottom: true, top: true },

  //   // keep the edges inside the parent
  //   restrictEdges: {
  //     outer: 'parent',
  //     endOnly: true,
  //   },

  //   // minimum size
  //   restrictSize: {
  //     min: { width: 100, height: 50 },
  //   },

  //   inertia: true,
  // })
  // .on('resizemove', function (event) {
  //   console.log(event);
    
  //   var target = event.target,
  //       x = (parseFloat(target.getAttribute('data-x')) || 0),
  //       y = (parseFloat(target.getAttribute('data-y')) || 0);

  //   // update the element's style
  //   console.log(event.rect.width, event.rect.height);
    
  //   target.style.width  = event.rect.width + 'px';
  //   target.style.height = event.rect.height + 'px';

  //   // translate when resizing from top or left edges
  //   x += event.deltaRect.left;
  //   y += event.deltaRect.top;

  //   target.style.webkitTransform = target.style.transform =
  //       'translate(' + x + 'px,' + y + 'px)';

  //   target.setAttribute('data-x', x);
  //   target.setAttribute('data-y', y);
  //   // target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);
  // });
  }
  // private dragMoveListener (event) {
  //   var target = event.target,
  //       // keep the dragged position in the data-x/data-y attributes
  //       x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
  //       y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    
  //   console.log(event.dx, event.dy);
    
  //   // translate the element
  //   // target.style.webkitTransform =
  //   // target.style.transform =
  //   //   'translate(' + x + 'px, ' + y + 'px)';
  //   this.style['left'] = Number.parseFloat(this.style['left']) + event.dx + 'px';
  //   this.style['right'] = Number.parseFloat(this.style['right']) - event.dx + 'px';
  //   this.style['top'] = Number.parseFloat(this.style['top']) + event.dy + 'px';
  //   this.style['bottom'] = Number.parseFloat(this.style['bottom']) - event.dy + 'px';
  
  //   // update the posiion attributes
  //   // target.setAttribute('data-x', x);
  //   // target.setAttribute('data-y', y);
  // }
}
