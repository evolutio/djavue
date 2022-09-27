const fs = require('fs')
const path = require('path')

module.exports = {
  parseJson: (jsonPath) => {
    return JSON.parse(
      fs.readFileSync(path.resolve(__dirname, jsonPath), 'utf8')
    )
  },
}
