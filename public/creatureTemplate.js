(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['creatureTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"creature\">\r\n\r\n    <div class=\"creature-content\">\r\n\r\n        <p class=\"creature-name\">\r\n\r\n          <span class=\"important\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":34},"end":{"line":7,"column":42}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"sname") || (depth0 != null ? lookupProperty(depth0,"sname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sname","hash":{},"data":data,"loc":{"start":{"line":7,"column":44},"end":{"line":7,"column":53}}}) : helper)))
    + ")</span>\r\n        </p>\r\n\r\n        <p class=\"creature-content armor-class\" >\r\n          AC:\r\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"armor_class") || (depth0 != null ? lookupProperty(depth0,"armor_class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"armor_class","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":25}}}) : helper)))
    + "\r\n        </p>\r\n        <p>\r\n          HP:\r\n        <input type = \"number\" value = "
    + alias4(((helper = (helper = lookupProperty(helpers,"hit_points") || (depth0 != null ? lookupProperty(depth0,"hit_points") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hit_points","hash":{},"data":data,"loc":{"start":{"line":16,"column":39},"end":{"line":16,"column":53}}}) : helper)))
    + ">\r\n          / "
    + alias4(((helper = (helper = lookupProperty(helpers,"hit_points") || (depth0 != null ? lookupProperty(depth0,"hit_points") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hit_points","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":26}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"creature-content initiative\" >\r\n          Initiative:\r\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"initiative") || (depth0 != null ? lookupProperty(depth0,"initiative") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"initiative","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":24}}}) : helper)))
    + "\r\n        </p>\r\n        <button class=\"creature-button\" > Delete</button>\r\n\r\n    </div>\r\n</article>\r\n";
},"useData":true});
})();