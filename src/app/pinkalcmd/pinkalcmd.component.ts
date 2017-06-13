import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinkalcmd',
  templateUrl: './pinkalcmd.component.html',
  styleUrls: ['./pinkalcmd.component.css']
})
export class PinkalcmdComponent implements OnInit {
  public isCollapsed:boolean = false;

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }
  public singleModel: string = '1';
  constructor() { }

  ngOnInit() {
  }
}
