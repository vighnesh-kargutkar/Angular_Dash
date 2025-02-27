import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from "./dashoard/server-status/server-status.component";
import { TrafficComponent } from "./dashoard/traffic/traffic.component";
import { TicketsComponent } from "./dashoard/tickets/tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
