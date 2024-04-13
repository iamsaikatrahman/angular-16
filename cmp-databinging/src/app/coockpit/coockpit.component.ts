import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-coockpit',
  templateUrl: './coockpit.component.html',
  styleUrls: ['./coockpit.component.css']
})
export class CoockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  newServerName = '';
  newServerContent = '';
  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value)
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }
}
