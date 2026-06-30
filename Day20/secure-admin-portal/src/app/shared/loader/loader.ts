import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Loading } from '../../services/loading';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class Loader {
    constructor(public loadingService : Loading) {

    }
}
