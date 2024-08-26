class Post {
  private _userName: string;
  private _imageUrl: string;
  private _postDescription: string;
  private _numLikes: number;

  constructor(userName: string, imageUrl: string, postDescription: string) {
    this._userName = userName;
    this._imageUrl = imageUrl;
    this._postDescription = postDescription;
    this._numLikes = 0;
  }

  get userName() {
    return this._userName;
  }

  get imageUrl() {
    return this._imageUrl;
  }

  get postDescription() {
    return this._postDescription;
  }

  set postDescription(postDescription: string) {
    this._postDescription = postDescription;
  }

  get numLikes() {
    return this._numLikes;
  }

  incrementLikes() {
    this._numLikes += 1;
  }
}

const post1 = new Post("29_carvalho", "image1", "post1");
post1.incrementLikes();
post1.postDescription = "post1 description";
console.log(post1);

const post2 = new Post("user name", "image2", "post2");

post2.incrementLikes();
console.log(post2);
