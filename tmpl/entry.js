apibrowser.callback({"template": "<h3>\n\t{{name}}\n\t{{?isFunction}}\n\t\t{{>params}}\n\t{{/isFunction}}\n\t{{>tags}}\n\t{{?isFunction}}\n\t\t{{?returns}}\n\t\t\t<span class=\"returns\"> &#8594; {{!}}\n\t\t\t\t{{#returns}}\n\t\t\t\t\t{{?linkable}}\n\t\t\t\t\t\t<a href=\"#{{name}}\">\n\t\t\t\t\t\t\t{{name}}\n\t\t\t\t\t\t\t{{?array}}<span>[]</span>{{/array}}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t{{/linkable}}\n\t\t\t\t\t{{^linkable}}\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t{{name}}\n\t\t\t\t\t\t\t{{?array}}<span>[]</span>{{/array}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t{{/linkable}}\n\t\t\t\t{{/returns}}\n\t\t\t</span>\n\t\t{{/returns}}\n\t{{/isFunction}}\n\t{{^isFunction}}\n\t\t{{!}} <span class=\"returns\"> \n\t\t\t[\n\t\t\t{{type}}\n\t\t\t{{?value}}\n\t\t\t\t: <code>{{value}}</code>\n\t\t\t{{/value}}\n\t\t\t]\n\t\t</span>\n\t{{/isFunction}}\n\t{{?summary}}\n\t\t<div class=\"summary\">{{&summary}}</div>\n\t{{/summary}}\n</h3>\n<div class=\"details\">\n\t<div class=\"doc\">\n\t\t{{&doc}}\n\t</div>\n\t{{>info}}\n\t{{>origin}}\n</div> \n"}, 'entry.mustache')