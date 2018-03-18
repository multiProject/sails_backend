/**
 * Backlog.js
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

    //one to many backlog and Story user, where  many stories users have  one baklog 
    stories_users: {
      collection:'story_user',
      via: 'backlog_id'
    },

    //one to one bewteen backlog and project
    project_Id:{
      model:'project',
      unique: true
    }

  }
};

