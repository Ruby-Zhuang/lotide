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
* `head(array)`: takes in an array and then returns the first item in the array.
* `map(array, callback)`: takes in an array and callback and then returns a new array based on the results of the callback function.
* `middle(array)`: takes in an array and then returns the middle-most element(s) of the given array.
* `tail(array)`: takes in an array and then returns the "tail" of an array - everything except for the first item (head) of the provided array.
* `takeUntil(array, callback)`: takes in an array and callback function and then returns a slice of the array with elements taken from the beginning until the callback provided returns a truthy value.
* `without(source, itemsToRemove)`: takes in a source array and a itemsToRemove array and then returns a subset of a given array, removing unwanted elements.