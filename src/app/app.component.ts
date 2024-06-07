import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatUserComponent } from './chat-user/chat-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskPractice';
}
