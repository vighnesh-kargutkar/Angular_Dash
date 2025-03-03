import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent  implements AfterViewInit ,OnInit{
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit(): void {
    console.log('oninit');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('After View init');
    console.log(this.form().nativeElement);
    
  }

  onSubmit(title: string, ticketText: String) {
    console.log(title);
    console.log(ticketText);

    this.form().nativeElement.reset();
  }
}
