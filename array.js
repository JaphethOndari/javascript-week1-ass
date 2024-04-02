

const data = [
  { name: 'Alice', age: 25, city: 'New York' },

  { name: 'Bob', age: 30, city: 'Chicago' },

  { name: 'Charlie', age: 35, city: 'New York' },

  { name: 'Dave', age: 40, city: 'Chicago' },
];

const groupByCategory = data.reduce((group, data) => {
  const { city } = data;
  group[city] = group[city] ?? [];
  group[city].push(data);
  return group;
}, {});

console.log(groupByCategory);
