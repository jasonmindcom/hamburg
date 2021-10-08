export class Task{
  public key?: string;
  public text: string;
  public day: string;
  public reminder: boolean;

  constructor(key: string, text: string, day: string, reminder: boolean) {
    this.key = key;
    this.text = text;
    this.day = day;
    this.reminder = reminder;
  }
}
