module.exports = {
  reverse: function (value) {
    return value.split('').reverse().join('')
  },
  truncate: function (value, length) {
    return value.substring(0, length) + '.....'
  }
}
