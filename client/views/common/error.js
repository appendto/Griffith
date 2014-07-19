Template.error.errors= function(){
  return Errors.find({}, {
    limit: 2
  });
}