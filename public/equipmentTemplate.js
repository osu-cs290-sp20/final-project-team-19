(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['equipmentTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <p>\r\n              "
    + alias4(((helper = (helper = lookupProperty(helpers,"damage_dice") || (depth0 != null ? lookupProperty(depth0,"damage_dice") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"damage_dice","hash":{},"data":data,"loc":{"start":{"line":20,"column":14},"end":{"line":20,"column":29}}}) : helper)))
    + "\r\n              "
    + alias4(((helper = (helper = lookupProperty(helpers,"damage_bonus") || (depth0 != null ? lookupProperty(depth0,"damage_bonus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"damage_bonus","hash":{},"data":data,"loc":{"start":{"line":21,"column":14},"end":{"line":21,"column":30}}}) : helper)))
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"damage_type") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":14},"end":{"line":24,"column":23}}})) != null ? stack1 : "")
    + "          </p>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":24}}}) : helper)))
    + "\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":35,"column":20}}}) : helper)))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"equipment\">\r\n\r\n    <div class=\"equipment-content\">\r\n        <p class=\"equipment-name\">\r\n          <a href=\"#\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":22},"end":{"line":5,"column":30}}}) : helper)))
    + " </a>\r\n        </p>\r\n\r\n        <p class=\"equipment-content \" >\r\n          Cost:\r\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"equipment_cost") || (depth0 != null ? lookupProperty(depth0,"equipment_cost") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"equipment_cost","hash":{},"data":data,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":28}}}) : helper)))
    + "\r\n        </p>\r\n        <p>\r\n          Equipment Category:\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"equipment_category") || (depth0 != null ? lookupProperty(depth0,"equipment_category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"equipment_category","hash":{},"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":14,"column":34}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"equipment-content \" >\r\n          Damage:\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"damage") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":26,"column":19}}})) != null ? stack1 : "")
    + "        </p>\r\n        <p>\r\n          Range:\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"range") || (depth0 != null ? lookupProperty(depth0,"range") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"range","hash":{},"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":21}}}) : helper)))
    + "\r\n        </p>\r\n        <p>\r\n          Properties:\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"properties") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":36,"column":21}}})) != null ? stack1 : "")
    + "        </p>\r\n        <p>\r\n          Description:\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":40,"column":12},"end":{"line":40,"column":20}}}) : helper)))
    + "\r\n\r\n        </p>\r\n\r\n    </div>\r\n</article>\r\n";
},"useData":true});
})();