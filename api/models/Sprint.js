/**
 * Sprint.js
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

    number:{
  		type:'integer'
		},

    state:{
  		type:'string'
    },

    start_date:{
  		type:'datetime'
    },
    
    end_date:{
  		type:'datetime'
		},
    
    //one to many between project and Sprint , where one project have many sprint
		project_id:{
			model:'project'
		},

    //one to many Sprint and Story user, where  many stories users have  one Sprint
    stories_users: {
      collection:'story_user',
      via: 'sprint_id'
    }

  }
};

