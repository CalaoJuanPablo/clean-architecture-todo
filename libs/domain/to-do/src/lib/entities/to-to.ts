import { IToDoEntity, ToDoEntityParams } from './types';

export class ToDoEntity implements IToDoEntity {
  private _id: string;
  private _title: string;
  private _description: string;
  private _completed: boolean;

  constructor({ id, title, description, completed }: ToDoEntityParams) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._completed = completed;
  }

  toJSON() {
    return {
      id: this._id,
      title: this._title,
      description: this._description,
      completed: this._completed,
    };
  }
}
