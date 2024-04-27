import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  serverElements: Server[] = [
    new Server('server', 'Testserver', 'Just a test!')
  ];

  onServerAdded(serverData:{serverName: string, serverContent:string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(serverData:{serverName: string, serverContent:string}){
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = 'Changed!';
  }
  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }

  onIntervalFired(firedNumber: number){
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber)
    }else {
      this.oddNumbers.push(firedNumber)
    }
  }

}
