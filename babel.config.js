module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import',{
      libraryName : 'vant',
      libraryDierctory : 'es',
      style : true
    }, 'vant']
  ]
}
