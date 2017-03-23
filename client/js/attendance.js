Meteor.subscribe('attendance');

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
			Meteor.call('takeAttendance',present,absent);
 					},
	'submit .sub': function(event){
         	event.preventDefault();
		var deptt = event.target.dept.value;
		var year  = event.target.year.value;
		console.log(deptt);
		console.log(year);
		Meteor.call('getData',deptt,year,function(err,data){
						    if(err){
							console.log(err);
							    } 
						    else    { 
						        Session.set('data',data);
							    }
						 });
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
