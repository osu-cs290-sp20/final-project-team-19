(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['spell'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":25,"column":20},"end":{"line":25,"column":28}}}) : helper)))
    + ",\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <div>\r\n                <span class=\"spell-info\">Ritual spell </span>\r\n            </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "            <div>\r\n                <span class=\"spell-info\">Requires concentration: </span>\r\n\r\n            </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":63,"column":20},"end":{"line":63,"column":28}}}) : helper)))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "﻿<article class=\"spell-box\">\r\n    <div class=\"spell-content\">\r\n        <h4 class=\"spell-name\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":20}}}) : helper)))
    + "\r\n        </h4>\r\n\r\n        <div class=\"class-content\">\r\n\r\n            <div class=\"description\">\r\n                <p class=\"spell-info\">Description: </p>\r\n                <p class=\"spell-item\">\r\n                    <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":12,"column":26},"end":{"line":12,"column":34}}}) : helper)))
    + "</span>\r\n                    <span> "
    + alias4(((helper = (helper = lookupProperty(helpers,"higher") || (depth0 != null ? lookupProperty(depth0,"higher") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"higher","hash":{},"data":data,"loc":{"start":{"line":13,"column":27},"end":{"line":13,"column":37}}}) : helper)))
    + "</span>\r\n                </p>\r\n            </div>\r\n            <div class=\"range\">\r\n                <span class=\"spell-info\">Range: </span>\r\n                <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"range") || (depth0 != null ? lookupProperty(depth0,"range") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"range","hash":{},"data":data,"loc":{"start":{"line":18,"column":41},"end":{"line":18,"column":50}}}) : helper)))
    + "</span>\r\n            </div>\r\n\r\n            <div>\r\n                <span class=\"spell-info\">Components: </span>\r\n                <p class=\"spell-item\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"components") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":26,"column":29}}})) != null ? stack1 : "")
    + "                </p>\r\n            </div>\r\n\r\n            <div class=\"materials\">\r\n                <span class=\"spell-info\">Material: </span>\r\n                <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"material") || (depth0 != null ? lookupProperty(depth0,"material") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"material","hash":{},"data":data,"loc":{"start":{"line":32,"column":41},"end":{"line":32,"column":53}}}) : helper)))
    + "</span>\r\n            </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ritual") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":38,"column":19}}})) != null ? stack1 : "")
    + "            <div>\r\n                <span class=\"spell-info\">Duration: </span>\r\n                <span> "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":41,"column":23},"end":{"line":41,"column":35}}}) : helper)))
    + "</span>\r\n            </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"concentration") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":12},"end":{"line":48,"column":19}}})) != null ? stack1 : "")
    + "\r\n            <div class=\"casting-time\">\r\n                <span class=\"spell-info\">Casting time: </span>\r\n                <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":52,"column":41},"end":{"line":52,"column":49}}}) : helper)))
    + "</span>\r\n            </div>\r\n            <div>\r\n                <span class=\"spell-info\">Level: </span>\r\n                <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"level") || (depth0 != null ? lookupProperty(depth0,"level") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"level","hash":{},"data":data,"loc":{"start":{"line":56,"column":41},"end":{"line":56,"column":50}}}) : helper)))
    + "</span>\r\n            </div>\r\n\r\n            <div>\r\n                <span class=\"spell-info\">School: </span>\r\n                <p class=\"spell-item\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"school") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":20},"end":{"line":64,"column":29}}})) != null ? stack1 : "")
    + "                </p>\r\n            </div>\r\n            <div>\r\n                <span class=\"spell-info\">Classes: </span>\r\n                <p class=\"spell-item\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"classes") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":20},"end":{"line":72,"column":29}}})) != null ? stack1 : "")
    + "                </p>\r\n            </div>\r\n            <div>\r\n                <span class=\"spell-info\">Subclasses: </span>\r\n                <p class=\"spell-item\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"subclasses") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":78,"column":20},"end":{"line":80,"column":29}}})) != null ? stack1 : "")
    + "                </p>\r\n            </div>\r\n\r\n\r\n        </div>\r\n</article>";
},"useData":true});
})();