/* eslint-disable no-undef */
define(function (require, factory) {
  'use strict'
  window.is = function (value) {
    if (value == null) {
      return value === undefined ? 'Undefined' : 'Null'
    }
    value = Object.prototype.toString.call(value)
    return value.substring(8, value.length - 1)
  }
  Object.assign(window.is, {
    string: function (value) {
      return typeof value === 'string' || window.is(value) == 'String'
    },
    array: function (value) {
      return window.is(value) == 'Array'
    },
    object: function (value) {
      return !!value && typeof value === 'object'
    },
    set: function (value) {
      return typeof value === 'set' || window.is(value) == 'Set'
    },
    map: function (value) {
      return typeof value === 'map' || window.is(value) == 'Map'
    },
    number: function (value) {
      return typeof value === 'number' || window.is(value) == 'Number'
    },
    boolean: function (value) {
      return value === true || value === false || window.is(value) == 'Boolean'
    },
    date: function (value) {
      return window.is(value) == 'Date'
    },
    regExp: function (value) {
      return window.is(value) == 'RegExp'
    },
    function: function (value) {
      return typeof value === 'function' || window.is(value) == 'Function'
    },
    bit: function (value) {
      return value === 0 || value === 1
    },
    hex: function (value) {
      return /^[a-fA-F0-9]+$/.test(value)
    },
    null: function (value) {
      return value == null
    },
    undefined: function (value) {
      return value === undefined
    },
  })
})
