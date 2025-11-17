# Hash map planning

## Does your program have a user interface? What will it look like? What functionality will the interface have?

- N/A.

## How do you plan to design the application state?

- hashMap class that creates the hashMap object. It's then exported to the JS index where it's tested.
  export

## How do you plan to organize your project files?

- index.js
- hashMap.js

## What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- Only inputs are manual testing from index.js file. No user interface.

## Given your inputs, what are the steps necessary to return the desired output?

- Create hashMap class.
- Its constructor has the following keys by default:
  - capacity, set to 16 by default.
  - load factor, set to 0.75 by default.
  - length, set to 0 by default.
  - buckets, which is an empty object literal.
- The class has the following methods:
  - hash(key):
    - Takes a key parameter.
    - Use TOP hash function, but add a modulo to it so it doesn't get too big.
    - Modulo by capacity at the end so it fits within the existing capacity.
  - increaseCapacity():
    - Takes no parameters.
    - Doubles capacity.
    - initalizes increasedBuckets object literal. Iterates over existing buckets obj and readds each key to increasedBuckets. Because of the doubled capacity, each key's hash will be different.
    - Sets buckets to increasedBuckets.
  - set(key, value):
    - Takes key and value parameters.
    - adds new key to buckets, with the key being the hash value of the key param, and the value being value param.
    - Consider doing linked list for handling collisions.
    - length / capacity > load factor, call increaseCapacity().
    - length++.
  - get(key):
    - Takes a key argument.
    - Take the hashed result of that key and check whether buckets at that index is true. If so, return it. Else, return null.
  - has(key):
    - Takes a key argument.
    - Take the hashed result of that key and check whether buckets at that index is true. If so, return true, else false.
  - remove(key):
    - Takes key as an argument.
    - Checks whether buckets has that specific key. If so, calls delete buckets.hashed(key) and length--. Else return false.
  - length():
    - Returns length key.
  - clear():
    - sets buckets to {};
    - sets length to 0.
  - keys():
    - initializes hashMapKeys.
    - For of loop with buckets.keys. Adds each key to the new array.
    - Returns array.
  - values():
    - initializes hashMapValues.
    - For of loop with buckets.values. Adds each value to the new array.
    - Returns array.
  - entries():
    - initializes hashMapKVPs.
    - For off loop with buckets.keys.
      - Initialize new variable and set it equal to string with value of key and value.
      - Push it to array.
    - Returns array.
- Go back to the set method and add functionality for collisions.
