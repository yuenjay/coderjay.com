/* eslint-disable no-undef */
define(['marked', 'katex', 'highlight'], function (marked, katex) {
  'use strict'
  let renderer = new marked.Renderer()
  renderer.codespan = function (str) {
    if (/^\$[\s\S]*\$$/.test(str)) {
      return katex.renderToString(str.substring(1, str.length - 1), {
        throwOnError: false,
      })
    } else {
      return str
    }
  }
  renderer.code = function (code, language) {
    if (language == 'katex') {
      return katex.renderToString(code, {
        throwOnError: false,
      })
    } else {
      return (
        '<pre >' +
        '<code class="hljs ' +
        language +
        '">' +
        code.replace(/</g, '&lt;').replace(/>/g, '&gt;') +
        '</code>' +
        '</pre>'
      )
    }
  }
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
  })
  window.markdown = function (element, mdString) {
    element.className = 'markdown-body'
    element.innerHTML = marked(mdString)
    element.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
  return {}
})
