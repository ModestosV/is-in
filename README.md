# is-in

A tiny utility to check if a value is included in a list or multiple values, with support for array or flattened arguments.

This lets you check whether a value belongs to a collection by placing the item first, just like Python’s value in list syntax.

---
# Usage

```bash
import { isIn } from 'is-in';

// Check using an array
console.log(isIn(3, [1, 2, 3])); // true

// Check using multiple arguments (flattened)
console.log(isIn('a', 'a', 'b', 'c')); // true

// With enums
enum Color {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
}

console.log(isIn(Color.Red, [Color.Red, Color.Green])); // true
console.log(isIn(Color.Blue, Color.Red, Color.Green)); // false
```