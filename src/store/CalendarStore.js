import {makeAutoObservable} from 'mobx';

class CalendarStore {
  constructor() {
    this._visible = false;
    this._value = null;
    this._coords = {x: 0, y: 0};
    makeAutoObservable(this);
  }

  toggleVisible() {
    this._visible = !this._visible;
  };

  setValue(value) {
    this._value = value;
  }

  setCoords(x, y) {
    this._coords.x = x;
    this._coords.y = y;
  }

  get visible() {
    return this._visible;
  }

  get value() {
    return this._value;
  }

  get coords() {
    return this._coords;
  }
}

export default CalendarStore;