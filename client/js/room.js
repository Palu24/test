Template.room.events({
    'submit .btn1': function(event){
         	event.preventDefault();
		var deptt = event.target.dept.value;
		var room  = event.target.room.value;
		Rooms.insert({     department: deptt,
				   room:room
				});
			console.log("room inserted");
			
		
		event.target.room.value =" ";
    }
});

Template.room.helpers({
    'department': function(){
        return Departments.find().fetch();
    }
});
