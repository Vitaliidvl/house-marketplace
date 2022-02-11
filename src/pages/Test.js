import React, { useState, useRef } from 'react';

const arr = [
  { id: 1, name: 'Mike' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Brad' },
];

export const Test = () => {
  const [users, setUsers] = useState(arr);
  const inputRef = useRef(null);

  const onSearch = () => {
    const filteredUsers = () =>
      arr.filter((user) =>
        user.name.toLowerCase().includes(inputRef.current.value.toLowerCase())
      );
    setUsers(filteredUsers);
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

function callback() {
  console.log(this.length);
}
const object = {
  length: 5,
  method() {
    arguments[0]();
  },
};
object.method(callback, 12);

let pr1 = {
  name: 'apple',
  price: 10,
};
let pr2 = pr1;
pr2.name = 'banana';
pr2.price = 11;
console.log(pr1.name);
console.log(pr2.name);

let pr3 = pr2;
pr3.name = 'mango';
console.log(pr1.name);
let pr4 = pr3;
pr4.name = 'mandarin';
pr3.name = 'potato';
console.log(pr1.name);

var foo = 12345;
var bar = function () {
  baz();
  var baz = function () {
    console.log(foo);
  };
};
bar();

const array = [1, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5];

const convertArrayToObject = (array) =>
  array.reduce((acc, curr) => ((acc[curr] = ++acc[curr] || 1), acc), {});
console.log(convertArrayToObject(array));     


