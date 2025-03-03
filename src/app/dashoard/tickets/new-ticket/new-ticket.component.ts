import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('form') form?:ElementRef<HTMLFormElement>

  onSubmit(title: string,textArea:string){
    console.log('Form Submitted');
    console.log('Title = ',title);
    console.log('TextArea = ',textArea);
    console.log(this.form?.nativeElement.reset());
    
  }
}
