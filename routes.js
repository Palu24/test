FlowRouter.route('/student', {
	action: function() {
		BlazeLayout.render("student");
			   }
});

FlowRouter.route('/addteacher', {
	action: function() {
		BlazeLayout.render("teacher");
  			   }
});

FlowRouter.route('/attendance', {
	action: function() {
		BlazeLayout.render("riAttendance");
			   }
});



FlowRouter.route('/department', {
	action: function() {
		BlazeLayout.render("departmentInformation");
  			   }
});

FlowRouter.route('/room', {
	action: function() {
		BlazeLayout.render("room");
  			   }
});

FlowRouter.route('/allocatesubject', {
	action: function() {
		BlazeLayout.render("allocateSubject");
  			   }
});

FlowRouter.route('/timetable', {
	action: function() {
		BlazeLayout.render("timetable");
			   }
});

FlowRouter.route('/insertsubject', {
	action: function() {
		BlazeLayout.render("insertSubject");
			   }
});
