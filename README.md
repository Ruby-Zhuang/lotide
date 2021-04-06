# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ruby.zhuang/lotide`

**Require it:**

`const _ = require('@ruby.zhuang/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
* `countOnly(array, object)`: takes in an array of items and then returns counts for a specific subset of those items.
* `eqArrays(array1, array2)`: two arrays and then returns true or false, based on a perfect match.
* `eqObjects(object1, object2)`: takes in two objects and then returns true or false, based on a perfect match.
* `findKey(ojbect, vlaue)`: takes in an object and a value and then returns the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `findKeyValue(object, callback)`: takes in an object and a callback and then returns the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `flatten(array)`: takes in an array containing elements including nested arrays of elements, and then returns a "flattened" version of the array.
* `head(array)`: takes in an array and then returns the first item in the array.
* `letterPositions(string)`: takes in a sentence and then returns all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: takes in an array and callback and then returns a new array based on the results of the callback function.
* `middle(array)`: takes in an array and then returns the middle-most element(s) of the given array.
* `tail(array)`: takes in an array and then returns the "tail" of an array - everything except for the first item (head) of the provided array.
* `takeUntil(array, callback)`: takes in an array and callback function and then returns a slice of the array with elements taken from the beginning until the callback provided returns a truthy value.
* `without(source, itemsToRemove)`: takes in a source array and a itemsToRemove array and then returns a subset of a given array, removing unwanted elements.