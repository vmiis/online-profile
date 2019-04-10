(function(){
    var modules={
        "about-vmiis":    			    {url:"$A/modules/a/about-vmiis.html",router:1},
        "notes":  		  	  			{url:"$A/modules/n/notes.html"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
    var prefix=""
    for(m in modules){
        $vm.module_list[prefix+m].url=$vm.replace_url($vm.module_list[prefix+m].url);
    }
})();
