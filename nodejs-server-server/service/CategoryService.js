'use strict';


/**
 * Creates a 'Category'
 *
 * category Category_Create The Category to be created
 * returns Category
 **/
exports.createCategory = function(category) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lifecycleStatus" : "lifecycleStatus",
  "isRoot" : true,
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "href" : "href",
  "version" : "version",
  "parentId" : "parentId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List or find 'Category' objects
 *
 * fields String Comma separated properties to display in response (optional)
 * lastUpdate Date For filtering: Date and time of the last update (optional)
 * version String For filtering: Category version (optional)
 * lifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
 * validForStartDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
 * validForEndDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
 * parentId String For filtering: Unique identifier of the parent category (optional)
 * isRoot Boolean For filtering: If true, this Boolean indicates that the category is a root of categories (optional)
 * name String For filtering: Name of the category (optional)
 * returns List
 **/
exports.listCategory = function(fields,lastUpdate,version,lifecycleStatus,validForStartDateTime,validForEndDateTime,parentId,isRoot,name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lifecycleStatus" : "lifecycleStatus",
  "isRoot" : true,
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "href" : "href",
  "version" : "version",
  "parentId" : "parentId"
}, {
  "lifecycleStatus" : "lifecycleStatus",
  "isRoot" : true,
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "href" : "href",
  "version" : "version",
  "parentId" : "parentId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a 'Category' by Id
 *
 * id String Identifier of the Category
 * returns List
 **/
exports.retrieveCategory = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lifecycleStatus" : "lifecycleStatus",
  "isRoot" : true,
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "href" : "href",
  "version" : "version",
  "parentId" : "parentId"
}, {
  "lifecycleStatus" : "lifecycleStatus",
  "isRoot" : true,
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "href" : "href",
  "version" : "version",
  "parentId" : "parentId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a 'Category' by Id
 *
 * id String Identifier of the Category
 * category Category_Update The Category to be updated
 * returns Category
 **/
exports.updateCategory = function(id,category) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lifecycleStatus" : "lifecycleStatus",
  "isRoot" : true,
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "href" : "href",
  "version" : "version",
  "parentId" : "parentId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates partially a 'Category' by Id
 *
 * id String Identifier of the Category
 * category Category_Update The Category to be updated
 * returns Category
 **/
exports.updateCategoryPatch = function(id,category) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lifecycleStatus" : "lifecycleStatus",
  "isRoot" : true,
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "href" : "href",
  "version" : "version",
  "parentId" : "parentId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

