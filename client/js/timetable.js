Template.timetable.helpers({
    'department': function(){
        return Departments.find().fetch();
    },
    'teacher':function(){
	 var found= Session.get("teacherdata");
	 return found;
    },
    'roominfo':function(){
	var data= Session.get("roomdata");
	console.log(data);
	 return data;

	},
	'subjectinfo':function(){
	var datainfo= Session.get("subdata");
	console.log(datainfo);
	 return datainfo;

	}
});
/*Template.timeTable.helpers({
    'teacher': function(){
        return Teachers.find().fetch();
    }
});*/



Template.timetable.events({
    'change #department': function(event){
         	event.preventDefault();
		var deptt = $('.deptt').val();
    console.log(deptt);
		Session.set('department',deptt);
			var found= Teachers.find({ department:deptt }).fetch();
			console.log("teacher's data found");
			Session.set('teacherdata',found);
			var data= Rooms.find({ department:deptt }).fetch();
			console.log(data);
			Session.set('roomdata',data);
					},

'change #teacher': function(event){
         	event.preventDefault();
		var deptt= Session.get('department');
			var data= Rooms.find({department:deptt}).fetch();
			console.log(data);
			Session.set('roomdata',data);
		var teacher = $('.teach').val();
			console.log(teacher);
			var info= Subteacher.find({teacher:teacher}).fetch();
			console.log(info);
			     Session.set('subdata',info);
					},

	'submit .teacher':function(event){
		event.preventDefault();
		var deptt      = Session.get('department');
		var teacher    = event.target.teach.value;
		//1 sub
		var monsub1    = event.target.monsub1.value;
		var tuesub1    = event.target.tuesub1.value;
		var wedsub1    = event.target.wedsub1.value;
		var thurssub1  = event.target.thurssub1.value;
		var frisub1    = event.target.frisub1.value;
		//2 sub
		var monsub2    = event.target.monsub2.value;
		var tuesub2    = event.target.tuesub2.value;
		var wedsub2    = event.target.wedsub2.value;
		var thurssub2  = event.target.thurssub2.value;
		var frisub2    = event.target.frisub2.value;
		//3 sub
		var monsub3    = event.target.monsub3.value;
		var tuesub3    = event.target.tuesub3.value;
		var wedsub3    = event.target.wedsub3.value;
		var thurssub3  = event.target.thurssub3.value;
		var frisub3    = event.target.frisub3.value;
		//4 sub
		var monsub4    = event.target.monsub4.value;
		var tuesub4    = event.target.tuesub4.value;
		var wedsub4    = event.target.wedsub4.value;
		var thurssub4  = event.target.thurssub4.value;
		var frisub4    = event.target.frisub4.value;
		//5 sub
		var monsub5    = event.target.monsub5.value;
		var tuesub5    = event.target.tuesub5.value;
		var wedsub5    = event.target.wedsub5.value;
		var thurssub5  = event.target.thurssub5.value;
		var frisub5    = event.target.frisub5.value;
		//6 sub
		var monsub6    = event.target.monsub6.value;
		var tuesub6    = event.target.tuesub6.value;
		var wedsub6    = event.target.wedsub6.value;
		var thurssub6  = event.target.thurssub6.value;
		var frisub6    = event.target.frisub6.value;
		//7 sub
		var monsub7    = event.target.monsub7.value;
		var tuesub7    = event.target.tuesub7.value;
		var wedsub7    = event.target.wedsub7.value;
		var thurssub7  = event.target.thurssub7.value;
		var frisub7    = event.target.frisub7.value;
		//8 sub
		var monsub8    = event.target.monsub8.value;
		var tuesub8    = event.target.tuesub8.value;
		var wedsub8    = event.target.wedsub8.value;
		var thurssub8  = event.target.thurssub8.value;
		var frisub8    = event.target.frisub8.value;
		//classname start
		//1 class
		var monclass1   = event.target.monclass1.value;
		var tueclass1   = event.target.tueclass1.value;
		var wedclass1   = event.target.wedclass1.value;
		var thursclass1 = event.target.thursclass1.value;
		var friclass1   = event.target.friclass1.value;
		//2 class
		var monclass2   = event.target.monclass2.value;
		var tueclass2   = event.target.tueclass2.value;
		var wedclass2   = event.target.wedclass2.value;
		var thursclass2 = event.target.thursclass2.value;
		var friclass2   = event.target.friclass2.value;
		//3 class
		var monclass3   = event.target.monclass3.value;
		var tueclass3   = event.target.tueclass3.value;
		var wedclass3   = event.target.wedclass3.value;
		var thursclass3 = event.target.thursclass3.value;
		var friclass3   = event.target.friclass3.value;
		//4 class
		var monclass4   = event.target.monclass4.value;
		var tueclass4   = event.target.tueclass4.value;
		var wedclass4   = event.target.wedclass4.value;
		var thursclass4 = event.target.thursclass4.value;
		var friclass4   = event.target.friclass4.value;
		//5 class
		var monclass5   = event.target.monclass5.value;
		var tueclass5   = event.target.tueclass5.value;
		var wedclass5   = event.target.wedclass5.value;
		var thursclass5 = event.target.thursclass5.value;
		var friclass5   = event.target.friclass5.value;
		//6 class
		var monclass6   = event.target.monclass6.value;
		var tueclass6   = event.target.tueclass6.value;
		var wedclass6   = event.target.wedclass6.value;
		var thursclass6 = event.target.thursclass6.value;
		var friclass6   = event.target.friclass6.value;
		//7 class
		var monclass7   = event.target.monclass7.value;
		var tueclass7   = event.target.tueclass7.value;
		var wedclass7   = event.target.wedclass7.value;
		var thursclass7 = event.target.thursclass7.value;
		var friclass7   = event.target.friclass7.value;
		//8 class
		var monclass8   = event.target.monclass8.value;
		var tueclass8   = event.target.tueclass8.value;
		var wedclass8   = event.target.wedclass8.value;
		var thursclass8 = event.target.thursclass8.value;
		var friclass8   = event.target.friclass8.value;

		console.log("data reached");
			TimeTable.insert({department:deptt,
					name:teacher,
					//mon sub
					monsub1:monsub1,
					monsub2:monsub2,
					monsub3:monsub3,
					monsub4:monsub4,
					monsub5:monsub5,
					monsub6:monsub6,
					monsub7:monsub7,
					monsub8:monsub8,
					//tue sub
					tuesub1:tuesub1,
					tuesub2:tuesub2,
					tuesub3:tuesub3,
					tuesub4:tuesub4,
					tuesub5:tuesub5,
					tuesub6:tuesub6,
					tuesub7:tuesub7,
					tuesub8:tuesub8,
					//wed sub
					wedsub1:wedsub1,
					wedsub2:wedsub2,
					wedsub3:wedsub3,
					wedsub4:wedsub4,
					wedsub5:wedsub5,
					wedsub6:wedsub6,
					wedsub7:wedsub7,
					wedsub8:wedsub8,
					//thurs sub
					thurssub1:thurssub1,
					thurssub2:thurssub2,
					thurssub3:thurssub3,
					thurssub4:thurssub4,
					thurssub5:thurssub5,
					thurssub6:thurssub6,
					thurssub7:thurssub7,
					thurssub8:thurssub8,
					//fri sub
					frisub1:frisub1,
					frisub2:frisub2,
					frisub3:frisub3,
					frisub4:frisub4,
					frisub5:frisub5,
					frisub6:frisub6,
					frisub7:frisub7,
					frisub8:frisub8,
					//mon class
					monclass1:monclass1,
					monclass2:monclass2,
					monclass3:monclass3,
					monclass4:monclass4,
					monclass5:monclass5,
					monclass6:monclass6,
					monclass7:monclass7,
					monclass8:monclass8,
					//tue class
					tueclass1:tueclass1,
					tueclass2:tueclass2,
					tueclass3:tueclass3,
					tueclass4:tueclass4,
					tueclass5:tueclass5,
					tueclass6:tueclass6,
					tueclass7:tueclass7,
					tueclass8:tueclass8,
					//wed sub
					wedclass1:wedclass1,
					wedclass2:wedclass2,
					wedclass3:wedclass3,
					wedclass4:wedclass4,
					wedclass5:wedclass5,
					wedclass6:wedclass6,
					wedclass7:wedclass7,
					wedclass8:wedclass8,
					//thurs sub
					thursclass1:thursclass1,
					thursclass2:thursclass2,
					thursclass3:thursclass3,
					thursclass4:thursclass4,
					thursclass5:thursclass5,
					thursclass6:thursclass6,
					thursclass7:thursclass7,
					thursclass8:thursclass8,
					//fri class
					friclass1:friclass1,
					friclass2:friclass2,
					friclass3:friclass3,
					friclass4:friclass4,
					friclass5:friclass5,
					friclass6:friclass6,
					friclass7:friclass7,
					friclass8:friclass8
					}),
			console.log("hogya g submit");
		//1 sub
		event.target.monsub1.value="Subjects";
		 event.target.tuesub1.value="Subjects";
		 event.target.wedsub1.value="Subjects";
		 event.target.thurssub1.value="Subjects";
		event.target.frisub1.value="Subjects";
		//2 sub
		 event.target.monsub2.value="Subjects";
		 event.target.tuesub2.value="Subjects";
		 event.target.wedsub2.value="Subjects";
		 event.target.thurssub2.value="Subjects";
		 event.target.frisub2.value="Subjects";
		//3 sub
		 event.target.monsub3.value="Subjects";
		 event.target.tuesub3.value="Subjects";
		event.target.wedsub3.value="Subjects";
		 event.target.thurssub3.value="Subjects";
		 event.target.frisub3.value="Subjects";
		//4 sub
		 event.target.monsub4.value="Subjects";
		 event.target.tuesub4.value="Subjects";
		 event.target.wedsub4.value="Subjects";
		 event.target.thurssub4.value="Subjects";
		 event.target.frisub4.value="Subjects";
		//5 sub
		 event.target.monsub5.value="Subjects";
		 event.target.tuesub5.value="Subjects";
		event.target.wedsub5.value="Subjects";
		event.target.thurssub5.value="Subjects";
		 event.target.frisub5.value="Subjects";
		//6 sub
		event.target.monsub6.value="Subjects";
		event.target.tuesub6.value="Subjects";
	        event.target.wedsub6.value="Subjects";
		event.target.thurssub6.value="Subjects";
		event.target.frisub6.value="Subjects";
		//7 sub
		event.target.monsub7.value="Subjects";
		event.target.tuesub7.value="Subjects";
		event.target.wedsub7.value="Subjects";
		event.target.thurssub7.value="Subjects";
		event.target.frisub7.value="Subjects";
		//8 sub
		 event.target.monsub8.value="Subjects";
		event.target.tuesub8.value="Subjects";
		event.target.wedsub8.value="Subjects";
		event.target.thurssub8.value="Subjects";
		event.target.frisub8.value="Subjects";
		//classname start
		//1 class
		event.target.monclass1.value="Rooms";
		event.target.tueclass1.value="Rooms";
		event.target.wedclass1.value="Rooms";
		event.target.thursclass1.value="Rooms";
		event.target.friclass1.value="Rooms";
		//2 class
		event.target.monclass2.value="Rooms";
		event.target.tueclass2.value="Rooms";
		event.target.wedclass2.value="Rooms";
		event.target.thursclass2.value="Rooms";
		event.target.friclass2.value="Rooms";
		//3 class
		event.target.monclass3.value="Rooms";
		event.target.tueclass3.value="Rooms";
		event.target.wedclass3.value="Rooms";
		event.target.thursclass3.value="Rooms";
		event.target.friclass3.value="Rooms";
		//4 class
		event.target.monclass4.value="Rooms";
		event.target.tueclass4.value="Rooms";
		event.target.wedclass4.value="Rooms";
		event.target.thursclass4.value="Rooms";
		event.target.friclass4.value="Rooms";
		//5 class
		 event.target.monclass5.value="Rooms";
		event.target.tueclass5.value="Rooms";
		event.target.wedclass5.value="Rooms";
		event.target.thursclass5.value="Rooms";
		event.target.friclass5.value="Rooms";
		//6 class
		event.target.monclass6.value="Rooms";
		 event.target.tueclass6.value="Rooms";
		event.target.wedclass6.value="Rooms";
		event.target.thursclass6.value="Rooms";
		event.target.friclass6.value="Rooms";
		//7 class
		event.target.monclass7.value="Rooms";
		event.target.tueclass7.value="Rooms";
		event.target.wedclass7.value="Rooms";
		event.target.thursclass7.value="Rooms";
		event.target.friclass7.value="Rooms";
		//8 class
		event.target.monclass8.value="Rooms";
		event.target.tueclass8.value="Rooms";
		event.target.wedclass8.value="Rooms";
		 event.target.thursclass8.value="Rooms";
		event.target.friclass8.value="Rooms";
}});
