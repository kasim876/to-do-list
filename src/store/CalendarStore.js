import {makeAutoObservable} from 'mobx';

class CalendarStore {
  constructor() {
    this._visible = false;
    this._value = null;
    makeAutoObservable(this);
  }

  toggleVisible() {
    this._visible = !this._visible;
  };

  setValue(value) {
    this._value = value;
  }

  get visible() {
    return this._visible;
  }

  get value() {
    return this._value;
  }
}

export default CalendarStore;