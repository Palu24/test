

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
'department':function(){
	 return Departments.find().fetch();
     }
});
