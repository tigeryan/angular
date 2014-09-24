'use strict';

angular.module('filters', []).
	filter('getByProperty', function() {
    	return function(propertyName, propertyValue, collection) {

			//console.log('propertyName: ' + propertyName);
			//console.log('propertyValue: ' + propertyValue);
			//console.log(collection);


        	var i=0, len=collection.length;
        	for (; i<len; i++) {

				//console.log('pName: ' + collection[i][propertyName]);
				//console.log('pValue: ' + propertyValue);

            	if (collection[i][propertyName] === propertyValue) {
                	return collection[i];
				}
			}
        	return null;
    	};
});
