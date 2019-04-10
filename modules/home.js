(function(){
    var modules={
        "home":                         {url:"$A/modules/h/home.html",router:1},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
    var prefix=""
    for(m in modules){
        $vm.module_list[prefix+m].url=$vm.replace_url($vm.module_list[prefix+m].url);
    }
})();
