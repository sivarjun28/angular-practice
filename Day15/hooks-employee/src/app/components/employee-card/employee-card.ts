import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  imports: [CommonModule],
  templateUrl: './employee-card.html',
  styleUrl: './employee-card.scss',
})
export class EmployeeCard implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  OnDestroy {
  @Input() employee: any;

  @Output()
  alertEvent = new EventEmitter<string>();


  viewInitialized = false;
  
  viewInitTime = '';


  doCheckCounter = 0;

  timerSeconds = 0;

  activityCounter = 0;

  intervalid = 0;

  currentHook = "waiting....."

  timer: any;

  constructor() {
    this.currentHook = "constructer executed"
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee']) {
      this.currentHook = 'ngOnchanges Executed';

      this.alertEvent.emit('ngOn changes-Employee switched')
    }

    console.log("ngOnchanges Executed")
  }

  ngOnInit(): void {
    this.currentHook = 'ngOnInit Executed';

    this.alertEvent.emit('ngOnInit- Employee profile loaded')

    this.intervalid = setInterval(() => {
      this.timerSeconds++;
    }, 1000)

    console.log("ngOnInit Executed")
  }

  ngDoCheck(): void {
    this.doCheckCounter++;
    console.log("doCheck")
  }

  ngAfterViewInit(): void {

    this.viewInitialized = true;

    this.viewInitTime =
      new Date().toLocaleTimeString();

    this.currentHook =
      'ngAfterViewInit Executed';

    this.alertEvent.emit(
      'ngAfterViewInit - Employee dashboard view loaded'
    );

    console.log("ngAfterViewInit Executed");
  }

  sendAlert() {


    this.alertEvent.emit(`${this.employee.name} generated an alert`);
  }

  ngOnDestroy(): void {

    clearInterval(this.intervalid)
    this.alertEvent.emit(
      'ngOnDestroy - Employee card destroyed'
    );

    console.log("ngOnDestroy")
  }
}
