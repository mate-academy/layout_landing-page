function copy(obj) {
  return obj;
}

const a = { age: 1 };
const b = copy(a);
const c = copy(a);

b.age++;

console.log(c.age);
