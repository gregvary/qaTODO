/**
 * Created by greg on 19.04.17.
 */
export class TodoItem {
  id: number;
  topic: string;
  description: string;
  done: boolean;

  constructor(id: number, topic: string) {
    this.id = id;
    this.topic = topic;
    this.description = '';
    this.done = false;
  }
}
