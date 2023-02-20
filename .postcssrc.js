//ESM(에크마 스크립트 모듈)
//CommonJS

// import autoprefixer from 'autoprefixer'
const autoprefixer = require('autoprefixer')

// export {
//   plugins: [
//     autoprefixer
// }

module.exports = {
  plugins: [
    autoprefixer
  ]
}

// module.exports = {
//   plugins: [
//     require('autoprefixer')
//   ]
// }