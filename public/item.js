(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['item'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <span class=\"spell-info\">Gear Catagory: </span>\r\n      <span class=\"spell-item\">\r\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"gear_cat") || (depth0 != null ? lookupProperty(depth0,"gear_cat") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"gear_cat","hash":{},"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":20}}}) : helper)))
    + "\r\n      </span>\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <span class=\"spell-info\">Vehicle Catagory: </span>\r\n      <span class=\"spell-item\">\r\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"vehicle_cat") || (depth0 != null ? lookupProperty(depth0,"vehicle_cat") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"vehicle_cat","hash":{},"data":data,"loc":{"start":{"line":23,"column":8},"end":{"line":23,"column":23}}}) : helper)))
    + "\r\n      </span>\r\n    </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <span class=\"spell-info\">Tool Catagory: </span>\r\n      <span class=\"spell-item\">\r\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"tool_cat") || (depth0 != null ? lookupProperty(depth0,"tool_cat") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tool_cat","hash":{},"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":32,"column":20}}}) : helper)))
    + "\r\n      </span>\r\n    </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <span class=\"spell-info\">Armor Catagory: </span>\r\n      <span class=\"spell-item\">\r\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"armor_cat") || (depth0 != null ? lookupProperty(depth0,"armor_cat") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"armor_cat","hash":{},"data":data,"loc":{"start":{"line":40,"column":8},"end":{"line":40,"column":21}}}) : helper)))
    + "\r\n      </span>\r\n    </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <span class=\"spell-info\">Catagory Range: </span>\r\n      <span class=\"spell-item\">\r\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"category_range") || (depth0 != null ? lookupProperty(depth0,"category_range") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"category_range","hash":{},"data":data,"loc":{"start":{"line":48,"column":8},"end":{"line":48,"column":26}}}) : helper)))
    + "\r\n      </span>\r\n    </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <p class=\"spell-info\">Armor Class </p>\r\n      <span class=\"spell-info\">Base:</span>\r\n      <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"armor_class_base") || (depth0 != null ? lookupProperty(depth0,"armor_class_base") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"armor_class_base","hash":{},"data":data,"loc":{"start":{"line":58,"column":31},"end":{"line":58,"column":51}}}) : helper)))
    + "</span>\r\n      <p>\r\n        <span class=\"spell-info\">Dexterity Bonus: </span>\r\n        <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"armor_class_dex") || (depth0 != null ? lookupProperty(depth0,"armor_class_dex") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"armor_class_dex","hash":{},"data":data,"loc":{"start":{"line":61,"column":33},"end":{"line":61,"column":52}}}) : helper)))
    + "</span>\r\n      </p>\r\n      <p>\r\n        <span class=\"spell-info\">Max Bonus: </span>\r\n        <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"armor_class_max_bonus") || (depth0 != null ? lookupProperty(depth0,"armor_class_max_bonus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"armor_class_max_bonus","hash":{},"data":data,"loc":{"start":{"line":65,"column":33},"end":{"line":65,"column":58}}}) : helper)))
    + "</span>\r\n      </p>\r\n    </div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <span class=\"spell-info\">Minimum Strength Necessary: </span>\r\n      <span class=\"spell-item\">\r\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"str_min") || (depth0 != null ? lookupProperty(depth0,"str_min") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"str_min","hash":{},"data":data,"loc":{"start":{"line":74,"column":8},"end":{"line":74,"column":19}}}) : helper)))
    + "\r\n      </span>\r\n    </div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <span class=\"spell-info\">Stealth Disadvantage: </span>\r\n      <span class=\"spell-item\">\r\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stealth") || (depth0 != null ? lookupProperty(depth0,"stealth") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stealth","hash":{},"data":data,"loc":{"start":{"line":82,"column":8},"end":{"line":82,"column":19}}}) : helper)))
    + "\r\n      </span>\r\n    </div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <span class=\"spell-info\">Contents: </span>\r\n      <p class=\"spell-item\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"contents") : depth0),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":8},"end":{"line":96,"column":17}}})) != null ? stack1 : "")
    + "      </p>\r\n    </div>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <p>\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"item_url") || (depth0 != null ? lookupProperty(depth0,"item_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item_url","hash":{},"data":data,"loc":{"start":{"line":93,"column":12},"end":{"line":93,"column":24}}}) : helper)))
    + ": "
    + alias4(((helper = (helper = lookupProperty(helpers,"quantity") || (depth0 != null ? lookupProperty(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":93,"column":26},"end":{"line":93,"column":38}}}) : helper)))
    + "\r\n\r\n          </p>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <span class=\"spell-info\">Weight: </span>\r\n      <span class=\"spell-item\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"weight") || (depth0 != null ? lookupProperty(depth0,"weight") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"weight","hash":{},"data":data,"loc":{"start":{"line":110,"column":31},"end":{"line":110,"column":41}}}) : helper)))
    + "</span>\r\n    </div>\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n\r\n      <p class=\"spell-info\">Damage: </p>\r\n      <span class=\"spell-item\">Damage Dice:</span>\r\n      <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"damage_dice") || (depth0 != null ? lookupProperty(depth0,"damage_dice") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"damage_dice","hash":{},"data":data,"loc":{"start":{"line":118,"column":31},"end":{"line":118,"column":46}}}) : helper)))
    + "</span>\r\n      <br>\r\n      <span class=\"spell-item\">Damage Bonus: </span>\r\n      <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"damage_bonus") || (depth0 != null ? lookupProperty(depth0,"damage_bonus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"damage_bonus","hash":{},"data":data,"loc":{"start":{"line":121,"column":31},"end":{"line":121,"column":47}}}) : helper)))
    + "</span>\r\n      <br>\r\n      <span class=\"spell-item\">Damage Type: </span>\r\n      <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"damage_type") || (depth0 != null ? lookupProperty(depth0,"damage_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"damage_type","hash":{},"data":data,"loc":{"start":{"line":124,"column":31},"end":{"line":124,"column":46}}}) : helper)))
    + "</span>\r\n    </div>\r\n";
},"24":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <span class=\"spell-info\"> Normal Range:</span>\r\n      <span class=\"spell-item\">\r\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"range_normal") || (depth0 != null ? lookupProperty(depth0,"range_normal") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"range_normal","hash":{},"data":data,"loc":{"start":{"line":131,"column":8},"end":{"line":131,"column":24}}}) : helper)))
    + "\r\n      </div>\r\n";
},"26":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div>\r\n      </span>\r\n      <span class=\"spell-info\"> Long Range:</span>\r\n      <span class=\"spell-item\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"range_long") || (depth0 != null ? lookupProperty(depth0,"range_long") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"range_long","hash":{},"data":data,"loc":{"start":{"line":138,"column":31},"end":{"line":138,"column":45}}}) : helper)))
    + "</span>\r\n    </div>\r\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <span class=\"spell-info\">Properties: </span>\r\n      <span class=\"spell-item\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"properties") : depth0),{"name":"each","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":146,"column":8},"end":{"line":148,"column":17}}})) != null ? stack1 : "")
    + "      </span>\r\n    </div>\r\n";
},"29":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":147,"column":8},"end":{"line":147,"column":16}}}) : helper)))
    + ",\r\n";
},"31":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n\r\n      <p class=\"spell-info\">Two handed Damage: </p>\r\n      <span class=\"spell-item\">Damage Dice:</span>\r\n      <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"th_damage_dice") || (depth0 != null ? lookupProperty(depth0,"th_damage_dice") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"th_damage_dice","hash":{},"data":data,"loc":{"start":{"line":158,"column":31},"end":{"line":158,"column":49}}}) : helper)))
    + "</span>\r\n      <!-- <p> -->\r\n      <br>\r\n      <span class=\"spell-item\">Damage Bonus: </span>\r\n      <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"th_damage_bonus") || (depth0 != null ? lookupProperty(depth0,"th_damage_bonus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"th_damage_bonus","hash":{},"data":data,"loc":{"start":{"line":162,"column":31},"end":{"line":162,"column":50}}}) : helper)))
    + "</span>\r\n    <!-- </p> -->\r\n      </div>\r\n";
},"33":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <span class=\"spell-info\">Throw Range:</span>\r\n      <span class=\"spell-item\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"throw_range_normal") || (depth0 != null ? lookupProperty(depth0,"throw_range_normal") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"throw_range_normal","hash":{},"data":data,"loc":{"start":{"line":170,"column":8},"end":{"line":170,"column":30}}}) : helper)))
    + "/"
    + alias4(((helper = (helper = lookupProperty(helpers,"throw_range_long") || (depth0 != null ? lookupProperty(depth0,"throw_range_long") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"throw_range_long","hash":{},"data":data,"loc":{"start":{"line":170,"column":31},"end":{"line":170,"column":51}}}) : helper)))
    + "\r\n      </span>\r\n\r\n\r\n    </div>\r\n";
},"35":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <span class=\"spell-info\">Speed: </span>\r\n      <span class=\"spell-item\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"speed_quantity") || (depth0 != null ? lookupProperty(depth0,"speed_quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speed_quantity","hash":{},"data":data,"loc":{"start":{"line":181,"column":8},"end":{"line":181,"column":26}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"speed_unit") || (depth0 != null ? lookupProperty(depth0,"speed_unit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speed_unit","hash":{},"data":data,"loc":{"start":{"line":181,"column":27},"end":{"line":181,"column":41}}}) : helper)))
    + "\r\n      </span>\r\n    </div>\r\n";
},"37":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <span class=\"spell-info\">Capacity: </span>\r\n      <span class=\"spell-item\">\r\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"capacity") || (depth0 != null ? lookupProperty(depth0,"capacity") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"capacity","hash":{},"data":data,"loc":{"start":{"line":189,"column":8},"end":{"line":189,"column":20}}}) : helper)))
    + "\r\n      </span>\r\n    </div>\r\n";
},"39":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n      <span class=\"spell-info\">Description: </span>\r\n      <span class=\"spell-item\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":198,"column":31},"end":{"line":198,"column":39}}}) : helper)))
    + "</span>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"creature\">\r\n  <div class=\"creature-content\">\r\n    <h4 class=\"item-name\">\r\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":14}}}) : helper)))
    + "\r\n    </h4>\r\n    <div>\r\n      <span class=\"spell-info\">Equipment Category: </span>\r\n      <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"equipment_cat") || (depth0 != null ? lookupProperty(depth0,"equipment_cat") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"equipment_cat","hash":{},"data":data,"loc":{"start":{"line":8,"column":31},"end":{"line":8,"column":48}}}) : helper)))
    + "</span>\r\n    </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"gear_cat") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"vehicle_cat") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":26,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"tool_cat") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":4},"end":{"line":35,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"armor_cat") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":4},"end":{"line":43,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"category_range") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":4},"end":{"line":51,"column":11}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"armor_class_base") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":4},"end":{"line":68,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"str_min") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":4},"end":{"line":77,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"stealth") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":78,"column":4},"end":{"line":85,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"contents") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":87,"column":4},"end":{"line":99,"column":11}}})) != null ? stack1 : "")
    + "\r\n\r\n\r\n    <div>\r\n      <span class=\"spell-info\">Cost: </span>\r\n      <span class=\"spell-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"quantity") || (depth0 != null ? lookupProperty(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":105,"column":31},"end":{"line":105,"column":43}}}) : helper)))
    + "  "
    + alias4(((helper = (helper = lookupProperty(helpers,"unit") || (depth0 != null ? lookupProperty(depth0,"unit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"unit","hash":{},"data":data,"loc":{"start":{"line":105,"column":45},"end":{"line":105,"column":53}}}) : helper)))
    + "</span>\r\n    </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"weight") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":107,"column":4},"end":{"line":112,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"damage_dice") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":113,"column":4},"end":{"line":126,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"range_normal") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":127,"column":4},"end":{"line":133,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"range_long") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":6},"end":{"line":140,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"properties") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":142,"column":4},"end":{"line":151,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"th_damage_dice") : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":153,"column":4},"end":{"line":165,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"throw_range_normal") : depth0),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":166,"column":4},"end":{"line":175,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"speed_quantity") : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":177,"column":4},"end":{"line":184,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"capacity") : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":185,"column":4},"end":{"line":192,"column":11}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"desc") : depth0),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":195,"column":4},"end":{"line":200,"column":11}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</article>\r\n";
},"useData":true});
})();