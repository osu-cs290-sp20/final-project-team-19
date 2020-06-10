(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['character'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <p>\r\n            <span class = \"less-important\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":29,"column":43},"end":{"line":29,"column":51}}}) : helper)))
    + "</span>: "
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":29,"column":60},"end":{"line":29,"column":69}}}) : helper)))
    + "\r\n          </p>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <p>\r\n              <span class = \"less-important\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":37,"column":45},"end":{"line":37,"column":53}}}) : helper)))
    + "</span>: "
    + alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":37,"column":62},"end":{"line":37,"column":70}}}) : helper)))
    + "\r\n          </p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"creature\">\r\n\r\n    <div class=\"creature-content\">\r\n        <p class=\"creature-name\">\r\n          <span class = \"important\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":36},"end":{"line":5,"column":44}}}) : helper)))
    + "</span>\r\n        </p>\r\n        <p class=\"creature-content stat-block\" >\r\n          <span class = \"important\">Strength:</span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"str") || (depth0 != null ? lookupProperty(depth0,"str") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"str","hash":{},"data":data,"loc":{"start":{"line":8,"column":59},"end":{"line":8,"column":66}}}) : helper)))
    + "</span>\r\n          <br>\r\n          <span class = \"important\">Dexterity:</span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"dex") || (depth0 != null ? lookupProperty(depth0,"dex") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dex","hash":{},"data":data,"loc":{"start":{"line":10,"column":60},"end":{"line":10,"column":67}}}) : helper)))
    + "</span>\r\n          <br>\r\n          <span class = \"important\">Constitution:</span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"con") || (depth0 != null ? lookupProperty(depth0,"con") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"con","hash":{},"data":data,"loc":{"start":{"line":12,"column":63},"end":{"line":12,"column":70}}}) : helper)))
    + "</span>\r\n          <br>\r\n          <span class = \"important\">Intelligence:</span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"int") || (depth0 != null ? lookupProperty(depth0,"int") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"int","hash":{},"data":data,"loc":{"start":{"line":14,"column":63},"end":{"line":14,"column":70}}}) : helper)))
    + "</span>\r\n          <br>\r\n          <span class = \"important\">Wisdom:</span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"wis") || (depth0 != null ? lookupProperty(depth0,"wis") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wis","hash":{},"data":data,"loc":{"start":{"line":16,"column":57},"end":{"line":16,"column":64}}}) : helper)))
    + "</span>\r\n          <br>\r\n          <span class = \"important\">Charisma:</span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"cha") || (depth0 != null ? lookupProperty(depth0,"cha") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cha","hash":{},"data":data,"loc":{"start":{"line":18,"column":59},"end":{"line":18,"column":66}}}) : helper)))
    + "</span>\r\n        </p>\r\n        <span class=\"important\">AC: </span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"ac") || (depth0 != null ? lookupProperty(depth0,"ac") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ac","hash":{},"data":data,"loc":{"start":{"line":20,"column":50},"end":{"line":20,"column":56}}}) : helper)))
    + "</span>\r\n        <br>\r\n        <span class=\"important\">HP: </span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"hp") || (depth0 != null ? lookupProperty(depth0,"hp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hp","hash":{},"data":data,"loc":{"start":{"line":22,"column":50},"end":{"line":22,"column":56}}}) : helper)))
    + "</span>\r\n        <br>\r\n        <span class=\"important\">Movement Speed: </span> <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"ms") || (depth0 != null ? lookupProperty(depth0,"ms") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ms","hash":{},"data":data,"loc":{"start":{"line":24,"column":62},"end":{"line":24,"column":68}}}) : helper)))
    + "</span>\r\n        <!--<p class= \"creature-content proficiencies\">\r\n         <span class = \"important\">Proficiencies:</span>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"prof") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":31,"column":19}}})) != null ? stack1 : "")
    + "        </p>\r\n        <p class=\"creature-content special-abilities\" >\r\n          <span class = \"important\">Special Abilities:</span>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"sa") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":39,"column":19}}})) != null ? stack1 : "")
    + "        </p>-->\r\n\r\n    </div>\r\n</article>\r\n\r\n";
},"useData":true});
})();