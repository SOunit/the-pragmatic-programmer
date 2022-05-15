class Line {
  private length: number;
  private changed: boolean;

  constructor(private start: number, private end: number) {
    this.changed = true;
    this.length = this.getLength();
  }

  setStart(start: number) {
    this.start = start;
    this.changed = true;
  }

  setEnd(end: number) {
    this.end = end;
    this.changed = true;
  }

  getStart() {
    return this.start;
  }

  getEnd() {
    return this.end;
  }

  getLength() {
    if (this.changed) {
      this.length = this.end - this.start;
      this.changed = false;
    }
    return this.length;
  }
}

const len = new Line(5, 10);
console.log(len);
