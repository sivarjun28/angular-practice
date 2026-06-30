import { Component, effect } from '@angular/core';
import { NotesService } from '../../../services/notes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './note-form.html',
  styleUrl: './note-form.scss',
})
export class NoteForm {
  title = '';
  content = '';
  category = '';

  constructor(private notesService: NotesService) {
    effect(() => {
      const note = this.notesService.editingNote();

      if (note) {
        this.title = note.title;
        this.content = note.content;
        this.category = note.category;
      }
    });
  }
  addNote() {
    if (!this.title || !this.content) return;

    this.notesService.saveNote({
      title: this.title,
      content: this.content,
      category: this.category,
      tags: []
    });

    this.title = '';
    this.content = '';
    this.category = '';
  }
}
