module.exports = function (config) {
    config.addPassthroughCopy({ './src/_static/style.css': 'style.css' })
    config.addPassthroughCopy({ './src/_static/bg.png': 'bg.png' })
  
    return {
      dir: {
        input: './src',
        output: './build' 
      }
    }
}