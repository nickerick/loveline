export class Post {
  constructor(
    public id: string,
    public title: string,
    public body: string
  ) {}

  // Static mapper from Telepact response
  // TODO
  static fromTelepact(resp: any): Post {
    const tagged = resp.getTaggedValue();
    
    const value = tagged.value;
    return new Post(
      String(value.id ?? ""), 
      value.title ?? "Untitled", 
      value.body ?? ""
    );
  }
}