import { Injectable, signal, computed, effect } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({ providedIn: 'root' })
export class NotesService {
    private STORAGE_KEY = 'notes-app';

    notes = signal<Note[]>([]);
    searchTerm = signal('');
    selectedCategory = signal<string | null>(null);
    editingNote = signal<Note | null>(null);

    filteredNotes = computed(() => {
        return this.notes().filter(note => {
            const search = this.searchTerm().toLowerCase();

            const matchesSearch =
                note.title.toLowerCase().includes(search) ||
                note.content.toLowerCase().includes(search);

            const matchesCategory =
                !this.selectedCategory() ||
                note.category === this.selectedCategory();

            return matchesSearch && matchesCategory;
        });
    });

    constructor() {
        this.load();

        effect(() => {
            this.save();
        });
    }

    saveNote(data: Omit<Note, 'id' | 'createdAt'>) {
        const editing = this.editingNote();

        if (editing) {
            const updated: Note = {
                ...editing,
                ...data
            };
            this.updateNote(updated);
            this.editingNote.set(null);

        }
        else {
            const newNote: Note = {
                ...data,
                id: crypto.randomUUID(),
                createdAt: Date.now()
            };

            this.notes.update(n => [...n, newNote]);
        }
    }

    deleteNote(id: string) {
        this.notes.update(notes =>
            notes.filter(n => n.id !== id)
        );
    }

    startEdit(note: Note) {
        this.editingNote.set(note);
    }

    updateNote(updated: Note) {
        this.notes.update(notes =>
            notes.map(n => n.id === updated.id ? updated : n)
        );
    }
    private save() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.notes()));
    }

    private load() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        if (data) {
            this.notes.set(JSON.parse(data));
        }
    }
}