import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  imports: [CommonModule],
  templateUrl: './stats-card.html',
  styleUrl: './stats-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsCard {

  @Input() title!: string;
  @Input() value!: number;

  constructor(private cdr: ChangeDetectorRef) {}

ngOnInit() {
  setTimeout(() => {
    this.cdr.markForCheck();
  }, 1000);
}
}
