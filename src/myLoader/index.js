const { getOptions } = require('loader-utils')
const MarkdownIt = require('markdown-it')
module.exports = function (source) {
    const options = getOptions(this) || {}
    const md = new MarkdownIt({
        html: true,
        ...options,
    })
    let html = md.render(source)
    html = `module.exports = ${JSON.stringify(html)}`
    this.callback(null, html)
}
