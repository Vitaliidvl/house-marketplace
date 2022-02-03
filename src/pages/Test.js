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
