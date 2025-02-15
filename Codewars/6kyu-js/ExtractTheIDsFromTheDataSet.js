/* Codewars
Complete the method so that it returns an array of all ID's passed in. The data
 structure will be similar to the following:

var data = {
  id: 1,
  items: [
    {id: 2},
    {id: 3, items: [
      {id: 4},
      {id: 5}
    ]}
  ]
}

extractIds(data) // should return [1,2,3,4,5]
The method should be able to handle the case of empty data being passed in.

Note: The only arrays that need to be traversed are those assigned to the 
"items" property.
*/

function extractIds(obj, r = []) {
  if(obj.id)
    r.push(obj.id);
  for(let element in obj.items)
    extractIds(obj.items[element], r);
  return r;
}

// Testing
var data = { 
  id: 1,
  items: [ {id: 2}, {id: 3, items: [{id: 4}, {id: 5}]} ]
}

console.log(extractIds(data));

const data3 = {
  id : 1,
  items : [{
  id : 2,
  items : [{
    id : 3,
    items : [
    {id : 4},
    {id : 5}
    ]
    },{
    id : 6,
    items : [{id : 7}]
    }]
  }]
}

console.log(extractIds(data3));