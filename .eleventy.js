const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (config) {
    config.addPassthroughCopy({ './src/_static/style.css': 'style.css' })
    config.addPassthroughCopy({ './src/_static/bg.png': 'bg.png' })
    config.addPlugin(pluginWebc)

    return {
      dir: {
        input: './src',
        output: './build' 
      }
    }
}