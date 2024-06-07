import { Component, Input } from '@angular/core';
import { ChatUserViewModel } from './ChatUserViewModel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-user.component.html',
  styleUrl: './chat-user.component.css'
})
export class ChatUserComponent {
  viewModels: ChatUserViewModel[];
  
  constructor() {
    this.viewModels = [
      {
        fullName: 'Eleanor Pena',
        avatarUrl: 'https://example.com/avatar1.jpg',
        lastMessage: new Date(),
        unreadMessages: 4,
        isTyping: true
      }
    ];
}
}
