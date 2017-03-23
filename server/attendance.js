Meteor.publish('attendance', function(){
	return Attendance.find();
});

Meteor.methods({
	'takeAttendance':function(present,absent){
			Attendance.insert({ present:present, 
					     absent:absent });
			console.log(Attendance.find().fetch());
			},
	'getData':function(deptt,year){
			var data=Students.find({
					 department: deptt,
					       year: year}).fetch();
			console.log(deptt);
			console.log(year);
			return data;
			}
});
