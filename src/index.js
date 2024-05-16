export default function getProperties(obj, orderArr) {
  const filteredObject = {};
  const rest = {};
  for (const key in obj) {
    if (orderArr.includes(key)) {
      filteredObject[key] = obj[key];
    } else {
      rest[key] = obj[key];
    }
  }
  
  const sortedRest = Object.fromEntries(Object.entries(rest).sort());
  return {...filteredObject, ...sortedRest};
}