(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['item'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <span class=\"spell-info\">Gear Catagory: </span>\r\n                <span class=\"spell-item\">\r\n                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"gear_cat") || (depth0 != null ? lookupProperty(depth0,"gear_cat") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"gear_cat","hash":{},"data":data,"loc":{"start":{"line":15,"column":20},"end":{"line":15,"column":32}}}) : helper)))
    + "\r\n                </span>\r\n            </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <span class=\"spell-info\">Vehicle Catagory: </span>\r\n                <span class=\"spell-item\">\r\n                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"vehicle_cat") || (depth0 != null ? lookupProperty(depth0,"vehicle_cat") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"vehicle_cat","hash":{},"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":23,"column":35}}}) : helper)))
    + "\r\n                </span>\r\n            </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <span class=\"spell-info\">Tool Catagory: </span>\r\n                <span class=\"spell-item\">\r\n                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"tool_cat") || (depth0 != null ? lookupProperty(depth0,"tool_cat") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tool_cat","hash":{},"data":data,"loc":{"start":{"line":32,"column":20},"end":{"line":32,"column":32}}}) : helper)))
    + "\r\n                </span>\r\n            </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <span class=\"spell-info\">Armor Catagory: </span>\r\n                <span class=\"spell-item\">\r\n                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"armor_cat") || (depth0 != null ? lookupProperty(depth0,"armor_cat") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"armor_cat","hash":{},"data":data,"loc":{"start":{"line":40,"column":20},"end":{"line":40,"column":33}}}) : helper)))
    + "\r\n                </span>\r\n            </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <span class=\"spell-info\">Weapon Catagory: </span>\r\n                <span class=\"spell-item\">\r\n                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"weapon_cat") || (depth0 != null ? lookupProperty(depth0,"weapon_cat") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"weapon_cat","hash":{},"data":data,"loc":{"start":{"line":48,"column":20},"end":{"line":48,"column":34}}}) : helper)))
    + "\r\n                </span>\r\n            </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <span class=\"spell-info\">Weapon Range: </span>\r\n                <span class=\"spell-item\">\r\n                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"weapon_range") || (depth0 != null ? lookupProperty(depth0,"weapon_range") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"weapon_range","hash":{},"data":data,"loc":{"start":{"line":57,"column":20},"end":{"line":57,"column":36}}}) : helper)))
    + "\r\n                </span>\r\n            </div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <span class=\"spell-info\">Catagory Range: </span>\r\n                <span class=\"spell-item\">\r\n                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"category_range") || (depth0 != null ? lookupProperty(depth0,"category_range") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"category_range","hash":{},"data":data,"loc":{"start":{"line":65,"column":20},"end":{"line":65,"column":38}}}) : helper)))
    + "\r\n                </span>\r\n            </div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <p class=\"spell-info\">Armor Class: </p>\r\n                <p class=\"spell-item\">Base:</p>\r\n                <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"armor_class_base") || (depth0 != null ? lookupProperty(depth0,"armor_class_base") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"armor_class_base","hash":{},"data":data,"loc":{"start":{"line":75,"column":41},"end":{"line":75,"column":61}}}) : helper)))
    + "</span>\r\n                <p class=\"spell-item\">Dexterity Bonus: </p>\r\n                <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"armor_class_dex") || (depth0 != null ? lookupProperty(depth0,"armor_class_dex") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"armor_class_dex","hash":{},"data":data,"loc":{"start":{"line":77,"column":41},"end":{"line":77,"column":60}}}) : helper)))
    + "</span>\r\n                <p class=\"spell-item\">Max Bonus: </p>\r\n                <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"armor_class_max_bonus") || (depth0 != null ? lookupProperty(depth0,"armor_class_max_bonus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"armor_class_max_bonus","hash":{},"data":data,"loc":{"start":{"line":79,"column":41},"end":{"line":79,"column":66}}}) : helper)))
    + "</span>\r\n            </div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <span class=\"spell-info\">Minimum Strength Necessary: </span>\r\n                <span class=\"spell-item\">\r\n                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"str_min") || (depth0 != null ? lookupProperty(depth0,"str_min") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"str_min","hash":{},"data":data,"loc":{"start":{"line":87,"column":20},"end":{"line":87,"column":31}}}) : helper)))
    + "\r\n                </span>\r\n            </div>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <span class=\"spell-info\">Stealth Disadvantage: </span>\r\n                <span class=\"spell-item\">\r\n                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stealth") || (depth0 != null ? lookupProperty(depth0,"stealth") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stealth","hash":{},"data":data,"loc":{"start":{"line":95,"column":20},"end":{"line":95,"column":31}}}) : helper)))
    + "\r\n                </span>\r\n            </div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <p class=\"spell-info\">Contents: </p>\r\n                <p class=\"spell-item\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"contents") : depth0),{"name":"each","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":104,"column":20},"end":{"line":106,"column":29}}})) != null ? stack1 : "")
    + "                </p>\r\n            </div>\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"item_url") || (depth0 != null ? lookupProperty(depth0,"item_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item_url","hash":{},"data":data,"loc":{"start":{"line":105,"column":20},"end":{"line":105,"column":32}}}) : helper)))
    + ":"
    + alias4(((helper = (helper = lookupProperty(helpers,"quantity") || (depth0 != null ? lookupProperty(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":105,"column":33},"end":{"line":105,"column":45}}}) : helper)))
    + "\r\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n\r\n                <p class=\"spell-info\">Damage: </p>\r\n                <p class=\"spell-item\">Damage Dice:</p>\r\n                <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"damage_dice") || (depth0 != null ? lookupProperty(depth0,"damage_dice") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"damage_dice","hash":{},"data":data,"loc":{"start":{"line":126,"column":41},"end":{"line":126,"column":56}}}) : helper)))
    + "</span>\r\n                <p class=\"spell-item\">Damage Bonus: </p>\r\n                <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"damage_bonus") || (depth0 != null ? lookupProperty(depth0,"damage_bonus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"damage_bonus","hash":{},"data":data,"loc":{"start":{"line":128,"column":41},"end":{"line":128,"column":57}}}) : helper)))
    + "</span>\r\n                <p class=\"spell-item\">Damage Type: </p>\r\n                <p class=\"spell-item\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"damage_type") : depth0),{"name":"each","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":131,"column":20},"end":{"line":133,"column":29}}})) != null ? stack1 : "")
    + "                </p>\r\n            </div>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":132,"column":20},"end":{"line":132,"column":28}}}) : helper)))
    + "\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <span class=\"spell-info\">Range: </span>\r\n                <p class=\"spell-info\"> Normal Range:</p>\r\n                <span class=\"spell-item\">\r\n                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"range_normal") || (depth0 != null ? lookupProperty(depth0,"range_normal") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"range_normal","hash":{},"data":data,"loc":{"start":{"line":142,"column":20},"end":{"line":142,"column":36}}}) : helper)))
    + "\r\n            </div>\r\n";
},"29":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                </span>\r\n                <p class=\"spell-info\"> Long Range:</p>\r\n                <span class=\"spell-item\">\r\n                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"range_long") || (depth0 != null ? lookupProperty(depth0,"range_long") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"range_long","hash":{},"data":data,"loc":{"start":{"line":150,"column":20},"end":{"line":150,"column":34}}}) : helper)))
    + "\r\n                </span>\r\n            </div>\r\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <p class=\"spell-info\">Properties: </p>\r\n                <p class=\"spell-item\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"properties") : depth0),{"name":"each","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":159,"column":20},"end":{"line":161,"column":29}}})) != null ? stack1 : "")
    + "                </p>\r\n            </div>\r\n";
},"32":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":160,"column":20},"end":{"line":160,"column":28}}}) : helper)))
    + ",\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n\r\n                <p class=\"spell-info\">Two handed Damage: </p>\r\n                <p class=\"spell-item\">Damage Dice:</p>\r\n                <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"th_damage_dice") || (depth0 != null ? lookupProperty(depth0,"th_damage_dice") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"th_damage_dice","hash":{},"data":data,"loc":{"start":{"line":171,"column":41},"end":{"line":171,"column":59}}}) : helper)))
    + "</span>\r\n                <p class=\"spell-item\">Damage Bonus: </p>\r\n                <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"th_damage_bonus") || (depth0 != null ? lookupProperty(depth0,"th_damage_bonus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"th_damage_bonus","hash":{},"data":data,"loc":{"start":{"line":173,"column":41},"end":{"line":173,"column":60}}}) : helper)))
    + "</span>\r\n                <p class=\"spell-item\">Damage Type: </p>\r\n                <p class=\"spell-item\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"th_damage_type") : depth0),{"name":"each","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":176,"column":20},"end":{"line":178,"column":29}}})) != null ? stack1 : "")
    + "                </p>\r\n            </div>\r\n";
},"36":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <p class=\"spell-info\">Short Throw Range:</p>\r\n                <span class=\"spell-item\">\r\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"throw_range_normal") || (depth0 != null ? lookupProperty(depth0,"throw_range_normal") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"throw_range_normal","hash":{},"data":data,"loc":{"start":{"line":186,"column":20},"end":{"line":186,"column":42}}}) : helper)))
    + "\r\n                </span>\r\n                <p class=\"spell-info\"> Long Throw Range:</p>\r\n                <span class=\"spell-item\">\r\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"throw_range_long") || (depth0 != null ? lookupProperty(depth0,"throw_range_long") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"throw_range_long","hash":{},"data":data,"loc":{"start":{"line":190,"column":20},"end":{"line":190,"column":40}}}) : helper)))
    + "\r\n                </span>\r\n            </div>\r\n";
},"38":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <span class=\"spell-info\">Speed: </span>\r\n                <span class=\"spell-item\">\r\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"speed_quantity") || (depth0 != null ? lookupProperty(depth0,"speed_quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speed_quantity","hash":{},"data":data,"loc":{"start":{"line":199,"column":20},"end":{"line":199,"column":38}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"speed_unit") || (depth0 != null ? lookupProperty(depth0,"speed_unit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speed_unit","hash":{},"data":data,"loc":{"start":{"line":199,"column":39},"end":{"line":199,"column":53}}}) : helper)))
    + "\r\n                </span>\r\n            </div>\r\n";
},"40":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <span class=\"spell-info\">Capacity: </span>\r\n                <span class=\"spell-item\">\r\n                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"capacity") || (depth0 != null ? lookupProperty(depth0,"capacity") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"capacity","hash":{},"data":data,"loc":{"start":{"line":207,"column":20},"end":{"line":207,"column":32}}}) : helper)))
    + "\r\n                </span>\r\n            </div>\r\n";
},"42":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n                <span class=\"spell-info\">Description: </span>\r\n                <span class=\"spell-item\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":216,"column":41},"end":{"line":216,"column":49}}}) : helper)))
    + "</span>\r\n            </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "﻿<article class=\"item-box\">\r\n    <div class=\"item-content\">\r\n        <h4 class=\"item-name\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":20}}}) : helper)))
    + "\r\n        </h4>\r\n            <div>\r\n                <span class=\"spell-info\">Equipment Catagory: </span>\r\n                <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"equipment_cat") || (depth0 != null ? lookupProperty(depth0,"equipment_cat") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"equipment_cat","hash":{},"data":data,"loc":{"start":{"line":8,"column":41},"end":{"line":8,"column":58}}}) : helper)))
    + "</span>\r\n            </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"gear_cat") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":18,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"vehicle_cat") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":26,"column":19}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"tool_cat") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":35,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"armor_cat") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":12},"end":{"line":43,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"weapon_cat") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":51,"column":19}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"weapon_range") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":12},"end":{"line":60,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"category_range") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":12},"end":{"line":68,"column":19}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"armor_class_base") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":12},"end":{"line":81,"column":19}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"str_min") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":83,"column":12},"end":{"line":90,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"stealth") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":12},"end":{"line":98,"column":19}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"contents") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":100,"column":12},"end":{"line":109,"column":19}}})) != null ? stack1 : "")
    + "\r\n\r\n\r\n            <div>\r\n                <span class=\"spell-info\">Cost: </span>\r\n                <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"quantity") || (depth0 != null ? lookupProperty(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":115,"column":41},"end":{"line":115,"column":53}}}) : helper)))
    + "  "
    + alias4(((helper = (helper = lookupProperty(helpers,"unit") || (depth0 != null ? lookupProperty(depth0,"unit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"unit","hash":{},"data":data,"loc":{"start":{"line":115,"column":55},"end":{"line":115,"column":63}}}) : helper)))
    + "</span>\r\n            </div>\r\n            <div>\r\n                <span class=\"spell-info\">Weight: </span>\r\n                <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"weight") || (depth0 != null ? lookupProperty(depth0,"weight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"weight","hash":{},"data":data,"loc":{"start":{"line":119,"column":41},"end":{"line":119,"column":51}}}) : helper)))
    + "</span>\r\n            </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"damage_dice") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":121,"column":12},"end":{"line":136,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"range_normal") : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":137,"column":12},"end":{"line":144,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"range_long") : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":145,"column":12},"end":{"line":153,"column":19}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"properties") : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":155,"column":12},"end":{"line":164,"column":19}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"th_damage_dice") : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":166,"column":12},"end":{"line":181,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"throw_range_normal") : depth0),{"name":"if","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":182,"column":12},"end":{"line":193,"column":19}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"speed_quantity") : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":195,"column":12},"end":{"line":202,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"capacity") : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":203,"column":12},"end":{"line":210,"column":19}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"desc") : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":213,"column":12},"end":{"line":218,"column":19}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n</article>\r\n";
},"useData":true});
})();