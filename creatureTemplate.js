(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['creatureTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"creature\">\r\n    \r\n    <div class=\"creature-content\">\r\n        <p class=\"creature-name\">\r\n          <a href=\"#\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":22},"end":{"line":5,"column":30}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"sname") || (depth0 != null ? lookupProperty(depth0,"sname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sname","hash":{},"data":data,"loc":{"start":{"line":5,"column":32},"end":{"line":5,"column":41}}}) : helper)))
    + ")</a>\r\n        </p>\r\n\r\n        <p class=\"creature-content armor-class\" >\r\n          AC:\r\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"armor_class") || (depth0 != null ? lookupProperty(depth0,"armor_class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"armor_class","hash":{},"data":data,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":25}}}) : helper)))
    + "\r\n        </p>\r\n        <p>\r\n          HP:  \r\n        <input type = \"number\" value = "
    + alias4(((helper = (helper = lookupProperty(helpers,"hit_points") || (depth0 != null ? lookupProperty(depth0,"hit_points") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hit_points","hash":{},"data":data,"loc":{"start":{"line":14,"column":39},"end":{"line":14,"column":53}}}) : helper)))
    + ">\r\n          / "
    + alias4(((helper = (helper = lookupProperty(helpers,"hit_points") || (depth0 != null ? lookupProperty(depth0,"hit_points") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hit_points","hash":{},"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":15,"column":26}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"creature-content initiative\" >\r\n          Initiative:\r\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"initiative") || (depth0 != null ? lookupProperty(depth0,"initiative") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"initiative","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":24}}}) : helper)))
    + "\r\n        </p>\r\n\r\n    </div>\r\n</article>";
},"useData":true});
})();