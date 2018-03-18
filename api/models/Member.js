/**
 * Member.js
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
		
		name:{
  		type:'string'
		},
		
		image:{
  		type:'longtext'
		},
		
		age:{
  		type:'integer'
		},
		
		email:{
  		type:'string'
		},
		
		password:{
  		type:'string'
		},
		
		gender:{
  		type:'string'
    },


		// many to many,  create table intermediate bewteen member and project
  	project_id:{
  		collection:'project',
  		via:'member_id'
		},
		
		 //one to many Member and Story user, where  many stories users have  one Member
		 stories_users: {
      collection:'story_user',
      via: 'member_id'
		},
		
		//one to many between Member and  Comment, where one Member have many comments
    coments: {
      collection:'comment',
      via: 'member_id'
		}

  }
};

