export default class Score {
  constructor(element) {
    this._element = element;
    this._score = 0;
  }

  scoreUp() {
    this._element.textContent = Number(this._element.textContent) + 1;
  }

  reset() {
    this._element.textContent = 0;
  }
}
