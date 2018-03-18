/**
 * Project.js
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

    //one to one bewteen backlog and project
    backlog_id: {
      collection:'backlog',
      via: 'project_Id'
    },

    //one to many and project, where  many Sprint have one project 
    sprints: {
      collection:'sprint',
      via: 'project_id'
    },
    
    // many to many,  create table intermediate bewteen member and project
    member_id:{
      collection:'member',
      via:'project_id',
      dominant: true
    }

  }
};

