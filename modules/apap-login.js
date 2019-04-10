(function(){
    var modules={
        "home":                         {"url":"$A/modules/o/online-questionnaire-login.html","Table":"apap-participant",
                                                questionnaire_panel:"online-questionnaire-panel"
                                        }   ,
        "online-questionnaire-panel":   {url:"$A/modules/o/online-questionnaire-panel.html"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
    var prefix=""
    for(m in modules){
        $vm.module_list[prefix+m].url=$vm.replace_url($vm.module_list[prefix+m].url);
    }
})();
