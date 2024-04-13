import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-coockpit',
  templateUrl: './coockpit.component.html',
  styleUrls: ['./coockpit.component.css']
})
export class CoockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef | undefined;
  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value)
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      serverContent: this.serverContentInput?.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput?.nativeElement.value
    });
  }
}
