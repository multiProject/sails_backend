/**
 * Comment.js
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

    description:{
  		type:'string'
    },

    date:{
  		type:'datetime'
    },


    //one to many between Story_user and  Comment, where one Story user have many comments
		story_user_id:{
			model:'story_user'
    },
    
     //one to many between member_id and  Comment, where one member_id user have many comments
		member_id:{
		  model:'member'
		}

  }
};

