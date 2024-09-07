export default class Game {
  constructor(element) {
    this._element = element;
    this._gameplay = null;
    this.missClickCount = -1;
  }

  init() {
    const item = document.createElement("div")
    item.classList.add("item");

    for (let i = 0; i < 16; i++) {
      this._element.appendChild(item.cloneNode());
    }
  }

  start() {
    const items = this._element.querySelectorAll(".item");

    let currentIndex = 0;
    this._gameplay = setInterval(() => {
      if (!Array.from(items).some((item) => item.classList.contains("clicked"))) {
        this.missClick();
        if (this.fail()) {
          return;
        }
      } else {
        items.forEach((item) => item.classList.remove("clicked"));
      }
      const index = Math.floor(Math.random() * items.length);
      items[currentIndex].classList.remove("active");
      items[index].classList.add("active");
      currentIndex = index;
    }, 1000);
  }

  stop() {
    clearInterval(this._gameplay);
    const items = this._element.querySelectorAll(".item");
    items.forEach((item) => item.classList.remove("active"));
  }

  click(element) {
    element.classList.add("clicked");
  }

  missClick() {
    this.missClickCount++;
    console.log(this.missClickCount);
  }


  fail() {
    if (this.missClickCount === 5) {
      this.missClickCount = -1;
      this.stop();
      alert("You lose!");
      return true;
    }
  }
}
