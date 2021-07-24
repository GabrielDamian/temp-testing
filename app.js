const http = require('http')

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const f_items = _.flattenDeep(items)
console.log(f_items)