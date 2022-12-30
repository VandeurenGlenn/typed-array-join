import join from './join.js'

const joined = join([new TextEncoder().encode('hello'), new TextEncoder().encode('world')], '/')

console.log('can join');
console.log(new TextDecoder().decode(joined) === 'hello/world') 