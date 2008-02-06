/**
 * Simple JavaScript Templates
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 * very simple javascript template engine similar to ERB.
 *
 * example::
 *
 *    var template = new JSTemplate('Hello <%= escape(username) %>!');
 *    document.write(template.render({username: 'H4><0r'}));
 *
 * You can use `<%` / `%>` to embed code and `<%=` / `%>` to print something
 * dynamical to the template. By doubling the percent-sign you can write
 * a raw delimiter. Using `<%#` / `%>` you can embed comments to the page that
 * are not rendered.
 *
 * available helper functions:
 *
 * ``escape(string)``
 *    XML/SGML escape a string
 *
 * ``each(seq, callback)``
 *    call the callback with the item and the current index for
 *    each iteration.
 *
 * :copyright: 2007 by Armin Ronacher.
 * :license: BSD.
 */

var JSTemplate = (function() {
  var BLOCK_REGEX = /(^\s*%.*?$|<%(?!%)(?:%%|[^%])*?%>)/m;

  function TemplateType(source) {
    var buffer = [], inBlock=true, parts = source.split(BLOCK_REGEX);
    for (var i = 0, n = parts.length; i != n; i++) {
      var part = parts[i].replace(/(<|>)%%/g, '$1%');
      if (inBlock = !inBlock)
        part = (part[0] == '<') ? part.substr(2, part.length - 4)
             : part.substr(part.indexOf('%') + 1, part.length);
      buffer.push(inBlock ? (part[0] != '=' ? (part[0] == '#' ? '' : part)
        : ('__buffer__.push(' + part.substr(1, part.length - 1) + ')'))
        : ('__buffer__.push("' + part.replace(/\\/g, '\\\\').
           replace(/\n/g, '\\\n').replace(/"/g, '\\"') + '")'));
    }
    this.renderFunc = eval('function(__buffer__){' + buffer.join(';') + '}');
  }

  TemplateType.prototype.render = function(context) {
    var buffer = [];
    this.renderFunc.call(context, buffer);
    return buffer.join('');
  }

  function each(seq, callback) {
    for (var i = 0, n = seq.length; i != n; i++)
      callback(seq[i], i);
  }

  function escape(s) {
    var el = document.createElement('div');
    el.appendChild(document.createTextNode(s));
    return el.innerHTML;
  }

  return TemplateType;
})();
