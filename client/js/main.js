Template.hello.events({
    'click #worksClick': function (evt) {
        $('html, body').animate({
        scrollTop: $("#works").offset().top
    }, 2000);
  }
});

Template.hello.helpers({
'isAdmin':function(){
var firstUserObj = Meteor.users.findOne().reverse()._id;
var thisUser = Meteor.userId();
console.log(firstUserObj);
console.log(thisUser);
return (firstUserObj == thisUser);
},

'isTeacher':function(){
  var thisUser = Meteor.users.findOne(Meteor.userId());
  return (thisUser.profile.role == 'teacher');
},

'isDepartmentClerk':function(){
  var thisUser = Meteor.users.findOne(Meteor.userId());
  return (thisUser.profile.role == 'dclerk');
},

'isPrincipalClerk':function(){
  var thisUser = Meteor.users.findOne(Meteor.userId());
  return (thisUser.profile.role == 'pclerk');
}

});

Template.hello.events({
 'submit #createUserForm':function(event){
    event.preventDefault();
    var username = event.target.username.value;
    var email = event.target.email.value;
    var password = event.target.password.value;
    var role = event.target.role.value;
    Accounts.createUser({
                            username: username,
                            email : email,
                            password : password,
                            profile  : {
                                role:role
                            }
		});
    
}
});
