const DB = {...};

DB.toArray({ 
  abc: { key: 'abc' },
  def: { key: 'def'} 
}) 
// [{ key: 'abc', key: 'def' }]

DB.fromArray([ 
  { key: 'abc' },
  { key: 'def' } 
]) 
/* { 
  abc: { ... } 
  def: { ... }
}
*/

DB.add({ abc: { ... } }, { def: { ... }, ged: { ... } }) // { abc: {}, def: {}, ged: {} }
DB.delete({ abc: {...} }, 'abc');