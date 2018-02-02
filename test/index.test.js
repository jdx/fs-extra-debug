require('..')
const fs = require('fs-extra')
const {expect} = require('chai')

describe('fs-extra-debug', () => {
  it('calls readJSONSync', () => {
    const pjson = fs.readJSONSync('package.json')
    expect(pjson.name).to.equal('fs-extra-debug')
  })
})
