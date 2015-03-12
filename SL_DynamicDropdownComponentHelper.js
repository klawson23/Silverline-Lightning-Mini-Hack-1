({
  getNewList: function(cmp, queryString) {

    var opts = '';
    try{
	    var a = cmp.get('c.runQuery');
			a.setParams({ querystr : queryString });
      a.setCallback(this, function(action) {
        
        if (action.getState() === "SUCCESS") {
          opts = action.getReturnValue();
          var options = JSON.parse(opts);
                    
          cmp.find("InputSelectDynamic2").set("v.options", options);  
        } else {
          alert(action.getState());
        }
        
			});
      $A.enqueueAction(a);
    }
   	catch(ex){
      alert(ex);                
    }
  }
})
