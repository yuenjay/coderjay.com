require.config({
  baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs',
  paths: {
    marked: 'marked/1.2.2/marked.min',
    katex: 'KaTeX/0.12.0/katex.min',
    highlight: 'highlight.js/10.3.1/highlight.min',
    markdown: '/nouo/markdown',
    core: '/nouo/type',
  },
  map: {
    '*': {
      css:
        'https://cdnjs.cloudflare.com/ajax/libs/require-css/0.1.10/css.min.js',
    },
  },
  shim: {
    katex: ['css!KaTeX/0.12.0/katex.min.css'],
    highlight: ['css!highlight.js/10.3.1/styles/vs.min'],
    markdown: ['css!/nouo/github.css', 'core'],
  },
})

require(['markdown'], function () {
  axios.get('./README.md').then(function (res) {
    if (res.status == 200) {
      markdown(document.getElementById('content'), res.data)
    }
  })
})
