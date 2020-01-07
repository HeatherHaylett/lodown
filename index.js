'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: returns the value unchanged
 * 
 * @param {any value} value: Any value.
 * 
 * @return {any value}: Input value unchanged.
*/
function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeof: Takes a value defines the datatype.
 * 
 * @param {any value} value: Any value.
 * 
 * @return {string}: Definition of datatype as a string.
 */
function typeOf(value){
     if(Array.isArray(value) === true){
        return 'array';
    } else if (value === null){
        return 'null';
    } else if (typeof(value) === 'string'){
        return 'string';
    } else if (typeof(value) === 'number'){
        return 'number';    
    } else if (typeof(value) === 'boolean'){
        return 'boolean';
    } else if (value === undefined){
        return 'undefined';
    } else if (typeof(value) === 'function'){
        return 'function';
    }
        return 'object';
};
module.exports.typeOf = typeOf;

/**
 * first: Return the nth first elements of an array based on the 
 * number argument given.
 * 
 * @param {array}: Array to return elements from.
 * @param {number}: Argument defining how many elements to return.
 * 
 * @return {array}: Returns n number of elements starting from the first element
 * of an array, as an array. Will return an empty array if number argument
 * is not positive or if array param is not an array. Will return entire array
 * if number argument is greater than length of array argument.
 * @return {any value}: If no number argument is given, the first element of the
 * array, any value, will be returned.
 */ 
function first(array, number){
    console.log(array);
    if(!Array.isArray(array)){
        return [];
    }
    if(number < 0){
        return [];
    }
    if(number > array.length){
        return array;
    }
    if(number > 0){
        return array.splice(0, number);
    }
    return array[0];
};
module.exports.first = first;

/**
 * last: Return the nth last elements of an array based on the 
 * number argument given.
 * 
 * @param {array}: Array to return elements from.
 * @param {number}: Argument defining how many elements to return.
 * 
 * @return {array}: Returns n number of elements starting from the last element
 * of an array, as an array. Will return an empty array if number argument
 * is not positive or if array param is not an array. Will return entire array
 * if number argument is greater than length of array argument.
 * @return {any value}: If no number argument is given, the last element of the
 * array, any value, will be returned
 */ 
function last(array, number){
    // console.log(array);
    // console.log(number);
    if(!Array.isArray(array)){
        return [];
    }
    if(number < 0){
        return [];
    }
    if(number > array.length){
        return array;
    }
    if(number > 0){
        return array.splice(-number);
    }
    return array[array.length - 1];
};
module.exports.last = last;

/**
 * indexOf: Gives us the index number where a value's argument
 * first appears in an array. If no value exists, we will get -1.
 * 
 * @param {array}: Array to loop over and check for value.
 * @param {value}: Value to search for. 
 * 
 * @return {number}: The index position of value or -1 if element does not 
 * exist.
 */ 
function indexOf(array, value){
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
        return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Cycles through an array to see if it contains a value. Will not
 * convert datatypes for comparison.
 * 
 * @param {array}: An array containing various datatypes.
 * @param {value}: Any value of any datatype.
 * 
 * @return {boolean}: True if the value is in the array, false if not.
 */ 
function contains(array, value){
    var arr = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            arr.push(array[i]);
        }
    }
    return (arr.length > 0) ? true : false;
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection.
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Loops through an array with duplicate values, then returns
 * a new array with duplicates removed.
 * 
 * @param {array}: An array with duplicate values
 * 
 * @return {array}: A new array with no duplicate values
 */
function unique(array){
 let newArr = [];
 for(var i = 0; i < array.length; i++){
    if(indexOf(newArr, array[i]) === -1){
        newArr.push(array[i]);
    }
    
}
    return newArr;
};
module.exports.unique = unique;

/**
 * filter: Loops through an array and the given function acts on each element.
 * The element is pushed into a new array if the test function returns true.
 * 
 * @param {array}: The array for which every element will pass through a 
 * given test function.
 * @param {function}: A test function that will act on each element in a 
 * given array.
 * 
 * @return {array}: A new array containing elements that return true after 
 * passing through the test function.
 */ 
function filter(array, func){
let result = [];
    each(array, function(elem, index, array){
        if(func(elem, index, array) === true){
            result.push(elem);
    }
    });
            return result;
};
module.exports.filter = filter;

/**
 * reject: Loops through an array and the given function acts on each element.
 * The element is pushed into a new array if the test function returns false. 
 * 
 * @param {array}: The array for which every element will pass through a 
 * given test function.
 * @param {function}: A test function that will act on each element in a 
 * given array.
 * 
 * @return {array}: A new array containing elements that return false after 
 * passing through the test function.
 */
function reject(array, func){
var result = filter(array, function(elem, index, array){
    if(func(elem, index, array) === false){
        return elem;
    }
});
        return result;
};
module.exports.reject = reject;

/**
 * partition: Loops through an array and has a test function act on each
 * element testing for truthy or falsy values.
 * 
 * @param {array}: An array to loop over.
 * @param {function}: A test function that will act on each element in a 
 * given array.
 * 
 * @return {array}: A new array that consists of two sub arrays separating 
 * truthy and falsy values.
 */ 
function partition(array, func){
    let trueElem = [];
    let falseElem = [];
    let total = [];
    for(var i = 0; i < array.length; i++){
        if(func(array[i], i, array) === false){
            falseElem.push(array[i]);
        }
    }
    for(var i = 0; i < array.length; i++){
        if(func(array[i], i, array) === true){
            trueElem.push(array[i]);
    }
    
}
    total.push(trueElem);
    total.push(falseElem);
    return total;
};
module.exports.partition = partition;

/**
 * map: Returns an array of elements that have been altered by the given function.
 * 
 * @param {collection}: Loops through a collection, either an array or an 
 * object, and the given function acts upon each element before returning a new
 * collection of elements that have been altered by the function.
 * @param {function} func: The function which will act on each element.
 * 
 * @return {array}: A new array of elements that have been altered.
 */
function map(collection, func){
    let result = [];
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            result.push(func(collection[i], i, collection));
        }
    } else {
        for(var key in collection){
            result.push(func(collection[key], key, collection));
        }
    }  
    return result;
};
module.exports.map = map;

/**
 * pluck: Loops through an object for a given propoerty and if the key exists,
 * returns a new array of the property values.
 * 
 * @param {array}: An array of objects that may contain a given property.
 * @param {property} prop: A given property to look for.
 * 
 * @return {array}: An array containing the property values if the given
 * property exists in the given array.
 */
function pluck(array, prop){
    var result = map(array, function(elem, index, collection){
            return elem[prop];
    })
    return result;
};
module.exports.pluck = pluck;

/**
 * every: Loops through an array and returns values in a new array that return
 * true after passing through a function. Will only return true if every value
 * returns true.
 * 
 * @param {collection}: An array or object of values.
 * @param {function} func: A function that will act on each element in the 
 * collection and if all values return true will return the boolean true.
 * If eve one value returns false, the boolean false will be returned.
 * 
 * @return {boolean}: True, if every value returns true, false if even one 
 * value returns false.
 */
function every(collection, func){
        if(!func){
                 for(var i = 0; i < collection.length; i++){
                     if(collection[i] === false){
                         return false;
                     }
                 }
                        return true;
             }     
        
        
        if(Array.isArray(collection)) {
            for(var i = 0; i < collection.length; i++) {
                if(func(collection[i], i, collection) === false){
                    return false;
                }
                   
        }
                 return true;
    } else {
            for (var key in collection) {
                if(func(collection[key], key, collection) === false){
                    return false;   
                }
                    
        }
                return true;
    }      
};
module.exports.every = every;

/**
 * some: Loops through an array and returns values in a new array that return
 * true after passing through a function. Will return true if just one value
 * returns true.
 * 
 * @param {collection}: An array or object of values.
 * @param {function} func: A function that will act on each element in the 
 * collection and as long as one value returns true will return the boolean true.
 * 
 * @return {boolean}: True, if even one value returns true, false if no values
 * return true.
 */
function some(collection, func){
        if(!func){
                 for(var i = 0; i < collection.length; i++){
                     if(collection[i] === true){
                         return true;
                     }
                 }
                        return false;
             }
        if(Array.isArray(collection)) {
            for(var i = 0; i < collection.length; i++) {
                if(func(collection[i], i, collection) === true){
                    return true;
                }
                   
        }
                 return false;
    } else {
            for (var key in collection) {
                if(func(collection[key], key, collection) === true){
                    return true;   
                }
                    
        }
                return false;
    }             
};
module.exports.some = some;

/**
 * reduce: A function acts on the previous result, element, and index. The
 * return value of the function is stored in the seed. The final call of the
 * function is returned as a single value.
 * 
 * @param {array}: An array for which elements will have a function act upon.
 * @param {function} func: A action taken on elements of a given array.
 * @param {seed}: An accumulator that starts from a given point or the first
 * index value of the array if no starting point given.
 * 
 * @return {value}: A number or an array representing a single condensed value,
 * or the final function call.
 */
 function reduce(array, func, seed){
    //if seed is given and not flasy
    if(seed !== undefined){
        for(var i = 0; i < array.length; i++){
            seed = func(seed, array[i], i, array)
        } 
    //if seed is not given or is falsy    
    } else {
        seed = array[0]; 
        //start loop at index 1 since seed starts at index 0
        for(var i = 1; i < array.length; i++){
            seed = func(seed, array[i], i, array)
        }
    }
        return seed;
};
module.exports.reduce = reduce;

/**
 * extend: Copies an objects value to the first object if the key already exists.
 * If the key does not exist, the property is added to the first object.
 * 
 * @param {objects} object1, ...objArgs: Multiple objects to from which 
 * properties are copied from one to the other.
 * 
 * @return {object}: The return object is an updated object of original 
 * and copied properties.
 */
function extend(object1, ...objArgs){
    let updatedObj1 = Object.assign(object1, ...objArgs);
    return updatedObj1;
};
module.exports.extend = extend;