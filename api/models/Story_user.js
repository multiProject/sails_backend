/**
 * Story_user.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id:{
			type:'integer',
			primaryKey:true,
      autoIncrement: true
		},
		
  	title:{
  		type:'string'
		},

		state:{
  		type:'string'
		},
		
		description:{
  		type:'string'
		},

		points:{
  		type:'integer'
		},
		
		//one to many between backlog and Story_user , where one backlog have many story user
		backlog_id:{
			model:'backlog'
		},

		//one to many between Sprint and Story_user , where one Sprint have many story user
		sprint_id:{
			model:'sprint'
		},

		//one to many between Member and Story_user , where one Member have many story user
		member_id:{
			model:'member'
		},

    //one to many between Story_user and  Comment, where one Story user have many comments
    coments: {
      collection:'comment',
      via: 'story_user_id'
		}
  
  }
};

