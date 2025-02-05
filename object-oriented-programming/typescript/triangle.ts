/*
A triangle, a fundamental geometric shape, is a polygon characterized by three sides and three vertices. According to the triangle inequality theorem, in any valid triangle, the sum of the lengths of any two sides must be greater than the length of the third side.

Your task is to create an object that represents a triangle. This object should have three properties, each corresponding to one of its sides. Additionally, a function is required to validate whether the given sides adhere to the triangle inequality theorem.

For example, consider a triangle with side lengths: a = 7, b = 10, and c = 5. To determine if these sides form a valid triangle, we evaluate whether the sum of each pair of sides is greater than the length of the remaining side. In this case, we check if (b + c) > a, (a + c) > b, and (a + b) > c. If all three conditions are met, then the sides indeed form a triangle.
*/

interface Triangle {
  a: number
  b: number
  c: number
}

const triangle: Triangle = {
  a: 7,
  b: 10,
  c: 5
}

const isValidTriangle = ({ a, b, c }: Triangle) => {
  return (b + c) > a && (a + c) > b && (a + b) > c 
}

console.log(isValidTriangle(triangle))

