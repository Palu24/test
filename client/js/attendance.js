Template.riAttendance.rendered = function() {
    if(!this._rendered) {
var thisId=Meteor.user().username;

console.log(thisId);
var info= Teachers.find({name:thisId}).fetch();
console.log(info);
Session.set('information',info);

    }
}

Template.riAttendance.events({

	'submit .toggle':function(event){
			event.preventDefault();
			var targets = event.target.toggle;
			var present=[];
			var absent=[];
			for( i in targets) {
		     		var v =targets[i].checked;
		     		if(v)
				    {
					 present.push(targets[i].value);
               		 	    }
		    		else{
					absent.push(targets[i].value);
				    }
					   }
			Attendance.insert({ present:present,
					     absent:absent,
						});
			console.log(Attendance.find().fetch());
 					},
	'submit .sub': function(event){
         	event.preventDefault();
		var deptt = event.target.dept.value;
		var year  = event.target.year.value;
		console.log(deptt);
		console.log(year);
		var data=Students.find({
					 department: deptt,
					       year: year}).fetch();
			console.log(deptt);
			console.log(year);
		        Session.set('data',data);


    }
});

Template.riAttendance.helpers({
 'info':function(){
	var data= Session.get("data");
		console.log(data);
		return data;
		},
'data':function(){
	var dataout= Session.get("information");
		console.log(dataout);
		return dataout;

		},
'department':function(){
	 return Departments.find().fetch();
     }
});
