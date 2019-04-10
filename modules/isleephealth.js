(function () {
    var modules = {
        "appointment-workflow": { url: "$A/modules/i/isleephealth/appointment-workflow.html",router:1},
        "appointment-data":     { url: "$A/modules/i/isleephealth/appointment-data.html", Table: "appointment", form_module: "appointment-form",router:1},
        "appointment-form":     { url: "$A/modules/i/isleephealth/appointment-form.html", Table: "appointment"},
    }
    //var $A="https://astn.wappsystem.com.au/";
    //if($vm.localhost==true) $A="http://127.0.0.1:8000/wappsystem/astn/";
    var prefix="isleephealth-";
    for(m in modules){
        $vm.module_list[prefix+m]=modules[m];
        $vm.module_list[prefix+m].prefix=prefix;
        $vm.module_list[prefix+m].Table=prefix+$vm.module_list[prefix+m].Table;
        //$vm.module_list[prefix+m].url=$vm.module_list[prefix+m].url.replace("$A",$A);
    }
})();
