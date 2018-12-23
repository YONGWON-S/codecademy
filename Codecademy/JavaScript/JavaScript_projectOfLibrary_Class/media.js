class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(newConfirm) {
    this._isCheckedOut = newConfirm;
  }
  toggleCheckedOutStatus() {
		this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
     let result = this._ratings.reduce((accumul, current) => accumul + current);
    return result / (this._ratings.length)
  }
 	addRating(newRating) {
    this._ratings = newRating;
    // 혹은 this._ratings.push(newRating) 후에 밑에 함수에서 부를 때 addRating함수를 점수별로 하나하나 호출할 순 있다.
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const history = new Book('A Short Histoy of Nearly Everything', 'Bill Bryson', 544);

history.toggleCheckedOutStatus();
history.addRating([4,5,5])
const show = history.getAverageRating();
console.log(show)

const speed = new Movie('Speed','Jan de Bont', 116);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);
speed.addRating([1,1,5]);
console.log(speed)
console.log(speed.getAverageRating());
