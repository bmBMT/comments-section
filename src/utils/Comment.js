export class Comment {
  constructor() {
    this.id = 0;
    this.content = "";
    this.createdAt = "now";
    this.score = 0;
    this.ownCommentId = 0;
    this.user = {};
    this.replies = [];
  }
}

export class ReplyComment {
  constructor() {
    this.id = 0;
    this.content = "";
    this.createdAt = "now";
    this.score = 0;
    this.replyingTo = "";
    this.ownCommentId = 0;
    this.user = {};
  }
}