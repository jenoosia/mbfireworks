(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['viewInfoListItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"view-info-li\">\n    <h1>";
  if (stack1 = helpers.viewTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.viewTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    <img class=\"view-img\" src=\"";
  if (stack1 = helpers.viewImage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.viewImage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <img class=\"static-map\" src=\"";
  if (stack1 = helpers.staticUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.staticUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n</div>";
  return buffer;
  });
})();