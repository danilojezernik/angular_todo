export class TaskItem {
  constructor(
    public title: string) {
  }
  toggleIsDone(): void {
    this.isDone = !this.isDone
  }

  public isDone: boolean = false;
}
