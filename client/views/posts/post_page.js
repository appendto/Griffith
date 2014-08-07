Template.post_page.helpers({
  post: function () {
    return Posts.findOne(this.postId);
  },
  body_formatted: function(){
    var converter = new Markdown.Converter();
    var html_body=converter.makeHtml(this.body);
    return html_body.autoLink();
  },
  canComment: function(){
    var isAccepted = this.status === STATUS_IMPLEMENTED;
    var isRejected = this.status === STATUS_REJECTED;

    if (canComment(Meteor.user()) && !isAccepted && !isRejected) {
      return true;
    }
  }
});

Template.post_page.rendered = function(){
  if((scrollToCommentId=Session.get('scrollToCommentId')) && !this.rendered && $('#'+scrollToCommentId).exists()){
    scrollPageTo('#'+scrollToCommentId);
    Session.set('scrollToCommentId', null);
    this.rendered=true;
  }
  if(this.data && this.data.headline) // XXX
    document.title = this.data.headline;
}
