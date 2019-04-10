(function(){
    var modules={
        "panel-main-apap":    			{url:"$A/modules/p/panel-apap/panel-main.html",router:1},
        "panel-child-apap":    			{url:"$A/modules/p/panel-apap/panel-child.html"},
        
        "participant-data-apap":   		{url:"$A/modules/p/participant-data-apap.html",Table:"apap-participant",form_module:"participant-form-apap",router:1,
                                            child_panel:"panel-child-apap",
                                            questionnaire_setup:"online-questionnaire-setup-apap",
                                            online_questionnaire:"online-questionnaire-app-apap"
                                        },
        "participant-form-apap":   		{url:"$A/modules/p/participant-form-apap.html",Table:"apap-participant"},

        "notes":  		  	  			{url:"$A/modules/n/notes.html"},

        "anthropometry-data-apap":		    {url:"$A/modules/a/apap-tasks/anthropometry-data.html",Table:"anthropometry",form_module:"anthropometry-form-apap"},
        "anthropometry-form-apap":		    {url:"$A/modules/a/apap-tasks/anthropometry-form.html",Table:"anthropometry"},
        "adverseevents-data-apap":	        {url:"$A/modules/a/apap-tasks/adverseevents-data.html",Table:"cpap-adverseevents",form_module:"adverseevents-form-apap"},
        "adverseevents-form-apap":	        {url:"$A/modules/a/apap-tasks/adverseevents-form.html",Table:"cpap-adverseevents"},
        "adverseevents-data-3m-apap":	    {url:"$A/modules/a/apap-tasks/adverseevents-data.html",Table:"cpap-adverseevents-3m",form_module:"adverseevents-form-3m-apap"},
        "adverseevents-form-3m-apap":	    {url:"$A/modules/a/apap-tasks/adverseevents-form.html",Table:"cpap-adverseevents-3m"},

        "bloodgas-data-apap":                   {url:"$A/modules/b/bloodgas-data-apap.html",Table:"bloodgas-apap",form_module:"bloodgas-form-apap"},
        "bloodgas-form-apap":                   {url:"$A/modules/b/bloodgas-form-apap.html",Table:"bloodgas-apap"},
        "bloodgas-data-1m-apap":                {url:"$A/modules/b/bloodgas-data-apap.html",Table:"bloodgas-1m-apap",form_module:"bloodgas-form-1m-apap"},
        "bloodgas-form-1m-apap":                {url:"$A/modules/b/bloodgas-form-apap.html",Table:"bloodgas-1m-apap"},
        "bloodgas-data-3m-apap":                {url:"$A/modules/b/bloodgas-data-apap.html",Table:"bloodgas-3m-apap",form_module:"bloodgas-form-3m-apap"},
        "bloodgas-form-3m-apap":                {url:"$A/modules/b/bloodgas-form-apap.html",Table:"bloodgas-3m-apap"},
        "blood-data-apap":                      {url:"$A/modules/b/blood-data-apap.html",Table:"blood-apap",form_module:"blood-form-apap"},
        "blood-form-apap":                      {url:"$A/modules/b/blood-form-apap.html",Table:"blood-apap"},
        "blood-data-3m-apap":                   {url:"$A/modules/b/blood-data-apap.html",Table:"blood-3m-apap",form_module:"blood-form-3m-apap"},
        "blood-form-3m-apap":                   {url:"$A/modules/b/blood-form-apap.html",Table:"blood-3m-apap"},

        "clinical-trials-app-apap":     {url:"$A/modules/c/clinical-trials-apap/index.html"},
        "consent-form-upload-data-apap":{url:"$A/modules/c/consent-form-upload-data-apap.html",Table:"consent-form",form_module:"consent-form-upload-form-apap"},
        "consent-form-upload-form-apap":{url:"$A/modules/c/consent-form-upload-form-apap.html",Table:"consent-form"},
        "contact-details-data":   		{url:"$A/modules/c/contact-details-data.html",Table:"contact-details",form_module:"contact-details-form",router:1},
        "contact-details-form":   		{url:"$A/modules/c/contact-details-form.html",Table:"contact-details"},

        "cpapdownload-data-apap":   	{url:"$A/modules/c/cpapdownload-data-apap.html",Table:"cpapdownload-apap",form_module:"cpapdownload-form-apap"},
        "cpapdownload-form-apap":   	{url:"$A/modules/c/cpapdownload-form-apap.html",Table:"cpapdownload-apap"},
        "cpapdownload-data-3m-apap":   	{url:"$A/modules/c/cpapdownload-data-apap.html",Table:"cpapdownload-3m-apap",form_module:"cpapdownload-form-3m-apap"},
        "cpapdownload-form-3m-apap":   	{url:"$A/modules/c/cpapdownload-form-apap.html",Table:"cpapdownload-3m-apap"},

        "ess-data-apap":       			{url:"$A/modules/e/epworth-sleepiness-scale-data-apap.html",Table:"ess",form_module:"ess-form-apap"},
        "ess-form-apap":       			{url:"$A/modules/e/epworth-sleepiness-scale-form-apap.html",Table:"ess",task_name:"Visit 1 - Epworth Sleepiness Scale"},
        "ess-data-3m-apap":     		{url:"$A/modules/e/epworth-sleepiness-scale-data-apap.html",Table:"ess-3m-apap",form_module:"ess-form-3m-apap"},
        "ess-form-3m-apap":     		{url:"$A/modules/e/epworth-sleepiness-scale-form-apap.html",Table:"ess-3m-apap",task_name:"3 Month - Epworth Sleepiness Scale"},
        "ecg-data-apap":   	  			{url:"$A/modules/e/ecg-data-apap.html",Table:"ecg-apap",form_module:"ecg-form-apap"},
        "ecg-form-apap":   	  			{url:"$A/modules/e/ecg-form-apap.html",Table:"ecg-apap"},
        "ecg-data-3m-apap":   	  		{url:"$A/modules/e/ecg-data-apap.html",Table:"ecg-3m-apap",form_module:"ecg-form-3m-apap"},
        "ecg-form-3m-apap":   	  		{url:"$A/modules/e/ecg-form-apap.html",Table:"ecg-3m-apap"},
        
        "fosq-data-apap":  	  			{url:"$A/modules/f/functional-outcome-of-sleepquestionnaire-data-apap.html",Table:"fosq-apap",form_module:"fosq-form-apap"},
        "fosq-form-apap":  	  			{url:"$A/modules/f/functional-outcome-of-sleepquestionnaire-form-apap.html",Table:"fosq-apap",task_name:"Visit 1 - Functional Outcomes of Sleep Questionnaire"},
        "fosq-data-3m-apap":  	  		{url:"$A/modules/f/functional-outcome-of-sleepquestionnaire-data-apap.html",Table:"fosq-3m-apap",form_module:"fosq-form-3m-apap"},
        "fosq-form-3m-apap":  	  		{url:"$A/modules/f/functional-outcome-of-sleepquestionnaire-form-apap.html",Table:"fosq-3m-apap",task_name:"3 Month - Functional Outcomes of Sleep Questionnaire"},
        
        "medical-history-data-apap":    {url:"$A/modules/m/medical-history-data-apap.html",Table:"medical-history",form_module:"medical-history-form-apap"},
        "medical-history-form-apap":    {url:"$A/modules/m/medical-history-form-apap.html",Table:"medical-history"},
        "medication-data-apap":         {url:"$A/modules/m/medication-data-apap.html",Table:"medication-apap",form_module:"medication-form-apap"},
        "medication-form-apap":         {url:"$A/modules/m/medication-form-apap.html",Table:"medication-apap"},
        
        "online-questionnaire-setup-apap": 	{url:"$A/modules/o/online-questionnaire-setup-apap.html",Table:"apap-participant"},
        "online-questionnaire-app-apap":    {url:"$A/modules/o/online-questionnaire-apap/index.html"},
        

        "pwa-data-apap":	            {url:"$A/modules/p/pwa-data-apap.html",Table:"pwa-apap",form_module:"pwa-form-apap"},
        "pwa-form-apap":	            {url:"$A/modules/p/pwa-form-apap.html",Table:"pwa-apap"},
        "pwa2-data-apap":	            {url:"$A/modules/p/pwa-data-apap.html",Table:"pwa2-apap",form_module:"pwa2-form-apap"},
        "pwa2-form-apap":	            {url:"$A/modules/p/pwa-form-apap.html",Table:"pwa2-apap"},
        "pwa-data-3m-apap":	            {url:"$A/modules/p/pwa-data-apap.html",Table:"pwa-3m-apap",form_module:"pwa-form-3m-apap"},
        "pwa-form-3m-apap":	            {url:"$A/modules/p/pwa-form-apap.html",Table:"pwa-3m-apap"},
        "pwa2-data-3m-apap":	        {url:"$A/modules/p/pwa-data-apap.html",Table:"pwa2-3m-apap",form_module:"pwa2-form-3m-apap"},
        "pwa2-form-3m-apap":	        {url:"$A/modules/p/pwa-form-apap.html",Table:"pwa2-3m-apap"},
        "pwv-data-apap":	            {url:"$A/modules/p/pwv-data-apap.html",Table:"pwv-apap",form_module:"pwv-form-apap"},
        "pwv-form-apap":	            {url:"$A/modules/p/pwv-form-apap.html",Table:"pwv-apap"},
        "pwv2-data-apap":	            {url:"$A/modules/p/pwv-data-apap.html",Table:"pwv2-apap",form_module:"pwv2-form-apap"},
        "pwv2-form-apap":	            {url:"$A/modules/p/pwv-form-apap.html",Table:"pwv2-apap"},
        "pwv-data-3m-apap":	            {url:"$A/modules/p/pwv-data-apap.html",Table:"pwv-3m-apap",form_module:"pwv-form-3m-apap"},
        "pwv-form-3m-apap":	            {url:"$A/modules/p/pwv-form-apap.html",Table:"pwv-3m-apap"},
        "pwv2-data-3m-apap":	        {url:"$A/modules/p/pwv-data-apap.html",Table:"pwv2-3m-apap",form_module:"pwv2-form-3m-apap"},
        "pwv2-form-3m-apap":	        {url:"$A/modules/p/pwv-form-apap.html",Table:"pwv2-3m-apap"},
        
        "pressureapap-data-apap":       {url:"$A/modules/p/pressureapap-data-apap.html",Table:"pressureapap-apap",form_module:"pressureapap-form-apap"},
        "pressureapap-form-apap":	    {url:"$A/modules/p/pressureapap-form-apap.html",Table:"pressureapap-apap"},
        "pressurecpap-data-apap":       {url:"$A/modules/p/pressurecpap-data-apap.html",Table:"pressurecpap-apap",form_module:"pressurecpap-form-apap"},
        "pressurecpap-form-apap":	    {url:"$A/modules/p/pressurecpap-form-apap.html",Table:"pressurecpap-apap"},

        "physical-examination-data-apap":{url:"$A/modules/p/physical-examination-data-apap.html",Table:"physical-examination",form_module:"physical-examination-form-apap"},
        "physical-examination-form-apap":{url:"$A/modules/p/physical-examination-form-apap.html",Table:"physical-examination"},

        "randomisation-table-low-data-apap": {url:"$A/modules/r/randomisation-table-data-apap.html",Table:"apap-randomisation-low",form_module:"randomisation-table-low-form-apap"},
        "randomisation-table-low-form-apap": {url:"$A/modules/r/randomisation-table-form-apap.html",Table:"apap-randomisation-low"},
        "randomisation-table-high-data-apap":{url:"$A/modules/r/randomisation-table-data-apap.html",Table:"apap-randomisation-high",form_module:"randomisation-table-high-form-apap"},
        "randomisation-table-high-form-apap":{url:"$A/modules/r/randomisation-table-form-apap.html",Table:"apap-randomisation-high"},
        
        "social-history-data-apap":    	{url:"$A/modules/s/social-history-data-apap.html",Table:"social-history",form_module:"social-history-form-apap"},
        "social-history-form-apap":    	{url:"$A/modules/s/social-history-form-apap.html",Table:"social-history"},
        "spirometry-data-apap":      	{url:"$A/modules/s/spirometry-data-apap.html",Table:"spirometry-apap",form_module:"spirometry-form-apap"},
        "spirometry-form-apap":      	{url:"$A/modules/s/spirometry-form-apap.html",Table:"spirometry-apap"},
        "spirometry-data-1m-apap":     	{url:"$A/modules/s/spirometry-data-apap.html",Table:"spirometry-1m-apap",form_module:"spirometry-form-1m-apap"},
        "spirometry-form-1m-apap":     	{url:"$A/modules/s/spirometry-form-apap.html",Table:"spirometry-1m-apap"},
        "sri-data-apap":      	        {url:"$A/modules/s/sri-data-apap.html",Table:"sri-apap",form_module:"sri-form-apap"},
        "sri-form-apap":      	        {url:"$A/modules/s/sri-form-apap.html",Table:"sri-apap",task_name:"Visit 1 - Severe Respiratory Insufficiency Questionnaire"},
        "sri-data-3m-apap":             {url:"$A/modules/s/sri-data-apap.html",Table:"sri-3m-apap",form_module:"sri-form-3m-apap"},
        "sri-form-3m-apap":             {url:"$A/modules/s/sri-form-apap.html",Table:"sri-3m-apap",task_name:"3 Month - Severe Respiratory Insufficiency Questionnaire"},


    }
    for(m in modules){$vm.module_list[m]=modules[m];}
    var prefix=""
    for(m in modules){
        $vm.module_list[prefix+m].url=$vm.replace_url($vm.module_list[prefix+m].url);
    }
})();
