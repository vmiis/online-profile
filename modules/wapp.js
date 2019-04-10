(function(){
    var modules={
        "clinical-trials-app-wapp":         {url:"$A/modules/c/clinical-trials-wapp/index.html"},

        "panel-main-wapp":    			    {url:"$A/modules/p/panel-wapp/panel-main.html",router:1},
        "panel-child-wapp":    			    {url:"$A/modules/p/panel-wapp/panel-child.html"},
        
        "participant-data-wapp":   		    {url:"$A/modules/p/participant-data-wapp.html",Table:"participant",form_module:"participant-form-wapp",router:1,
                                                child_panel:"panel-child-wapp",
                                                questionnaire_setup:"online-questionnaire-setup-wapp",
                                                online_questionnaire:"online-questionnaire-app-wapp"
                                            },
        "participant-form-wapp":   		    {url:"$A/modules/p/participant-form-wapp.html",Table:"participant"},

        "notes":  		  	  			    {url:"$A/modules/n/notes.html"},
        "online-questionnaire-setup-wapp": 	{url:"$A/modules/w/wapp-tasks/online-questionnaire-setup.html",Table:"participant"},
        "online-questionnaire-app-wapp":    {url:"$A/modules/o/online-questionnaire-wapp/index.html"},

        "actiwatch-data-wapp":	               {url:"$A/modules/w/wapp-tasks/actiwatch-data.html",Table:"actiwatch-wapp",form_module:"actiwatch-form-wapp"},
        "actiwatch-form-wapp":	               {url:"$A/modules/w/wapp-tasks/actiwatch-form.html",Table:"actiwatch-wapp"},
        "adverse-event-data-wapp":	           {url:"$A/modules/w/wapp-tasks/adverse-event-data.html",Table:"adverse-eevent-wapp",form_module:"adverse-eevent-form-wapp"},
        "adverse-eevent-form-wapp":	           {url:"$A/modules/w/wapp-tasks/adverse-event-form.html",Table:"adverse-eevent-wapp"},
    
        "background-information-data-wapp":     {url:"$A/modules/w/wapp-tasks/background-information-data.html",Table:"background-information-wapp",form_module:"background-information-form-wapp"},
        "background-information-form-wapp":     {url:"$A/modules/w/wapp-tasks/background-information-form.html",Table:"background-information-wapp",task_name:"Background information"},
        
        "consent-data-wapp":  			{url:"$A/modules/w/wapp-tasks/consent-data.html",Table:"consent-wapp",form_module:"consent-form-wapp"},
        "consent-form-wapp":  			{url:"$A/modules/w/wapp-tasks/consent-form.html",Table:"consent-wapp",task_name:"Consent"},
        
        "dass-data-wapp":	 	        {url:"$A/modules/w/wapp-tasks/dass-data.html",Table:"dass-wapp",form_module:"dass-form-wapp"},
        "dass-form-wapp":	 	        {url:"$A/modules/w/wapp-tasks/dass-form.html",Table:"dass-wapp"},
        
        "ess-data-wapp":       			{url:"$A/modules/w/wapp-tasks/ess-data.html",Table:"ess-wapp",form_module:"ess-form-wapp"},
        "ess-form-wapp":       			{url:"$A/modules/w/wapp-tasks/ess-form.html",Table:"ess-wapp"},
        
        "ethnicity-data-wapp":    		{url:"$A/modules/w/wapp-tasks/ethnicity-self-data.html",Table:"ethnicity-wapp",form_module:"ethnicity-form-wapp"},
        "ethnicity-form-wapp":    		{url:"$A/modules/w/wapp-tasks/ethnicity-self-form.html",Table:"ethnicity-wapp"},

        "family-sleep-history-data-wapp":{url:"$A/modules/w/wapp-tasks/family-sleep-history-data.html",Table:"family-sleep-history-wapp",form_module:"family-sleep-history-form-wapp"},
        "family-sleep-history-form-wapp":{url:"$A/modules/w/wapp-tasks/family-sleep-history-form.html",Table:"family-sleep-history-wapp"},

        "fosq-data-wapp":      	  		{url:"$A/modules/w/wapp-tasks/fosq-data.html",Table:"fosq-wapp",form_module:"fosq-form-wapp"},
        "fosq-form-wapp":      	  		{url:"$A/modules/w/wapp-tasks/fosq-form.html",Table:"fosq-wapp"},

        "isi-data-wapp":      	  		{url:"$A/modules/w/wapp-tasks/isi-data.html",Table:"isi-wapp",form_module:"isi-form-wapp"},
        "isi-form-wapp":      	  		{url:"$A/modules/w/wapp-tasks/isi-form.html",Table:"isi-wapp"},
        
        "screening-data-wapp": 			{url:"$A/modules/w/wapp-tasks/screening-data.html",Table:"screening",form_module:"screening-form-wapp"},
        "screening-form-wapp": 			{url:"$A/modules/w/wapp-tasks/screening-form.html",Table:"screening"},
        "sdp-data-wapp":     		    {url:"$A/modules/w/wapp-tasks/sleep-disorder-patterns-data.html",Table:"sdp-wapp",form_module:"sdp-form-wapp"},
        "sdp-form-wapp":     		    {url:"$A/modules/w/wapp-tasks/sleep-disorder-patterns-form.html",Table:"sdp-wapp"},

        "wa-data-wapp":    			    {url:"$A/modules/w/wapp-tasks/wa-data.html",Table:"wa-wapp",form_module:"wa-form-wapp"},
        "wa-form-wapp":    			    {url:"$A/modules/w/wapp-tasks/wa-form.html",Table:"wa-wapp"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
    var prefix=""
    for(m in modules){
        $vm.module_list[prefix+m].url=$vm.replace_url($vm.module_list[prefix+m].url);
    }
})();
