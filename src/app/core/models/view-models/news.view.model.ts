export class News {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public imageUrl: number,
    public content ?: string
  ) { }
}
