({
    runUpdateQueryEvent : function(cmp, event, helper) {
        
      var cmpinputTextBox = cmp.find("inputTextBox");
      var queryValue = cmpinputTextBox.get("v.value");
        
      var evt = $A.get("e.c:SL_DynamicDropdown_runNewQueryEvent");
      evt.setParams({
        "queryString": queryValue
      });
      evt.fire();
    },    
    doInit : function(cmp) {
        
      var opts = [
        { class: "optionClass", label: "Option1", value: "opt1", selected: "true" },
        { class: "optionClass", label: "Option2", value: "opt2" },
        { class: "optionClass", label: "Option3", value: "opt3" }
      ];
        
      cmp.find("InputSelectDynamic").set("v.options", opts);       
    }		
	}
})
