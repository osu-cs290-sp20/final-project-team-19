(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['creatureTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"creature\">\r\n    \r\n    <div class=\"creature-content\">\r\n        <p class=\"creature-name\">\r\n          <span class=\"important\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":34},"end":{"line":5,"column":42}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"sname") || (depth0 != null ? lookupProperty(depth0,"sname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sname","hash":{},"data":data,"loc":{"start":{"line":5,"column":44},"end":{"line":5,"column":53}}}) : helper)))
    + ")</span>\r\n        </p>\r\n\r\n        <p class=\"creature-content armor-class\" ><i class=\"ra ra-helmet ra-lg\"></i>         AC:\r\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"armor_class") || (depth0 != null ? lookupProperty(depth0,"armor_class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"armor_class","hash":{},"data":data,"loc":{"start":{"line":9,"column":10},"end":{"line":9,"column":25}}}) : helper)))
    + "\r\n        </p>\r\n        <p>\r\n            <i class=\"ra ra-hearts ra-lg\"></i>  HP:\r\n            <input type=\"number\" value="
    + alias4(((helper = (helper = lookupProperty(helpers,"hit_points") || (depth0 != null ? lookupProperty(depth0,"hit_points") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hit_points","hash":{},"data":data,"loc":{"start":{"line":13,"column":39},"end":{"line":13,"column":53}}}) : helper)))
    + ">\r\n            / "
    + alias4(((helper = (helper = lookupProperty(helpers,"hit_points") || (depth0 != null ? lookupProperty(depth0,"hit_points") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hit_points","hash":{},"data":data,"loc":{"start":{"line":14,"column":14},"end":{"line":14,"column":28}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"creature-content initiative\" >\r\n            <i class=\"ra ra-battered-axe ra-lg\"></i> Initiative:\r\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"initiative") || (depth0 != null ? lookupProperty(depth0,"initiative") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"initiative","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":24}}}) : helper)))
    + "\r\n        </p>\r\n\r\n    </div>\r\n</article>";
},"useData":true});
})();