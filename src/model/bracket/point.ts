/**
 * 点数
 */
export class Point {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  public static zero() {
    return new Point(0);
  }

  public range() {
    let range = [];
    for (let i = 0; i <= 20; ++i) range.push(new Point(i));

    return range;
  }
}
