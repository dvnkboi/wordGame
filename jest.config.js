// jest.config.js
module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
}