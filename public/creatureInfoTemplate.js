(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['creatureInfoTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <p>\r\n            <span class = \"less-important\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":30,"column":43},"end":{"line":30,"column":51}}}) : helper)))
    + "</span>: "
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":30,"column":60},"end":{"line":30,"column":69}}}) : helper)))
    + "\r\n          </p>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":46,"column":14},"end":{"line":46,"column":22}}}) : helper)))
    + ",\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <p>\r\n              <span class = \"less-important\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":53,"column":45},"end":{"line":53,"column":53}}}) : helper)))
    + "</span>: "
    + alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":53,"column":62},"end":{"line":53,"column":70}}}) : helper)))
    + "\r\n          </p>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <p>\r\n            <span class = \"less-important\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":61,"column":43},"end":{"line":61,"column":51}}}) : helper)))
    + "</span>: "
    + alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":61,"column":60},"end":{"line":61,"column":68}}}) : helper)))
    + "\r\n\r\n              </p>\r\n\r\n          </p>\r\n\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <p>\r\n            <span class = \"less-important\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":73,"column":43},"end":{"line":73,"column":51}}}) : helper)))
    + "</span>: "
    + alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":73,"column":60},"end":{"line":73,"column":68}}}) : helper)))
    + "\r\n          </p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"creature creature-info\">\r\n\r\n    <div class=\"creature-content\">\r\n\r\n        <p class=\"creature-name\">\r\n          \r\n          <span class = \"important\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":36},"end":{"line":7,"column":44}}}) : helper)))
    + "</span>\r\n        </p>\r\n        <span class = \"important\">\r\n          Challenge Rating:\r\n        </span>\r\n        <span>\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"CR") || (depth0 != null ? lookupProperty(depth0,"CR") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CR","hash":{},"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":13,"column":14}}}) : helper)))
    + "\r\n        </span>\r\n        <p>\r\n          <span class=\"important\"> Hit Dice: </span><span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"hpd") || (depth0 != null ? lookupProperty(depth0,"hpd") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hpd","hash":{},"data":data,"loc":{"start":{"line":16,"column":58},"end":{"line":16,"column":65}}}) : helper)))
    + "</span>\r\n        </p>\r\n        <p class=\"creature-content stat-block\" >\r\n          <span class = \"important\">Strength:</span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"str") || (depth0 != null ? lookupProperty(depth0,"str") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"str","hash":{},"data":data,"loc":{"start":{"line":19,"column":59},"end":{"line":19,"column":66}}}) : helper)))
    + "</span>,\r\n          <span class = \"important\">Dexterity:</span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"dex") || (depth0 != null ? lookupProperty(depth0,"dex") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dex","hash":{},"data":data,"loc":{"start":{"line":20,"column":60},"end":{"line":20,"column":67}}}) : helper)))
    + "</span>,\r\n          <span class = \"important\">Constitution:</span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"con") || (depth0 != null ? lookupProperty(depth0,"con") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"con","hash":{},"data":data,"loc":{"start":{"line":21,"column":63},"end":{"line":21,"column":70}}}) : helper)))
    + "</span>,\r\n          <span class = \"important\">Intelligence:</span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"int") || (depth0 != null ? lookupProperty(depth0,"int") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"int","hash":{},"data":data,"loc":{"start":{"line":22,"column":63},"end":{"line":22,"column":70}}}) : helper)))
    + "</span>,\r\n          <span class = \"important\">Wisdom:</span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"wis") || (depth0 != null ? lookupProperty(depth0,"wis") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wis","hash":{},"data":data,"loc":{"start":{"line":23,"column":57},"end":{"line":23,"column":64}}}) : helper)))
    + "</span>,\r\n          <span class = \"important\">Charisma:</span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"cha") || (depth0 != null ? lookupProperty(depth0,"cha") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cha","hash":{},"data":data,"loc":{"start":{"line":24,"column":59},"end":{"line":24,"column":66}}}) : helper)))
    + "</span>\r\n        </p>\r\n        <p class= \"creature-content proficiencies\">\r\n         <span class = \"important\">Proficiencies:</span>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"prof") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":32,"column":19}}})) != null ? stack1 : "")
    + "        </p>\r\n        <p class=\"creature-content dmg-vul\" >\r\n          <span class = \"important\">Vulnerabilities:</span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"vuls") || (depth0 != null ? lookupProperty(depth0,"vuls") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vuls","hash":{},"data":data,"loc":{"start":{"line":35,"column":66},"end":{"line":35,"column":74}}}) : helper)))
    + "</span>\r\n        </p>\r\n        <p class=\"creature-content dmg-resist\" >\r\n          <span class = \"important\">Resistances:</span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"resist") || (depth0 != null ? lookupProperty(depth0,"resist") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resist","hash":{},"data":data,"loc":{"start":{"line":38,"column":62},"end":{"line":38,"column":72}}}) : helper)))
    + "</span>\r\n        </p>\r\n        <p class=\"creature-content dmg-immune\" >\r\n          <span class = \"important\">Immunities:</span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"immune") || (depth0 != null ? lookupProperty(depth0,"immune") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"immune","hash":{},"data":data,"loc":{"start":{"line":41,"column":61},"end":{"line":41,"column":71}}}) : helper)))
    + "</span>\r\n        </p>\r\n        <p class=\"creature-content condit-immune\" >\r\n          <span class = \"important\">Condition Immunities:</span>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"con_immune") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":10},"end":{"line":47,"column":19}}})) != null ? stack1 : "")
    + "        </p>\r\n        <p class=\"creature-content special-abilities\" >\r\n          <span class = \"important\">Special Abilities:</span>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"sa") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":10},"end":{"line":55,"column":19}}})) != null ? stack1 : "")
    + "        </p>\r\n        <p class=\"creature-content actions\" >\r\n          <span class = \"important\">Actions:</span>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"act") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":10},"end":{"line":67,"column":19}}})) != null ? stack1 : "")
    + "        </p>\r\n        <p class=\"creature-content leg-actions\" >\r\n          <span class = \"important\">Legendary Actions:</span>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"lact") : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":10},"end":{"line":75,"column":19}}})) != null ? stack1 : "")
    + "        </p>\r\n\r\n    </div>\r\n</article>\r\n";
},"useData":true});
})();