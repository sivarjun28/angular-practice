import { Component, EventEmitter, Output } from '@angular/core';
import { NotesService } from '../../../services/notes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes-list',
  imports: [CommonModule],
  templateUrl: './notes-list.html',
  styleUrl: './notes-list.scss',
})
export class NotesList {
  @Output() editClicked = new EventEmitter<void>();
  constructor(public notesService: NotesService) { }

  delete(id: string) {
    this.notesService.deleteNote(id);
  }

  edit(note: any) {
    this.notesService.startEdit(note);
    this.editClicked.emit();
  }
}
