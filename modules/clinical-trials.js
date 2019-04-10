(function(){
    var modules={
        "participant-data":   		        {url:"$A/modules/c/clinical-trials/participant-data.html",Table:"participant",form_module:"participant-form",router:1,
                                                child_panel:"panel-child-wapp",
                                                questionnaire_setup:"online-questionnaire-setup-wapp",
                                                online_questionnaire:"online-questionnaire-app-wapp"
                                            },
        "participant-form":   		        {url:"$A/modules/c/clinical-trials/participant-form.html",Table:"participant"},
        
        "actigraphy-data":	                {url:"$A/modules/c/clinical-trials/tasks/actigraphy-data.html",Table:"actigraphy-wapp",form_module:"actigraphy-form"},
        "actigraphy-form":	                {url:"$A/modules/c/clinical-trials/tasks/actigraphy-form.html",Table:"actigraphy-wapp"},
        
        "actiwatch-data":	                {url:"$A/modules/c/clinical-trials/tasks/actiwatch-data.html",Table:"actiwatch-wapp",form_module:"actiwatch-form"},
        "actiwatch-form":	                {url:"$A/modules/c/clinical-trials/tasks/actiwatch-form.html",Table:"actiwatch-wapp"},
        "adverse-event-data":	            {url:"$A/modules/c/clinical-trials/tasks/adverse-event-data.html",Table:"adverse-eevent-wapp",form_module:"adverse-eevent-form"},
        "adverse-eevent-form":	            {url:"$A/modules/c/clinical-trials/tasks/adverse-event-form.html",Table:"adverse-eevent-wapp"},
        "background-information-data":      {url:"$A/modules/w/wapp-tasks/background-information-data.html",Table:"background-information-wapp",form_module:"background-information-form"},
        "background-information-form":      {url:"$A/modules/w/wapp-tasks/background-information-form.html",Table:"background-information-wapp",task_name:"Background information"},
        "consent-data":  			        {url:"$A/modules/c/clinical-trials/tasks/consent-data.html",Table:"consent-wapp",form_module:"consent-form"},
        "consent-form":  			        {url:"$A/modules/c/clinical-trials/tasks/consent-form.html",Table:"consent-wapp",task_name:"Consent"},
        "dass-data":	 	                {url:"$A/modules/c/clinical-trials/tasks/dass-data.html",Table:"dass-wapp",form_module:"dass-form"},
        "dass-form":	 	                {url:"$A/modules/c/clinical-trials/tasks/dass-form.html",Table:"dass-wapp"},
        "ess-data":       			        {url:"$A/modules/c/clinical-trials/tasks/ess-data.html",Table:"ess-wapp",form_module:"ess-form"},
        "ess-form":       			        {url:"$A/modules/c/clinical-trials/tasks/ess-form.html",Table:"ess-wapp"},
        "ethnicity-data":    		        {url:"$A/modules/c/clinical-trials/tasks/ethnicity-self-data.html",Table:"ethnicity-wapp",form_module:"ethnicity-form"},
        "ethnicity-form":    		        {url:"$A/modules/c/clinical-trials/tasks/ethnicity-self-form.html",Table:"ethnicity-wapp"},
        "family-sleep-history-data":        {url:"$A/modules/c/clinical-trials/tasks/family-sleep-history-data.html",Table:"family-sleep-history-wapp",form_module:"family-sleep-history-form"},
        "family-sleep-history-form":        {url:"$A/modules/c/clinical-trials/tasks/family-sleep-history-form.html",Table:"family-sleep-history-wapp"},
        "fosq-data":      	  		        {url:"$A/modules/c/clinical-trials/tasks/fosq-data.html",Table:"fosq-wapp",form_module:"fosq-form"},
        "fosq-form":      	  		        {url:"$A/modules/c/clinical-trials/tasks/fosq-form.html",Table:"fosq-wapp"},
        "isi-data":      	  		        {url:"$A/modules/c/clinical-trials/tasks/isi-data.html",Table:"isi-wapp",form_module:"isi-form"},
        "isi-form":      	  		        {url:"$A/modules/c/clinical-trials/tasks/isi-form.html",Table:"isi-wapp"},
        "isi2-data":      	  		        {url:"$A/modules/c/clinical-trials/tasks/insomnia-severity-index-data.html",Table:"isi-wapp",form_module:"isi2-form"},
        "isi2-form":      	  		        {url:"$A/modules/c/clinical-trials/tasks/insomnia-severity-index-form.html",Table:"isi-wapp"},
        "screening-data": 			        {url:"$A/modules/c/clinical-trials/tasks/screening-data.html",Table:"screening",form_module:"screening-form"},
        "screening-form": 			        {url:"$A/modules/c/clinical-trials/tasks/screening-form.html",Table:"screening"},
        "sdp-data":     		            {url:"$A/modules/c/clinical-trials/tasks/sleep-disorder-patterns-data.html",Table:"sdp-wapp",form_module:"sdp-form"},
        "sdp-form":     		            {url:"$A/modules/c/clinical-trials/tasks/sleep-disorder-patterns-form.html",Table:"sdp-wapp"},
        
        "psqi-data":     		            {url:"$A/modules/c/clinical-trials/tasks/pittsburgh-sleep-quality-index-data.html",Table:"psqi-wapp",form_module:"psqi-form"},
        "psqi-form":     		            {url:"$A/modules/c/clinical-trials/tasks/pittsburgh-sleep-quality-index-form.html",Table:"psqi-wapp"},
        "ffs-data":     		            {url:"$A/modules/c/clinical-trials/tasks/flinders-fatigue-scale-data.html",Table:"ffs-wapp",form_module:"ffs-form"},
        "ffs-form":     		            {url:"$A/modules/c/clinical-trials/tasks/flinders-fatigue-scale-form.html",Table:"ffs-wapp"},
        "fss-data":     		            {url:"$A/modules/c/clinical-trials/tasks/fatigue-severity-scale-data.html",Table:"fss-wapp",form_module:"fss-form"},
        "fss-form":     		            {url:"$A/modules/c/clinical-trials/tasks/fatigue-severity-scale-form.html",Table:"fss-wapp"},
        
        "wa-data":    			            {url:"$A/modules/c/clinical-trials/tasks/wa-data.html",Table:"wa-wapp",form_module:"wa-form"},
        "wa-form":    			            {url:"$A/modules/c/clinical-trials/tasks/wa-form.html",Table:"wa-wapp"},
        "visit-date-data":    			    {url:"$A/modules/c/clinical-trials/tasks/visit-date-data.html",Table:"visit-date-wapp",form_module:"visit-date-form"},
        "visit-date-form":    			    {url:"$A/modules/c/clinical-trials/tasks/visit-date-form.html",Table:"visit-date-wapp"},
        
        "demographics-data":    		    {url:"$A/modules/c/clinical-trials/tasks/demographics-data.html",Table:"demographics-wapp",form_module:"demographics-form"},
        "demographics-form":    		    {url:"$A/modules/c/clinical-trials/tasks/demographics-form.html",Table:"demographics-wapp"},
        
        "anthropometry-data":    		    {url:"$A/modules/c/clinical-trials/tasks/anthropometry-data.html",Table:"anthropometry-wapp",form_module:"anthropometry-form"},
        "anthropometry-form":    		    {url:"$A/modules/c/clinical-trials/tasks/anthropometry-form.html",Table:"anthropometry-wapp"},
        
        "ecg-report-upload-data":    	    {url:"$A/modules/c/clinical-trials/tasks/ecg-report-upload-data.html",Table:"ecg-report-upload-wapp",form_module:"ecg-report-upload-form"},
        "ecg-report-upload-form":    	    {url:"$A/modules/c/clinical-trials/tasks/ecg-report-upload-form.html",Table:"ecg-report-upload-wapp"},
        
        /*
        "clinical-trials-app-wapp":         {url:"$A/modules/c/clinical-trials-wapp/index.html"},

        "panel-main-wapp":    			    {url:"$A/modules/p/panel-wapp/panel-main.html",router:1},
        "panel-child-wapp":    			    {url:"$A/modules/p/panel-wapp/panel-child.html"},
        

        "notes":  		  	  			    {url:"$A/modules/n/notes.html"},
        "online-questionnaire-setup-wapp": 	{url:"$A/modules/w/wapp-tasks/online-questionnaire-setup.html",Table:"participant"},
        "online-questionnaire-app-wapp":    {url:"$A/modules/o/online-questionnaire-wapp/index.html"},

    
        
        
        
        
        

        */
    }
    var prefix="clinical-trials-"
    for(m in modules){
        $vm.module_list[prefix+m]=modules[m];
        if($vm.module_list[prefix+m].form_module!=undefined){
            $vm.module_list[prefix+m].form_module=prefix+$vm.module_list[prefix+m].form_module;
        }
    }
    for(m in modules){
        $vm.module_list[prefix+m].url=$vm.replace_url($vm.module_list[prefix+m].url);
    }
})();
