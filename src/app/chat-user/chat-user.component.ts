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
        avatarUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastMessage: new Date(),
        unreadMessages: 4,
        isTyping: true
      }
    ];
}
}
