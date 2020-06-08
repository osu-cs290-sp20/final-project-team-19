(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['creatureInfoTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <p>\r\n              "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":22,"column":14},"end":{"line":22,"column":22}}}) : helper)))
    + ": "
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":22,"column":24},"end":{"line":22,"column":33}}}) : helper)))
    + "\r\n          </p>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":38,"column":14},"end":{"line":38,"column":22}}}) : helper)))
    + ",\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <p>\r\n              "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":45,"column":14},"end":{"line":45,"column":22}}}) : helper)))
    + ": "
    + alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":45,"column":24},"end":{"line":45,"column":32}}}) : helper)))
    + "\r\n          </p>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <p>\r\n              "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":53,"column":14},"end":{"line":53,"column":22}}}) : helper)))
    + ": "
    + alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":53,"column":24},"end":{"line":53,"column":32}}}) : helper)))
    + "\r\n              "
    + alias4(((helper = (helper = lookupProperty(helpers,"attack_bonus") || (depth0 != null ? lookupProperty(depth0,"attack_bonus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"attack_bonus","hash":{},"data":data,"loc":{"start":{"line":54,"column":14},"end":{"line":54,"column":30}}}) : helper)))
    + "\r\n          </p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"creature creature-info\">\r\n    \r\n    <div class=\"creature-content\">\r\n        <p class=\"creature-name\">\r\n          <a href=\"#\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":22},"end":{"line":5,"column":30}}}) : helper)))
    + "</a>\r\n        </p>\r\n        <p>\r\n            Challenge Rating: "
    + alias4(((helper = (helper = lookupProperty(helpers,"CR") || (depth0 != null ? lookupProperty(depth0,"CR") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CR","hash":{},"data":data,"loc":{"start":{"line":8,"column":30},"end":{"line":8,"column":36}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"creature-content stat-block\" >\r\n          Strength: "
    + alias4(((helper = (helper = lookupProperty(helpers,"str") || (depth0 != null ? lookupProperty(depth0,"str") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"str","hash":{},"data":data,"loc":{"start":{"line":11,"column":20},"end":{"line":11,"column":27}}}) : helper)))
    + ",\r\n          Dexterity: "
    + alias4(((helper = (helper = lookupProperty(helpers,"dex") || (depth0 != null ? lookupProperty(depth0,"dex") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dex","hash":{},"data":data,"loc":{"start":{"line":12,"column":21},"end":{"line":12,"column":28}}}) : helper)))
    + ",\r\n          Constitution: "
    + alias4(((helper = (helper = lookupProperty(helpers,"con") || (depth0 != null ? lookupProperty(depth0,"con") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"con","hash":{},"data":data,"loc":{"start":{"line":13,"column":24},"end":{"line":13,"column":31}}}) : helper)))
    + ",\r\n          Intelligence: "
    + alias4(((helper = (helper = lookupProperty(helpers,"int") || (depth0 != null ? lookupProperty(depth0,"int") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"int","hash":{},"data":data,"loc":{"start":{"line":14,"column":24},"end":{"line":14,"column":31}}}) : helper)))
    + ",\r\n          Wisdom: "
    + alias4(((helper = (helper = lookupProperty(helpers,"wis") || (depth0 != null ? lookupProperty(depth0,"wis") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wis","hash":{},"data":data,"loc":{"start":{"line":15,"column":18},"end":{"line":15,"column":25}}}) : helper)))
    + ",\r\n          Charisma: "
    + alias4(((helper = (helper = lookupProperty(helpers,"cha") || (depth0 != null ? lookupProperty(depth0,"cha") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cha","hash":{},"data":data,"loc":{"start":{"line":16,"column":20},"end":{"line":16,"column":27}}}) : helper)))
    + "\r\n        </p>\r\n        <p class= \"creature-content proficiencies\">\r\n          Proficiencies:\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"prof") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":10},"end":{"line":24,"column":19}}})) != null ? stack1 : "")
    + "        </p>\r\n        <p class=\"creature-content dmg-vul\" >\r\n          Vulnerabilities: "
    + alias4(((helper = (helper = lookupProperty(helpers,"vuls") || (depth0 != null ? lookupProperty(depth0,"vuls") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vuls","hash":{},"data":data,"loc":{"start":{"line":27,"column":27},"end":{"line":27,"column":35}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"creature-content dmg-resist\" >\r\n          Resistances: "
    + alias4(((helper = (helper = lookupProperty(helpers,"resist") || (depth0 != null ? lookupProperty(depth0,"resist") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resist","hash":{},"data":data,"loc":{"start":{"line":30,"column":23},"end":{"line":30,"column":33}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"creature-content dmg-immune\" >\r\n          Immunities: "
    + alias4(((helper = (helper = lookupProperty(helpers,"immune") || (depth0 != null ? lookupProperty(depth0,"immune") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"immune","hash":{},"data":data,"loc":{"start":{"line":33,"column":22},"end":{"line":33,"column":32}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"creature-content condit-immune\" >\r\n          Condition Immunities:\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"con_immune") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":10},"end":{"line":39,"column":19}}})) != null ? stack1 : "")
    + "        </p>\r\n        <p class=\"creature-content special-abilities\" >\r\n          Special Abilities:\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"sa") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":10},"end":{"line":47,"column":19}}})) != null ? stack1 : "")
    + "        </p>\r\n        <p class=\"creature-content actions\" >\r\n          Actions:\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"act") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":10},"end":{"line":56,"column":19}}})) != null ? stack1 : "")
    + "        </p>\r\n        <p class=\"creature-content leg-actions\" >\r\n          Legendary Actions: \r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"lact") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":10},"end":{"line":64,"column":19}}})) != null ? stack1 : "")
    + "        </p>\r\n\r\n    </div>\r\n</article>\r\n";
},"useData":true});
})();