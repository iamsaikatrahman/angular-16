import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChange, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,AfterViewInit{
 @Input() element: any;
 @Input() name: any;

 @ViewChild('heading') header: ElementRef | undefined;

 ngOnChanges(changes: SimpleChange){
  console.log('ngOnChanges called!');
  console.log(changes);
 }
 ngOnInit(){
  console.log('ngOnInit called!');
  console.log('Text Content: ', + this.header?.nativeElement.textContent);
 }
 ngDoCheck(){
  console.log('ngDoCheck called!');
 }
 ngAfterContentInit(){
  console.log('ngAfterContentInit called!');
 }
 ngAfterContentChecked(){
  console.log('ngAfterContentChecked called!');
 }
 ngAfterViewInit(){
  console.log('ngAfterViewInit called!');
  console.log('Text Content: ', + this.header?.nativeElement.textContent);
 }
 ngAfterViewChecked(){
  console.log('ngAfterViewChecked called!');
 }
 ngOnDestroy(){
  console.log('ngOnDestroy called!');
 }
}
