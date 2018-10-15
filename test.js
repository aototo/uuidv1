const uuidv1 = require('./uuidv1.js')
const uuidv1Min = require('./uuidv1.min.js')

for (let i = 0; i < 16 * 16 * 16 + 1; i++) {
  console.log(uuidv1(), uuidv1Min())
}
