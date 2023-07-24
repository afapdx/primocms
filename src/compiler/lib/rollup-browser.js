/*
  @license
	Rollup.js v1.32.1
	Fri, 06 Mar 2020 09:32:39 GMT - commit f458cbf6cb8cfcc1678593d8dc595e4b8757eb6d


	https://github.com/rollup/rollup

	Released under the MIT License.
*/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function e(e, t, s, i) {
  return new (s || (s = Promise))(function (n, r) {
    function a(e) {
      try {
        h(i.next(e))
      } catch (e) {
        r(e)
      }
    }
    function o(e) {
      try {
        h(i.throw(e))
      } catch (e) {
        r(e)
      }
    }
    function h(e) {
      e.done
        ? n(e.value)
        : new s(function (t) {
            t(e.value)
          }).then(a, o)
    }
    h((i = i.apply(e, t || [])).next())
  })
}
for (
  var t = '1.32.1',
    s = {},
    i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    n = 0;
  n < i.length;
  n++
)
  s[i.charCodeAt(n)] = n
function r(e, t, s) {
  4 === s
    ? e.push([t[0], t[1], t[2], t[3]])
    : 5 === s
    ? e.push([t[0], t[1], t[2], t[3], t[4]])
    : 1 === s && e.push([t[0]])
}
function a(e) {
  var t = ''
  e = e < 0 ? (-e << 1) | 1 : e << 1
  do {
    var s = 31 & e
    ;(e >>>= 5) > 0 && (s |= 32), (t += i[s])
  } while (e > 0)
  return t
}
var o = function e(t) {
  this.bits = t instanceof e ? t.bits.slice() : []
}
;(o.prototype.add = function (e) {
  this.bits[e >> 5] |= 1 << (31 & e)
}),
  (o.prototype.has = function (e) {
    return !!(this.bits[e >> 5] & (1 << (31 & e)))
  })
var h = function (e, t, s) {
  ;(this.start = e),
    (this.end = t),
    (this.original = s),
    (this.intro = ''),
    (this.outro = ''),
    (this.content = s),
    (this.storeName = !1),
    (this.edited = !1),
    Object.defineProperties(this, {
      previous: { writable: !0, value: null },
      next: { writable: !0, value: null },
    })
}
;(h.prototype.appendLeft = function (e) {
  this.outro += e
}),
  (h.prototype.appendRight = function (e) {
    this.intro = this.intro + e
  }),
  (h.prototype.clone = function () {
    var e = new h(this.start, this.end, this.original)
    return (
      (e.intro = this.intro),
      (e.outro = this.outro),
      (e.content = this.content),
      (e.storeName = this.storeName),
      (e.edited = this.edited),
      e
    )
  }),
  (h.prototype.contains = function (e) {
    return this.start < e && e < this.end
  }),
  (h.prototype.eachNext = function (e) {
    for (var t = this; t; ) e(t), (t = t.next)
  }),
  (h.prototype.eachPrevious = function (e) {
    for (var t = this; t; ) e(t), (t = t.previous)
  }),
  (h.prototype.edit = function (e, t, s) {
    return (
      (this.content = e),
      s || ((this.intro = ''), (this.outro = '')),
      (this.storeName = t),
      (this.edited = !0),
      this
    )
  }),
  (h.prototype.prependLeft = function (e) {
    this.outro = e + this.outro
  }),
  (h.prototype.prependRight = function (e) {
    this.intro = e + this.intro
  }),
  (h.prototype.split = function (e) {
    var t = e - this.start,
      s = this.original.slice(0, t),
      i = this.original.slice(t)
    this.original = s
    var n = new h(e, this.end, i)
    return (
      (n.outro = this.outro),
      (this.outro = ''),
      (this.end = e),
      this.edited ? (n.edit('', !1), (this.content = '')) : (this.content = s),
      (n.next = this.next),
      n.next && (n.next.previous = n),
      (n.previous = this),
      (this.next = n),
      n
    )
  }),
  (h.prototype.toString = function () {
    return this.intro + this.content + this.outro
  }),
  (h.prototype.trimEnd = function (e) {
    if (((this.outro = this.outro.replace(e, '')), this.outro.length)) return !0
    var t = this.content.replace(e, '')
    return t.length
      ? (t !== this.content &&
          this.split(this.start + t.length).edit('', void 0, !0),
        !0)
      : (this.edit('', void 0, !0),
        (this.intro = this.intro.replace(e, '')),
        !!this.intro.length || void 0)
  }),
  (h.prototype.trimStart = function (e) {
    if (((this.intro = this.intro.replace(e, '')), this.intro.length)) return !0
    var t = this.content.replace(e, '')
    return t.length
      ? (t !== this.content &&
          (this.split(this.end - t.length), this.edit('', void 0, !0)),
        !0)
      : (this.edit('', void 0, !0),
        (this.outro = this.outro.replace(e, '')),
        !!this.outro.length || void 0)
  })
var l = function () {
  throw new Error(
    'Unsupported environment: `window.btoa` or `Buffer` should be supported.'
  )
}
'undefined' != typeof window && 'function' == typeof window.btoa
  ? (l = function (e) {
      return window.btoa(unescape(encodeURIComponent(e)))
    })
  : 'function' == typeof Buffer &&
    (l = function (e) {
      return Buffer.from(e, 'utf-8').toString('base64')
    })
var c = function (e) {
  ;(this.version = 3),
    (this.file = e.file),
    (this.sources = e.sources),
    (this.sourcesContent = e.sourcesContent),
    (this.names = e.names),
    (this.mappings = (function (e) {
      for (var t = 0, s = 0, i = 0, n = 0, r = '', o = 0; o < e.length; o++) {
        var h = e[o]
        if ((o > 0 && (r += ';'), 0 !== h.length)) {
          for (var l = 0, c = [], u = 0, d = h; u < d.length; u++) {
            var p = d[u],
              f = a(p[0] - l)
            ;(l = p[0]),
              p.length > 1 &&
                ((f += a(p[1] - t) + a(p[2] - s) + a(p[3] - i)),
                (t = p[1]),
                (s = p[2]),
                (i = p[3])),
              5 === p.length && ((f += a(p[4] - n)), (n = p[4])),
              c.push(f)
          }
          r += c.join(',')
        }
      }
      return r
    })(e.mappings))
}
function u(e) {
  var t = e.split('\n'),
    s = t.filter(function (e) {
      return /^\t+/.test(e)
    }),
    i = t.filter(function (e) {
      return /^ {2,}/.test(e)
    })
  if (0 === s.length && 0 === i.length) return null
  if (s.length >= i.length) return '\t'
  var n = i.reduce(function (e, t) {
    var s = /^ +/.exec(t)[0].length
    return Math.min(s, e)
  }, 1 / 0)
  return new Array(n + 1).join(' ')
}
function d(e, t) {
  var s = e.split(/[/\\]/),
    i = t.split(/[/\\]/)
  for (s.pop(); s[0] === i[0]; ) s.shift(), i.shift()
  if (s.length) for (var n = s.length; n--; ) s[n] = '..'
  return s.concat(i).join('/')
}
;(c.prototype.toString = function () {
  return JSON.stringify(this)
}),
  (c.prototype.toUrl = function () {
    return 'data:application/json;charset=utf-8;base64,' + l(this.toString())
  })
var p = Object.prototype.toString
function f(e) {
  return '[object Object]' === p.call(e)
}
function m(e) {
  for (var t = e.split('\n'), s = [], i = 0, n = 0; i < t.length; i++)
    s.push(n), (n += t[i].length + 1)
  return function (e) {
    for (var t = 0, i = s.length; t < i; ) {
      var n = (t + i) >> 1
      e < s[n] ? (i = n) : (t = n + 1)
    }
    var r = t - 1
    return { line: r, column: e - s[r] }
  }
}
var g = function (e) {
  ;(this.hires = e),
    (this.generatedCodeLine = 0),
    (this.generatedCodeColumn = 0),
    (this.raw = []),
    (this.rawSegments = this.raw[this.generatedCodeLine] = []),
    (this.pending = null)
}
;(g.prototype.addEdit = function (e, t, s, i) {
  if (t.length) {
    var n = [this.generatedCodeColumn, e, s.line, s.column]
    i >= 0 && n.push(i), this.rawSegments.push(n)
  } else this.pending && this.rawSegments.push(this.pending)
  this.advance(t), (this.pending = null)
}),
  (g.prototype.addUneditedChunk = function (e, t, s, i, n) {
    for (var r = t.start, a = !0; r < t.end; )
      (this.hires || a || n.has(r)) &&
        this.rawSegments.push([this.generatedCodeColumn, e, i.line, i.column]),
        '\n' === s[r]
          ? ((i.line += 1),
            (i.column = 0),
            (this.generatedCodeLine += 1),
            (this.raw[this.generatedCodeLine] = this.rawSegments = []),
            (this.generatedCodeColumn = 0),
            (a = !0))
          : ((i.column += 1), (this.generatedCodeColumn += 1), (a = !1)),
        (r += 1)
    this.pending =
      e > 0 ? [this.generatedCodeColumn, e, i.line, i.column] : null
  }),
  (g.prototype.advance = function (e) {
    if (e) {
      var t = e.split('\n')
      if (t.length > 1) {
        for (var s = 0; s < t.length - 1; s++)
          this.generatedCodeLine++,
            (this.raw[this.generatedCodeLine] = this.rawSegments = [])
        this.generatedCodeColumn = 0
      }
      this.generatedCodeColumn += t[t.length - 1].length
    }
  })
var x = '\n',
  y = { insertLeft: !1, insertRight: !1, storeName: !1 },
  E = function (e, t) {
    void 0 === t && (t = {})
    var s = new h(0, e.length, e)
    Object.defineProperties(this, {
      original: { writable: !0, value: e },
      outro: { writable: !0, value: '' },
      intro: { writable: !0, value: '' },
      firstChunk: { writable: !0, value: s },
      lastChunk: { writable: !0, value: s },
      lastSearchedChunk: { writable: !0, value: s },
      byStart: { writable: !0, value: {} },
      byEnd: { writable: !0, value: {} },
      filename: { writable: !0, value: t.filename },
      indentExclusionRanges: { writable: !0, value: t.indentExclusionRanges },
      sourcemapLocations: { writable: !0, value: new o() },
      storedNames: { writable: !0, value: {} },
      indentStr: { writable: !0, value: u(e) },
    }),
      (this.byStart[0] = s),
      (this.byEnd[e.length] = s)
  }
;(E.prototype.addSourcemapLocation = function (e) {
  this.sourcemapLocations.add(e)
}),
  (E.prototype.append = function (e) {
    if ('string' != typeof e)
      throw new TypeError('outro content must be a string')
    return (this.outro += e), this
  }),
  (E.prototype.appendLeft = function (e, t) {
    if ('string' != typeof t)
      throw new TypeError('inserted content must be a string')
    this._split(e)
    var s = this.byEnd[e]
    return s ? s.appendLeft(t) : (this.intro += t), this
  }),
  (E.prototype.appendRight = function (e, t) {
    if ('string' != typeof t)
      throw new TypeError('inserted content must be a string')
    this._split(e)
    var s = this.byStart[e]
    return s ? s.appendRight(t) : (this.outro += t), this
  }),
  (E.prototype.clone = function () {
    for (
      var e = new E(this.original, { filename: this.filename }),
        t = this.firstChunk,
        s = (e.firstChunk = e.lastSearchedChunk = t.clone());
      t;

    ) {
      ;(e.byStart[s.start] = s), (e.byEnd[s.end] = s)
      var i = t.next,
        n = i && i.clone()
      n && ((s.next = n), (n.previous = s), (s = n)), (t = i)
    }
    return (
      (e.lastChunk = s),
      this.indentExclusionRanges &&
        (e.indentExclusionRanges = this.indentExclusionRanges.slice()),
      (e.sourcemapLocations = new o(this.sourcemapLocations)),
      (e.intro = this.intro),
      (e.outro = this.outro),
      e
    )
  }),
  (E.prototype.generateDecodedMap = function (e) {
    var t = this
    e = e || {}
    var s = Object.keys(this.storedNames),
      i = new g(e.hires),
      n = m(this.original)
    return (
      this.intro && i.advance(this.intro),
      this.firstChunk.eachNext(function (e) {
        var r = n(e.start)
        e.intro.length && i.advance(e.intro),
          e.edited
            ? i.addEdit(
                0,
                e.content,
                r,
                e.storeName ? s.indexOf(e.original) : -1
              )
            : i.addUneditedChunk(0, e, t.original, r, t.sourcemapLocations),
          e.outro.length && i.advance(e.outro)
      }),
      {
        file: e.file ? e.file.split(/[/\\]/).pop() : null,
        sources: [e.source ? d(e.file || '', e.source) : null],
        sourcesContent: e.includeContent ? [this.original] : [null],
        names: s,
        mappings: i.raw,
      }
    )
  }),
  (E.prototype.generateMap = function (e) {
    return new c(this.generateDecodedMap(e))
  }),
  (E.prototype.getIndentString = function () {
    return null === this.indentStr ? '\t' : this.indentStr
  }),
  (E.prototype.indent = function (e, t) {
    var s = /^[^\r\n]/gm
    if (
      (f(e) && ((t = e), (e = void 0)),
      '' === (e = void 0 !== e ? e : this.indentStr || '\t'))
    )
      return this
    var i = {}
    ;(t = t || {}).exclude &&
      ('number' == typeof t.exclude[0] ? [t.exclude] : t.exclude).forEach(
        function (e) {
          for (var t = e[0]; t < e[1]; t += 1) i[t] = !0
        }
      )
    var n = !1 !== t.indentStart,
      r = function (t) {
        return n ? '' + e + t : ((n = !0), t)
      }
    this.intro = this.intro.replace(s, r)
    for (var a = 0, o = this.firstChunk; o; ) {
      var h = o.end
      if (o.edited)
        i[a] ||
          ((o.content = o.content.replace(s, r)),
          o.content.length && (n = '\n' === o.content[o.content.length - 1]))
      else
        for (a = o.start; a < h; ) {
          if (!i[a]) {
            var l = this.original[a]
            '\n' === l
              ? (n = !0)
              : '\r' !== l &&
                n &&
                ((n = !1),
                a === o.start
                  ? o.prependRight(e)
                  : (this._splitChunk(o, a), (o = o.next).prependRight(e)))
          }
          a += 1
        }
      ;(a = o.end), (o = o.next)
    }
    return (this.outro = this.outro.replace(s, r)), this
  }),
  (E.prototype.insert = function () {
    throw new Error(
      'magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)'
    )
  }),
  (E.prototype.insertLeft = function (e, t) {
    return (
      y.insertLeft ||
        (console.warn(
          'magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead'
        ),
        (y.insertLeft = !0)),
      this.appendLeft(e, t)
    )
  }),
  (E.prototype.insertRight = function (e, t) {
    return (
      y.insertRight ||
        (console.warn(
          'magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead'
        ),
        (y.insertRight = !0)),
      this.prependRight(e, t)
    )
  }),
  (E.prototype.move = function (e, t, s) {
    if (s >= e && s <= t)
      throw new Error('Cannot move a selection inside itself')
    this._split(e), this._split(t), this._split(s)
    var i = this.byStart[e],
      n = this.byEnd[t],
      r = i.previous,
      a = n.next,
      o = this.byStart[s]
    if (!o && n === this.lastChunk) return this
    var h = o ? o.previous : this.lastChunk
    return (
      r && (r.next = a),
      a && (a.previous = r),
      h && (h.next = i),
      o && (o.previous = n),
      i.previous || (this.firstChunk = n.next),
      n.next || ((this.lastChunk = i.previous), (this.lastChunk.next = null)),
      (i.previous = h),
      (n.next = o || null),
      h || (this.firstChunk = i),
      o || (this.lastChunk = n),
      this
    )
  }),
  (E.prototype.overwrite = function (e, t, s, i) {
    if ('string' != typeof s)
      throw new TypeError('replacement content must be a string')
    for (; e < 0; ) e += this.original.length
    for (; t < 0; ) t += this.original.length
    if (t > this.original.length) throw new Error('end is out of bounds')
    if (e === t)
      throw new Error(
        'Cannot overwrite a zero-length range – use appendLeft or prependRight instead'
      )
    this._split(e),
      this._split(t),
      !0 === i &&
        (y.storeName ||
          (console.warn(
            'The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string'
          ),
          (y.storeName = !0)),
        (i = { storeName: !0 }))
    var n = void 0 !== i && i.storeName,
      r = void 0 !== i && i.contentOnly
    if (n) {
      var a = this.original.slice(e, t)
      this.storedNames[a] = !0
    }
    var o = this.byStart[e],
      l = this.byEnd[t]
    if (o) {
      if (t > o.end && o.next !== this.byStart[o.end])
        throw new Error('Cannot overwrite across a split point')
      if ((o.edit(s, n, r), o !== l)) {
        for (var c = o.next; c !== l; ) c.edit('', !1), (c = c.next)
        c.edit('', !1)
      }
    } else {
      var u = new h(e, t, '').edit(s, n)
      ;(l.next = u), (u.previous = l)
    }
    return this
  }),
  (E.prototype.prepend = function (e) {
    if ('string' != typeof e)
      throw new TypeError('outro content must be a string')
    return (this.intro = e + this.intro), this
  }),
  (E.prototype.prependLeft = function (e, t) {
    if ('string' != typeof t)
      throw new TypeError('inserted content must be a string')
    this._split(e)
    var s = this.byEnd[e]
    return s ? s.prependLeft(t) : (this.intro = t + this.intro), this
  }),
  (E.prototype.prependRight = function (e, t) {
    if ('string' != typeof t)
      throw new TypeError('inserted content must be a string')
    this._split(e)
    var s = this.byStart[e]
    return s ? s.prependRight(t) : (this.outro = t + this.outro), this
  }),
  (E.prototype.remove = function (e, t) {
    for (; e < 0; ) e += this.original.length
    for (; t < 0; ) t += this.original.length
    if (e === t) return this
    if (e < 0 || t > this.original.length)
      throw new Error('Character is out of bounds')
    if (e > t) throw new Error('end must be greater than start')
    this._split(e), this._split(t)
    for (var s = this.byStart[e]; s; )
      (s.intro = ''),
        (s.outro = ''),
        s.edit(''),
        (s = t > s.end ? this.byStart[s.end] : null)
    return this
  }),
  (E.prototype.lastChar = function () {
    if (this.outro.length) return this.outro[this.outro.length - 1]
    var e = this.lastChunk
    do {
      if (e.outro.length) return e.outro[e.outro.length - 1]
      if (e.content.length) return e.content[e.content.length - 1]
      if (e.intro.length) return e.intro[e.intro.length - 1]
    } while ((e = e.previous))
    return this.intro.length ? this.intro[this.intro.length - 1] : ''
  }),
  (E.prototype.lastLine = function () {
    var e = this.outro.lastIndexOf(x)
    if (-1 !== e) return this.outro.substr(e + 1)
    var t = this.outro,
      s = this.lastChunk
    do {
      if (s.outro.length > 0) {
        if (-1 !== (e = s.outro.lastIndexOf(x)))
          return s.outro.substr(e + 1) + t
        t = s.outro + t
      }
      if (s.content.length > 0) {
        if (-1 !== (e = s.content.lastIndexOf(x)))
          return s.content.substr(e + 1) + t
        t = s.content + t
      }
      if (s.intro.length > 0) {
        if (-1 !== (e = s.intro.lastIndexOf(x)))
          return s.intro.substr(e + 1) + t
        t = s.intro + t
      }
    } while ((s = s.previous))
    return -1 !== (e = this.intro.lastIndexOf(x))
      ? this.intro.substr(e + 1) + t
      : this.intro + t
  }),
  (E.prototype.slice = function (e, t) {
    for (
      void 0 === e && (e = 0), void 0 === t && (t = this.original.length);
      e < 0;

    )
      e += this.original.length
    for (; t < 0; ) t += this.original.length
    for (var s = '', i = this.firstChunk; i && (i.start > e || i.end <= e); ) {
      if (i.start < t && i.end >= t) return s
      i = i.next
    }
    if (i && i.edited && i.start !== e)
      throw new Error(
        'Cannot use replaced character ' + e + ' as slice start anchor.'
      )
    for (var n = i; i; ) {
      !i.intro || (n === i && i.start !== e) || (s += i.intro)
      var r = i.start < t && i.end >= t
      if (r && i.edited && i.end !== t)
        throw new Error(
          'Cannot use replaced character ' + t + ' as slice end anchor.'
        )
      var a = n === i ? e - i.start : 0,
        o = r ? i.content.length + t - i.end : i.content.length
      if (
        ((s += i.content.slice(a, o)),
        !i.outro || (r && i.end !== t) || (s += i.outro),
        r)
      )
        break
      i = i.next
    }
    return s
  }),
  (E.prototype.snip = function (e, t) {
    var s = this.clone()
    return s.remove(0, e), s.remove(t, s.original.length), s
  }),
  (E.prototype._split = function (e) {
    if (!this.byStart[e] && !this.byEnd[e])
      for (var t = this.lastSearchedChunk, s = e > t.end; t; ) {
        if (t.contains(e)) return this._splitChunk(t, e)
        t = s ? this.byStart[t.end] : this.byEnd[t.start]
      }
  }),
  (E.prototype._splitChunk = function (e, t) {
    if (e.edited && e.content.length) {
      var s = m(this.original)(t)
      throw new Error(
        'Cannot split a chunk that has already been edited (' +
          s.line +
          ':' +
          s.column +
          ' – "' +
          e.original +
          '")'
      )
    }
    var i = e.split(t)
    return (
      (this.byEnd[t] = e),
      (this.byStart[t] = i),
      (this.byEnd[i.end] = i),
      e === this.lastChunk && (this.lastChunk = i),
      (this.lastSearchedChunk = e),
      !0
    )
  }),
  (E.prototype.toString = function () {
    for (var e = this.intro, t = this.firstChunk; t; )
      (e += t.toString()), (t = t.next)
    return e + this.outro
  }),
  (E.prototype.isEmpty = function () {
    var e = this.firstChunk
    do {
      if (
        (e.intro.length && e.intro.trim()) ||
        (e.content.length && e.content.trim()) ||
        (e.outro.length && e.outro.trim())
      )
        return !1
    } while ((e = e.next))
    return !0
  }),
  (E.prototype.length = function () {
    var e = this.firstChunk,
      t = 0
    do {
      t += e.intro.length + e.content.length + e.outro.length
    } while ((e = e.next))
    return t
  }),
  (E.prototype.trimLines = function () {
    return this.trim('[\\r\\n]')
  }),
  (E.prototype.trim = function (e) {
    return this.trimStart(e).trimEnd(e)
  }),
  (E.prototype.trimEndAborted = function (e) {
    var t = new RegExp((e || '\\s') + '+$')
    if (((this.outro = this.outro.replace(t, '')), this.outro.length)) return !0
    var s = this.lastChunk
    do {
      var i = s.end,
        n = s.trimEnd(t)
      if (
        (s.end !== i &&
          (this.lastChunk === s && (this.lastChunk = s.next),
          (this.byEnd[s.end] = s),
          (this.byStart[s.next.start] = s.next),
          (this.byEnd[s.next.end] = s.next)),
        n)
      )
        return !0
      s = s.previous
    } while (s)
    return !1
  }),
  (E.prototype.trimEnd = function (e) {
    return this.trimEndAborted(e), this
  }),
  (E.prototype.trimStartAborted = function (e) {
    var t = new RegExp('^' + (e || '\\s') + '+')
    if (((this.intro = this.intro.replace(t, '')), this.intro.length)) return !0
    var s = this.firstChunk
    do {
      var i = s.end,
        n = s.trimStart(t)
      if (
        (s.end !== i &&
          (s === this.lastChunk && (this.lastChunk = s.next),
          (this.byEnd[s.end] = s),
          (this.byStart[s.next.start] = s.next),
          (this.byEnd[s.next.end] = s.next)),
        n)
      )
        return !0
      s = s.next
    } while (s)
    return !1
  }),
  (E.prototype.trimStart = function (e) {
    return this.trimStartAborted(e), this
  })
var b = Object.prototype.hasOwnProperty,
  v = function (e) {
    void 0 === e && (e = {}),
      (this.intro = e.intro || ''),
      (this.separator = void 0 !== e.separator ? e.separator : '\n'),
      (this.sources = []),
      (this.uniqueSources = []),
      (this.uniqueSourceIndexByFilename = {})
  }
;(v.prototype.addSource = function (e) {
  if (e instanceof E)
    return this.addSource({
      content: e,
      filename: e.filename,
      separator: this.separator,
    })
  if (!f(e) || !e.content)
    throw new Error(
      'bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`'
    )
  if (
    (['filename', 'indentExclusionRanges', 'separator'].forEach(function (t) {
      b.call(e, t) || (e[t] = e.content[t])
    }),
    void 0 === e.separator && (e.separator = this.separator),
    e.filename)
  )
    if (b.call(this.uniqueSourceIndexByFilename, e.filename)) {
      var t = this.uniqueSources[this.uniqueSourceIndexByFilename[e.filename]]
      if (e.content.original !== t.content)
        throw new Error(
          'Illegal source: same filename (' +
            e.filename +
            '), different contents'
        )
    } else
      (this.uniqueSourceIndexByFilename[e.filename] =
        this.uniqueSources.length),
        this.uniqueSources.push({
          filename: e.filename,
          content: e.content.original,
        })
  return this.sources.push(e), this
}),
  (v.prototype.append = function (e, t) {
    return (
      this.addSource({
        content: new E(e),
        separator: (t && t.separator) || '',
      }),
      this
    )
  }),
  (v.prototype.clone = function () {
    var e = new v({ intro: this.intro, separator: this.separator })
    return (
      this.sources.forEach(function (t) {
        e.addSource({
          filename: t.filename,
          content: t.content.clone(),
          separator: t.separator,
        })
      }),
      e
    )
  }),
  (v.prototype.generateDecodedMap = function (e) {
    var t = this
    void 0 === e && (e = {})
    var s = []
    this.sources.forEach(function (e) {
      Object.keys(e.content.storedNames).forEach(function (e) {
        ~s.indexOf(e) || s.push(e)
      })
    })
    var i = new g(e.hires)
    return (
      this.intro && i.advance(this.intro),
      this.sources.forEach(function (e, n) {
        n > 0 && i.advance(t.separator)
        var r = e.filename ? t.uniqueSourceIndexByFilename[e.filename] : -1,
          a = e.content,
          o = m(a.original)
        a.intro && i.advance(a.intro),
          a.firstChunk.eachNext(function (t) {
            var n = o(t.start)
            t.intro.length && i.advance(t.intro),
              e.filename
                ? t.edited
                  ? i.addEdit(
                      r,
                      t.content,
                      n,
                      t.storeName ? s.indexOf(t.original) : -1
                    )
                  : i.addUneditedChunk(
                      r,
                      t,
                      a.original,
                      n,
                      a.sourcemapLocations
                    )
                : i.advance(t.content),
              t.outro.length && i.advance(t.outro)
          }),
          a.outro && i.advance(a.outro)
      }),
      {
        file: e.file ? e.file.split(/[/\\]/).pop() : null,
        sources: this.uniqueSources.map(function (t) {
          return e.file ? d(e.file, t.filename) : t.filename
        }),
        sourcesContent: this.uniqueSources.map(function (t) {
          return e.includeContent ? t.content : null
        }),
        names: s,
        mappings: i.raw,
      }
    )
  }),
  (v.prototype.generateMap = function (e) {
    return new c(this.generateDecodedMap(e))
  }),
  (v.prototype.getIndentString = function () {
    var e = {}
    return (
      this.sources.forEach(function (t) {
        var s = t.content.indentStr
        null !== s && (e[s] || (e[s] = 0), (e[s] += 1))
      }),
      Object.keys(e).sort(function (t, s) {
        return e[t] - e[s]
      })[0] || '\t'
    )
  }),
  (v.prototype.indent = function (e) {
    var t = this
    if ((arguments.length || (e = this.getIndentString()), '' === e))
      return this
    var s = !this.intro || '\n' === this.intro.slice(-1)
    return (
      this.sources.forEach(function (i, n) {
        var r = void 0 !== i.separator ? i.separator : t.separator,
          a = s || (n > 0 && /\r?\n$/.test(r))
        i.content.indent(e, {
          exclude: i.indentExclusionRanges,
          indentStart: a,
        }),
          (s = '\n' === i.content.lastChar())
      }),
      this.intro &&
        (this.intro =
          e +
          this.intro.replace(/^[^\n]/gm, function (t, s) {
            return s > 0 ? e + t : t
          })),
      this
    )
  }),
  (v.prototype.prepend = function (e) {
    return (this.intro = e + this.intro), this
  }),
  (v.prototype.toString = function () {
    var e = this,
      t = this.sources
        .map(function (t, s) {
          var i = void 0 !== t.separator ? t.separator : e.separator
          return (s > 0 ? i : '') + t.content.toString()
        })
        .join('')
    return this.intro + t
  }),
  (v.prototype.isEmpty = function () {
    return (
      (!this.intro.length || !this.intro.trim()) &&
      !this.sources.some(function (e) {
        return !e.content.isEmpty()
      })
    )
  }),
  (v.prototype.length = function () {
    return this.sources.reduce(function (e, t) {
      return e + t.content.length()
    }, this.intro.length)
  }),
  (v.prototype.trimLines = function () {
    return this.trim('[\\r\\n]')
  }),
  (v.prototype.trim = function (e) {
    return this.trimStart(e).trimEnd(e)
  }),
  (v.prototype.trimStart = function (e) {
    var t = new RegExp('^' + (e || '\\s') + '+')
    if (((this.intro = this.intro.replace(t, '')), !this.intro)) {
      var s,
        i = 0
      do {
        if (!(s = this.sources[i++])) break
      } while (!s.content.trimStartAborted(e))
    }
    return this
  }),
  (v.prototype.trimEnd = function (e) {
    var t,
      s = new RegExp((e || '\\s') + '+$'),
      i = this.sources.length - 1
    do {
      if (!(t = this.sources[i--])) {
        this.intro = this.intro.replace(s, '')
        break
      }
    } while (!t.content.trimEndAborted(e))
    return this
  })
var S = A
function A(e, t) {
  if (!e) throw new Error(t || 'Assertion failed')
}
function C(e, t) {
  return (
    55296 == (64512 & e.charCodeAt(t)) &&
    !(t < 0 || t + 1 >= e.length) &&
    56320 == (64512 & e.charCodeAt(t + 1))
  )
}
function k(e) {
  return (
    ((e >>> 24) |
      ((e >>> 8) & 65280) |
      ((e << 8) & 16711680) |
      ((255 & e) << 24)) >>>
    0
  )
}
function P(e) {
  return 1 === e.length ? '0' + e : e
}
function w(e) {
  return 7 === e.length
    ? '0' + e
    : 6 === e.length
    ? '00' + e
    : 5 === e.length
    ? '000' + e
    : 4 === e.length
    ? '0000' + e
    : 3 === e.length
    ? '00000' + e
    : 2 === e.length
    ? '000000' + e
    : 1 === e.length
    ? '0000000' + e
    : e
}
A.equal = function (e, t, s) {
  if (e != t) throw new Error(s || 'Assertion failed: ' + e + ' != ' + t)
}
var N = {
  inherits: (function (e, t) {
    return e((t = { exports: {} }), t.exports), t.exports
  })(function (e) {
    'function' == typeof Object.create
      ? (e.exports = function (e, t) {
          ;(e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            }))
        })
      : (e.exports = function (e, t) {
          e.super_ = t
          var s = function () {}
          ;(s.prototype = t.prototype),
            (e.prototype = new s()),
            (e.prototype.constructor = e)
        })
  }),
  toArray: function (e, t) {
    if (Array.isArray(e)) return e.slice()
    if (!e) return []
    var s = []
    if ('string' == typeof e)
      if (t) {
        if ('hex' === t)
          for (
            (e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 &&
              (e = '0' + e),
              n = 0;
            n < e.length;
            n += 2
          )
            s.push(parseInt(e[n] + e[n + 1], 16))
      } else
        for (var i = 0, n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n)
          r < 128
            ? (s[i++] = r)
            : r < 2048
            ? ((s[i++] = (r >> 6) | 192), (s[i++] = (63 & r) | 128))
            : C(e, n)
            ? ((r = 65536 + ((1023 & r) << 10) + (1023 & e.charCodeAt(++n))),
              (s[i++] = (r >> 18) | 240),
              (s[i++] = ((r >> 12) & 63) | 128),
              (s[i++] = ((r >> 6) & 63) | 128),
              (s[i++] = (63 & r) | 128))
            : ((s[i++] = (r >> 12) | 224),
              (s[i++] = ((r >> 6) & 63) | 128),
              (s[i++] = (63 & r) | 128))
        }
    else for (n = 0; n < e.length; n++) s[n] = 0 | e[n]
    return s
  },
  toHex: function (e) {
    for (var t = '', s = 0; s < e.length; s++) t += P(e[s].toString(16))
    return t
  },
  htonl: k,
  toHex32: function (e, t) {
    for (var s = '', i = 0; i < e.length; i++) {
      var n = e[i]
      'little' === t && (n = k(n)), (s += w(n.toString(16)))
    }
    return s
  },
  zero2: P,
  zero8: w,
  join32: function (e, t, s, i) {
    var n = s - t
    S(n % 4 == 0)
    for (var r = new Array(n / 4), a = 0, o = t; a < r.length; a++, o += 4) {
      var h
      ;(h =
        'big' === i
          ? (e[o] << 24) | (e[o + 1] << 16) | (e[o + 2] << 8) | e[o + 3]
          : (e[o + 3] << 24) | (e[o + 2] << 16) | (e[o + 1] << 8) | e[o]),
        (r[a] = h >>> 0)
    }
    return r
  },
  split32: function (e, t) {
    for (
      var s = new Array(4 * e.length), i = 0, n = 0;
      i < e.length;
      i++, n += 4
    ) {
      var r = e[i]
      'big' === t
        ? ((s[n] = r >>> 24),
          (s[n + 1] = (r >>> 16) & 255),
          (s[n + 2] = (r >>> 8) & 255),
          (s[n + 3] = 255 & r))
        : ((s[n + 3] = r >>> 24),
          (s[n + 2] = (r >>> 16) & 255),
          (s[n + 1] = (r >>> 8) & 255),
          (s[n] = 255 & r))
    }
    return s
  },
  rotr32: function (e, t) {
    return (e >>> t) | (e << (32 - t))
  },
  rotl32: function (e, t) {
    return (e << t) | (e >>> (32 - t))
  },
  sum32: function (e, t) {
    return (e + t) >>> 0
  },
  sum32_3: function (e, t, s) {
    return (e + t + s) >>> 0
  },
  sum32_4: function (e, t, s, i) {
    return (e + t + s + i) >>> 0
  },
  sum32_5: function (e, t, s, i, n) {
    return (e + t + s + i + n) >>> 0
  },
  sum64: function (e, t, s, i) {
    var n = e[t],
      r = (i + e[t + 1]) >>> 0,
      a = (r < i ? 1 : 0) + s + n
    ;(e[t] = a >>> 0), (e[t + 1] = r)
  },
  sum64_hi: function (e, t, s, i) {
    return (((t + i) >>> 0 < t ? 1 : 0) + e + s) >>> 0
  },
  sum64_lo: function (e, t, s, i) {
    return (t + i) >>> 0
  },
  sum64_4_hi: function (e, t, s, i, n, r, a, o) {
    var h = 0,
      l = t
    return (
      (h += (l = (l + i) >>> 0) < t ? 1 : 0),
      (h += (l = (l + r) >>> 0) < r ? 1 : 0),
      (e + s + n + a + (h += (l = (l + o) >>> 0) < o ? 1 : 0)) >>> 0
    )
  },
  sum64_4_lo: function (e, t, s, i, n, r, a, o) {
    return (t + i + r + o) >>> 0
  },
  sum64_5_hi: function (e, t, s, i, n, r, a, o, h, l) {
    var c = 0,
      u = t
    return (
      (c += (u = (u + i) >>> 0) < t ? 1 : 0),
      (c += (u = (u + r) >>> 0) < r ? 1 : 0),
      (c += (u = (u + o) >>> 0) < o ? 1 : 0),
      (e + s + n + a + h + (c += (u = (u + l) >>> 0) < l ? 1 : 0)) >>> 0
    )
  },
  sum64_5_lo: function (e, t, s, i, n, r, a, o, h, l) {
    return (t + i + r + o + l) >>> 0
  },
  rotr64_hi: function (e, t, s) {
    return ((t << (32 - s)) | (e >>> s)) >>> 0
  },
  rotr64_lo: function (e, t, s) {
    return ((e << (32 - s)) | (t >>> s)) >>> 0
  },
  shr64_hi: function (e, t, s) {
    return e >>> s
  },
  shr64_lo: function (e, t, s) {
    return ((e << (32 - s)) | (t >>> s)) >>> 0
  },
}
function _() {
  ;(this.pending = null),
    (this.pendingTotal = 0),
    (this.blockSize = this.constructor.blockSize),
    (this.outSize = this.constructor.outSize),
    (this.hmacStrength = this.constructor.hmacStrength),
    (this.padLength = this.constructor.padLength / 8),
    (this.endian = 'big'),
    (this._delta8 = this.blockSize / 8),
    (this._delta32 = this.blockSize / 32)
}
var I = _
;(_.prototype.update = function (e, t) {
  if (
    ((e = N.toArray(e, t)),
    this.pending ? (this.pending = this.pending.concat(e)) : (this.pending = e),
    (this.pendingTotal += e.length),
    this.pending.length >= this._delta8)
  ) {
    var s = (e = this.pending).length % this._delta8
    ;(this.pending = e.slice(e.length - s, e.length)),
      0 === this.pending.length && (this.pending = null),
      (e = N.join32(e, 0, e.length - s, this.endian))
    for (var i = 0; i < e.length; i += this._delta32)
      this._update(e, i, i + this._delta32)
  }
  return this
}),
  (_.prototype.digest = function (e) {
    return this.update(this._pad()), S(null === this.pending), this._digest(e)
  }),
  (_.prototype._pad = function () {
    var e = this.pendingTotal,
      t = this._delta8,
      s = t - ((e + this.padLength) % t),
      i = new Array(s + this.padLength)
    i[0] = 128
    for (var n = 1; n < s; n++) i[n] = 0
    if (((e <<= 3), 'big' === this.endian)) {
      for (var r = 8; r < this.padLength; r++) i[n++] = 0
      ;(i[n++] = 0),
        (i[n++] = 0),
        (i[n++] = 0),
        (i[n++] = 0),
        (i[n++] = (e >>> 24) & 255),
        (i[n++] = (e >>> 16) & 255),
        (i[n++] = (e >>> 8) & 255),
        (i[n++] = 255 & e)
    } else
      for (
        i[n++] = 255 & e,
          i[n++] = (e >>> 8) & 255,
          i[n++] = (e >>> 16) & 255,
          i[n++] = (e >>> 24) & 255,
          i[n++] = 0,
          i[n++] = 0,
          i[n++] = 0,
          i[n++] = 0,
          r = 8;
        r < this.padLength;
        r++
      )
        i[n++] = 0
    return i
  })
var $ = { BlockHash: I },
  T = N.rotr32
function L(e, t, s) {
  return (e & t) ^ (~e & s)
}
function R(e, t, s) {
  return (e & t) ^ (e & s) ^ (t & s)
}
function M(e, t, s) {
  return e ^ t ^ s
}
var O = {
    ft_1: function (e, t, s, i) {
      return 0 === e
        ? L(t, s, i)
        : 1 === e || 3 === e
        ? M(t, s, i)
        : 2 === e
        ? R(t, s, i)
        : void 0
    },
    ch32: L,
    maj32: R,
    p32: M,
    s0_256: function (e) {
      return T(e, 2) ^ T(e, 13) ^ T(e, 22)
    },
    s1_256: function (e) {
      return T(e, 6) ^ T(e, 11) ^ T(e, 25)
    },
    g0_256: function (e) {
      return T(e, 7) ^ T(e, 18) ^ (e >>> 3)
    },
    g1_256: function (e) {
      return T(e, 17) ^ T(e, 19) ^ (e >>> 10)
    },
  },
  D = N.sum32,
  V = N.sum32_4,
  B = N.sum32_5,
  F = O.ch32,
  W = O.maj32,
  U = O.s0_256,
  j = O.s1_256,
  z = O.g0_256,
  G = O.g1_256,
  H = $.BlockHash,
  q = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]
function K() {
  if (!(this instanceof K)) return new K()
  H.call(this),
    (this.h = [
      1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
      528734635, 1541459225,
    ]),
    (this.k = q),
    (this.W = new Array(64))
}
N.inherits(K, H)
var Y = K
;(K.blockSize = 512),
  (K.outSize = 256),
  (K.hmacStrength = 192),
  (K.padLength = 64),
  (K.prototype._update = function (e, t) {
    for (var s = this.W, i = 0; i < 16; i++) s[i] = e[t + i]
    for (; i < s.length; i++)
      s[i] = V(G(s[i - 2]), s[i - 7], z(s[i - 15]), s[i - 16])
    var n = this.h[0],
      r = this.h[1],
      a = this.h[2],
      o = this.h[3],
      h = this.h[4],
      l = this.h[5],
      c = this.h[6],
      u = this.h[7]
    for (S(this.k.length === s.length), i = 0; i < s.length; i++) {
      var d = B(u, j(h), F(h, l, c), this.k[i], s[i]),
        p = D(U(n), W(n, r, a))
      ;(u = c),
        (c = l),
        (l = h),
        (h = D(o, d)),
        (o = a),
        (a = r),
        (r = n),
        (n = D(d, p))
    }
    ;(this.h[0] = D(this.h[0], n)),
      (this.h[1] = D(this.h[1], r)),
      (this.h[2] = D(this.h[2], a)),
      (this.h[3] = D(this.h[3], o)),
      (this.h[4] = D(this.h[4], h)),
      (this.h[5] = D(this.h[5], l)),
      (this.h[6] = D(this.h[6], c)),
      (this.h[7] = D(this.h[7], u))
  }),
  (K.prototype._digest = function (e) {
    return 'hex' === e ? N.toHex32(this.h, 'big') : N.split32(this.h, 'big')
  })
const X = () => Y()
function Q(e, t) {
  const s = e.split(/[/\\]/).filter(Boolean),
    i = t.split(/[/\\]/).filter(Boolean)
  for (
    '.' === s[0] && s.shift(), '.' === i[0] && i.shift();
    s[0] && i[0] && s[0] === i[0];

  )
    s.shift(), i.shift()
  for (; '..' === i[0] && s.length > 0; ) i.shift(), s.pop()
  for (; s.pop(); ) i.unshift('..')
  return i.join('/')
}
const J = Symbol('Unknown Key'),
  Z = [],
  ee = [J],
  te = Symbol('Entities')
class se {
  constructor() {
    this.entityPaths = Object.create(null, { [te]: { value: new Set() } })
  }
  getEntities(e) {
    let t = this.entityPaths
    for (const s of e)
      t = t[s] = t[s] || Object.create(null, { [te]: { value: new Set() } })
    return t[te]
  }
}
const ie = new se()
function ne() {
  return { brokenFlow: 0, includedLabels: new Set() }
}
function re() {
  return {
    accessed: new se(),
    assigned: new se(),
    brokenFlow: 0,
    called: new se(),
    ignore: {
      breaks: !1,
      continues: !1,
      labels: new Set(),
      returnAwaitYield: !1,
    },
    includedLabels: new Set(),
    instantiated: new se(),
    replacedVariableInits: new Map(),
  }
}
function ae(e, t, s, i) {
  if ((t.remove(s, i), e.annotations))
    for (const i of e.annotations) {
      if (!(i.start < s)) return
      t.remove(i.start, i.end)
    }
}
function oe(e, t) {
  if (
    (e.annotations || 'ExpressionStatement' !== e.parent.type || (e = e.parent),
    e.annotations)
  )
    for (const s of e.annotations) t.remove(s.start, s.end)
}
const he = { isNoStatement: !0 }
function le(e, t, s = 0) {
  let i, n
  for (i = e.indexOf(t, s); ; ) {
    if (-1 === (s = e.indexOf('/', s)) || s >= i) return i
    ;(n = e.charCodeAt(++s)),
      ++s,
      (s = 47 === n ? e.indexOf('\n', s) + 1 : e.indexOf('*/', s) + 2) > i &&
        (i = e.indexOf(t, s))
  }
}
function ce(e) {
  let t,
    s,
    i = 0
  for (t = e.indexOf('\n', i); ; ) {
    if (((i = e.indexOf('/', i)), -1 === i || i > t)) return t
    if (((s = e.charCodeAt(++i)), 47 === s)) return t
    ;(i = e.indexOf('*/', i + 2) + 2), i > t && (t = e.indexOf('\n', i))
  }
}
function ue(e, t, s, i, n) {
  let r,
    a,
    o,
    h,
    l = e[0],
    c = !l.included || l.needsBoundaries
  c && (h = s + ce(t.original.slice(s, l.start)) + 1)
  for (let s = 1; s <= e.length; s++)
    (r = l),
      (a = h),
      (o = c),
      (l = e[s]),
      (c = void 0 !== l && (!l.included || l.needsBoundaries)),
      o || c
        ? ((h =
            r.end +
            ce(t.original.slice(r.end, void 0 === l ? i : l.start)) +
            1),
          r.included
            ? o
              ? r.render(t, n, { end: h, start: a })
              : r.render(t, n)
            : ae(r, t, a, h))
        : r.render(t, n)
}
function de(e, t, s, i) {
  const n = []
  let r,
    a,
    o,
    h,
    l,
    c = s - 1
  for (let i = 0; i < e.length; i++) {
    for (
      a = e[i],
        void 0 !== r && (c = r.end + le(t.original.slice(r.end, a.start), ',')),
        o = h = c + 2 + ce(t.original.slice(c + 1, a.start));
      (l = t.original.charCodeAt(o)),
        32 === l || 9 === l || 10 === l || 13 === l;

    )
      o++
    void 0 !== r &&
      n.push({ contentEnd: h, end: o, node: r, separator: c, start: s }),
      (r = a),
      (s = o)
  }
  return (
    n.push({ contentEnd: i, end: i, node: r, separator: null, start: s }), n
  )
}
function pe(e, t, s) {
  for (;;) {
    const i = ce(e.original.slice(t, s))
    if (-1 === i) break
    ;(t = t + i + 1), e.remove(t - 1, t)
  }
}
function fe(e) {
  let t = ''
  do {
    const s = e % 64
    ;(e = Math.floor(e / 64)),
      (t =
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$'[s] +
        t)
  } while (0 !== e)
  return t
}
const me = Object.assign(Object.create(null), {
  await: !0,
  break: !0,
  case: !0,
  catch: !0,
  class: !0,
  const: !0,
  continue: !0,
  debugger: !0,
  default: !0,
  delete: !0,
  do: !0,
  else: !0,
  enum: !0,
  eval: !0,
  export: !0,
  extends: !0,
  false: !0,
  finally: !0,
  for: !0,
  function: !0,
  if: !0,
  implements: !0,
  import: !0,
  in: !0,
  instanceof: !0,
  interface: !0,
  let: !0,
  new: !0,
  null: !0,
  package: !0,
  private: !0,
  protected: !0,
  public: !0,
  return: !0,
  static: !0,
  super: !0,
  switch: !0,
  this: !0,
  throw: !0,
  true: !0,
  try: !0,
  typeof: !0,
  undefined: !0,
  var: !0,
  void: !0,
  while: !0,
  with: !0,
  yield: !0,
})
function ge(e, t) {
  let s = e,
    i = 1
  for (; t.has(s) || me[s]; ) s = `${e}$${fe(i++)}`
  return t.add(s), s
}
const xe = []
function ye(e, t = null) {
  return Object.create(t, e)
}
const Ee = Symbol('Unknown Value'),
  be = {
    deoptimizePath: () => {},
    getLiteralValueAtPath: () => Ee,
    getReturnExpressionWhenCalledAtPath: () => be,
    hasEffectsWhenAccessedAtPath: (e) => e.length > 0,
    hasEffectsWhenAssignedAtPath: (e) => e.length > 0,
    hasEffectsWhenCalledAtPath: () => !0,
    include: () => {},
    includeCallArguments(e, t) {
      for (const s of t) s.include(e, !1)
    },
    included: !0,
    toString: () => '[[UNKNOWN]]',
  },
  ve = {
    deoptimizePath: () => {},
    getLiteralValueAtPath: () => {},
    getReturnExpressionWhenCalledAtPath: () => be,
    hasEffectsWhenAccessedAtPath: (e) => e.length > 0,
    hasEffectsWhenAssignedAtPath: (e) => e.length > 0,
    hasEffectsWhenCalledAtPath: () => !0,
    include: () => {},
    includeCallArguments() {},
    included: !0,
    toString: () => 'undefined',
  },
  Se = {
    value: {
      returns: null,
      returnsPrimitive: be,
      callsArgs: null,
      mutatesSelf: !0,
    },
  },
  Ae = {
    value: {
      returns: null,
      returnsPrimitive: be,
      callsArgs: [0],
      mutatesSelf: !1,
    },
  }
class Ce {
  constructor() {
    this.included = !1
  }
  deoptimizePath() {}
  getLiteralValueAtPath() {
    return Ee
  }
  getReturnExpressionWhenCalledAtPath(e) {
    return 1 === e.length ? Ge(Fe, e[0]) : be
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > 1
  }
  hasEffectsWhenAssignedAtPath(e) {
    return e.length > 1
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return 1 !== e.length || ze(Fe, e[0], this.included, t, s)
  }
  include() {
    this.included = !0
  }
  includeCallArguments(e, t) {
    for (const s of t) s.include(e, !1)
  }
  toString() {
    return '[[UNKNOWN ARRAY]]'
  }
}
const ke = {
    value: {
      callsArgs: null,
      mutatesSelf: !1,
      returns: Ce,
      returnsPrimitive: null,
    },
  },
  Pe = {
    value: {
      callsArgs: null,
      mutatesSelf: !0,
      returns: Ce,
      returnsPrimitive: null,
    },
  },
  we = {
    value: {
      callsArgs: [0],
      mutatesSelf: !1,
      returns: Ce,
      returnsPrimitive: null,
    },
  },
  Ne = {
    value: {
      callsArgs: [0],
      mutatesSelf: !0,
      returns: Ce,
      returnsPrimitive: null,
    },
  },
  _e = {
    deoptimizePath: () => {},
    getLiteralValueAtPath: () => Ee,
    getReturnExpressionWhenCalledAtPath: (e) =>
      1 === e.length ? Ge(We, e[0]) : be,
    hasEffectsWhenAccessedAtPath: (e) => e.length > 1,
    hasEffectsWhenAssignedAtPath: (e) => e.length > 0,
    hasEffectsWhenCalledAtPath: (e) => {
      if (1 === e.length) {
        const t = e[0]
        return 'string' != typeof t || !We[t]
      }
      return !0
    },
    include: () => {},
    includeCallArguments(e, t) {
      for (const s of t) s.include(e, !1)
    },
    included: !0,
    toString: () => '[[UNKNOWN BOOLEAN]]',
  },
  Ie = {
    value: {
      callsArgs: null,
      mutatesSelf: !1,
      returns: null,
      returnsPrimitive: _e,
    },
  },
  $e = {
    value: {
      callsArgs: [0],
      mutatesSelf: !1,
      returns: null,
      returnsPrimitive: _e,
    },
  },
  Te = {
    deoptimizePath: () => {},
    getLiteralValueAtPath: () => Ee,
    getReturnExpressionWhenCalledAtPath: (e) =>
      1 === e.length ? Ge(Ue, e[0]) : be,
    hasEffectsWhenAccessedAtPath: (e) => e.length > 1,
    hasEffectsWhenAssignedAtPath: (e) => e.length > 0,
    hasEffectsWhenCalledAtPath: (e) => {
      if (1 === e.length) {
        const t = e[0]
        return 'string' != typeof t || !Ue[t]
      }
      return !0
    },
    include: () => {},
    includeCallArguments(e, t) {
      for (const s of t) s.include(e, !1)
    },
    included: !0,
    toString: () => '[[UNKNOWN NUMBER]]',
  },
  Le = {
    value: {
      callsArgs: null,
      mutatesSelf: !1,
      returns: null,
      returnsPrimitive: Te,
    },
  },
  Re = {
    value: {
      callsArgs: null,
      mutatesSelf: !0,
      returns: null,
      returnsPrimitive: Te,
    },
  },
  Me = {
    value: {
      callsArgs: [0],
      mutatesSelf: !1,
      returns: null,
      returnsPrimitive: Te,
    },
  },
  Oe = {
    deoptimizePath: () => {},
    getLiteralValueAtPath: () => Ee,
    getReturnExpressionWhenCalledAtPath: (e) =>
      1 === e.length ? Ge(je, e[0]) : be,
    hasEffectsWhenAccessedAtPath: (e) => e.length > 1,
    hasEffectsWhenAssignedAtPath: (e) => e.length > 0,
    hasEffectsWhenCalledAtPath: (e, t, s) =>
      1 !== e.length || ze(je, e[0], !0, t, s),
    include: () => {},
    includeCallArguments(e, t) {
      for (const s of t) s.include(e, !1)
    },
    included: !0,
    toString: () => '[[UNKNOWN STRING]]',
  },
  De = {
    value: {
      callsArgs: null,
      mutatesSelf: !1,
      returns: null,
      returnsPrimitive: Oe,
    },
  }
class Ve {
  constructor() {
    this.included = !1
  }
  deoptimizePath() {}
  getLiteralValueAtPath() {
    return Ee
  }
  getReturnExpressionWhenCalledAtPath(e) {
    return 1 === e.length ? Ge(Be, e[0]) : be
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > 1
  }
  hasEffectsWhenAssignedAtPath(e) {
    return e.length > 1
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return 1 !== e.length || ze(Be, e[0], this.included, t, s)
  }
  include() {
    this.included = !0
  }
  includeCallArguments(e, t) {
    for (const s of t) s.include(e, !1)
  }
  toString() {
    return '[[UNKNOWN OBJECT]]'
  }
}
const Be = ye({
    hasOwnProperty: Ie,
    isPrototypeOf: Ie,
    propertyIsEnumerable: Ie,
    toLocaleString: De,
    toString: De,
    valueOf: {
      value: {
        callsArgs: null,
        mutatesSelf: !1,
        returns: null,
        returnsPrimitive: be,
      },
    },
  }),
  Fe = ye(
    {
      concat: ke,
      copyWithin: Pe,
      every: $e,
      fill: Pe,
      filter: we,
      find: Ae,
      findIndex: Me,
      forEach: Ae,
      includes: Ie,
      indexOf: Le,
      join: De,
      lastIndexOf: Le,
      map: we,
      pop: Se,
      push: Re,
      reduce: Ae,
      reduceRight: Ae,
      reverse: Pe,
      shift: Se,
      slice: ke,
      some: $e,
      sort: Ne,
      splice: Pe,
      unshift: Re,
    },
    Be
  ),
  We = ye({ valueOf: Ie }, Be),
  Ue = ye(
    {
      toExponential: De,
      toFixed: De,
      toLocaleString: De,
      toPrecision: De,
      valueOf: Le,
    },
    Be
  ),
  je = ye(
    {
      charAt: De,
      charCodeAt: Le,
      codePointAt: Le,
      concat: De,
      endsWith: Ie,
      includes: Ie,
      indexOf: Le,
      lastIndexOf: Le,
      localeCompare: Le,
      match: Ie,
      normalize: De,
      padEnd: De,
      padStart: De,
      repeat: De,
      replace: {
        value: {
          callsArgs: [1],
          mutatesSelf: !1,
          returns: null,
          returnsPrimitive: Oe,
        },
      },
      search: Le,
      slice: De,
      split: ke,
      startsWith: Ie,
      substr: De,
      substring: De,
      toLocaleLowerCase: De,
      toLocaleUpperCase: De,
      toLowerCase: De,
      toUpperCase: De,
      trim: De,
      valueOf: De,
    },
    Be
  )
function ze(e, t, s, i, n) {
  if ('string' != typeof t || !e[t] || (e[t].mutatesSelf && s)) return !0
  if (!e[t].callsArgs) return !1
  for (const s of e[t].callsArgs)
    if (
      i.args[s] &&
      i.args[s].hasEffectsWhenCalledAtPath(Z, { args: xe, withNew: !1 }, n)
    )
      return !0
  return !1
}
function Ge(e, t) {
  return 'string' == typeof t && e[t]
    ? null !== e[t].returnsPrimitive
      ? e[t].returnsPrimitive
      : new e[t].returns()
    : be
}
class He {
  constructor(e) {
    ;(this.alwaysRendered = !1),
      (this.exportName = null),
      (this.included = !1),
      (this.isId = !1),
      (this.isReassigned = !1),
      (this.renderBaseName = null),
      (this.renderName = null),
      (this.safeExportName = null),
      (this.name = e)
  }
  addReference(e) {}
  deoptimizePath(e) {}
  getBaseVariableName() {
    return this.renderBaseName || this.renderName || this.name
  }
  getLiteralValueAtPath(e, t, s) {
    return Ee
  }
  getName() {
    const e = this.renderName || this.name
    return this.renderBaseName ? `${this.renderBaseName}${qe(e)}` : e
  }
  getReturnExpressionWhenCalledAtPath(e, t, s) {
    return be
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return e.length > 0
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return !0
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return !0
  }
  include(e) {
    this.included = !0
  }
  includeCallArguments(e, t) {
    for (const s of t) s.include(e, !1)
  }
  markCalledFromTryStatement() {}
  setRenderNames(e, t) {
    ;(this.renderBaseName = e), (this.renderName = t)
  }
  setSafeName(e) {
    this.renderName = e
  }
  toString() {
    return this.name
  }
}
const qe = (e) =>
  /^(?!\d)[\w$]+$/.test(e) ? `.${e}` : `[${JSON.stringify(e)}]`
class Ke extends He {
  constructor(e, t) {
    super(t),
      (this.module = e),
      (this.isNamespace = '*' === t),
      (this.referenced = !1)
  }
  addReference(e) {
    ;(this.referenced = !0),
      ('default' !== this.name && '*' !== this.name) ||
        this.module.suggestName(e.name)
  }
  include() {
    this.included || ((this.included = !0), (this.module.used = !0))
  }
}
const Ye =
    'break case class catch const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield enum await implements package protected static interface private public'.split(
      ' '
    ),
  Xe =
    'Infinity NaN undefined null true false eval uneval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Symbol Error EvalError InternalError RangeError ReferenceError SyntaxError TypeError URIError Number Math Date String RegExp Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array Map Set WeakMap WeakSet SIMD ArrayBuffer DataView JSON Promise Generator GeneratorFunction Reflect Proxy Intl'.split(
      ' '
    ),
  Qe = new Set(Ye.concat(Xe)),
  Je = /[^$_a-zA-Z0-9]/g,
  Ze = (e) => /\d/.test(e[0])
function et(e) {
  return (
    (e = e.replace(/-(\w)/g, (e, t) => t.toUpperCase()).replace(Je, '_')),
    (Ze(e) || Qe.has(e)) && (e = `_${e}`),
    e || '_'
  )
}
const tt = /^(?:\/|(?:[A-Za-z]:)?[\\|/])/,
  st = /^\.?\.\//
function it(e) {
  return tt.test(e)
}
function nt(e) {
  return st.test(e)
}
function rt(e) {
  return e.replace(/\\/g, '/')
}
function at(e) {
  return e.split(/(\/|\\)/).pop()
}
function ot(e) {
  const t = /(\/|\\)[^/\\]*$/.exec(e)
  if (!t) return '.'
  const s = e.slice(0, -t[0].length)
  return s || '/'
}
function ht(e) {
  const t = /\.[^.]+$/.exec(at(e))
  return t ? t[0] : ''
}
function lt(e, t) {
  const s = e.split(/[/\\]/).filter(Boolean),
    i = t.split(/[/\\]/).filter(Boolean)
  for (
    '.' === s[0] && s.shift(), '.' === i[0] && i.shift();
    s[0] && i[0] && s[0] === i[0];

  )
    s.shift(), i.shift()
  for (; '..' === i[0] && s.length > 0; ) i.shift(), s.pop()
  for (; s.pop(); ) i.unshift('..')
  return i.join('/')
}
function ct(...e) {
  let t = e.shift().split(/[/\\]/)
  return (
    e.forEach((e) => {
      if (it(e)) t = e.split(/[/\\]/)
      else {
        const s = e.split(/[/\\]/)
        for (; '.' === s[0] || '..' === s[0]; ) {
          '..' === s.shift() && t.pop()
        }
        t.push.apply(t, s)
      }
    }),
    t.join('/')
  )
}
class ut {
  constructor(e, t, s) {
    ;(this.exportsNames = !1),
      (this.exportsNamespace = !1),
      (this.mostCommonSuggestion = 0),
      (this.reexported = !1),
      (this.renderPath = void 0),
      (this.renormalizeRenderPath = !1),
      (this.used = !1),
      (this.graph = e),
      (this.id = t),
      (this.execIndex = 1 / 0),
      (this.moduleSideEffects = s)
    const i = t.split(/[\\/]/)
    ;(this.variableName = et(i.pop())),
      (this.nameSuggestions = Object.create(null)),
      (this.declarations = Object.create(null)),
      (this.exportedVariables = new Map())
  }
  getVariableForExportName(e) {
    '*' === e
      ? (this.exportsNamespace = !0)
      : 'default' !== e && (this.exportsNames = !0)
    let t = this.declarations[e]
    return (
      t ||
      ((this.declarations[e] = t = new Ke(this, e)),
      this.exportedVariables.set(t, e),
      t)
    )
  }
  setRenderPath(e, t) {
    return (
      (this.renderPath = ''),
      e.paths &&
        (this.renderPath =
          'function' == typeof e.paths ? e.paths(this.id) : e.paths[this.id]),
      this.renderPath ||
        (it(this.id)
          ? ((this.renderPath = rt(lt(t, this.id))),
            (this.renormalizeRenderPath = !0))
          : (this.renderPath = this.id)),
      this.renderPath
    )
  }
  suggestName(e) {
    this.nameSuggestions[e] || (this.nameSuggestions[e] = 0),
      (this.nameSuggestions[e] += 1),
      this.nameSuggestions[e] > this.mostCommonSuggestion &&
        ((this.mostCommonSuggestion = this.nameSuggestions[e]),
        (this.variableName = e))
  }
  warnUnusedImports() {
    const e = Object.keys(this.declarations).filter((e) => {
      if ('*' === e) return !1
      const t = this.declarations[e]
      return !t.included && !this.reexported && !t.referenced
    })
    if (0 === e.length) return
    const t =
      1 === e.length
        ? `'${e[0]}' is`
        : `${e
            .slice(0, -1)
            .map((e) => `'${e}'`)
            .join(', ')} and '${e.slice(-1)}' are`
    this.graph.warn({
      code: 'UNUSED_EXTERNAL_IMPORT',
      message: `${t} imported from external module '${this.id}' but never used`,
      names: e,
      source: this.id,
    })
  }
}
function dt(e) {
  e.isExecuted = !0
  const t = [e],
    s = new Set()
  for (const e of t)
    for (const i of e.dependencies)
      i instanceof ut ||
        i.isExecuted ||
        !i.moduleSideEffects ||
        s.has(i.id) ||
        ((i.isExecuted = !0), s.add(i.id), t.push(i))
}
class pt extends He {
  constructor(e, t, s, i) {
    super(e),
      (this.additionalInitializers = null),
      (this.calledFromTryStatement = !1),
      (this.expressionsToBeDeoptimized = []),
      (this.declarations = t ? [t] : []),
      (this.init = s),
      (this.deoptimizationTracker = i.deoptimizationTracker),
      (this.module = i.module)
  }
  addDeclaration(e, t) {
    this.declarations.push(e),
      null === this.additionalInitializers &&
        ((this.additionalInitializers = null === this.init ? [] : [this.init]),
        (this.init = be),
        (this.isReassigned = !0)),
      null !== t && this.additionalInitializers.push(t)
  }
  consolidateInitializers() {
    if (null !== this.additionalInitializers) {
      for (const e of this.additionalInitializers) e.deoptimizePath(ee)
      this.additionalInitializers = null
    }
  }
  deoptimizePath(e) {
    if (e.length > 7 || this.isReassigned) return
    const t = this.deoptimizationTracker.getEntities(e)
    if (!t.has(this))
      if ((t.add(this), 0 === e.length)) {
        if (!this.isReassigned) {
          this.isReassigned = !0
          const e = this.expressionsToBeDeoptimized
          this.expressionsToBeDeoptimized = []
          for (const t of e) t.deoptimizeCache()
          this.init && this.init.deoptimizePath(ee)
        }
      } else this.init && this.init.deoptimizePath(e)
  }
  getLiteralValueAtPath(e, t, s) {
    if (this.isReassigned || !this.init || e.length > 7) return Ee
    const i = t.getEntities(e)
    if (i.has(this.init)) return Ee
    this.expressionsToBeDeoptimized.push(s), i.add(this.init)
    const n = this.init.getLiteralValueAtPath(e, t, s)
    return i.delete(this.init), n
  }
  getReturnExpressionWhenCalledAtPath(e, t, s) {
    if (this.isReassigned || !this.init || e.length > 7) return be
    const i = t.getEntities(e)
    if (i.has(this.init)) return be
    this.expressionsToBeDeoptimized.push(s), i.add(this.init)
    const n = this.init.getReturnExpressionWhenCalledAtPath(e, t, s)
    return i.delete(this.init), n
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    if (0 === e.length) return !1
    if (this.isReassigned || e.length > 7) return !0
    const s = t.accessed.getEntities(e)
    return (
      !s.has(this) &&
      (s.add(this), this.init && this.init.hasEffectsWhenAccessedAtPath(e, t))
    )
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    if (this.included || e.length > 7) return !0
    if (0 === e.length) return !1
    if (this.isReassigned) return !0
    const s = t.assigned.getEntities(e)
    return (
      !s.has(this) &&
      (s.add(this), this.init && this.init.hasEffectsWhenAssignedAtPath(e, t))
    )
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    if (e.length > 7 || this.isReassigned) return !0
    const i = (t.withNew ? s.instantiated : s.called).getEntities(e)
    return (
      !i.has(this) &&
      (i.add(this), this.init && this.init.hasEffectsWhenCalledAtPath(e, t, s))
    )
  }
  include(e) {
    if (!this.included) {
      ;(this.included = !0), this.module.isExecuted || dt(this.module)
      for (const t of this.declarations) {
        t.included || t.include(e, !1)
        let s = t.parent
        for (; !s.included && ((s.included = !0), 'Program' !== s.type); )
          s = s.parent
      }
    }
  }
  includeCallArguments(e, t) {
    if (this.isReassigned) for (const s of t) s.include(e, !1)
    else this.init && this.init.includeCallArguments(e, t)
  }
  markCalledFromTryStatement() {
    this.calledFromTryStatement = !0
  }
}
class ft {
  constructor() {
    ;(this.children = []), (this.variables = new Map())
  }
  addDeclaration(e, t, s = null, i) {
    const n = e.name
    let r = this.variables.get(n)
    return (
      r
        ? r.addDeclaration(e, s)
        : ((r = new pt(e.name, e, s || ve, t)), this.variables.set(n, r)),
      r
    )
  }
  contains(e) {
    return this.variables.has(e)
  }
  findVariable(e) {
    throw new Error(
      'Internal Error: findVariable needs to be implemented by a subclass'
    )
  }
}
class mt extends ft {
  constructor(e) {
    super(),
      (this.accessedOutsideVariables = new Map()),
      (this.parent = e),
      e.children.push(this)
  }
  addAccessedDynamicImport(e) {
    ;(
      this.accessedDynamicImports || (this.accessedDynamicImports = new Set())
    ).add(e),
      this.parent instanceof mt && this.parent.addAccessedDynamicImport(e)
  }
  addAccessedGlobalsByFormat(e) {
    const t =
      this.accessedGlobalVariablesByFormat ||
      (this.accessedGlobalVariablesByFormat = new Map())
    for (const s of Object.keys(e)) {
      let i = t.get(s)
      i || ((i = new Set()), t.set(s, i))
      for (const t of e[s]) i.add(t)
    }
    this.parent instanceof mt && this.parent.addAccessedGlobalsByFormat(e)
  }
  addNamespaceMemberAccess(e, t) {
    this.accessedOutsideVariables.set(e, t),
      this.parent.addNamespaceMemberAccess(e, t)
  }
  addReturnExpression(e) {
    this.parent instanceof mt && this.parent.addReturnExpression(e)
  }
  addUsedOutsideNames(e, t) {
    for (const s of this.accessedOutsideVariables.values())
      s.included &&
        (e.add(s.getBaseVariableName()),
        s.exportName && 'system' === t && e.add('exports'))
    const s =
      this.accessedGlobalVariablesByFormat &&
      this.accessedGlobalVariablesByFormat.get(t)
    if (s) for (const t of s) e.add(t)
  }
  contains(e) {
    return this.variables.has(e) || this.parent.contains(e)
  }
  deconflict(e) {
    const t = new Set()
    if ((this.addUsedOutsideNames(t, e), this.accessedDynamicImports))
      for (const e of this.accessedDynamicImports)
        e.inlineNamespace && t.add(e.inlineNamespace.getBaseVariableName())
    for (const [e, s] of this.variables)
      (s.included || s.alwaysRendered) && s.setSafeName(ge(e, t))
    for (const t of this.children) t.deconflict(e)
  }
  findLexicalBoundary() {
    return this.parent.findLexicalBoundary()
  }
  findVariable(e) {
    const t = this.variables.get(e) || this.accessedOutsideVariables.get(e)
    if (t) return t
    const s = this.parent.findVariable(e)
    return this.accessedOutsideVariables.set(e, s), s
  }
}
function gt(e, t, s) {
  if ('number' == typeof s)
    throw new Error(
      'locate takes a { startIndex, offsetLine, offsetColumn } object as the third argument'
    )
  return (function (e, t) {
    void 0 === t && (t = {})
    var s = t.offsetLine || 0,
      i = t.offsetColumn || 0,
      n = e.split('\n'),
      r = 0,
      a = n.map(function (e, t) {
        var s = r + e.length + 1,
          i = { start: r, end: s, line: t }
        return (r = s), i
      }),
      o = 0
    function h(e, t) {
      return e.start <= t && t < e.end
    }
    function l(e, t) {
      return { line: s + e.line, column: i + t - e.start, character: t }
    }
    return function (t, s) {
      'string' == typeof t && (t = e.indexOf(t, s || 0))
      for (var i = a[o], n = t >= i.end ? 1 : -1; i; ) {
        if (h(i, t)) return l(i, t)
        i = a[(o += n)]
      }
    }
  })(e, s)(t, s && s.startIndex)
}
const xt = { Literal: [], Program: ['body'] }
class yt {
  constructor(e, t, s) {
    ;(this.included = !1),
      (this.keys =
        xt[e.type] ||
        (function (e) {
          return (
            (xt[e.type] = Object.keys(e).filter(
              (t) => 'object' == typeof e[t]
            )),
            xt[e.type]
          )
        })(e)),
      (this.parent = t),
      (this.context = t.context),
      this.createScope(s),
      this.parseNode(e),
      this.initialise(),
      this.context.magicString.addSourcemapLocation(this.start),
      this.context.magicString.addSourcemapLocation(this.end)
  }
  bind() {
    for (const e of this.keys) {
      const t = this[e]
      if (null !== t && 'annotations' !== e)
        if (Array.isArray(t)) for (const e of t) null !== e && e.bind()
        else t.bind()
    }
  }
  createScope(e) {
    this.scope = e
  }
  declare(e, t) {
    return []
  }
  deoptimizePath(e) {}
  getLiteralValueAtPath(e, t, s) {
    return Ee
  }
  getReturnExpressionWhenCalledAtPath(e, t, s) {
    return be
  }
  hasEffects(e) {
    for (const t of this.keys) {
      const s = this[t]
      if (null !== s && 'annotations' !== t)
        if (Array.isArray(s)) {
          for (const t of s) if (null !== t && t.hasEffects(e)) return !0
        } else if (s.hasEffects(e)) return !0
    }
    return !1
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return e.length > 0
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return !0
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return !0
  }
  include(e, t) {
    this.included = !0
    for (const s of this.keys) {
      const i = this[s]
      if (null !== i && 'annotations' !== s)
        if (Array.isArray(i)) for (const s of i) null !== s && s.include(e, t)
        else i.include(e, t)
    }
  }
  includeCallArguments(e, t) {
    for (const s of t) s.include(e, !1)
  }
  includeWithAllDeclaredVariables(e, t) {
    this.include(t, e)
  }
  initialise() {}
  insertSemicolon(e) {
    ';' !== e.original[this.end - 1] && e.appendLeft(this.end, ';')
  }
  locate() {
    const e = gt(this.context.code, this.start, { offsetLine: 1 })
    return (
      (e.file = this.context.fileName),
      (e.toString = () => JSON.stringify(e)),
      e
    )
  }
  parseNode(e) {
    for (const t of Object.keys(e)) {
      if (this.hasOwnProperty(t)) continue
      const s = e[t]
      if ('object' != typeof s || null === s || 'annotations' === t) this[t] = s
      else if (Array.isArray(s)) {
        this[t] = []
        for (const e of s)
          this[t].push(
            null === e
              ? null
              : new (this.context.nodeConstructors[e.type] ||
                  this.context.nodeConstructors.UnknownNode)(
                  e,
                  this,
                  this.scope
                )
          )
      } else
        this[t] = new (this.context.nodeConstructors[s.type] ||
          this.context.nodeConstructors.UnknownNode)(s, this, this.scope)
    }
  }
  render(e, t) {
    for (const s of this.keys) {
      const i = this[s]
      if (null !== i && 'annotations' !== s)
        if (Array.isArray(i)) for (const s of i) null !== s && s.render(e, t)
        else i.render(e, t)
    }
  }
  shouldBeIncluded(e) {
    return this.included || (!e.brokenFlow && this.hasEffects(re()))
  }
  toString() {
    return this.context.code.slice(this.start, this.end)
  }
}
class Et extends yt {
  createScope(e) {
    this.scope = new mt(e)
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > 1
  }
  hasEffectsWhenAssignedAtPath(e) {
    return e.length > 1
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return (
      !t.withNew ||
      this.body.hasEffectsWhenCalledAtPath(e, t, s) ||
      (null !== this.superClass &&
        this.superClass.hasEffectsWhenCalledAtPath(e, t, s))
    )
  }
  initialise() {
    null !== this.id && this.id.declare('class', this)
  }
}
class bt extends Et {
  initialise() {
    super.initialise(), null !== this.id && (this.id.variable.isId = !0)
  }
  parseNode(e) {
    null !== e.id &&
      (this.id = new this.context.nodeConstructors.Identifier(
        e.id,
        this,
        this.scope.parent
      )),
      super.parseNode(e)
  }
  render(e, t) {
    'system' === t.format &&
      this.id &&
      this.id.variable.exportName &&
      e.appendLeft(
        this.end,
        ` exports('${
          this.id.variable.exportName
        }', ${this.id.variable.getName()});`
      ),
      super.render(e, t)
  }
}
class vt extends pt {
  constructor(e) {
    super('arguments', null, be, e)
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > 1
  }
  hasEffectsWhenAssignedAtPath() {
    return !0
  }
  hasEffectsWhenCalledAtPath() {
    return !0
  }
}
class St extends pt {
  constructor(e) {
    super('this', null, null, e)
  }
  getLiteralValueAtPath() {
    return Ee
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return (
      this.getInit(t).hasEffectsWhenAccessedAtPath(e, t) ||
      super.hasEffectsWhenAccessedAtPath(e, t)
    )
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return (
      this.getInit(t).hasEffectsWhenAssignedAtPath(e, t) ||
      super.hasEffectsWhenAssignedAtPath(e, t)
    )
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return (
      this.getInit(s).hasEffectsWhenCalledAtPath(e, t, s) ||
      super.hasEffectsWhenCalledAtPath(e, t, s)
    )
  }
  getInit(e) {
    return e.replacedVariableInits.get(this) || be
  }
}
class At extends mt {
  constructor(e, t) {
    super(e),
      (this.parameters = []),
      (this.hasRest = !1),
      (this.context = t),
      (this.hoistedBodyVarScope = new mt(this))
  }
  addParameterDeclaration(e) {
    const t = e.name
    let s = this.hoistedBodyVarScope.variables.get(t)
    return (
      s ? s.addDeclaration(e, null) : (s = new pt(t, e, be, this.context)),
      this.variables.set(t, s),
      s
    )
  }
  addParameterVariables(e, t) {
    this.parameters = e
    for (const t of e) for (const e of t) e.alwaysRendered = !0
    this.hasRest = t
  }
  includeCallArguments(e, t) {
    let s = !1,
      i = !1
    const n = this.hasRest && this.parameters[this.parameters.length - 1]
    for (let r = t.length - 1; r >= 0; r--) {
      const a = this.parameters[r] || n,
        o = t[r]
      if (a) {
        s = !1
        for (const e of a)
          e.included && (i = !0), e.calledFromTryStatement && (s = !0)
      }
      !i && o.shouldBeIncluded(e) && (i = !0), i && o.include(e, s)
    }
  }
}
class Ct extends At {
  constructor() {
    super(...arguments),
      (this.returnExpression = null),
      (this.returnExpressions = [])
  }
  addReturnExpression(e) {
    this.returnExpressions.push(e)
  }
  getReturnExpression() {
    return (
      null === this.returnExpression && this.updateReturnExpression(),
      this.returnExpression
    )
  }
  updateReturnExpression() {
    if (1 === this.returnExpressions.length)
      this.returnExpression = this.returnExpressions[0]
    else {
      this.returnExpression = be
      for (const e of this.returnExpressions) e.deoptimizePath(ee)
    }
  }
}
class kt extends Ct {
  constructor(e, t) {
    super(e, t),
      this.variables.set('arguments', (this.argumentsVariable = new vt(t))),
      this.variables.set('this', (this.thisVariable = new St(t)))
  }
  findLexicalBoundary() {
    return this
  }
  includeCallArguments(e, t) {
    if ((super.includeCallArguments(e, t), this.argumentsVariable.included))
      for (const s of t) s.included || s.include(e, !1)
  }
}
const Pt = Object.create(null),
  wt = Symbol('Value Properties'),
  Nt = { pure: !0 },
  _t = { pure: !1 },
  It = { __proto__: null, [wt]: _t },
  $t = { __proto__: null, [wt]: Nt },
  Tt = { __proto__: null, [wt]: _t, prototype: It },
  Lt = { __proto__: null, [wt]: Nt, prototype: It },
  Rt = { __proto__: null, [wt]: Nt, from: $t, of: $t, prototype: It },
  Mt = { __proto__: null, [wt]: Nt, supportedLocalesOf: Lt },
  Ot = {
    global: It,
    globalThis: It,
    self: It,
    window: It,
    __proto__: null,
    [wt]: _t,
    Array: {
      __proto__: null,
      [wt]: _t,
      from: $t,
      isArray: $t,
      of: $t,
      prototype: It,
    },
    ArrayBuffer: { __proto__: null, [wt]: Nt, isView: $t, prototype: It },
    Atomics: It,
    BigInt: Tt,
    BigInt64Array: Tt,
    BigUint64Array: Tt,
    Boolean: Lt,
    constructor: Tt,
    DataView: Lt,
    Date: {
      __proto__: null,
      [wt]: Nt,
      now: $t,
      parse: $t,
      prototype: It,
      UTC: $t,
    },
    decodeURI: $t,
    decodeURIComponent: $t,
    encodeURI: $t,
    encodeURIComponent: $t,
    Error: Lt,
    escape: $t,
    eval: It,
    EvalError: Lt,
    Float32Array: Rt,
    Float64Array: Rt,
    Function: Tt,
    hasOwnProperty: It,
    Infinity: It,
    Int16Array: Rt,
    Int32Array: Rt,
    Int8Array: Rt,
    isFinite: $t,
    isNaN: $t,
    isPrototypeOf: It,
    JSON: It,
    Map: Lt,
    Math: {
      __proto__: null,
      [wt]: _t,
      abs: $t,
      acos: $t,
      acosh: $t,
      asin: $t,
      asinh: $t,
      atan: $t,
      atan2: $t,
      atanh: $t,
      cbrt: $t,
      ceil: $t,
      clz32: $t,
      cos: $t,
      cosh: $t,
      exp: $t,
      expm1: $t,
      floor: $t,
      fround: $t,
      hypot: $t,
      imul: $t,
      log: $t,
      log10: $t,
      log1p: $t,
      log2: $t,
      max: $t,
      min: $t,
      pow: $t,
      random: $t,
      round: $t,
      sign: $t,
      sin: $t,
      sinh: $t,
      sqrt: $t,
      tan: $t,
      tanh: $t,
      trunc: $t,
    },
    NaN: It,
    Number: {
      __proto__: null,
      [wt]: Nt,
      isFinite: $t,
      isInteger: $t,
      isNaN: $t,
      isSafeInteger: $t,
      parseFloat: $t,
      parseInt: $t,
      prototype: It,
    },
    Object: {
      __proto__: null,
      [wt]: Nt,
      create: $t,
      getNotifier: $t,
      getOwn: $t,
      getOwnPropertyDescriptor: $t,
      getOwnPropertyNames: $t,
      getOwnPropertySymbols: $t,
      getPrototypeOf: $t,
      is: $t,
      isExtensible: $t,
      isFrozen: $t,
      isSealed: $t,
      keys: $t,
      prototype: It,
    },
    parseFloat: $t,
    parseInt: $t,
    Promise: {
      __proto__: null,
      [wt]: _t,
      all: $t,
      prototype: It,
      race: $t,
      resolve: $t,
    },
    propertyIsEnumerable: It,
    Proxy: It,
    RangeError: Lt,
    ReferenceError: Lt,
    Reflect: It,
    RegExp: Lt,
    Set: Lt,
    SharedArrayBuffer: Tt,
    String: {
      __proto__: null,
      [wt]: Nt,
      fromCharCode: $t,
      fromCodePoint: $t,
      prototype: It,
      raw: $t,
    },
    Symbol: { __proto__: null, [wt]: Nt, for: $t, keyFor: $t, prototype: It },
    SyntaxError: Lt,
    toLocaleString: It,
    toString: It,
    TypeError: Lt,
    Uint16Array: Rt,
    Uint32Array: Rt,
    Uint8Array: Rt,
    Uint8ClampedArray: Rt,
    unescape: $t,
    URIError: Lt,
    valueOf: It,
    WeakMap: Lt,
    WeakSet: Lt,
    clearInterval: Tt,
    clearTimeout: Tt,
    console: It,
    Intl: {
      __proto__: null,
      [wt]: _t,
      Collator: Mt,
      DateTimeFormat: Mt,
      ListFormat: Mt,
      NumberFormat: Mt,
      PluralRules: Mt,
      RelativeTimeFormat: Mt,
    },
    setInterval: Tt,
    setTimeout: Tt,
    TextDecoder: Tt,
    TextEncoder: Tt,
    URL: Tt,
    URLSearchParams: Tt,
    AbortController: Tt,
    AbortSignal: Tt,
    addEventListener: It,
    alert: It,
    AnalyserNode: Tt,
    Animation: Tt,
    AnimationEvent: Tt,
    applicationCache: It,
    ApplicationCache: Tt,
    ApplicationCacheErrorEvent: Tt,
    atob: It,
    Attr: Tt,
    Audio: Tt,
    AudioBuffer: Tt,
    AudioBufferSourceNode: Tt,
    AudioContext: Tt,
    AudioDestinationNode: Tt,
    AudioListener: Tt,
    AudioNode: Tt,
    AudioParam: Tt,
    AudioProcessingEvent: Tt,
    AudioScheduledSourceNode: Tt,
    AudioWorkletNode: Tt,
    BarProp: Tt,
    BaseAudioContext: Tt,
    BatteryManager: Tt,
    BeforeUnloadEvent: Tt,
    BiquadFilterNode: Tt,
    Blob: Tt,
    BlobEvent: Tt,
    blur: It,
    BroadcastChannel: Tt,
    btoa: It,
    ByteLengthQueuingStrategy: Tt,
    Cache: Tt,
    caches: It,
    CacheStorage: Tt,
    cancelAnimationFrame: It,
    cancelIdleCallback: It,
    CanvasCaptureMediaStreamTrack: Tt,
    CanvasGradient: Tt,
    CanvasPattern: Tt,
    CanvasRenderingContext2D: Tt,
    ChannelMergerNode: Tt,
    ChannelSplitterNode: Tt,
    CharacterData: Tt,
    clientInformation: It,
    ClipboardEvent: Tt,
    close: It,
    closed: It,
    CloseEvent: Tt,
    Comment: Tt,
    CompositionEvent: Tt,
    confirm: It,
    ConstantSourceNode: Tt,
    ConvolverNode: Tt,
    CountQueuingStrategy: Tt,
    createImageBitmap: It,
    Credential: Tt,
    CredentialsContainer: Tt,
    crypto: It,
    Crypto: Tt,
    CryptoKey: Tt,
    CSS: Tt,
    CSSConditionRule: Tt,
    CSSFontFaceRule: Tt,
    CSSGroupingRule: Tt,
    CSSImportRule: Tt,
    CSSKeyframeRule: Tt,
    CSSKeyframesRule: Tt,
    CSSMediaRule: Tt,
    CSSNamespaceRule: Tt,
    CSSPageRule: Tt,
    CSSRule: Tt,
    CSSRuleList: Tt,
    CSSStyleDeclaration: Tt,
    CSSStyleRule: Tt,
    CSSStyleSheet: Tt,
    CSSSupportsRule: Tt,
    CustomElementRegistry: Tt,
    customElements: It,
    CustomEvent: Tt,
    DataTransfer: Tt,
    DataTransferItem: Tt,
    DataTransferItemList: Tt,
    defaultstatus: It,
    defaultStatus: It,
    DelayNode: Tt,
    DeviceMotionEvent: Tt,
    DeviceOrientationEvent: Tt,
    devicePixelRatio: It,
    dispatchEvent: It,
    document: It,
    Document: Tt,
    DocumentFragment: Tt,
    DocumentType: Tt,
    DOMError: Tt,
    DOMException: Tt,
    DOMImplementation: Tt,
    DOMMatrix: Tt,
    DOMMatrixReadOnly: Tt,
    DOMParser: Tt,
    DOMPoint: Tt,
    DOMPointReadOnly: Tt,
    DOMQuad: Tt,
    DOMRect: Tt,
    DOMRectReadOnly: Tt,
    DOMStringList: Tt,
    DOMStringMap: Tt,
    DOMTokenList: Tt,
    DragEvent: Tt,
    DynamicsCompressorNode: Tt,
    Element: Tt,
    ErrorEvent: Tt,
    Event: Tt,
    EventSource: Tt,
    EventTarget: Tt,
    external: It,
    fetch: It,
    File: Tt,
    FileList: Tt,
    FileReader: Tt,
    find: It,
    focus: It,
    FocusEvent: Tt,
    FontFace: Tt,
    FontFaceSetLoadEvent: Tt,
    FormData: Tt,
    frames: It,
    GainNode: Tt,
    Gamepad: Tt,
    GamepadButton: Tt,
    GamepadEvent: Tt,
    getComputedStyle: It,
    getSelection: It,
    HashChangeEvent: Tt,
    Headers: Tt,
    history: It,
    History: Tt,
    HTMLAllCollection: Tt,
    HTMLAnchorElement: Tt,
    HTMLAreaElement: Tt,
    HTMLAudioElement: Tt,
    HTMLBaseElement: Tt,
    HTMLBodyElement: Tt,
    HTMLBRElement: Tt,
    HTMLButtonElement: Tt,
    HTMLCanvasElement: Tt,
    HTMLCollection: Tt,
    HTMLContentElement: Tt,
    HTMLDataElement: Tt,
    HTMLDataListElement: Tt,
    HTMLDetailsElement: Tt,
    HTMLDialogElement: Tt,
    HTMLDirectoryElement: Tt,
    HTMLDivElement: Tt,
    HTMLDListElement: Tt,
    HTMLDocument: Tt,
    HTMLElement: Tt,
    HTMLEmbedElement: Tt,
    HTMLFieldSetElement: Tt,
    HTMLFontElement: Tt,
    HTMLFormControlsCollection: Tt,
    HTMLFormElement: Tt,
    HTMLFrameElement: Tt,
    HTMLFrameSetElement: Tt,
    HTMLHeadElement: Tt,
    HTMLHeadingElement: Tt,
    HTMLHRElement: Tt,
    HTMLHtmlElement: Tt,
    HTMLIFrameElement: Tt,
    HTMLImageElement: Tt,
    HTMLInputElement: Tt,
    HTMLLabelElement: Tt,
    HTMLLegendElement: Tt,
    HTMLLIElement: Tt,
    HTMLLinkElement: Tt,
    HTMLMapElement: Tt,
    HTMLMarqueeElement: Tt,
    HTMLMediaElement: Tt,
    HTMLMenuElement: Tt,
    HTMLMetaElement: Tt,
    HTMLMeterElement: Tt,
    HTMLModElement: Tt,
    HTMLObjectElement: Tt,
    HTMLOListElement: Tt,
    HTMLOptGroupElement: Tt,
    HTMLOptionElement: Tt,
    HTMLOptionsCollection: Tt,
    HTMLOutputElement: Tt,
    HTMLParagraphElement: Tt,
    HTMLParamElement: Tt,
    HTMLPictureElement: Tt,
    HTMLPreElement: Tt,
    HTMLProgressElement: Tt,
    HTMLQuoteElement: Tt,
    HTMLScriptElement: Tt,
    HTMLSelectElement: Tt,
    HTMLShadowElement: Tt,
    HTMLSlotElement: Tt,
    HTMLSourceElement: Tt,
    HTMLSpanElement: Tt,
    HTMLStyleElement: Tt,
    HTMLTableCaptionElement: Tt,
    HTMLTableCellElement: Tt,
    HTMLTableColElement: Tt,
    HTMLTableElement: Tt,
    HTMLTableRowElement: Tt,
    HTMLTableSectionElement: Tt,
    HTMLTemplateElement: Tt,
    HTMLTextAreaElement: Tt,
    HTMLTimeElement: Tt,
    HTMLTitleElement: Tt,
    HTMLTrackElement: Tt,
    HTMLUListElement: Tt,
    HTMLUnknownElement: Tt,
    HTMLVideoElement: Tt,
    IDBCursor: Tt,
    IDBCursorWithValue: Tt,
    IDBDatabase: Tt,
    IDBFactory: Tt,
    IDBIndex: Tt,
    IDBKeyRange: Tt,
    IDBObjectStore: Tt,
    IDBOpenDBRequest: Tt,
    IDBRequest: Tt,
    IDBTransaction: Tt,
    IDBVersionChangeEvent: Tt,
    IdleDeadline: Tt,
    IIRFilterNode: Tt,
    Image: Tt,
    ImageBitmap: Tt,
    ImageBitmapRenderingContext: Tt,
    ImageCapture: Tt,
    ImageData: Tt,
    indexedDB: It,
    innerHeight: It,
    innerWidth: It,
    InputEvent: Tt,
    IntersectionObserver: Tt,
    IntersectionObserverEntry: Tt,
    isSecureContext: It,
    KeyboardEvent: Tt,
    KeyframeEffect: Tt,
    length: It,
    localStorage: It,
    location: It,
    Location: Tt,
    locationbar: It,
    matchMedia: It,
    MediaDeviceInfo: Tt,
    MediaDevices: Tt,
    MediaElementAudioSourceNode: Tt,
    MediaEncryptedEvent: Tt,
    MediaError: Tt,
    MediaKeyMessageEvent: Tt,
    MediaKeySession: Tt,
    MediaKeyStatusMap: Tt,
    MediaKeySystemAccess: Tt,
    MediaList: Tt,
    MediaQueryList: Tt,
    MediaQueryListEvent: Tt,
    MediaRecorder: Tt,
    MediaSettingsRange: Tt,
    MediaSource: Tt,
    MediaStream: Tt,
    MediaStreamAudioDestinationNode: Tt,
    MediaStreamAudioSourceNode: Tt,
    MediaStreamEvent: Tt,
    MediaStreamTrack: Tt,
    MediaStreamTrackEvent: Tt,
    menubar: It,
    MessageChannel: Tt,
    MessageEvent: Tt,
    MessagePort: Tt,
    MIDIAccess: Tt,
    MIDIConnectionEvent: Tt,
    MIDIInput: Tt,
    MIDIInputMap: Tt,
    MIDIMessageEvent: Tt,
    MIDIOutput: Tt,
    MIDIOutputMap: Tt,
    MIDIPort: Tt,
    MimeType: Tt,
    MimeTypeArray: Tt,
    MouseEvent: Tt,
    moveBy: It,
    moveTo: It,
    MutationEvent: Tt,
    MutationObserver: Tt,
    MutationRecord: Tt,
    name: It,
    NamedNodeMap: Tt,
    NavigationPreloadManager: Tt,
    navigator: It,
    Navigator: Tt,
    NetworkInformation: Tt,
    Node: Tt,
    NodeFilter: It,
    NodeIterator: Tt,
    NodeList: Tt,
    Notification: Tt,
    OfflineAudioCompletionEvent: Tt,
    OfflineAudioContext: Tt,
    offscreenBuffering: It,
    OffscreenCanvas: Tt,
    open: It,
    openDatabase: It,
    Option: Tt,
    origin: It,
    OscillatorNode: Tt,
    outerHeight: It,
    outerWidth: It,
    PageTransitionEvent: Tt,
    pageXOffset: It,
    pageYOffset: It,
    PannerNode: Tt,
    parent: It,
    Path2D: Tt,
    PaymentAddress: Tt,
    PaymentRequest: Tt,
    PaymentRequestUpdateEvent: Tt,
    PaymentResponse: Tt,
    performance: It,
    Performance: Tt,
    PerformanceEntry: Tt,
    PerformanceLongTaskTiming: Tt,
    PerformanceMark: Tt,
    PerformanceMeasure: Tt,
    PerformanceNavigation: Tt,
    PerformanceNavigationTiming: Tt,
    PerformanceObserver: Tt,
    PerformanceObserverEntryList: Tt,
    PerformancePaintTiming: Tt,
    PerformanceResourceTiming: Tt,
    PerformanceTiming: Tt,
    PeriodicWave: Tt,
    Permissions: Tt,
    PermissionStatus: Tt,
    personalbar: It,
    PhotoCapabilities: Tt,
    Plugin: Tt,
    PluginArray: Tt,
    PointerEvent: Tt,
    PopStateEvent: Tt,
    postMessage: It,
    Presentation: Tt,
    PresentationAvailability: Tt,
    PresentationConnection: Tt,
    PresentationConnectionAvailableEvent: Tt,
    PresentationConnectionCloseEvent: Tt,
    PresentationConnectionList: Tt,
    PresentationReceiver: Tt,
    PresentationRequest: Tt,
    print: It,
    ProcessingInstruction: Tt,
    ProgressEvent: Tt,
    PromiseRejectionEvent: Tt,
    prompt: It,
    PushManager: Tt,
    PushSubscription: Tt,
    PushSubscriptionOptions: Tt,
    queueMicrotask: It,
    RadioNodeList: Tt,
    Range: Tt,
    ReadableStream: Tt,
    RemotePlayback: Tt,
    removeEventListener: It,
    Request: Tt,
    requestAnimationFrame: It,
    requestIdleCallback: It,
    resizeBy: It,
    ResizeObserver: Tt,
    ResizeObserverEntry: Tt,
    resizeTo: It,
    Response: Tt,
    RTCCertificate: Tt,
    RTCDataChannel: Tt,
    RTCDataChannelEvent: Tt,
    RTCDtlsTransport: Tt,
    RTCIceCandidate: Tt,
    RTCIceTransport: Tt,
    RTCPeerConnection: Tt,
    RTCPeerConnectionIceEvent: Tt,
    RTCRtpReceiver: Tt,
    RTCRtpSender: Tt,
    RTCSctpTransport: Tt,
    RTCSessionDescription: Tt,
    RTCStatsReport: Tt,
    RTCTrackEvent: Tt,
    screen: It,
    Screen: Tt,
    screenLeft: It,
    ScreenOrientation: Tt,
    screenTop: It,
    screenX: It,
    screenY: It,
    ScriptProcessorNode: Tt,
    scroll: It,
    scrollbars: It,
    scrollBy: It,
    scrollTo: It,
    scrollX: It,
    scrollY: It,
    SecurityPolicyViolationEvent: Tt,
    Selection: Tt,
    ServiceWorker: Tt,
    ServiceWorkerContainer: Tt,
    ServiceWorkerRegistration: Tt,
    sessionStorage: It,
    ShadowRoot: Tt,
    SharedWorker: Tt,
    SourceBuffer: Tt,
    SourceBufferList: Tt,
    speechSynthesis: It,
    SpeechSynthesisEvent: Tt,
    SpeechSynthesisUtterance: Tt,
    StaticRange: Tt,
    status: It,
    statusbar: It,
    StereoPannerNode: Tt,
    stop: It,
    Storage: Tt,
    StorageEvent: Tt,
    StorageManager: Tt,
    styleMedia: It,
    StyleSheet: Tt,
    StyleSheetList: Tt,
    SubtleCrypto: Tt,
    SVGAElement: Tt,
    SVGAngle: Tt,
    SVGAnimatedAngle: Tt,
    SVGAnimatedBoolean: Tt,
    SVGAnimatedEnumeration: Tt,
    SVGAnimatedInteger: Tt,
    SVGAnimatedLength: Tt,
    SVGAnimatedLengthList: Tt,
    SVGAnimatedNumber: Tt,
    SVGAnimatedNumberList: Tt,
    SVGAnimatedPreserveAspectRatio: Tt,
    SVGAnimatedRect: Tt,
    SVGAnimatedString: Tt,
    SVGAnimatedTransformList: Tt,
    SVGAnimateElement: Tt,
    SVGAnimateMotionElement: Tt,
    SVGAnimateTransformElement: Tt,
    SVGAnimationElement: Tt,
    SVGCircleElement: Tt,
    SVGClipPathElement: Tt,
    SVGComponentTransferFunctionElement: Tt,
    SVGDefsElement: Tt,
    SVGDescElement: Tt,
    SVGDiscardElement: Tt,
    SVGElement: Tt,
    SVGEllipseElement: Tt,
    SVGFEBlendElement: Tt,
    SVGFEColorMatrixElement: Tt,
    SVGFEComponentTransferElement: Tt,
    SVGFECompositeElement: Tt,
    SVGFEConvolveMatrixElement: Tt,
    SVGFEDiffuseLightingElement: Tt,
    SVGFEDisplacementMapElement: Tt,
    SVGFEDistantLightElement: Tt,
    SVGFEDropShadowElement: Tt,
    SVGFEFloodElement: Tt,
    SVGFEFuncAElement: Tt,
    SVGFEFuncBElement: Tt,
    SVGFEFuncGElement: Tt,
    SVGFEFuncRElement: Tt,
    SVGFEGaussianBlurElement: Tt,
    SVGFEImageElement: Tt,
    SVGFEMergeElement: Tt,
    SVGFEMergeNodeElement: Tt,
    SVGFEMorphologyElement: Tt,
    SVGFEOffsetElement: Tt,
    SVGFEPointLightElement: Tt,
    SVGFESpecularLightingElement: Tt,
    SVGFESpotLightElement: Tt,
    SVGFETileElement: Tt,
    SVGFETurbulenceElement: Tt,
    SVGFilterElement: Tt,
    SVGForeignObjectElement: Tt,
    SVGGElement: Tt,
    SVGGeometryElement: Tt,
    SVGGradientElement: Tt,
    SVGGraphicsElement: Tt,
    SVGImageElement: Tt,
    SVGLength: Tt,
    SVGLengthList: Tt,
    SVGLinearGradientElement: Tt,
    SVGLineElement: Tt,
    SVGMarkerElement: Tt,
    SVGMaskElement: Tt,
    SVGMatrix: Tt,
    SVGMetadataElement: Tt,
    SVGMPathElement: Tt,
    SVGNumber: Tt,
    SVGNumberList: Tt,
    SVGPathElement: Tt,
    SVGPatternElement: Tt,
    SVGPoint: Tt,
    SVGPointList: Tt,
    SVGPolygonElement: Tt,
    SVGPolylineElement: Tt,
    SVGPreserveAspectRatio: Tt,
    SVGRadialGradientElement: Tt,
    SVGRect: Tt,
    SVGRectElement: Tt,
    SVGScriptElement: Tt,
    SVGSetElement: Tt,
    SVGStopElement: Tt,
    SVGStringList: Tt,
    SVGStyleElement: Tt,
    SVGSVGElement: Tt,
    SVGSwitchElement: Tt,
    SVGSymbolElement: Tt,
    SVGTextContentElement: Tt,
    SVGTextElement: Tt,
    SVGTextPathElement: Tt,
    SVGTextPositioningElement: Tt,
    SVGTitleElement: Tt,
    SVGTransform: Tt,
    SVGTransformList: Tt,
    SVGTSpanElement: Tt,
    SVGUnitTypes: Tt,
    SVGUseElement: Tt,
    SVGViewElement: Tt,
    TaskAttributionTiming: Tt,
    Text: Tt,
    TextEvent: Tt,
    TextMetrics: Tt,
    TextTrack: Tt,
    TextTrackCue: Tt,
    TextTrackCueList: Tt,
    TextTrackList: Tt,
    TimeRanges: Tt,
    toolbar: It,
    top: It,
    Touch: Tt,
    TouchEvent: Tt,
    TouchList: Tt,
    TrackEvent: Tt,
    TransitionEvent: Tt,
    TreeWalker: Tt,
    UIEvent: Tt,
    ValidityState: Tt,
    visualViewport: It,
    VisualViewport: Tt,
    VTTCue: Tt,
    WaveShaperNode: Tt,
    WebAssembly: It,
    WebGL2RenderingContext: Tt,
    WebGLActiveInfo: Tt,
    WebGLBuffer: Tt,
    WebGLContextEvent: Tt,
    WebGLFramebuffer: Tt,
    WebGLProgram: Tt,
    WebGLQuery: Tt,
    WebGLRenderbuffer: Tt,
    WebGLRenderingContext: Tt,
    WebGLSampler: Tt,
    WebGLShader: Tt,
    WebGLShaderPrecisionFormat: Tt,
    WebGLSync: Tt,
    WebGLTexture: Tt,
    WebGLTransformFeedback: Tt,
    WebGLUniformLocation: Tt,
    WebGLVertexArrayObject: Tt,
    WebSocket: Tt,
    WheelEvent: Tt,
    Window: Tt,
    Worker: Tt,
    WritableStream: Tt,
    XMLDocument: Tt,
    XMLHttpRequest: Tt,
    XMLHttpRequestEventTarget: Tt,
    XMLHttpRequestUpload: Tt,
    XMLSerializer: Tt,
    XPathEvaluator: Tt,
    XPathExpression: Tt,
    XPathResult: Tt,
    XSLTProcessor: Tt,
  }
for (const e of ['window', 'global', 'self', 'globalThis']) Ot[e] = Ot
function Dt(e) {
  let t = Ot
  for (const s of e) {
    if ('string' != typeof s) return null
    if (((t = t[s]), !t)) return null
  }
  return t[wt]
}
class Vt extends He {
  hasEffectsWhenAccessedAtPath(e) {
    return !(function (e) {
      return 1 === e.length
        ? 'undefined' === e[0] || null !== Dt(e)
        : null !== Dt(e.slice(0, -1))
    })([this.name, ...e])
  }
  hasEffectsWhenCalledAtPath(e) {
    return !(function (e) {
      const t = Dt(e)
      return null !== t && t.pure
    })([this.name, ...e])
  }
}
class Bt extends yt {
  constructor() {
    super(...arguments), (this.variable = null), (this.bound = !1)
  }
  addExportedVariables(e) {
    null !== this.variable && this.variable.exportName && e.push(this.variable)
  }
  bind() {
    this.bound ||
      ((this.bound = !0),
      null === this.variable &&
        (function e(t, s) {
          if ('MemberExpression' === t.type)
            return !t.computed && e(t.object, t)
          if ('Identifier' === t.type) {
            if (!s) return !0
            switch (s.type) {
              case 'MemberExpression':
                return s.computed || t === s.object
              case 'MethodDefinition':
                return s.computed
              case 'Property':
                return s.computed || t === s.value
              case 'ExportSpecifier':
              case 'ImportSpecifier':
                return t === s.local
              case 'LabeledStatement':
              case 'BreakStatement':
              case 'ContinueStatement':
                return !1
              default:
                return !0
            }
          }
          return !1
        })(this, this.parent) &&
        ((this.variable = this.scope.findVariable(this.name)),
        this.variable.addReference(this)),
      null !== this.variable &&
        this.variable instanceof pt &&
        null !== this.variable.additionalInitializers &&
        this.variable.consolidateInitializers())
  }
  declare(e, t) {
    let s
    switch (e) {
      case 'var':
        s = this.scope.addDeclaration(this, this.context, t, !0)
        break
      case 'function':
        s = this.scope.addDeclaration(this, this.context, t, 'function')
        break
      case 'let':
      case 'const':
      case 'class':
        s = this.scope.addDeclaration(this, this.context, t, !1)
        break
      case 'parameter':
        s = this.scope.addParameterDeclaration(this)
        break
      default:
        throw new Error(`Internal Error: Unexpected identifier kind ${e}.`)
    }
    return [(this.variable = s)]
  }
  deoptimizePath(e) {
    this.bound || this.bind(),
      0 !== e.length ||
        this.scope.contains(this.name) ||
        this.disallowImportReassignment(),
      this.variable.deoptimizePath(e)
  }
  getLiteralValueAtPath(e, t, s) {
    return (
      this.bound || this.bind(), this.variable.getLiteralValueAtPath(e, t, s)
    )
  }
  getReturnExpressionWhenCalledAtPath(e, t, s) {
    return (
      this.bound || this.bind(),
      this.variable.getReturnExpressionWhenCalledAtPath(e, t, s)
    )
  }
  hasEffects() {
    return (
      this.context.unknownGlobalSideEffects &&
      this.variable instanceof Vt &&
      this.variable.hasEffectsWhenAccessedAtPath(Z)
    )
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return (
      null !== this.variable && this.variable.hasEffectsWhenAccessedAtPath(e, t)
    )
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return !this.variable || this.variable.hasEffectsWhenAssignedAtPath(e, t)
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return !this.variable || this.variable.hasEffectsWhenCalledAtPath(e, t, s)
  }
  include(e) {
    this.included ||
      ((this.included = !0),
      null !== this.variable && this.context.includeVariable(e, this.variable))
  }
  includeCallArguments(e, t) {
    this.variable.includeCallArguments(e, t)
  }
  render(
    e,
    t,
    {
      renderedParentType: s,
      isCalleeOfRenderedParent: i,
      isShorthandProperty: n,
    } = Pt
  ) {
    if (this.variable) {
      const t = this.variable.getName()
      t !== this.name &&
        (e.overwrite(this.start, this.end, t, {
          contentOnly: !0,
          storeName: !0,
        }),
        n && e.prependRight(this.start, `${this.name}: `)),
        'eval' === t &&
          'CallExpression' === s &&
          i &&
          e.appendRight(this.start, '0, ')
    }
  }
  disallowImportReassignment() {
    return this.context.error(
      {
        code: 'ILLEGAL_REASSIGNMENT',
        message: `Illegal reassignment to import '${this.name}'`,
      },
      this.start
    )
  }
}
class Ft extends yt {
  constructor() {
    super(...arguments), (this.declarationInit = null)
  }
  addExportedVariables(e) {
    this.argument.addExportedVariables(e)
  }
  bind() {
    super.bind(),
      null !== this.declarationInit &&
        this.declarationInit.deoptimizePath([J, J])
  }
  declare(e, t) {
    return (this.declarationInit = t), this.argument.declare(e, be)
  }
  deoptimizePath(e) {
    0 === e.length && this.argument.deoptimizePath(Z)
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return e.length > 0 || this.argument.hasEffectsWhenAssignedAtPath(Z, t)
  }
}
class Wt extends yt {
  constructor() {
    super(...arguments), (this.isPrototypeDeoptimized = !1)
  }
  createScope(e) {
    this.scope = new kt(e, this.context)
  }
  deoptimizePath(e) {
    1 === e.length &&
      ('prototype' === e[0]
        ? (this.isPrototypeDeoptimized = !0)
        : e[0] === J &&
          ((this.isPrototypeDeoptimized = !0),
          this.scope.getReturnExpression().deoptimizePath(ee)))
  }
  getReturnExpressionWhenCalledAtPath(e) {
    return 0 === e.length ? this.scope.getReturnExpression() : be
  }
  hasEffects() {
    return null !== this.id && this.id.hasEffects()
  }
  hasEffectsWhenAccessedAtPath(e) {
    return (
      !(e.length <= 1) &&
      (e.length > 2 || 'prototype' !== e[0] || this.isPrototypeDeoptimized)
    )
  }
  hasEffectsWhenAssignedAtPath(e) {
    return (
      !(e.length <= 1) &&
      (e.length > 2 || 'prototype' !== e[0] || this.isPrototypeDeoptimized)
    )
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    if (e.length > 0) return !0
    for (const e of this.params) if (e.hasEffects(s)) return !0
    const i = s.replacedVariableInits.get(this.scope.thisVariable)
    s.replacedVariableInits.set(
      this.scope.thisVariable,
      t.withNew ? new Ve() : be
    )
    const { brokenFlow: n, ignore: r } = s
    return (
      (s.ignore = {
        breaks: !1,
        continues: !1,
        labels: new Set(),
        returnAwaitYield: !0,
      }),
      !!this.body.hasEffects(s) ||
        ((s.brokenFlow = n),
        i
          ? s.replacedVariableInits.set(this.scope.thisVariable, i)
          : s.replacedVariableInits.delete(this.scope.thisVariable),
        (s.ignore = r),
        !1)
    )
  }
  include(e, t) {
    ;(this.included = !0), this.id && this.id.include(e)
    const s = this.scope.argumentsVariable.included
    for (const i of this.params) (i instanceof Bt && !s) || i.include(e, t)
    const { brokenFlow: i } = e
    ;(e.brokenFlow = 0), this.body.include(e, t), (e.brokenFlow = i)
  }
  includeCallArguments(e, t) {
    this.scope.includeCallArguments(e, t)
  }
  initialise() {
    null !== this.id && this.id.declare('function', this),
      this.scope.addParameterVariables(
        this.params.map((e) => e.declare('parameter', be)),
        this.params[this.params.length - 1] instanceof Ft
      ),
      this.body.addImplicitReturnExpressionToScope()
  }
  parseNode(e) {
    ;(this.body = new this.context.nodeConstructors.BlockStatement(
      e.body,
      this,
      this.scope.hoistedBodyVarScope
    )),
      super.parseNode(e)
  }
}
Wt.prototype.preventChildBlockScope = !0
class Ut extends Wt {
  initialise() {
    super.initialise(), null !== this.id && (this.id.variable.isId = !0)
  }
  parseNode(e) {
    null !== e.id &&
      (this.id = new this.context.nodeConstructors.Identifier(
        e.id,
        this,
        this.scope.parent
      )),
      super.parseNode(e)
  }
}
const jt = /\s/
class zt extends yt {
  include(e, t) {
    super.include(e, t), t && this.context.includeVariable(e, this.variable)
  }
  initialise() {
    const e = this.declaration
    ;(this.declarationName = (e.id && e.id.name) || this.declaration.name),
      (this.variable = this.scope.addExportDefaultDeclaration(
        this.declarationName || this.context.getModuleName(),
        this,
        this.context
      )),
      this.context.addExport(this)
  }
  render(e, t, s) {
    const { start: i, end: n } = s,
      r = (function (e, t = 0) {
        for (t = le(e, 'default', t) + 7; jt.test(e[t]); ) t++
        return t
      })(e.original, this.start)
    if (this.declaration instanceof Ut)
      this.renderNamedDeclaration(
        e,
        r,
        'function',
        null === this.declaration.id,
        t
      )
    else if (this.declaration instanceof bt)
      this.renderNamedDeclaration(
        e,
        r,
        'class',
        null === this.declaration.id,
        t
      )
    else {
      if (this.variable.getOriginalVariable() !== this.variable)
        return void ('system' === t.format && this.variable.exportName
          ? e.overwrite(
              i,
              n,
              `exports('${
                this.variable.exportName
              }', ${this.variable.getName()});`
            )
          : ae(this, e, i, n))
      if (!this.variable.included)
        return (
          e.remove(this.start, r),
          this.declaration.render(e, t, {
            isCalleeOfRenderedParent: !1,
            renderedParentType: 'ExpressionStatement',
          }),
          void (';' !== e.original[this.end - 1] && e.appendLeft(this.end, ';'))
        )
      this.renderVariableDeclaration(e, r, t)
    }
    this.declaration.render(e, t)
  }
  renderNamedDeclaration(e, t, s, i, n) {
    const r = this.variable.getName()
    e.remove(this.start, t),
      i &&
        e.appendLeft(
          (function (e, t, s = 0) {
            const i = le(e, t, s) + t.length
            e = e.slice(i, le(e, '{', i))
            const n = le(e, '*')
            return -1 === n ? i : i + n + 1
          })(e.original, s, t),
          ` ${r}`
        ),
      'system' === n.format &&
        this.declaration instanceof bt &&
        this.variable.exportName &&
        e.appendLeft(this.end, ` exports('${this.variable.exportName}', ${r});`)
  }
  renderVariableDeclaration(e, t, s) {
    const i =
      'system' === s.format && this.variable.exportName
        ? `exports('${this.variable.exportName}', `
        : ''
    e.overwrite(
      this.start,
      t,
      `${s.varOrConst} ${this.variable.getName()} = ${i}`
    )
    const n = 59 === e.original.charCodeAt(this.end - 1)
    i
      ? e.appendRight(n ? this.end - 1 : this.end, ')' + (n ? '' : ';'))
      : n || e.appendLeft(this.end, ';')
  }
}
zt.prototype.needsBoundaries = !0
class Gt extends pt {
  constructor(e, t, s) {
    super(e, t, t.declaration, s),
      (this.hasId = !1),
      (this.originalId = null),
      (this.originalVariable = null)
    const i = t.declaration
    ;(i instanceof Ut || i instanceof bt) && i.id
      ? ((this.hasId = !0), (this.originalId = i.id))
      : i instanceof Bt && (this.originalId = i)
  }
  addReference(e) {
    this.hasId || (this.name = e.name)
  }
  getAssignedVariableName() {
    return (this.originalId && this.originalId.name) || null
  }
  getBaseVariableName() {
    const e = this.getOriginalVariable()
    return e === this ? super.getBaseVariableName() : e.getBaseVariableName()
  }
  getName() {
    const e = this.getOriginalVariable()
    return e === this ? super.getName() : e.getName()
  }
  getOriginalVariable() {
    if (null === this.originalVariable)
      if (
        !this.originalId ||
        (!this.hasId && this.originalId.variable.isReassigned)
      )
        this.originalVariable = this
      else {
        const e = this.originalId.variable
        this.originalVariable = e instanceof Gt ? e.getOriginalVariable() : e
      }
    return this.originalVariable
  }
  setRenderNames(e, t) {
    const s = this.getOriginalVariable()
    s === this ? super.setRenderNames(e, t) : s.setRenderNames(e, t)
  }
  setSafeName(e) {
    const t = this.getOriginalVariable()
    t === this ? super.setSafeName(e) : t.setSafeName(e)
  }
}
class Ht extends He {
  constructor(e) {
    super('_missingExportShim'), (this.module = e)
  }
}
class qt extends He {
  constructor(e, t) {
    super(e.getModuleName()),
      (this.memberVariables = Object.create(null)),
      (this.containsExternalNamespace = !1),
      (this.referencedEarly = !1),
      (this.references = []),
      (this.context = e),
      (this.module = e.module),
      (this.syntheticNamedExports = t)
  }
  addReference(e) {
    this.references.push(e), (this.name = e.name)
  }
  deoptimizePath() {
    for (const e in this.memberVariables)
      this.memberVariables[e].deoptimizePath(ee)
  }
  include(e) {
    if (!this.included) {
      if (this.containsExternalNamespace)
        return this.context.error({
          code: 'NAMESPACE_CANNOT_CONTAIN_EXTERNAL',
          id: this.module.id,
          message: `Cannot create an explicit namespace object for module "${this.context.getModuleName()}" because it contains a reexported external namespace`,
        })
      this.included = !0
      for (const e of this.references)
        if (
          e.context.getModuleExecIndex() <= this.context.getModuleExecIndex()
        ) {
          this.referencedEarly = !0
          break
        }
      if (this.context.preserveModules)
        for (const t of Object.keys(this.memberVariables))
          this.memberVariables[t].include(e)
      else
        for (const t of Object.keys(this.memberVariables))
          this.context.includeVariable(e, this.memberVariables[t])
    }
  }
  initialise() {
    for (const e of this.context
      .getExports()
      .concat(this.context.getReexports()))
      '*' === e[0] && e.length > 1 && (this.containsExternalNamespace = !0),
        (this.memberVariables[e] = this.context.traceExport(e))
  }
  renderBlock(e) {
    const t = e.compact ? '' : ' ',
      s = e.compact ? '' : '\n',
      i = e.indent,
      n = Object.keys(this.memberVariables).map((s) => {
        const n = this.memberVariables[s]
        if (this.referencedEarly || n.isReassigned)
          return `${i}get ${s}${t}()${t}{${t}return ${n.getName()}${
            e.compact ? '' : ';'
          }${t}}`
        const r = me[s] ? `'${s}'` : s
        return `${i}${r}: ${n.getName()}`
      })
    n.unshift(`${i}__proto__:${t}null`),
      e.namespaceToStringTag &&
        n.unshift(`${i}[Symbol.toStringTag]:${t}'Module'`)
    const r = this.getName()
    let a = `{${s}${n.join(`,${s}`)}${s}}`
    return (
      this.syntheticNamedExports &&
        (a = `/*#__PURE__*/Object.assign(${a}, ${this.module
          .getDefaultExport()
          .getName()})`),
      e.freeze && (a = `/*#__PURE__*/Object.freeze(${a})`),
      (a = `${e.varOrConst} ${r}${t}=${t}${a};`),
      'system' === e.format &&
        this.exportName &&
        (a += `${s}exports('${this.exportName}',${t}${r});`),
      a
    )
  }
  renderFirst() {
    return this.referencedEarly
  }
}
qt.prototype.isNamespace = !0
const Kt = "Object.defineProperty(exports, '__esModule', { value: true });",
  Yt = "Object.defineProperty(exports,'__esModule',{value:true});"
function Xt(e, t, s, i, n, r, a = 'return ') {
  const o = n ? '' : ' ',
    h = n ? '' : '\n'
  if (!s) {
    let s
    if (e.length > 0) s = e[0].local
    else
      for (const e of t)
        if (e.reexports) {
          const t = e.reexports[0]
          s =
            e.namedExportsMode && '*' !== t.imported && 'default' !== t.imported
              ? `${e.name}.${t.imported}`
              : e.name
          break
        }
    return `${a}${s};`
  }
  let l = ''
  for (const { name: e, reexports: i } of t)
    if (i && s)
      for (const t of i)
        '*' === t.reexported &&
          (l && (l += h),
          t.needsLiveBinding
            ? (l +=
                `Object.keys(${e}).forEach(function${o}(k)${o}{${h}` +
                `${r}if${o}(k${o}!==${o}'default')${o}Object.defineProperty(exports,${o}k,${o}{${h}` +
                `${r}${r}enumerable:${o}true,${h}` +
                `${r}${r}get:${o}function${o}()${o}{${h}` +
                `${r}${r}${r}return ${e}[k];${h}` +
                `${r}${r}}${h}${r}});${h}});`)
            : (l +=
                `Object.keys(${e}).forEach(function${o}(k)${o}{${h}` +
                `${r}if${o}(k${o}!==${o}'default')${o}exports[k]${o}=${o}${e}[k];${h}});`))
  for (const {
    name: e,
    imports: n,
    reexports: a,
    isChunk: c,
    namedExportsMode: u,
    exportsNames: d,
  } of t)
    if (a && s)
      for (const t of a)
        if ('default' !== t.imported || c)
          if ('*' !== t.imported) {
            l && (l += h)
            const s = 'default' !== t.imported || u ? `${e}.${t.imported}` : e
            l += t.needsLiveBinding
              ? `Object.defineProperty(exports,${o}'${t.reexported}',${o}{${h}` +
                `${r}enumerable:${o}true,${h}` +
                `${r}get:${o}function${o}()${o}{${h}` +
                `${r}${r}return ${s};${h}${r}}${h}});`
              : `exports.${t.reexported}${o}=${o}${s};`
          } else
            '*' !== t.reexported &&
              (l && (l += h), (l += `exports.${t.reexported}${o}=${o}${e};`))
        else
          l && (l += h),
            d &&
            (a.some((e) =>
              'default' === e.imported
                ? 'default' === e.reexported
                : '*' !== e.imported
            ) ||
              (n && n.some((e) => 'default' !== e.imported)))
              ? (l += `exports.${t.reexported}${o}=${o}${e}${
                  !1 !== i ? '__default' : '.default'
                };`)
              : (l += `exports.${t.reexported}${o}=${o}${e};`)
  for (const t of e) {
    const e = `exports.${t.exported}`,
      s = t.local
    e !== s && (l && (l += h), (l += `${e}${o}=${o}${s};`))
  }
  return l
}
function Qt(e, t, s) {
  const i = t.compact ? '' : ' '
  return e
    .map(
      ({ name: e, exportsNames: n, exportsDefault: r, namedExportsMode: a }) =>
        a && r && !1 !== t.interop
          ? n
            ? `${s} ${e}__default${i}=${i}'default'${i}in ${e}${i}?` +
              `${i}${e}['default']${i}:${i}${e};`
            : `${e}${i}=${i}${e}${i}&&${i}Object.prototype.hasOwnProperty.call(${e},${i}'default')${i}?` +
              `${i}${e}['default']${i}:${i}${e};`
          : null
    )
    .filter(Boolean)
    .join(t.compact ? '' : '\n')
}
function Jt(e, t, s, i) {
  return (
    `${i}var d${e}=${e}Object.getOwnPropertyDescriptor(e,${e}k);${t}` +
    `${i}Object.defineProperty(n,${e}k,${e}d.get${e}?${e}d${e}:${e}{${t}` +
    `${i}${s}enumerable:${e}true,${t}` +
    `${i}${s}get:${e}function${e}()${e}{${t}` +
    `${i}${s}${s}return e[k];${t}` +
    `${i}${s}}${t}` +
    `${i}});${t}`
  )
}
function Zt(e, t, s, i) {
  return `${i}n[k]${e}=e${e}[k];${t}`
}
function es(e, t, s, i) {
  return (
    `function _interopNamespace(e)${e}{${t}` +
    `${s}if${e}(e${e}&&${e}e.__esModule)${e}{${e}return e;${e}}${e}else${e}{${t}` +
    `${s}${s}var n${e}=${e}{};${t}` +
    `${s}${s}if${e}(e)${e}{${t}` +
    `${s}${s}${s}Object.keys(e).forEach(function${e}(k)${e}{${t}` +
    (i ? Jt : Zt)(e, t, s, s + s + s + s) +
    `${s}${s}${s}});${t}` +
    `${s}${s}}${t}` +
    `${s}${s}n['default']${e}=${e}e;${t}` +
    `${s}${s}return n;${t}` +
    `${s}}${t}` +
    `}${t}${t}`
  )
}
const ts = {
  assert: !0,
  buffer: !0,
  console: !0,
  constants: !0,
  domain: !0,
  events: !0,
  http: !0,
  https: !0,
  os: !0,
  path: !0,
  process: !0,
  punycode: !0,
  querystring: !0,
  stream: !0,
  string_decoder: !0,
  timers: !0,
  tty: !0,
  url: !0,
  util: !0,
  vm: !0,
  zlib: !0,
}
function ss(e, t) {
  const s = t.map(({ id: e }) => e).filter((e) => e in ts)
  s.length &&
    e({
      code: 'MISSING_NODE_BUILTINS',
      message: `Creating a browser bundle that depends on Node.js built-in ${
        1 === s.length
          ? `module ('${s[0]}')`
          : `modules (${s
              .slice(0, -1)
              .map((e) => `'${e}'`)
              .join(', ')} and '${s.slice(-1)}')`
      }. You might need to include https://www.npmjs.com/package/rollup-plugin-node-builtins`,
      modules: s,
    })
}
function is(e) {
  return e.replace(/^\t+/, (e) => e.split('\t').join('  '))
}
function ns(e, t, s) {
  let i = e.split('\n')
  const n = Math.max(0, t - 3)
  let r = Math.min(t + 2, i.length)
  for (i = i.slice(n, r); !/\S/.test(i[i.length - 1]); ) i.pop(), (r -= 1)
  const a = String(r).length
  return i
    .map((e, i) => {
      const r = n + i + 1 === t
      let o = String(i + n + 1)
      for (; o.length < a; ) o = ` ${o}`
      if (r) {
        const t =
          (function (e) {
            let t = ''
            for (; e--; ) t += ' '
            return t
          })(a + 2 + is(e.slice(0, s)).length) + '^'
        return `${o}: ${is(e)}\n${t}`
      }
      return `${o}: ${is(e)}`
    })
    .join('\n')
}
function rs(e) {
  return e.replace(/[\0?*]/g, '_')
}
function as(e) {
  const t = at(e)
  return t.substr(0, t.length - ht(e).length)
}
function os(e) {
  return 'undefined' != typeof process && it(e) ? lt(process.cwd(), e) : e
}
function hs(e) {
  return (
    '/' !== e[0] &&
    !('.' === e[0] && ('/' === e[1] || '.' === e[1])) &&
    rs(e) === e
  )
}
function ls(e, t) {
  throw (
    (e instanceof Error || (e = Object.assign(new Error(e.message), e)),
    t && Object.assign(e, t),
    e)
  )
}
function cs(e, t, s, i) {
  if ('object' == typeof t) {
    const { line: s, column: n } = t
    e.loc = { file: i, line: s, column: n }
  } else {
    e.pos = t
    const { line: n, column: r } = gt(s, t, { offsetLine: 1 })
    e.loc = { file: i, line: n, column: r }
  }
  if (void 0 === e.frame) {
    const { line: t, column: i } = e.loc
    e.frame = ns(s, t, i)
  }
}
var us
function ds(e) {
  return Object.assign(
    { code: us.DEPRECATED_FEATURE },
    'string' == typeof e ? { message: e } : e
  )
}
function ps(e, t, s) {
  return {
    code: 'INVALID_EXPORT_OPTION',
    message: `"${e}" was specified for "output.exports", but entry module "${os(
      s
    )}" has the following exports: ${t.join(', ')}`,
  }
}
function fs(e, t, s) {
  return {
    code: us.NAMESPACE_CONFLICT,
    message: `Conflicting namespaces: ${os(
      t.id
    )} re-exports '${e}' from both ${os(t.exportsAll[e])} and ${os(
      s.exportsAll[e]
    )} (will be ignored)`,
    name: e,
    reexporter: t.id,
    sources: [t.exportsAll[e], s.exportsAll[e]],
  }
}
function ms(e) {
  return { code: us.VALIDATION_ERROR, message: e }
}
!(function (e) {
  ;(e.ASSET_NOT_FINALISED = 'ASSET_NOT_FINALISED'),
    (e.ASSET_NOT_FOUND = 'ASSET_NOT_FOUND'),
    (e.ASSET_SOURCE_ALREADY_SET = 'ASSET_SOURCE_ALREADY_SET'),
    (e.ASSET_SOURCE_MISSING = 'ASSET_SOURCE_MISSING'),
    (e.BAD_LOADER = 'BAD_LOADER'),
    (e.CANNOT_EMIT_FROM_OPTIONS_HOOK = 'CANNOT_EMIT_FROM_OPTIONS_HOOK'),
    (e.CHUNK_NOT_GENERATED = 'CHUNK_NOT_GENERATED'),
    (e.DEPRECATED_FEATURE = 'DEPRECATED_FEATURE'),
    (e.FILE_NOT_FOUND = 'FILE_NOT_FOUND'),
    (e.FILE_NAME_CONFLICT = 'FILE_NAME_CONFLICT'),
    (e.INPUT_HOOK_IN_OUTPUT_PLUGIN = 'INPUT_HOOK_IN_OUTPUT_PLUGIN'),
    (e.INVALID_CHUNK = 'INVALID_CHUNK'),
    (e.INVALID_EXPORT_OPTION = 'INVALID_EXPORT_OPTION'),
    (e.INVALID_EXTERNAL_ID = 'INVALID_EXTERNAL_ID'),
    (e.INVALID_OPTION = 'INVALID_OPTION'),
    (e.INVALID_PLUGIN_HOOK = 'INVALID_PLUGIN_HOOK'),
    (e.INVALID_ROLLUP_PHASE = 'INVALID_ROLLUP_PHASE'),
    (e.MIXED_EXPORTS = 'MIXED_EXPORTS'),
    (e.NAMESPACE_CONFLICT = 'NAMESPACE_CONFLICT'),
    (e.PLUGIN_ERROR = 'PLUGIN_ERROR'),
    (e.UNRESOLVED_ENTRY = 'UNRESOLVED_ENTRY'),
    (e.UNRESOLVED_IMPORT = 'UNRESOLVED_IMPORT'),
    (e.VALIDATION_ERROR = 'VALIDATION_ERROR'),
    (e.EXTERNAL_SYNTHETIC_EXPORTS = 'EXTERNAL_SYNTHETIC_EXPORTS'),
    (e.SYNTHETIC_NAMED_EXPORTS_NEED_DEFAULT =
      'SYNTHETIC_NAMED_EXPORTS_NEED_DEFAULT')
})(us || (us = {}))
const gs = /^[a-zA-Z$_][a-zA-Z0-9$_]*$/
function xs(e) {
  return gs.test(e) ? `.${e}` : `['${e}']`
}
function ys(e) {
  return e.split('.').map(xs).join('')
}
function Es(e, t, s, i, n) {
  const r = i ? '' : ' ',
    a = e.split('.')
  s && (a[0] = ('function' == typeof s ? s(a[0]) : s[a[0]]) || a[0])
  const o = a.pop()
  let h = t,
    l = a
      .map((e) => ((h += xs(e)), `${h}${r}=${r}${h}${r}||${r}{}`))
      .concat(`${h}${xs(o)}`)
      .join(`,${r}`)
      .concat(`${r}=${r}${n}`)
  return a.length > 0 && (l = `(${l})`), l
}
function bs(e) {
  let t = e.length
  for (; t--; ) {
    const s = e[t]
    if (s.exportsDefault || s.exportsNames) return e.slice(0, t + 1)
  }
  return []
}
const vs = (e) => `this${ys(e)}`
function Ss({ dependencies: e, exports: t }) {
  const s = new Set(t.map((e) => e.exported))
  s.has('default') || s.add('default')
  for (const { reexports: t } of e)
    if (t)
      for (const e of t)
        '*' === e.imported || s.has(e.reexported) || s.add(e.reexported)
  return s
}
function As(e, t, s, i) {
  return 0 === e.length
    ? ''
    : 1 === e.length
    ? `${s}${s}${s}exports('${e[0].name}',${t}${e[0].value});${i}${i}`
    : `${s}${s}${s}exports({${i}` +
      e
        .map(({ name: e, value: i }) => `${s}${s}${s}${s}${e}:${t}${i}`)
        .join(`,${i}`) +
      `${i}${s}${s}${s}});${i}${i}`
}
function Cs(e, t) {
  return e ? `${t}${ys(e)}` : 'null'
}
var ks = {
  system: function (
    e,
    {
      accessedGlobals: t,
      dependencies: s,
      exports: i,
      hasExports: n,
      indentString: r,
      intro: a,
      outro: o,
      usesTopLevelAwait: h,
      varOrConst: l,
    },
    c
  ) {
    const u = c.compact ? '' : '\n',
      d = c.compact ? '' : ' ',
      p = s.map((e) => `'${e.id}'`),
      f = []
    let m
    const g = []
    for (const { imports: e, reexports: t } of s) {
      const n = []
      if (e)
        for (const t of e)
          f.push(t.local),
            '*' === t.imported
              ? n.push(`${t.local}${d}=${d}module;`)
              : n.push(`${t.local}${d}=${d}module.${t.imported};`)
      if (t) {
        let e = !1
        if (
          t.length > 1 ||
          (1 === t.length && ('*' === t[0].reexported || '*' === t[0].imported))
        ) {
          for (const a of t)
            '*' === a.reexported &&
              (m || (m = Ss({ dependencies: s, exports: i })),
              e || (n.push(`${l} _setter${d}=${d}{};`), (e = !0)),
              n.push(`for${d}(var _$p${d}in${d}module)${d}{`),
              n.push(
                `${r}if${d}(!_starExcludes[_$p])${d}_setter[_$p]${d}=${d}module[_$p];`
              ),
              n.push('}'))
          for (const e of t)
            '*' === e.imported &&
              '*' !== e.reexported &&
              n.push(`exports('${e.reexported}',${d}module);`)
          for (const s of t)
            '*' !== s.reexported &&
              '*' !== s.imported &&
              (e || (n.push(`${l} _setter${d}=${d}{};`), (e = !0)),
              n.push(`_setter.${s.reexported}${d}=${d}module.${s.imported};`))
          e && n.push('exports(_setter);')
        } else
          for (const e of t)
            n.push(`exports('${e.reexported}',${d}module.${e.imported});`)
      }
      g.push(n.join(`${u}${r}${r}${r}`))
    }
    const x = c.name ? `'${c.name}',${d}` : '',
      y = t.has('module') ? `exports,${d}module` : n ? 'exports' : ''
    let E =
      `System.register(${x}[` +
      p.join(`,${d}`) +
      `],${d}function${d}(${y})${d}{${u}${r}${
        c.strict ? "'use strict';" : ''
      }` +
      ((e, t, s, i, n) =>
        e
          ? `${n}${i}${t} _starExcludes${s}=${s}{${s}${Array.from(e).join(
              `:${s}1,${s}`
            )}${e.size ? `:${s}1` : ''}${s}};`
          : '')(m, l, d, r, u) +
      ((e, t, s, i) => (e.length ? `${i}${s}var ${e.join(`,${t}`)};` : ''))(
        f,
        d,
        r,
        u
      ) +
      `${u}${r}return${d}{${
        g.length
          ? `${u}${r}${r}setters:${d}[${g
              .map((e) =>
                e
                  ? `function${d}(module)${d}{${u}${r}${r}${r}${e}${u}${r}${r}}`
                  : `function${d}()${d}{}`
              )
              .join(`,${d}`)}],`
          : ''
      }${u}`
    E +=
      `${r}${r}execute:${d}${h ? `async${d}` : ''}function${d}()${d}{${u}${u}` +
      ((e, t, s, i) =>
        As(
          e
            .filter((e) => e.hoisted || e.uninitialized)
            .map((e) => ({
              name: e.exported,
              value: e.uninitialized ? 'void 0' : e.local,
            })),
          t,
          s,
          i
        ))(i, d, r, u)
    const b =
      `${u}${u}` +
      ((e, t, s, i) =>
        As(
          e
            .filter((e) => '_missingExportShim' === e.local)
            .map((e) => ({ name: e.exported, value: '_missingExportShim' })),
          t,
          s,
          i
        ))(i, d, r, u) +
      `${r}${r}}${u}${r}}${c.compact ? '' : ';'}${u}});`
    return (
      a && e.prepend(a),
      o && e.append(o),
      e.indent(`${r}${r}${r}`).append(b).prepend(E)
    )
  },
  amd: function (
    e,
    {
      accessedGlobals: t,
      dependencies: s,
      exports: i,
      hasExports: n,
      indentString: r,
      intro: a,
      isEntryModuleFacade: o,
      namedExportsMode: h,
      outro: l,
      varOrConst: c,
      warn: u,
    },
    d
  ) {
    ss(u, s)
    const p = s.map((e) => {
        return `'${
          ((t = e.id), '.' === t[0] && t.endsWith('.js') ? t.slice(0, -3) : t)
        }'`
        var t
      }),
      f = s.map((e) => e.name),
      m = d.compact ? '' : '\n',
      g = d.compact ? '' : ' '
    h && n && (f.unshift('exports'), p.unshift("'exports'")),
      t.has('require') && (f.unshift('require'), p.unshift("'require'")),
      t.has('module') && (f.unshift('module'), p.unshift("'module'"))
    const x = d.amd || {},
      y =
        (x.id ? `'${x.id}',${g}` : '') +
        (p.length ? `[${p.join(`,${g}`)}],${g}` : ''),
      E = !1 !== d.strict ? `${g}'use strict';` : '',
      b = `${x.define || 'define'}(${y}function${g}(${f.join(
        `,${g}`
      )})${g}{${E}${m}${m}`,
      v = Qt(s, d, c)
    v && e.prepend(v + m + m),
      t.has('_interopNamespace') &&
        e.prepend(es(g, m, r, !1 !== d.externalLiveBindings)),
      a && e.prepend(a)
    const S = Xt(i, s, h, d.interop, d.compact, r)
    return (
      S && e.append(m + m + S),
      h && n && o && d.esModule && e.append(`${m}${m}${d.compact ? Yt : Kt}`),
      l && e.append(l),
      e
        .indent(r)
        .append(m + m + '});')
        .prepend(b)
    )
  },
  cjs: function (
    e,
    {
      accessedGlobals: t,
      dependencies: s,
      exports: i,
      hasExports: n,
      indentString: r,
      intro: a,
      isEntryModuleFacade: o,
      namedExportsMode: h,
      outro: l,
      varOrConst: c,
    },
    u
  ) {
    const d = u.compact ? '' : '\n',
      p = u.compact ? '' : ' '
    a =
      (!1 === u.strict ? a : `'use strict';${d}${d}${a}`) +
      (h && n && o && u.esModule ? `${u.compact ? Yt : Kt}${d}${d}` : '')
    let f = !1
    const m = !1 !== u.interop
    let g,
      x = !1
    g = ''
    for (const {
      id: e,
      namedExportsMode: t,
      isChunk: i,
      name: n,
      reexports: r,
      imports: a,
      exportsNames: o,
      exportsDefault: h,
    } of s)
      r || a
        ? ((g += u.compact && x ? ',' : `${g ? `;${d}` : ''}${c} `),
          (x = !0),
          m && !i && h && t
            ? ((f = !0),
              (g += o
                ? `${n}${p}=${p}require('${e}')${
                    u.compact ? ',' : `;\n${c} `
                  }${n}__default${p}=${p}_interopDefault(${n})`
                : `${n}${p}=${p}_interopDefault(require('${e}'))`))
            : (g += `${n}${p}=${p}require('${e}')`))
        : (g && (g += !u.compact || x ? `;${d}` : ','),
          (x = !1),
          (g += `require('${e}')`))
    if ((g && (g += ';'), f)) {
      const e = u.compact ? 'e' : 'ex'
      a +=
        `function _interopDefault${p}(${e})${p}{${p}return${p}` +
        `(${e}${p}&&${p}(typeof ${e}${p}===${p}'object')${p}&&${p}'default'${p}in ${e})${p}` +
        `?${p}${e}['default']${p}:${p}${e}${u.compact ? '' : '; '}}${d}${d}`
    }
    t.has('_interopNamespace') &&
      (a += es(p, d, r, !1 !== u.externalLiveBindings)),
      g && (a += g + d + d)
    const y = Xt(i, s, h, u.interop, u.compact, r, `module.exports${p}=${p}`)
    return e.prepend(a), y && e.append(d + d + y), l && e.append(l), e
  },
  es: function (e, { intro: t, outro: s, dependencies: i, exports: n }, r) {
    const a = r.compact ? '' : ' ',
      o = r.compact ? '' : '\n',
      h = (function (e, t) {
        const s = []
        for (const { id: i, reexports: n, imports: r, name: a } of e)
          if (n || r) {
            if (r) {
              let e = null,
                n = null
              const a = []
              for (const t of r)
                'default' === t.imported
                  ? (e = t)
                  : '*' === t.imported
                  ? (n = t)
                  : a.push(t)
              n && s.push(`import${t}*${t}as ${n.local} from${t}'${i}';`),
                e && 0 === a.length
                  ? s.push(`import ${e.local} from${t}'${i}';`)
                  : a.length > 0 &&
                    s.push(
                      `import ${e ? `${e.local},${t}` : ''}{${t}${a
                        .map((e) =>
                          e.imported === e.local
                            ? e.imported
                            : `${e.imported} as ${e.local}`
                        )
                        .join(`,${t}`)}${t}}${t}from${t}'${i}';`
                    )
            }
            if (n) {
              let e = null
              const o = [],
                h = []
              for (const t of n)
                '*' === t.reexported
                  ? (e = t)
                  : '*' === t.imported
                  ? o.push(t)
                  : h.push(t)
              if (
                (e && s.push(`export${t}*${t}from${t}'${i}';`), o.length > 0)
              ) {
                ;(r && r.some((e) => '*' === e.imported && e.local === a)) ||
                  s.push(`import${t}*${t}as ${a} from${t}'${i}';`)
                for (const e of o)
                  s.push(
                    `export${t}{${t}${
                      a === e.reexported ? a : `${a} as ${e.reexported}`
                    } };`
                  )
              }
              h.length > 0 &&
                s.push(
                  `export${t}{${t}${h
                    .map((e) =>
                      e.imported === e.reexported
                        ? e.imported
                        : `${e.imported} as ${e.reexported}`
                    )
                    .join(`,${t}`)}${t}}${t}from${t}'${i}';`
                )
            }
          } else s.push(`import${t}'${i}';`)
        return s
      })(i, a)
    h.length > 0 && (t += h.join(o) + o + o), t && e.prepend(t)
    const l = (function (e, t) {
      const s = [],
        i = []
      for (const t of e)
        'default' === t.exported
          ? s.push(`export default ${t.local};`)
          : i.push(
              t.exported === t.local ? t.local : `${t.local} as ${t.exported}`
            )
      i.length && s.push(`export${t}{${t}${i.join(`,${t}`)}${t}};`)
      return s
    })(n, a)
    return (
      l.length && e.append(o + o + l.join(o).trim()), s && e.append(s), e.trim()
    )
  },
  iife: function (
    e,
    {
      dependencies: t,
      exports: s,
      hasExports: i,
      indentString: n,
      intro: r,
      namedExportsMode: a,
      outro: o,
      varOrConst: h,
      warn: l,
    },
    c
  ) {
    const u = c.compact ? '' : ' ',
      d = c.compact ? '' : '\n',
      { extend: p, name: f } = c,
      m = f && -1 !== f.indexOf('.'),
      g = !p && !m
    if (f && g && (Ze((x = f)) || Qe.has(x) || Je.test(x)))
      return ls({
        code: 'ILLEGAL_IDENTIFIER_AS_NAME',
        message: `Given name "${f}" is not a legal JS identifier. If you need this, you can try "output.extend: true".`,
      })
    var x
    ss(l, t)
    const y = bs(t),
      E = y.map((e) => e.globalName || 'null'),
      b = y.map((e) => e.name)
    i &&
      !f &&
      l({
        code: 'MISSING_NAME_OPTION_FOR_IIFE_EXPORT',
        message:
          'If you do not supply "output.name", you may not be able to access the exports of an IIFE bundle.',
      }),
      a &&
        i &&
        (p
          ? (E.unshift(`${vs(f)}${u}=${u}${vs(f)}${u}||${u}{}`),
            b.unshift('exports'))
          : (E.unshift('{}'), b.unshift('exports')))
    const v = !1 !== c.strict ? `${n}'use strict';${d}${d}` : ''
    let S = `(function${u}(${b.join(`,${u}`)})${u}{${d}${v}`
    !i || (p && a) || !f || (S = (g ? `${h} ${f}` : vs(f)) + `${u}=${u}${S}`),
      m &&
        i &&
        (S =
          (function (e, t, s, i) {
            const n = e.split('.')
            s && (n[0] = ('function' == typeof s ? s(n[0]) : s[n[0]]) || n[0])
            const r = i ? '' : ' '
            n.pop()
            let a = t
            return (
              n
                .map(
                  (e) => (
                    (a += xs(e)), `${a}${r}=${r}${a}${r}||${r}{}${i ? '' : ';'}`
                  )
                )
                .join(i ? ',' : '\n') + (i && n.length ? ';' : '\n')
            )
          })(f, 'this', c.globals, c.compact) + S)
    let A = `${d}${d}}(${E.join(`,${u}`)}));`
    !p && a && i && (A = `${d}${d}${n}return exports;${A}`)
    const C = Qt(t, c, h)
    C && e.prepend(C + d + d), r && e.prepend(r)
    const k = Xt(s, t, a, c.interop, c.compact, n)
    return (
      k && e.append(d + d + k),
      o && e.append(o),
      e.indent(n).prepend(S).append(A)
    )
  },
  umd: function (
    e,
    {
      dependencies: t,
      exports: s,
      hasExports: i,
      indentString: n,
      intro: r,
      namedExportsMode: a,
      outro: o,
      varOrConst: h,
      warn: l,
    },
    c
  ) {
    const u = c.compact ? '' : ' ',
      d = c.compact ? '' : '\n',
      p = c.compact ? 'f' : 'factory',
      f = c.compact ? 'g' : 'global'
    if (i && !c.name)
      return ls({
        code: 'INVALID_OPTION',
        message: 'You must supply "output.name" for UMD bundles.',
      })
    ss(l, t)
    const m = t.map((e) => `'${e.id}'`),
      g = t.map((e) => `require('${e.id}')`),
      x = bs(t),
      y = x.map((e) => Cs(e.globalName, f)),
      E = x.map((e) => e.name)
    a &&
      (i || !0 === c.noConflict) &&
      (m.unshift("'exports'"),
      g.unshift('exports'),
      y.unshift(
        Es(
          c.name,
          f,
          c.globals,
          c.compact,
          `${c.extend ? `${Cs(c.name, f)}${u}||${u}` : ''}{}`
        )
      ),
      E.unshift('exports'))
    const b = c.amd || {},
      v =
        (b.id ? `'${b.id}',${u}` : '') +
        (m.length ? `[${m.join(`,${u}`)}],${u}` : ''),
      S = b.define || 'define',
      A = !a && i ? `module.exports${u}=${u}` : '',
      C = !1 !== c.strict ? `${u}'use strict';${d}` : ''
    let k
    if (!0 === c.noConflict) {
      const e = c.compact ? 'e' : 'exports'
      let t
      if (!a && i)
        t = `var ${e}${u}=${u}${Es(
          c.name,
          f,
          c.globals,
          c.compact,
          `${p}(${y.join(`,${u}`)})`
        )};`
      else if (a) {
        t =
          `var ${e}${u}=${u}${y.shift()};${d}` +
          `${n}${n}${p}(${[e].concat(y).join(`,${u}`)});`
      }
      k =
        `(function${u}()${u}{${d}` +
        `${n}${n}var current${u}=${u}${(function (e, t, s) {
          const i = e.split('.')
          let n = t
          return i.map((e) => ((n += xs(e)), n)).join(`${s}&&${s}`)
        })(c.name, f, u)};${d}` +
        `${n}${n}${t}${d}` +
        `${n}${n}${e}.noConflict${u}=${u}function${u}()${u}{${u}` +
        `${Cs(c.name, f)}${u}=${u}current;${u}return ${e}${
          c.compact ? '' : '; '
        }};${d}` +
        `${n}}())`
    } else
      (k = `${p}(${y.join(`,${u}`)})`),
        !a && i && (k = Es(c.name, f, c.globals, c.compact, k))
    const P = i || (!0 === c.noConflict && a) || y.length > 0,
      w = P ? `this,${u}` : '',
      N = P ? `(${f}${u}=${u}${f}${u}||${u}self,${u}` : '',
      _ = P ? ')' : '',
      I =
        `(function${u}(${P ? `${f},${u}` : ''}${p})${u}{${d}` +
        (P
          ? `${n}typeof exports${u}===${u}'object'${u}&&${u}typeof module${u}!==${u}'undefined'${u}?` +
            `${u}${A}${p}(${g.join(`,${u}`)})${u}:${d}`
          : '') +
        `${n}typeof ${S}${u}===${u}'function'${u}&&${u}${S}.amd${u}?${u}${S}(${v}${p})${u}:${d}` +
        `${n}${N}${k}${_};${d}` +
        `}(${w}(function${u}(${E.join(', ')})${u}{${C}${d}`,
      $ = d + d + '})));',
      T = Qt(t, c, h)
    T && e.prepend(T + d + d), r && e.prepend(r)
    const L = Xt(s, t, a, c.interop, c.compact, n)
    return (
      L && e.append(d + d + L),
      a && i && c.esModule && e.append(d + d + (c.compact ? Yt : Kt)),
      o && e.append(o),
      e.trim().indent(n).append($).prepend(I)
    )
  },
}
const Ps = {
    ArrayPattern(e, t) {
      for (const s of t.elements) s && Ps[s.type](e, s)
    },
    AssignmentPattern(e, t) {
      Ps[t.left.type](e, t.left)
    },
    Identifier(e, t) {
      e.push(t.name)
    },
    MemberExpression() {},
    ObjectPattern(e, t) {
      for (const s of t.properties)
        'RestElement' === s.type
          ? Ps.RestElement(e, s)
          : Ps[s.value.type](e, s.value)
    },
    RestElement(e, t) {
      Ps[t.argument.type](e, t.argument)
    },
  },
  ws = function (e) {
    const t = []
    return Ps[e.type](t, e), t
  }
class Ns extends yt {
  hasEffects() {
    return !1
  }
  initialise() {
    this.context.addExport(this)
  }
  render(e, t, s) {
    e.remove(s.start, s.end)
  }
}
Ns.prototype.needsBoundaries = !0
class _s extends mt {
  addDeclaration(e, t, s = null, i) {
    return i
      ? this.parent.addDeclaration(e, t, 'function' === i ? s : be, i)
      : super.addDeclaration(e, t, s, !1)
  }
}
class Is extends yt {
  initialise() {
    this.directive &&
      'use strict' !== this.directive &&
      'Program' === this.parent.type &&
      this.context.warn(
        {
          code: 'MODULE_LEVEL_DIRECTIVE',
          message: `Module level directives cause errors when bundled, '${this.directive}' was ignored.`,
        },
        this.start
      )
  }
  render(e, t) {
    super.render(e, t), this.included && this.insertSemicolon(e)
  }
  shouldBeIncluded(e) {
    return this.directive && 'use strict' !== this.directive
      ? 'Program' !== this.parent.type
      : super.shouldBeIncluded(e)
  }
}
class $s extends yt {
  constructor() {
    super(...arguments), (this.directlyIncluded = !1)
  }
  addImplicitReturnExpressionToScope() {
    const e = this.body[this.body.length - 1]
    ;(e && 'ReturnStatement' === e.type) || this.scope.addReturnExpression(be)
  }
  createScope(e) {
    this.scope = this.parent.preventChildBlockScope ? e : new _s(e)
  }
  hasEffects(e) {
    if (this.deoptimizeBody) return !0
    for (const t of this.body) {
      if (t.hasEffects(e)) return !0
      if (e.brokenFlow) break
    }
    return !1
  }
  include(e, t) {
    if (!this.deoptimizeBody || !this.directlyIncluded) {
      ;(this.included = !0),
        (this.directlyIncluded = !0),
        this.deoptimizeBody && (t = !0)
      for (const s of this.body) (t || s.shouldBeIncluded(e)) && s.include(e, t)
    }
  }
  initialise() {
    const e = this.body[0]
    this.deoptimizeBody = e instanceof Is && 'use asm' === e.directive
  }
  render(e, t) {
    this.body.length
      ? ue(this.body, e, this.start + 1, this.end - 1, t)
      : super.render(e, t)
  }
}
class Ts extends yt {
  createScope(e) {
    this.scope = new Ct(e, this.context)
  }
  deoptimizePath(e) {
    1 === e.length &&
      e[0] === J &&
      this.scope.getReturnExpression().deoptimizePath(ee)
  }
  getReturnExpressionWhenCalledAtPath(e) {
    return 0 === e.length ? this.scope.getReturnExpression() : be
  }
  hasEffects() {
    return !1
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > 1
  }
  hasEffectsWhenAssignedAtPath(e) {
    return e.length > 1
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    if (e.length > 0) return !0
    for (const e of this.params) if (e.hasEffects(s)) return !0
    const { ignore: i, brokenFlow: n } = s
    return (
      (s.ignore = {
        breaks: !1,
        continues: !1,
        labels: new Set(),
        returnAwaitYield: !0,
      }),
      !!this.body.hasEffects(s) || ((s.ignore = i), (s.brokenFlow = n), !1)
    )
  }
  include(e, t) {
    this.included = !0
    for (const s of this.params) s instanceof Bt || s.include(e, t)
    const { brokenFlow: s } = e
    ;(e.brokenFlow = 0), this.body.include(e, t), (e.brokenFlow = s)
  }
  includeCallArguments(e, t) {
    this.scope.includeCallArguments(e, t)
  }
  initialise() {
    this.scope.addParameterVariables(
      this.params.map((e) => e.declare('parameter', be)),
      this.params[this.params.length - 1] instanceof Ft
    ),
      this.body instanceof $s
        ? this.body.addImplicitReturnExpressionToScope()
        : this.scope.addReturnExpression(this.body)
  }
  parseNode(e) {
    'BlockStatement' === e.body.type &&
      (this.body = new this.context.nodeConstructors.BlockStatement(
        e.body,
        this,
        this.scope.hoistedBodyVarScope
      )),
      super.parseNode(e)
  }
}
function Ls(e) {
  return 1 === e.length
    ? `exports('${e[0].safeExportName || e[0].exportName}', ${e[0].getName()});`
    : `exports({${e
        .map((e) => `${e.safeExportName || e.exportName}: ${e.getName()}`)
        .join(', ')}});`
}
Ts.prototype.preventChildBlockScope = !0
const Rs = {
  '!=': (e, t) => e != t,
  '!==': (e, t) => e !== t,
  '%': (e, t) => e % t,
  '&': (e, t) => e & t,
  '*': (e, t) => e * t,
  '**': (e, t) => Math.pow(e, t),
  '+': (e, t) => e + t,
  '-': (e, t) => e - t,
  '/': (e, t) => e / t,
  '<': (e, t) => e < t,
  '<<': (e, t) => e << t,
  '<=': (e, t) => e <= t,
  '==': (e, t) => e == t,
  '===': (e, t) => e === t,
  '>': (e, t) => e > t,
  '>=': (e, t) => e >= t,
  '>>': (e, t) => e >> t,
  '>>>': (e, t) => e >>> t,
  '^': (e, t) => e ^ t,
  in: () => Ee,
  instanceof: () => Ee,
  '|': (e, t) => e | t,
}
class Ms extends yt {
  getLiteralValueAtPath(e) {
    return e.length > 0 ||
      (null === this.value &&
        110 !== this.context.code.charCodeAt(this.start)) ||
      'bigint' == typeof this.value ||
      47 === this.context.code.charCodeAt(this.start)
      ? Ee
      : this.value
  }
  getReturnExpressionWhenCalledAtPath(e) {
    return 1 !== e.length ? be : Ge(this.members, e[0])
  }
  hasEffectsWhenAccessedAtPath(e) {
    return null === this.value ? e.length > 0 : e.length > 1
  }
  hasEffectsWhenAssignedAtPath(e) {
    return e.length > 0
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return 1 !== e.length || ze(this.members, e[0], this.included, t, s)
  }
  initialise() {
    this.members = (function (e) {
      switch (typeof e) {
        case 'boolean':
          return We
        case 'number':
          return Ue
        case 'string':
          return je
        default:
          return Object.create(null)
      }
    })(this.value)
  }
  render(e) {
    'string' == typeof this.value &&
      e.indentExclusionRanges.push([this.start + 1, this.end - 1])
  }
}
function Os(e) {
  return e.computed
    ? (function (e) {
        if (e instanceof Ms) return String(e.value)
        return null
      })(e.property)
    : e.property.name
}
class Ds extends yt {
  constructor() {
    super(...arguments),
      (this.variable = null),
      (this.bound = !1),
      (this.expressionsToBeDeoptimized = []),
      (this.replacement = null),
      (this.wasPathDeoptimizedWhileOptimized = !1)
  }
  addExportedVariables() {}
  bind() {
    if (this.bound) return
    this.bound = !0
    const e = (function e(t) {
        const s = t.propertyKey,
          i = t.object
        if ('string' == typeof s) {
          if (i instanceof Bt)
            return [
              { key: i.name, pos: i.start },
              { key: s, pos: t.property.start },
            ]
          if (i instanceof Ds) {
            const n = e(i)
            return n && [...n, { key: s, pos: t.property.start }]
          }
        }
        return null
      })(this),
      t = e && this.scope.findVariable(e[0].key)
    if (t && t.isNamespace) {
      const s = this.resolveNamespaceVariables(t, e.slice(1))
      s
        ? 'string' == typeof s
          ? (this.replacement = s)
          : (s instanceof Ke && s.module && s.module.suggestName(e[0].key),
            (this.variable = s),
            this.scope.addNamespaceMemberAccess(
              (function (e) {
                let t = e[0].key
                for (let s = 1; s < e.length; s++) t += '.' + e[s].key
                return t
              })(e),
              s
            ))
        : super.bind()
    } else super.bind(), this.getPropertyKey()
  }
  deoptimizeCache() {
    const e = this.expressionsToBeDeoptimized
    ;(this.expressionsToBeDeoptimized = []),
      (this.propertyKey = J),
      this.wasPathDeoptimizedWhileOptimized && this.object.deoptimizePath(ee)
    for (const t of e) t.deoptimizeCache()
  }
  deoptimizePath(e) {
    if (
      (this.bound || this.bind(),
      0 === e.length && this.disallowNamespaceReassignment(),
      this.variable)
    )
      this.variable.deoptimizePath(e)
    else {
      const t = this.getPropertyKey()
      t === J
        ? this.object.deoptimizePath(ee)
        : ((this.wasPathDeoptimizedWhileOptimized = !0),
          this.object.deoptimizePath([t, ...e]))
    }
  }
  getLiteralValueAtPath(e, t, s) {
    return (
      this.bound || this.bind(),
      null !== this.variable
        ? this.variable.getLiteralValueAtPath(e, t, s)
        : (this.expressionsToBeDeoptimized.push(s),
          this.object.getLiteralValueAtPath(
            [this.getPropertyKey(), ...e],
            t,
            s
          ))
    )
  }
  getReturnExpressionWhenCalledAtPath(e, t, s) {
    return (
      this.bound || this.bind(),
      null !== this.variable
        ? this.variable.getReturnExpressionWhenCalledAtPath(e, t, s)
        : (this.expressionsToBeDeoptimized.push(s),
          this.object.getReturnExpressionWhenCalledAtPath(
            [this.getPropertyKey(), ...e],
            t,
            s
          ))
    )
  }
  hasEffects(e) {
    return (
      this.property.hasEffects(e) ||
      this.object.hasEffects(e) ||
      (this.context.propertyReadSideEffects &&
        this.object.hasEffectsWhenAccessedAtPath([this.propertyKey], e))
    )
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return (
      0 !== e.length &&
      (null !== this.variable
        ? this.variable.hasEffectsWhenAccessedAtPath(e, t)
        : this.object.hasEffectsWhenAccessedAtPath([this.propertyKey, ...e], t))
    )
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return null !== this.variable
      ? this.variable.hasEffectsWhenAssignedAtPath(e, t)
      : this.object.hasEffectsWhenAssignedAtPath([this.propertyKey, ...e], t)
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return null !== this.variable
      ? this.variable.hasEffectsWhenCalledAtPath(e, t, s)
      : this.object.hasEffectsWhenCalledAtPath([this.propertyKey, ...e], t, s)
  }
  include(e, t) {
    this.included ||
      ((this.included = !0),
      null !== this.variable && this.context.includeVariable(e, this.variable)),
      this.object.include(e, t),
      this.property.include(e, t)
  }
  includeCallArguments(e, t) {
    this.variable
      ? this.variable.includeCallArguments(e, t)
      : super.includeCallArguments(e, t)
  }
  initialise() {
    this.propertyKey = Os(this)
  }
  render(e, t, { renderedParentType: s, isCalleeOfRenderedParent: i } = Pt) {
    const n = 'CallExpression' === s && i
    if (this.variable || this.replacement) {
      let t = this.variable ? this.variable.getName() : this.replacement
      n && (t = '0, ' + t),
        e.overwrite(this.start, this.end, t, { contentOnly: !0, storeName: !0 })
    } else n && e.appendRight(this.start, '0, '), super.render(e, t)
  }
  disallowNamespaceReassignment() {
    if (
      this.object instanceof Bt &&
      this.scope.findVariable(this.object.name).isNamespace
    )
      return this.context.error(
        {
          code: 'ILLEGAL_NAMESPACE_REASSIGNMENT',
          message: `Illegal reassignment to import '${this.object.name}'`,
        },
        this.start
      )
  }
  getPropertyKey() {
    if (null === this.propertyKey) {
      this.propertyKey = J
      const e = this.property.getLiteralValueAtPath(Z, ie, this)
      return (this.propertyKey = e === Ee ? J : String(e))
    }
    return this.propertyKey
  }
  resolveNamespaceVariables(e, t) {
    if (0 === t.length) return e
    if (!e.isNamespace) return null
    const s = t[0].key,
      i =
        e instanceof Ke
          ? e.module.getVariableForExportName(s)
          : e.context.traceExport(s)
    if (!i) {
      const i = e instanceof Ke ? e.module.id : e.context.fileName
      return (
        this.context.warn(
          {
            code: 'MISSING_EXPORT',
            exporter: os(i),
            importer: os(this.context.fileName),
            message: `'${s}' is not exported by '${os(i)}'`,
            missing: s,
            url: 'https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module',
          },
          t[0].pos
        ),
        'undefined'
      )
    }
    return this.resolveNamespaceVariables(i, t.slice(1))
  }
}
class Vs extends At {
  addDeclaration(e, t, s, i) {
    return i
      ? this.parent.addDeclaration(e, t, s, i)
      : super.addDeclaration(e, t, s, !1)
  }
}
class Bs extends yt {
  createScope(e) {
    this.scope = new Vs(e, this.context)
  }
  initialise() {
    this.param && this.param.declare('parameter', be)
  }
  parseNode(e) {
    ;(this.body = new this.context.nodeConstructors.BlockStatement(
      e.body,
      this,
      this.scope
    )),
      super.parseNode(e)
  }
}
Bs.prototype.preventChildBlockScope = !0
class Fs {
  constructor(e) {
    ;(this.included = !1), (this.expressions = e)
  }
  deoptimizePath(e) {
    for (const t of this.expressions) t.deoptimizePath(e)
  }
  getLiteralValueAtPath() {
    return Ee
  }
  getReturnExpressionWhenCalledAtPath(e, t, s) {
    return new Fs(
      this.expressions.map((i) =>
        i.getReturnExpressionWhenCalledAtPath(e, t, s)
      )
    )
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    for (const s of this.expressions)
      if (s.hasEffectsWhenAccessedAtPath(e, t)) return !0
    return !1
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    for (const s of this.expressions)
      if (s.hasEffectsWhenAssignedAtPath(e, t)) return !0
    return !1
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    for (const i of this.expressions)
      if (i.hasEffectsWhenCalledAtPath(e, t, s)) return !0
    return !1
  }
  include() {}
  includeCallArguments() {}
}
class Ws extends yt {
  bind() {
    null !== this.declaration && this.declaration.bind()
  }
  hasEffects(e) {
    return null !== this.declaration && this.declaration.hasEffects(e)
  }
  initialise() {
    this.context.addExport(this)
  }
  render(e, t, s) {
    const { start: i, end: n } = s
    null === this.declaration
      ? e.remove(i, n)
      : (e.remove(this.start, this.declaration.start),
        this.declaration.render(e, t, { start: i, end: n }))
  }
}
Ws.prototype.needsBoundaries = !0
const Us = Symbol('unset')
class js extends yt {
  bind() {}
  hasEffects() {
    return !1
  }
  initialise() {
    this.context.addImport(this)
  }
  render(e, t, s) {
    e.remove(s.start, s.end)
  }
}
js.prototype.needsBoundaries = !0
const zs =
    (e) =>
    (...t) => {
      throw new Error(`Cannot use fs.${e} inside browser`)
    },
  Gs = zs('lstatSync'),
  Hs = zs('readdirSync'),
  qs = zs('readFile'),
  Ks = zs('realpathSync'),
  Ys = zs('writeFile')
function Xs(e) {
  return {
    name: 'Rollup Core',
    resolveId: Js(e),
    load: (e) => qs(e),
    resolveFileUrl: ({ relativePath: e, format: t }) => ni[t](e),
    resolveImportMeta(e, { chunkId: t, format: s }) {
      const i = si[s] && si[s](e, t)
      if (i) return i
    },
  }
}
function Qs(e, t) {
  try {
    const s = Gs(e)
    if (!t && s.isSymbolicLink()) return Qs(Ks(e), t)
    if ((t && s.isSymbolicLink()) || s.isFile()) {
      const t = at(e)
      if (-1 !== Hs(ot(e)).indexOf(t)) return e
    }
  } catch (e) {}
}
function Js(e) {
  return function (t, s) {
    return 'undefined' == typeof process
      ? ls({
          code: 'MISSING_PROCESS',
          message:
            "It looks like you're using Rollup in a non-Node.js environment. This means you must supply a plugin with custom resolveId and load functions",
          url: 'https://rollupjs.org/guide/en/#a-simple-example',
        })
      : void 0 === s || it(t) || '.' === t[0]
      ? (function (e, t) {
          let s = Qs(e, t)
          return (
            s || ((s = Qs(e + '.mjs', t)), s || ((s = Qs(e + '.js', t)), s))
          )
        })(ct(s ? ot(s) : ct(), t), e)
      : null
  }
}
const Zs = (e, t = 'URL') => `new ${t}(${e}).href`,
  ei = (e) =>
    `(document.currentScript && document.currentScript.src || new URL('${e}', document.baseURI).href)`,
  ti = (e) => (t, s) => {
    const i = e(s)
    return null === t ? `({ url: ${i} })` : 'url' === t ? i : 'undefined'
  },
  si = {
    amd: ti(() => Zs('module.uri, document.baseURI')),
    cjs: ti(
      (e) =>
        `(typeof document === 'undefined' ? ${Zs(
          "'file:' + __filename",
          "(require('u' + 'rl').URL)"
        )} : ${ei(e)})`
    ),
    iife: ti((e) => ei(e)),
    system: (e) => (null === e ? 'module.meta' : `module.meta.${e}`),
    umd: ti(
      (e) =>
        `(typeof document === 'undefined' ? ${Zs(
          "'file:' + __filename",
          "(require('u' + 'rl').URL)"
        )} : ${ei(e)})`
    ),
  },
  ii = (e) =>
    Zs(
      `'${e}', document.currentScript && document.currentScript.src || document.baseURI`
    ),
  ni = {
    amd: (e) => (
      '.' !== e[0] && (e = './' + e),
      Zs(`require.toUrl('${e}'), document.baseURI`)
    ),
    cjs: (e) =>
      `(typeof document === 'undefined' ? ${Zs(
        `'file:' + __dirname + '/${e}'`,
        "(require('u' + 'rl').URL)"
      )} : ${ii(e)})`,
    es: (e) => Zs(`'${e}', import.meta.url`),
    iife: (e) => ii(e),
    system: (e) => Zs(`'${e}', module.meta.url`),
    umd: (e) =>
      `(typeof document === 'undefined' ? ${Zs(
        `'file:' + __dirname + '/${e}'`,
        "(require('u' + 'rl').URL)"
      )} : ${ii(e)})`,
  },
  ri = {
    amd: ['document', 'module', 'URL'],
    cjs: ['document', 'require', 'URL'],
    iife: ['document', 'URL'],
    system: ['module'],
    umd: ['document', 'require', 'URL'],
  },
  ai = {
    amd: ['document', 'require', 'URL'],
    cjs: ['document', 'require', 'URL'],
    iife: ['document', 'URL'],
    system: ['module', 'URL'],
    umd: ['document', 'require', 'URL'],
  },
  oi = 'ROLLUP_ASSET_URL_',
  hi = 'ROLLUP_FILE_URL_'
class li extends yt {
  bind() {
    super.bind(), this.argument.deoptimizePath([J, J])
  }
}
class ci extends yt {
  hasEffects(e) {
    for (const t of this.body) if (t.hasEffects(e)) return !0
    return !1
  }
  include(e, t) {
    this.included = !0
    for (const s of this.body) (t || s.shouldBeIncluded(e)) && s.include(e, t)
  }
  render(e, t) {
    this.body.length
      ? ue(this.body, e, this.start, this.end, t)
      : super.render(e, t)
  }
}
class ui extends yt {
  hasEffects(e) {
    if (this.test && this.test.hasEffects(e)) return !0
    for (const t of this.consequent) {
      if (e.brokenFlow) break
      if (t.hasEffects(e)) return !0
    }
    return !1
  }
  include(e, t) {
    ;(this.included = !0), this.test && this.test.include(e, t)
    for (const s of this.consequent)
      (t || s.shouldBeIncluded(e)) && s.include(e, t)
  }
  render(e, t, s) {
    if (this.consequent.length) {
      this.test && this.test.render(e, t)
      const i = this.test
          ? this.test.end
          : le(e.original, 'default', this.start) + 7,
        n = le(e.original, ':', i) + 1
      ue(this.consequent, e, n, s.end, t)
    } else super.render(e, t)
  }
}
ui.prototype.needsBoundaries = !0
class di extends yt {
  getLiteralValueAtPath(e) {
    return e.length > 0 || 1 !== this.quasis.length
      ? Ee
      : this.quasis[0].value.cooked
  }
  render(e, t) {
    e.indentExclusionRanges.push([this.start, this.end]), super.render(e, t)
  }
}
class pi extends mt {
  constructor(e, t) {
    super(e),
      (this.context = t),
      this.variables.set('this', new pt('this', null, ve, t))
  }
  addExportDefaultDeclaration(e, t, s) {
    const i = new Gt(e, t, s)
    return this.variables.set('default', i), i
  }
  addNamespaceMemberAccess(e, t) {
    t instanceof Vt && this.accessedOutsideVariables.set(t.name, t)
  }
  deconflict(e) {
    for (const t of this.children) t.deconflict(e)
  }
  findLexicalBoundary() {
    return this
  }
  findVariable(e) {
    const t = this.variables.get(e) || this.accessedOutsideVariables.get(e)
    if (t) return t
    const s = this.context.traceVariable(e) || this.parent.findVariable(e)
    return s instanceof Vt && this.accessedOutsideVariables.set(e, s), s
  }
}
const fi = {
  '!': (e) => !e,
  '+': (e) => +e,
  '-': (e) => -e,
  delete: () => Ee,
  typeof: (e) => typeof e,
  void: () => {},
  '~': (e) => ~e,
}
function mi(e) {
  return null !== e.renderBaseName && null !== e.exportName && e.isReassigned
}
class gi extends yt {
  deoptimizePath() {
    for (const e of this.declarations) e.deoptimizePath(Z)
  }
  hasEffectsWhenAssignedAtPath() {
    return !1
  }
  include(e, t) {
    this.included = !0
    for (const s of this.declarations)
      (t || s.shouldBeIncluded(e)) && s.include(e, t)
  }
  includeWithAllDeclaredVariables(e, t) {
    this.included = !0
    for (const s of this.declarations) s.include(t, e)
  }
  initialise() {
    for (const e of this.declarations) e.declareDeclarator(this.kind)
  }
  render(e, t, s = Pt) {
    if (
      (function (e) {
        for (const t of e) {
          if (!t.included) return !1
          if ('Identifier' === t.id.type) {
            if (t.id.variable.exportName) return !1
          } else {
            const e = []
            if ((t.id.addExportedVariables(e), e.length > 0)) return !1
          }
        }
        return !0
      })(this.declarations)
    ) {
      for (const s of this.declarations) s.render(e, t)
      s.isNoStatement ||
        59 === e.original.charCodeAt(this.end - 1) ||
        e.appendLeft(this.end, ';')
    } else this.renderReplacedDeclarations(e, t, s)
  }
  renderDeclarationEnd(e, t, s, i, n, r, a) {
    59 === e.original.charCodeAt(this.end - 1) &&
      e.remove(this.end - 1, this.end),
      r && (t += ';'),
      null !== s
        ? (10 !== e.original.charCodeAt(i - 1) ||
            (10 !== e.original.charCodeAt(this.end) &&
              13 !== e.original.charCodeAt(this.end)) ||
            (i--, 13 === e.original.charCodeAt(i) && i--),
          i === s + 1
            ? e.overwrite(s, n, t)
            : (e.overwrite(s, s + 1, t), e.remove(i, n)))
        : e.appendLeft(n, t),
      a.length > 0 && e.appendLeft(n, ' ' + Ls(a))
  }
  renderReplacedDeclarations(
    e,
    t,
    { start: s = this.start, end: i = this.end, isNoStatement: n }
  ) {
    const r = de(
      this.declarations,
      e,
      this.start + this.kind.length,
      this.end - (59 === e.original.charCodeAt(this.end - 1) ? 1 : 0)
    )
    let a, o
    o = /\n\s*$/.test(e.slice(this.start, r[0].start))
      ? this.start + this.kind.length
      : r[0].start
    let h = o - 1
    e.remove(this.start, h)
    let l,
      c,
      u = !1,
      d = !1,
      p = ''
    const f = []
    for (const { node: s, start: i, separator: n, contentEnd: m, end: g } of r)
      !s.included ||
      (s.id instanceof Bt && mi(s.id.variable) && null === s.init)
        ? e.remove(i, g)
        : ((l = ''),
          (c = ''),
          s.id instanceof Bt && mi(s.id.variable)
            ? (d && (p += ';'), (u = !1))
            : ('system' === t.format &&
                null !== s.init &&
                ('Identifier' !== s.id.type
                  ? s.id.addExportedVariables(f)
                  : s.id.variable.exportName &&
                    (e.prependLeft(
                      e.original.indexOf('=', s.id.end) + 1,
                      ` exports('${
                        s.id.variable.safeExportName || s.id.variable.exportName
                      }',`
                    ),
                    (c += ')'))),
              u
                ? (p += ',')
                : (d && (p += ';'), (l += `${this.kind} `), (u = !0))),
          o === h + 1
            ? e.overwrite(h, o, p + l)
            : (e.overwrite(h, h + 1, p), e.appendLeft(o, l)),
          s.render(e, t),
          (a = m),
          (o = g),
          (d = !0),
          (h = n),
          (p = c))
    d ? this.renderDeclarationEnd(e, p, h, a, o, !n, f) : e.remove(s, i)
  }
}
const xi = {
  ArrayExpression: class extends yt {
    bind() {
      super.bind()
      for (const e of this.elements) null !== e && e.deoptimizePath(ee)
    }
    getReturnExpressionWhenCalledAtPath(e) {
      return 1 !== e.length ? be : Ge(Fe, e[0])
    }
    hasEffectsWhenAccessedAtPath(e) {
      return e.length > 1
    }
    hasEffectsWhenCalledAtPath(e, t, s) {
      return 1 !== e.length || ze(Fe, e[0], this.included, t, s)
    }
  },
  ArrayPattern: class extends yt {
    addExportedVariables(e) {
      for (const t of this.elements) null !== t && t.addExportedVariables(e)
    }
    declare(e) {
      const t = []
      for (const s of this.elements) null !== s && t.push(...s.declare(e, be))
      return t
    }
    deoptimizePath(e) {
      if (0 === e.length)
        for (const t of this.elements) null !== t && t.deoptimizePath(e)
    }
    hasEffectsWhenAssignedAtPath(e, t) {
      if (e.length > 0) return !0
      for (const e of this.elements)
        if (null !== e && e.hasEffectsWhenAssignedAtPath(Z, t)) return !0
      return !1
    }
  },
  ArrowFunctionExpression: Ts,
  AssignmentExpression: class extends yt {
    constructor() {
      super(...arguments), (this.deoptimized = !1)
    }
    hasEffects(e) {
      return (
        this.deoptimized || this.applyDeoptimizations(),
        this.right.hasEffects(e) ||
          this.left.hasEffects(e) ||
          this.left.hasEffectsWhenAssignedAtPath(Z, e)
      )
    }
    hasEffectsWhenAccessedAtPath(e, t) {
      return e.length > 0 && this.right.hasEffectsWhenAccessedAtPath(e, t)
    }
    include(e, t) {
      this.deoptimized || this.applyDeoptimizations(),
        (this.included = !0),
        this.left.include(e, t),
        this.right.include(e, t)
    }
    render(e, t) {
      if (
        (this.left.render(e, t), this.right.render(e, t), 'system' === t.format)
      )
        if (this.left.variable && this.left.variable.exportName) {
          const t = le(e.original, this.operator, this.left.end),
            s =
              this.operator.length > 1
                ? ` ${this.left.variable.exportName} ${this.operator.slice(
                    0,
                    -1
                  )}`
                : ''
          e.overwrite(
            t,
            t + this.operator.length,
            `= exports('${this.left.variable.exportName}',${s}`
          ),
            e.appendLeft(this.right.end, ')')
        } else if ('addExportedVariables' in this.left) {
          const t = []
          this.left.addExportedVariables(t),
            t.length > 0 &&
              (e.prependRight(
                this.start,
                `function (v) {${Ls(t)} return v;} (`
              ),
              e.appendLeft(this.end, ')'))
        }
    }
    applyDeoptimizations() {
      ;(this.deoptimized = !0),
        this.left.deoptimizePath(Z),
        this.right.deoptimizePath(ee)
    }
  },
  AssignmentPattern: class extends yt {
    addExportedVariables(e) {
      this.left.addExportedVariables(e)
    }
    bind() {
      super.bind(), this.left.deoptimizePath(Z), this.right.deoptimizePath(ee)
    }
    declare(e, t) {
      return this.left.declare(e, t)
    }
    deoptimizePath(e) {
      0 === e.length && this.left.deoptimizePath(e)
    }
    hasEffectsWhenAssignedAtPath(e, t) {
      return e.length > 0 || this.left.hasEffectsWhenAssignedAtPath(Z, t)
    }
    render(e, t, { isShorthandProperty: s } = Pt) {
      this.left.render(e, t, { isShorthandProperty: s }),
        this.right.render(e, t)
    }
  },
  AwaitExpression: class extends yt {
    hasEffects(e) {
      return !e.ignore.returnAwaitYield || this.argument.hasEffects(e)
    }
    include(e, t) {
      if (!this.included) {
        this.included = !0
        e: if (!this.context.usesTopLevelAwait) {
          let e = this.parent
          do {
            if (e instanceof Wt || e instanceof Ts) break e
          } while ((e = e.parent))
          this.context.usesTopLevelAwait = !0
        }
      }
      this.argument.include(e, t)
    }
  },
  BinaryExpression: class extends yt {
    deoptimizeCache() {}
    getLiteralValueAtPath(e, t, s) {
      if (e.length > 0) return Ee
      const i = this.left.getLiteralValueAtPath(Z, t, s)
      if (i === Ee) return Ee
      const n = this.right.getLiteralValueAtPath(Z, t, s)
      if (n === Ee) return Ee
      const r = Rs[this.operator]
      return r ? r(i, n) : Ee
    }
    hasEffects(e) {
      return (
        ('+' === this.operator &&
          this.parent instanceof Is &&
          '' === this.left.getLiteralValueAtPath(Z, ie, this)) ||
        super.hasEffects(e)
      )
    }
    hasEffectsWhenAccessedAtPath(e) {
      return e.length > 1
    }
  },
  BlockStatement: $s,
  BreakStatement: class extends yt {
    hasEffects(e) {
      if (this.label) {
        if (!e.ignore.labels.has(this.label.name)) return !0
        e.includedLabels.add(this.label.name), (e.brokenFlow = 2)
      } else {
        if (!e.ignore.breaks) return !0
        e.brokenFlow = 1
      }
      return !1
    }
    include(e) {
      ;(this.included = !0),
        this.label &&
          (this.label.include(e), e.includedLabels.add(this.label.name)),
        (e.brokenFlow = this.label ? 2 : 1)
    }
  },
  CallExpression: class extends yt {
    constructor() {
      super(...arguments),
        (this.expressionsToBeDeoptimized = []),
        (this.returnExpression = null),
        (this.wasPathDeoptmizedWhileOptimized = !1)
    }
    bind() {
      if ((super.bind(), this.callee instanceof Bt)) {
        if (this.scope.findVariable(this.callee.name).isNamespace)
          return this.context.error(
            {
              code: 'CANNOT_CALL_NAMESPACE',
              message: `Cannot call a namespace ('${this.callee.name}')`,
            },
            this.start
          )
        'eval' === this.callee.name &&
          this.context.warn(
            {
              code: 'EVAL',
              message:
                'Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification',
              url: 'https://rollupjs.org/guide/en/#avoiding-eval',
            },
            this.start
          )
      }
      this.getReturnExpression(ie),
        this.callee instanceof Ds &&
          !this.callee.variable &&
          this.callee.object.deoptimizePath(ee)
      for (const e of this.arguments) e.deoptimizePath(ee)
    }
    deoptimizeCache() {
      if (this.returnExpression !== be) {
        this.returnExpression = null
        const e = this.getReturnExpression(ie),
          t = this.expressionsToBeDeoptimized
        e !== be &&
          ((this.expressionsToBeDeoptimized = []),
          this.wasPathDeoptmizedWhileOptimized &&
            (e.deoptimizePath(ee), (this.wasPathDeoptmizedWhileOptimized = !1)))
        for (const e of t) e.deoptimizeCache()
      }
    }
    deoptimizePath(e) {
      if (0 === e.length) return
      const t = this.context.deoptimizationTracker.getEntities(e)
      if (t.has(this)) return
      t.add(this)
      const s = this.getReturnExpression(ie)
      s !== be &&
        ((this.wasPathDeoptmizedWhileOptimized = !0), s.deoptimizePath(e))
    }
    getLiteralValueAtPath(e, t, s) {
      const i = this.getReturnExpression(t)
      if (i === be) return Ee
      const n = t.getEntities(e)
      if (n.has(i)) return Ee
      this.expressionsToBeDeoptimized.push(s), n.add(i)
      const r = i.getLiteralValueAtPath(e, t, s)
      return n.delete(i), r
    }
    getReturnExpressionWhenCalledAtPath(e, t, s) {
      const i = this.getReturnExpression(t)
      if (this.returnExpression === be) return be
      const n = t.getEntities(e)
      if (n.has(i)) return be
      this.expressionsToBeDeoptimized.push(s), n.add(i)
      const r = i.getReturnExpressionWhenCalledAtPath(e, t, s)
      return n.delete(i), r
    }
    hasEffects(e) {
      for (const t of this.arguments) if (t.hasEffects(e)) return !0
      return (
        (!this.context.annotations || !this.annotatedPure) &&
        (this.callee.hasEffects(e) ||
          this.callee.hasEffectsWhenCalledAtPath(Z, this.callOptions, e))
      )
    }
    hasEffectsWhenAccessedAtPath(e, t) {
      if (0 === e.length) return !1
      const s = t.accessed.getEntities(e)
      return (
        !s.has(this) &&
        (s.add(this), this.returnExpression.hasEffectsWhenAccessedAtPath(e, t))
      )
    }
    hasEffectsWhenAssignedAtPath(e, t) {
      if (0 === e.length) return !0
      const s = t.assigned.getEntities(e)
      return (
        !s.has(this) &&
        (s.add(this), this.returnExpression.hasEffectsWhenAssignedAtPath(e, t))
      )
    }
    hasEffectsWhenCalledAtPath(e, t, s) {
      const i = (t.withNew ? s.instantiated : s.called).getEntities(e)
      return (
        !i.has(this) &&
        (i.add(this), this.returnExpression.hasEffectsWhenCalledAtPath(e, t, s))
      )
    }
    include(e, t) {
      t
        ? (super.include(e, t),
          'variables' === t &&
            this.callee instanceof Bt &&
            this.callee.variable &&
            this.callee.variable.markCalledFromTryStatement())
        : ((this.included = !0), this.callee.include(e, !1)),
        this.callee.includeCallArguments(e, this.arguments),
        this.returnExpression.included || this.returnExpression.include(e, !1)
    }
    initialise() {
      this.callOptions = { args: this.arguments, withNew: !1 }
    }
    render(e, t, { renderedParentType: s } = Pt) {
      if ((this.callee.render(e, t), this.arguments.length > 0))
        if (this.arguments[this.arguments.length - 1].included)
          for (const s of this.arguments) s.render(e, t)
        else {
          let s = this.arguments.length - 2
          for (; s >= 0 && !this.arguments[s].included; ) s--
          if (s >= 0) {
            for (let i = 0; i <= s; i++) this.arguments[i].render(e, t)
            e.remove(le(e.original, ',', this.arguments[s].end), this.end - 1)
          } else
            e.remove(le(e.original, '(', this.callee.end) + 1, this.end - 1)
        }
      'ExpressionStatement' === s &&
        'FunctionExpression' === this.callee.type &&
        (e.appendRight(this.start, '('), e.prependLeft(this.end, ')'))
    }
    getReturnExpression(e) {
      return null === this.returnExpression
        ? ((this.returnExpression = be),
          (this.returnExpression =
            this.callee.getReturnExpressionWhenCalledAtPath(Z, e, this)))
        : this.returnExpression
    }
  },
  CatchClause: Bs,
  ClassBody: class extends yt {
    hasEffectsWhenCalledAtPath(e, t, s) {
      return (
        e.length > 0 ||
        (null !== this.classConstructor &&
          this.classConstructor.hasEffectsWhenCalledAtPath(Z, t, s))
      )
    }
    initialise() {
      for (const e of this.body)
        if ('constructor' === e.kind) return void (this.classConstructor = e)
      this.classConstructor = null
    }
  },
  ClassDeclaration: bt,
  ClassExpression: class extends Et {},
  ConditionalExpression: class extends yt {
    constructor() {
      super(...arguments),
        (this.expressionsToBeDeoptimized = []),
        (this.isBranchResolutionAnalysed = !1),
        (this.usedBranch = null),
        (this.wasPathDeoptimizedWhileOptimized = !1)
    }
    bind() {
      super.bind(), this.getUsedBranch()
    }
    deoptimizeCache() {
      if (null !== this.usedBranch) {
        const e =
          this.usedBranch === this.consequent ? this.alternate : this.consequent
        this.usedBranch = null
        const t = this.expressionsToBeDeoptimized
        ;(this.expressionsToBeDeoptimized = []),
          this.wasPathDeoptimizedWhileOptimized && e.deoptimizePath(ee)
        for (const e of t) e.deoptimizeCache()
      }
    }
    deoptimizePath(e) {
      if (e.length > 0) {
        const t = this.getUsedBranch()
        null === t
          ? (this.consequent.deoptimizePath(e),
            this.alternate.deoptimizePath(e))
          : ((this.wasPathDeoptimizedWhileOptimized = !0), t.deoptimizePath(e))
      }
    }
    getLiteralValueAtPath(e, t, s) {
      const i = this.getUsedBranch()
      return null === i
        ? Ee
        : (this.expressionsToBeDeoptimized.push(s),
          i.getLiteralValueAtPath(e, t, s))
    }
    getReturnExpressionWhenCalledAtPath(e, t, s) {
      const i = this.getUsedBranch()
      return null === i
        ? new Fs([
            this.consequent.getReturnExpressionWhenCalledAtPath(e, t, s),
            this.alternate.getReturnExpressionWhenCalledAtPath(e, t, s),
          ])
        : (this.expressionsToBeDeoptimized.push(s),
          i.getReturnExpressionWhenCalledAtPath(e, t, s))
    }
    hasEffects(e) {
      return (
        !!this.test.hasEffects(e) ||
        (null === this.usedBranch
          ? this.consequent.hasEffects(e) || this.alternate.hasEffects(e)
          : this.usedBranch.hasEffects(e))
      )
    }
    hasEffectsWhenAccessedAtPath(e, t) {
      return (
        0 !== e.length &&
        (null === this.usedBranch
          ? this.consequent.hasEffectsWhenAccessedAtPath(e, t) ||
            this.alternate.hasEffectsWhenAccessedAtPath(e, t)
          : this.usedBranch.hasEffectsWhenAccessedAtPath(e, t))
      )
    }
    hasEffectsWhenAssignedAtPath(e, t) {
      return (
        0 === e.length ||
        (null === this.usedBranch
          ? this.consequent.hasEffectsWhenAssignedAtPath(e, t) ||
            this.alternate.hasEffectsWhenAssignedAtPath(e, t)
          : this.usedBranch.hasEffectsWhenAssignedAtPath(e, t))
      )
    }
    hasEffectsWhenCalledAtPath(e, t, s) {
      return null === this.usedBranch
        ? this.consequent.hasEffectsWhenCalledAtPath(e, t, s) ||
            this.alternate.hasEffectsWhenCalledAtPath(e, t, s)
        : this.usedBranch.hasEffectsWhenCalledAtPath(e, t, s)
    }
    include(e, t) {
      ;(this.included = !0),
        t || this.test.shouldBeIncluded(e) || null === this.usedBranch
          ? (this.test.include(e, t),
            this.consequent.include(e, t),
            this.alternate.include(e, t))
          : this.usedBranch.include(e, t)
    }
    render(
      e,
      t,
      { renderedParentType: s, isCalleeOfRenderedParent: i, preventASI: n } = Pt
    ) {
      if (this.test.included) super.render(e, t)
      else {
        const r = le(e.original, ':', this.consequent.end),
          a =
            (this.consequent.included
              ? le(e.original, '?', this.test.end)
              : r) + 1
        n && pe(e, a, this.usedBranch.start),
          e.remove(this.start, a),
          this.consequent.included && e.remove(r, this.end),
          oe(this, e),
          this.usedBranch.render(e, t, {
            isCalleeOfRenderedParent: s ? i : this.parent.callee === this,
            renderedParentType: s || this.parent.type,
          })
      }
    }
    getUsedBranch() {
      if (this.isBranchResolutionAnalysed) return this.usedBranch
      this.isBranchResolutionAnalysed = !0
      const e = this.test.getLiteralValueAtPath(Z, ie, this)
      return e === Ee
        ? null
        : (this.usedBranch = e ? this.consequent : this.alternate)
    }
  },
  ContinueStatement: class extends yt {
    hasEffects(e) {
      if (this.label) {
        if (!e.ignore.labels.has(this.label.name)) return !0
        e.includedLabels.add(this.label.name), (e.brokenFlow = 2)
      } else {
        if (!e.ignore.continues) return !0
        e.brokenFlow = 1
      }
      return !1
    }
    include(e) {
      ;(this.included = !0),
        this.label &&
          (this.label.include(e), e.includedLabels.add(this.label.name)),
        (e.brokenFlow = this.label ? 2 : 1)
    }
  },
  DoWhileStatement: class extends yt {
    hasEffects(e) {
      if (this.test.hasEffects(e)) return !0
      const {
        brokenFlow: t,
        ignore: { breaks: s, continues: i },
      } = e
      return (
        (e.ignore.breaks = !0),
        (e.ignore.continues = !0),
        !!this.body.hasEffects(e) ||
          ((e.ignore.breaks = s),
          (e.ignore.continues = i),
          (e.brokenFlow = t),
          !1)
      )
    }
    include(e, t) {
      ;(this.included = !0), this.test.include(e, t)
      const { brokenFlow: s } = e
      this.body.include(e, t), (e.brokenFlow = s)
    }
  },
  EmptyStatement: class extends yt {
    hasEffects() {
      return !1
    }
  },
  ExportAllDeclaration: Ns,
  ExportDefaultDeclaration: zt,
  ExportNamedDeclaration: Ws,
  ExpressionStatement: Is,
  ForInStatement: class extends yt {
    bind() {
      this.left.bind(),
        this.left.deoptimizePath(Z),
        this.right.bind(),
        this.body.bind()
    }
    createScope(e) {
      this.scope = new _s(e)
    }
    hasEffects(e) {
      if (
        (this.left &&
          (this.left.hasEffects(e) ||
            this.left.hasEffectsWhenAssignedAtPath(Z, e))) ||
        (this.right && this.right.hasEffects(e))
      )
        return !0
      const {
        brokenFlow: t,
        ignore: { breaks: s, continues: i },
      } = e
      return (
        (e.ignore.breaks = !0),
        (e.ignore.continues = !0),
        !!this.body.hasEffects(e) ||
          ((e.ignore.breaks = s),
          (e.ignore.continues = i),
          (e.brokenFlow = t),
          !1)
      )
    }
    include(e, t) {
      ;(this.included = !0),
        this.left.includeWithAllDeclaredVariables(t, e),
        this.left.deoptimizePath(Z),
        this.right.include(e, t)
      const { brokenFlow: s } = e
      this.body.include(e, t), (e.brokenFlow = s)
    }
    render(e, t) {
      this.left.render(e, t, he),
        this.right.render(e, t, he),
        110 === e.original.charCodeAt(this.right.start - 1) &&
          e.prependLeft(this.right.start, ' '),
        this.body.render(e, t)
    }
  },
  ForOfStatement: class extends yt {
    bind() {
      this.left.bind(),
        this.left.deoptimizePath(Z),
        this.right.bind(),
        this.body.bind()
    }
    createScope(e) {
      this.scope = new _s(e)
    }
    hasEffects() {
      return !0
    }
    include(e, t) {
      ;(this.included = !0),
        this.left.includeWithAllDeclaredVariables(t, e),
        this.left.deoptimizePath(Z),
        this.right.include(e, t)
      const { brokenFlow: s } = e
      this.body.include(e, t), (e.brokenFlow = s)
    }
    render(e, t) {
      this.left.render(e, t, he),
        this.right.render(e, t, he),
        102 === e.original.charCodeAt(this.right.start - 1) &&
          e.prependLeft(this.right.start, ' '),
        this.body.render(e, t)
    }
  },
  ForStatement: class extends yt {
    createScope(e) {
      this.scope = new _s(e)
    }
    hasEffects(e) {
      if (
        (this.init && this.init.hasEffects(e)) ||
        (this.test && this.test.hasEffects(e)) ||
        (this.update && this.update.hasEffects(e))
      )
        return !0
      const {
        brokenFlow: t,
        ignore: { breaks: s, continues: i },
      } = e
      return (
        (e.ignore.breaks = !0),
        (e.ignore.continues = !0),
        !!this.body.hasEffects(e) ||
          ((e.ignore.breaks = s),
          (e.ignore.continues = i),
          (e.brokenFlow = t),
          !1)
      )
    }
    include(e, t) {
      ;(this.included = !0),
        this.init && this.init.include(e, t),
        this.test && this.test.include(e, t)
      const { brokenFlow: s } = e
      this.update && this.update.include(e, t),
        this.body.include(e, t),
        (e.brokenFlow = s)
    }
    render(e, t) {
      this.init && this.init.render(e, t, he),
        this.test && this.test.render(e, t, he),
        this.update && this.update.render(e, t, he),
        this.body.render(e, t)
    }
  },
  FunctionDeclaration: Ut,
  FunctionExpression: class extends Wt {},
  Identifier: Bt,
  IfStatement: class extends yt {
    constructor() {
      super(...arguments), (this.testValue = Us)
    }
    deoptimizeCache() {
      this.testValue = Ee
    }
    hasEffects(e) {
      if (this.test.hasEffects(e)) return !0
      const t = this.getTestValue()
      if (t === Ee) {
        const { brokenFlow: t } = e
        if (this.consequent.hasEffects(e)) return !0
        const s = e.brokenFlow
        return (
          (e.brokenFlow = t),
          null === this.alternate
            ? !1
            : !!this.alternate.hasEffects(e) ||
              ((e.brokenFlow = e.brokenFlow < s ? e.brokenFlow : s), !1)
        )
      }
      return t
        ? this.consequent.hasEffects(e)
        : null !== this.alternate && this.alternate.hasEffects(e)
    }
    include(e, t) {
      if (((this.included = !0), t)) this.includeRecursively(t, e)
      else {
        const t = this.getTestValue()
        t === Ee ? this.includeUnknownTest(e) : this.includeKnownTest(e, t)
      }
    }
    render(e, t) {
      const s = this.getTestValue()
      if (
        this.test.included ||
        (s
          ? null !== this.alternate && this.alternate.included
          : this.consequent.included)
      )
        this.test.included
          ? this.test.render(e, t)
          : e.overwrite(this.test.start, this.test.end, s ? 'true' : 'false'),
          this.consequent.included
            ? this.consequent.render(e, t)
            : e.overwrite(this.consequent.start, this.consequent.end, ';'),
          null !== this.alternate &&
            (this.alternate.included
              ? (101 === e.original.charCodeAt(this.alternate.start - 1) &&
                  e.prependLeft(this.alternate.start, ' '),
                this.alternate.render(e, t))
              : e.remove(this.consequent.end, this.alternate.end))
      else {
        const i = s ? this.consequent : this.alternate
        e.remove(this.start, i.start),
          e.remove(i.end, this.end),
          oe(this, e),
          i.render(e, t)
      }
    }
    getTestValue() {
      return this.testValue === Us
        ? (this.testValue = this.test.getLiteralValueAtPath(Z, ie, this))
        : this.testValue
    }
    includeKnownTest(e, t) {
      this.test.shouldBeIncluded(e) && this.test.include(e, !1),
        t &&
          this.consequent.shouldBeIncluded(e) &&
          this.consequent.include(e, !1),
        null !== this.alternate &&
          !t &&
          this.alternate.shouldBeIncluded(e) &&
          this.alternate.include(e, !1)
    }
    includeRecursively(e, t) {
      this.test.include(t, e),
        this.consequent.include(t, e),
        null !== this.alternate && this.alternate.include(t, e)
    }
    includeUnknownTest(e) {
      this.test.include(e, !1)
      const { brokenFlow: t } = e
      let s = 0
      this.consequent.shouldBeIncluded(e) &&
        (this.consequent.include(e, !1),
        (s = e.brokenFlow),
        (e.brokenFlow = t)),
        null !== this.alternate &&
          this.alternate.shouldBeIncluded(e) &&
          (this.alternate.include(e, !1),
          (e.brokenFlow = e.brokenFlow < s ? e.brokenFlow : s))
    }
  },
  ImportDeclaration: js,
  ImportExpression: class extends yt {
    constructor() {
      super(...arguments), (this.exportMode = 'auto')
    }
    hasEffects() {
      return !0
    }
    include(e, t) {
      this.included ||
        ((this.included = !0),
        this.context.includeDynamicImport(this),
        this.scope.addAccessedDynamicImport(this)),
        this.source.include(e, t)
    }
    initialise() {
      this.context.addDynamicImport(this)
    }
    render(e, t) {
      if (this.inlineNamespace) {
        const s = t.compact ? '' : ' ',
          i = t.compact ? '' : ';'
        return void e.overwrite(
          this.start,
          this.end,
          `Promise.resolve().then(function${s}()${s}{${s}return ${this.inlineNamespace.getName()}${i}${s}})`
        )
      }
      const s = this.getDynamicImportMechanism(t)
      s &&
        (e.overwrite(
          this.start,
          le(e.original, '(', this.start + 6) + 1,
          s.left
        ),
        e.overwrite(this.end - 1, this.end, s.right)),
        this.source.render(e, t)
    }
    renderFinalResolution(e, t, s) {
      this.included &&
        ('amd' === s &&
          t.startsWith("'.") &&
          t.endsWith(".js'") &&
          (t = t.slice(0, -4) + "'"),
        e.overwrite(this.source.start, this.source.end, t))
    }
    setResolution(e, t) {
      ;(this.exportMode = e),
        t
          ? (this.inlineNamespace = t)
          : (this.scope.addAccessedGlobalsByFormat({
              amd: ['require'],
              cjs: ['require'],
              system: ['module'],
            }),
            'auto' === e &&
              this.scope.addAccessedGlobalsByFormat({
                amd: ['_interopNamespace'],
                cjs: ['_interopNamespace'],
              }))
    }
    getDynamicImportMechanism(e) {
      switch (e.format) {
        case 'cjs': {
          const t = e.compact ? '' : ' ',
            s = e.compact ? 'c' : 'resolve'
          switch (this.exportMode) {
            case 'default':
              return {
                left: `new Promise(function${t}(${s})${t}{${t}${s}({${t}'default':${t}require(`,
                right: `)${t}});${t}})`,
              }
            case 'auto':
              return {
                left: `new Promise(function${t}(${s})${t}{${t}${s}(_interopNamespace(require(`,
                right: `)));${t}})`,
              }
            default:
              return {
                left: `new Promise(function${t}(${s})${t}{${t}${s}(require(`,
                right: `));${t}})`,
              }
          }
        }
        case 'amd': {
          const t = e.compact ? '' : ' ',
            s = e.compact ? 'c' : 'resolve',
            i = e.compact ? 'e' : 'reject'
          return {
            left: `new Promise(function${t}(${s},${t}${i})${t}{${t}require([`,
            right: `],${t}${
              'default' === this.exportMode
                ? `function${t}(m)${t}{${t}${s}({${t}'default':${t}m${t}});${t}}`
                : 'auto' === this.exportMode
                ? `function${t}(m)${t}{${t}${s}(_interopNamespace(m));${t}}`
                : s
            },${t}${i})${t}})`,
          }
        }
        case 'system':
          return { left: 'module.import(', right: ')' }
        case 'es':
          if (e.dynamicImportFunction)
            return { left: `${e.dynamicImportFunction}(`, right: ')' }
      }
      return null
    }
  },
  LabeledStatement: class extends yt {
    hasEffects(e) {
      const t = e.brokenFlow
      return (
        e.ignore.labels.add(this.label.name),
        !!this.body.hasEffects(e) ||
          (e.ignore.labels.delete(this.label.name),
          e.includedLabels.has(this.label.name) &&
            (e.includedLabels.delete(this.label.name), (e.brokenFlow = t)),
          !1)
      )
    }
    include(e, t) {
      this.included = !0
      const s = e.brokenFlow
      this.body.include(e, t),
        e.includedLabels.has(this.label.name) &&
          (this.label.include(e),
          e.includedLabels.delete(this.label.name),
          (e.brokenFlow = s))
    }
    render(e, t) {
      this.label.included
        ? this.label.render(e, t)
        : e.remove(this.start, le(e.original, ':', this.label.end) + 1),
        this.body.render(e, t)
    }
  },
  Literal: Ms,
  LogicalExpression: class extends yt {
    constructor() {
      super(...arguments),
        (this.expressionsToBeDeoptimized = []),
        (this.isBranchResolutionAnalysed = !1),
        (this.unusedBranch = null),
        (this.usedBranch = null),
        (this.wasPathDeoptimizedWhileOptimized = !1)
    }
    bind() {
      super.bind(), this.getUsedBranch()
    }
    deoptimizeCache() {
      if (null !== this.usedBranch) {
        this.usedBranch = null
        const e = this.expressionsToBeDeoptimized
        ;(this.expressionsToBeDeoptimized = []),
          this.wasPathDeoptimizedWhileOptimized &&
            this.unusedBranch.deoptimizePath(ee)
        for (const t of e) t.deoptimizeCache()
      }
    }
    deoptimizePath(e) {
      const t = this.getUsedBranch()
      null === t
        ? (this.left.deoptimizePath(e), this.right.deoptimizePath(e))
        : ((this.wasPathDeoptimizedWhileOptimized = !0), t.deoptimizePath(e))
    }
    getLiteralValueAtPath(e, t, s) {
      const i = this.getUsedBranch()
      return null === i
        ? Ee
        : (this.expressionsToBeDeoptimized.push(s),
          i.getLiteralValueAtPath(e, t, s))
    }
    getReturnExpressionWhenCalledAtPath(e, t, s) {
      const i = this.getUsedBranch()
      return null === i
        ? new Fs([
            this.left.getReturnExpressionWhenCalledAtPath(e, t, s),
            this.right.getReturnExpressionWhenCalledAtPath(e, t, s),
          ])
        : (this.expressionsToBeDeoptimized.push(s),
          i.getReturnExpressionWhenCalledAtPath(e, t, s))
    }
    hasEffects(e) {
      return null === this.usedBranch
        ? this.left.hasEffects(e) || this.right.hasEffects(e)
        : this.usedBranch.hasEffects(e)
    }
    hasEffectsWhenAccessedAtPath(e, t) {
      return (
        0 !== e.length &&
        (null === this.usedBranch
          ? this.left.hasEffectsWhenAccessedAtPath(e, t) ||
            this.right.hasEffectsWhenAccessedAtPath(e, t)
          : this.usedBranch.hasEffectsWhenAccessedAtPath(e, t))
      )
    }
    hasEffectsWhenAssignedAtPath(e, t) {
      return (
        0 === e.length ||
        (null === this.usedBranch
          ? this.left.hasEffectsWhenAssignedAtPath(e, t) ||
            this.right.hasEffectsWhenAssignedAtPath(e, t)
          : this.usedBranch.hasEffectsWhenAssignedAtPath(e, t))
      )
    }
    hasEffectsWhenCalledAtPath(e, t, s) {
      return null === this.usedBranch
        ? this.left.hasEffectsWhenCalledAtPath(e, t, s) ||
            this.right.hasEffectsWhenCalledAtPath(e, t, s)
        : this.usedBranch.hasEffectsWhenCalledAtPath(e, t, s)
    }
    include(e, t) {
      ;(this.included = !0),
        t ||
        (this.usedBranch === this.right && this.left.shouldBeIncluded(e)) ||
        null === this.usedBranch
          ? (this.left.include(e, t), this.right.include(e, t))
          : this.usedBranch.include(e, t)
    }
    render(
      e,
      t,
      { renderedParentType: s, isCalleeOfRenderedParent: i, preventASI: n } = Pt
    ) {
      if (this.left.included && this.right.included) super.render(e, t)
      else {
        const r = le(e.original, this.operator, this.left.end)
        this.right.included
          ? (e.remove(this.start, r + 2), n && pe(e, r + 2, this.right.start))
          : e.remove(r, this.end),
          oe(this, e),
          this.usedBranch.render(e, t, {
            isCalleeOfRenderedParent: s ? i : this.parent.callee === this,
            renderedParentType: s || this.parent.type,
          })
      }
    }
    getUsedBranch() {
      if (!this.isBranchResolutionAnalysed) {
        this.isBranchResolutionAnalysed = !0
        const e = this.left.getLiteralValueAtPath(Z, ie, this)
        if (e === Ee) return null
        ;('||' === this.operator ? e : !e)
          ? ((this.usedBranch = this.left), (this.unusedBranch = this.right))
          : ((this.usedBranch = this.right), (this.unusedBranch = this.left))
      }
      return this.usedBranch
    }
  },
  MemberExpression: Ds,
  MetaProperty: class extends yt {
    hasEffects() {
      return !1
    }
    hasEffectsWhenAccessedAtPath(e) {
      return e.length > 1
    }
    include() {
      if (!this.included) {
        this.included = !0
        const e = this.parent,
          t = (this.metaProperty =
            e instanceof Ds && 'string' == typeof e.propertyKey
              ? e.propertyKey
              : null)
        t &&
        (t.startsWith(hi) ||
          t.startsWith(oi) ||
          t.startsWith('ROLLUP_CHUNK_URL_'))
          ? this.scope.addAccessedGlobalsByFormat(ai)
          : this.scope.addAccessedGlobalsByFormat(ri)
      }
    }
    initialise() {
      'import' === this.meta.name && this.context.addImportMeta(this)
    }
    renderFinalMechanism(e, t, s, i) {
      if (!this.included) return
      const n = this.parent,
        r = this.metaProperty
      if (
        r &&
        (r.startsWith(hi) ||
          r.startsWith(oi) ||
          r.startsWith('ROLLUP_CHUNK_URL_'))
      ) {
        let a,
          o = null,
          h = null,
          l = null
        r.startsWith(hi)
          ? ((o = r.substr(hi.length)), (a = i.getFileName(o)))
          : r.startsWith(oi)
          ? (this.context.warnDeprecation(
              `Using the "${oi}" prefix to reference files is deprecated. Use the "${hi}" prefix instead.`,
              !1
            ),
            (h = r.substr(oi.length)),
            (a = i.getFileName(h)))
          : (this.context.warnDeprecation(
              `Using the "ROLLUP_CHUNK_URL_" prefix to reference files is deprecated. Use the "${hi}" prefix instead.`,
              !1
            ),
            (l = r.substr('ROLLUP_CHUNK_URL_'.length)),
            (a = i.getFileName(l)))
        const c = rt(lt(ot(t), a))
        let u
        return (
          null !== h &&
            (u = i.hookFirstSync('resolveAssetUrl', [
              {
                assetFileName: a,
                chunkId: t,
                format: s,
                moduleId: this.context.module.id,
                relativeAssetPath: c,
              },
            ])),
          u ||
            (u = i.hookFirstSync('resolveFileUrl', [
              {
                assetReferenceId: h,
                chunkId: t,
                chunkReferenceId: l,
                fileName: a,
                format: s,
                moduleId: this.context.module.id,
                referenceId: o || h || l,
                relativePath: c,
              },
            ])),
          void e.overwrite(n.start, n.end, u, { contentOnly: !0 })
        )
      }
      const a = i.hookFirstSync('resolveImportMeta', [
        r,
        { chunkId: t, format: s, moduleId: this.context.module.id },
      ])
      'string' == typeof a &&
        (n instanceof Ds
          ? e.overwrite(n.start, n.end, a, { contentOnly: !0 })
          : e.overwrite(this.start, this.end, a, { contentOnly: !0 }))
    }
  },
  MethodDefinition: class extends yt {
    hasEffects(e) {
      return this.key.hasEffects(e)
    }
    hasEffectsWhenCalledAtPath(e, t, s) {
      return e.length > 0 || this.value.hasEffectsWhenCalledAtPath(Z, t, s)
    }
  },
  NewExpression: class extends yt {
    bind() {
      super.bind()
      for (const e of this.arguments) e.deoptimizePath(ee)
    }
    hasEffects(e) {
      for (const t of this.arguments) if (t.hasEffects(e)) return !0
      return (
        (!this.context.annotations || !this.annotatedPure) &&
        (this.callee.hasEffects(e) ||
          this.callee.hasEffectsWhenCalledAtPath(Z, this.callOptions, e))
      )
    }
    hasEffectsWhenAccessedAtPath(e) {
      return e.length > 1
    }
    initialise() {
      this.callOptions = { args: this.arguments, withNew: !0 }
    }
  },
  ObjectExpression: class extends yt {
    constructor() {
      super(...arguments),
        (this.deoptimizedPaths = new Set()),
        (this.expressionsToBeDeoptimized = new Map()),
        (this.hasUnknownDeoptimizedProperty = !1),
        (this.propertyMap = null),
        (this.unmatchablePropertiesRead = []),
        (this.unmatchablePropertiesWrite = [])
    }
    bind() {
      super.bind(), this.getPropertyMap()
    }
    deoptimizeCache() {
      this.hasUnknownDeoptimizedProperty || this.deoptimizeAllProperties()
    }
    deoptimizePath(e) {
      if (this.hasUnknownDeoptimizedProperty) return
      const t = this.getPropertyMap(),
        s = e[0]
      if (1 === e.length) {
        if ('string' != typeof s) return void this.deoptimizeAllProperties()
        if (!this.deoptimizedPaths.has(s)) {
          this.deoptimizedPaths.add(s)
          const e = this.expressionsToBeDeoptimized.get(s)
          if (e) for (const t of e) t.deoptimizeCache()
        }
      }
      const i = 1 === e.length ? ee : e.slice(1)
      for (const e of 'string' == typeof s
        ? t[s]
          ? t[s].propertiesRead
          : []
        : this.properties)
        e.deoptimizePath(i)
    }
    getLiteralValueAtPath(e, t, s) {
      const i = this.getPropertyMap(),
        n = e[0]
      if (
        0 === e.length ||
        this.hasUnknownDeoptimizedProperty ||
        'string' != typeof n ||
        this.deoptimizedPaths.has(n)
      )
        return Ee
      if (
        1 === e.length &&
        !i[n] &&
        !Be[n] &&
        0 === this.unmatchablePropertiesRead.length
      ) {
        const e = this.expressionsToBeDeoptimized.get(n)
        return void (e
          ? e.push(s)
          : this.expressionsToBeDeoptimized.set(n, [s]))
      }
      if (
        !i[n] ||
        null === i[n].exactMatchRead ||
        i[n].propertiesRead.length > 1
      )
        return Ee
      const r = this.expressionsToBeDeoptimized.get(n)
      return (
        r ? r.push(s) : this.expressionsToBeDeoptimized.set(n, [s]),
        i[n].exactMatchRead.getLiteralValueAtPath(e.slice(1), t, s)
      )
    }
    getReturnExpressionWhenCalledAtPath(e, t, s) {
      const i = this.getPropertyMap(),
        n = e[0]
      if (
        0 === e.length ||
        this.hasUnknownDeoptimizedProperty ||
        'string' != typeof n ||
        this.deoptimizedPaths.has(n)
      )
        return be
      if (
        1 === e.length &&
        Be[n] &&
        0 === this.unmatchablePropertiesRead.length &&
        (!i[n] || null === i[n].exactMatchRead)
      )
        return Ge(Be, n)
      if (
        !i[n] ||
        null === i[n].exactMatchRead ||
        i[n].propertiesRead.length > 1
      )
        return be
      const r = this.expressionsToBeDeoptimized.get(n)
      return (
        r ? r.push(s) : this.expressionsToBeDeoptimized.set(n, [s]),
        i[n].exactMatchRead.getReturnExpressionWhenCalledAtPath(
          e.slice(1),
          t,
          s
        )
      )
    }
    hasEffectsWhenAccessedAtPath(e, t) {
      if (0 === e.length) return !1
      const s = e[0],
        i = this.propertyMap
      if (
        e.length > 1 &&
        (this.hasUnknownDeoptimizedProperty ||
          'string' != typeof s ||
          this.deoptimizedPaths.has(s) ||
          !i[s] ||
          null === i[s].exactMatchRead)
      )
        return !0
      const n = e.slice(1)
      for (const e of 'string' != typeof s
        ? this.properties
        : i[s]
        ? i[s].propertiesRead
        : [])
        if (e.hasEffectsWhenAccessedAtPath(n, t)) return !0
      return !1
    }
    hasEffectsWhenAssignedAtPath(e, t) {
      const s = e[0],
        i = this.propertyMap
      if (
        e.length > 1 &&
        (this.hasUnknownDeoptimizedProperty ||
          this.deoptimizedPaths.has(s) ||
          !i[s] ||
          null === i[s].exactMatchRead)
      )
        return !0
      const n = e.slice(1)
      for (const r of 'string' != typeof s
        ? this.properties
        : e.length > 1
        ? i[s].propertiesRead
        : i[s]
        ? i[s].propertiesWrite
        : [])
        if (r.hasEffectsWhenAssignedAtPath(n, t)) return !0
      return !1
    }
    hasEffectsWhenCalledAtPath(e, t, s) {
      const i = e[0]
      if (
        'string' != typeof i ||
        this.hasUnknownDeoptimizedProperty ||
        this.deoptimizedPaths.has(i) ||
        (this.propertyMap[i]
          ? !this.propertyMap[i].exactMatchRead
          : e.length > 1 || !Be[i])
      )
        return !0
      const n = e.slice(1)
      if (this.propertyMap[i])
        for (const e of this.propertyMap[i].propertiesRead)
          if (e.hasEffectsWhenCalledAtPath(n, t, s)) return !0
      return !(1 !== e.length || !Be[i]) && ze(Be, i, this.included, t, s)
    }
    render(e, t, { renderedParentType: s } = Pt) {
      super.render(e, t),
        'ExpressionStatement' === s &&
          (e.appendRight(this.start, '('), e.prependLeft(this.end, ')'))
    }
    deoptimizeAllProperties() {
      this.hasUnknownDeoptimizedProperty = !0
      for (const e of this.properties) e.deoptimizePath(ee)
      for (const e of this.expressionsToBeDeoptimized.values())
        for (const t of e) t.deoptimizeCache()
    }
    getPropertyMap() {
      if (null !== this.propertyMap) return this.propertyMap
      const e = (this.propertyMap = Object.create(null))
      for (let t = this.properties.length - 1; t >= 0; t--) {
        const s = this.properties[t]
        if (s instanceof li) {
          this.unmatchablePropertiesRead.push(s)
          continue
        }
        const i = 'get' !== s.kind,
          n = 'set' !== s.kind
        let r
        if (s.computed) {
          const e = s.key.getLiteralValueAtPath(Z, ie, this)
          if (e === Ee) {
            n
              ? this.unmatchablePropertiesRead.push(s)
              : this.unmatchablePropertiesWrite.push(s)
            continue
          }
          r = String(e)
        } else r = s.key instanceof Bt ? s.key.name : String(s.key.value)
        const a = e[r]
        a
          ? (n &&
              null === a.exactMatchRead &&
              ((a.exactMatchRead = s),
              a.propertiesRead.push(s, ...this.unmatchablePropertiesRead)),
            i &&
              !n &&
              null === a.exactMatchWrite &&
              ((a.exactMatchWrite = s),
              a.propertiesWrite.push(s, ...this.unmatchablePropertiesWrite)))
          : (e[r] = {
              exactMatchRead: n ? s : null,
              exactMatchWrite: i ? s : null,
              propertiesRead: n ? [s, ...this.unmatchablePropertiesRead] : [],
              propertiesWrite:
                i && !n ? [s, ...this.unmatchablePropertiesWrite] : [],
            })
      }
      return e
    }
  },
  ObjectPattern: class extends yt {
    addExportedVariables(e) {
      for (const t of this.properties)
        'Property' === t.type
          ? t.value.addExportedVariables(e)
          : t.argument.addExportedVariables(e)
    }
    declare(e, t) {
      const s = []
      for (const i of this.properties) s.push(...i.declare(e, t))
      return s
    }
    deoptimizePath(e) {
      if (0 === e.length) for (const t of this.properties) t.deoptimizePath(e)
    }
    hasEffectsWhenAssignedAtPath(e, t) {
      if (e.length > 0) return !0
      for (const e of this.properties)
        if (e.hasEffectsWhenAssignedAtPath(Z, t)) return !0
      return !1
    }
  },
  Program: ci,
  Property: class extends yt {
    constructor() {
      super(...arguments),
        (this.declarationInit = null),
        (this.returnExpression = null)
    }
    bind() {
      super.bind(),
        'get' === this.kind && this.getReturnExpression(),
        null !== this.declarationInit &&
          this.declarationInit.deoptimizePath([J, J])
    }
    declare(e, t) {
      return (this.declarationInit = t), this.value.declare(e, be)
    }
    deoptimizeCache() {}
    deoptimizePath(e) {
      'get' === this.kind
        ? this.getReturnExpression().deoptimizePath(e)
        : this.value.deoptimizePath(e)
    }
    getLiteralValueAtPath(e, t, s) {
      return 'get' === this.kind
        ? this.getReturnExpression().getLiteralValueAtPath(e, t, s)
        : this.value.getLiteralValueAtPath(e, t, s)
    }
    getReturnExpressionWhenCalledAtPath(e, t, s) {
      return 'get' === this.kind
        ? this.getReturnExpression().getReturnExpressionWhenCalledAtPath(
            e,
            t,
            s
          )
        : this.value.getReturnExpressionWhenCalledAtPath(e, t, s)
    }
    hasEffects(e) {
      return this.key.hasEffects(e) || this.value.hasEffects(e)
    }
    hasEffectsWhenAccessedAtPath(e, t) {
      if ('get' === this.kind) {
        const s = t.accessed.getEntities(e)
        return (
          !s.has(this) &&
          (s.add(this),
          this.value.hasEffectsWhenCalledAtPath(
            Z,
            this.accessorCallOptions,
            t
          ) ||
            (e.length > 0 &&
              this.returnExpression.hasEffectsWhenAccessedAtPath(e, t)))
        )
      }
      return this.value.hasEffectsWhenAccessedAtPath(e, t)
    }
    hasEffectsWhenAssignedAtPath(e, t) {
      if ('get' === this.kind) {
        const s = t.assigned.getEntities(e)
        return (
          !s.has(this) &&
          (s.add(this),
          this.returnExpression.hasEffectsWhenAssignedAtPath(e, t))
        )
      }
      if ('set' === this.kind) {
        const s = t.assigned.getEntities(e)
        return (
          !s.has(this) &&
          (s.add(this),
          this.value.hasEffectsWhenCalledAtPath(Z, this.accessorCallOptions, t))
        )
      }
      return this.value.hasEffectsWhenAssignedAtPath(e, t)
    }
    hasEffectsWhenCalledAtPath(e, t, s) {
      if ('get' === this.kind) {
        const i = (t.withNew ? s.instantiated : s.called).getEntities(e)
        return (
          !i.has(this) &&
          (i.add(this),
          this.returnExpression.hasEffectsWhenCalledAtPath(e, t, s))
        )
      }
      return this.value.hasEffectsWhenCalledAtPath(e, t, s)
    }
    initialise() {
      this.accessorCallOptions = { args: xe, withNew: !1 }
    }
    render(e, t) {
      this.shorthand || this.key.render(e, t),
        this.value.render(e, t, { isShorthandProperty: this.shorthand })
    }
    getReturnExpression() {
      return null === this.returnExpression
        ? ((this.returnExpression = be),
          (this.returnExpression =
            this.value.getReturnExpressionWhenCalledAtPath(Z, ie, this)))
        : this.returnExpression
    }
  },
  RestElement: Ft,
  ReturnStatement: class extends yt {
    hasEffects(e) {
      return (
        !(
          e.ignore.returnAwaitYield &&
          (null === this.argument || !this.argument.hasEffects(e))
        ) || ((e.brokenFlow = 2), !1)
      )
    }
    include(e, t) {
      ;(this.included = !0),
        this.argument && this.argument.include(e, t),
        (e.brokenFlow = 2)
    }
    initialise() {
      this.scope.addReturnExpression(this.argument || be)
    }
    render(e, t) {
      this.argument &&
        (this.argument.render(e, t, { preventASI: !0 }),
        this.argument.start === this.start + 6 &&
          e.prependLeft(this.start + 6, ' '))
    }
  },
  SequenceExpression: class extends yt {
    deoptimizePath(e) {
      e.length > 0 &&
        this.expressions[this.expressions.length - 1].deoptimizePath(e)
    }
    getLiteralValueAtPath(e, t, s) {
      return this.expressions[
        this.expressions.length - 1
      ].getLiteralValueAtPath(e, t, s)
    }
    hasEffects(e) {
      for (const t of this.expressions) if (t.hasEffects(e)) return !0
      return !1
    }
    hasEffectsWhenAccessedAtPath(e, t) {
      return (
        e.length > 0 &&
        this.expressions[
          this.expressions.length - 1
        ].hasEffectsWhenAccessedAtPath(e, t)
      )
    }
    hasEffectsWhenAssignedAtPath(e, t) {
      return (
        0 === e.length ||
        this.expressions[
          this.expressions.length - 1
        ].hasEffectsWhenAssignedAtPath(e, t)
      )
    }
    hasEffectsWhenCalledAtPath(e, t, s) {
      return this.expressions[
        this.expressions.length - 1
      ].hasEffectsWhenCalledAtPath(e, t, s)
    }
    include(e, t) {
      this.included = !0
      for (let s = 0; s < this.expressions.length - 1; s++) {
        const i = this.expressions[s]
        ;(t || i.shouldBeIncluded(e)) && i.include(e, t)
      }
      this.expressions[this.expressions.length - 1].include(e, t)
    }
    render(
      e,
      t,
      { renderedParentType: s, isCalleeOfRenderedParent: i, preventASI: n } = Pt
    ) {
      let r = 0
      for (const { node: a, start: o, end: h } of de(
        this.expressions,
        e,
        this.start,
        this.end
      ))
        a.included
          ? (r++,
            1 === r && n && pe(e, o, a.start),
            a === this.expressions[this.expressions.length - 1] && 1 === r
              ? a.render(e, t, {
                  isCalleeOfRenderedParent: s ? i : this.parent.callee === this,
                  renderedParentType: s || this.parent.type,
                })
              : a.render(e, t))
          : ae(a, e, o, h)
    }
  },
  SpreadElement: li,
  SwitchCase: ui,
  SwitchStatement: class extends yt {
    createScope(e) {
      this.scope = new _s(e)
    }
    hasEffects(e) {
      if (this.discriminant.hasEffects(e)) return !0
      const {
        brokenFlow: t,
        ignore: { breaks: s },
      } = e
      let i = 1 / 0
      e.ignore.breaks = !0
      for (const s of this.cases) {
        if (s.hasEffects(e)) return !0
        ;(i = e.brokenFlow < i ? e.brokenFlow : i), (e.brokenFlow = t)
      }
      return (
        null !== this.defaultCase && 1 !== i && (e.brokenFlow = i),
        (e.ignore.breaks = s),
        !1
      )
    }
    include(e, t) {
      ;(this.included = !0), this.discriminant.include(e, t)
      const { brokenFlow: s } = e
      let i = 1 / 0,
        n =
          t ||
          (null !== this.defaultCase &&
            this.defaultCase < this.cases.length - 1)
      for (let r = this.cases.length - 1; r >= 0; r--) {
        const a = this.cases[r]
        if ((a.included && (n = !0), !n)) {
          const e = re()
          ;(e.ignore.breaks = !0), (n = a.hasEffects(e))
        }
        n
          ? (a.include(e, t),
            (i = i < e.brokenFlow ? i : e.brokenFlow),
            (e.brokenFlow = s))
          : (i = s)
      }
      n && null !== this.defaultCase && 1 !== i && (e.brokenFlow = i)
    }
    initialise() {
      for (let e = 0; e < this.cases.length; e++)
        if (null === this.cases[e].test) return void (this.defaultCase = e)
      this.defaultCase = null
    }
    render(e, t) {
      this.discriminant.render(e, t),
        this.cases.length > 0 &&
          ue(this.cases, e, this.cases[0].start, this.end - 1, t)
    }
  },
  TaggedTemplateExpression: class extends yt {
    bind() {
      if ((super.bind(), 'Identifier' === this.tag.type)) {
        const e = this.tag.name
        if (this.scope.findVariable(e).isNamespace)
          return this.context.error(
            {
              code: 'CANNOT_CALL_NAMESPACE',
              message: `Cannot call a namespace ('${e}')`,
            },
            this.start
          )
        'eval' === e &&
          this.context.warn(
            {
              code: 'EVAL',
              message:
                'Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification',
              url: 'https://rollupjs.org/guide/en/#avoiding-eval',
            },
            this.start
          )
      }
    }
    hasEffects(e) {
      return (
        super.hasEffects(e) ||
        this.tag.hasEffectsWhenCalledAtPath(Z, this.callOptions, e)
      )
    }
    initialise() {
      this.callOptions = { args: xe, withNew: !1 }
    }
  },
  TemplateElement: class extends yt {
    hasEffects() {
      return !1
    }
  },
  TemplateLiteral: di,
  ThisExpression: class extends yt {
    bind() {
      super.bind(), (this.variable = this.scope.findVariable('this'))
    }
    hasEffectsWhenAccessedAtPath(e, t) {
      return e.length > 0 && this.variable.hasEffectsWhenAccessedAtPath(e, t)
    }
    hasEffectsWhenAssignedAtPath(e, t) {
      return this.variable.hasEffectsWhenAssignedAtPath(e, t)
    }
    initialise() {
      ;(this.alias =
        this.scope.findLexicalBoundary() instanceof pi
          ? this.context.moduleContext
          : null),
        'undefined' === this.alias &&
          this.context.warn(
            {
              code: 'THIS_IS_UNDEFINED',
              message:
                "The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten",
              url: 'https://rollupjs.org/guide/en/#error-this-is-undefined',
            },
            this.start
          )
    }
    render(e) {
      null !== this.alias &&
        e.overwrite(this.start, this.end, this.alias, {
          contentOnly: !1,
          storeName: !0,
        })
    }
  },
  ThrowStatement: class extends yt {
    hasEffects() {
      return !0
    }
    include(e, t) {
      ;(this.included = !0), this.argument.include(e, t), (e.brokenFlow = 2)
    }
    render(e, t) {
      this.argument.render(e, t, { preventASI: !0 }),
        this.argument.start === this.start + 5 &&
          e.prependLeft(this.start + 5, ' ')
    }
  },
  TryStatement: class extends yt {
    constructor() {
      super(...arguments), (this.directlyIncluded = !1)
    }
    hasEffects(e) {
      return (
        (this.context.tryCatchDeoptimization
          ? this.block.body.length > 0
          : this.block.hasEffects(e)) ||
        (null !== this.finalizer && this.finalizer.hasEffects(e))
      )
    }
    include(e, t) {
      const { brokenFlow: s } = e
      ;(this.directlyIncluded && this.context.tryCatchDeoptimization) ||
        ((this.included = !0),
        (this.directlyIncluded = !0),
        this.block.include(
          e,
          this.context.tryCatchDeoptimization ? 'variables' : t
        ),
        (e.brokenFlow = s)),
        null !== this.handler &&
          (this.handler.include(e, t), (e.brokenFlow = s)),
        null !== this.finalizer && this.finalizer.include(e, t)
    }
  },
  UnaryExpression: class extends yt {
    bind() {
      super.bind(),
        'delete' === this.operator && this.argument.deoptimizePath(Z)
    }
    getLiteralValueAtPath(e, t, s) {
      if (e.length > 0) return Ee
      const i = this.argument.getLiteralValueAtPath(Z, t, s)
      return i === Ee ? Ee : fi[this.operator](i)
    }
    hasEffects(e) {
      return (
        !('typeof' === this.operator && this.argument instanceof Bt) &&
        (this.argument.hasEffects(e) ||
          ('delete' === this.operator &&
            this.argument.hasEffectsWhenAssignedAtPath(Z, e)))
      )
    }
    hasEffectsWhenAccessedAtPath(e) {
      return 'void' === this.operator ? e.length > 0 : e.length > 1
    }
  },
  UnknownNode: class extends yt {
    hasEffects() {
      return !0
    }
    include(e) {
      super.include(e, !0)
    }
  },
  UpdateExpression: class extends yt {
    bind() {
      if (
        (super.bind(),
        this.argument.deoptimizePath(Z),
        this.argument instanceof Bt)
      ) {
        this.scope.findVariable(this.argument.name).isReassigned = !0
      }
    }
    hasEffects(e) {
      return (
        this.argument.hasEffects(e) ||
        this.argument.hasEffectsWhenAssignedAtPath(Z, e)
      )
    }
    hasEffectsWhenAccessedAtPath(e) {
      return e.length > 1
    }
    render(e, t) {
      this.argument.render(e, t)
      const s = this.argument.variable
      if ('system' === t.format && s && s.exportName) {
        const t = s.getName()
        if (this.prefix)
          e.overwrite(
            this.start,
            this.end,
            `exports('${s.exportName}', ${this.operator}${t})`
          )
        else {
          let i
          switch (this.operator) {
            case '++':
              i = `${t} + 1`
              break
            case '--':
              i = `${t} - 1`
          }
          e.overwrite(
            this.start,
            this.end,
            `(exports('${s.exportName}', ${i}), ${t}${this.operator})`
          )
        }
      }
    }
  },
  VariableDeclaration: gi,
  VariableDeclarator: class extends yt {
    declareDeclarator(e) {
      this.id.declare(e, this.init || ve)
    }
    deoptimizePath(e) {
      this.id.deoptimizePath(e)
    }
    render(e, t) {
      null === this.init || this.init.included
        ? super.render(e, t)
        : (e.remove(this.id.end, this.end), this.id.render(e, t))
    }
  },
  WhileStatement: class extends yt {
    hasEffects(e) {
      if (this.test.hasEffects(e)) return !0
      const {
        brokenFlow: t,
        ignore: { breaks: s, continues: i },
      } = e
      return (
        (e.ignore.breaks = !0),
        (e.ignore.continues = !0),
        !!this.body.hasEffects(e) ||
          ((e.ignore.breaks = s),
          (e.ignore.continues = i),
          (e.brokenFlow = t),
          !1)
      )
    }
    include(e, t) {
      ;(this.included = !0), this.test.include(e, t)
      const { brokenFlow: s } = e
      this.body.include(e, t), (e.brokenFlow = s)
    }
  },
  YieldExpression: class extends yt {
    bind() {
      super.bind(), null !== this.argument && this.argument.deoptimizePath(ee)
    }
    hasEffects(e) {
      return (
        !e.ignore.returnAwaitYield ||
        (null !== this.argument && this.argument.hasEffects(e))
      )
    }
    render(e, t) {
      this.argument &&
        (this.argument.render(e, t),
        this.argument.start === this.start + 5 &&
          e.prependLeft(this.start + 5, ' '))
    }
  },
}
class yi extends He {
  constructor(e, t, s) {
    super(t),
      (this.context = e),
      (this.module = e.module),
      (this.defaultVariable = s),
      this.setRenderNames(s.getName(), t)
  }
  include(e) {
    this.included ||
      ((this.included = !0),
      this.context.includeVariable(e, this.defaultVariable))
  }
}
function Ei(e, t, s) {
  s(e, t)
}
function bi(e, t, s) {}
var vi = {}
function Si(e, t, s = e.type) {
  let i = t.commentNodes[t.commentIndex]
  for (; i && e.start >= i.end; )
    Ai(e, i), (i = t.commentNodes[++t.commentIndex])
  i && i.end <= e.end && vi[s](e, t, Si)
}
function Ai(e, t) {
  e.annotations ? e.annotations.push(t) : (e.annotations = [t]),
    'ExpressionStatement' === e.type && (e = e.expression),
    ('CallExpression' !== e.type && 'NewExpression' !== e.type) ||
      (e.annotatedPure = !0)
}
;(vi.Program = vi.BlockStatement =
  function (e, t, s) {
    for (var i = 0, n = e.body; i < n.length; i += 1) {
      s(n[i], t, 'Statement')
    }
  }),
  (vi.Statement = Ei),
  (vi.EmptyStatement = bi),
  (vi.ExpressionStatement = vi.ParenthesizedExpression =
    function (e, t, s) {
      return s(e.expression, t, 'Expression')
    }),
  (vi.IfStatement = function (e, t, s) {
    s(e.test, t, 'Expression'),
      s(e.consequent, t, 'Statement'),
      e.alternate && s(e.alternate, t, 'Statement')
  }),
  (vi.LabeledStatement = function (e, t, s) {
    return s(e.body, t, 'Statement')
  }),
  (vi.BreakStatement = vi.ContinueStatement = bi),
  (vi.WithStatement = function (e, t, s) {
    s(e.object, t, 'Expression'), s(e.body, t, 'Statement')
  }),
  (vi.SwitchStatement = function (e, t, s) {
    s(e.discriminant, t, 'Expression')
    for (var i = 0, n = e.cases; i < n.length; i += 1) {
      var r = n[i]
      r.test && s(r.test, t, 'Expression')
      for (var a = 0, o = r.consequent; a < o.length; a += 1) {
        s(o[a], t, 'Statement')
      }
    }
  }),
  (vi.SwitchCase = function (e, t, s) {
    e.test && s(e.test, t, 'Expression')
    for (var i = 0, n = e.consequent; i < n.length; i += 1) {
      s(n[i], t, 'Statement')
    }
  }),
  (vi.ReturnStatement =
    vi.YieldExpression =
    vi.AwaitExpression =
      function (e, t, s) {
        e.argument && s(e.argument, t, 'Expression')
      }),
  (vi.ThrowStatement = vi.SpreadElement =
    function (e, t, s) {
      return s(e.argument, t, 'Expression')
    }),
  (vi.TryStatement = function (e, t, s) {
    s(e.block, t, 'Statement'),
      e.handler && s(e.handler, t),
      e.finalizer && s(e.finalizer, t, 'Statement')
  }),
  (vi.CatchClause = function (e, t, s) {
    e.param && s(e.param, t, 'Pattern'), s(e.body, t, 'Statement')
  }),
  (vi.WhileStatement = vi.DoWhileStatement =
    function (e, t, s) {
      s(e.test, t, 'Expression'), s(e.body, t, 'Statement')
    }),
  (vi.ForStatement = function (e, t, s) {
    e.init && s(e.init, t, 'ForInit'),
      e.test && s(e.test, t, 'Expression'),
      e.update && s(e.update, t, 'Expression'),
      s(e.body, t, 'Statement')
  }),
  (vi.ForInStatement = vi.ForOfStatement =
    function (e, t, s) {
      s(e.left, t, 'ForInit'),
        s(e.right, t, 'Expression'),
        s(e.body, t, 'Statement')
    }),
  (vi.ForInit = function (e, t, s) {
    'VariableDeclaration' === e.type ? s(e, t) : s(e, t, 'Expression')
  }),
  (vi.DebuggerStatement = bi),
  (vi.FunctionDeclaration = function (e, t, s) {
    return s(e, t, 'Function')
  }),
  (vi.VariableDeclaration = function (e, t, s) {
    for (var i = 0, n = e.declarations; i < n.length; i += 1) {
      s(n[i], t)
    }
  }),
  (vi.VariableDeclarator = function (e, t, s) {
    s(e.id, t, 'Pattern'), e.init && s(e.init, t, 'Expression')
  }),
  (vi.Function = function (e, t, s) {
    e.id && s(e.id, t, 'Pattern')
    for (var i = 0, n = e.params; i < n.length; i += 1) {
      s(n[i], t, 'Pattern')
    }
    s(e.body, t, e.expression ? 'Expression' : 'Statement')
  }),
  (vi.Pattern = function (e, t, s) {
    'Identifier' === e.type
      ? s(e, t, 'VariablePattern')
      : 'MemberExpression' === e.type
      ? s(e, t, 'MemberPattern')
      : s(e, t)
  }),
  (vi.VariablePattern = bi),
  (vi.MemberPattern = Ei),
  (vi.RestElement = function (e, t, s) {
    return s(e.argument, t, 'Pattern')
  }),
  (vi.ArrayPattern = function (e, t, s) {
    for (var i = 0, n = e.elements; i < n.length; i += 1) {
      var r = n[i]
      r && s(r, t, 'Pattern')
    }
  }),
  (vi.ObjectPattern = function (e, t, s) {
    for (var i = 0, n = e.properties; i < n.length; i += 1) {
      var r = n[i]
      'Property' === r.type
        ? (r.computed && s(r.key, t, 'Expression'), s(r.value, t, 'Pattern'))
        : 'RestElement' === r.type && s(r.argument, t, 'Pattern')
    }
  }),
  (vi.Expression = Ei),
  (vi.ThisExpression = vi.Super = vi.MetaProperty = bi),
  (vi.ArrayExpression = function (e, t, s) {
    for (var i = 0, n = e.elements; i < n.length; i += 1) {
      var r = n[i]
      r && s(r, t, 'Expression')
    }
  }),
  (vi.ObjectExpression = function (e, t, s) {
    for (var i = 0, n = e.properties; i < n.length; i += 1) {
      s(n[i], t)
    }
  }),
  (vi.FunctionExpression = vi.ArrowFunctionExpression = vi.FunctionDeclaration),
  (vi.SequenceExpression = function (e, t, s) {
    for (var i = 0, n = e.expressions; i < n.length; i += 1) {
      s(n[i], t, 'Expression')
    }
  }),
  (vi.TemplateLiteral = function (e, t, s) {
    for (var i = 0, n = e.quasis; i < n.length; i += 1) {
      s(n[i], t)
    }
    for (var r = 0, a = e.expressions; r < a.length; r += 1) {
      s(a[r], t, 'Expression')
    }
  }),
  (vi.TemplateElement = bi),
  (vi.UnaryExpression = vi.UpdateExpression =
    function (e, t, s) {
      s(e.argument, t, 'Expression')
    }),
  (vi.BinaryExpression = vi.LogicalExpression =
    function (e, t, s) {
      s(e.left, t, 'Expression'), s(e.right, t, 'Expression')
    }),
  (vi.AssignmentExpression = vi.AssignmentPattern =
    function (e, t, s) {
      s(e.left, t, 'Pattern'), s(e.right, t, 'Expression')
    }),
  (vi.ConditionalExpression = function (e, t, s) {
    s(e.test, t, 'Expression'),
      s(e.consequent, t, 'Expression'),
      s(e.alternate, t, 'Expression')
  }),
  (vi.NewExpression = vi.CallExpression =
    function (e, t, s) {
      if ((s(e.callee, t, 'Expression'), e.arguments))
        for (var i = 0, n = e.arguments; i < n.length; i += 1) {
          s(n[i], t, 'Expression')
        }
    }),
  (vi.MemberExpression = function (e, t, s) {
    s(e.object, t, 'Expression'), e.computed && s(e.property, t, 'Expression')
  }),
  (vi.ExportNamedDeclaration = vi.ExportDefaultDeclaration =
    function (e, t, s) {
      e.declaration &&
        s(
          e.declaration,
          t,
          'ExportNamedDeclaration' === e.type || e.declaration.id
            ? 'Statement'
            : 'Expression'
        ),
        e.source && s(e.source, t, 'Expression')
    }),
  (vi.ExportAllDeclaration = function (e, t, s) {
    s(e.source, t, 'Expression')
  }),
  (vi.ImportDeclaration = function (e, t, s) {
    for (var i = 0, n = e.specifiers; i < n.length; i += 1) {
      s(n[i], t)
    }
    s(e.source, t, 'Expression')
  }),
  (vi.ImportExpression = function (e, t, s) {
    s(e.source, t, 'Expression')
  }),
  (vi.ImportSpecifier =
    vi.ImportDefaultSpecifier =
    vi.ImportNamespaceSpecifier =
    vi.Identifier =
    vi.Literal =
      bi),
  (vi.TaggedTemplateExpression = function (e, t, s) {
    s(e.tag, t, 'Expression'), s(e.quasi, t, 'Expression')
  }),
  (vi.ClassDeclaration = vi.ClassExpression =
    function (e, t, s) {
      return s(e, t, 'Class')
    }),
  (vi.Class = function (e, t, s) {
    e.id && s(e.id, t, 'Pattern'),
      e.superClass && s(e.superClass, t, 'Expression'),
      s(e.body, t)
  }),
  (vi.ClassBody = function (e, t, s) {
    for (var i = 0, n = e.body; i < n.length; i += 1) {
      s(n[i], t)
    }
  }),
  (vi.MethodDefinition = vi.Property =
    function (e, t, s) {
      e.computed && s(e.key, t, 'Expression'), s(e.value, t, 'Expression')
    })
const Ci = /[@#]__PURE__/,
  ki = (e) => Ci.test(e.text)
let Pi = 'sourceMa'
Pi += 'ppingURL'
const wi = new RegExp('^#\\s+sourceMappingURL=.+\\n?'),
  Ni = () => {}
let _i = () => [0, 0],
  Ii = () => 0,
  $i = () => 0,
  Ti = {}
function Li(e, t) {
  switch (t) {
    case 1:
      return `# ${e}`
    case 2:
      return `## ${e}`
    case 3:
      return e
    default:
      return `${'  '.repeat(t - 4)}- ${e}`
  }
}
function Ri(e, t = 3) {
  ;(e = Li(e, t)),
    Ti.hasOwnProperty(e) ||
      (Ti[e] = {
        memory: 0,
        startMemory: void 0,
        startTime: void 0,
        time: 0,
        totalMemory: 0,
      })
  const s = $i()
  ;(Ti[e].startTime = _i()), (Ti[e].startMemory = s)
}
function Mi(e, t = 3) {
  if (((e = Li(e, t)), Ti.hasOwnProperty(e))) {
    const t = $i()
    ;(Ti[e].time += Ii(Ti[e].startTime)),
      (Ti[e].totalMemory = Math.max(Ti[e].totalMemory, t)),
      (Ti[e].memory += t - Ti[e].startMemory)
  }
}
function Oi() {
  const e = {}
  for (const t of Object.keys(Ti))
    e[t] = [Ti[t].time, Ti[t].memory, Ti[t].totalMemory]
  return e
}
let Di = Ni,
  Vi = Ni
const Bi = {
  load: !0,
  ongenerate: !0,
  onwrite: !0,
  resolveDynamicImport: !0,
  resolveId: !0,
  transform: !0,
  transformBundle: !0,
}
function Fi(e, t) {
  const s = {}
  for (const i of Object.keys(e))
    if (!0 === Bi[i]) {
      let n = `plugin ${t}`
      e.name && (n += ` (${e.name})`),
        (n += ` - ${i}`),
        (s[i] = function () {
          Di(n, 4)
          const t = e[i].apply(this === s ? e : this, arguments)
          return (
            Vi(n, 4),
            t &&
              'function' == typeof t.then &&
              (Di(`${n} (async)`, 4), t.then(() => Vi(`${n} (async)`, 4))),
            t
          )
        })
    } else s[i] = e[i]
  return s
}
function Wi(e) {
  e.perf
    ? ((Ti = {}),
      'undefined' != typeof process && 'function' == typeof process.hrtime
        ? ((_i = process.hrtime.bind(process)),
          (Ii = (e) => {
            return 1e3 * (t = process.hrtime(e))[0] + t[1] / 1e6
            var t
          }))
        : 'undefined' != typeof performance &&
          'function' == typeof performance.now &&
          ((_i = () => [performance.now(), 0]),
          (Ii = (e) => performance.now() - e[0])),
      'undefined' != typeof process &&
        'function' == typeof process.memoryUsage &&
        ($i = () => process.memoryUsage().heapUsed),
      (Di = Ri),
      (Vi = Mi),
      (e.plugins = e.plugins.map(Fi)))
    : ((Di = Ni), (Vi = Ni))
}
const Ui = { ecmaVersion: 2020, preserveParens: !1, sourceType: 'module' }
function ji(e, t, s, i) {
  return t.error(
    {
      code: 'MISSING_EXPORT',
      message: `'${e}' is not exported by ${os(s)}, imported by ${os(t.id)}`,
      url: 'https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module',
    },
    i
  )
}
const zi = { identifier: null, localName: '_missingExportShim' }
function Gi(e, t, s, i = new Map()) {
  const n = i.get(t)
  if (n) {
    if (n.has(e)) return null
    n.add(e)
  } else i.set(t, new Set([e]))
  return e.getVariableForExportName(t, s, i)
}
class Hi {
  constructor(e, t, s, i, n) {
    ;(this.chunk = null),
      (this.chunkFileNames = new Set()),
      (this.chunkName = null),
      (this.comments = []),
      (this.dependencies = []),
      (this.dynamicallyImportedBy = []),
      (this.dynamicDependencies = []),
      (this.dynamicImports = []),
      (this.entryPointsHash = new Uint8Array(10)),
      (this.execIndex = 1 / 0),
      (this.exportAllModules = []),
      (this.exportAllSources = new Set()),
      (this.exports = Object.create(null)),
      (this.exportsAll = Object.create(null)),
      (this.exportShimVariable = new Ht(this)),
      (this.facadeChunk = null),
      (this.importDescriptions = Object.create(null)),
      (this.importMetas = []),
      (this.imports = new Set()),
      (this.isExecuted = !1),
      (this.isUserDefinedEntryPoint = !1),
      (this.manualChunkAlias = null),
      (this.reexportDescriptions = Object.create(null)),
      (this.sources = new Set()),
      (this.userChunkNames = new Set()),
      (this.usesTopLevelAwait = !1),
      (this.allExportNames = null),
      (this.defaultExport = null),
      (this.namespaceVariable = null),
      (this.syntheticExports = new Map()),
      (this.transformDependencies = []),
      (this.transitiveReexports = null),
      (this.id = t),
      (this.graph = e),
      (this.excludeFromSourcemap = /\0/.test(t)),
      (this.context = e.getModuleContext(t)),
      (this.moduleSideEffects = s),
      (this.syntheticNamedExports = i),
      (this.isEntryPoint = n)
  }
  basename() {
    const e = at(this.id),
      t = ht(this.id)
    return et(t ? e.slice(0, -t.length) : e)
  }
  bindReferences() {
    this.ast.bind()
  }
  error(e, t) {
    if ('number' == typeof t) {
      e.pos = t
      let s = gt(this.code, t, { offsetLine: 1 })
      try {
        s = (function (e, t) {
          const s = e.filter((e) => e.mappings)
          for (; s.length > 0; ) {
            const e = s.pop(),
              i = e.mappings[t.line - 1]
            let n = !1
            if (void 0 !== i)
              for (const s of i)
                if (s[0] >= t.column) {
                  if (1 === s.length) break
                  ;(t = {
                    column: s[3],
                    line: s[2] + 1,
                    name: 5 === s.length ? e.names[s[4]] : void 0,
                    source: e.sources[s[1]],
                  }),
                    (n = !0)
                  break
                }
            if (!n) throw new Error("Can't resolve original location of error.")
          }
          return t
        })(this.sourcemapChain, s)
      } catch (e) {
        this.warn({
          code: 'SOURCEMAP_ERROR',
          loc: { column: s.column, file: this.id, line: s.line },
          message: `Error when using sourcemap for reporting an error: ${e.message}`,
          pos: t,
        })
      }
      ;(e.loc = { column: s.column, file: this.id, line: s.line }),
        (e.frame = ns(this.originalCode, s.line, s.column))
    }
    return ls(e)
  }
  getAllExportNames() {
    if (this.allExportNames) return this.allExportNames
    const e = (this.allExportNames = new Set())
    for (const t of Object.keys(this.exports)) e.add(t)
    for (const t of Object.keys(this.reexportDescriptions)) e.add(t)
    for (const t of this.exportAllModules)
      if (t instanceof ut) e.add(`*${t.id}`)
      else for (const s of t.getAllExportNames()) 'default' !== s && e.add(s)
    return e
  }
  getDefaultExport() {
    return (
      null === this.defaultExport &&
        ((this.defaultExport = void 0),
        (this.defaultExport = this.getVariableForExportName('default'))),
      this.defaultExport
        ? this.defaultExport
        : ls({
            code: us.SYNTHETIC_NAMED_EXPORTS_NEED_DEFAULT,
            id: this.id,
            message:
              "Modules with 'syntheticNamedExports' need a default export.",
          })
    )
  }
  getDynamicImportExpressions() {
    return this.dynamicImports.map(({ node: e }) => {
      const t = e.source
      return t instanceof di &&
        1 === t.quasis.length &&
        t.quasis[0].value.cooked
        ? t.quasis[0].value.cooked
        : t instanceof Ms && 'string' == typeof t.value
        ? t.value
        : t
    })
  }
  getExportNamesByVariable() {
    const e = new Map()
    for (const t of this.getAllExportNames()) {
      const s = this.getVariableForExportName(t)
      if (!s || !(s.included || s instanceof Ke)) continue
      const i = e.get(s)
      i ? i.push(t) : e.set(s, [t])
    }
    return e
  }
  getExports() {
    return Object.keys(this.exports)
  }
  getOrCreateNamespace() {
    return (
      this.namespaceVariable ||
        ((this.namespaceVariable = new qt(
          this.astContext,
          this.syntheticNamedExports
        )),
        this.namespaceVariable.initialise()),
      this.namespaceVariable
    )
  }
  getReexports() {
    if (this.transitiveReexports) return this.transitiveReexports
    this.transitiveReexports = []
    const e = new Set()
    for (const t in this.reexportDescriptions) e.add(t)
    for (const t of this.exportAllModules)
      if (t instanceof ut) e.add(`*${t.id}`)
      else
        for (const s of t.getExports().concat(t.getReexports()))
          'default' !== s && e.add(s)
    return (this.transitiveReexports = Array.from(e))
  }
  getRenderedExports() {
    const e = [],
      t = []
    for (const s in this.exports) {
      const i = this.getVariableForExportName(s)
      ;(i && i.included ? e : t).push(s)
    }
    return { renderedExports: e, removedExports: t }
  }
  getTransitiveDependencies() {
    return this.dependencies.concat(
      this.getReexports()
        .concat(this.getExports())
        .map((e) => this.getVariableForExportName(e).module)
    )
  }
  getVariableForExportName(e, t, s) {
    if ('*' === e[0]) {
      if (1 === e.length) return this.getOrCreateNamespace()
      return this.graph.moduleById.get(e.slice(1)).getVariableForExportName('*')
    }
    const i = this.reexportDescriptions[e]
    if (i) {
      const e = Gi(i.module, i.localName, !1, s)
      return e || ji(i.localName, this, i.module.id, i.start)
    }
    const n = this.exports[e]
    if (n) {
      if (n === zi) return this.exportShimVariable
      const e = n.localName
      return this.traceVariable(e) || this.graph.scope.findVariable(e)
    }
    if ('default' !== e)
      for (const t of this.exportAllModules) {
        const i = Gi(t, e, !0, s)
        if (i) return i
      }
    if (!t) {
      if (this.syntheticNamedExports) {
        let t = this.syntheticExports.get(e)
        if (!t) {
          const s = this.getDefaultExport()
          return (
            (t = new yi(this.astContext, e, s)),
            this.syntheticExports.set(e, t),
            t
          )
        }
        return t
      }
      if (this.graph.shimMissingExports)
        return this.shimMissingExport(e), this.exportShimVariable
    }
    return null
  }
  include() {
    const e = ne()
    this.ast.shouldBeIncluded(e) && this.ast.include(e, !1)
  }
  includeAllExports() {
    this.isExecuted || ((this.graph.needsTreeshakingPass = !0), dt(this))
    const e = ne()
    for (const t of this.getExports()) {
      const s = this.getVariableForExportName(t)
      s.deoptimizePath(ee),
        s.included || (s.include(e), (this.graph.needsTreeshakingPass = !0))
    }
    for (const t of this.getReexports()) {
      const s = this.getVariableForExportName(t)
      s.deoptimizePath(ee),
        s.included || (s.include(e), (this.graph.needsTreeshakingPass = !0)),
        s instanceof Ke && (s.module.reexported = !0)
    }
  }
  includeAllInBundle() {
    this.ast.include(ne(), !0)
  }
  isIncluded() {
    return (
      this.ast.included ||
      (this.namespaceVariable && this.namespaceVariable.included)
    )
  }
  linkDependencies() {
    for (const e of this.sources) {
      const t = this.resolvedIds[e].id
      if (t) {
        const e = this.graph.moduleById.get(t)
        this.dependencies.push(e)
      }
    }
    for (const { resolution: e } of this.dynamicImports)
      (e instanceof Hi || e instanceof ut) && this.dynamicDependencies.push(e)
    this.addModulesToImportDescriptions(this.importDescriptions),
      this.addModulesToImportDescriptions(this.reexportDescriptions)
    const e = []
    for (const t of this.exportAllSources) {
      const s = this.graph.moduleById.get(this.resolvedIds[t].id)
      ;(s instanceof ut ? e : this.exportAllModules).push(s)
    }
    this.exportAllModules = this.exportAllModules.concat(e)
  }
  render(e) {
    const t = this.magicString.clone()
    return (
      this.ast.render(t, e),
      (this.usesTopLevelAwait = this.astContext.usesTopLevelAwait),
      t
    )
  }
  setSource({
    ast: e,
    code: t,
    customTransformCache: s,
    moduleSideEffects: i,
    originalCode: n,
    originalSourcemap: r,
    resolvedIds: a,
    sourcemapChain: o,
    syntheticNamedExports: h,
    transformDependencies: l,
    transformFiles: c,
  }) {
    var u
    ;(this.code = t),
      (this.originalCode = n),
      (this.originalSourcemap = r),
      (this.sourcemapChain = o),
      c && (this.transformFiles = c),
      (this.transformDependencies = l),
      (this.customTransformCache = s),
      'boolean' == typeof i && (this.moduleSideEffects = i),
      'boolean' == typeof h && (this.syntheticNamedExports = h),
      Di('generate ast', 3),
      (this.esTreeAst =
        e ||
        (function (e, t, s) {
          try {
            return t.parse(
              e.code,
              Object.assign(Object.assign(Object.assign({}, Ui), s), {
                onComment: (t, s, i, n) =>
                  e.comments.push({ block: t, text: s, start: i, end: n }),
              })
            )
          } catch (t) {
            let s = t.message.replace(/ \(\d+:\d+\)$/, '')
            return (
              e.id.endsWith('.json')
                ? (s +=
                    ' (Note that you need @rollup/plugin-json to import JSON files)')
                : e.id.endsWith('.js') ||
                  (s +=
                    ' (Note that you need plugins to import files that are not JavaScript)'),
              e.error(
                { code: 'PARSE_ERROR', message: s, parserError: t },
                t.pos
              )
            )
          }
        })(this, this.graph.acornParser, this.graph.acornOptions)),
      (u = this.comments),
      Si(this.esTreeAst, { commentIndex: 0, commentNodes: u.filter(ki) }),
      Vi('generate ast', 3),
      (this.resolvedIds = a || Object.create(null))
    const d = this.id
    ;(this.magicString = new E(t, {
      filename: this.excludeFromSourcemap ? null : d,
      indentExclusionRanges: [],
    })),
      this.removeExistingSourceMap(),
      Di('analyse ast', 3),
      (this.astContext = {
        addDynamicImport: this.addDynamicImport.bind(this),
        addExport: this.addExport.bind(this),
        addImport: this.addImport.bind(this),
        addImportMeta: this.addImportMeta.bind(this),
        annotations:
          this.graph.treeshakingOptions &&
          this.graph.treeshakingOptions.annotations,
        code: t,
        deoptimizationTracker: this.graph.deoptimizationTracker,
        error: this.error.bind(this),
        fileName: d,
        getExports: this.getExports.bind(this),
        getModuleExecIndex: () => this.execIndex,
        getModuleName: this.basename.bind(this),
        getReexports: this.getReexports.bind(this),
        importDescriptions: this.importDescriptions,
        includeDynamicImport: this.includeDynamicImport.bind(this),
        includeVariable: this.includeVariable.bind(this),
        isCrossChunkImport: (e) => e.module.chunk !== this.chunk,
        magicString: this.magicString,
        module: this,
        moduleContext: this.context,
        nodeConstructors: xi,
        preserveModules: this.graph.preserveModules,
        propertyReadSideEffects:
          !this.graph.treeshakingOptions ||
          this.graph.treeshakingOptions.propertyReadSideEffects,
        traceExport: this.getVariableForExportName.bind(this),
        traceVariable: this.traceVariable.bind(this),
        treeshake: !!this.graph.treeshakingOptions,
        tryCatchDeoptimization:
          !this.graph.treeshakingOptions ||
          this.graph.treeshakingOptions.tryCatchDeoptimization,
        unknownGlobalSideEffects:
          !this.graph.treeshakingOptions ||
          this.graph.treeshakingOptions.unknownGlobalSideEffects,
        usesTopLevelAwait: !1,
        warn: this.warn.bind(this),
        warnDeprecation: this.graph.warnDeprecation.bind(this.graph),
      }),
      (this.scope = new pi(this.graph.scope, this.astContext)),
      (this.ast = new ci(
        this.esTreeAst,
        { type: 'Module', context: this.astContext },
        this.scope
      )),
      Vi('analyse ast', 3)
  }
  toJSON() {
    return {
      ast: this.esTreeAst,
      code: this.code,
      customTransformCache: this.customTransformCache,
      dependencies: this.dependencies.map((e) => e.id),
      id: this.id,
      moduleSideEffects: this.moduleSideEffects,
      originalCode: this.originalCode,
      originalSourcemap: this.originalSourcemap,
      resolvedIds: this.resolvedIds,
      sourcemapChain: this.sourcemapChain,
      syntheticNamedExports: this.syntheticNamedExports,
      transformDependencies: this.transformDependencies,
      transformFiles: this.transformFiles,
    }
  }
  traceVariable(e) {
    const t = this.scope.variables.get(e)
    if (t) return t
    if (e in this.importDescriptions) {
      const t = this.importDescriptions[e],
        s = t.module
      if (s instanceof Hi && '*' === t.name) return s.getOrCreateNamespace()
      const i = s.getVariableForExportName(t.name)
      return i || ji(t.name, this, s.id, t.start)
    }
    return null
  }
  warn(e, t) {
    if ('number' == typeof t) {
      e.pos = t
      const { line: s, column: i } = gt(this.code, t, { offsetLine: 1 })
      ;(e.loc = { file: this.id, line: s, column: i }),
        (e.frame = ns(this.code, s, i))
    }
    ;(e.id = this.id), this.graph.warn(e)
  }
  addDynamicImport(e) {
    this.dynamicImports.push({ node: e, resolution: null })
  }
  addExport(e) {
    if (e instanceof zt)
      this.exports.default = {
        identifier: e.variable.getAssignedVariableName(),
        localName: 'default',
      }
    else if (e instanceof Ns) {
      const t = e.source.value
      this.sources.add(t), this.exportAllSources.add(t)
    } else if (e.source instanceof Ms) {
      const t = e.source.value
      this.sources.add(t)
      for (const s of e.specifiers) {
        const e = s.exported.name
        this.reexportDescriptions[e] = {
          localName: 'ExportNamespaceSpecifier' === s.type ? '*' : s.local.name,
          module: null,
          source: t,
          start: s.start,
        }
      }
    } else if (e.declaration) {
      const t = e.declaration
      if (t instanceof gi)
        for (const e of t.declarations)
          for (const t of ws(e.id))
            this.exports[t] = { identifier: null, localName: t }
      else {
        const e = t.id.name
        this.exports[e] = { identifier: null, localName: e }
      }
    } else
      for (const t of e.specifiers) {
        const e = t.local.name,
          s = t.exported.name
        this.exports[s] = { identifier: null, localName: e }
      }
  }
  addImport(e) {
    const t = e.source.value
    this.sources.add(t)
    for (const s of e.specifiers) {
      const e = s.local.name
      if (this.importDescriptions[e])
        return this.error(
          { code: 'DUPLICATE_IMPORT', message: `Duplicated import '${e}'` },
          s.start
        )
      const i = 'ImportDefaultSpecifier' === s.type,
        n = 'ImportNamespaceSpecifier' === s.type,
        r = i ? 'default' : n ? '*' : s.imported.name
      this.importDescriptions[e] = {
        module: null,
        name: r,
        source: t,
        start: s.start,
      }
    }
  }
  addImportMeta(e) {
    this.importMetas.push(e)
  }
  addModulesToImportDescriptions(e) {
    for (const t of Object.keys(e)) {
      const s = e[t],
        i = this.resolvedIds[s.source].id
      s.module = this.graph.moduleById.get(i)
    }
  }
  includeDynamicImport(e) {
    const t = this.dynamicImports.find((t) => t.node === e).resolution
    t instanceof Hi &&
      (t.dynamicallyImportedBy.push(this), t.includeAllExports())
  }
  includeVariable(e, t) {
    const s = t.module
    t.included || (t.include(e), (this.graph.needsTreeshakingPass = !0)),
      s && s !== this && this.imports.add(t)
  }
  removeExistingSourceMap() {
    for (const e of this.comments)
      !e.block && wi.test(e.text) && this.magicString.remove(e.start, e.end)
  }
  shimMissingExport(e) {
    this.exports[e] ||
      (this.graph.warn({
        code: 'SHIMMED_EXPORT',
        exporter: os(this.id),
        exportName: e,
        message: `Missing export "${e}" has been shimmed in module ${os(
          this.id
        )}.`,
      }),
      (this.exports[e] = zi))
  }
}
class qi {
  constructor(e, t) {
    ;(this.isOriginal = !0), (this.filename = e), (this.content = t)
  }
  traceSegment(e, t, s) {
    return { line: e, column: t, name: s, source: this }
  }
}
class Ki {
  constructor(e, t) {
    ;(this.sources = t), (this.names = e.names), (this.mappings = e.mappings)
  }
  traceMappings() {
    const e = [],
      t = [],
      s = [],
      i = []
    for (const n of this.mappings) {
      const r = []
      for (const i of n) {
        if (1 == i.length) continue
        const n = this.sources[i[1]]
        if (!n) continue
        const a = n.traceSegment(
          i[2],
          i[3],
          5 === i.length ? this.names[i[4]] : ''
        )
        if (a) {
          let n = e.lastIndexOf(a.source.filename)
          if (-1 === n)
            (n = e.length), e.push(a.source.filename), (t[n] = a.source.content)
          else if (null == t[n]) t[n] = a.source.content
          else if (null != a.source.content && t[n] !== a.source.content)
            return ls({
              message: `Multiple conflicting contents for sourcemap source ${a.source.filename}`,
            })
          const o = [i[0], n, a.line, a.column]
          if (a.name) {
            let e = s.indexOf(a.name)
            ;-1 === e && ((e = s.length), s.push(a.name)), (o[4] = e)
          }
          r.push(o)
        }
      }
      i.push(r)
    }
    return { sources: e, sourcesContent: t, names: s, mappings: i }
  }
  traceSegment(e, t, s) {
    const i = this.mappings[e]
    if (!i) return null
    let n = 0,
      r = i.length - 1
    for (; n <= r; ) {
      const e = (n + r) >> 1,
        a = i[e]
      if (a[0] === t) {
        if (1 == a.length) return null
        const e = this.sources[a[1]]
        return e
          ? e.traceSegment(a[2], a[3], 5 === a.length ? this.names[a[4]] : s)
          : null
      }
      a[0] > t ? (r = e - 1) : (n = e + 1)
    }
    return null
  }
}
function Yi(e) {
  return function (t, s) {
    return s.mappings
      ? new Ki(s, [t])
      : (e.warn({
          code: 'SOURCEMAP_BROKEN',
          message:
            `Sourcemap is likely to be incorrect: a plugin (${s.plugin}) was used to transform ` +
            "files, but didn't generate a sourcemap for the transformation. Consult the plugin documentation for help",
          plugin: s.plugin,
          url: 'https://rollupjs.org/guide/en/#warning-sourcemap-is-likely-to-be-incorrect',
        }),
        new Ki({ mappings: [], names: [] }, [t]))
  }
}
function Xi(e, t, s, i, n) {
  let r
  if (s) {
    const t = s.sources,
      i = s.sourcesContent || [],
      n = ot(e) || '.',
      a = s.sourceRoot || '.',
      o = t.map((e, t) => new qi(ct(n, a, e), i[t]))
    r = new Ki(s, o)
  } else r = new qi(e, t)
  return i.reduce(n, r)
}
const Qi = { amd: en, cjs: en, es: Zi, iife: en, system: Zi, umd: en }
function Ji(e, t, s, i, n, r, a) {
  for (const t of e) t.scope.addUsedOutsideNames(i, n)
  !(function (e, t) {
    for (const s of t) {
      for (const t of s.scope.variables.values())
        t.included &&
          !(
            t.renderBaseName ||
            (t instanceof Gt && t.getOriginalVariable() !== t)
          ) &&
          t.setRenderNames(null, ge(t.name, e))
      const t = s.getOrCreateNamespace()
      t.included && t.setRenderNames(null, ge(t.name, e))
    }
  })(i, e),
    Qi[n](i, s, t, r, a)
  for (const t of e) t.scope.deconflict(n)
}
function Zi(e, t, s, i) {
  for (const s of t) {
    const t = s.module,
      n = s.name
    let r
    ;(r =
      t instanceof ut && ('*' === n || 'default' === n)
        ? 'default' === n && i && t.exportsNamespace
          ? t.variableName + '__default'
          : t.variableName
        : n),
      s.setRenderNames(null, ge(r, e))
  }
}
function en(e, t, s, i, n) {
  for (const t of s) t.variableName = ge(t.variableName, e)
  for (const e of t) {
    const t = e.module
    if (t instanceof ut) {
      const s = e.name
      'default' === s && i && (t.exportsNamespace || t.exportsNames)
        ? e.setRenderNames(null, t.variableName + '__default')
        : '*' === s || 'default' === s
        ? e.setRenderNames(null, t.variableName)
        : e.setRenderNames(t.variableName, null)
    } else {
      const s = t.chunk
      'default' === s.exportMode || (n && e.isNamespace)
        ? e.setRenderNames(null, s.variableName)
        : e.setRenderNames(s.variableName, s.getVariableExportName(e))
    }
  }
}
const tn = (e, t) => (e.execIndex > t.execIndex ? 1 : -1)
function sn(e) {
  e.sort(tn)
}
function nn(e, t, s) {
  const i = [os(e)]
  let n = t
  for (; n !== e && (i.push(os(n)), (n = s[n]), n); );
  return i.push(i[0]), i.reverse(), i
}
function rn(e) {
  const t = e.split('\n'),
    s = t.filter((e) => /^\t+/.test(e)),
    i = t.filter((e) => /^ {2,}/.test(e))
  if (0 === s.length && 0 === i.length) return null
  if (s.length >= i.length) return '\t'
  const n = i.reduce((e, t) => {
    const s = /^ +/.exec(t)[0].length
    return Math.min(s, e)
  }, 1 / 0)
  return new Array(n + 1).join(' ')
}
function an(e) {
  if (!e) return null
  if (('string' == typeof e && (e = JSON.parse(e)), '' === e.mappings))
    return { mappings: [], names: [], sources: [], version: 3 }
  let t
  return (
    (t =
      'string' == typeof e.mappings
        ? (function (e) {
            for (
              var t = [],
                i = [],
                n = [0, 0, 0, 0, 0],
                a = 0,
                o = 0,
                h = 0,
                l = 0;
              o < e.length;
              o++
            ) {
              var c = e.charCodeAt(o)
              if (44 === c) r(i, n, a), (a = 0)
              else if (59 === c)
                r(i, n, a), (a = 0), t.push(i), (i = []), (n[0] = 0)
              else {
                var u = s[c]
                if (void 0 === u)
                  throw new Error(
                    'Invalid character (' + String.fromCharCode(c) + ')'
                  )
                var d = 32 & u
                if (((l += (u &= 31) << h), d)) h += 5
                else {
                  var p = 1 & l
                  ;(l >>>= 1),
                    p && (l = 0 === l ? -2147483648 : -l),
                    (n[a] += l),
                    a++,
                    (l = h = 0)
                }
              }
            }
            return r(i, n, a), t.push(i), t
          })(e.mappings)
        : e.mappings),
    Object.assign(Object.assign({}, e), { mappings: t })
  )
}
function on(e, t, s) {
  return hs(e)
    ? e.replace(/\[(\w+)\]/g, (e, i) => {
        if (!s.hasOwnProperty(i))
          return ls(
            ms(`"[${i}]" is not a valid placeholder in "${t}" pattern.`)
          )
        const n = s[i]()
        return hs(n)
          ? n
          : ls(
              ms(
                `Invalid substitution "${n}" for placeholder "[${i}]" in "${t}" pattern, can be neither absolute nor relative path.`
              )
            )
      })
    : ls(
        ms(
          `Invalid pattern "${e}" for "${t}", patterns can be neither absolute nor relative paths and must not contain invalid characters.`
        )
      )
}
function hn(e, t) {
  const s = new Set(Object.keys(t).map((e) => e.toLowerCase()))
  if (!s.has(e.toLocaleLowerCase())) return e
  const i = ht(e)
  e = e.substr(0, e.length - i.length)
  let n,
    r = 1
  for (; s.has((n = e + ++r + i).toLowerCase()); );
  return n
}
const ln = ['.js', '.jsx', '.ts', '.tsx']
function cn(e, t, s, i) {
  let n
  return (
    'function' == typeof t ? (n = t(e.id)) : t && (n = t[e.id]),
    n ||
      (i
        ? (s.warn({
            code: 'MISSING_GLOBAL_NAME',
            guess: e.variableName,
            message: `No name was provided for external module '${e.id}' in output.globals – guessing '${e.variableName}'`,
            source: e.id,
          }),
          e.variableName)
        : void 0)
  )
}
function un(e) {
  return !e.isEmpty || e.entryModules.length > 0 || null !== e.manualChunkAlias
}
class dn {
  constructor(e, t) {
    ;(this.entryModules = []),
      (this.exportMode = 'named'),
      (this.facadeModule = null),
      (this.id = null),
      (this.indentString = void 0),
      (this.manualChunkAlias = null),
      (this.usedModules = void 0),
      (this.variableName = 'chunk'),
      (this.dependencies = void 0),
      (this.dynamicDependencies = void 0),
      (this.exportNames = Object.create(null)),
      (this.exports = new Set()),
      (this.fileName = null),
      (this.imports = new Set()),
      (this.name = null),
      (this.needsExportsShim = !1),
      (this.renderedDeclarations = void 0),
      (this.renderedHash = void 0),
      (this.renderedModuleSources = new Map()),
      (this.renderedSource = null),
      (this.renderedSourceLength = void 0),
      (this.sortedExportNames = null),
      (this.graph = e),
      (this.orderedModules = t),
      (this.execIndex = t.length > 0 ? t[0].execIndex : 1 / 0),
      (this.isEmpty = !0)
    for (const e of t)
      this.isEmpty && e.isIncluded() && (this.isEmpty = !1),
        e.manualChunkAlias && (this.manualChunkAlias = e.manualChunkAlias),
        (e.chunk = this),
        (e.isEntryPoint ||
          e.dynamicallyImportedBy.some((e) => -1 === t.indexOf(e))) &&
          this.entryModules.push(e)
    const s =
      this.entryModules[0] ||
      this.orderedModules[this.orderedModules.length - 1]
    s &&
      (this.variableName = et(
        at(s.chunkName || s.manualChunkAlias || as(s.id))
      ))
  }
  static generateFacade(e, t, s) {
    const i = new dn(e, [])
    i.assignFacadeName(s, t),
      t.facadeChunk || (t.facadeChunk = i),
      (i.dependencies = [t.chunk]),
      (i.dynamicDependencies = []),
      (i.facadeModule = t)
    for (const e of t.getAllExportNames()) {
      const s = t.getVariableForExportName(e)
      i.exports.add(s), (i.exportNames[e] = s)
    }
    return i
  }
  canModuleBeFacade(e) {
    for (const t of this.exports) if (!e.has(t)) return !1
    return !0
  }
  generateFacades() {
    const e = []
    for (const t of this.entryModules) {
      const s = Array.from(t.userChunkNames).map((e) => ({ name: e }))
      if (
        (0 === s.length && t.isUserDefinedEntryPoint && s.push({}),
        s.push(...Array.from(t.chunkFileNames).map((e) => ({ fileName: e }))),
        0 === s.length && s.push({}),
        !this.facadeModule)
      ) {
        const e = t.getExportNamesByVariable()
        if (this.graph.preserveModules || this.canModuleBeFacade(e)) {
          ;(this.facadeModule = t), (t.facadeChunk = this)
          for (const [t, s] of e) for (const e of s) this.exportNames[e] = t
          this.assignFacadeName(s.shift(), t)
        }
      }
      for (const i of s) e.push(dn.generateFacade(this.graph, t, i))
    }
    return e
  }
  generateId(e, t, s, i, n) {
    if (null !== this.fileName) return this.fileName
    const [r, a] =
      this.facadeModule && this.facadeModule.isUserDefinedEntryPoint
        ? [t.entryFileNames || '[name].js', 'output.entryFileNames']
        : [t.chunkFileNames || '[name]-[hash].js', 'output.chunkFileNames']
    return hn(
      on(r, a, {
        format: () => ('es' === t.format ? 'esm' : t.format),
        hash: () =>
          i ? this.computeContentHashWithDependencies(e, t, s, n) : '[hash]',
        name: () => this.getChunkName(),
      }),
      s
    )
  }
  generateIdPreserveModules(e, t, s) {
    const i = this.orderedModules[0].id,
      n = rs(i)
    let r
    if (it(i)) {
      const s = ht(i),
        a = on(
          t.entryFileNames ||
            (ln.includes(s) ? '[name].js' : '[name][extname].js'),
          'output.entryFileNames',
          {
            ext: () => s.substr(1),
            extname: () => s,
            format: () => ('es' === t.format ? 'esm' : t.format),
            name: () => this.getChunkName(),
          }
        )
      r = Q(e, `${ot(n)}/${a}`)
    } else r = `_virtual/${at(n)}`
    return hn(rt(r), s)
  }
  generateInternalExports(e) {
    if (null !== this.facadeModule) return
    const t = 'system' === e.format || 'es' === e.format || e.compact
    let s,
      i = 0
    if (
      ((this.exportNames = Object.create(null)),
      (this.sortedExportNames = null),
      t)
    )
      for (const e of this.exports) {
        const t = e.name[0]
        if (this.exportNames[t]) {
          do {
            ;(s = fe(++i)),
              49 === s.charCodeAt(0) &&
                ((i += 9 * Math.pow(64, s.length - 1)), (s = fe(i)))
          } while (me[s] || this.exportNames[s])
          this.exportNames[s] = e
        } else this.exportNames[t] = e
      }
    else
      for (const e of this.exports) {
        for (i = 0, s = e.name; this.exportNames[s]; ) s = e.name + '$' + ++i
        this.exportNames[s] = e
      }
  }
  getChunkName() {
    return this.name || (this.name = rs(this.getFallbackChunkName()))
  }
  getDynamicImportIds() {
    return this.dynamicDependencies.map((e) => e.id).filter(Boolean)
  }
  getExportNames() {
    return (
      this.sortedExportNames ||
      (this.sortedExportNames = Object.keys(this.exportNames).sort())
    )
  }
  getImportIds() {
    return this.dependencies.map((e) => e.id).filter(Boolean)
  }
  getRenderedHash(e) {
    if (this.renderedHash) return this.renderedHash
    if (!this.renderedSource) return ''
    const t = X(),
      s = this.calculateHashAugmentation(e)
    return (
      t.update(s),
      t.update(this.renderedSource.toString()),
      t.update(
        this.getExportNames()
          .map((e) => {
            const t = this.exportNames[e]
            return `${os(t.module.id).replace(/\\/g, '/')}:${t.name}:${e}`
          })
          .join(',')
      ),
      (this.renderedHash = t.digest('hex'))
    )
  }
  getRenderedSourceLength() {
    return void 0 !== this.renderedSourceLength
      ? this.renderedSourceLength
      : (this.renderedSourceLength = this.renderedSource.length())
  }
  getVariableExportName(e) {
    if (this.graph.preserveModules && e instanceof qt) return '*'
    for (const t of Object.keys(this.exportNames))
      if (this.exportNames[t] === e) return t
    throw new Error(
      `Internal Error: Could not find export name for variable ${e.name}.`
    )
  }
  link() {
    const e = new Set(),
      t = new Set()
    for (const s of this.orderedModules)
      this.addDependenciesToChunk(s.getTransitiveDependencies(), e),
        this.addDependenciesToChunk(s.dynamicDependencies, t),
        this.setUpChunkImportsAndExportsForModule(s)
    ;(this.dependencies = Array.from(e)),
      (this.dynamicDependencies = Array.from(t))
  }
  merge(e, t, s, i) {
    if (null !== this.facadeModule || null !== e.facadeModule)
      throw new Error(
        'Internal error: Code splitting chunk merges not supported for facades'
      )
    for (const t of e.orderedModules)
      (t.chunk = this), this.orderedModules.push(t)
    for (const t of e.imports)
      this.imports.has(t) || t.module.chunk === this || this.imports.add(t)
    for (const t of e.exports) this.exports.has(t) || this.exports.add(t)
    const n = this.exportNames
    this.generateInternalExports(s)
    const r = (e, t) => {
        if (e.imports)
          for (const s of e.imports)
            s.imported = this.getVariableExportName(t[s.imported])
        if (e.reexports)
          for (const s of e.reexports)
            s.imported = this.getVariableExportName(t[s.imported])
      },
      a = (e, t) => {
        t.imports &&
          (e.imports
            ? (e.imports = e.imports.concat(t.imports))
            : (e.imports = t.imports)),
          t.reexports &&
            (e.reexports
              ? (e.reexports = e.reexports.concat(t.reexports))
              : (e.reexports = t.reexports)),
          !e.exportsNames && t.exportsNames && (e.exportsNames = !0),
          !e.exportsDefault && t.exportsDefault && (e.exportsDefault = !0),
          (e.name = this.variableName)
      }
    for (const s of t) {
      let t = void 0
      for (let i = 0; i < s.dependencies.length; i++) {
        const o = s.dependencies[i]
        if ((o !== e && o !== this) || !t)
          o === e
            ? ((s.dependencies[i] = this),
              (t = s.renderedDeclarations.dependencies[i]),
              r(t, e.exportNames))
            : o === this &&
              ((t = s.renderedDeclarations.dependencies[i]), r(t, n))
        else {
          const h = s.renderedDeclarations.dependencies[i]
          r(h, o === e ? e.exportNames : n),
            a(t, h),
            s.renderedDeclarations.dependencies.splice(i, 1),
            s.dependencies.splice(i--, 1)
        }
      }
    }
    this.preRender(s, i)
  }
  preRender(e, t) {
    Di('render modules', 3)
    const s = new v({ separator: e.compact ? '' : '\n\n' })
    ;(this.usedModules = []),
      (this.indentString = e.compact
        ? ''
        : (function (e, t) {
            if (!0 !== t.indent) return t.indent || ''
            for (let t = 0; t < e.length; t++) {
              const s = rn(e[t].originalCode)
              if (null !== s) return s
            }
            return '\t'
          })(this.orderedModules, e))
    const i = e.compact ? '' : '\n',
      n = e.compact ? '' : ' ',
      r = {
        compact: e.compact,
        dynamicImportFunction: e.dynamicImportFunction,
        format: e.format,
        freeze: !1 !== e.freeze,
        indent: this.indentString,
        namespaceToStringTag: !0 === e.namespaceToStringTag,
        varOrConst: e.preferConst ? 'const' : 'var',
      }
    for (const { module: e } of this.imports) {
      const t = e instanceof Hi ? e.chunk : e
      ;-1 === this.dependencies.indexOf(t) && this.dependencies.push(t)
    }
    if (
      !1 !== e.hoistTransitiveImports &&
      !this.graph.preserveModules &&
      null !== this.facadeModule
    )
      for (const e of this.dependencies)
        e instanceof dn && this.inlineChunkDependencies(e, !0)
    for (let e = 0; e < this.dependencies.length; e++) {
      const t = this.dependencies[e]
      t instanceof dn &&
        t.isEmpty &&
        (this.dependencies.splice(e--, 1), this.inlineChunkDependencies(t, !1))
    }
    sn(this.dependencies),
      this.prepareDynamicImports(),
      this.setIdentifierRenderResolutions(e)
    let a = ''
    const o = (this.renderedModules = Object.create(null))
    for (const t of this.orderedModules) {
      let n = 0
      if (t.isIncluded()) {
        const o = t.render(r).trim()
        e.compact && -1 !== o.lastLine().indexOf('//') && o.append('\n')
        const h = t.getOrCreateNamespace()
        if (
          (h.included || o.length() > 0) &&
          ((n = o.length()),
          this.renderedModuleSources.set(t, o),
          s.addSource(o),
          this.usedModules.push(t),
          h.included && !this.graph.preserveModules)
        ) {
          const e = h.renderBlock(r)
          h.renderFirst() ? (a += i + e) : s.addSource(new E(e))
        }
      }
      const { renderedExports: h, removedExports: l } = t.getRenderedExports()
      o[t.id] = {
        originalLength: t.originalCode.length,
        removedExports: l,
        renderedExports: h,
        renderedLength: n,
      }
    }
    if (
      (a && s.prepend(a + i + i),
      this.needsExportsShim &&
        s.prepend(
          `${i}${r.varOrConst} _missingExportShim${n}=${n}void 0;${i}${i}`
        ),
      e.compact ? (this.renderedSource = s) : (this.renderedSource = s.trim()),
      (this.renderedSourceLength = void 0),
      (this.renderedHash = void 0),
      this.isEmpty &&
        0 === this.getExportNames().length &&
        0 === this.dependencies.length)
    ) {
      const e = this.getChunkName()
      this.graph.warn({
        chunkName: e,
        code: 'EMPTY_BUNDLE',
        message: `Generated an empty chunk: "${e}"`,
      })
    }
    this.setExternalRenderPaths(e, t),
      (this.renderedDeclarations = {
        dependencies: this.getChunkDependencyDeclarations(e),
        exports:
          'none' === this.exportMode ? [] : this.getChunkExportDeclarations(),
      }),
      Vi('render modules', 3)
  }
  render(e, t, s, i) {
    Di('render format', 3)
    const n = e.format,
      r = ks[n]
    e.dynamicImportFunction &&
      'es' !== n &&
      this.graph.warn({
        code: 'INVALID_OPTION',
        message:
          '"output.dynamicImportFunction" is ignored for formats other than "esm".',
      })
    for (let e = 0; e < this.dependencies.length; e++) {
      const t = this.dependencies[e]
      if (t instanceof ut && !t.renormalizeRenderPath) continue
      const s = this.renderedDeclarations.dependencies[e],
        i = t instanceof ut ? s.id : t.id
      t instanceof dn && (s.namedExportsMode = 'default' !== t.exportMode),
        (s.id = this.getRelativePath(i))
    }
    this.finaliseDynamicImports(n), this.finaliseImportMetas(n, i)
    const a =
      0 !== this.renderedDeclarations.exports.length ||
      this.renderedDeclarations.dependencies.some(
        (e) => e.reexports && 0 !== e.reexports.length
      )
    let o = !1
    const h = new Set()
    for (const e of this.orderedModules) {
      e.usesTopLevelAwait && (o = !0)
      const t = e.scope.accessedGlobalVariablesByFormat,
        s = t && t.get(n)
      if (s) for (const e of s) h.add(e)
    }
    if (o && 'es' !== n && 'system' !== n)
      return ls({
        code: 'INVALID_TLA_FORMAT',
        message: `Module format ${n} does not support top-level await. Use the "es" or "system" output formats rather.`,
      })
    const l = r(
      this.renderedSource,
      {
        accessedGlobals: h,
        dependencies: this.renderedDeclarations.dependencies,
        exports: this.renderedDeclarations.exports,
        hasExports: a,
        indentString: this.indentString,
        intro: t.intro,
        isEntryModuleFacade:
          this.graph.preserveModules ||
          (null !== this.facadeModule && this.facadeModule.isEntryPoint),
        namedExportsMode: 'default' !== this.exportMode,
        outro: t.outro,
        usesTopLevelAwait: o,
        varOrConst: e.preferConst ? 'const' : 'var',
        warn: this.graph.warn.bind(this.graph),
      },
      e
    )
    t.banner && l.prepend(t.banner), t.footer && l.append(t.footer)
    const u = l.toString()
    Vi('render format', 3)
    let d = null
    const p = []
    return (function ({
      chunk: e,
      code: t,
      options: s,
      outputPluginDriver: i,
      renderChunk: n,
      sourcemapChain: r,
    }) {
      const a = (e, t, s) => {
        if (null == t) return e
        if (
          ('string' == typeof t && (t = { code: t, map: void 0 }),
          null !== t.map)
        ) {
          const e = an(t.map)
          r.push(e || { missing: !0, plugin: s.name })
        }
        return t.code
      }
      let o = !1,
        h = !0
      return i
        .hookReduceArg0('renderChunk', [t, n, s], a)
        .then(
          (t) => ((h = !1), i.hookReduceArg0('transformChunk', [t, s, e], a))
        )
        .then(
          (t) => ((o = !0), i.hookReduceArg0('transformBundle', [t, s, e], a))
        )
        .catch((e) => {
          if (h) throw e
          return ls(e, {
            code: o ? 'BAD_BUNDLE_TRANSFORMER' : 'BAD_CHUNK_TRANSFORMER',
            message: `Error transforming ${
              (o ? 'bundle' : 'chunk') +
              (e.plugin ? ` with '${e.plugin}' plugin` : '')
            }: ${e.message}`,
            plugin: e.plugin,
          })
        })
    })({
      chunk: this,
      code: u,
      options: e,
      outputPluginDriver: i,
      renderChunk: s,
      sourcemapChain: p,
    }).then((t) => {
      if (e.sourcemap) {
        let t
        Di('sourcemap', 3),
          (t = e.file
            ? ct(e.sourcemapFile || e.file)
            : e.dir
            ? ct(e.dir, this.id)
            : ct(this.id))
        const s = l.generateDecodedMap({})
        ;(d = (function (e, t, s, i, n, r) {
          const a = Yi(e.graph),
            o = i
              .filter((e) => !e.excludeFromSourcemap)
              .map((e) =>
                Xi(
                  e.id,
                  e.originalCode,
                  e.originalSourcemap,
                  e.sourcemapChain,
                  a
                )
              )
          let h = new Ki(s, o)
          h = n.reduce(a, h)
          let {
            sources: l,
            sourcesContent: u,
            names: d,
            mappings: p,
          } = h.traceMappings()
          if (t) {
            const e = ot(t)
            ;(l = l.map((t) => lt(e, t))), (t = at(t))
          }
          return (
            (u = r ? null : u),
            new c({
              file: t,
              sources: l,
              sourcesContent: u,
              names: d,
              mappings: p,
            })
          )
        })(this, t, s, this.usedModules, p, e.sourcemapExcludeSources)),
          (d.sources = d.sources.map((t) =>
            rt(e.sourcemapPathTransform ? e.sourcemapPathTransform(t) : t)
          )),
          Vi('sourcemap', 3)
      }
      return (
        !0 !== e.compact && '\n' !== t[t.length - 1] && (t += '\n'),
        { code: t, map: d }
      )
    })
  }
  visitDependencies(e) {
    const t = [this],
      s = new Set()
    for (const i of t)
      if ((e(i), !(i instanceof ut)))
        for (const e of i.dependencies.concat(i.dynamicDependencies))
          s.has(e) || (s.add(e), t.push(e))
  }
  visitStaticDependenciesUntilCondition(e) {
    const t = new Set()
    return (function s(i) {
      if (!t.has(i)) {
        if ((t.add(i), i instanceof dn))
          for (const e of i.dependencies) if (s(e)) return !0
        return !0 === e(i)
      }
    })(this)
  }
  addDependenciesToChunk(e, t) {
    for (const s of e) {
      if (s.chunk === this) continue
      let e
      if (s instanceof Hi) e = s.chunk
      else {
        if (!s.used && !s.moduleSideEffects) continue
        e = s
      }
      t.add(e)
    }
  }
  assignFacadeName({ fileName: e, name: t }, s) {
    e ? (this.fileName = e) : (this.name = rs(t || s.chunkName || as(s.id)))
  }
  calculateHashAugmentation(e) {
    const t = this.facadeModule,
      s = this.getChunkName.bind(this),
      i = {
        dynamicImports: this.getDynamicImportIds(),
        exports: this.getExportNames(),
        facadeModuleId: t && t.id,
        imports: this.getImportIds(),
        isDynamicEntry: null !== t && t.dynamicallyImportedBy.length > 0,
        isEntry: null !== t && t.isEntryPoint,
        modules: this.renderedModules,
        get name() {
          return s()
        },
      }
    return e.hookReduceValueSync(
      'augmentChunkHash',
      '',
      [i],
      (e, t) => (t && (e += t), e)
    )
  }
  computeContentHashWithDependencies(e, t, s, i) {
    const n = X()
    return (
      n.update(
        [e.intro, e.outro, e.banner, e.footer].map((e) => e || '').join(':')
      ),
      n.update(t.format),
      this.visitDependencies((r) => {
        r instanceof ut
          ? n.update(':' + r.renderPath)
          : (n.update(r.getRenderedHash(i)),
            n.update(r.generateId(e, t, s, !1, i)))
      }),
      n.digest('hex').substr(0, 8)
    )
  }
  finaliseDynamicImports(e) {
    for (const [t, s] of this.renderedModuleSources)
      for (const { node: i, resolution: n } of t.dynamicImports)
        if (n)
          if (n instanceof Hi) {
            if (n.chunk !== this && un(n.chunk)) {
              const t = n.facadeChunk || n.chunk
              i.renderFinalResolution(s, `'${this.getRelativePath(t.id)}'`, e)
            }
          } else
            i.renderFinalResolution(
              s,
              n instanceof ut
                ? `'${
                    n.renormalizeRenderPath
                      ? this.getRelativePath(n.renderPath)
                      : n.id
                  }'`
                : n,
              e
            )
  }
  finaliseImportMetas(e, t) {
    for (const [s, i] of this.renderedModuleSources)
      for (const n of s.importMetas) n.renderFinalMechanism(i, this.id, e, t)
  }
  getChunkDependencyDeclarations(e) {
    const t = new Map()
    for (let s of this.getExportNames()) {
      let i,
        n,
        r = !1
      if ('*' === s[0])
        (r = !1 !== e.externalLiveBindings),
          (i = this.graph.moduleById.get(s.substr(1))),
          (n = s = '*')
      else {
        const t = this.exportNames[s],
          a = t.module
        if (!a || a.chunk === this) continue
        a instanceof Hi
          ? ((i = a.chunk),
            (n = i.getVariableExportName(t)),
            (r = t.isReassigned))
          : ((i = a), (n = t.name), (r = !1 !== e.externalLiveBindings))
      }
      let a = t.get(i)
      a || t.set(i, (a = [])),
        a.push({ imported: n, reexported: s, needsLiveBinding: r })
    }
    const s = new Set(),
      i = []
    for (const n of this.dependencies) {
      const r = []
      for (const e of this.imports) {
        const t = e instanceof Gt ? e.getOriginalVariable() : e
        ;(e.module instanceof Hi ? e.module.chunk !== n : e.module !== n) ||
          s.has(t) ||
          (s.add(t),
          r.push({
            imported:
              e.module instanceof ut
                ? e.name
                : e.module.chunk.getVariableExportName(e),
            local: e.getName(),
          }))
      }
      const a = t.get(n)
      let o,
        h,
        l = !0
      n instanceof ut
        ? ((o = n.exportsNames || n.exportsNamespace),
          (h = 'default' in n.declarations))
        : ((o = !0), (h = !1), (l = 'default' !== n.exportMode))
      let c = void 0,
        u = void 0
      n instanceof ut &&
        ((c = n.renderPath),
        ('umd' !== e.format && 'iife' !== e.format) ||
          (u = cn(n, e.globals, this.graph, o || h))),
        i.push({
          exportsDefault: h,
          exportsNames: o,
          globalName: u,
          id: c,
          imports: r.length > 0 ? r : null,
          isChunk: n instanceof dn,
          name: n.variableName,
          namedExportsMode: l,
          reexports: a,
        })
    }
    return i
  }
  getChunkExportDeclarations() {
    const e = []
    for (const t of this.getExportNames()) {
      if ('*' === t[0]) continue
      const s = this.exportNames[t],
        i = s.module
      if (i && i.chunk !== this) continue
      let n = !1,
        r = !1
      if (s instanceof pt) {
        s.init === ve && (r = !0)
        for (const e of s.declarations)
          if (
            e.parent instanceof Ut ||
            (e instanceof zt && e.declaration instanceof Ut)
          ) {
            n = !0
            break
          }
      } else s instanceof Vt && (n = !0)
      const a = s.getName()
      e.push({
        exported: '*' === t ? a : t,
        hoisted: n,
        local: a,
        uninitialized: r,
      })
    }
    return e
  }
  getFallbackChunkName() {
    return this.manualChunkAlias
      ? this.manualChunkAlias
      : this.fileName
      ? as(this.fileName)
      : as(this.orderedModules[this.orderedModules.length - 1].id)
  }
  getRelativePath(e) {
    const t = rt(Q(ot(this.id), e))
    return t.startsWith('../') ? t : './' + t
  }
  inlineChunkDependencies(e, t) {
    for (const s of e.dependencies)
      if (s instanceof ut)
        -1 === this.dependencies.indexOf(s) && this.dependencies.push(s)
      else {
        if (s === this || -1 !== this.dependencies.indexOf(s)) continue
        s.isEmpty || this.dependencies.push(s),
          t && this.inlineChunkDependencies(s, !0)
      }
  }
  prepareDynamicImports() {
    for (const e of this.orderedModules)
      for (const { node: t, resolution: s } of e.dynamicImports)
        if (t.included)
          if (s instanceof Hi)
            if (s.chunk === this) {
              const e = s.getOrCreateNamespace()
              t.setResolution('named', e)
            } else t.setResolution(s.chunk.exportMode)
          else t.setResolution('auto')
  }
  setExternalRenderPaths(e, t) {
    for (const s of this.dependencies.concat(this.dynamicDependencies))
      s instanceof ut && s.setRenderPath(e, t)
  }
  setIdentifierRenderResolutions(e) {
    for (const t of this.getExportNames()) {
      const s = this.exportNames[t]
      s &&
        (s instanceof Ht && (this.needsExportsShim = !0),
        (s.exportName = t),
        'es' === e.format ||
        'system' === e.format ||
        !s.isReassigned ||
        s.isId ||
        (s instanceof Gt && s.hasId)
          ? s.setRenderNames(null, null)
          : s.setRenderNames('exports', t))
    }
    const t = new Set()
    this.needsExportsShim && t.add('_missingExportShim'),
      'es' !== e.format &&
        (t.add('exports'),
        'cjs' === e.format &&
          t
            .add('_interopDefault')
            .add('require')
            .add('module')
            .add('__filename')
            .add('__dirname')),
      Ji(
        this.orderedModules,
        this.dependencies,
        this.imports,
        t,
        e.format,
        !1 !== e.interop,
        this.graph.preserveModules
      )
  }
  setUpChunkImportsAndExportsForModule(e) {
    for (const t of e.imports)
      t.module.chunk !== this &&
        (this.imports.add(t),
        t.module instanceof Hi && t.module.chunk.exports.add(t))
    if (
      e.isEntryPoint ||
      e.dynamicallyImportedBy.some((e) => e.chunk !== this)
    ) {
      const t = e.getExportNamesByVariable()
      for (const e of t.keys()) {
        this.exports.add(e)
        const t = e.module
        t && t.chunk && t.chunk !== this && t.chunk.exports.add(e)
      }
    }
    if (e.getOrCreateNamespace().included)
      for (const t of Object.keys(e.reexportDescriptions)) {
        const s = e.reexportDescriptions[t],
          i = s.module.getVariableForExportName(s.localName)
        i.module.chunk !== this &&
          (this.imports.add(i),
          i.module instanceof Hi && i.module.chunk.exports.add(i))
      }
    const t = ne()
    for (const { node: s, resolution: i } of e.dynamicImports)
      s.included &&
        i instanceof Hi &&
        i.chunk === this &&
        i.getOrCreateNamespace().include(t)
  }
}
var pn = {
    3: 'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile',
    5: 'class enum extends super const export import',
    6: 'enum',
    strict:
      'implements interface let package private protected public static yield',
    strictBind: 'eval arguments',
  },
  fn =
    'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this',
  mn = {
    5: fn,
    '5module': fn + ' export import',
    6: fn + ' const class extends export import super',
  },
  gn = /^in(stanceof)?$/,
  xn =
    'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-Ᶎꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭧꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
  yn =
    '‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿',
  En = new RegExp('[' + xn + ']'),
  bn = new RegExp('[' + xn + yn + ']')
xn = yn = null
var vn = [
    0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48,
    48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5,
    39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22,
    11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2,
    2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111,
    72, 56, 50, 14, 50, 14, 35, 477, 28, 11, 0, 9, 21, 155, 22, 13, 52, 76, 44,
    33, 24, 27, 35, 30, 0, 12, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2,
    24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1,
    2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 0, 33, 47, 21, 1, 2, 0, 185,
    46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 0,
    161, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35,
    56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1,
    2, 31, 15, 0, 328, 18, 270, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582,
    8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74,
    6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 754, 9486, 286, 50, 2, 18, 3, 9,
    395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3,
    2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6,
    2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2,
    24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3,
    2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2,
    2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3,
    2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221,
    3, 5761, 15, 7472, 3104, 541,
  ],
  Sn = [
    509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1,
    574, 3, 9, 9, 525, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2,
    37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 4, 9, 83, 11, 7, 0, 161, 11,
    6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10,
    9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9,
    84, 14, 5, 9, 243, 14, 166, 9, 232, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0,
    10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2,
    6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26,
    9, 1014, 0, 2, 54, 8, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2,
    1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6,
    2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 792487, 239,
  ]
function An(e, t) {
  for (var s = 65536, i = 0; i < t.length; i += 2) {
    if ((s += t[i]) > e) return !1
    if ((s += t[i + 1]) >= e) return !0
  }
}
function Cn(e, t) {
  return e < 65
    ? 36 === e
    : e < 91 ||
        (e < 97
          ? 95 === e
          : e < 123 ||
            (e <= 65535
              ? e >= 170 && En.test(String.fromCharCode(e))
              : !1 !== t && An(e, vn)))
}
function kn(e, t) {
  return e < 48
    ? 36 === e
    : e < 58 ||
        (!(e < 65) &&
          (e < 91 ||
            (e < 97
              ? 95 === e
              : e < 123 ||
                (e <= 65535
                  ? e >= 170 && bn.test(String.fromCharCode(e))
                  : !1 !== t && (An(e, vn) || An(e, Sn))))))
}
var Pn = function (e, t) {
  void 0 === t && (t = {}),
    (this.label = e),
    (this.keyword = t.keyword),
    (this.beforeExpr = !!t.beforeExpr),
    (this.startsExpr = !!t.startsExpr),
    (this.isLoop = !!t.isLoop),
    (this.isAssign = !!t.isAssign),
    (this.prefix = !!t.prefix),
    (this.postfix = !!t.postfix),
    (this.binop = t.binop || null),
    (this.updateContext = null)
}
function wn(e, t) {
  return new Pn(e, { beforeExpr: !0, binop: t })
}
var Nn = { beforeExpr: !0 },
  _n = { startsExpr: !0 },
  In = {}
function $n(e, t) {
  return void 0 === t && (t = {}), (t.keyword = e), (In[e] = new Pn(e, t))
}
var Tn = {
    num: new Pn('num', _n),
    regexp: new Pn('regexp', _n),
    string: new Pn('string', _n),
    name: new Pn('name', _n),
    eof: new Pn('eof'),
    bracketL: new Pn('[', { beforeExpr: !0, startsExpr: !0 }),
    bracketR: new Pn(']'),
    braceL: new Pn('{', { beforeExpr: !0, startsExpr: !0 }),
    braceR: new Pn('}'),
    parenL: new Pn('(', { beforeExpr: !0, startsExpr: !0 }),
    parenR: new Pn(')'),
    comma: new Pn(',', Nn),
    semi: new Pn(';', Nn),
    colon: new Pn(':', Nn),
    dot: new Pn('.'),
    question: new Pn('?', Nn),
    arrow: new Pn('=>', Nn),
    template: new Pn('template'),
    invalidTemplate: new Pn('invalidTemplate'),
    ellipsis: new Pn('...', Nn),
    backQuote: new Pn('`', _n),
    dollarBraceL: new Pn('${', { beforeExpr: !0, startsExpr: !0 }),
    eq: new Pn('=', { beforeExpr: !0, isAssign: !0 }),
    assign: new Pn('_=', { beforeExpr: !0, isAssign: !0 }),
    incDec: new Pn('++/--', { prefix: !0, postfix: !0, startsExpr: !0 }),
    prefix: new Pn('!/~', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    logicalOR: wn('||', 1),
    logicalAND: wn('&&', 2),
    bitwiseOR: wn('|', 3),
    bitwiseXOR: wn('^', 4),
    bitwiseAND: wn('&', 5),
    equality: wn('==/!=/===/!==', 6),
    relational: wn('</>/<=/>=', 7),
    bitShift: wn('<</>>/>>>', 8),
    plusMin: new Pn('+/-', {
      beforeExpr: !0,
      binop: 9,
      prefix: !0,
      startsExpr: !0,
    }),
    modulo: wn('%', 10),
    star: wn('*', 10),
    slash: wn('/', 10),
    starstar: new Pn('**', { beforeExpr: !0 }),
    _break: $n('break'),
    _case: $n('case', Nn),
    _catch: $n('catch'),
    _continue: $n('continue'),
    _debugger: $n('debugger'),
    _default: $n('default', Nn),
    _do: $n('do', { isLoop: !0, beforeExpr: !0 }),
    _else: $n('else', Nn),
    _finally: $n('finally'),
    _for: $n('for', { isLoop: !0 }),
    _function: $n('function', _n),
    _if: $n('if'),
    _return: $n('return', Nn),
    _switch: $n('switch'),
    _throw: $n('throw', Nn),
    _try: $n('try'),
    _var: $n('var'),
    _const: $n('const'),
    _while: $n('while', { isLoop: !0 }),
    _with: $n('with'),
    _new: $n('new', { beforeExpr: !0, startsExpr: !0 }),
    _this: $n('this', _n),
    _super: $n('super', _n),
    _class: $n('class', _n),
    _extends: $n('extends', Nn),
    _export: $n('export'),
    _import: $n('import', _n),
    _null: $n('null', _n),
    _true: $n('true', _n),
    _false: $n('false', _n),
    _in: $n('in', { beforeExpr: !0, binop: 7 }),
    _instanceof: $n('instanceof', { beforeExpr: !0, binop: 7 }),
    _typeof: $n('typeof', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _void: $n('void', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _delete: $n('delete', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  },
  Ln = /\r\n?|\n|\u2028|\u2029/,
  Rn = new RegExp(Ln.source, 'g')
function Mn(e, t) {
  return 10 === e || 13 === e || (!t && (8232 === e || 8233 === e))
}
var On = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
  Dn = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
  Vn = Object.prototype,
  Bn = Vn.hasOwnProperty,
  Fn = Vn.toString
function Wn(e, t) {
  return Bn.call(e, t)
}
var Un =
  Array.isArray ||
  function (e) {
    return '[object Array]' === Fn.call(e)
  }
function jn(e) {
  return new RegExp('^(?:' + e.replace(/ /g, '|') + ')$')
}
var zn = function (e, t) {
  ;(this.line = e), (this.column = t)
}
zn.prototype.offset = function (e) {
  return new zn(this.line, this.column + e)
}
var Gn = function (e, t, s) {
  ;(this.start = t),
    (this.end = s),
    null !== e.sourceFile && (this.source = e.sourceFile)
}
function Hn(e, t) {
  for (var s = 1, i = 0; ; ) {
    Rn.lastIndex = i
    var n = Rn.exec(e)
    if (!(n && n.index < t)) return new zn(s, t - i)
    ++s, (i = n.index + n[0].length)
  }
}
var qn = {
  ecmaVersion: 10,
  sourceType: 'script',
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: !1,
  allowImportExportEverywhere: !1,
  allowAwaitOutsideFunction: !1,
  allowHashBang: !1,
  locations: !1,
  onToken: null,
  onComment: null,
  ranges: !1,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: !1,
}
function Kn(e) {
  var t = {}
  for (var s in qn) t[s] = e && Wn(e, s) ? e[s] : qn[s]
  if (
    (t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009),
    null == t.allowReserved && (t.allowReserved = t.ecmaVersion < 5),
    Un(t.onToken))
  ) {
    var i = t.onToken
    t.onToken = function (e) {
      return i.push(e)
    }
  }
  return (
    Un(t.onComment) &&
      (t.onComment = (function (e, t) {
        return function (s, i, n, r, a, o) {
          var h = { type: s ? 'Block' : 'Line', value: i, start: n, end: r }
          e.locations && (h.loc = new Gn(this, a, o)),
            e.ranges && (h.range = [n, r]),
            t.push(h)
        }
      })(t, t.onComment)),
    t
  )
}
function Yn(e, t) {
  return 2 | (e ? 4 : 0) | (t ? 8 : 0)
}
var Xn = function (e, t, s) {
    ;(this.options = e = Kn(e)),
      (this.sourceFile = e.sourceFile),
      (this.keywords = jn(
        mn[e.ecmaVersion >= 6 ? 6 : 'module' === e.sourceType ? '5module' : 5]
      ))
    var i = ''
    if (!0 !== e.allowReserved) {
      for (var n = e.ecmaVersion; !(i = pn[n]); n--);
      'module' === e.sourceType && (i += ' await')
    }
    this.reservedWords = jn(i)
    var r = (i ? i + ' ' : '') + pn.strict
    ;(this.reservedWordsStrict = jn(r)),
      (this.reservedWordsStrictBind = jn(r + ' ' + pn.strictBind)),
      (this.input = String(t)),
      (this.containsEsc = !1),
      s
        ? ((this.pos = s),
          (this.lineStart = this.input.lastIndexOf('\n', s - 1) + 1),
          (this.curLine = this.input.slice(0, this.lineStart).split(Ln).length))
        : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
      (this.type = Tn.eof),
      (this.value = null),
      (this.start = this.end = this.pos),
      (this.startLoc = this.endLoc = this.curPosition()),
      (this.lastTokEndLoc = this.lastTokStartLoc = null),
      (this.lastTokStart = this.lastTokEnd = this.pos),
      (this.context = this.initialContext()),
      (this.exprAllowed = !0),
      (this.inModule = 'module' === e.sourceType),
      (this.strict = this.inModule || this.strictDirective(this.pos)),
      (this.potentialArrowAt = -1),
      (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
      (this.labels = []),
      (this.undefinedExports = {}),
      0 === this.pos &&
        e.allowHashBang &&
        '#!' === this.input.slice(0, 2) &&
        this.skipLineComment(2),
      (this.scopeStack = []),
      this.enterScope(1),
      (this.regexpState = null)
  },
  Qn = {
    inFunction: { configurable: !0 },
    inGenerator: { configurable: !0 },
    inAsync: { configurable: !0 },
    allowSuper: { configurable: !0 },
    allowDirectSuper: { configurable: !0 },
    treatFunctionsAsVar: { configurable: !0 },
  }
;(Xn.prototype.parse = function () {
  var e = this.options.program || this.startNode()
  return this.nextToken(), this.parseTopLevel(e)
}),
  (Qn.inFunction.get = function () {
    return (2 & this.currentVarScope().flags) > 0
  }),
  (Qn.inGenerator.get = function () {
    return (8 & this.currentVarScope().flags) > 0
  }),
  (Qn.inAsync.get = function () {
    return (4 & this.currentVarScope().flags) > 0
  }),
  (Qn.allowSuper.get = function () {
    return (64 & this.currentThisScope().flags) > 0
  }),
  (Qn.allowDirectSuper.get = function () {
    return (128 & this.currentThisScope().flags) > 0
  }),
  (Qn.treatFunctionsAsVar.get = function () {
    return this.treatFunctionsAsVarInScope(this.currentScope())
  }),
  (Xn.prototype.inNonArrowFunction = function () {
    return (2 & this.currentThisScope().flags) > 0
  }),
  (Xn.extend = function () {
    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
    for (var s = this, i = 0; i < e.length; i++) s = e[i](s)
    return s
  }),
  (Xn.parse = function (e, t) {
    return new this(t, e).parse()
  }),
  (Xn.parseExpressionAt = function (e, t, s) {
    var i = new this(s, e, t)
    return i.nextToken(), i.parseExpression()
  }),
  (Xn.tokenizer = function (e, t) {
    return new this(t, e)
  }),
  Object.defineProperties(Xn.prototype, Qn)
var Jn = Xn.prototype,
  Zn = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/
function er() {
  this.shorthandAssign =
    this.trailingComma =
    this.parenthesizedAssign =
    this.parenthesizedBind =
    this.doubleProto =
      -1
}
;(Jn.strictDirective = function (e) {
  for (;;) {
    ;(Dn.lastIndex = e), (e += Dn.exec(this.input)[0].length)
    var t = Zn.exec(this.input.slice(e))
    if (!t) return !1
    if ('use strict' === (t[1] || t[2])) return !0
    ;(e += t[0].length),
      (Dn.lastIndex = e),
      (e += Dn.exec(this.input)[0].length),
      ';' === this.input[e] && e++
  }
}),
  (Jn.eat = function (e) {
    return this.type === e && (this.next(), !0)
  }),
  (Jn.isContextual = function (e) {
    return this.type === Tn.name && this.value === e && !this.containsEsc
  }),
  (Jn.eatContextual = function (e) {
    return !!this.isContextual(e) && (this.next(), !0)
  }),
  (Jn.expectContextual = function (e) {
    this.eatContextual(e) || this.unexpected()
  }),
  (Jn.canInsertSemicolon = function () {
    return (
      this.type === Tn.eof ||
      this.type === Tn.braceR ||
      Ln.test(this.input.slice(this.lastTokEnd, this.start))
    )
  }),
  (Jn.insertSemicolon = function () {
    if (this.canInsertSemicolon())
      return (
        this.options.onInsertedSemicolon &&
          this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc),
        !0
      )
  }),
  (Jn.semicolon = function () {
    this.eat(Tn.semi) || this.insertSemicolon() || this.unexpected()
  }),
  (Jn.afterTrailingComma = function (e, t) {
    if (this.type === e)
      return (
        this.options.onTrailingComma &&
          this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc),
        t || this.next(),
        !0
      )
  }),
  (Jn.expect = function (e) {
    this.eat(e) || this.unexpected()
  }),
  (Jn.unexpected = function (e) {
    this.raise(null != e ? e : this.start, 'Unexpected token')
  }),
  (Jn.checkPatternErrors = function (e, t) {
    if (e) {
      e.trailingComma > -1 &&
        this.raiseRecoverable(
          e.trailingComma,
          'Comma is not permitted after the rest element'
        )
      var s = t ? e.parenthesizedAssign : e.parenthesizedBind
      s > -1 && this.raiseRecoverable(s, 'Parenthesized pattern')
    }
  }),
  (Jn.checkExpressionErrors = function (e, t) {
    if (!e) return !1
    var s = e.shorthandAssign,
      i = e.doubleProto
    if (!t) return s >= 0 || i >= 0
    s >= 0 &&
      this.raise(
        s,
        'Shorthand property assignments are valid only in destructuring patterns'
      ),
      i >= 0 && this.raiseRecoverable(i, 'Redefinition of __proto__ property')
  }),
  (Jn.checkYieldAwaitInDefaultParams = function () {
    this.yieldPos &&
      (!this.awaitPos || this.yieldPos < this.awaitPos) &&
      this.raise(this.yieldPos, 'Yield expression cannot be a default value'),
      this.awaitPos &&
        this.raise(this.awaitPos, 'Await expression cannot be a default value')
  }),
  (Jn.isSimpleAssignTarget = function (e) {
    return 'ParenthesizedExpression' === e.type
      ? this.isSimpleAssignTarget(e.expression)
      : 'Identifier' === e.type || 'MemberExpression' === e.type
  })
var tr = Xn.prototype
tr.parseTopLevel = function (e) {
  var t = {}
  for (e.body || (e.body = []); this.type !== Tn.eof; ) {
    var s = this.parseStatement(null, !0, t)
    e.body.push(s)
  }
  if (this.inModule)
    for (
      var i = 0, n = Object.keys(this.undefinedExports);
      i < n.length;
      i += 1
    ) {
      var r = n[i]
      this.raiseRecoverable(
        this.undefinedExports[r].start,
        "Export '" + r + "' is not defined"
      )
    }
  return (
    this.adaptDirectivePrologue(e.body),
    this.next(),
    (e.sourceType = this.options.sourceType),
    this.finishNode(e, 'Program')
  )
}
var sr = { kind: 'loop' },
  ir = { kind: 'switch' }
;(tr.isLet = function (e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual('let')) return !1
  Dn.lastIndex = this.pos
  var t = Dn.exec(this.input),
    s = this.pos + t[0].length,
    i = this.input.charCodeAt(s)
  if (91 === i) return !0
  if (e) return !1
  if (123 === i) return !0
  if (Cn(i, !0)) {
    for (var n = s + 1; kn(this.input.charCodeAt(n), !0); ) ++n
    var r = this.input.slice(s, n)
    if (!gn.test(r)) return !0
  }
  return !1
}),
  (tr.isAsyncFunction = function () {
    if (this.options.ecmaVersion < 8 || !this.isContextual('async')) return !1
    Dn.lastIndex = this.pos
    var e = Dn.exec(this.input),
      t = this.pos + e[0].length
    return !(
      Ln.test(this.input.slice(this.pos, t)) ||
      'function' !== this.input.slice(t, t + 8) ||
      (t + 8 !== this.input.length && kn(this.input.charAt(t + 8)))
    )
  }),
  (tr.parseStatement = function (e, t, s) {
    var i,
      n = this.type,
      r = this.startNode()
    switch ((this.isLet(e) && ((n = Tn._var), (i = 'let')), n)) {
      case Tn._break:
      case Tn._continue:
        return this.parseBreakContinueStatement(r, n.keyword)
      case Tn._debugger:
        return this.parseDebuggerStatement(r)
      case Tn._do:
        return this.parseDoStatement(r)
      case Tn._for:
        return this.parseForStatement(r)
      case Tn._function:
        return (
          e &&
            (this.strict || ('if' !== e && 'label' !== e)) &&
            this.options.ecmaVersion >= 6 &&
            this.unexpected(),
          this.parseFunctionStatement(r, !1, !e)
        )
      case Tn._class:
        return e && this.unexpected(), this.parseClass(r, !0)
      case Tn._if:
        return this.parseIfStatement(r)
      case Tn._return:
        return this.parseReturnStatement(r)
      case Tn._switch:
        return this.parseSwitchStatement(r)
      case Tn._throw:
        return this.parseThrowStatement(r)
      case Tn._try:
        return this.parseTryStatement(r)
      case Tn._const:
      case Tn._var:
        return (
          (i = i || this.value),
          e && 'var' !== i && this.unexpected(),
          this.parseVarStatement(r, i)
        )
      case Tn._while:
        return this.parseWhileStatement(r)
      case Tn._with:
        return this.parseWithStatement(r)
      case Tn.braceL:
        return this.parseBlock(!0, r)
      case Tn.semi:
        return this.parseEmptyStatement(r)
      case Tn._export:
      case Tn._import:
        if (this.options.ecmaVersion > 10 && n === Tn._import) {
          Dn.lastIndex = this.pos
          var a = Dn.exec(this.input),
            o = this.pos + a[0].length
          if (40 === this.input.charCodeAt(o))
            return this.parseExpressionStatement(r, this.parseExpression())
        }
        return (
          this.options.allowImportExportEverywhere ||
            (t ||
              this.raise(
                this.start,
                "'import' and 'export' may only appear at the top level"
              ),
            this.inModule ||
              this.raise(
                this.start,
                "'import' and 'export' may appear only with 'sourceType: module'"
              )),
          n === Tn._import ? this.parseImport(r) : this.parseExport(r, s)
        )
      default:
        if (this.isAsyncFunction())
          return (
            e && this.unexpected(),
            this.next(),
            this.parseFunctionStatement(r, !0, !e)
          )
        var h = this.value,
          l = this.parseExpression()
        return n === Tn.name && 'Identifier' === l.type && this.eat(Tn.colon)
          ? this.parseLabeledStatement(r, h, l, e)
          : this.parseExpressionStatement(r, l)
    }
  }),
  (tr.parseBreakContinueStatement = function (e, t) {
    var s = 'break' === t
    this.next(),
      this.eat(Tn.semi) || this.insertSemicolon()
        ? (e.label = null)
        : this.type !== Tn.name
        ? this.unexpected()
        : ((e.label = this.parseIdent()), this.semicolon())
    for (var i = 0; i < this.labels.length; ++i) {
      var n = this.labels[i]
      if (null == e.label || n.name === e.label.name) {
        if (null != n.kind && (s || 'loop' === n.kind)) break
        if (e.label && s) break
      }
    }
    return (
      i === this.labels.length && this.raise(e.start, 'Unsyntactic ' + t),
      this.finishNode(e, s ? 'BreakStatement' : 'ContinueStatement')
    )
  }),
  (tr.parseDebuggerStatement = function (e) {
    return (
      this.next(), this.semicolon(), this.finishNode(e, 'DebuggerStatement')
    )
  }),
  (tr.parseDoStatement = function (e) {
    return (
      this.next(),
      this.labels.push(sr),
      (e.body = this.parseStatement('do')),
      this.labels.pop(),
      this.expect(Tn._while),
      (e.test = this.parseParenExpression()),
      this.options.ecmaVersion >= 6 ? this.eat(Tn.semi) : this.semicolon(),
      this.finishNode(e, 'DoWhileStatement')
    )
  }),
  (tr.parseForStatement = function (e) {
    this.next()
    var t =
      this.options.ecmaVersion >= 9 &&
      (this.inAsync ||
        (!this.inFunction && this.options.allowAwaitOutsideFunction)) &&
      this.eatContextual('await')
        ? this.lastTokStart
        : -1
    if (
      (this.labels.push(sr),
      this.enterScope(0),
      this.expect(Tn.parenL),
      this.type === Tn.semi)
    )
      return t > -1 && this.unexpected(t), this.parseFor(e, null)
    var s = this.isLet()
    if (this.type === Tn._var || this.type === Tn._const || s) {
      var i = this.startNode(),
        n = s ? 'let' : this.value
      return (
        this.next(),
        this.parseVar(i, !0, n),
        this.finishNode(i, 'VariableDeclaration'),
        (this.type === Tn._in ||
          (this.options.ecmaVersion >= 6 && this.isContextual('of'))) &&
        1 === i.declarations.length
          ? (this.options.ecmaVersion >= 9 &&
              (this.type === Tn._in
                ? t > -1 && this.unexpected(t)
                : (e.await = t > -1)),
            this.parseForIn(e, i))
          : (t > -1 && this.unexpected(t), this.parseFor(e, i))
      )
    }
    var r = new er(),
      a = this.parseExpression(!0, r)
    return this.type === Tn._in ||
      (this.options.ecmaVersion >= 6 && this.isContextual('of'))
      ? (this.options.ecmaVersion >= 9 &&
          (this.type === Tn._in
            ? t > -1 && this.unexpected(t)
            : (e.await = t > -1)),
        this.toAssignable(a, !1, r),
        this.checkLVal(a),
        this.parseForIn(e, a))
      : (this.checkExpressionErrors(r, !0),
        t > -1 && this.unexpected(t),
        this.parseFor(e, a))
  }),
  (tr.parseFunctionStatement = function (e, t, s) {
    return this.next(), this.parseFunction(e, rr | (s ? 0 : ar), !1, t)
  }),
  (tr.parseIfStatement = function (e) {
    return (
      this.next(),
      (e.test = this.parseParenExpression()),
      (e.consequent = this.parseStatement('if')),
      (e.alternate = this.eat(Tn._else) ? this.parseStatement('if') : null),
      this.finishNode(e, 'IfStatement')
    )
  }),
  (tr.parseReturnStatement = function (e) {
    return (
      this.inFunction ||
        this.options.allowReturnOutsideFunction ||
        this.raise(this.start, "'return' outside of function"),
      this.next(),
      this.eat(Tn.semi) || this.insertSemicolon()
        ? (e.argument = null)
        : ((e.argument = this.parseExpression()), this.semicolon()),
      this.finishNode(e, 'ReturnStatement')
    )
  }),
  (tr.parseSwitchStatement = function (e) {
    var t
    this.next(),
      (e.discriminant = this.parseParenExpression()),
      (e.cases = []),
      this.expect(Tn.braceL),
      this.labels.push(ir),
      this.enterScope(0)
    for (var s = !1; this.type !== Tn.braceR; )
      if (this.type === Tn._case || this.type === Tn._default) {
        var i = this.type === Tn._case
        t && this.finishNode(t, 'SwitchCase'),
          e.cases.push((t = this.startNode())),
          (t.consequent = []),
          this.next(),
          i
            ? (t.test = this.parseExpression())
            : (s &&
                this.raiseRecoverable(
                  this.lastTokStart,
                  'Multiple default clauses'
                ),
              (s = !0),
              (t.test = null)),
          this.expect(Tn.colon)
      } else
        t || this.unexpected(), t.consequent.push(this.parseStatement(null))
    return (
      this.exitScope(),
      t && this.finishNode(t, 'SwitchCase'),
      this.next(),
      this.labels.pop(),
      this.finishNode(e, 'SwitchStatement')
    )
  }),
  (tr.parseThrowStatement = function (e) {
    return (
      this.next(),
      Ln.test(this.input.slice(this.lastTokEnd, this.start)) &&
        this.raise(this.lastTokEnd, 'Illegal newline after throw'),
      (e.argument = this.parseExpression()),
      this.semicolon(),
      this.finishNode(e, 'ThrowStatement')
    )
  })
var nr = []
;(tr.parseTryStatement = function (e) {
  if (
    (this.next(),
    (e.block = this.parseBlock()),
    (e.handler = null),
    this.type === Tn._catch)
  ) {
    var t = this.startNode()
    if ((this.next(), this.eat(Tn.parenL))) {
      t.param = this.parseBindingAtom()
      var s = 'Identifier' === t.param.type
      this.enterScope(s ? 32 : 0),
        this.checkLVal(t.param, s ? 4 : 2),
        this.expect(Tn.parenR)
    } else
      this.options.ecmaVersion < 10 && this.unexpected(),
        (t.param = null),
        this.enterScope(0)
    ;(t.body = this.parseBlock(!1)),
      this.exitScope(),
      (e.handler = this.finishNode(t, 'CatchClause'))
  }
  return (
    (e.finalizer = this.eat(Tn._finally) ? this.parseBlock() : null),
    e.handler ||
      e.finalizer ||
      this.raise(e.start, 'Missing catch or finally clause'),
    this.finishNode(e, 'TryStatement')
  )
}),
  (tr.parseVarStatement = function (e, t) {
    return (
      this.next(),
      this.parseVar(e, !1, t),
      this.semicolon(),
      this.finishNode(e, 'VariableDeclaration')
    )
  }),
  (tr.parseWhileStatement = function (e) {
    return (
      this.next(),
      (e.test = this.parseParenExpression()),
      this.labels.push(sr),
      (e.body = this.parseStatement('while')),
      this.labels.pop(),
      this.finishNode(e, 'WhileStatement')
    )
  }),
  (tr.parseWithStatement = function (e) {
    return (
      this.strict && this.raise(this.start, "'with' in strict mode"),
      this.next(),
      (e.object = this.parseParenExpression()),
      (e.body = this.parseStatement('with')),
      this.finishNode(e, 'WithStatement')
    )
  }),
  (tr.parseEmptyStatement = function (e) {
    return this.next(), this.finishNode(e, 'EmptyStatement')
  }),
  (tr.parseLabeledStatement = function (e, t, s, i) {
    for (var n = 0, r = this.labels; n < r.length; n += 1) {
      r[n].name === t &&
        this.raise(s.start, "Label '" + t + "' is already declared")
    }
    for (
      var a = this.type.isLoop
          ? 'loop'
          : this.type === Tn._switch
          ? 'switch'
          : null,
        o = this.labels.length - 1;
      o >= 0;
      o--
    ) {
      var h = this.labels[o]
      if (h.statementStart !== e.start) break
      ;(h.statementStart = this.start), (h.kind = a)
    }
    return (
      this.labels.push({ name: t, kind: a, statementStart: this.start }),
      (e.body = this.parseStatement(
        i ? (-1 === i.indexOf('label') ? i + 'label' : i) : 'label'
      )),
      this.labels.pop(),
      (e.label = s),
      this.finishNode(e, 'LabeledStatement')
    )
  }),
  (tr.parseExpressionStatement = function (e, t) {
    return (
      (e.expression = t),
      this.semicolon(),
      this.finishNode(e, 'ExpressionStatement')
    )
  }),
  (tr.parseBlock = function (e, t) {
    for (
      void 0 === e && (e = !0),
        void 0 === t && (t = this.startNode()),
        t.body = [],
        this.expect(Tn.braceL),
        e && this.enterScope(0);
      !this.eat(Tn.braceR);

    ) {
      var s = this.parseStatement(null)
      t.body.push(s)
    }
    return e && this.exitScope(), this.finishNode(t, 'BlockStatement')
  }),
  (tr.parseFor = function (e, t) {
    return (
      (e.init = t),
      this.expect(Tn.semi),
      (e.test = this.type === Tn.semi ? null : this.parseExpression()),
      this.expect(Tn.semi),
      (e.update = this.type === Tn.parenR ? null : this.parseExpression()),
      this.expect(Tn.parenR),
      (e.body = this.parseStatement('for')),
      this.exitScope(),
      this.labels.pop(),
      this.finishNode(e, 'ForStatement')
    )
  }),
  (tr.parseForIn = function (e, t) {
    var s = this.type === Tn._in
    return (
      this.next(),
      'VariableDeclaration' === t.type &&
      null != t.declarations[0].init &&
      (!s ||
        this.options.ecmaVersion < 8 ||
        this.strict ||
        'var' !== t.kind ||
        'Identifier' !== t.declarations[0].id.type)
        ? this.raise(
            t.start,
            (s ? 'for-in' : 'for-of') +
              ' loop variable declaration may not have an initializer'
          )
        : 'AssignmentPattern' === t.type &&
          this.raise(t.start, 'Invalid left-hand side in for-loop'),
      (e.left = t),
      (e.right = s ? this.parseExpression() : this.parseMaybeAssign()),
      this.expect(Tn.parenR),
      (e.body = this.parseStatement('for')),
      this.exitScope(),
      this.labels.pop(),
      this.finishNode(e, s ? 'ForInStatement' : 'ForOfStatement')
    )
  }),
  (tr.parseVar = function (e, t, s) {
    for (e.declarations = [], e.kind = s; ; ) {
      var i = this.startNode()
      if (
        (this.parseVarId(i, s),
        this.eat(Tn.eq)
          ? (i.init = this.parseMaybeAssign(t))
          : 'const' !== s ||
            this.type === Tn._in ||
            (this.options.ecmaVersion >= 6 && this.isContextual('of'))
          ? 'Identifier' === i.id.type ||
            (t && (this.type === Tn._in || this.isContextual('of')))
            ? (i.init = null)
            : this.raise(
                this.lastTokEnd,
                'Complex binding patterns require an initialization value'
              )
          : this.unexpected(),
        e.declarations.push(this.finishNode(i, 'VariableDeclarator')),
        !this.eat(Tn.comma))
      )
        break
    }
    return e
  }),
  (tr.parseVarId = function (e, t) {
    ;(e.id = this.parseBindingAtom()),
      this.checkLVal(e.id, 'var' === t ? 1 : 2, !1)
  })
var rr = 1,
  ar = 2
;(tr.parseFunction = function (e, t, s, i) {
  this.initFunction(e),
    (this.options.ecmaVersion >= 9 || (this.options.ecmaVersion >= 6 && !i)) &&
      (this.type === Tn.star && t & ar && this.unexpected(),
      (e.generator = this.eat(Tn.star))),
    this.options.ecmaVersion >= 8 && (e.async = !!i),
    t & rr &&
      ((e.id = 4 & t && this.type !== Tn.name ? null : this.parseIdent()),
      !e.id ||
        t & ar ||
        this.checkLVal(
          e.id,
          this.strict || e.generator || e.async
            ? this.treatFunctionsAsVar
              ? 1
              : 2
            : 3
        ))
  var n = this.yieldPos,
    r = this.awaitPos,
    a = this.awaitIdentPos
  return (
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(Yn(e.async, e.generator)),
    t & rr || (e.id = this.type === Tn.name ? this.parseIdent() : null),
    this.parseFunctionParams(e),
    this.parseFunctionBody(e, s, !1),
    (this.yieldPos = n),
    (this.awaitPos = r),
    (this.awaitIdentPos = a),
    this.finishNode(e, t & rr ? 'FunctionDeclaration' : 'FunctionExpression')
  )
}),
  (tr.parseFunctionParams = function (e) {
    this.expect(Tn.parenL),
      (e.params = this.parseBindingList(
        Tn.parenR,
        !1,
        this.options.ecmaVersion >= 8
      )),
      this.checkYieldAwaitInDefaultParams()
  }),
  (tr.parseClass = function (e, t) {
    this.next()
    var s = this.strict
    ;(this.strict = !0), this.parseClassId(e, t), this.parseClassSuper(e)
    var i = this.startNode(),
      n = !1
    for (i.body = [], this.expect(Tn.braceL); !this.eat(Tn.braceR); ) {
      var r = this.parseClassElement(null !== e.superClass)
      r &&
        (i.body.push(r),
        'MethodDefinition' === r.type &&
          'constructor' === r.kind &&
          (n && this.raise(r.start, 'Duplicate constructor in the same class'),
          (n = !0)))
    }
    return (
      (e.body = this.finishNode(i, 'ClassBody')),
      (this.strict = s),
      this.finishNode(e, t ? 'ClassDeclaration' : 'ClassExpression')
    )
  }),
  (tr.parseClassElement = function (e) {
    var t = this
    if (this.eat(Tn.semi)) return null
    var s = this.startNode(),
      i = function (e, i) {
        void 0 === i && (i = !1)
        var n = t.start,
          r = t.startLoc
        return (
          !!t.eatContextual(e) &&
          (!(t.type === Tn.parenL || (i && t.canInsertSemicolon())) ||
            (s.key && t.unexpected(),
            (s.computed = !1),
            (s.key = t.startNodeAt(n, r)),
            (s.key.name = e),
            t.finishNode(s.key, 'Identifier'),
            !1))
        )
      }
    ;(s.kind = 'method'), (s.static = i('static'))
    var n = this.eat(Tn.star),
      r = !1
    n ||
      (this.options.ecmaVersion >= 8 && i('async', !0)
        ? ((r = !0), (n = this.options.ecmaVersion >= 9 && this.eat(Tn.star)))
        : i('get')
        ? (s.kind = 'get')
        : i('set') && (s.kind = 'set')),
      s.key || this.parsePropertyName(s)
    var a = s.key,
      o = !1
    return (
      s.computed ||
      s.static ||
      !(
        ('Identifier' === a.type && 'constructor' === a.name) ||
        ('Literal' === a.type && 'constructor' === a.value)
      )
        ? s.static &&
          'Identifier' === a.type &&
          'prototype' === a.name &&
          this.raise(
            a.start,
            'Classes may not have a static property named prototype'
          )
        : ('method' !== s.kind &&
            this.raise(a.start, "Constructor can't have get/set modifier"),
          n && this.raise(a.start, "Constructor can't be a generator"),
          r && this.raise(a.start, "Constructor can't be an async method"),
          (s.kind = 'constructor'),
          (o = e)),
      this.parseClassMethod(s, n, r, o),
      'get' === s.kind &&
        0 !== s.value.params.length &&
        this.raiseRecoverable(s.value.start, 'getter should have no params'),
      'set' === s.kind &&
        1 !== s.value.params.length &&
        this.raiseRecoverable(
          s.value.start,
          'setter should have exactly one param'
        ),
      'set' === s.kind &&
        'RestElement' === s.value.params[0].type &&
        this.raiseRecoverable(
          s.value.params[0].start,
          'Setter cannot use rest params'
        ),
      s
    )
  }),
  (tr.parseClassMethod = function (e, t, s, i) {
    return (
      (e.value = this.parseMethod(t, s, i)),
      this.finishNode(e, 'MethodDefinition')
    )
  }),
  (tr.parseClassId = function (e, t) {
    this.type === Tn.name
      ? ((e.id = this.parseIdent()), t && this.checkLVal(e.id, 2, !1))
      : (!0 === t && this.unexpected(), (e.id = null))
  }),
  (tr.parseClassSuper = function (e) {
    e.superClass = this.eat(Tn._extends) ? this.parseExprSubscripts() : null
  }),
  (tr.parseExport = function (e, t) {
    if ((this.next(), this.eat(Tn.star)))
      return (
        this.expectContextual('from'),
        this.type !== Tn.string && this.unexpected(),
        (e.source = this.parseExprAtom()),
        this.semicolon(),
        this.finishNode(e, 'ExportAllDeclaration')
      )
    if (this.eat(Tn._default)) {
      var s
      if (
        (this.checkExport(t, 'default', this.lastTokStart),
        this.type === Tn._function || (s = this.isAsyncFunction()))
      ) {
        var i = this.startNode()
        this.next(),
          s && this.next(),
          (e.declaration = this.parseFunction(i, 4 | rr, !1, s))
      } else if (this.type === Tn._class) {
        var n = this.startNode()
        e.declaration = this.parseClass(n, 'nullableID')
      } else (e.declaration = this.parseMaybeAssign()), this.semicolon()
      return this.finishNode(e, 'ExportDefaultDeclaration')
    }
    if (this.shouldParseExportStatement())
      (e.declaration = this.parseStatement(null)),
        'VariableDeclaration' === e.declaration.type
          ? this.checkVariableExport(t, e.declaration.declarations)
          : this.checkExport(t, e.declaration.id.name, e.declaration.id.start),
        (e.specifiers = []),
        (e.source = null)
    else {
      if (
        ((e.declaration = null),
        (e.specifiers = this.parseExportSpecifiers(t)),
        this.eatContextual('from'))
      )
        this.type !== Tn.string && this.unexpected(),
          (e.source = this.parseExprAtom())
      else {
        for (var r = 0, a = e.specifiers; r < a.length; r += 1) {
          var o = a[r]
          this.checkUnreserved(o.local), this.checkLocalExport(o.local)
        }
        e.source = null
      }
      this.semicolon()
    }
    return this.finishNode(e, 'ExportNamedDeclaration')
  }),
  (tr.checkExport = function (e, t, s) {
    e &&
      (Wn(e, t) && this.raiseRecoverable(s, "Duplicate export '" + t + "'"),
      (e[t] = !0))
  }),
  (tr.checkPatternExport = function (e, t) {
    var s = t.type
    if ('Identifier' === s) this.checkExport(e, t.name, t.start)
    else if ('ObjectPattern' === s)
      for (var i = 0, n = t.properties; i < n.length; i += 1) {
        var r = n[i]
        this.checkPatternExport(e, r)
      }
    else if ('ArrayPattern' === s)
      for (var a = 0, o = t.elements; a < o.length; a += 1) {
        var h = o[a]
        h && this.checkPatternExport(e, h)
      }
    else
      'Property' === s
        ? this.checkPatternExport(e, t.value)
        : 'AssignmentPattern' === s
        ? this.checkPatternExport(e, t.left)
        : 'RestElement' === s
        ? this.checkPatternExport(e, t.argument)
        : 'ParenthesizedExpression' === s &&
          this.checkPatternExport(e, t.expression)
  }),
  (tr.checkVariableExport = function (e, t) {
    if (e)
      for (var s = 0, i = t; s < i.length; s += 1) {
        var n = i[s]
        this.checkPatternExport(e, n.id)
      }
  }),
  (tr.shouldParseExportStatement = function () {
    return (
      'var' === this.type.keyword ||
      'const' === this.type.keyword ||
      'class' === this.type.keyword ||
      'function' === this.type.keyword ||
      this.isLet() ||
      this.isAsyncFunction()
    )
  }),
  (tr.parseExportSpecifiers = function (e) {
    var t = [],
      s = !0
    for (this.expect(Tn.braceL); !this.eat(Tn.braceR); ) {
      if (s) s = !1
      else if ((this.expect(Tn.comma), this.afterTrailingComma(Tn.braceR)))
        break
      var i = this.startNode()
      ;(i.local = this.parseIdent(!0)),
        (i.exported = this.eatContextual('as') ? this.parseIdent(!0) : i.local),
        this.checkExport(e, i.exported.name, i.exported.start),
        t.push(this.finishNode(i, 'ExportSpecifier'))
    }
    return t
  }),
  (tr.parseImport = function (e) {
    return (
      this.next(),
      this.type === Tn.string
        ? ((e.specifiers = nr), (e.source = this.parseExprAtom()))
        : ((e.specifiers = this.parseImportSpecifiers()),
          this.expectContextual('from'),
          (e.source =
            this.type === Tn.string
              ? this.parseExprAtom()
              : this.unexpected())),
      this.semicolon(),
      this.finishNode(e, 'ImportDeclaration')
    )
  }),
  (tr.parseImportSpecifiers = function () {
    var e = [],
      t = !0
    if (this.type === Tn.name) {
      var s = this.startNode()
      if (
        ((s.local = this.parseIdent()),
        this.checkLVal(s.local, 2),
        e.push(this.finishNode(s, 'ImportDefaultSpecifier')),
        !this.eat(Tn.comma))
      )
        return e
    }
    if (this.type === Tn.star) {
      var i = this.startNode()
      return (
        this.next(),
        this.expectContextual('as'),
        (i.local = this.parseIdent()),
        this.checkLVal(i.local, 2),
        e.push(this.finishNode(i, 'ImportNamespaceSpecifier')),
        e
      )
    }
    for (this.expect(Tn.braceL); !this.eat(Tn.braceR); ) {
      if (t) t = !1
      else if ((this.expect(Tn.comma), this.afterTrailingComma(Tn.braceR)))
        break
      var n = this.startNode()
      ;(n.imported = this.parseIdent(!0)),
        this.eatContextual('as')
          ? (n.local = this.parseIdent())
          : (this.checkUnreserved(n.imported), (n.local = n.imported)),
        this.checkLVal(n.local, 2),
        e.push(this.finishNode(n, 'ImportSpecifier'))
    }
    return e
  }),
  (tr.adaptDirectivePrologue = function (e) {
    for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
      e[t].directive = e[t].expression.raw.slice(1, -1)
  }),
  (tr.isDirectiveCandidate = function (e) {
    return (
      'ExpressionStatement' === e.type &&
      'Literal' === e.expression.type &&
      'string' == typeof e.expression.value &&
      ('"' === this.input[e.start] || "'" === this.input[e.start])
    )
  })
var or = Xn.prototype
;(or.toAssignable = function (e, t, s) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case 'Identifier':
        this.inAsync &&
          'await' === e.name &&
          this.raise(
            e.start,
            "Cannot use 'await' as identifier inside an async function"
          )
        break
      case 'ObjectPattern':
      case 'ArrayPattern':
      case 'RestElement':
        break
      case 'ObjectExpression':
        ;(e.type = 'ObjectPattern'), s && this.checkPatternErrors(s, !0)
        for (var i = 0, n = e.properties; i < n.length; i += 1) {
          var r = n[i]
          this.toAssignable(r, t),
            'RestElement' !== r.type ||
              ('ArrayPattern' !== r.argument.type &&
                'ObjectPattern' !== r.argument.type) ||
              this.raise(r.argument.start, 'Unexpected token')
        }
        break
      case 'Property':
        'init' !== e.kind &&
          this.raise(
            e.key.start,
            "Object pattern can't contain getter or setter"
          ),
          this.toAssignable(e.value, t)
        break
      case 'ArrayExpression':
        ;(e.type = 'ArrayPattern'),
          s && this.checkPatternErrors(s, !0),
          this.toAssignableList(e.elements, t)
        break
      case 'SpreadElement':
        ;(e.type = 'RestElement'),
          this.toAssignable(e.argument, t),
          'AssignmentPattern' === e.argument.type &&
            this.raise(
              e.argument.start,
              'Rest elements cannot have a default value'
            )
        break
      case 'AssignmentExpression':
        '=' !== e.operator &&
          this.raise(
            e.left.end,
            "Only '=' operator can be used for specifying default value."
          ),
          (e.type = 'AssignmentPattern'),
          delete e.operator,
          this.toAssignable(e.left, t)
      case 'AssignmentPattern':
        break
      case 'ParenthesizedExpression':
        this.toAssignable(e.expression, t, s)
        break
      case 'MemberExpression':
        if (!t) break
      default:
        this.raise(e.start, 'Assigning to rvalue')
    }
  else s && this.checkPatternErrors(s, !0)
  return e
}),
  (or.toAssignableList = function (e, t) {
    for (var s = e.length, i = 0; i < s; i++) {
      var n = e[i]
      n && this.toAssignable(n, t)
    }
    if (s) {
      var r = e[s - 1]
      6 === this.options.ecmaVersion &&
        t &&
        r &&
        'RestElement' === r.type &&
        'Identifier' !== r.argument.type &&
        this.unexpected(r.argument.start)
    }
    return e
  }),
  (or.parseSpread = function (e) {
    var t = this.startNode()
    return (
      this.next(),
      (t.argument = this.parseMaybeAssign(!1, e)),
      this.finishNode(t, 'SpreadElement')
    )
  }),
  (or.parseRestBinding = function () {
    var e = this.startNode()
    return (
      this.next(),
      6 === this.options.ecmaVersion &&
        this.type !== Tn.name &&
        this.unexpected(),
      (e.argument = this.parseBindingAtom()),
      this.finishNode(e, 'RestElement')
    )
  }),
  (or.parseBindingAtom = function () {
    if (this.options.ecmaVersion >= 6)
      switch (this.type) {
        case Tn.bracketL:
          var e = this.startNode()
          return (
            this.next(),
            (e.elements = this.parseBindingList(Tn.bracketR, !0, !0)),
            this.finishNode(e, 'ArrayPattern')
          )
        case Tn.braceL:
          return this.parseObj(!0)
      }
    return this.parseIdent()
  }),
  (or.parseBindingList = function (e, t, s) {
    for (var i = [], n = !0; !this.eat(e); )
      if ((n ? (n = !1) : this.expect(Tn.comma), t && this.type === Tn.comma))
        i.push(null)
      else {
        if (s && this.afterTrailingComma(e)) break
        if (this.type === Tn.ellipsis) {
          var r = this.parseRestBinding()
          this.parseBindingListItem(r),
            i.push(r),
            this.type === Tn.comma &&
              this.raise(
                this.start,
                'Comma is not permitted after the rest element'
              ),
            this.expect(e)
          break
        }
        var a = this.parseMaybeDefault(this.start, this.startLoc)
        this.parseBindingListItem(a), i.push(a)
      }
    return i
  }),
  (or.parseBindingListItem = function (e) {
    return e
  }),
  (or.parseMaybeDefault = function (e, t, s) {
    if (
      ((s = s || this.parseBindingAtom()),
      this.options.ecmaVersion < 6 || !this.eat(Tn.eq))
    )
      return s
    var i = this.startNodeAt(e, t)
    return (
      (i.left = s),
      (i.right = this.parseMaybeAssign()),
      this.finishNode(i, 'AssignmentPattern')
    )
  }),
  (or.checkLVal = function (e, t, s) {
    switch ((void 0 === t && (t = 0), e.type)) {
      case 'Identifier':
        2 === t &&
          'let' === e.name &&
          this.raiseRecoverable(
            e.start,
            'let is disallowed as a lexically bound name'
          ),
          this.strict &&
            this.reservedWordsStrictBind.test(e.name) &&
            this.raiseRecoverable(
              e.start,
              (t ? 'Binding ' : 'Assigning to ') + e.name + ' in strict mode'
            ),
          s &&
            (Wn(s, e.name) &&
              this.raiseRecoverable(e.start, 'Argument name clash'),
            (s[e.name] = !0)),
          0 !== t && 5 !== t && this.declareName(e.name, t, e.start)
        break
      case 'MemberExpression':
        t && this.raiseRecoverable(e.start, 'Binding member expression')
        break
      case 'ObjectPattern':
        for (var i = 0, n = e.properties; i < n.length; i += 1) {
          var r = n[i]
          this.checkLVal(r, t, s)
        }
        break
      case 'Property':
        this.checkLVal(e.value, t, s)
        break
      case 'ArrayPattern':
        for (var a = 0, o = e.elements; a < o.length; a += 1) {
          var h = o[a]
          h && this.checkLVal(h, t, s)
        }
        break
      case 'AssignmentPattern':
        this.checkLVal(e.left, t, s)
        break
      case 'RestElement':
        this.checkLVal(e.argument, t, s)
        break
      case 'ParenthesizedExpression':
        this.checkLVal(e.expression, t, s)
        break
      default:
        this.raise(e.start, (t ? 'Binding' : 'Assigning to') + ' rvalue')
    }
  })
var hr = Xn.prototype
;(hr.checkPropClash = function (e, t, s) {
  if (
    !(
      (this.options.ecmaVersion >= 9 && 'SpreadElement' === e.type) ||
      (this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))
    )
  ) {
    var i,
      n = e.key
    switch (n.type) {
      case 'Identifier':
        i = n.name
        break
      case 'Literal':
        i = String(n.value)
        break
      default:
        return
    }
    var r = e.kind
    if (this.options.ecmaVersion >= 6)
      '__proto__' === i &&
        'init' === r &&
        (t.proto &&
          (s && s.doubleProto < 0
            ? (s.doubleProto = n.start)
            : this.raiseRecoverable(
                n.start,
                'Redefinition of __proto__ property'
              )),
        (t.proto = !0))
    else {
      var a = t[(i = '$' + i)]
      if (a)
        ('init' === r
          ? (this.strict && a.init) || a.get || a.set
          : a.init || a[r]) &&
          this.raiseRecoverable(n.start, 'Redefinition of property')
      else a = t[i] = { init: !1, get: !1, set: !1 }
      a[r] = !0
    }
  }
}),
  (hr.parseExpression = function (e, t) {
    var s = this.start,
      i = this.startLoc,
      n = this.parseMaybeAssign(e, t)
    if (this.type === Tn.comma) {
      var r = this.startNodeAt(s, i)
      for (r.expressions = [n]; this.eat(Tn.comma); )
        r.expressions.push(this.parseMaybeAssign(e, t))
      return this.finishNode(r, 'SequenceExpression')
    }
    return n
  }),
  (hr.parseMaybeAssign = function (e, t, s) {
    if (this.isContextual('yield')) {
      if (this.inGenerator) return this.parseYield(e)
      this.exprAllowed = !1
    }
    var i = !1,
      n = -1,
      r = -1,
      a = -1
    t
      ? ((n = t.parenthesizedAssign),
        (r = t.trailingComma),
        (a = t.shorthandAssign),
        (t.parenthesizedAssign = t.trailingComma = t.shorthandAssign = -1))
      : ((t = new er()), (i = !0))
    var o = this.start,
      h = this.startLoc
    ;(this.type !== Tn.parenL && this.type !== Tn.name) ||
      (this.potentialArrowAt = this.start)
    var l = this.parseMaybeConditional(e, t)
    if ((s && (l = s.call(this, l, o, h)), this.type.isAssign)) {
      var c = this.startNodeAt(o, h)
      return (
        (c.operator = this.value),
        (c.left = this.type === Tn.eq ? this.toAssignable(l, !1, t) : l),
        i || er.call(t),
        (t.shorthandAssign = -1),
        this.checkLVal(l),
        this.next(),
        (c.right = this.parseMaybeAssign(e)),
        this.finishNode(c, 'AssignmentExpression')
      )
    }
    return (
      i && this.checkExpressionErrors(t, !0),
      n > -1 && (t.parenthesizedAssign = n),
      r > -1 && (t.trailingComma = r),
      a > -1 && (t.shorthandAssign = a),
      l
    )
  }),
  (hr.parseMaybeConditional = function (e, t) {
    var s = this.start,
      i = this.startLoc,
      n = this.parseExprOps(e, t)
    if (this.checkExpressionErrors(t)) return n
    if (this.eat(Tn.question)) {
      var r = this.startNodeAt(s, i)
      return (
        (r.test = n),
        (r.consequent = this.parseMaybeAssign()),
        this.expect(Tn.colon),
        (r.alternate = this.parseMaybeAssign(e)),
        this.finishNode(r, 'ConditionalExpression')
      )
    }
    return n
  }),
  (hr.parseExprOps = function (e, t) {
    var s = this.start,
      i = this.startLoc,
      n = this.parseMaybeUnary(t, !1)
    return this.checkExpressionErrors(t)
      ? n
      : n.start === s && 'ArrowFunctionExpression' === n.type
      ? n
      : this.parseExprOp(n, s, i, -1, e)
  }),
  (hr.parseExprOp = function (e, t, s, i, n) {
    var r = this.type.binop
    if (null != r && (!n || this.type !== Tn._in) && r > i) {
      var a = this.type === Tn.logicalOR || this.type === Tn.logicalAND,
        o = this.value
      this.next()
      var h = this.start,
        l = this.startLoc,
        c = this.parseExprOp(this.parseMaybeUnary(null, !1), h, l, r, n),
        u = this.buildBinary(t, s, e, c, o, a)
      return this.parseExprOp(u, t, s, i, n)
    }
    return e
  }),
  (hr.buildBinary = function (e, t, s, i, n, r) {
    var a = this.startNodeAt(e, t)
    return (
      (a.left = s),
      (a.operator = n),
      (a.right = i),
      this.finishNode(a, r ? 'LogicalExpression' : 'BinaryExpression')
    )
  }),
  (hr.parseMaybeUnary = function (e, t) {
    var s,
      i = this.start,
      n = this.startLoc
    if (
      this.isContextual('await') &&
      (this.inAsync ||
        (!this.inFunction && this.options.allowAwaitOutsideFunction))
    )
      (s = this.parseAwait()), (t = !0)
    else if (this.type.prefix) {
      var r = this.startNode(),
        a = this.type === Tn.incDec
      ;(r.operator = this.value),
        (r.prefix = !0),
        this.next(),
        (r.argument = this.parseMaybeUnary(null, !0)),
        this.checkExpressionErrors(e, !0),
        a
          ? this.checkLVal(r.argument)
          : this.strict &&
            'delete' === r.operator &&
            'Identifier' === r.argument.type
          ? this.raiseRecoverable(
              r.start,
              'Deleting local variable in strict mode'
            )
          : (t = !0),
        (s = this.finishNode(r, a ? 'UpdateExpression' : 'UnaryExpression'))
    } else {
      if (((s = this.parseExprSubscripts(e)), this.checkExpressionErrors(e)))
        return s
      for (; this.type.postfix && !this.canInsertSemicolon(); ) {
        var o = this.startNodeAt(i, n)
        ;(o.operator = this.value),
          (o.prefix = !1),
          (o.argument = s),
          this.checkLVal(s),
          this.next(),
          (s = this.finishNode(o, 'UpdateExpression'))
      }
    }
    return !t && this.eat(Tn.starstar)
      ? this.buildBinary(i, n, s, this.parseMaybeUnary(null, !1), '**', !1)
      : s
  }),
  (hr.parseExprSubscripts = function (e) {
    var t = this.start,
      s = this.startLoc,
      i = this.parseExprAtom(e),
      n =
        'ArrowFunctionExpression' === i.type &&
        ')' !== this.input.slice(this.lastTokStart, this.lastTokEnd)
    if (this.checkExpressionErrors(e) || n) return i
    var r = this.parseSubscripts(i, t, s)
    return (
      e &&
        'MemberExpression' === r.type &&
        (e.parenthesizedAssign >= r.start && (e.parenthesizedAssign = -1),
        e.parenthesizedBind >= r.start && (e.parenthesizedBind = -1)),
      r
    )
  }),
  (hr.parseSubscripts = function (e, t, s, i) {
    for (
      var n =
        this.options.ecmaVersion >= 8 &&
        'Identifier' === e.type &&
        'async' === e.name &&
        this.lastTokEnd === e.end &&
        !this.canInsertSemicolon() &&
        'async' === this.input.slice(e.start, e.end);
      ;

    ) {
      var r = this.parseSubscript(e, t, s, i, n)
      if (r === e || 'ArrowFunctionExpression' === r.type) return r
      e = r
    }
  }),
  (hr.parseSubscript = function (e, t, s, i, n) {
    var r = this.eat(Tn.bracketL)
    if (r || this.eat(Tn.dot)) {
      var a = this.startNodeAt(t, s)
      ;(a.object = e),
        (a.property = r
          ? this.parseExpression()
          : this.parseIdent('never' !== this.options.allowReserved)),
        (a.computed = !!r),
        r && this.expect(Tn.bracketR),
        (e = this.finishNode(a, 'MemberExpression'))
    } else if (!i && this.eat(Tn.parenL)) {
      var o = new er(),
        h = this.yieldPos,
        l = this.awaitPos,
        c = this.awaitIdentPos
      ;(this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0)
      var u = this.parseExprList(
        Tn.parenR,
        this.options.ecmaVersion >= 8,
        !1,
        o
      )
      if (n && !this.canInsertSemicolon() && this.eat(Tn.arrow))
        return (
          this.checkPatternErrors(o, !1),
          this.checkYieldAwaitInDefaultParams(),
          this.awaitIdentPos > 0 &&
            this.raise(
              this.awaitIdentPos,
              "Cannot use 'await' as identifier inside an async function"
            ),
          (this.yieldPos = h),
          (this.awaitPos = l),
          (this.awaitIdentPos = c),
          this.parseArrowExpression(this.startNodeAt(t, s), u, !0)
        )
      this.checkExpressionErrors(o, !0),
        (this.yieldPos = h || this.yieldPos),
        (this.awaitPos = l || this.awaitPos),
        (this.awaitIdentPos = c || this.awaitIdentPos)
      var d = this.startNodeAt(t, s)
      ;(d.callee = e),
        (d.arguments = u),
        (e = this.finishNode(d, 'CallExpression'))
    } else if (this.type === Tn.backQuote) {
      var p = this.startNodeAt(t, s)
      ;(p.tag = e),
        (p.quasi = this.parseTemplate({ isTagged: !0 })),
        (e = this.finishNode(p, 'TaggedTemplateExpression'))
    }
    return e
  }),
  (hr.parseExprAtom = function (e) {
    this.type === Tn.slash && this.readRegexp()
    var t,
      s = this.potentialArrowAt === this.start
    switch (this.type) {
      case Tn._super:
        return (
          this.allowSuper ||
            this.raise(this.start, "'super' keyword outside a method"),
          (t = this.startNode()),
          this.next(),
          this.type !== Tn.parenL ||
            this.allowDirectSuper ||
            this.raise(
              t.start,
              'super() call outside constructor of a subclass'
            ),
          this.type !== Tn.dot &&
            this.type !== Tn.bracketL &&
            this.type !== Tn.parenL &&
            this.unexpected(),
          this.finishNode(t, 'Super')
        )
      case Tn._this:
        return (
          (t = this.startNode()),
          this.next(),
          this.finishNode(t, 'ThisExpression')
        )
      case Tn.name:
        var i = this.start,
          n = this.startLoc,
          r = this.containsEsc,
          a = this.parseIdent(!1)
        if (
          this.options.ecmaVersion >= 8 &&
          !r &&
          'async' === a.name &&
          !this.canInsertSemicolon() &&
          this.eat(Tn._function)
        )
          return this.parseFunction(this.startNodeAt(i, n), 0, !1, !0)
        if (s && !this.canInsertSemicolon()) {
          if (this.eat(Tn.arrow))
            return this.parseArrowExpression(this.startNodeAt(i, n), [a], !1)
          if (
            this.options.ecmaVersion >= 8 &&
            'async' === a.name &&
            this.type === Tn.name &&
            !r
          )
            return (
              (a = this.parseIdent(!1)),
              (!this.canInsertSemicolon() && this.eat(Tn.arrow)) ||
                this.unexpected(),
              this.parseArrowExpression(this.startNodeAt(i, n), [a], !0)
            )
        }
        return a
      case Tn.regexp:
        var o = this.value
        return (
          ((t = this.parseLiteral(o.value)).regex = {
            pattern: o.pattern,
            flags: o.flags,
          }),
          t
        )
      case Tn.num:
      case Tn.string:
        return this.parseLiteral(this.value)
      case Tn._null:
      case Tn._true:
      case Tn._false:
        return (
          ((t = this.startNode()).value =
            this.type === Tn._null ? null : this.type === Tn._true),
          (t.raw = this.type.keyword),
          this.next(),
          this.finishNode(t, 'Literal')
        )
      case Tn.parenL:
        var h = this.start,
          l = this.parseParenAndDistinguishExpression(s)
        return (
          e &&
            (e.parenthesizedAssign < 0 &&
              !this.isSimpleAssignTarget(l) &&
              (e.parenthesizedAssign = h),
            e.parenthesizedBind < 0 && (e.parenthesizedBind = h)),
          l
        )
      case Tn.bracketL:
        return (
          (t = this.startNode()),
          this.next(),
          (t.elements = this.parseExprList(Tn.bracketR, !0, !0, e)),
          this.finishNode(t, 'ArrayExpression')
        )
      case Tn.braceL:
        return this.parseObj(!1, e)
      case Tn._function:
        return (t = this.startNode()), this.next(), this.parseFunction(t, 0)
      case Tn._class:
        return this.parseClass(this.startNode(), !1)
      case Tn._new:
        return this.parseNew()
      case Tn.backQuote:
        return this.parseTemplate()
      case Tn._import:
        return this.options.ecmaVersion >= 11
          ? this.parseExprImport()
          : this.unexpected()
      default:
        this.unexpected()
    }
  }),
  (hr.parseExprImport = function () {
    var e = this.startNode()
    switch ((this.next(), this.type)) {
      case Tn.parenL:
        return this.parseDynamicImport(e)
      default:
        this.unexpected()
    }
  }),
  (hr.parseDynamicImport = function (e) {
    if (
      (this.next(), (e.source = this.parseMaybeAssign()), !this.eat(Tn.parenR))
    ) {
      var t = this.start
      this.eat(Tn.comma) && this.eat(Tn.parenR)
        ? this.raiseRecoverable(t, 'Trailing comma is not allowed in import()')
        : this.unexpected(t)
    }
    return this.finishNode(e, 'ImportExpression')
  }),
  (hr.parseLiteral = function (e) {
    var t = this.startNode()
    return (
      (t.value = e),
      (t.raw = this.input.slice(this.start, this.end)),
      110 === t.raw.charCodeAt(t.raw.length - 1) &&
        (t.bigint = t.raw.slice(0, -1)),
      this.next(),
      this.finishNode(t, 'Literal')
    )
  }),
  (hr.parseParenExpression = function () {
    this.expect(Tn.parenL)
    var e = this.parseExpression()
    return this.expect(Tn.parenR), e
  }),
  (hr.parseParenAndDistinguishExpression = function (e) {
    var t,
      s = this.start,
      i = this.startLoc,
      n = this.options.ecmaVersion >= 8
    if (this.options.ecmaVersion >= 6) {
      this.next()
      var r,
        a = this.start,
        o = this.startLoc,
        h = [],
        l = !0,
        c = !1,
        u = new er(),
        d = this.yieldPos,
        p = this.awaitPos
      for (this.yieldPos = 0, this.awaitPos = 0; this.type !== Tn.parenR; ) {
        if (
          (l ? (l = !1) : this.expect(Tn.comma),
          n && this.afterTrailingComma(Tn.parenR, !0))
        ) {
          c = !0
          break
        }
        if (this.type === Tn.ellipsis) {
          ;(r = this.start),
            h.push(this.parseParenItem(this.parseRestBinding())),
            this.type === Tn.comma &&
              this.raise(
                this.start,
                'Comma is not permitted after the rest element'
              )
          break
        }
        h.push(this.parseMaybeAssign(!1, u, this.parseParenItem))
      }
      var f = this.start,
        m = this.startLoc
      if (
        (this.expect(Tn.parenR),
        e && !this.canInsertSemicolon() && this.eat(Tn.arrow))
      )
        return (
          this.checkPatternErrors(u, !1),
          this.checkYieldAwaitInDefaultParams(),
          (this.yieldPos = d),
          (this.awaitPos = p),
          this.parseParenArrowList(s, i, h)
        )
      ;(h.length && !c) || this.unexpected(this.lastTokStart),
        r && this.unexpected(r),
        this.checkExpressionErrors(u, !0),
        (this.yieldPos = d || this.yieldPos),
        (this.awaitPos = p || this.awaitPos),
        h.length > 1
          ? (((t = this.startNodeAt(a, o)).expressions = h),
            this.finishNodeAt(t, 'SequenceExpression', f, m))
          : (t = h[0])
    } else t = this.parseParenExpression()
    if (this.options.preserveParens) {
      var g = this.startNodeAt(s, i)
      return (g.expression = t), this.finishNode(g, 'ParenthesizedExpression')
    }
    return t
  }),
  (hr.parseParenItem = function (e) {
    return e
  }),
  (hr.parseParenArrowList = function (e, t, s) {
    return this.parseArrowExpression(this.startNodeAt(e, t), s)
  })
var lr = []
;(hr.parseNew = function () {
  var e = this.startNode(),
    t = this.parseIdent(!0)
  if (this.options.ecmaVersion >= 6 && this.eat(Tn.dot)) {
    e.meta = t
    var s = this.containsEsc
    return (
      (e.property = this.parseIdent(!0)),
      ('target' !== e.property.name || s) &&
        this.raiseRecoverable(
          e.property.start,
          'The only valid meta property for new is new.target'
        ),
      this.inNonArrowFunction() ||
        this.raiseRecoverable(
          e.start,
          'new.target can only be used in functions'
        ),
      this.finishNode(e, 'MetaProperty')
    )
  }
  var i = this.start,
    n = this.startLoc,
    r = this.type === Tn._import
  return (
    (e.callee = this.parseSubscripts(this.parseExprAtom(), i, n, !0)),
    r &&
      'ImportExpression' === e.callee.type &&
      this.raise(i, 'Cannot use new with import()'),
    this.eat(Tn.parenL)
      ? (e.arguments = this.parseExprList(
          Tn.parenR,
          this.options.ecmaVersion >= 8,
          !1
        ))
      : (e.arguments = lr),
    this.finishNode(e, 'NewExpression')
  )
}),
  (hr.parseTemplateElement = function (e) {
    var t = e.isTagged,
      s = this.startNode()
    return (
      this.type === Tn.invalidTemplate
        ? (t ||
            this.raiseRecoverable(
              this.start,
              'Bad escape sequence in untagged template literal'
            ),
          (s.value = { raw: this.value, cooked: null }))
        : (s.value = {
            raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, '\n'),
            cooked: this.value,
          }),
      this.next(),
      (s.tail = this.type === Tn.backQuote),
      this.finishNode(s, 'TemplateElement')
    )
  }),
  (hr.parseTemplate = function (e) {
    void 0 === e && (e = {})
    var t = e.isTagged
    void 0 === t && (t = !1)
    var s = this.startNode()
    this.next(), (s.expressions = [])
    var i = this.parseTemplateElement({ isTagged: t })
    for (s.quasis = [i]; !i.tail; )
      this.type === Tn.eof &&
        this.raise(this.pos, 'Unterminated template literal'),
        this.expect(Tn.dollarBraceL),
        s.expressions.push(this.parseExpression()),
        this.expect(Tn.braceR),
        s.quasis.push((i = this.parseTemplateElement({ isTagged: t })))
    return this.next(), this.finishNode(s, 'TemplateLiteral')
  }),
  (hr.isAsyncProp = function (e) {
    return (
      !e.computed &&
      'Identifier' === e.key.type &&
      'async' === e.key.name &&
      (this.type === Tn.name ||
        this.type === Tn.num ||
        this.type === Tn.string ||
        this.type === Tn.bracketL ||
        this.type.keyword ||
        (this.options.ecmaVersion >= 9 && this.type === Tn.star)) &&
      !Ln.test(this.input.slice(this.lastTokEnd, this.start))
    )
  }),
  (hr.parseObj = function (e, t) {
    var s = this.startNode(),
      i = !0,
      n = {}
    for (s.properties = [], this.next(); !this.eat(Tn.braceR); ) {
      if (i) i = !1
      else if (
        (this.expect(Tn.comma),
        this.options.ecmaVersion >= 5 && this.afterTrailingComma(Tn.braceR))
      )
        break
      var r = this.parseProperty(e, t)
      e || this.checkPropClash(r, n, t), s.properties.push(r)
    }
    return this.finishNode(s, e ? 'ObjectPattern' : 'ObjectExpression')
  }),
  (hr.parseProperty = function (e, t) {
    var s,
      i,
      n,
      r,
      a = this.startNode()
    if (this.options.ecmaVersion >= 9 && this.eat(Tn.ellipsis))
      return e
        ? ((a.argument = this.parseIdent(!1)),
          this.type === Tn.comma &&
            this.raise(
              this.start,
              'Comma is not permitted after the rest element'
            ),
          this.finishNode(a, 'RestElement'))
        : (this.type === Tn.parenL &&
            t &&
            (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start),
            t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)),
          (a.argument = this.parseMaybeAssign(!1, t)),
          this.type === Tn.comma &&
            t &&
            t.trailingComma < 0 &&
            (t.trailingComma = this.start),
          this.finishNode(a, 'SpreadElement'))
    this.options.ecmaVersion >= 6 &&
      ((a.method = !1),
      (a.shorthand = !1),
      (e || t) && ((n = this.start), (r = this.startLoc)),
      e || (s = this.eat(Tn.star)))
    var o = this.containsEsc
    return (
      this.parsePropertyName(a),
      !e && !o && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(a)
        ? ((i = !0),
          (s = this.options.ecmaVersion >= 9 && this.eat(Tn.star)),
          this.parsePropertyName(a, t))
        : (i = !1),
      this.parsePropertyValue(a, e, s, i, n, r, t, o),
      this.finishNode(a, 'Property')
    )
  }),
  (hr.parsePropertyValue = function (e, t, s, i, n, r, a, o) {
    if (
      ((s || i) && this.type === Tn.colon && this.unexpected(),
      this.eat(Tn.colon))
    )
      (e.value = t
        ? this.parseMaybeDefault(this.start, this.startLoc)
        : this.parseMaybeAssign(!1, a)),
        (e.kind = 'init')
    else if (this.options.ecmaVersion >= 6 && this.type === Tn.parenL)
      t && this.unexpected(),
        (e.kind = 'init'),
        (e.method = !0),
        (e.value = this.parseMethod(s, i))
    else if (
      t ||
      o ||
      !(this.options.ecmaVersion >= 5) ||
      e.computed ||
      'Identifier' !== e.key.type ||
      ('get' !== e.key.name && 'set' !== e.key.name) ||
      this.type === Tn.comma ||
      this.type === Tn.braceR
    )
      this.options.ecmaVersion >= 6 &&
      !e.computed &&
      'Identifier' === e.key.type
        ? ((s || i) && this.unexpected(),
          this.checkUnreserved(e.key),
          'await' !== e.key.name ||
            this.awaitIdentPos ||
            (this.awaitIdentPos = n),
          (e.kind = 'init'),
          t
            ? (e.value = this.parseMaybeDefault(n, r, e.key))
            : this.type === Tn.eq && a
            ? (a.shorthandAssign < 0 && (a.shorthandAssign = this.start),
              (e.value = this.parseMaybeDefault(n, r, e.key)))
            : (e.value = e.key),
          (e.shorthand = !0))
        : this.unexpected()
    else {
      ;(s || i) && this.unexpected(),
        (e.kind = e.key.name),
        this.parsePropertyName(e),
        (e.value = this.parseMethod(!1))
      var h = 'get' === e.kind ? 0 : 1
      if (e.value.params.length !== h) {
        var l = e.value.start
        'get' === e.kind
          ? this.raiseRecoverable(l, 'getter should have no params')
          : this.raiseRecoverable(l, 'setter should have exactly one param')
      } else
        'set' === e.kind &&
          'RestElement' === e.value.params[0].type &&
          this.raiseRecoverable(
            e.value.params[0].start,
            'Setter cannot use rest params'
          )
    }
  }),
  (hr.parsePropertyName = function (e) {
    if (this.options.ecmaVersion >= 6) {
      if (this.eat(Tn.bracketL))
        return (
          (e.computed = !0),
          (e.key = this.parseMaybeAssign()),
          this.expect(Tn.bracketR),
          e.key
        )
      e.computed = !1
    }
    return (e.key =
      this.type === Tn.num || this.type === Tn.string
        ? this.parseExprAtom()
        : this.parseIdent('never' !== this.options.allowReserved))
  }),
  (hr.initFunction = function (e) {
    ;(e.id = null),
      this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1),
      this.options.ecmaVersion >= 8 && (e.async = !1)
  }),
  (hr.parseMethod = function (e, t, s) {
    var i = this.startNode(),
      n = this.yieldPos,
      r = this.awaitPos,
      a = this.awaitIdentPos
    return (
      this.initFunction(i),
      this.options.ecmaVersion >= 6 && (i.generator = e),
      this.options.ecmaVersion >= 8 && (i.async = !!t),
      (this.yieldPos = 0),
      (this.awaitPos = 0),
      (this.awaitIdentPos = 0),
      this.enterScope(64 | Yn(t, i.generator) | (s ? 128 : 0)),
      this.expect(Tn.parenL),
      (i.params = this.parseBindingList(
        Tn.parenR,
        !1,
        this.options.ecmaVersion >= 8
      )),
      this.checkYieldAwaitInDefaultParams(),
      this.parseFunctionBody(i, !1, !0),
      (this.yieldPos = n),
      (this.awaitPos = r),
      (this.awaitIdentPos = a),
      this.finishNode(i, 'FunctionExpression')
    )
  }),
  (hr.parseArrowExpression = function (e, t, s) {
    var i = this.yieldPos,
      n = this.awaitPos,
      r = this.awaitIdentPos
    return (
      this.enterScope(16 | Yn(s, !1)),
      this.initFunction(e),
      this.options.ecmaVersion >= 8 && (e.async = !!s),
      (this.yieldPos = 0),
      (this.awaitPos = 0),
      (this.awaitIdentPos = 0),
      (e.params = this.toAssignableList(t, !0)),
      this.parseFunctionBody(e, !0, !1),
      (this.yieldPos = i),
      (this.awaitPos = n),
      (this.awaitIdentPos = r),
      this.finishNode(e, 'ArrowFunctionExpression')
    )
  }),
  (hr.parseFunctionBody = function (e, t, s) {
    var i = t && this.type !== Tn.braceL,
      n = this.strict,
      r = !1
    if (i)
      (e.body = this.parseMaybeAssign()),
        (e.expression = !0),
        this.checkParams(e, !1)
    else {
      var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params)
      ;(n && !a) ||
        ((r = this.strictDirective(this.end)) &&
          a &&
          this.raiseRecoverable(
            e.start,
            "Illegal 'use strict' directive in function with non-simple parameter list"
          ))
      var o = this.labels
      ;(this.labels = []),
        r && (this.strict = !0),
        this.checkParams(
          e,
          !n && !r && !t && !s && this.isSimpleParamList(e.params)
        ),
        (e.body = this.parseBlock(!1)),
        (e.expression = !1),
        this.adaptDirectivePrologue(e.body.body),
        (this.labels = o)
    }
    this.exitScope(),
      this.strict && e.id && this.checkLVal(e.id, 5),
      (this.strict = n)
  }),
  (hr.isSimpleParamList = function (e) {
    for (var t = 0, s = e; t < s.length; t += 1) {
      if ('Identifier' !== s[t].type) return !1
    }
    return !0
  }),
  (hr.checkParams = function (e, t) {
    for (var s = {}, i = 0, n = e.params; i < n.length; i += 1) {
      var r = n[i]
      this.checkLVal(r, 1, t ? null : s)
    }
  }),
  (hr.parseExprList = function (e, t, s, i) {
    for (var n = [], r = !0; !this.eat(e); ) {
      if (r) r = !1
      else if ((this.expect(Tn.comma), t && this.afterTrailingComma(e))) break
      var a = void 0
      s && this.type === Tn.comma
        ? (a = null)
        : this.type === Tn.ellipsis
        ? ((a = this.parseSpread(i)),
          i &&
            this.type === Tn.comma &&
            i.trailingComma < 0 &&
            (i.trailingComma = this.start))
        : (a = this.parseMaybeAssign(!1, i)),
        n.push(a)
    }
    return n
  }),
  (hr.checkUnreserved = function (e) {
    var t = e.start,
      s = e.end,
      i = e.name
    ;(this.inGenerator &&
      'yield' === i &&
      this.raiseRecoverable(
        t,
        "Cannot use 'yield' as identifier inside a generator"
      ),
    this.inAsync &&
      'await' === i &&
      this.raiseRecoverable(
        t,
        "Cannot use 'await' as identifier inside an async function"
      ),
    this.keywords.test(i) && this.raise(t, "Unexpected keyword '" + i + "'"),
    this.options.ecmaVersion < 6 &&
      -1 !== this.input.slice(t, s).indexOf('\\')) ||
      ((this.strict ? this.reservedWordsStrict : this.reservedWords).test(i) &&
        (this.inAsync ||
          'await' !== i ||
          this.raiseRecoverable(
            t,
            "Cannot use keyword 'await' outside an async function"
          ),
        this.raiseRecoverable(t, "The keyword '" + i + "' is reserved")))
  }),
  (hr.parseIdent = function (e, t) {
    var s = this.startNode()
    return (
      this.type === Tn.name
        ? (s.name = this.value)
        : this.type.keyword
        ? ((s.name = this.type.keyword),
          ('class' !== s.name && 'function' !== s.name) ||
            (this.lastTokEnd === this.lastTokStart + 1 &&
              46 === this.input.charCodeAt(this.lastTokStart)) ||
            this.context.pop())
        : this.unexpected(),
      this.next(),
      this.finishNode(s, 'Identifier'),
      e ||
        (this.checkUnreserved(s),
        'await' !== s.name ||
          this.awaitIdentPos ||
          (this.awaitIdentPos = s.start)),
      s
    )
  }),
  (hr.parseYield = function (e) {
    this.yieldPos || (this.yieldPos = this.start)
    var t = this.startNode()
    return (
      this.next(),
      this.type === Tn.semi ||
      this.canInsertSemicolon() ||
      (this.type !== Tn.star && !this.type.startsExpr)
        ? ((t.delegate = !1), (t.argument = null))
        : ((t.delegate = this.eat(Tn.star)),
          (t.argument = this.parseMaybeAssign(e))),
      this.finishNode(t, 'YieldExpression')
    )
  }),
  (hr.parseAwait = function () {
    this.awaitPos || (this.awaitPos = this.start)
    var e = this.startNode()
    return (
      this.next(),
      (e.argument = this.parseMaybeUnary(null, !0)),
      this.finishNode(e, 'AwaitExpression')
    )
  })
var cr = Xn.prototype
;(cr.raise = function (e, t) {
  var s = Hn(this.input, e)
  t += ' (' + s.line + ':' + s.column + ')'
  var i = new SyntaxError(t)
  throw ((i.pos = e), (i.loc = s), (i.raisedAt = this.pos), i)
}),
  (cr.raiseRecoverable = cr.raise),
  (cr.curPosition = function () {
    if (this.options.locations)
      return new zn(this.curLine, this.pos - this.lineStart)
  })
var ur = Xn.prototype,
  dr = function (e) {
    ;(this.flags = e),
      (this.var = []),
      (this.lexical = []),
      (this.functions = [])
  }
;(ur.enterScope = function (e) {
  this.scopeStack.push(new dr(e))
}),
  (ur.exitScope = function () {
    this.scopeStack.pop()
  }),
  (ur.treatFunctionsAsVarInScope = function (e) {
    return 2 & e.flags || (!this.inModule && 1 & e.flags)
  }),
  (ur.declareName = function (e, t, s) {
    var i = !1
    if (2 === t) {
      var n = this.currentScope()
      ;(i =
        n.lexical.indexOf(e) > -1 ||
        n.functions.indexOf(e) > -1 ||
        n.var.indexOf(e) > -1),
        n.lexical.push(e),
        this.inModule && 1 & n.flags && delete this.undefinedExports[e]
    } else if (4 === t) {
      this.currentScope().lexical.push(e)
    } else if (3 === t) {
      var r = this.currentScope()
      ;(i = this.treatFunctionsAsVar
        ? r.lexical.indexOf(e) > -1
        : r.lexical.indexOf(e) > -1 || r.var.indexOf(e) > -1),
        r.functions.push(e)
    } else
      for (var a = this.scopeStack.length - 1; a >= 0; --a) {
        var o = this.scopeStack[a]
        if (
          (o.lexical.indexOf(e) > -1 &&
            !(32 & o.flags && o.lexical[0] === e)) ||
          (!this.treatFunctionsAsVarInScope(o) && o.functions.indexOf(e) > -1)
        ) {
          i = !0
          break
        }
        if (
          (o.var.push(e),
          this.inModule && 1 & o.flags && delete this.undefinedExports[e],
          3 & o.flags)
        )
          break
      }
    i &&
      this.raiseRecoverable(
        s,
        "Identifier '" + e + "' has already been declared"
      )
  }),
  (ur.checkLocalExport = function (e) {
    ;-1 === this.scopeStack[0].lexical.indexOf(e.name) &&
      -1 === this.scopeStack[0].var.indexOf(e.name) &&
      (this.undefinedExports[e.name] = e)
  }),
  (ur.currentScope = function () {
    return this.scopeStack[this.scopeStack.length - 1]
  }),
  (ur.currentVarScope = function () {
    for (var e = this.scopeStack.length - 1; ; e--) {
      var t = this.scopeStack[e]
      if (3 & t.flags) return t
    }
  }),
  (ur.currentThisScope = function () {
    for (var e = this.scopeStack.length - 1; ; e--) {
      var t = this.scopeStack[e]
      if (3 & t.flags && !(16 & t.flags)) return t
    }
  })
var pr = function (e, t, s) {
    ;(this.type = ''),
      (this.start = t),
      (this.end = 0),
      e.options.locations && (this.loc = new Gn(e, s)),
      e.options.directSourceFile &&
        (this.sourceFile = e.options.directSourceFile),
      e.options.ranges && (this.range = [t, 0])
  },
  fr = Xn.prototype
function mr(e, t, s, i) {
  return (
    (e.type = t),
    (e.end = s),
    this.options.locations && (e.loc.end = i),
    this.options.ranges && (e.range[1] = s),
    e
  )
}
;(fr.startNode = function () {
  return new pr(this, this.start, this.startLoc)
}),
  (fr.startNodeAt = function (e, t) {
    return new pr(this, e, t)
  }),
  (fr.finishNode = function (e, t) {
    return mr.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc)
  }),
  (fr.finishNodeAt = function (e, t, s, i) {
    return mr.call(this, e, t, s, i)
  })
var gr = function (e, t, s, i, n) {
    ;(this.token = e),
      (this.isExpr = !!t),
      (this.preserveSpace = !!s),
      (this.override = i),
      (this.generator = !!n)
  },
  xr = {
    b_stat: new gr('{', !1),
    b_expr: new gr('{', !0),
    b_tmpl: new gr('${', !1),
    p_stat: new gr('(', !1),
    p_expr: new gr('(', !0),
    q_tmpl: new gr('`', !0, !0, function (e) {
      return e.tryReadTemplateToken()
    }),
    f_stat: new gr('function', !1),
    f_expr: new gr('function', !0),
    f_expr_gen: new gr('function', !0, !1, null, !0),
    f_gen: new gr('function', !1, !1, null, !0),
  },
  yr = Xn.prototype
;(yr.initialContext = function () {
  return [xr.b_stat]
}),
  (yr.braceIsBlock = function (e) {
    var t = this.curContext()
    return (
      t === xr.f_expr ||
      t === xr.f_stat ||
      (e !== Tn.colon || (t !== xr.b_stat && t !== xr.b_expr)
        ? e === Tn._return || (e === Tn.name && this.exprAllowed)
          ? Ln.test(this.input.slice(this.lastTokEnd, this.start))
          : e === Tn._else ||
            e === Tn.semi ||
            e === Tn.eof ||
            e === Tn.parenR ||
            e === Tn.arrow ||
            (e === Tn.braceL
              ? t === xr.b_stat
              : e !== Tn._var &&
                e !== Tn._const &&
                e !== Tn.name &&
                !this.exprAllowed)
        : !t.isExpr)
    )
  }),
  (yr.inGeneratorContext = function () {
    for (var e = this.context.length - 1; e >= 1; e--) {
      var t = this.context[e]
      if ('function' === t.token) return t.generator
    }
    return !1
  }),
  (yr.updateContext = function (e) {
    var t,
      s = this.type
    s.keyword && e === Tn.dot
      ? (this.exprAllowed = !1)
      : (t = s.updateContext)
      ? t.call(this, e)
      : (this.exprAllowed = s.beforeExpr)
  }),
  (Tn.parenR.updateContext = Tn.braceR.updateContext =
    function () {
      if (1 !== this.context.length) {
        var e = this.context.pop()
        e === xr.b_stat &&
          'function' === this.curContext().token &&
          (e = this.context.pop()),
          (this.exprAllowed = !e.isExpr)
      } else this.exprAllowed = !0
    }),
  (Tn.braceL.updateContext = function (e) {
    this.context.push(this.braceIsBlock(e) ? xr.b_stat : xr.b_expr),
      (this.exprAllowed = !0)
  }),
  (Tn.dollarBraceL.updateContext = function () {
    this.context.push(xr.b_tmpl), (this.exprAllowed = !0)
  }),
  (Tn.parenL.updateContext = function (e) {
    var t = e === Tn._if || e === Tn._for || e === Tn._with || e === Tn._while
    this.context.push(t ? xr.p_stat : xr.p_expr), (this.exprAllowed = !0)
  }),
  (Tn.incDec.updateContext = function () {}),
  (Tn._function.updateContext = Tn._class.updateContext =
    function (e) {
      !e.beforeExpr ||
      e === Tn.semi ||
      e === Tn._else ||
      (e === Tn._return &&
        Ln.test(this.input.slice(this.lastTokEnd, this.start))) ||
      ((e === Tn.colon || e === Tn.braceL) && this.curContext() === xr.b_stat)
        ? this.context.push(xr.f_stat)
        : this.context.push(xr.f_expr),
        (this.exprAllowed = !1)
    }),
  (Tn.backQuote.updateContext = function () {
    this.curContext() === xr.q_tmpl
      ? this.context.pop()
      : this.context.push(xr.q_tmpl),
      (this.exprAllowed = !1)
  }),
  (Tn.star.updateContext = function (e) {
    if (e === Tn._function) {
      var t = this.context.length - 1
      this.context[t] === xr.f_expr
        ? (this.context[t] = xr.f_expr_gen)
        : (this.context[t] = xr.f_gen)
    }
    this.exprAllowed = !0
  }),
  (Tn.name.updateContext = function (e) {
    var t = !1
    this.options.ecmaVersion >= 6 &&
      e !== Tn.dot &&
      (('of' === this.value && !this.exprAllowed) ||
        ('yield' === this.value && this.inGeneratorContext())) &&
      (t = !0),
      (this.exprAllowed = t)
  })
var Er =
    'ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS',
  br = Er + ' Extended_Pictographic',
  vr = {
    9: Er,
    10: br,
    11: 'ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic',
  },
  Sr =
    'Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu',
  Ar =
    'Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb',
  Cr =
    Ar +
    ' Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd',
  kr = {
    9: Ar,
    10: Cr,
    11: 'Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho',
  },
  Pr = {}
function wr(e) {
  var t = (Pr[e] = {
    binary: jn(vr[e] + ' ' + Sr),
    nonBinary: { General_Category: jn(Sr), Script: jn(kr[e]) },
  })
  ;(t.nonBinary.Script_Extensions = t.nonBinary.Script),
    (t.nonBinary.gc = t.nonBinary.General_Category),
    (t.nonBinary.sc = t.nonBinary.Script),
    (t.nonBinary.scx = t.nonBinary.Script_Extensions)
}
wr(9), wr(10), wr(11)
var Nr = Xn.prototype,
  _r = function (e) {
    ;(this.parser = e),
      (this.validFlags =
        'gim' +
        (e.options.ecmaVersion >= 6 ? 'uy' : '') +
        (e.options.ecmaVersion >= 9 ? 's' : '')),
      (this.unicodeProperties =
        Pr[e.options.ecmaVersion >= 11 ? 11 : e.options.ecmaVersion]),
      (this.source = ''),
      (this.flags = ''),
      (this.start = 0),
      (this.switchU = !1),
      (this.switchN = !1),
      (this.pos = 0),
      (this.lastIntValue = 0),
      (this.lastStringValue = ''),
      (this.lastAssertionIsQuantifiable = !1),
      (this.numCapturingParens = 0),
      (this.maxBackReference = 0),
      (this.groupNames = []),
      (this.backReferenceNames = [])
  }
function Ir(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536), String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))
}
function $r(e) {
  return (
    36 === e ||
    (e >= 40 && e <= 43) ||
    46 === e ||
    63 === e ||
    (e >= 91 && e <= 94) ||
    (e >= 123 && e <= 125)
  )
}
function Tr(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122)
}
function Lr(e) {
  return Tr(e) || 95 === e
}
function Rr(e) {
  return Lr(e) || Mr(e)
}
function Mr(e) {
  return e >= 48 && e <= 57
}
function Or(e) {
  return (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102)
}
function Dr(e) {
  return e >= 65 && e <= 70
    ? e - 65 + 10
    : e >= 97 && e <= 102
    ? e - 97 + 10
    : e - 48
}
function Vr(e) {
  return e >= 48 && e <= 55
}
;(_r.prototype.reset = function (e, t, s) {
  var i = -1 !== s.indexOf('u')
  ;(this.start = 0 | e),
    (this.source = t + ''),
    (this.flags = s),
    (this.switchU = i && this.parser.options.ecmaVersion >= 6),
    (this.switchN = i && this.parser.options.ecmaVersion >= 9)
}),
  (_r.prototype.raise = function (e) {
    this.parser.raiseRecoverable(
      this.start,
      'Invalid regular expression: /' + this.source + '/: ' + e
    )
  }),
  (_r.prototype.at = function (e) {
    var t = this.source,
      s = t.length
    if (e >= s) return -1
    var i = t.charCodeAt(e)
    return !this.switchU || i <= 55295 || i >= 57344 || e + 1 >= s
      ? i
      : (i << 10) + t.charCodeAt(e + 1) - 56613888
  }),
  (_r.prototype.nextIndex = function (e) {
    var t = this.source,
      s = t.length
    if (e >= s) return s
    var i = t.charCodeAt(e)
    return !this.switchU || i <= 55295 || i >= 57344 || e + 1 >= s
      ? e + 1
      : e + 2
  }),
  (_r.prototype.current = function () {
    return this.at(this.pos)
  }),
  (_r.prototype.lookahead = function () {
    return this.at(this.nextIndex(this.pos))
  }),
  (_r.prototype.advance = function () {
    this.pos = this.nextIndex(this.pos)
  }),
  (_r.prototype.eat = function (e) {
    return this.current() === e && (this.advance(), !0)
  }),
  (Nr.validateRegExpFlags = function (e) {
    for (var t = e.validFlags, s = e.flags, i = 0; i < s.length; i++) {
      var n = s.charAt(i)
      ;-1 === t.indexOf(n) &&
        this.raise(e.start, 'Invalid regular expression flag'),
        s.indexOf(n, i + 1) > -1 &&
          this.raise(e.start, 'Duplicate regular expression flag')
    }
  }),
  (Nr.validateRegExpPattern = function (e) {
    this.regexp_pattern(e),
      !e.switchN &&
        this.options.ecmaVersion >= 9 &&
        e.groupNames.length > 0 &&
        ((e.switchN = !0), this.regexp_pattern(e))
  }),
  (Nr.regexp_pattern = function (e) {
    ;(e.pos = 0),
      (e.lastIntValue = 0),
      (e.lastStringValue = ''),
      (e.lastAssertionIsQuantifiable = !1),
      (e.numCapturingParens = 0),
      (e.maxBackReference = 0),
      (e.groupNames.length = 0),
      (e.backReferenceNames.length = 0),
      this.regexp_disjunction(e),
      e.pos !== e.source.length &&
        (e.eat(41) && e.raise("Unmatched ')'"),
        (e.eat(93) || e.eat(125)) && e.raise('Lone quantifier brackets')),
      e.maxBackReference > e.numCapturingParens && e.raise('Invalid escape')
    for (var t = 0, s = e.backReferenceNames; t < s.length; t += 1) {
      var i = s[t]
      ;-1 === e.groupNames.indexOf(i) &&
        e.raise('Invalid named capture referenced')
    }
  }),
  (Nr.regexp_disjunction = function (e) {
    for (this.regexp_alternative(e); e.eat(124); ) this.regexp_alternative(e)
    this.regexp_eatQuantifier(e, !0) && e.raise('Nothing to repeat'),
      e.eat(123) && e.raise('Lone quantifier brackets')
  }),
  (Nr.regexp_alternative = function (e) {
    for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
  }),
  (Nr.regexp_eatTerm = function (e) {
    return this.regexp_eatAssertion(e)
      ? (e.lastAssertionIsQuantifiable &&
          this.regexp_eatQuantifier(e) &&
          e.switchU &&
          e.raise('Invalid quantifier'),
        !0)
      : !(e.switchU
          ? !this.regexp_eatAtom(e)
          : !this.regexp_eatExtendedAtom(e)) &&
          (this.regexp_eatQuantifier(e), !0)
  }),
  (Nr.regexp_eatAssertion = function (e) {
    var t = e.pos
    if (((e.lastAssertionIsQuantifiable = !1), e.eat(94) || e.eat(36)))
      return !0
    if (e.eat(92)) {
      if (e.eat(66) || e.eat(98)) return !0
      e.pos = t
    }
    if (e.eat(40) && e.eat(63)) {
      var s = !1
      if (
        (this.options.ecmaVersion >= 9 && (s = e.eat(60)),
        e.eat(61) || e.eat(33))
      )
        return (
          this.regexp_disjunction(e),
          e.eat(41) || e.raise('Unterminated group'),
          (e.lastAssertionIsQuantifiable = !s),
          !0
        )
    }
    return (e.pos = t), !1
  }),
  (Nr.regexp_eatQuantifier = function (e, t) {
    return (
      void 0 === t && (t = !1),
      !!this.regexp_eatQuantifierPrefix(e, t) && (e.eat(63), !0)
    )
  }),
  (Nr.regexp_eatQuantifierPrefix = function (e, t) {
    return (
      e.eat(42) ||
      e.eat(43) ||
      e.eat(63) ||
      this.regexp_eatBracedQuantifier(e, t)
    )
  }),
  (Nr.regexp_eatBracedQuantifier = function (e, t) {
    var s = e.pos
    if (e.eat(123)) {
      var i = 0,
        n = -1
      if (
        this.regexp_eatDecimalDigits(e) &&
        ((i = e.lastIntValue),
        e.eat(44) && this.regexp_eatDecimalDigits(e) && (n = e.lastIntValue),
        e.eat(125))
      )
        return (
          -1 !== n &&
            n < i &&
            !t &&
            e.raise('numbers out of order in {} quantifier'),
          !0
        )
      e.switchU && !t && e.raise('Incomplete quantifier'), (e.pos = s)
    }
    return !1
  }),
  (Nr.regexp_eatAtom = function (e) {
    return (
      this.regexp_eatPatternCharacters(e) ||
      e.eat(46) ||
      this.regexp_eatReverseSolidusAtomEscape(e) ||
      this.regexp_eatCharacterClass(e) ||
      this.regexp_eatUncapturingGroup(e) ||
      this.regexp_eatCapturingGroup(e)
    )
  }),
  (Nr.regexp_eatReverseSolidusAtomEscape = function (e) {
    var t = e.pos
    if (e.eat(92)) {
      if (this.regexp_eatAtomEscape(e)) return !0
      e.pos = t
    }
    return !1
  }),
  (Nr.regexp_eatUncapturingGroup = function (e) {
    var t = e.pos
    if (e.eat(40)) {
      if (e.eat(63) && e.eat(58)) {
        if ((this.regexp_disjunction(e), e.eat(41))) return !0
        e.raise('Unterminated group')
      }
      e.pos = t
    }
    return !1
  }),
  (Nr.regexp_eatCapturingGroup = function (e) {
    if (e.eat(40)) {
      if (
        (this.options.ecmaVersion >= 9
          ? this.regexp_groupSpecifier(e)
          : 63 === e.current() && e.raise('Invalid group'),
        this.regexp_disjunction(e),
        e.eat(41))
      )
        return (e.numCapturingParens += 1), !0
      e.raise('Unterminated group')
    }
    return !1
  }),
  (Nr.regexp_eatExtendedAtom = function (e) {
    return (
      e.eat(46) ||
      this.regexp_eatReverseSolidusAtomEscape(e) ||
      this.regexp_eatCharacterClass(e) ||
      this.regexp_eatUncapturingGroup(e) ||
      this.regexp_eatCapturingGroup(e) ||
      this.regexp_eatInvalidBracedQuantifier(e) ||
      this.regexp_eatExtendedPatternCharacter(e)
    )
  }),
  (Nr.regexp_eatInvalidBracedQuantifier = function (e) {
    return (
      this.regexp_eatBracedQuantifier(e, !0) && e.raise('Nothing to repeat'), !1
    )
  }),
  (Nr.regexp_eatSyntaxCharacter = function (e) {
    var t = e.current()
    return !!$r(t) && ((e.lastIntValue = t), e.advance(), !0)
  }),
  (Nr.regexp_eatPatternCharacters = function (e) {
    for (var t = e.pos, s = 0; -1 !== (s = e.current()) && !$r(s); ) e.advance()
    return e.pos !== t
  }),
  (Nr.regexp_eatExtendedPatternCharacter = function (e) {
    var t = e.current()
    return (
      !(
        -1 === t ||
        36 === t ||
        (t >= 40 && t <= 43) ||
        46 === t ||
        63 === t ||
        91 === t ||
        94 === t ||
        124 === t
      ) && (e.advance(), !0)
    )
  }),
  (Nr.regexp_groupSpecifier = function (e) {
    if (e.eat(63)) {
      if (this.regexp_eatGroupName(e))
        return (
          -1 !== e.groupNames.indexOf(e.lastStringValue) &&
            e.raise('Duplicate capture group name'),
          void e.groupNames.push(e.lastStringValue)
        )
      e.raise('Invalid group')
    }
  }),
  (Nr.regexp_eatGroupName = function (e) {
    if (((e.lastStringValue = ''), e.eat(60))) {
      if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0
      e.raise('Invalid capture group name')
    }
    return !1
  }),
  (Nr.regexp_eatRegExpIdentifierName = function (e) {
    if (((e.lastStringValue = ''), this.regexp_eatRegExpIdentifierStart(e))) {
      for (
        e.lastStringValue += Ir(e.lastIntValue);
        this.regexp_eatRegExpIdentifierPart(e);

      )
        e.lastStringValue += Ir(e.lastIntValue)
      return !0
    }
    return !1
  }),
  (Nr.regexp_eatRegExpIdentifierStart = function (e) {
    var t = e.pos,
      s = e.current()
    return (
      e.advance(),
      92 === s &&
        this.regexp_eatRegExpUnicodeEscapeSequence(e) &&
        (s = e.lastIntValue),
      (function (e) {
        return Cn(e, !0) || 36 === e || 95 === e
      })(s)
        ? ((e.lastIntValue = s), !0)
        : ((e.pos = t), !1)
    )
  }),
  (Nr.regexp_eatRegExpIdentifierPart = function (e) {
    var t = e.pos,
      s = e.current()
    return (
      e.advance(),
      92 === s &&
        this.regexp_eatRegExpUnicodeEscapeSequence(e) &&
        (s = e.lastIntValue),
      (function (e) {
        return kn(e, !0) || 36 === e || 95 === e || 8204 === e || 8205 === e
      })(s)
        ? ((e.lastIntValue = s), !0)
        : ((e.pos = t), !1)
    )
  }),
  (Nr.regexp_eatAtomEscape = function (e) {
    return (
      !!(
        this.regexp_eatBackReference(e) ||
        this.regexp_eatCharacterClassEscape(e) ||
        this.regexp_eatCharacterEscape(e) ||
        (e.switchN && this.regexp_eatKGroupName(e))
      ) ||
      (e.switchU &&
        (99 === e.current() && e.raise('Invalid unicode escape'),
        e.raise('Invalid escape')),
      !1)
    )
  }),
  (Nr.regexp_eatBackReference = function (e) {
    var t = e.pos
    if (this.regexp_eatDecimalEscape(e)) {
      var s = e.lastIntValue
      if (e.switchU)
        return s > e.maxBackReference && (e.maxBackReference = s), !0
      if (s <= e.numCapturingParens) return !0
      e.pos = t
    }
    return !1
  }),
  (Nr.regexp_eatKGroupName = function (e) {
    if (e.eat(107)) {
      if (this.regexp_eatGroupName(e))
        return e.backReferenceNames.push(e.lastStringValue), !0
      e.raise('Invalid named reference')
    }
    return !1
  }),
  (Nr.regexp_eatCharacterEscape = function (e) {
    return (
      this.regexp_eatControlEscape(e) ||
      this.regexp_eatCControlLetter(e) ||
      this.regexp_eatZero(e) ||
      this.regexp_eatHexEscapeSequence(e) ||
      this.regexp_eatRegExpUnicodeEscapeSequence(e) ||
      (!e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e)) ||
      this.regexp_eatIdentityEscape(e)
    )
  }),
  (Nr.regexp_eatCControlLetter = function (e) {
    var t = e.pos
    if (e.eat(99)) {
      if (this.regexp_eatControlLetter(e)) return !0
      e.pos = t
    }
    return !1
  }),
  (Nr.regexp_eatZero = function (e) {
    return (
      48 === e.current() &&
      !Mr(e.lookahead()) &&
      ((e.lastIntValue = 0), e.advance(), !0)
    )
  }),
  (Nr.regexp_eatControlEscape = function (e) {
    var t = e.current()
    return 116 === t
      ? ((e.lastIntValue = 9), e.advance(), !0)
      : 110 === t
      ? ((e.lastIntValue = 10), e.advance(), !0)
      : 118 === t
      ? ((e.lastIntValue = 11), e.advance(), !0)
      : 102 === t
      ? ((e.lastIntValue = 12), e.advance(), !0)
      : 114 === t && ((e.lastIntValue = 13), e.advance(), !0)
  }),
  (Nr.regexp_eatControlLetter = function (e) {
    var t = e.current()
    return !!Tr(t) && ((e.lastIntValue = t % 32), e.advance(), !0)
  }),
  (Nr.regexp_eatRegExpUnicodeEscapeSequence = function (e) {
    var t,
      s = e.pos
    if (e.eat(117)) {
      if (this.regexp_eatFixedHexDigits(e, 4)) {
        var i = e.lastIntValue
        if (e.switchU && i >= 55296 && i <= 56319) {
          var n = e.pos
          if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
            var r = e.lastIntValue
            if (r >= 56320 && r <= 57343)
              return (
                (e.lastIntValue = 1024 * (i - 55296) + (r - 56320) + 65536), !0
              )
          }
          ;(e.pos = n), (e.lastIntValue = i)
        }
        return !0
      }
      if (
        e.switchU &&
        e.eat(123) &&
        this.regexp_eatHexDigits(e) &&
        e.eat(125) &&
        (t = e.lastIntValue) >= 0 &&
        t <= 1114111
      )
        return !0
      e.switchU && e.raise('Invalid unicode escape'), (e.pos = s)
    }
    return !1
  }),
  (Nr.regexp_eatIdentityEscape = function (e) {
    if (e.switchU)
      return (
        !!this.regexp_eatSyntaxCharacter(e) ||
        (!!e.eat(47) && ((e.lastIntValue = 47), !0))
      )
    var t = e.current()
    return (
      !(99 === t || (e.switchN && 107 === t)) &&
      ((e.lastIntValue = t), e.advance(), !0)
    )
  }),
  (Nr.regexp_eatDecimalEscape = function (e) {
    e.lastIntValue = 0
    var t = e.current()
    if (t >= 49 && t <= 57) {
      do {
        ;(e.lastIntValue = 10 * e.lastIntValue + (t - 48)), e.advance()
      } while ((t = e.current()) >= 48 && t <= 57)
      return !0
    }
    return !1
  }),
  (Nr.regexp_eatCharacterClassEscape = function (e) {
    var t = e.current()
    if (
      (function (e) {
        return (
          100 === e ||
          68 === e ||
          115 === e ||
          83 === e ||
          119 === e ||
          87 === e
        )
      })(t)
    )
      return (e.lastIntValue = -1), e.advance(), !0
    if (e.switchU && this.options.ecmaVersion >= 9 && (80 === t || 112 === t)) {
      if (
        ((e.lastIntValue = -1),
        e.advance(),
        e.eat(123) &&
          this.regexp_eatUnicodePropertyValueExpression(e) &&
          e.eat(125))
      )
        return !0
      e.raise('Invalid property name')
    }
    return !1
  }),
  (Nr.regexp_eatUnicodePropertyValueExpression = function (e) {
    var t = e.pos
    if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
      var s = e.lastStringValue
      if (this.regexp_eatUnicodePropertyValue(e)) {
        var i = e.lastStringValue
        return this.regexp_validateUnicodePropertyNameAndValue(e, s, i), !0
      }
    }
    if (((e.pos = t), this.regexp_eatLoneUnicodePropertyNameOrValue(e))) {
      var n = e.lastStringValue
      return this.regexp_validateUnicodePropertyNameOrValue(e, n), !0
    }
    return !1
  }),
  (Nr.regexp_validateUnicodePropertyNameAndValue = function (e, t, s) {
    Wn(e.unicodeProperties.nonBinary, t) || e.raise('Invalid property name'),
      e.unicodeProperties.nonBinary[t].test(s) ||
        e.raise('Invalid property value')
  }),
  (Nr.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
    e.unicodeProperties.binary.test(t) || e.raise('Invalid property name')
  }),
  (Nr.regexp_eatUnicodePropertyName = function (e) {
    var t = 0
    for (e.lastStringValue = ''; Lr((t = e.current())); )
      (e.lastStringValue += Ir(t)), e.advance()
    return '' !== e.lastStringValue
  }),
  (Nr.regexp_eatUnicodePropertyValue = function (e) {
    var t = 0
    for (e.lastStringValue = ''; Rr((t = e.current())); )
      (e.lastStringValue += Ir(t)), e.advance()
    return '' !== e.lastStringValue
  }),
  (Nr.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
    return this.regexp_eatUnicodePropertyValue(e)
  }),
  (Nr.regexp_eatCharacterClass = function (e) {
    if (e.eat(91)) {
      if ((e.eat(94), this.regexp_classRanges(e), e.eat(93))) return !0
      e.raise('Unterminated character class')
    }
    return !1
  }),
  (Nr.regexp_classRanges = function (e) {
    for (; this.regexp_eatClassAtom(e); ) {
      var t = e.lastIntValue
      if (e.eat(45) && this.regexp_eatClassAtom(e)) {
        var s = e.lastIntValue
        !e.switchU ||
          (-1 !== t && -1 !== s) ||
          e.raise('Invalid character class'),
          -1 !== t &&
            -1 !== s &&
            t > s &&
            e.raise('Range out of order in character class')
      }
    }
  }),
  (Nr.regexp_eatClassAtom = function (e) {
    var t = e.pos
    if (e.eat(92)) {
      if (this.regexp_eatClassEscape(e)) return !0
      if (e.switchU) {
        var s = e.current()
        ;(99 === s || Vr(s)) && e.raise('Invalid class escape'),
          e.raise('Invalid escape')
      }
      e.pos = t
    }
    var i = e.current()
    return 93 !== i && ((e.lastIntValue = i), e.advance(), !0)
  }),
  (Nr.regexp_eatClassEscape = function (e) {
    var t = e.pos
    if (e.eat(98)) return (e.lastIntValue = 8), !0
    if (e.switchU && e.eat(45)) return (e.lastIntValue = 45), !0
    if (!e.switchU && e.eat(99)) {
      if (this.regexp_eatClassControlLetter(e)) return !0
      e.pos = t
    }
    return (
      this.regexp_eatCharacterClassEscape(e) ||
      this.regexp_eatCharacterEscape(e)
    )
  }),
  (Nr.regexp_eatClassControlLetter = function (e) {
    var t = e.current()
    return !(!Mr(t) && 95 !== t) && ((e.lastIntValue = t % 32), e.advance(), !0)
  }),
  (Nr.regexp_eatHexEscapeSequence = function (e) {
    var t = e.pos
    if (e.eat(120)) {
      if (this.regexp_eatFixedHexDigits(e, 2)) return !0
      e.switchU && e.raise('Invalid escape'), (e.pos = t)
    }
    return !1
  }),
  (Nr.regexp_eatDecimalDigits = function (e) {
    var t = e.pos,
      s = 0
    for (e.lastIntValue = 0; Mr((s = e.current())); )
      (e.lastIntValue = 10 * e.lastIntValue + (s - 48)), e.advance()
    return e.pos !== t
  }),
  (Nr.regexp_eatHexDigits = function (e) {
    var t = e.pos,
      s = 0
    for (e.lastIntValue = 0; Or((s = e.current())); )
      (e.lastIntValue = 16 * e.lastIntValue + Dr(s)), e.advance()
    return e.pos !== t
  }),
  (Nr.regexp_eatLegacyOctalEscapeSequence = function (e) {
    if (this.regexp_eatOctalDigit(e)) {
      var t = e.lastIntValue
      if (this.regexp_eatOctalDigit(e)) {
        var s = e.lastIntValue
        t <= 3 && this.regexp_eatOctalDigit(e)
          ? (e.lastIntValue = 64 * t + 8 * s + e.lastIntValue)
          : (e.lastIntValue = 8 * t + s)
      } else e.lastIntValue = t
      return !0
    }
    return !1
  }),
  (Nr.regexp_eatOctalDigit = function (e) {
    var t = e.current()
    return Vr(t)
      ? ((e.lastIntValue = t - 48), e.advance(), !0)
      : ((e.lastIntValue = 0), !1)
  }),
  (Nr.regexp_eatFixedHexDigits = function (e, t) {
    var s = e.pos
    e.lastIntValue = 0
    for (var i = 0; i < t; ++i) {
      var n = e.current()
      if (!Or(n)) return (e.pos = s), !1
      ;(e.lastIntValue = 16 * e.lastIntValue + Dr(n)), e.advance()
    }
    return !0
  })
var Br = function (e) {
    ;(this.type = e.type),
      (this.value = e.value),
      (this.start = e.start),
      (this.end = e.end),
      e.options.locations && (this.loc = new Gn(e, e.startLoc, e.endLoc)),
      e.options.ranges && (this.range = [e.start, e.end])
  },
  Fr = Xn.prototype
function Wr(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536), String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))
}
;(Fr.next = function () {
  this.options.onToken && this.options.onToken(new Br(this)),
    (this.lastTokEnd = this.end),
    (this.lastTokStart = this.start),
    (this.lastTokEndLoc = this.endLoc),
    (this.lastTokStartLoc = this.startLoc),
    this.nextToken()
}),
  (Fr.getToken = function () {
    return this.next(), new Br(this)
  }),
  'undefined' != typeof Symbol &&
    (Fr[Symbol.iterator] = function () {
      var e = this
      return {
        next: function () {
          var t = e.getToken()
          return { done: t.type === Tn.eof, value: t }
        },
      }
    }),
  (Fr.curContext = function () {
    return this.context[this.context.length - 1]
  }),
  (Fr.nextToken = function () {
    var e = this.curContext()
    return (
      (e && e.preserveSpace) || this.skipSpace(),
      (this.start = this.pos),
      this.options.locations && (this.startLoc = this.curPosition()),
      this.pos >= this.input.length
        ? this.finishToken(Tn.eof)
        : e.override
        ? e.override(this)
        : void this.readToken(this.fullCharCodeAtPos())
    )
  }),
  (Fr.readToken = function (e) {
    return Cn(e, this.options.ecmaVersion >= 6) || 92 === e
      ? this.readWord()
      : this.getTokenFromCode(e)
  }),
  (Fr.fullCharCodeAtPos = function () {
    var e = this.input.charCodeAt(this.pos)
    return e <= 55295 || e >= 57344
      ? e
      : (e << 10) + this.input.charCodeAt(this.pos + 1) - 56613888
  }),
  (Fr.skipBlockComment = function () {
    var e,
      t = this.options.onComment && this.curPosition(),
      s = this.pos,
      i = this.input.indexOf('*/', (this.pos += 2))
    if (
      (-1 === i && this.raise(this.pos - 2, 'Unterminated comment'),
      (this.pos = i + 2),
      this.options.locations)
    )
      for (Rn.lastIndex = s; (e = Rn.exec(this.input)) && e.index < this.pos; )
        ++this.curLine, (this.lineStart = e.index + e[0].length)
    this.options.onComment &&
      this.options.onComment(
        !0,
        this.input.slice(s + 2, i),
        s,
        this.pos,
        t,
        this.curPosition()
      )
  }),
  (Fr.skipLineComment = function (e) {
    for (
      var t = this.pos,
        s = this.options.onComment && this.curPosition(),
        i = this.input.charCodeAt((this.pos += e));
      this.pos < this.input.length && !Mn(i);

    )
      i = this.input.charCodeAt(++this.pos)
    this.options.onComment &&
      this.options.onComment(
        !1,
        this.input.slice(t + e, this.pos),
        t,
        this.pos,
        s,
        this.curPosition()
      )
  }),
  (Fr.skipSpace = function () {
    e: for (; this.pos < this.input.length; ) {
      var e = this.input.charCodeAt(this.pos)
      switch (e) {
        case 32:
        case 160:
          ++this.pos
          break
        case 13:
          10 === this.input.charCodeAt(this.pos + 1) && ++this.pos
        case 10:
        case 8232:
        case 8233:
          ++this.pos,
            this.options.locations &&
              (++this.curLine, (this.lineStart = this.pos))
          break
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment()
              break
            case 47:
              this.skipLineComment(2)
              break
            default:
              break e
          }
          break
        default:
          if (
            !(
              (e > 8 && e < 14) ||
              (e >= 5760 && On.test(String.fromCharCode(e)))
            )
          )
            break e
          ++this.pos
      }
    }
  }),
  (Fr.finishToken = function (e, t) {
    ;(this.end = this.pos),
      this.options.locations && (this.endLoc = this.curPosition())
    var s = this.type
    ;(this.type = e), (this.value = t), this.updateContext(s)
  }),
  (Fr.readToken_dot = function () {
    var e = this.input.charCodeAt(this.pos + 1)
    if (e >= 48 && e <= 57) return this.readNumber(!0)
    var t = this.input.charCodeAt(this.pos + 2)
    return this.options.ecmaVersion >= 6 && 46 === e && 46 === t
      ? ((this.pos += 3), this.finishToken(Tn.ellipsis))
      : (++this.pos, this.finishToken(Tn.dot))
  }),
  (Fr.readToken_slash = function () {
    var e = this.input.charCodeAt(this.pos + 1)
    return this.exprAllowed
      ? (++this.pos, this.readRegexp())
      : 61 === e
      ? this.finishOp(Tn.assign, 2)
      : this.finishOp(Tn.slash, 1)
  }),
  (Fr.readToken_mult_modulo_exp = function (e) {
    var t = this.input.charCodeAt(this.pos + 1),
      s = 1,
      i = 42 === e ? Tn.star : Tn.modulo
    return (
      this.options.ecmaVersion >= 7 &&
        42 === e &&
        42 === t &&
        (++s, (i = Tn.starstar), (t = this.input.charCodeAt(this.pos + 2))),
      61 === t ? this.finishOp(Tn.assign, s + 1) : this.finishOp(i, s)
    )
  }),
  (Fr.readToken_pipe_amp = function (e) {
    var t = this.input.charCodeAt(this.pos + 1)
    return t === e
      ? this.finishOp(124 === e ? Tn.logicalOR : Tn.logicalAND, 2)
      : 61 === t
      ? this.finishOp(Tn.assign, 2)
      : this.finishOp(124 === e ? Tn.bitwiseOR : Tn.bitwiseAND, 1)
  }),
  (Fr.readToken_caret = function () {
    return 61 === this.input.charCodeAt(this.pos + 1)
      ? this.finishOp(Tn.assign, 2)
      : this.finishOp(Tn.bitwiseXOR, 1)
  }),
  (Fr.readToken_plus_min = function (e) {
    var t = this.input.charCodeAt(this.pos + 1)
    return t === e
      ? 45 !== t ||
        this.inModule ||
        62 !== this.input.charCodeAt(this.pos + 2) ||
        (0 !== this.lastTokEnd &&
          !Ln.test(this.input.slice(this.lastTokEnd, this.pos)))
        ? this.finishOp(Tn.incDec, 2)
        : (this.skipLineComment(3), this.skipSpace(), this.nextToken())
      : 61 === t
      ? this.finishOp(Tn.assign, 2)
      : this.finishOp(Tn.plusMin, 1)
  }),
  (Fr.readToken_lt_gt = function (e) {
    var t = this.input.charCodeAt(this.pos + 1),
      s = 1
    return t === e
      ? ((s = 62 === e && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2),
        61 === this.input.charCodeAt(this.pos + s)
          ? this.finishOp(Tn.assign, s + 1)
          : this.finishOp(Tn.bitShift, s))
      : 33 !== t ||
        60 !== e ||
        this.inModule ||
        45 !== this.input.charCodeAt(this.pos + 2) ||
        45 !== this.input.charCodeAt(this.pos + 3)
      ? (61 === t && (s = 2), this.finishOp(Tn.relational, s))
      : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
  }),
  (Fr.readToken_eq_excl = function (e) {
    var t = this.input.charCodeAt(this.pos + 1)
    return 61 === t
      ? this.finishOp(
          Tn.equality,
          61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2
        )
      : 61 === e && 62 === t && this.options.ecmaVersion >= 6
      ? ((this.pos += 2), this.finishToken(Tn.arrow))
      : this.finishOp(61 === e ? Tn.eq : Tn.prefix, 1)
  }),
  (Fr.getTokenFromCode = function (e) {
    switch (e) {
      case 46:
        return this.readToken_dot()
      case 40:
        return ++this.pos, this.finishToken(Tn.parenL)
      case 41:
        return ++this.pos, this.finishToken(Tn.parenR)
      case 59:
        return ++this.pos, this.finishToken(Tn.semi)
      case 44:
        return ++this.pos, this.finishToken(Tn.comma)
      case 91:
        return ++this.pos, this.finishToken(Tn.bracketL)
      case 93:
        return ++this.pos, this.finishToken(Tn.bracketR)
      case 123:
        return ++this.pos, this.finishToken(Tn.braceL)
      case 125:
        return ++this.pos, this.finishToken(Tn.braceR)
      case 58:
        return ++this.pos, this.finishToken(Tn.colon)
      case 63:
        return ++this.pos, this.finishToken(Tn.question)
      case 96:
        if (this.options.ecmaVersion < 6) break
        return ++this.pos, this.finishToken(Tn.backQuote)
      case 48:
        var t = this.input.charCodeAt(this.pos + 1)
        if (120 === t || 88 === t) return this.readRadixNumber(16)
        if (this.options.ecmaVersion >= 6) {
          if (111 === t || 79 === t) return this.readRadixNumber(8)
          if (98 === t || 66 === t) return this.readRadixNumber(2)
        }
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return this.readNumber(!1)
      case 34:
      case 39:
        return this.readString(e)
      case 47:
        return this.readToken_slash()
      case 37:
      case 42:
        return this.readToken_mult_modulo_exp(e)
      case 124:
      case 38:
        return this.readToken_pipe_amp(e)
      case 94:
        return this.readToken_caret()
      case 43:
      case 45:
        return this.readToken_plus_min(e)
      case 60:
      case 62:
        return this.readToken_lt_gt(e)
      case 61:
      case 33:
        return this.readToken_eq_excl(e)
      case 126:
        return this.finishOp(Tn.prefix, 1)
    }
    this.raise(this.pos, "Unexpected character '" + Wr(e) + "'")
  }),
  (Fr.finishOp = function (e, t) {
    var s = this.input.slice(this.pos, this.pos + t)
    return (this.pos += t), this.finishToken(e, s)
  }),
  (Fr.readRegexp = function () {
    for (var e, t, s = this.pos; ; ) {
      this.pos >= this.input.length &&
        this.raise(s, 'Unterminated regular expression')
      var i = this.input.charAt(this.pos)
      if ((Ln.test(i) && this.raise(s, 'Unterminated regular expression'), e))
        e = !1
      else {
        if ('[' === i) t = !0
        else if (']' === i && t) t = !1
        else if ('/' === i && !t) break
        e = '\\' === i
      }
      ++this.pos
    }
    var n = this.input.slice(s, this.pos)
    ++this.pos
    var r = this.pos,
      a = this.readWord1()
    this.containsEsc && this.unexpected(r)
    var o = this.regexpState || (this.regexpState = new _r(this))
    o.reset(s, n, a), this.validateRegExpFlags(o), this.validateRegExpPattern(o)
    var h = null
    try {
      h = new RegExp(n, a)
    } catch (e) {}
    return this.finishToken(Tn.regexp, { pattern: n, flags: a, value: h })
  }),
  (Fr.readInt = function (e, t) {
    for (
      var s = this.pos, i = 0, n = 0, r = null == t ? 1 / 0 : t;
      n < r;
      ++n
    ) {
      var a = this.input.charCodeAt(this.pos),
        o = void 0
      if (
        (o =
          a >= 97
            ? a - 97 + 10
            : a >= 65
            ? a - 65 + 10
            : a >= 48 && a <= 57
            ? a - 48
            : 1 / 0) >= e
      )
        break
      ++this.pos, (i = i * e + o)
    }
    return this.pos === s || (null != t && this.pos - s !== t) ? null : i
  }),
  (Fr.readRadixNumber = function (e) {
    var t = this.pos
    this.pos += 2
    var s = this.readInt(e)
    return (
      null == s && this.raise(this.start + 2, 'Expected number in radix ' + e),
      this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos)
        ? ((s =
            'undefined' != typeof BigInt
              ? BigInt(this.input.slice(t, this.pos))
              : null),
          ++this.pos)
        : Cn(this.fullCharCodeAtPos()) &&
          this.raise(this.pos, 'Identifier directly after number'),
      this.finishToken(Tn.num, s)
    )
  }),
  (Fr.readNumber = function (e) {
    var t = this.pos
    e || null !== this.readInt(10) || this.raise(t, 'Invalid number')
    var s = this.pos - t >= 2 && 48 === this.input.charCodeAt(t)
    s && this.strict && this.raise(t, 'Invalid number'),
      s && /[89]/.test(this.input.slice(t, this.pos)) && (s = !1)
    var i = this.input.charCodeAt(this.pos)
    if (!s && !e && this.options.ecmaVersion >= 11 && 110 === i) {
      var n = this.input.slice(t, this.pos),
        r = 'undefined' != typeof BigInt ? BigInt(n) : null
      return (
        ++this.pos,
        Cn(this.fullCharCodeAtPos()) &&
          this.raise(this.pos, 'Identifier directly after number'),
        this.finishToken(Tn.num, r)
      )
    }
    46 !== i ||
      s ||
      (++this.pos, this.readInt(10), (i = this.input.charCodeAt(this.pos))),
      (69 !== i && 101 !== i) ||
        s ||
        ((43 !== (i = this.input.charCodeAt(++this.pos)) && 45 !== i) ||
          ++this.pos,
        null === this.readInt(10) && this.raise(t, 'Invalid number')),
      Cn(this.fullCharCodeAtPos()) &&
        this.raise(this.pos, 'Identifier directly after number')
    var a = this.input.slice(t, this.pos),
      o = s ? parseInt(a, 8) : parseFloat(a)
    return this.finishToken(Tn.num, o)
  }),
  (Fr.readCodePoint = function () {
    var e
    if (123 === this.input.charCodeAt(this.pos)) {
      this.options.ecmaVersion < 6 && this.unexpected()
      var t = ++this.pos
      ;(e = this.readHexChar(this.input.indexOf('}', this.pos) - this.pos)),
        ++this.pos,
        e > 1114111 && this.invalidStringToken(t, 'Code point out of bounds')
    } else e = this.readHexChar(4)
    return e
  }),
  (Fr.readString = function (e) {
    for (var t = '', s = ++this.pos; ; ) {
      this.pos >= this.input.length &&
        this.raise(this.start, 'Unterminated string constant')
      var i = this.input.charCodeAt(this.pos)
      if (i === e) break
      92 === i
        ? ((t += this.input.slice(s, this.pos)),
          (t += this.readEscapedChar(!1)),
          (s = this.pos))
        : (Mn(i, this.options.ecmaVersion >= 10) &&
            this.raise(this.start, 'Unterminated string constant'),
          ++this.pos)
    }
    return (
      (t += this.input.slice(s, this.pos++)), this.finishToken(Tn.string, t)
    )
  })
var Ur = {}
;(Fr.tryReadTemplateToken = function () {
  this.inTemplateElement = !0
  try {
    this.readTmplToken()
  } catch (e) {
    if (e !== Ur) throw e
    this.readInvalidTemplateToken()
  }
  this.inTemplateElement = !1
}),
  (Fr.invalidStringToken = function (e, t) {
    if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Ur
    this.raise(e, t)
  }),
  (Fr.readTmplToken = function () {
    for (var e = '', t = this.pos; ; ) {
      this.pos >= this.input.length &&
        this.raise(this.start, 'Unterminated template')
      var s = this.input.charCodeAt(this.pos)
      if (96 === s || (36 === s && 123 === this.input.charCodeAt(this.pos + 1)))
        return this.pos !== this.start ||
          (this.type !== Tn.template && this.type !== Tn.invalidTemplate)
          ? ((e += this.input.slice(t, this.pos)),
            this.finishToken(Tn.template, e))
          : 36 === s
          ? ((this.pos += 2), this.finishToken(Tn.dollarBraceL))
          : (++this.pos, this.finishToken(Tn.backQuote))
      if (92 === s)
        (e += this.input.slice(t, this.pos)),
          (e += this.readEscapedChar(!0)),
          (t = this.pos)
      else if (Mn(s)) {
        switch (((e += this.input.slice(t, this.pos)), ++this.pos, s)) {
          case 13:
            10 === this.input.charCodeAt(this.pos) && ++this.pos
          case 10:
            e += '\n'
            break
          default:
            e += String.fromCharCode(s)
        }
        this.options.locations && (++this.curLine, (this.lineStart = this.pos)),
          (t = this.pos)
      } else ++this.pos
    }
  }),
  (Fr.readInvalidTemplateToken = function () {
    for (; this.pos < this.input.length; this.pos++)
      switch (this.input[this.pos]) {
        case '\\':
          ++this.pos
          break
        case '$':
          if ('{' !== this.input[this.pos + 1]) break
        case '`':
          return this.finishToken(
            Tn.invalidTemplate,
            this.input.slice(this.start, this.pos)
          )
      }
    this.raise(this.start, 'Unterminated template')
  }),
  (Fr.readEscapedChar = function (e) {
    var t = this.input.charCodeAt(++this.pos)
    switch ((++this.pos, t)) {
      case 110:
        return '\n'
      case 114:
        return '\r'
      case 120:
        return String.fromCharCode(this.readHexChar(2))
      case 117:
        return Wr(this.readCodePoint())
      case 116:
        return '\t'
      case 98:
        return '\b'
      case 118:
        return '\v'
      case 102:
        return '\f'
      case 13:
        10 === this.input.charCodeAt(this.pos) && ++this.pos
      case 10:
        return (
          this.options.locations &&
            ((this.lineStart = this.pos), ++this.curLine),
          ''
        )
      default:
        if (t >= 48 && t <= 55) {
          var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
            i = parseInt(s, 8)
          return (
            i > 255 && ((s = s.slice(0, -1)), (i = parseInt(s, 8))),
            (this.pos += s.length - 1),
            (t = this.input.charCodeAt(this.pos)),
            ('0' === s && 56 !== t && 57 !== t) ||
              (!this.strict && !e) ||
              this.invalidStringToken(
                this.pos - 1 - s.length,
                e
                  ? 'Octal literal in template string'
                  : 'Octal literal in strict mode'
              ),
            String.fromCharCode(i)
          )
        }
        return Mn(t) ? '' : String.fromCharCode(t)
    }
  }),
  (Fr.readHexChar = function (e) {
    var t = this.pos,
      s = this.readInt(16, e)
    return (
      null === s && this.invalidStringToken(t, 'Bad character escape sequence'),
      s
    )
  }),
  (Fr.readWord1 = function () {
    this.containsEsc = !1
    for (
      var e = '', t = !0, s = this.pos, i = this.options.ecmaVersion >= 6;
      this.pos < this.input.length;

    ) {
      var n = this.fullCharCodeAtPos()
      if (kn(n, i)) this.pos += n <= 65535 ? 1 : 2
      else {
        if (92 !== n) break
        ;(this.containsEsc = !0), (e += this.input.slice(s, this.pos))
        var r = this.pos
        117 !== this.input.charCodeAt(++this.pos) &&
          this.invalidStringToken(
            this.pos,
            'Expecting Unicode escape sequence \\uXXXX'
          ),
          ++this.pos
        var a = this.readCodePoint()
        ;(t ? Cn : kn)(a, i) ||
          this.invalidStringToken(r, 'Invalid Unicode escape'),
          (e += Wr(a)),
          (s = this.pos)
      }
      t = !1
    }
    return e + this.input.slice(s, this.pos)
  }),
  (Fr.readWord = function () {
    var e = this.readWord1(),
      t = Tn.name
    return (
      this.keywords.test(e) &&
        (this.containsEsc &&
          this.raiseRecoverable(this.start, 'Escape sequence in keyword ' + e),
        (t = In[e])),
      this.finishToken(t, e)
    )
  })
Xn.acorn = {
  Parser: Xn,
  version: '7.1.0',
  defaultOptions: qn,
  Position: zn,
  SourceLocation: Gn,
  getLineInfo: Hn,
  Node: pr,
  TokenType: Pn,
  tokTypes: Tn,
  keywordTypes: In,
  TokContext: gr,
  tokContexts: xr,
  isIdentifierChar: kn,
  isIdentifierStart: Cn,
  Token: Br,
  isNewLine: Mn,
  lineBreak: Ln,
  lineBreakG: Rn,
  nonASCIIwhitespace: On,
}
var jr = (function (e) {
  return (e && e.default) || e
})(
  Object.freeze({
    __proto__: null,
    Node: pr,
    Parser: Xn,
    Position: zn,
    SourceLocation: Gn,
    TokContext: gr,
    Token: Br,
    TokenType: Pn,
    defaultOptions: qn,
    getLineInfo: Hn,
    isIdentifierChar: kn,
    isIdentifierStart: Cn,
    isNewLine: Mn,
    keywordTypes: In,
    lineBreak: Ln,
    lineBreakG: Rn,
    nonASCIIwhitespace: On,
    parse: function (e, t) {
      return Xn.parse(e, t)
    },
    parseExpressionAt: function (e, t, s) {
      return Xn.parseExpressionAt(e, t, s)
    },
    tokContexts: xr,
    tokTypes: Tn,
    tokenizer: function (e, t) {
      return Xn.tokenizer(e, t)
    },
    version: '7.1.0',
  })
)
const zr = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
  Gr = jr.tokTypes
var Hr = function (e) {
  return class extends e {
    parseExport(e, t) {
      zr.lastIndex = this.pos
      const s = zr.exec(this.input)
      if ('*' !== this.input.charAt(this.pos + s[0].length))
        return super.parseExport(e, t)
      this.next()
      const i = this.startNode()
      return (
        this.expect(Gr.star),
        this.eatContextual('as') &&
          ((e.declaration = null),
          (i.exported = this.parseIdent(!0)),
          this.checkExport(t, i.exported.name, this.lastTokStart),
          (e.specifiers = [this.finishNode(i, 'ExportNamespaceSpecifier')])),
        this.expectContextual('from'),
        this.type !== Gr.string && this.unexpected(),
        (e.source = this.parseExprAtom()),
        this.semicolon(),
        this.finishNode(
          e,
          e.specifiers ? 'ExportNamedDeclaration' : 'ExportAllDeclaration'
        )
      )
    }
  }
}
const qr = jr.tokTypes,
  Kr = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
  Yr = (e) => {
    Kr.lastIndex = e.pos
    let t = Kr.exec(e.input),
      s = e.pos + t[0].length
    return '.' === e.input.slice(s, s + 1)
  }
var Xr = function (e) {
  return class extends e {
    parseExprAtom(e) {
      if (this.type !== qr._import || !Yr(this)) return super.parseExprAtom(e)
      this.options.allowImportExportEverywhere ||
        this.inModule ||
        this.raise(
          this.start,
          "'import' and 'export' may appear only with 'sourceType: module'"
        )
      let t = this.startNode()
      return (
        (t.meta = this.parseIdent(!0)),
        this.expect(qr.dot),
        (t.property = this.parseIdent(!0)),
        'meta' !== t.property.name &&
          this.raiseRecoverable(
            t.property.start,
            'The only valid meta property for import is import.meta'
          ),
        this.containsEsc &&
          this.raiseRecoverable(
            t.property.start,
            '"meta" in import.meta must not contain escape sequences'
          ),
        this.finishNode(t, 'MetaProperty')
      )
    }
    parseStatement(e, t, s) {
      if (this.type !== qr._import || !Yr(this))
        return super.parseStatement(e, t, s)
      let i = this.startNode(),
        n = this.parseExpression()
      return this.parseExpressionStatement(i, n)
    }
  }
}
class Qr extends He {
  constructor() {
    super('undefined')
  }
  getLiteralValueAtPath() {}
}
class Jr extends ft {
  constructor() {
    super(), this.variables.set('undefined', new Qr())
  }
  findVariable(e) {
    let t = this.variables.get(e)
    return t || ((t = new Vt(e)), this.variables.set(e, t)), t
  }
}
function Zr(e, t, { hook: s, id: i } = {}) {
  return (
    'string' == typeof e && (e = { message: e }),
    e.code && e.code !== us.PLUGIN_ERROR && (e.pluginCode = e.code),
    (e.code = us.PLUGIN_ERROR),
    (e.plugin = t),
    s && (e.hook = s),
    i && (e.id = i),
    ls(e)
  )
}
const ea = [
  { active: !0, deprecated: 'ongenerate', replacement: 'generateBundle' },
  {
    active: !0,
    deprecated: 'onwrite',
    replacement: 'generateBundle/writeBundle',
  },
  { active: !0, deprecated: 'transformBundle', replacement: 'renderChunk' },
  { active: !0, deprecated: 'transformChunk', replacement: 'renderChunk' },
  { active: !1, deprecated: 'resolveAssetUrl', replacement: 'resolveFileUrl' },
]
const ta = { has: () => !1, get() {}, set() {}, delete: () => !1 }
function sa(e) {
  return e.startsWith('at position ') || e.startsWith('at output position ')
    ? ls({
        code: 'ANONYMOUS_PLUGIN_CACHE',
        message:
          'A plugin is trying to use the Rollup cache but is not declaring a plugin name or cacheKey.',
      })
    : ls({
        code: 'DUPLICATE_PLUGIN_NAME',
        message: `The plugin name ${e} is being used twice in the same build. Plugin names must be distinct or provide a cacheKey (please post an issue to the plugin if you are a plugin user).`,
      })
}
function ia(e, t, s) {
  const i = s.id,
    n = []
  let r = null === t.map ? null : an(t.map)
  const a = t.code
  let o = t.ast
  const h = [],
    l = []
  let u,
    d,
    p = !1,
    f = null,
    m = null
  const g = t.code
  let x
  return e.pluginDriver
    .hookReduceArg0(
      'transform',
      [g, i],
      function (t, r, a) {
        if ((!p && u.used && (p = !0), p)) {
          if (r && 'object' == typeof r && Array.isArray(r.dependencies))
            for (const t of r.dependencies) e.watchFiles[ct(ot(i), t)] = !0
        } else if (
          (l.length && (s.transformFiles = l),
          r && 'object' == typeof r && Array.isArray(r.dependencies))
        ) {
          d.warnedTransformDependencies ||
            e.warnDeprecation(
              `Returning "dependencies" from the "transform" hook as done by plugin ${a.name} is deprecated. The "this.addWatchFile" plugin context function should be used instead.`,
              !0
            ),
            (d.warnedTransformDependencies = !0)
          for (const e of r.dependencies) h.push(ct(ot(i), e))
        }
        if ('string' == typeof r) r = { ast: void 0, code: r, map: void 0 }
        else {
          if (!r || 'object' != typeof r) return t
          'string' == typeof r.map && (r.map = JSON.parse(r.map)),
            'boolean' == typeof r.moduleSideEffects &&
              (f = r.moduleSideEffects),
            'boolean' == typeof r.syntheticNamedExports &&
              (m = r.syntheticNamedExports)
        }
        if (null !== r.map) {
          const e = an(r.map)
          n.push(e || { missing: !0, plugin: a.name })
        }
        return (o = r.ast), r.code
      },
      (t, s) => (
        (d = s),
        d.cacheKey
          ? (p = !0)
          : (u = (function (e) {
              const t = {
                cache: {
                  has: (s) => ((t.used = !0), e.has(s)),
                  get: (s) => ((t.used = !0), e.get(s)),
                  set: (s, i) => ((t.used = !0), e.set(s, i)),
                  delete: (s) => ((t.used = !0), e.delete(s)),
                },
                used: !1,
              }
              return t
            })(t.cache)),
        Object.assign(Object.assign({}, t), {
          cache: u ? u.cache : t.cache,
          warn(e, s) {
            'string' == typeof e && (e = { message: e }),
              s && cs(e, s, g, i),
              (e.id = i),
              (e.hook = 'transform'),
              t.warn(e)
          },
          error: (e, s) => (
            'string' == typeof e && (e = { message: e }),
            s && cs(e, s, g, i),
            (e.id = i),
            (e.hook = 'transform'),
            t.error(e)
          ),
          emitAsset(t, s) {
            const i = { type: 'asset', name: t, source: s }
            return l.push(Object.assign({}, i)), e.pluginDriver.emitFile(i)
          },
          emitChunk(t, s) {
            const i = { type: 'chunk', id: t, name: s && s.name }
            return l.push(Object.assign({}, i)), e.pluginDriver.emitFile(i)
          },
          emitFile: (t) => (l.push(t), e.pluginDriver.emitFile(t)),
          addWatchFile(e) {
            h.push(e), t.addWatchFile(e)
          },
          setAssetSource(e, s) {
            if ((t.setAssetSource(e, s), !p && !x))
              try {
                return this.error({
                  code: 'INVALID_SETASSETSOURCE',
                  message:
                    'setAssetSource cannot be called in transform for caching reasons. Use emitFile with a source, or call setAssetSource in another hook.',
                })
              } catch (e) {
                x = e
              }
          },
          getCombinedSourcemap() {
            const t = (function (e, t, s, i, n) {
              if (!n.length) return i
              const r = Xi(t, s, i, n, Yi(e)).traceMappings()
              return Object.assign({ version: 3 }, r)
            })(e, i, a, r, n)
            if (!t) {
              return new E(a).generateMap({
                includeContent: !0,
                hires: !0,
                source: i,
              })
            }
            return (
              r !== t && ((r = t), (n.length = 0)),
              new c(
                Object.assign(Object.assign({}, t), {
                  file: null,
                  sourcesContent: t.sourcesContent,
                })
              )
            )
          },
        })
      )
    )
    .catch((e) => Zr(e, d.name, { hook: 'transform', id: i }))
    .then((e) => {
      if (!p && x) throw x
      return {
        ast: o,
        code: e,
        customTransformCache: p,
        moduleSideEffects: f,
        originalCode: a,
        originalSourcemap: r,
        sourcemapChain: n,
        syntheticNamedExports: m,
        transformDependencies: h,
      }
    })
}
function na(e, t) {
  return nt(t) ? ct(e, '..', t) : t
}
function ra(e) {
  if (!0 === e) return () => !0
  if ('function' == typeof e)
    return (t, ...s) => (!t.startsWith('\0') && e(t, ...s)) || !1
  if (e) {
    const t = new Set(Array.isArray(e) ? e : e ? [e] : [])
    return (e) => t.has(e)
  }
  return () => !1
}
function aa(e, t, s) {
  if ('boolean' == typeof e) return () => e
  if ('no-external' === e) return (e, t) => !t
  if ('function' == typeof e)
    return (t, s) => !!t.startsWith('\0') || !1 !== e(t, s)
  if (Array.isArray(e)) {
    const t = new Set(e)
    return (e) => t.has(e)
  }
  var i, n
  e &&
    s.warn(
      ((i = 'treeshake.moduleSideEffects'),
      (n = 'please use one of false, "no-external", a function or an array'),
      {
        code: us.INVALID_OPTION,
        message: `Invalid value for option "${i}" - ${n}.`,
      })
    )
  const r = ra(t)
  return (e, t) => !(t && r(e))
}
class oa {
  constructor(e, t, s, i, n, r, a) {
    ;(this.indexedEntryModules = []),
      (this.latestLoadModulesPromise = Promise.resolve()),
      (this.manualChunkModules = {}),
      (this.nextEntryModuleIndex = 0),
      (this.loadEntryModule = (e, t) =>
        this.pluginDriver.hookFirst('resolveId', [e, void 0]).then((s) => {
          if (!1 === s || (s && 'object' == typeof s && s.external))
            return ls(
              (function (e) {
                return {
                  code: us.UNRESOLVED_ENTRY,
                  message: `Entry module cannot be external (${os(e)}).`,
                }
              })(e)
            )
          const i = s && 'object' == typeof s ? s.id : s
          return 'string' == typeof i
            ? this.fetchModule(i, void 0, !0, !1, t)
            : ls(
                (function (e) {
                  return {
                    code: us.UNRESOLVED_ENTRY,
                    message: `Could not resolve entry module (${os(e)}).`,
                  }
                })(e)
              )
        })),
      (this.graph = e),
      (this.modulesById = t),
      (this.pluginDriver = s),
      (this.isExternal = ra(i)),
      (this.hasModuleSideEffects = aa(r, a, e)),
      (this.getManualChunk = 'function' == typeof n ? n : () => null)
  }
  addEntryModules(e, t) {
    const s = this.nextEntryModuleIndex
    this.nextEntryModuleIndex += e.length
    const i = Promise.all(
      e.map(({ fileName: e, id: s, name: i }) =>
        this.loadEntryModule(s, !0).then(
          (s) => (
            null !== e
              ? s.chunkFileNames.add(e)
              : null !== i &&
                (null === s.chunkName && (s.chunkName = i),
                t && s.userChunkNames.add(i)),
            s
          )
        )
      )
    ).then((e) => {
      let i = s
      for (const s of e) {
        s.isUserDefinedEntryPoint = s.isUserDefinedEntryPoint || t
        const e = this.indexedEntryModules.find((e) => e.module.id === s.id)
        e
          ? (e.index = Math.min(e.index, i))
          : this.indexedEntryModules.push({ module: s, index: i }),
          i++
      }
      return (
        this.indexedEntryModules.sort(({ index: e }, { index: t }) =>
          e > t ? 1 : -1
        ),
        e
      )
    })
    return this.awaitLoadModulesPromise(i).then((e) => ({
      entryModules: this.indexedEntryModules.map(({ module: e }) => e),
      manualChunkModulesByAlias: this.manualChunkModules,
      newEntryModules: e,
    }))
  }
  addManualChunks(e) {
    const t = []
    for (const s of Object.keys(e)) {
      const i = e[s]
      for (const e of i) t.push({ id: e, alias: s })
    }
    const s = Promise.all(
      t.map(({ id: e }) => this.loadEntryModule(e, !1))
    ).then((e) => {
      for (let s = 0; s < e.length; s++)
        this.addModuleToManualChunk(t[s].alias, e[s])
    })
    return this.awaitLoadModulesPromise(s)
  }
  resolveId(t, s, i) {
    return e(this, void 0, void 0, function* () {
      return this.normalizeResolveIdResult(
        !this.isExternal(t, s, !1) &&
          (yield this.pluginDriver.hookFirst('resolveId', [t, s], null, i)),
        s,
        t
      )
    })
  }
  addModuleToManualChunk(e, t) {
    if (null !== t.manualChunkAlias && t.manualChunkAlias !== e)
      return ls(
        ((s = t.id),
        (i = e),
        (n = t.manualChunkAlias),
        {
          code: us.INVALID_CHUNK,
          message: `Cannot assign ${os(
            s
          )} to the "${i}" chunk as it is already in the "${n}" chunk.`,
        })
      )
    var s, i, n
    ;(t.manualChunkAlias = e),
      this.manualChunkModules[e] || (this.manualChunkModules[e] = []),
      this.manualChunkModules[e].push(t)
  }
  awaitLoadModulesPromise(e) {
    this.latestLoadModulesPromise = Promise.all([
      e,
      this.latestLoadModulesPromise,
    ])
    const t = () => {
      const e = this.latestLoadModulesPromise
      return e.then(() => {
        if (this.latestLoadModulesPromise !== e) return t()
      })
    }
    return t().then(() => e)
  }
  fetchAllDependencies(t) {
    return Promise.all([
      ...Array.from(t.sources).map((s) =>
        e(this, void 0, void 0, function* () {
          return this.fetchResolvedDependency(
            s,
            t.id,
            (t.resolvedIds[s] =
              t.resolvedIds[s] ||
              this.handleResolveId(yield this.resolveId(s, t.id), s, t.id))
          )
        })
      ),
      ...t.getDynamicImportExpressions().map((e, s) =>
        this.resolveDynamicImport(t, e, t.id).then((e) => {
          if (null === e) return
          const i = t.dynamicImports[s]
          if ('string' != typeof e)
            return this.fetchResolvedDependency(os(e.id), t.id, e).then((e) => {
              i.resolution = e
            })
          i.resolution = e
        })
      ),
    ])
  }
  fetchModule(e, t, s, i, n) {
    const r = this.modulesById.get(e)
    if (r instanceof Hi)
      return (r.isEntryPoint = r.isEntryPoint || n), Promise.resolve(r)
    const a = new Hi(this.graph, e, s, i, n)
    this.modulesById.set(e, a), (this.graph.watchFiles[e] = !0)
    const o = this.getManualChunk(e)
    return (
      'string' == typeof o && this.addModuleToManualChunk(o, a),
      Di('load modules', 3),
      Promise.resolve(this.pluginDriver.hookFirst('load', [e]))
        .catch((s) => {
          Vi('load modules', 3)
          let i = `Could not load ${e}`
          throw (
            (t && (i += ` (imported by ${t})`),
            (i += `: ${s.message}`),
            (s.message = i),
            s)
          )
        })
        .then(
          (t) => (
            Vi('load modules', 3),
            'string' == typeof t
              ? { code: t }
              : t && 'object' == typeof t && 'string' == typeof t.code
              ? t
              : ls(
                  (function (e) {
                    return {
                      code: us.BAD_LOADER,
                      message: `Error loading ${os(
                        e
                      )}: plugin load hook should return a string, a { code, map } object, or nothing/null`,
                    }
                  })(e)
                )
          )
        )
        .then((t) => {
          const s = this.graph.cachedModules.get(e)
          if (s && !s.customTransformCache && s.originalCode === t.code) {
            if (s.transformFiles)
              for (const e of s.transformFiles) this.pluginDriver.emitFile(e)
            return s
          }
          return (
            'boolean' == typeof t.moduleSideEffects &&
              (a.moduleSideEffects = t.moduleSideEffects),
            'boolean' == typeof t.syntheticNamedExports &&
              (a.syntheticNamedExports = t.syntheticNamedExports),
            ia(this.graph, t, a)
          )
        })
        .then(
          (t) => (
            a.setSource(t),
            this.modulesById.set(e, a),
            this.fetchAllDependencies(a).then(() => {
              for (const e in a.exports)
                'default' !== e && (a.exportsAll[e] = a.id)
              for (const e of a.exportAllSources) {
                const t = a.resolvedIds[e].id,
                  s = this.modulesById.get(t)
                if (!(s instanceof ut))
                  for (const e in s.exportsAll)
                    e in a.exportsAll
                      ? this.graph.warn(fs(e, a, s))
                      : (a.exportsAll[e] = s.exportsAll[e])
              }
              return a
            })
          )
        )
    )
  }
  fetchResolvedDependency(e, t, s) {
    if (s.external) {
      this.modulesById.has(s.id) ||
        this.modulesById.set(
          s.id,
          new ut(this.graph, s.id, s.moduleSideEffects)
        )
      const i = this.modulesById.get(s.id)
      return i instanceof ut
        ? Promise.resolve(i)
        : ls(
            (function (e, t) {
              return {
                code: us.INVALID_EXTERNAL_ID,
                message: `'${e}' is imported as an external by ${os(
                  t
                )}, but is already an existing non-external module id.`,
              }
            })(e, t)
          )
    }
    return this.fetchModule(
      s.id,
      t,
      s.moduleSideEffects,
      s.syntheticNamedExports,
      !1
    )
  }
  handleResolveId(e, t, s) {
    return null === e
      ? nt(t)
        ? ls(
            (function (e, t) {
              return {
                code: us.UNRESOLVED_IMPORT,
                message: `Could not resolve '${e}' from ${os(t)}`,
              }
            })(t, s)
          )
        : (this.graph.warn(
            (function (e, t) {
              return {
                code: us.UNRESOLVED_IMPORT,
                importer: os(t),
                message: `'${e}' is imported by ${os(
                  t
                )}, but could not be resolved – treating it as an external dependency`,
                source: e,
                url: 'https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency',
              }
            })(t, s)
          ),
          {
            external: !0,
            id: t,
            moduleSideEffects: this.hasModuleSideEffects(t, !0),
            syntheticNamedExports: !1,
          })
      : (e.external &&
          e.syntheticNamedExports &&
          this.graph.warn(
            (function (e, t) {
              return {
                code: us.EXTERNAL_SYNTHETIC_EXPORTS,
                importer: os(t),
                message: `External '${e}' can not have 'syntheticNamedExports' enabled.`,
                source: e,
              }
            })(t, s)
          ),
        e)
  }
  normalizeResolveIdResult(e, t, s) {
    let i = '',
      n = !1,
      r = null,
      a = !1
    if (e)
      'object' == typeof e
        ? ((i = e.id),
          e.external && (n = !0),
          'boolean' == typeof e.moduleSideEffects && (r = e.moduleSideEffects),
          'boolean' == typeof e.syntheticNamedExports &&
            (a = e.syntheticNamedExports))
        : (this.isExternal(e, t, !0) && (n = !0), (i = n ? na(t, e) : e))
    else {
      if (((i = na(t, s)), !1 !== e && !this.isExternal(i, t, !0))) return null
      n = !0
    }
    return {
      external: n,
      id: i,
      moduleSideEffects:
        'boolean' == typeof r ? r : this.hasModuleSideEffects(i, n),
      syntheticNamedExports: a,
    }
  }
  resolveDynamicImport(t, s, i) {
    return e(this, void 0, void 0, function* () {
      const e = yield this.pluginDriver.hookFirst('resolveDynamicImport', [
        s,
        i,
      ])
      return 'string' != typeof s
        ? 'string' == typeof e
          ? e
          : e
          ? Object.assign({ external: !1, moduleSideEffects: !0 }, e)
          : null
        : null == e
        ? (t.resolvedIds[s] =
            t.resolvedIds[s] ||
            this.handleResolveId(yield this.resolveId(s, t.id), s, t.id))
        : this.handleResolveId(this.normalizeResolveIdResult(e, i, s), s, i)
    })
  }
}
var ha
!(function (e) {
  ;(e[(e.LOAD_AND_PARSE = 0)] = 'LOAD_AND_PARSE'),
    (e[(e.ANALYSE = 1)] = 'ANALYSE'),
    (e[(e.GENERATE = 2)] = 'GENERATE')
})(ha || (ha = {}))
function la(e) {
  return e < 10 ? String.fromCharCode(48 + e) : String.fromCharCode(e - 10 + 97)
}
function ca(e) {
  let t = ''
  for (let s = 0; s < e.length; s++) {
    const i = e[s]
    ;(t += la(i >> 4)), (t += la(15 & i))
  }
  return t
}
function ua(e) {
  const t = new Uint8Array(e)
  for (let e = 0; e < t.length; e++) t[e] = 512 * Math.random()
  return t
}
function da(e, t) {
  for (let s = 0; s < e.length; s++) e[s] = e[s] ^ t[s]
  return e
}
function pa(e, t) {
  const { dependentEntryPointsByModule: s, dynamicImportersByModule: i } =
      (function (e) {
        const t = new Map(),
          s = new Map(),
          i = new Set(e)
        for (const e of i) {
          const n = new Set([e])
          for (const r of n) {
            fa(s, r).add(e)
            for (const e of r.dependencies) e instanceof ut || n.add(e)
            for (const { resolution: e } of r.dynamicImports)
              e instanceof Hi &&
                e.dynamicallyImportedBy.length > 0 &&
                !e.manualChunkAlias &&
                (fa(t, e).add(r), i.add(e))
          }
        }
        return { dependentEntryPointsByModule: s, dynamicImportersByModule: t }
      })(e),
    n = (function (e, t) {
      const s = new Map()
      for (const [i, n] of t.entries()) {
        const t = fa(s, i)
        for (const s of n) for (const i of e.get(s)) t.add(i)
      }
      return s
    })(s, i),
    r = new Set(e)
  function a(e, t, i) {
    const n = e.manualChunkAlias,
      r = new Set([e])
    for (const e of r) {
      if (n) (e.manualChunkAlias = n), (e.entryPointsHash = t)
      else {
        if (i && o(i, s.get(e))) continue
        da(e.entryPointsHash, t)
      }
      for (const t of e.dependencies)
        t instanceof ut || t.manualChunkAlias || r.add(t)
    }
  }
  function o(e, t) {
    const s = new Set(e)
    for (const e of s)
      if (!t.has(e)) {
        if (r.has(e)) return !1
        const t = n.get(e)
        for (const e of t) s.add(e)
      }
    return !0
  }
  if (t)
    for (const e of Object.keys(t)) {
      const s = ua(10)
      for (const i of t[e]) a(i, s, null)
    }
  for (const t of e)
    if (!t.manualChunkAlias) {
      a(t, ua(10), null)
    }
  for (const e of i.keys())
    if (!e.manualChunkAlias) {
      a(e, ua(10), n.get(e))
    }
}
function fa(e, t) {
  const s = e.get(t) || new Set()
  return e.set(t, s), s
}
const ma = () => Y()
function ga(e, t, s) {
  e in t &&
    s.warn(
      (function (e) {
        return {
          code: us.FILE_NAME_CONFLICT,
          message: `The emitted file "${e}" overwrites a previously emitted file of the same name.`,
        }
      })(e)
    ),
    (t[e] = xa)
}
const xa = { type: 'placeholder' }
function ya(e, t, s) {
  if ('string' != typeof e && !Buffer.isBuffer(e)) {
    const e = t.fileName || t.name || s
    return ls(
      ms(
        `Could not set source for ${
          'string' == typeof e ? `asset "${e}"` : 'unnamed asset'
        }, asset source needs to be a string of Buffer.`
      )
    )
  }
  return e
}
function Ea(e, t) {
  return 'string' != typeof e.fileName
    ? ls(
        ((s = e.name || t),
        {
          code: us.ASSET_NOT_FINALISED,
          message: `Plugin error - Unable to get file name for asset "${s}". Ensure that the source is set and that generate is called first.`,
        })
      )
    : e.fileName
  var s
}
function ba(e) {
  const t = e.fileName || (e.module && e.module.facadeChunk.id)
  return (
    t ||
    ls(
      ((s = e.fileName || e.name),
      {
        code: us.CHUNK_NOT_GENERATED,
        message: `Plugin error - Unable to get file name for chunk "${s}". Ensure that generate is called first.`,
      })
    )
  )
  var s
}
class va {
  constructor(e, t) {
    ;(this.output = null),
      (this.assertAssetsFinalized = () => {
        for (const [t, s] of this.filesByReferenceId.entries())
          if ('asset' === s.type && 'string' != typeof s.fileName)
            return ls(
              ((e = s.name || t),
              {
                code: us.ASSET_SOURCE_MISSING,
                message: `Plugin error creating asset "${e}" - no asset source set.`,
              })
            )
        var e
      }),
      (this.emitFile = (e) =>
        (function (e) {
          return e && ('asset' === e.type || 'chunk' === e.type)
        })(e)
          ? (function (e) {
              const t = e.fileName || e.name
              return !t || ('string' == typeof t && hs(t))
            })(e)
            ? 'chunk' === e.type
              ? this.emitChunk(e)
              : this.emitAsset(e)
            : ls(
                ms(
                  `The "fileName" or "name" properties of emitted files must be strings that are neither absolute nor relative paths and do not contain invalid characters, received "${
                    e.fileName || e.name
                  }".`
                )
              )
          : ls(
              ms(
                `Emitted files must be of type "asset" or "chunk", received "${
                  e && e.type
                }".`
              )
            )),
      (this.getFileName = (e) => {
        const t = this.filesByReferenceId.get(e)
        return t
          ? 'chunk' === t.type
            ? ba(t)
            : Ea(t, e)
          : ls(
              ((s = e),
              {
                code: us.FILE_NOT_FOUND,
                message: `Plugin error - Unable to get file name for unknown file "${s}".`,
              })
            )
        var s
      }),
      (this.setAssetSource = (e, t) => {
        const s = this.filesByReferenceId.get(e)
        if (!s)
          return ls(
            ((i = e),
            {
              code: us.ASSET_NOT_FOUND,
              message: `Plugin error - Unable to set the source for unknown asset "${i}".`,
            })
          )
        var i, n
        if ('asset' !== s.type)
          return ls(
            ms(
              `Asset sources can only be set for emitted assets but "${e}" is an emitted chunk.`
            )
          )
        if (void 0 !== s.source)
          return ls(
            ((n = s.name || e),
            {
              code: us.ASSET_SOURCE_ALREADY_SET,
              message: `Unable to set the source for asset "${n}", source already set.`,
            })
          )
        const r = ya(t, s, e)
        this.output ? this.finalizeAsset(s, r, e, this.output) : (s.source = r)
      }),
      (this.setOutputBundle = (e, t) => {
        this.output = { assetFileNames: t, bundle: e }
        for (const e of this.filesByReferenceId.values())
          e.fileName && ga(e.fileName, this.output.bundle, this.graph)
        for (const [e, t] of this.filesByReferenceId.entries())
          'asset' === t.type &&
            void 0 !== t.source &&
            this.finalizeAsset(t, t.source, e, this.output)
      }),
      (this.graph = e),
      (this.filesByReferenceId = t ? new Map(t.filesByReferenceId) : new Map())
  }
  assignReferenceId(e, t) {
    let s
    do {
      const e = ma()
      s ? e.update(s) : e.update(t), (s = e.digest('hex').substr(0, 8))
    } while (this.filesByReferenceId.has(s))
    return this.filesByReferenceId.set(s, e), s
  }
  emitAsset(e) {
    const t = void 0 !== e.source ? ya(e.source, e, null) : void 0,
      s = { fileName: e.fileName, name: e.name, source: t, type: 'asset' },
      i = this.assignReferenceId(s, e.fileName || e.name || e.type)
    return (
      this.output &&
        (e.fileName && ga(e.fileName, this.output.bundle, this.graph),
        void 0 !== t && this.finalizeAsset(s, t, i, this.output)),
      i
    )
  }
  emitChunk(e) {
    if (this.graph.phase > ha.LOAD_AND_PARSE)
      return ls({
        code: us.INVALID_ROLLUP_PHASE,
        message: 'Cannot emit chunks after module loading has finished.',
      })
    if ('string' != typeof e.id)
      return ls(
        ms(`Emitted chunks need to have a valid string id, received "${e.id}"`)
      )
    const t = {
      fileName: e.fileName,
      module: null,
      name: e.name || e.id,
      type: 'chunk',
    }
    return (
      this.graph.moduleLoader
        .addEntryModules(
          [{ fileName: e.fileName || null, id: e.id, name: e.name || null }],
          !1
        )
        .then(({ newEntryModules: [e] }) => {
          t.module = e
        })
        .catch(() => {}),
      this.assignReferenceId(t, e.id)
    )
  }
  finalizeAsset(e, t, s, i) {
    const n =
        e.fileName ||
        this.findExistingAssetFileNameWithSource(i.bundle, t) ||
        (function (e, t, s) {
          const i = e || 'asset'
          return hn(
            on(s.assetFileNames, 'output.assetFileNames', {
              hash() {
                const e = ma()
                return (
                  e.update(i),
                  e.update(':'),
                  e.update(t),
                  e.digest('hex').substr(0, 8)
                )
              },
              ext: () => ht(i).substr(1),
              extname: () => ht(i),
              name: () => i.substr(0, i.length - ht(i).length),
            }),
            s.bundle
          )
        })(e.name, t, i),
      r = Object.assign(Object.assign({}, e), { source: t, fileName: n })
    this.filesByReferenceId.set(s, r)
    const a = this.graph
    i.bundle[n] = {
      fileName: n,
      get isAsset() {
        return (
          a.warnDeprecation(
            'Accessing "isAsset" on files in the bundle is deprecated, please use "type === \'asset\'" instead',
            !1
          ),
          !0
        )
      },
      source: t,
      type: 'asset',
    }
  }
  findExistingAssetFileNameWithSource(e, t) {
    for (const s of Object.keys(e)) {
      const i = e[s]
      if (
        'asset' === i.type &&
        (Buffer.isBuffer(t) && Buffer.isBuffer(i.source)
          ? t.equals(i.source)
          : t === i.source)
      )
        return s
    }
    return null
  }
}
function Sa(e, t, s, i, n, r) {
  let a = !1
  return (...o) => (
    a ||
      ((a = !0),
      r.warnDeprecation(
        {
          message: `The "this.${t}" plugin context function used by plugin ${i} is deprecated. The "this.${s}" plugin context function should be used instead.`,
          plugin: i,
        },
        n
      )),
    e(...o)
  )
}
function Aa(e, t, s, i) {
  const n = new Set()
  return (r, a) => {
    let o,
      h = !0
    if (
      ('string' != typeof r.cacheKey &&
        (r.name.startsWith('at position ') ||
        r.name.startsWith('at output position ') ||
        n.has(r.name)
          ? (h = !1)
          : n.add(r.name)),
      e)
    )
      if (h) {
        const t = r.cacheKey || r.name
        ;(c = e[t] || (e[t] = Object.create(null))),
          (o = {
            has(e) {
              const t = c[e]
              return !!t && ((t[0] = 0), !0)
            },
            get(e) {
              const t = c[e]
              if (t) return (t[0] = 0), t[1]
            },
            set(e, t) {
              c[e] = [0, t]
            },
            delete: (e) => delete c[e],
          })
      } else
        (l = r.name),
          (o = {
            has: () => sa(l),
            get: () => sa(l),
            set: () => sa(l),
            delete: () => sa(l),
          })
    else o = ta
    var l, c
    const u = {
      addWatchFile(e) {
        if (t.phase >= ha.GENERATE)
          return this.error({
            code: us.INVALID_ROLLUP_PHASE,
            message: 'Cannot call addWatchFile after the build has finished.',
          })
        t.watchFiles[e] = !0
      },
      cache: o,
      emitAsset: Sa(
        (e, t) => s.emitFile({ type: 'asset', name: e, source: t }),
        'emitAsset',
        'emitFile',
        r.name,
        !1,
        t
      ),
      emitChunk: Sa(
        (e, t) => s.emitFile({ type: 'chunk', id: e, name: t && t.name }),
        'emitChunk',
        'emitFile',
        r.name,
        !1,
        t
      ),
      emitFile: s.emitFile,
      error: (e) => Zr(e, r.name),
      getAssetFileName: Sa(
        s.getFileName,
        'getAssetFileName',
        'getFileName',
        r.name,
        !1,
        t
      ),
      getChunkFileName: Sa(
        s.getFileName,
        'getChunkFileName',
        'getFileName',
        r.name,
        !1,
        t
      ),
      getFileName: s.getFileName,
      getModuleInfo(e) {
        const s = t.moduleById.get(e)
        if (null == s) throw new Error(`Unable to find module ${e}`)
        return {
          hasModuleSideEffects: s.moduleSideEffects,
          id: s.id,
          importedIds:
            s instanceof ut
              ? []
              : Array.from(s.sources).map((e) => s.resolvedIds[e].id),
          isEntry: s instanceof Hi && s.isEntryPoint,
          isExternal: s instanceof ut,
        }
      },
      isExternal: Sa(
        (e, s, i = !1) => t.moduleLoader.isExternal(e, s, i),
        'isExternal',
        'resolve',
        r.name,
        !1,
        t
      ),
      meta: { rollupVersion: '1.32.1' },
      get moduleIds() {
        return t.moduleById.keys()
      },
      parse: t.contextParse,
      resolve: (e, s, i) =>
        t.moduleLoader.resolveId(e, s, i && i.skipSelf ? a : null),
      resolveId: Sa(
        (e, s) => t.moduleLoader.resolveId(e, s).then((e) => e && e.id),
        'resolveId',
        'resolve',
        r.name,
        !1,
        t
      ),
      setAssetSource: s.setAssetSource,
      warn(e) {
        'string' == typeof e && (e = { message: e }),
          e.code && (e.pluginCode = e.code),
          (e.code = 'PLUGIN_WARNING'),
          (e.plugin = r.name),
          t.warn(e)
      },
      watcher: i
        ? (() => {
            let e = !1
            function t(t, s) {
              return (
                e ||
                  (u.warn({
                    code: 'PLUGIN_WATCHER_DEPRECATED',
                    message:
                      'this.watcher usage is deprecated in plugins. Use the watchChange plugin hook and this.addWatchFile() instead.',
                  }),
                  (e = !0)),
                i.on(t, s)
              )
            }
            return Object.assign(Object.assign({}, i), {
              addListener: t,
              on: t,
            })
          })()
        : void 0,
    }
    return u
  }
}
class Ca {
  constructor(e, t, s, i, n, r) {
    if (
      ((this.previousHooks = new Set(['options'])),
      (function (e, t) {
        for (const { active: s, deprecated: i, replacement: n } of ea)
          for (const r of e)
            i in r &&
              t.warnDeprecation(
                {
                  message: `The "${i}" hook used by plugin ${r.name} is deprecated. The "${n}" hook should be used instead.`,
                  plugin: r.name,
                },
                s
              )
      })(t, e),
      (this.graph = e),
      (this.pluginCache = s),
      (this.preserveSymlinks = i),
      (this.watcher = n),
      (this.fileEmitter = new va(e, r && r.fileEmitter)),
      (this.emitFile = this.fileEmitter.emitFile),
      (this.getFileName = this.fileEmitter.getFileName),
      (this.finaliseAssets = this.fileEmitter.assertAssetsFinalized),
      (this.setOutputBundle = this.fileEmitter.setOutputBundle),
      (this.plugins = t.concat(r ? r.plugins : [Xs(i)])),
      (this.pluginContexts = this.plugins.map(Aa(s, e, this.fileEmitter, n))),
      r)
    )
      for (const s of t)
        for (const t of r.previousHooks)
          t in s &&
            e.warn(
              ((a = s.name),
              (o = t),
              {
                code: us.INPUT_HOOK_IN_OUTPUT_PLUGIN,
                message: `The "${o}" hook used by the output plugin ${a} is a build time hook and will not be run for that plugin. Either this plugin cannot be used as an output plugin, or it should have an option to configure it as an output plugin.`,
              })
            )
    var a, o
  }
  createOutputPluginDriver(e) {
    return new Ca(
      this.graph,
      e,
      this.pluginCache,
      this.preserveSymlinks,
      this.watcher,
      this
    )
  }
  hookFirst(e, t, s, i) {
    let n = Promise.resolve()
    for (let r = 0; r < this.plugins.length; r++)
      i !== r &&
        (n = n.then((i) => (null != i ? i : this.runHook(e, t, r, !1, s))))
    return n
  }
  hookFirstSync(e, t, s) {
    for (let i = 0; i < this.plugins.length; i++) {
      const n = this.runHookSync(e, t, i, s)
      if (null != n) return n
    }
    return null
  }
  hookParallel(e, t, s) {
    const i = []
    for (let n = 0; n < this.plugins.length; n++) {
      const r = this.runHook(e, t, n, !1, s)
      r && i.push(r)
    }
    return Promise.all(i).then(() => {})
  }
  hookReduceArg0(e, [t, ...s], i, n) {
    let r = Promise.resolve(t)
    for (let t = 0; t < this.plugins.length; t++)
      r = r.then((r) => {
        const a = this.runHook(e, [r, ...s], t, !1, n)
        return a
          ? a.then((e) => i.call(this.pluginContexts[t], r, e, this.plugins[t]))
          : r
      })
    return r
  }
  hookReduceArg0Sync(e, [t, ...s], i, n) {
    for (let r = 0; r < this.plugins.length; r++) {
      const a = this.runHookSync(e, [t, ...s], r, n)
      t = i.call(this.pluginContexts[r], t, a, this.plugins[r])
    }
    return t
  }
  hookReduceValue(e, t, s, i, n) {
    let r = Promise.resolve(t)
    for (let t = 0; t < this.plugins.length; t++)
      r = r.then((r) => {
        const a = this.runHook(e, s, t, !0, n)
        return a
          ? a.then((e) => i.call(this.pluginContexts[t], r, e, this.plugins[t]))
          : r
      })
    return r
  }
  hookReduceValueSync(e, t, s, i, n) {
    let r = t
    for (let t = 0; t < this.plugins.length; t++) {
      const a = this.runHookSync(e, s, t, n)
      r = i.call(this.pluginContexts[t], r, a, this.plugins[t])
    }
    return r
  }
  hookSeq(t, s, i) {
    return e(this, void 0, void 0, function* () {
      let e = Promise.resolve()
      for (let n = 0; n < this.plugins.length; n++)
        e = e.then(() => this.runHook(t, s, n, !1, i))
      return e
    })
  }
  hookSeqSync(e, t, s) {
    for (let i = 0; i < this.plugins.length; i++) this.runHookSync(e, t, i, s)
  }
  runHook(e, t, s, i, n) {
    this.previousHooks.add(e)
    const r = this.plugins[s],
      a = r[e]
    if (!a) return
    let o = this.pluginContexts[s]
    return (
      n && (o = n(o, r)),
      Promise.resolve()
        .then(() =>
          'function' != typeof a
            ? i
              ? a
              : ls({
                  code: 'INVALID_PLUGIN_HOOK',
                  message: `Error running plugin hook ${e} for ${r.name}, expected a function hook.`,
                })
            : a.apply(o, t)
        )
        .catch((t) => Zr(t, r.name, { hook: e }))
    )
  }
  runHookSync(e, t, s, i) {
    this.previousHooks.add(e)
    const n = this.plugins[s]
    let r = this.pluginContexts[s]
    const a = n[e]
    if (a) {
      i && (r = i(r, n))
      try {
        return 'function' != typeof a
          ? ls({
              code: 'INVALID_PLUGIN_HOOK',
              message: `Error running plugin hook ${e} for ${n.name}, expected a function hook.`,
            })
          : a.apply(r, t)
      } catch (t) {
        return Zr(t, n.name, { hook: e })
      }
    }
  }
}
function ka(e) {
  return 'string' == typeof e
    ? [{ fileName: null, name: null, id: e }]
    : Array.isArray(e)
    ? e.map((e) => ({ fileName: null, name: null, id: e }))
    : Object.keys(e).map((t) => ({ fileName: null, id: e[t], name: t }))
}
class Pa {
  constructor(e, t) {
    if (
      ((this.moduleById = new Map()),
      (this.needsTreeshakingPass = !1),
      (this.phase = ha.LOAD_AND_PARSE),
      (this.watchFiles = Object.create(null)),
      (this.externalModules = []),
      (this.modules = []),
      (this.onwarn =
        e.onwarn ||
        (function () {
          const e = Object.create(null)
          return (t) => {
            const s = t.toString()
            s in e || (console.error(s), (e[s] = !0))
          }
        })()),
      (this.deoptimizationTracker = new se()),
      (this.cachedModules = new Map()),
      e.cache && e.cache.modules)
    )
      for (const t of e.cache.modules) this.cachedModules.set(t.id, t)
    if (!1 !== e.cache) {
      this.pluginCache = (e.cache && e.cache.plugins) || Object.create(null)
      for (const e in this.pluginCache) {
        const t = this.pluginCache[e]
        for (const e of Object.keys(t)) t[e][0]++
      }
    }
    if (
      ((this.preserveModules = e.preserveModules),
      (this.strictDeprecations = e.strictDeprecations),
      (this.cacheExpiry = e.experimentalCacheExpiry),
      !1 !== e.treeshake &&
        ((this.treeshakingOptions =
          e.treeshake && !0 !== e.treeshake
            ? {
                annotations: !1 !== e.treeshake.annotations,
                moduleSideEffects: e.treeshake.moduleSideEffects,
                propertyReadSideEffects:
                  !1 !== e.treeshake.propertyReadSideEffects,
                pureExternalModules: e.treeshake.pureExternalModules,
                tryCatchDeoptimization:
                  !1 !== e.treeshake.tryCatchDeoptimization,
                unknownGlobalSideEffects:
                  !1 !== e.treeshake.unknownGlobalSideEffects,
              }
            : {
                annotations: !0,
                moduleSideEffects: !0,
                propertyReadSideEffects: !0,
                tryCatchDeoptimization: !0,
                unknownGlobalSideEffects: !0,
              }),
        void 0 !== this.treeshakingOptions.pureExternalModules &&
          this.warnDeprecation(
            'The "treeshake.pureExternalModules" option is deprecated. The "treeshake.moduleSideEffects" option should be used instead. "treeshake.pureExternalModules: true" is equivalent to "treeshake.moduleSideEffects: \'no-external\'"',
            !1
          )),
      (this.contextParse = (e, t = {}) =>
        this.acornParser.parse(
          e,
          Object.assign(
            Object.assign(Object.assign({}, Ui), t),
            this.acornOptions
          )
        )),
      (this.pluginDriver = new Ca(
        this,
        e.plugins,
        this.pluginCache,
        !0 === e.preserveSymlinks,
        t
      )),
      t)
    ) {
      const e = (e) => this.pluginDriver.hookSeqSync('watchChange', [e])
      t.on('change', e),
        t.once('restart', () => {
          t.removeListener('change', e)
        })
    }
    ;(this.shimMissingExports = e.shimMissingExports),
      (this.scope = new Jr()),
      (this.context = String(e.context))
    const s = e.moduleContext
    if ('function' == typeof s)
      this.getModuleContext = (e) => s(e) || this.context
    else if ('object' == typeof s) {
      const e = new Map()
      for (const t in s) e.set(ct(t), s[t])
      this.getModuleContext = (t) => e.get(t) || this.context
    } else this.getModuleContext = () => this.context
    this.acornOptions = e.acorn ? Object.assign({}, e.acorn) : {}
    const i = []
    i.push(Xr, Hr), (this.acornOptions.allowAwaitOutsideFunction = !0)
    const n = e.acornInjectPlugins
    i.push(...(Array.isArray(n) ? n : n ? [n] : [])),
      (this.acornParser = Xn.extend(...i)),
      (this.moduleLoader = new oa(
        this,
        this.moduleById,
        this.pluginDriver,
        e.external,
        'function' == typeof e.manualChunks && e.manualChunks,
        this.treeshakingOptions
          ? this.treeshakingOptions.moduleSideEffects
          : null,
        !!this.treeshakingOptions && this.treeshakingOptions.pureExternalModules
      ))
  }
  build(e, t, s) {
    return (
      Di('parse modules', 2),
      Promise.all([
        this.moduleLoader.addEntryModules(ka(e), !0),
        t && 'object' == typeof t && this.moduleLoader.addManualChunks(t),
      ]).then(([{ entryModules: e, manualChunkModulesByAlias: t }]) => {
        if (0 === e.length)
          throw new Error('You must supply options.input to rollup')
        for (const e of this.moduleById.values())
          e instanceof Hi ? this.modules.push(e) : this.externalModules.push(e)
        if (
          (Vi('parse modules', 2),
          (this.phase = ha.ANALYSE),
          Di('analyse dependency graph', 2),
          this.link(e),
          Vi('analyse dependency graph', 2),
          Di('mark included statements', 2),
          s && e.length > 1)
        )
          throw new Error(
            'Internal Error: can only inline dynamic imports for single-file builds.'
          )
        for (const t of e) t.includeAllExports()
        this.includeMarked(this.modules)
        for (const e of this.externalModules) e.warnUnusedImports()
        Vi('mark included statements', 2),
          Di('generate chunks', 2),
          this.preserveModules || s || pa(e, t)
        let i = []
        if (this.preserveModules)
          for (const e of this.modules) {
            const t = new dn(this, [e])
            ;(!e.isEntryPoint && t.isEmpty) || (t.entryModules = [e]), i.push(t)
          }
        else {
          const e = {}
          for (const t of this.modules) {
            const s = ca(t.entryPointsHash),
              i = e[s]
            i ? i.push(t) : (e[s] = [t])
          }
          for (const t in e) {
            const s = e[t]
            sn(s)
            const n = new dn(this, s)
            i.push(n)
          }
        }
        for (const e of i) e.link()
        i = i.filter(un)
        const n = []
        for (const e of i) n.push(...e.generateFacades())
        return Vi('generate chunks', 2), (this.phase = ha.GENERATE), i.concat(n)
      })
    )
  }
  getCache() {
    for (const e in this.pluginCache) {
      const t = this.pluginCache[e]
      let s = !0
      for (const e of Object.keys(t))
        t[e][0] >= this.cacheExpiry ? delete t[e] : (s = !1)
      s && delete this.pluginCache[e]
    }
    return {
      modules: this.modules.map((e) => e.toJSON()),
      plugins: this.pluginCache,
    }
  }
  includeMarked(e) {
    if (this.treeshakingOptions) {
      let t = 1
      do {
        Di(`treeshaking pass ${t}`, 3), (this.needsTreeshakingPass = !1)
        for (const t of e) t.isExecuted && t.include()
        Vi(`treeshaking pass ${t++}`, 3)
      } while (this.needsTreeshakingPass)
    } else for (const t of e) t.includeAllInBundle()
  }
  warn(e) {
    ;(e.toString = () => {
      let t = ''
      return (
        e.plugin && (t += `(${e.plugin} plugin) `),
        e.loc && (t += `${os(e.loc.file)} (${e.loc.line}:${e.loc.column}) `),
        (t += e.message),
        t
      )
    }),
      this.onwarn(e)
  }
  warnDeprecation(e, t) {
    if (t || this.strictDeprecations) {
      const t = ds(e)
      if (this.strictDeprecations) return ls(t)
      this.warn(t)
    }
  }
  link(e) {
    for (const e of this.modules) e.linkDependencies()
    const { orderedModules: t, cyclePaths: s } = (function (e) {
      let t = 0
      const s = [],
        i = {},
        n = [],
        r = [],
        a = {},
        o = (e) => {
          if (!i[e.id]) {
            if (e instanceof ut) return (e.execIndex = t++), void (i[e.id] = !0)
            for (const t of e.dependencies)
              t.id in a
                ? i[t.id] || s.push(nn(t.id, e.id, a))
                : ((a[t.id] = e.id), o(t))
            for (const { resolution: t } of e.dynamicImports)
              t instanceof Hi && -1 === r.indexOf(t) && r.push(t)
            ;(e.execIndex = t++), (i[e.id] = !0), n.push(e)
          }
        }
      for (const t of e) a[t.id] || ((a[t.id] = null), o(t))
      for (const e of r) a[e.id] || ((a[e.id] = null), o(e))
      return { orderedModules: n, cyclePaths: s }
    })(e)
    for (const e of s)
      this.warn({
        code: 'CIRCULAR_DEPENDENCY',
        cycle: e,
        importer: e[0],
        message: `Circular dependency: ${e.join(' -> ')}`,
      })
    this.modules = t
    for (const e of this.modules) e.bindReferences()
    this.warnForMissingExports()
  }
  warnForMissingExports() {
    for (const e of this.modules)
      for (const t of Object.keys(e.importDescriptions)) {
        const s = e.importDescriptions[t]
        '*' === s.name ||
          s.module.getVariableForExportName(s.name) ||
          e.warn(
            {
              code: 'NON_EXISTENT_EXPORT',
              message: `Non-existent export '${s.name}' is imported from ${os(
                s.module.id
              )}`,
              name: s.name,
              source: s.module.id,
            },
            s.start
          )
      }
  }
}
function wa(e) {
  switch (typeof e) {
    case 'function':
      return e()
    case 'string':
      return e
    default:
      return ''
  }
}
const Na = (e, t) => (t ? `${e}\n${t}` : e),
  _a = (e, t) => (t ? `${e}\n\n${t}` : e)
function Ia(e, { exports: t, name: s, format: i }, n) {
  const r = e.getExportNames()
  if ('default' === t) {
    if (1 !== r.length || 'default' !== r[0]) return ls(ps('default', r, n))
  } else if ('none' === t && r.length) return ls(ps('none', r, n))
  return (
    (t && 'auto' !== t) ||
      (0 === r.length
        ? (t = 'none')
        : 1 === r.length && 'default' === r[0]
        ? (t = 'default')
        : ('es' !== i &&
            -1 !== r.indexOf('default') &&
            e.graph.warn(
              (function (e, t) {
                return {
                  code: us.MIXED_EXPORTS,
                  id: e,
                  message: `Entry module "${os(
                    e
                  )}" is using named and default exports together. Consumers of your bundle will have to use \`${
                    t || 'chunk'
                  }["default"]\` to access the default export, which may not be what you want. Use \`output.exports: "named"\` to disable this warning`,
                  url: 'https://rollupjs.org/guide/en/#output-exports',
                }
              })(n, s)
            ),
          (t = 'named'))),
    t
  )
}
const $a = (e, t) => (s, i) =>
    void 0 !== t[s] ? t[s] : void 0 !== e[s] ? e[s] : i,
  Ta = (e) => (e && 'object' != typeof e ? {} : e),
  La = (e, t, s) => {
    const i = Ta(t[s]),
      n = Ta(e[s])
    return void 0 !== i
      ? i && n
        ? Object.assign(Object.assign({}, n), i)
        : i
      : n
  }
function Ra(e) {
  return Array.isArray(e) ? e.filter(Boolean) : e ? [e] : []
}
const Ma = (e) => {
    'string' == typeof e ? console.warn(e) : console.warn(e.message)
  },
  Oa = (e, t = Ma) => (e.onwarn ? (s) => e.onwarn(s, t) : t),
  Da = (e, t) => {
    const s = e.external
    return 'function' == typeof s
      ? (e, ...i) => s(e, ...i) || -1 !== t.external.indexOf(e)
      : ('string' == typeof e.external
          ? [s]
          : Array.isArray(s)
          ? s
          : []
        ).concat(t.external)
  },
  Va = {
    c: 'config',
    d: 'dir',
    e: 'external',
    f: 'format',
    g: 'globals',
    h: 'help',
    i: 'input',
    m: 'sourcemap',
    n: 'name',
    o: 'file',
    p: 'plugin',
    v: 'version',
    w: 'watch',
  }
function Ba({ config: e = {}, command: t = {}, defaultOnWarnHandler: s }) {
  const i = (function (e) {
      const t =
        e.external && 'string' == typeof e.external ? e.external.split(',') : []
      return Object.assign(Object.assign({}, e), {
        external: t,
        globals:
          'string' == typeof e.globals
            ? e.globals.split(',').reduce((e, s) => {
                const [i, n] = s.split(':')
                return (e[i] = n), -1 === t.indexOf(i) && t.push(i), e
              }, Object.create(null))
            : void 0,
      })
    })(t),
    n = (function (e, t = { external: [], globals: void 0 }, s) {
      const i = $a(e, t),
        n = {
          acorn: e.acorn,
          acornInjectPlugins: e.acornInjectPlugins,
          cache: i('cache'),
          chunkGroupingSize: i('chunkGroupingSize', 5e3),
          context: i('context'),
          experimentalCacheExpiry: i('experimentalCacheExpiry', 10),
          experimentalOptimizeChunks: i('experimentalOptimizeChunks'),
          external: Da(e, t),
          inlineDynamicImports: i('inlineDynamicImports', !1),
          input: i('input', []),
          manualChunks: i('manualChunks'),
          moduleContext: e.moduleContext,
          onwarn: Oa(e, s),
          perf: i('perf', !1),
          plugins: Ra(e.plugins),
          preserveModules: i('preserveModules'),
          preserveSymlinks: i('preserveSymlinks'),
          shimMissingExports: i('shimMissingExports'),
          strictDeprecations: i('strictDeprecations', !1),
          treeshake: La(e, t, 'treeshake'),
          watch: e.watch,
        }
      n.cache && n.cache.cache && (n.cache = n.cache.cache)
      return n
    })(e, i, s)
  i.output && Object.assign(i, i.output)
  const r = e.output,
    a = Array.isArray(r) ? r : r ? [r] : []
  0 === a.length && a.push({})
  const o = a.map((e) =>
      (function (e, t = {}) {
        const s = $a(e, t)
        let i = s('format')
        switch (i) {
          case void 0:
          case 'esm':
          case 'module':
            i = 'es'
            break
          case 'commonjs':
            i = 'cjs'
        }
        return {
          amd: Object.assign(Object.assign({}, e.amd), t.amd),
          assetFileNames: s('assetFileNames'),
          banner: s('banner'),
          chunkFileNames: s('chunkFileNames'),
          compact: s('compact', !1),
          dir: s('dir'),
          dynamicImportFunction: s('dynamicImportFunction'),
          entryFileNames: s('entryFileNames'),
          esModule: s('esModule', !0),
          exports: s('exports'),
          extend: s('extend'),
          externalLiveBindings: s('externalLiveBindings', !0),
          file: s('file'),
          footer: s('footer'),
          format: i,
          freeze: s('freeze', !0),
          globals: s('globals'),
          hoistTransitiveImports: s('hoistTransitiveImports', !0),
          indent: s('indent', !0),
          interop: s('interop', !0),
          intro: s('intro'),
          name: s('name'),
          namespaceToStringTag: s('namespaceToStringTag', !1),
          noConflict: s('noConflict'),
          outro: s('outro'),
          paths: s('paths'),
          plugins: Ra(e.plugins),
          preferConst: s('preferConst'),
          sourcemap: s('sourcemap'),
          sourcemapExcludeSources: s('sourcemapExcludeSources'),
          sourcemapFile: s('sourcemapFile'),
          sourcemapPathTransform: s('sourcemapPathTransform'),
          strict: s('strict', !0),
        }
      })(e, i)
    ),
    h = [],
    l = Object.keys(n)
  Fa(h, Object.keys(e), l, 'input option', /^output$/)
  const c = Object.keys(o[0])
  Fa(
    h,
    o.reduce((e, t) => e.concat(Object.keys(t)), []),
    c,
    'output option'
  )
  const u = c.filter((e) => 'sourcemapPathTransform' !== e)
  return (
    Fa(
      h,
      Object.keys(i),
      l.concat(
        u,
        Object.keys(Va),
        'config',
        'environment',
        'plugin',
        'silent',
        'stdin'
      ),
      'CLI flag',
      /^_|output|(config.*)$/
    ),
    {
      inputOptions: n,
      optionError: h.length > 0 ? h.join('\n') : null,
      outputOptions: o,
    }
  )
}
function Fa(e, t, s, i, n = /$./) {
  const r = new Set(s),
    a = t.filter((e) => !r.has(e) && !n.test(e))
  a.length > 0 &&
    e.push(
      `Unknown ${i}: ${a.join(', ')}. Allowed options: ${Array.from(r)
        .sort()
        .join(', ')}`
    )
}
function Wa(e) {
  return 'es6' === e.format
    ? ls(
        ds({
          message: 'The "es6" output format is deprecated – use "esm" instead',
          url: 'https://rollupjs.org/guide/en/#output-format',
        })
      )
    : ['amd', 'cjs', 'system', 'es', 'iife', 'umd'].indexOf(e.format) < 0
    ? ls({
        message:
          'You must specify "output.format", which can be one of "amd", "cjs", "system", "esm", "iife" or "umd".',
        url: 'https://rollupjs.org/guide/en/#output-format',
      })
    : e.exports && !['default', 'named', 'none', 'auto'].includes(e.exports)
    ? ls(
        ((t = e.exports),
        {
          code: us.INVALID_EXPORT_OPTION,
          message: `"output.exports" must be "default", "named", "none", "auto", or left unspecified (defaults to "auto"), received "${t}"`,
          url: 'https://rollupjs.org/guide/en/#output-exports',
        })
      )
    : void 0
  var t
}
const Ua = {
  get() {
    throw new Error(
      'bundle.generate(...) now returns a Promise instead of a { code, map } object'
    )
  },
}
function ja(e, t) {
  return (
    (t.options && t.options.call({ meta: { rollupVersion: '1.32.1' } }, e)) || e
  )
}
function za(e, t) {
  const s = Ra(e)
  for (let e = 0; e < s.length; e++) {
    const i = s[e]
    i.name || (i.name = `${t}${e + 1}`)
  }
  return s
}
let Ga
function Ha(t) {
  return e(this, void 0, void 0, function* () {
    const s = (function (e) {
      if (!e) throw new Error('You must supply an options object to rollup')
      let { inputOptions: t, optionError: s } = Ba({ config: e })
      if (
        (s && t.onwarn({ message: s, code: 'UNKNOWN_OPTION' }),
        (t = t.plugins.reduce(ja, t)),
        (t.plugins = za(t.plugins, 'at position ')),
        t.inlineDynamicImports)
      ) {
        if (t.preserveModules)
          return ls({
            code: 'INVALID_OPTION',
            message:
              '"preserveModules" does not support the "inlineDynamicImports" option.',
          })
        if (t.manualChunks)
          return ls({
            code: 'INVALID_OPTION',
            message:
              '"manualChunks" option is not supported for "inlineDynamicImports".',
          })
        if (t.experimentalOptimizeChunks)
          return ls({
            code: 'INVALID_OPTION',
            message:
              '"experimentalOptimizeChunks" option is not supported for "inlineDynamicImports".',
          })
        if (
          (t.input instanceof Array && t.input.length > 1) ||
          ('object' == typeof t.input && Object.keys(t.input).length > 1)
        )
          return ls({
            code: 'INVALID_OPTION',
            message:
              'Multiple inputs are not supported for "inlineDynamicImports".',
          })
      } else if (t.preserveModules) {
        if (t.manualChunks)
          return ls({
            code: 'INVALID_OPTION',
            message:
              '"preserveModules" does not support the "manualChunks" option.',
          })
        if (t.experimentalOptimizeChunks)
          return ls({
            code: 'INVALID_OPTION',
            message:
              '"preserveModules" does not support the "experimentalOptimizeChunks" option.',
          })
      }
      return t
    })(t)
    Wi(s)
    const i = new Pa(s, Ga)
    Ga = void 0
    const n = !1 !== t.cache
    let r
    delete s.cache, delete t.cache, Di('BUILD', 1)
    try {
      yield i.pluginDriver.hookParallel('buildStart', [s]),
        (r = yield i.build(s.input, s.manualChunks, s.inlineDynamicImports))
    } catch (e) {
      const t = Object.keys(i.watchFiles)
      throw (
        (t.length > 0 && (e.watchFiles = t),
        yield i.pluginDriver.hookParallel('buildEnd', [e]),
        e)
      )
    }
    yield i.pluginDriver.hookParallel('buildEnd', []), Vi('BUILD', 1)
    let a = !1
    function o(e) {
      if (!e) throw new Error('You must supply an options object')
      const t = i.pluginDriver.createOutputPluginDriver(
        za(e.plugins, 'at output position ')
      )
      return { outputOptions: Xa(s, e, r.length > 1, t), outputPluginDriver: t }
    }
    function h(t, n, o) {
      return e(this, void 0, void 0, function* () {
        Di('GENERATE', 1)
        const e = t.assetFileNames || 'assets/[name]-[hash][extname]',
          h = (function (e) {
            if (0 === e.length) return '/'
            if (1 === e.length) return ot(e[0])
            const t = e.slice(1).reduce((e, t) => {
              const s = t.split(/\/+|\\+/)
              let i
              for (
                i = 0;
                e[i] === s[i] && i < Math.min(e.length, s.length);
                i++
              );
              return e.slice(0, i)
            }, e[0].split(/\/+|\\+/))
            return t.length > 1 ? t.join('/') : '/'
          })(
            (function (e) {
              const t = []
              for (const s of e)
                for (const e of s.entryModules) it(e.id) && t.push(e.id)
              return t
            })(r)
          ),
          l = Object.create(null)
        let c
        o.setOutputBundle(l, e)
        try {
          yield o.hookParallel('renderStart', [t, s])
          const e = yield (function (e, t) {
            return Promise.all([
              t.hookReduceValue('banner', wa(e.banner), [], Na),
              t.hookReduceValue('footer', wa(e.footer), [], Na),
              t.hookReduceValue('intro', wa(e.intro), [], _a),
              t.hookReduceValue('outro', wa(e.outro), [], _a),
            ])
              .then(
                ([e, t, s, i]) => (
                  s && (s += '\n\n'),
                  i && (i = `\n\n${i}`),
                  e.length && (e += '\n'),
                  t.length && (t = '\n' + t),
                  { intro: s, outro: i, banner: e, footer: t }
                )
              )
              .catch((e) =>
                ls({
                  code: 'ADDON_ERROR',
                  message: `Could not retrieve ${e.hook}. Check configuration of plugin ${e.plugin}.\n\tError Message: ${e.message}`,
                })
              )
          })(t, o)
          for (const e of r)
            s.preserveModules || e.generateInternalExports(t),
              (s.preserveModules ||
                (e.facadeModule && e.facadeModule.isEntryPoint)) &&
                (e.exportMode = Ia(e, t, e.facadeModule.id))
          for (const e of r) e.preRender(t, h)
          !a &&
            s.experimentalOptimizeChunks &&
            (!(function (e, t, s, i) {
              for (let n = 0; n < e.length; n++) {
                const r = e[n],
                  a = []
                if (
                  (r.visitStaticDependenciesUntilCondition((e) => {
                    e instanceof dn && a.push(e)
                  }),
                  a.length < 2)
                )
                  continue
                let o = 1,
                  h = !0,
                  l = void 0,
                  c = a[0],
                  u = a[1]
                const d = (e) =>
                  null === e.facadeModule &&
                  null === e.manualChunkAlias &&
                  !(!u || null !== u.facadeModule) &&
                  !(e.getRenderedSourceLength() > s)
                do {
                  if (h) {
                    d(c) && (h = !1)
                    continue
                  }
                  let r =
                    s -
                    l.getRenderedSourceLength() -
                    c.getRenderedSourceLength()
                  if (r <= 0) {
                    d(c) || (h = !0)
                    continue
                  }
                  const p = new Set()
                  c.visitStaticDependenciesUntilCondition((e) => p.add(e))
                  const f = new Set([c, l])
                  if (
                    l.visitStaticDependenciesUntilCondition(
                      (e) =>
                        e !== c &&
                        e !== l &&
                        !p.has(e) &&
                        (e instanceof ut ||
                          ((r -= e.getRenderedSourceLength()),
                          r <= 0 || void f.add(e)))
                    )
                  ) {
                    d(c) || (h = !0)
                    continue
                  }
                  if (
                    c.visitStaticDependenciesUntilCondition(
                      (e) =>
                        !f.has(e) &&
                        (e instanceof ut ||
                          ((r -= e.getRenderedSourceLength()),
                          r <= 0 || void 0))
                    )
                  ) {
                    d(c) || (h = !0)
                    continue
                  }
                  const m = e.indexOf(c)
                  m <= n && n--,
                    e.splice(m, 1),
                    l.merge(c, e, t, i),
                    a.splice(--o, 1),
                    (c = l),
                    u && !d(u) && (h = !0)
                } while (((l = c), (c = u), (u = a[++o]), c))
              }
            })(r, t, s.chunkGroupingSize, h),
            (a = !0)),
            (function (e, t, s, i, n, r, a) {
              const o = [],
                h = []
              for (const t of e)
                (t.facadeModule && t.facadeModule.isUserDefinedEntryPoint
                  ? o
                  : h
                ).push(t)
              const l = o.concat(h)
              for (const e of l)
                s.file
                  ? (e.id = at(s.file))
                  : t.preserveModules
                  ? (e.id = e.generateIdPreserveModules(i, s, r))
                  : (e.id = e.generateId(n, s, r, !0, a)),
                  (r[e.id] = xa)
            })(r, s, t, h, e, l, o),
            (c = (function (e, t) {
              for (let s = 0; s < e.length; s++) {
                const i = e[s],
                  n = i.facadeModule
                t[i.id] = {
                  code: void 0,
                  dynamicImports: i.getDynamicImportIds(),
                  exports: i.getExportNames(),
                  facadeModuleId: n && n.id,
                  fileName: i.id,
                  imports: i.getImportIds(),
                  isDynamicEntry:
                    null !== n && n.dynamicallyImportedBy.length > 0,
                  isEntry: null !== n && n.isEntryPoint,
                  map: void 0,
                  modules: i.renderedModules,
                  get name() {
                    return i.getChunkName()
                  },
                  type: 'chunk',
                }
              }
              return t
            })(r, l)),
            yield Promise.all(
              r.map((s) => {
                const i = l[s.id]
                return s
                  .render(t, e, i, o)
                  .then(
                    (e) => (
                      (i.code = e.code),
                      (i.map = e.map),
                      o.hookParallel('ongenerate', [
                        Object.assign({ bundle: i }, t),
                        i,
                      ])
                    )
                  )
              })
            )
        } catch (e) {
          throw (yield o.hookParallel('renderError', [e]), e)
        }
        yield o.hookSeq('generateBundle', [t, c, n])
        for (const e of Object.keys(c)) {
          const t = c[e]
          t.type ||
            (i.warnDeprecation(
              'A plugin is directly adding properties to the bundle object in the "generateBundle" hook. This is deprecated and will be removed in a future Rollup version, please use "this.emitFile" instead.',
              !1
            ),
            (t.type = 'asset'))
        }
        return o.finaliseAssets(), Vi('GENERATE', 1), c
      })
    }
    const l = {
      cache: n ? i.getCache() : void 0,
      generate: (e) => {
        const { outputOptions: t, outputPluginDriver: s } = o(e),
          i = h(t, !1, s).then((e) => Ya(e))
        return (
          Object.defineProperty(i, 'code', Ua),
          Object.defineProperty(i, 'map', Ua),
          i
        )
      },
      watchFiles: Object.keys(i.watchFiles),
      write: (t) => {
        const { outputOptions: i, outputPluginDriver: n } = o(t)
        return i.dir || i.file
          ? h(i, !0, n).then((t) =>
              e(this, void 0, void 0, function* () {
                let e = 0
                for (const s of Object.keys(t)) {
                  if ('asset' !== t[s].type && (e++, e > 1)) break
                }
                if (e > 1) {
                  if (i.sourcemapFile)
                    return ls({
                      code: 'INVALID_OPTION',
                      message:
                        '"output.sourcemapFile" is only supported for single-file builds.',
                    })
                  if ('string' == typeof i.file)
                    return ls({
                      code: 'INVALID_OPTION',
                      message:
                        'When building multiple chunks, the "output.dir" option must be used, not "output.file".' +
                        ('string' != typeof s.input ||
                        !0 === s.inlineDynamicImports
                          ? ''
                          : ' To inline dynamic imports, set the "inlineDynamicImports" option.'),
                    })
                }
                return (
                  yield Promise.all(
                    Object.keys(t).map((e) =>
                      (function (e, t, s, i) {
                        const n = ct(s.dir || ot(s.file), t.fileName)
                        let r, a
                        if ('asset' === t.type) a = t.source
                        else if (((a = t.code), s.sourcemap && t.map)) {
                          let e
                          'inline' === s.sourcemap
                            ? (e = t.map.toUrl())
                            : ((e = `${at(t.fileName)}.map`),
                              (r = Ys(`${n}.map`, t.map.toString()))),
                            'hidden' !== s.sourcemap &&
                              (a += `//# sourceMappingURL=${e}\n`)
                        }
                        return Ys(n, a)
                          .then(() => r)
                          .then(
                            () =>
                              'chunk' === t.type &&
                              i.hookSeq('onwrite', [
                                Object.assign({ bundle: e }, s),
                                t,
                              ])
                          )
                          .then(() => {})
                      })(l, t[e], i, n)
                    )
                  ),
                  yield n.hookParallel('writeBundle', [t]),
                  Ya(t)
                )
              })
            )
          : ls({
              code: 'MISSING_OPTION',
              message:
                'You must specify "output.file" or "output.dir" for the build.',
            })
      },
    }
    return !0 === s.perf && (l.getTimings = Oi), l
  })
}
var qa
function Ka(e) {
  return 'asset' === e.type
    ? qa.ASSET
    : e.isEntry
    ? qa.ENTRY_CHUNK
    : qa.SECONDARY_CHUNK
}
function Ya(e) {
  return {
    output: Object.keys(e)
      .map((t) => e[t])
      .filter((e) => Object.keys(e).length > 0)
      .sort((e, t) => {
        const s = Ka(e),
          i = Ka(t)
        return s === i ? 0 : s < i ? -1 : 1
      }),
  }
}
function Xa(e, t, s, i) {
  const n = Ba({
    config: {
      output: Object.assign(
        Object.assign(Object.assign({}, t), t.output),
        e.output
      ),
    },
  })
  if (n.optionError) throw new Error(n.optionError)
  const r = n.outputOptions[0],
    a = i.hookReduceArg0Sync(
      'outputOptions',
      [r],
      (e, t) => t || e,
      (e) => {
        const t = () =>
          e.error({
            code: us.CANNOT_EMIT_FROM_OPTIONS_HOOK,
            message:
              'Cannot emit files or set asset sources in the "outputOptions" hook, use the "renderStart" hook instead.',
          })
        return Object.assign(Object.assign({}, e), {
          emitFile: t,
          setAssetSource: t,
        })
      }
    )
  if ((Wa(a), 'string' == typeof a.file)) {
    if ('string' == typeof a.dir)
      return ls({
        code: 'INVALID_OPTION',
        message:
          'You must set either "output.file" for a single-file build or "output.dir" when generating multiple chunks.',
      })
    if (e.preserveModules)
      return ls({
        code: 'INVALID_OPTION',
        message:
          'You must set "output.dir" instead of "output.file" when using the "preserveModules" option.',
      })
    if ('object' == typeof e.input && !Array.isArray(e.input))
      return ls({
        code: 'INVALID_OPTION',
        message:
          'You must set "output.dir" instead of "output.file" when providing named inputs.',
      })
  }
  if (s) {
    if ('umd' === a.format || 'iife' === a.format)
      return ls({
        code: 'INVALID_OPTION',
        message:
          'UMD and IIFE output formats are not supported for code-splitting builds.',
      })
    if ('string' == typeof a.file)
      return ls({
        code: 'INVALID_OPTION',
        message:
          'You must set "output.dir" instead of "output.file" when generating multiple chunks.',
      })
  }
  return a
}
!(function (e) {
  ;(e[(e.ENTRY_CHUNK = 0)] = 'ENTRY_CHUNK'),
    (e[(e.SECONDARY_CHUNK = 1)] = 'SECONDARY_CHUNK'),
    (e[(e.ASSET = 2)] = 'ASSET')
})(qa || (qa = {}))
export { t as VERSION, Ha as rollup }
