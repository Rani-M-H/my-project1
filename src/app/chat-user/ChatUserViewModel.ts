export interface ChatUserViewModel {
    fullName: string;
    avatarUrl: string;
    lastMessage?: Date;
    unreadMessages: number;
    isTyping: boolean;
  }