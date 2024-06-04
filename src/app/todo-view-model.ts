export interface TodoViewModel {
  name: string;
  creationDate: Date;
  isDone: boolean;
  completionDate?: Date;
}