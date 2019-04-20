(function(){
    //-------------------------------------------------------------------------------------
    //generic
    var modules={
        "2-columns-contents": 			{url:"$A/modules/2/2-columns-contents.html",router:1},

        "about":  		  	  			        {url:"$A/modules/a/about.html",router:1},
        "about-vmiis":    			            {url:"$A/modules/a/about-vmiis.html",router:1},
        "autocomplete-data":  			        {url:"$A/modules/a/autocomplete-data.html",Table:"autocomplete",form_module:"autocomplete-form",router:1},
        "autocomplete-form":  			        {url:"$A/modules/a/autocomplete-form.html",Table:"autocomplete"},
        "a-basic-application-framework-index":  {url:"$A/modules/a/a-basic-application-framework/index.html"},
        "angularjs-hello-world":	            {url:"$A/modules/a/angularjs-hello-world.html",router:1},
        "accountant-list-data":  	            {url:"$A/modules/e/email-list-data.html",Table:"accountant-list",form_module:"accountant-list-form",router:1},
        "accountant-list-form":  	            {url:"$A/modules/e/email-list-form.html",Table:"accountant-list"},
        "bar-data":  	                        {url:"$A/modules/b/bar-data.html",Table:"bar",form_module:"bar-form",router:1},
        "bar-form":  	                        {url:"$A/modules/b/bar-form.html",Table:"bar"},
        "bar-chart":  	                        {url:"$A/modules/b/bar-chart.html",Table:"bar",router:1},
        "bubble":  		  	  			        {url:"$A/modules/b/bubble.html",router:1},
        "bubble-background-app":		        {url:"$A/modules/b/bubble-background/index.html"},
        "bookkeeping-app":  			        {url:"$A/modules/b/bookkeeping-app/index.html"},
        "bookkeeping-app-wapp":  		        {url:"$A/modules/b/bookkeeping-app-wapp/index.html"},
        "bookkeeping-workflow":  			    {url:"$A/modules/b/bookkeeping/home.html",router:1},
        "bookkeeping-panel":  			        {url:"$A/modules/b/bookkeeping-panel.html",router:1},
        "bookkeeping-home":  			        {url:"$A/modules/b/bookkeeping/home.html",router:1},
        "clinical-trials-data-entry": 	{url:"$A/modules/c/clinical-trials-data-entry.html"},
        "carousel":  		  			{url:"$A/modules/c/carousel.html",router:1},
        "checkbox-data":      			{url:"$A/modules/c/checkbox-data.html",Table:"checkbox",form_module:"checkbox-form",router:1},
        "checkbox-form":      			{url:"$A/modules/c/checkbox-form.html",Table:"checkbox"},
        "consent-data":  	  		    {url:"$A/modules/c/consent-data.html",Table:"consent",form_module:"consent-form"},
        "consent-form":  	  		    {url:"$A/modules/c/consent-form.html",Table:"consent"},
        "color-data":      	  			{url:"$A/modules/c/color-data.html",Table:"color",form_module:"color-form",router:1},
        "color-form":      	  			{url:"$A/modules/c/color-form.html",Table:"color"},
        "coming-soon": 		            {url:"$A/modules/u/under-construction.html",text:"Coming soon...",router:1},
        "contact-us-data":  			{url:"$A/modules/c/contact-us-data.html",Table:"ccontact-us-vm",form_module:"contact-us-form"},
        "contact-us-form":  			{url:"$A/modules/c/contact-us-form.html",Table:"ccontact-us-vm"},
        "contact-us-form-01":  			{url:"$A/modules/c/contact-us-form-01.html",Table:"ccontact-us-vm"},
        "contact-us-form-02":  			{url:"$A/modules/c/contact-us-form-02.html",Table:"ccontact-us-vm"},
        "contact-us-form-03":  			{url:"$A/modules/c/contact-us-form-03.html",Table:"ccontact-us-vm"},
        "contact-us-panel":  			{url:"$A/modules/c/contact-us-panel.html",Table:"ccontact-us-vm"},
        "contact-us-app":  			    {url:"$A/modules/c/contact-us/index.html"},
        "column-data":  	            {url:"$A/modules/c/column-data.html",Table:"column",form_module:"column-form",router:1},
        "column-form":  	            {url:"$A/modules/c/column-form.html",Table:"column"},
        "column-chart":  	            {url:"$A/modules/c/column-chart.html",Table:"column",router:1},
        "column-chart-group":           {url:"$A/modules/c/column-chart-group.html",Table:"column",router:1},
        "column-chart-stack":           {url:"$A/modules/c/column-chart-stack.html",Table:"column",router:1},
        "column-chart-panel":           {url:"$A/modules/c/column-chart-panel.html",Table:"column",form_module:"column-form",router:1},
        
        "client-data-wapp":             {url:"$A/modules/c/client-data-wapp.html",Table:"client-wapp",form_module:"client-form-wapp",router:1},
        "client-form-wapp":             {url:"$A/modules/c/client-form-wapp.html",Table:"client-wapp"},

        "doctor":      	 		 	    {url:"$A/modules/d/doctor.html",router:1},          
        "d-c-t-data":      	  			{url:"$A/modules/d/data-collection-template-data.html","App":"demo",Table:"template",form_module:"d-c-t-form",router:1},
        "d-c-t-form":      	 		 	{url:"$A/modules/d/data-collection-template-form.html","App":"demo",Table:"template"},
        "date-data":      	  			{url:"$A/modules/d/date-data.html",Table:"date-vm",form_module:"date-form",router:1},
        "date-form":      	 		 	{url:"$A/modules/d/date-form.html",Table:"date-vm"},          
        "dass-data":	 	            {url:"$A/modules/d/depression-anxiety-stress-scales-data.html",Table:"dass",form_module:"dass-form"},
        "dass-form":	 	            {url:"$A/modules/d/depression-anxiety-stress-scales-form.html",Table:"dass"},

        "document-data":	 	        {url:"$A/modules/d/document-data.html",Table:"document-demo",form_module:"document-form",router:1},
        "document-form":	 	        {url:"$A/modules/d/document-form.html",Table:"document-demo"},
        "document-panel":	 	        {url:"$A/modules/d/document-panel.html",Table:"document-demo",form_module:"document-form",router:1},

        "email-setup-data":      	  	{url:"$A/modules/e/email-setup-data.html",Table:"email-setup",form_module:"email-setup-form"},
        "email-setup-form":      	  	{url:"$A/modules/e/email-setup-form.html",Table:"email-setup"},         
        "enquiry-data":      	  		{url:"$A/modules/e/enquiry-data.html",Table:"vm-enquiry",form_module:"enquiry-form"},
        "enquiry-form":      	  		{url:"$A/modules/e/enquiry-form.html",Table:"vm-enquiry"},         
        "enquiry-app":      	  		{url:"$A/modules/e/enquiry/index.html"},         
        "event-data":      	  		    {url:"$A/modules/e/event-data.html",Table:"event-vm",form_module:"event-form"},
        "event-form":      	  		    {url:"$A/modules/e/event-form.html",Table:"event-vm"},         
        "event-daily":      	 	    {url:"$A/modules/e/event-daily.html",Table:"event-vm",router:1,
                                            event_form:"event-form"
                                        },         
        "event-monthly":      	 	    {url:"$A/modules/e/event-monthly.html",Table:"event-vm",router:1,
                                            event_daily:"event-daily",
                                            event_form:"event-form"
                                        },         
        "event-panel":      	 	    {url:"$A/modules/e/event-panel.html",Table:"event-vm",router:1,
                                            event_daily:"event-daily",
                                            form_module:"event-form"
                                        },         
        "event-calendar-app":  		    {url:"$A/modules/e/event-calendar/index.html"},

        "ffs-data":      	  			{url:"$A/modules/f/flinders-fatigue-scale-data.html",Table:"ffs",form_module:"ffs-form"},
        "ffs-form":      	  			{url:"$A/modules/f/flinders-fatigue-scale-form.html",Table:"ffs"},
        "file-data":      	  			{url:"$A/modules/f/file-data.html",Table:"file",form_module:"file-form",router:1},
        "file-form":      	  			{url:"$A/modules/f/file-form.html",Table:"file"},
        "fss-data":      	  			{url:"$A/modules/f/fatigue-severity-scale-data.html",Table:"fss",form_module:"fss-form"},
        "fss-form":      	  			{url:"$A/modules/f/fatigue-severity-scale-form.html",Table:"fss"},
        "form-maker":                   {url:"$A/modules/f/form-maker.html",router:1},
        "fountains-illumination":		{url:"$A/modules/f/fountains-illumination.html",router:1},
        "fountains-illumination-app":	{url:"$A/modules/f/fountains-illumination-background/index.html"},
        "frame":                        {url:"$A/modules/f/frame.html"},
        "form-text-input-fields":       {url:"$A/modules/f/form-text-input-fields.html",router:1},
        "form-sql-fields":              {url:"$A/modules/f/form-sql-fields.html",router:1},
        "fitness":                      {url:"$A/modules/f/fitness.html",router:1},
        "fitness-app":                  {url:"$A/modules/f/fitness/index.html"},
        "formio-data":                  {url:"$A/modules/f/formio-data.html",Table:"formio-vm",form_module:"formio-form",router:1},
        "formio-form":                  {url:"$A/modules/f/formio-form.html",Table:"formio-vm"},

        

        "home-woolcock": 		  		{url:"$A/modules/h/home-woolcock.html",router:1},
        "hello-world": 		  			{url:"$A/modules/h/hello-world.html",router:1},

        "incosact-data":   	  			{url:"$A/modules/i/incosact-data.html",Table:"incosact",form_module:"incosact-english-form",router:1},
        "incosact-english-form":  		{url:"$A/modules/i/incosact-english-form.html",Table:"incosact",router:1},
        "incosact-thanks-english":      {url:"$A/modules/i/incosact-thanks-english.html",router:1},
        "isi-data":      	  			{url:"$A/modules/i/insomnia-severity-index-data.html",Table:"isi",form_module:"isi-form"},
        "isi-form":      	  			{url:"$A/modules/i/insomnia-severity-index-form.html",Table:"isi"},


        "invoice-management-workflow":  {url:"$A/modules/i/invoice-management-workflow.html",router:1},
        "invoice-data": 	            {url:"$A/modules/i/invoice-data.html",Table:"invoice-vm",form_module:"invoice-form",router:1},
        "invoice-form": 	            {url:"$A/modules/i/invoice-form.html",Table:"invoice-vm",
                                            client_table:"client-wapp"
                                        },
        "invoice-print": 	            {url:"$A/modules/i/invoice-print.html",Table:"invoice-vm",
                                            client_table:"client-wapp"
                                        },
        "image-with-title-on-hover": 	                            {url:"$A/modules/i/image-with-title-on-hover.html",router:1},
        "image-and-title-with-scale-rotate-effect-on-hover": 	    {url:"$A/modules/i/image-and-title-with-scale-rotate-effect-on-hover.html",router:1},
        "image-with-title-and-subtitle-on-hover": 	                {url:"$A/modules/i/image-with-title-and-subtitle-on-hover.html",router:1},

        "layout-with-fixed-header-and-footer-index":                {url:"$A/modules/l/layout-with-fixed-header-and-footer/index.html"},
        "layout-with-fixed-header-and-scrollable-footer-index":     {url:"$A/modules/l/layout-with-fixed-header-and-scrollable-footer/index.html"},
        "layout-with-scrollable-header-and-footer-index":           {url:"$A/modules/l/layout-with-scrollable-header-and-footer/index.html"},
        "layout-with-side-nav-and-fixed-footer-index":              {url:"$A/modules/l/layout-with-side-nav-and-fixed-footer/index.html"},
        "long-page":  		  	 		                            {url:"$A/modules/l/long-page.html",router:1},

        "medical-history-wf-data":      {url:"$A/modules/m/medical-history-wf-data.html",Table:"medical-history-wf",form_module:"medical-history-wf-form"},
        "medical-history-wf-form":      {url:"$A/modules/m/medical-history-wf-form.html",Table:"medical-history-wf"},
        "medication-data":              {url:"$A/modules/m/medication-data.html",Table:"medication",form_module:"medication-form"},
        "medication-form":              {url:"$A/modules/m/medication-form.html",Table:"medication"},
        "medical-practitioners-data":  	{url:"$A/modules/m/medical-practitioners-data.html",Table:"vm-medical-practitioners",form_module:"medical-practitioners-form",router:1},
        "medical-practitioners-form":  	{url:"$A/modules/m/medical-practitioners-form.html",Table:"vm-medical-practitioners"},
        "medical-practitioner-app":     {url:"$A/modules/m/medical-practitioner/index.html"},

        "manager-list-data":  	        {url:"$A/modules/e/email-list-data.html",Table:"manager-list",form_module:"manager-list-form",router:1},
        "manager-list-form":  	        {url:"$A/modules/e/email-list-form.html",Table:"manager-list"},


        "notes":  		  	  			{url:"$A/modules/n/notes.html"},
        "nasa":  		  	  			{url:"$A/modules/n/nasa.html",router:1},
        "nasa-background-app":		    {url:"$A/modules/n/nasa-background/index.html"},
        "not-ready": 		            {url:"$A/modules/u/under-construction.html",text:"Not Ready",router:1},
        "nyan":  		  	  			{url:"$A/modules/n/nyan.html",router:1},
        "nyan-background-app":		    {url:"$A/modules/n/nyan-background/index.html"},

        "online-questionnaire-setup": 	    {url:"$A/modules/o/online-questionnaire-setup.html",Table:"participant"},
        

        "panel":    		  			{url:"$A/modules/p/panel.html",router:1},
        "panel-main-biomarkers-ii":     {url:"$A/modules/p/panel-biomarkers-ii/panel-main.html",router:1},
        
        "participant-data-biomarkers-ii":   {url:"$A/modules/p/participant-data-biomarkers-ii.html", Table:"T91000570",
                                                form_module:"participant-form-biomarkers-ii",
                                                panel_child:"panel-child--biomarkers-ii",
                                                online_questionnaire_setup:"online-questionnaire-setup"
                                            },
        "participant-form-biomarkers-ii":   {url:"$A/modules/p/participant-form-biomarkers-ii.html", Table:"T91000570"},



        "particle":  		  			{url:"$A/modules/p/particle.html",router:1},
        "particle-panel":  	  			{url:"$A/modules/p/particle-panel.html",router:1},
        "particle-background-app":      {url:"$A/modules/p/particle-background/index.html"},
        "prices":  		  	  			{url:"$A/modules/p/prices.html",router:1},
        "price-02":  		  	 		{url:"$A/modules/p/price-02.html",router:1},
        "psqi-data":                    {url:"$A/modules/p/pittsburgh-sleep-quality-index-data.html",Table:"psqi",form_module:"psqi-form"},
        "psqi-form":   			        {url:"$A/modules/p/pittsburgh-sleep-quality-index-form.html",Table:"psqi"},

        "purchase-order-workflow": {url:"$A/modules/p/purchase-order-workflow.html",router:1},
        "purchase-order-data-s": {url:"$A/modules/p/purchase-order-data-s.html",Table:"purchase-order",form_module:"purchase-order-form-s",router:1},
        "purchase-order-form-s": {url:"$A/modules/p/purchase-order-form-s.html",Table:"purchase-order",
                                        "manager_list_table":"manager-list",
                                        "accountant_list_table":"accountant-list",
                                        "email_to_manager":"purchase-order-email-to-manager"
                                    },

        "purchase-order-data-p1": {url:"$A/modules/p/purchase-order-data-p1.html",Table:"purchase-order",form_module:"purchase-order-form-p1",router:1},
        "purchase-order-form-p1": {url:"$A/modules/p/purchase-order-form-p1.html",Table:"purchase-order",
                                        "manager_list_table":"manager-list",
                                        "accountant_list_table":"accountant-list",
                                        "email_to_accountant":"purchase-order-email-to-accountant"
                                    },

        "purchase-order-data-p2": {url:"$A/modules/p/purchase-order-data-p2.html",Table:"purchase-order",form_module:"purchase-order-form-p2",router:1},
        "purchase-order-form-p2": {url:"$A/modules/p/purchase-order-form-p2.html",Table:"purchase-order",
                                        "manager_list_table":"manager-list",
                                        "accountant_list_table":"accountant-list",
                                        "email_to_requester":"purchase-order-email-to-requester"
                                    },
                                                                

        "purchase-order-email-to-manager":      {url:"$A/modules/p/purchase-order-email-to-manager.html",Table:"email-setup"},
        "purchase-order-email-to-accountant":   {url:"$A/modules/p/purchase-order-email-to-accountant.html",Table:"email-setup"},
        "purchase-order-email-to-requester":    {url:"$A/modules/p/purchase-order-email-to-requester.html",Table:"email-setup"},

        "purchase-order-request-app":           {url:"$A/modules/p/purchase-order-request/index.html"},
        "pie-data":  	            {url:"$A/modules/p/pie-data.html",Table:"pie",form_module:"pie-form",router:1},
        "pie-form":  	            {url:"$A/modules/p/pie-form.html",Table:"pie"},
        "pie-chart":  	            {url:"$A/modules/p/pie-chart.html",Table:"pie",router:1},
        "pie-chart-3d": 	        {url:"$A/modules/p/pie-chart-3d.html",Table:"pie",router:1},
        "pie-chart-donut": 	        {url:"$A/modules/p/pie-chart-donut.html",Table:"pie",router:1},

        "project-shq-data":         {
                                        url: "$A/modules/p/project-shq-data.html", Table: "astn-shq-project-20003481", form_module: "project-shq-form", router: 1,
                                        child_panel: "panel-main-shq-astn"
                                    },
        "project-shq-form":         { url: "$A/modules/p/project-shq-form.html", Table: "astn-shq-project-20003481" },

        
        "quest-panel":                  {url:"$A/modules/o/online-questionnaire-panel.html"},

        "radio-data":      	  			{url:"$A/modules/r/radio-data.html",Table:"radio",form_module:"radio-form",router:1},
        "radio-form":      	  			{url:"$A/modules/r/radio-form.html",Table:"radio"},
        "room-booking-workflow":  		{url:"$A/modules/r/room-booking-workflow.html",router:1},
        

        
        "reactjs-hello-world":                  {url:"$A/modules/r/reactjs-hello-world.html",router:1},
        "reactjs-tic-tac-toe-passing-value":    {url:"$A/modules/r/reactjs-tic-tac-toe-passing-value.html",router:1},
        "reactjs-tic-tac-toe-starter":          {url:"$A/modules/r/reactjs-tic-tac-toe-starter.html",router:1},
        
        "restaurant-app":    			        {url:"$A/modules/r/restaurant-app/index.html"},

        "sales-data":        			{url:"$A/modules/s/sales-data.html",Table:"sales-vm",form_module:"sales-form",router:1},
        "sales-form":        			{url:"$A/modules/s/sales-form.html",Table:"sales-vm"},
        "sales-item-data":       		{url:"$A/modules/s/sales-item-data.html",Table:"sales-item-vm",form_module:"sales-item-form",router:1},
        "sales-item-form":       		{url:"$A/modules/s/sales-item-form.html",Table:"sales-item-vm"},
        "sales-region-data":     		{url:"$A/modules/s/sales-region-data.html",Table:"sales-region-vm",form_module:"sales-region-form",router:1},
        "sales-region-form":     		{url:"$A/modules/s/sales-region-form.html",Table:"sales-region-vm"},
        "sales-rep-data":      			{url:"$A/modules/s/sales-rep-data.html",Table:"sales-rep-vm",form_module:"sales-rep-form",router:1},
        "sales-rep-form":      			{url:"$A/modules/s/sales-rep-form.html",Table:"sales-rep-vm"},
        "sales-monthly-aggregation-data":  {url:"$A/modules/s/sales-monthly-aggregation-data.html",Table:"sales-monthlt-aggegation-vm",form_module:"sales-monthly-aggregation-form",router:1},
        "sales-monthly-aggregation-form":  {url:"$A/modules/s/sales-monthly-aggregation-form.html",Table:"sales-monthlt-aggegation-vm",data_table:"sales-vm"},
        "sales-monthly-aggregation-chart": {url:"$A/modules/s/sales-monthly-aggregation-chart.html",Table:"sales-monthlt-aggegation-vm",router:1},

        "screen-failure":      			{url:"$A/modules/s/screen-failure-thank-you-page.html",router:1},
        "select-data":        			{url:"$A/modules/s/select-data.html",Table:"select",form_module:"select-form",router:1},
        "select-form":        			{url:"$A/modules/s/select-form.html",Table:"select"},
        "services":  	  	  			{url:"$A/modules/s/services.html",router:1},
        "short-page":  		  	 		{url:"$A/modules/s/short-page.html",router:1},
        "snow":  		  	  			{url:"$A/modules/s/snow.html",router:1},
        "snow-background-app":		    {url:"$A/modules/s/snow-background/index.html"},
        "survey-data":      	  		{url:"$A/modules/s/survey-data.html",Table:"survey-vm",form_module:"survey-form"},
        "survey-form":      	  		{url:"$A/modules/s/survey-form.html",Table:"survey-vm"},         
        "survey-panel":      	  		{url:"$A/modules/s/survey-panel.html",Table:"survey-vm"},         
        "survey-app":      	  		    {url:"$A/modules/s/survey/index.html"},         
        "success":  		  	  		{url:"$A/modules/s/success.html",router:1},
        "success-app":  		  	  	{url:"$A/modules/s/success/index.html"},
        "simple-app":  		  	  	    {url:"$A/modules/s/simple/index.html"},
        "surveyjs-data":                {url:"$A/modules/s/surveyjs-data.html",Table:"surveyjs-vm",form_module:"surveyjs-form",router:1},
        "surveyjs-form":                {url:"$A/modules/s/surveyjs-form.html",Table:"surveyjs-vm"},

        "text-input-data":    			{url:"$A/modules/t/text-input-data.html",Table:"text-input",form_module:"text-input-form",router:1},
        "text-input-form":    			{url:"$A/modules/t/text-input-form.html",Table:"text-input"},
        "tom-knowledge-base-data":    	{url:"https://www.tomliweb.com/modules/t/tom-knowledge-base-data.html",Table:"tom-knowledge-base",form_module:"tom-knowledge-base-form",router:1},
        "tom-knowledge-base-form":    	{url:"https://www.tomliweb.com/modules/t/tom-knowledge-base-form.html",Table:"tom-knowledge-base"},
        "text-input-form":    			{url:"$A/modules/t/text-input-form.html",Table:"text-input"},
        
        "trainers":  		  			{url:"$A/modules/t/trainers.html",router:1},
        "template-001":  		  		{url:"$A/modules/t/template-001/index.html"},
        "template-002":  		  		{url:"$A/modules/t/template-002/index.html"},
        "template-003":  		  		{url:"$A/modules/t/template-003/index.html"},
        "template-004":  		  		{url:"$A/modules/t/template-004/index.html"},
        "template-005":  		  		{url:"$A/modules/t/template-005/index.html"},
        "template-006":  		  		{url:"$A/modules/t/template-006/index.html"},
        "template-007":  		  		{url:"$A/modules/t/template-007/index.html"},
        "template-008":  		  		{url:"$A/modules/t/template-008/index.html"},
        "template-009":  		  		{url:"$A/modules/t/template-009/index.html"},
        "template-010":  		  		{url:"$A/modules/t/template-010/index.html"},
        

        "under-construction": 		    {url:"$A/modules/u/under-construction.html",text:"Under Construction",router:1},

        "visit-date-data":    			{url:"$A/modules/v/visit-date-data.html",Table:"visit-date",form_module:"visit-date-form"},
        "visit-date-form":    			{url:"$A/modules/v/visit-date-form.html",Table:"visit-date"},
        
        "woolcock-template-app":		{url:"$A/modules/w/woolcock-template/index.html"},
        
        "portfolio":	                {url:"$A/modules/c/components/portfolio.html",router:1},
        "structure":	                {url:"$A/modules/c/components/structure.html",router:1},
        "c_services":  	  	  			{url:"$A/modules/c/components/services.html",router:1},

        "food-data":    			    {url:"$A/modules/f/food-data.html",Table:"food-demo",form_module:"food-form"},
        "food-form":    			    {url:"$A/modules/f/food-form.html",Table:"food-demo"},
        "food-special":    			    {url:"$A/modules/f/food-special.html",form_module:"food-form",router:1},
        
        "first-aid-officer-data":    	{url:"$A/modules/f/first-aid-officer-data.html",Table:"first-aid-officer-demo",form_module:"first-aid-officer-form",router:1},
        "first-aid-officer-form":    	{url:"$A/modules/f/first-aid-officer-form.html",Table:"first-aid-officer-demo"},
        "first-aid-officer-panel":      {url:"$A/modules/f/first-aid-officer-panel.html",router:1},
        "flat-trial":    			    {url:"$A/modules/f/flat-trial.html",router:1},
        "flat-trial-home": 			    {url:"$A/modules/f/flat-trial-home.html",router:1},
        "aaxsys-panel":                 {url:"$A/modules/a/aaxsys-panel.html",router:1},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
    //-------------------------------------------------------------------------------------
    //bookkeeping
    var modules={
        "predefined-transaction-item-data": {url:"$A/modules/b/bookkeeping/predefined-transaction-item-data.html",Table:"predefined-transaction-item",form_module:"predefined-transaction-item-form"},
        "predefined-transaction-item-form": {url:"$A/modules/b/bookkeeping/predefined-transaction-item-form.html",Table:"predefined-transaction-item"},
        
        "transaction-y-q-tax-return-data":  {url:"$A/modules/b/bookkeeping/transaction-year-quarter-tax-return-data.html",Table:"transaction",form_module:"transaction-form",router:1},
        "transaction-y-q-bas-data":    		{url:"$A/modules/b/bookkeeping/transaction-year-quarter-bas-data.html",Table:"transaction",form_module:"transaction-form",router:1},
        "transaction-y-q-data":    		    {url:"$A/modules/b/bookkeeping/transaction-year-quarter-data.html",Table:"transaction",form_module:"transaction-form",router:1},
        
        "transaction-bas-data":   		    {url:"$A/modules/b/bookkeeping/transaction-bas-data.html",Table:"transaction",form_module:"transaction-form",router:1},
        "transaction-tax-return-data":      {url:"$A/modules/b/bookkeeping/transaction-tax-return-data.html",Table:"transaction",form_module:"transaction-form",router:1},
        "transaction-data":    			    {url:"$A/modules/b/bookkeeping/transaction-data.html",Table:"transaction",form_module:"transaction-form",router:1},
        "transaction-form":    			    {url:"$A/modules/b/bookkeeping/transaction-form.html",Table:"transaction",
                                                item_table:'predefined-transaction-item'
                                            },
        "ato-bas-quarter-aggregation-data": {url:"$A/modules/b/bookkeeping/ato-bas-quarter-aggregation-data.html",Table:"ato-bas-quarter-aggregation",transaction_table:'transaction',form_module:"ato-bas-quarter-aggregation-form",router:1},
        "ato-bas-quarter-aggregation-form": {url:"$A/modules/b/bookkeeping/ato-bas-quarter-aggregation-form.html",Table:"ato-bas-quarter-aggregation",transaction_table:'transaction'},
        "income-expense-month-aggregation-data":{url:"$A/modules/b/bookkeeping/income-expense-month-aggregation-data.html",Table:"income-expense-month-aggregation", transaction_table:'transaction',form_module:"income-expense-month-aggregation-form",router:1},
        "income-expense-month-aggregation-form":{url:"$A/modules/b/bookkeeping/income-expense-month-aggregation-form.html",Table:"income-expense-month-aggregation", transaction_table:'transaction'},
        "item-month-aggregation-data":          {url:"$A/modules/b/bookkeeping/item-month-aggregation-data.html",Table:"item-month-aggregation", transaction_table:'transaction',form_module:"item-month-aggregation-form",router:1},
        "item-month-aggregation-form":          {url:"$A/modules/b/bookkeeping/item-month-aggregation-form.html",Table:"item-month-aggregation", transaction_table:'transaction'},
        "income-expense-chart":                 {url:"$A/modules/b/bookkeeping/income-expense-chart.html",Table:"income-expense-month-aggregation",router:1},
        "item-chart":                           {url:"$A/modules/b/bookkeeping/item-chart.html",Table:"item-month-aggregation",router:1},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
    //-------------------------------------------------------------------------------------
    //wapp bookkeeping
    var modules={
        "predefined-transaction-item-data": {url:"$A/modules/b/bookkeeping/predefined-transaction-item-data.html",Table:"predefined-transaction-item-wappsystem",form_module:"predefined-transaction-item-form"},
        "predefined-transaction-item-form": {url:"$A/modules/b/bookkeeping/predefined-transaction-item-form.html",Table:"predefined-transaction-item-wappsystem"},
        
        "transaction-y-q-tax-return-data":  {url:"$A/modules/b/bookkeeping/transaction-year-quarter-tax-return-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        "transaction-y-q-bas-data":    		{url:"$A/modules/b/bookkeeping/transaction-year-quarter-bas-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        "transaction-y-q-data":    		    {url:"$A/modules/b/bookkeeping/transaction-year-quarter-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        
        "transaction-bas-data":   		    {url:"$A/modules/b/bookkeeping/transaction-bas-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        "transaction-tax-return-data":      {url:"$A/modules/b/bookkeeping/transaction-tax-return-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        "transaction-data":    			    {url:"$A/modules/b/bookkeeping/transaction-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        "transaction-form":    			    {url:"$A/modules/b/bookkeeping/transaction-form.html",Table:"transaction-wappsystem",
                                                item_table:'predefined-transaction-item-wappsystem'
                                            },
        "ato-bas-quarter-aggregation-data": {url:"$A/modules/b/bookkeeping/ato-bas-quarter-aggregation-data.html",Table:"ato-bas-quarter-aggregation-wappsystem",transaction_table:'transaction-wappsystem',form_module:"ato-bas-quarter-aggregation-form",router:1},
        "ato-bas-quarter-aggregation-form": {url:"$A/modules/b/bookkeeping/ato-bas-quarter-aggregation-form.html",Table:"ato-bas-quarter-aggregation-wappsystem",transaction_table:'transaction-wappsystem'},
        "income-expense-month-aggregation-data":{url:"$A/modules/b/bookkeeping/income-expense-month-aggregation-data.html",Table:"income-expense-month-aggregation-wappsystem", transaction_table:'transaction-wappsystem',form_module:"income-expense-month-aggregation-form",router:1},
        "income-expense-month-aggregation-form":{url:"$A/modules/b/bookkeeping/income-expense-month-aggregation-form.html",Table:"income-expense-month-aggregation-wappsystem", transaction_table:'transaction-wappsystem'},
        "item-month-aggregation-data":          {url:"$A/modules/b/bookkeeping/item-month-aggregation-data.html",Table:"item-month-aggregation-wappsystem", transaction_table:'transaction-wappsystem',form_module:"item-month-aggregation-form",router:1},
        "item-month-aggregation-form":          {url:"$A/modules/b/bookkeeping/item-month-aggregation-form.html",Table:"item-month-aggregation-wappsystem", transaction_table:'transaction-wappsystem'},
        "income-expense-chart":                 {url:"$A/modules/b/bookkeeping/income-expense-chart.html",Table:"income-expense-month-aggregation-wappsystem",router:1},
        "item-chart":                           {url:"$A/modules/b/bookkeeping/item-chart.html",Table:"item-month-aggregation-wappsystem",router:1},
    }
    var prefix="wapp-bookkeeping-"
    for(m in modules){
        $vm.module_list[prefix+m]=modules[m];
        if($vm.module_list[prefix+m].form_module!=undefined)  $vm.module_list[prefix+m].form_module=prefix+$vm.module_list[prefix+m].form_module;
    }
    //-------------------------------------------------------------------------------------
    //vmautomation bookkeeping
    var modules={
        "predefined-transaction-item-data": {url:"$A/modules/b/bookkeeping/predefined-transaction-item-data.html",Table:"predefined-transaction-item-vmautomation",form_module:"predefined-transaction-item-form"},
        "predefined-transaction-item-form": {url:"$A/modules/b/bookkeeping/predefined-transaction-item-form.html",Table:"predefined-transaction-item-vmautomation"},
        
        "transaction-y-q-tax-return-data":  {url:"$A/modules/b/bookkeeping/transaction-year-quarter-tax-return-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        "transaction-y-q-bas-data":    		{url:"$A/modules/b/bookkeeping/transaction-year-quarter-bas-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        "transaction-y-q-data":    		    {url:"$A/modules/b/bookkeeping/transaction-year-quarter-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        
        "transaction-bas-data":   		    {url:"$A/modules/b/bookkeeping/transaction-bas-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        "transaction-tax-return-data":      {url:"$A/modules/b/bookkeeping/transaction-tax-return-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        "transaction-data":    			    {url:"$A/modules/b/bookkeeping/transaction-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        "transaction-form":    			    {url:"$A/modules/b/bookkeeping/transaction-form.html",Table:"transaction-vmautomation",
                                                item_table:'predefined-transaction-item-vmautomation'
                                            },
        "ato-bas-quarter-aggregation-data": {url:"$A/modules/b/bookkeeping/ato-bas-quarter-aggregation-data.html",Table:"ato-bas-quarter-aggregation-vmautomation",transaction_table:'transaction-vmautomation',form_module:"ato-bas-quarter-aggregation-form",router:1},
        "ato-bas-quarter-aggregation-form": {url:"$A/modules/b/bookkeeping/ato-bas-quarter-aggregation-form.html",Table:"ato-bas-quarter-aggregation-vmautomation",transaction_table:'transaction-vmautomation'},
        "income-expense-month-aggregation-data":{url:"$A/modules/b/bookkeeping/income-expense-month-aggregation-data.html",Table:"income-expense-month-aggregation-vmautomation", transaction_table:'transaction-vmautomation',form_module:"income-expense-month-aggregation-form",router:1},
        "income-expense-month-aggregation-form":{url:"$A/modules/b/bookkeeping/income-expense-month-aggregation-form.html",Table:"income-expense-month-aggregation-vmautomation", transaction_table:'transaction-vmautomation'},
        "item-month-aggregation-data":          {url:"$A/modules/b/bookkeeping/item-month-aggregation-data.html",Table:"item-month-aggregation-vmautomation", transaction_table:'transaction-vmautomation',form_module:"item-month-aggregation-form",router:1},
        "item-month-aggregation-form":          {url:"$A/modules/b/bookkeeping/item-month-aggregation-form.html",Table:"item-month-aggregation-vmautomation", transaction_table:'transaction-vmautomation'},
        "income-expense-chart":                 {url:"$A/modules/b/bookkeeping/income-expense-chart.html",Table:"income-expense-month-aggregation-vmautomation",router:1},
        "item-chart":                           {url:"$A/modules/b/bookkeeping/item-chart.html",Table:"item-month-aggregation-vmautomation",router:1},
    }
    var prefix="vmautomation-bookkeeping-"
    for(m in modules){
        $vm.module_list[prefix+m]=modules[m];
        if($vm.module_list[prefix+m].form_module!=undefined)  $vm.module_list[prefix+m].form_module=prefix+$vm.module_list[prefix+m].form_module;
    }
    //-------------------------------------------------------------------------------------
    //car booking
    var modules={
        "car-booking-record-data":    	{url:"$A/modules/c/car-booking-record-data.html",Table:"car-booking-record",form_module:"car-booking-record-form",router:1},
        "car-booking-record-form":    	{url:"$A/modules/c/car-booking-record-form.html",Table:"car-booking-record"},
        "car-data":      	  			{url:"$A/modules/c/car-data.html",Table:"car",form_module:"car-form",router:1},
        "car-form":      	  			{url:"$A/modules/c/car-form.html",Table:"car"},
        "car-booking":   			    {url:"$A/modules/c/car-booking.html",Table:"car","booking_form":"car-booking-record-form",router:1},
        "car-booking-calendar": 	    {url:"$A/modules/c/car-booking-calendar.html",Table:"car-booking-record",
                                            "booking":"car-booking","booking_form":"car-booking-record-form",router:1},
        "car-booking-app":   			{url:"$A/modules/c/car-booking/index.html"},
    }
    for(m in modules) $vm.module_list[m]=modules[m]; 
    //-------------------------------------------------------------------------------------
    //room booking
    var modules={
        "car-booking-record-data":    	{url:"$A/modules/c/car-booking-record-data.html",Table:"car-booking-record",form_module:"car-booking-record-form",router:1},
        "car-booking-record-form":    	{url:"$A/modules/c/car-booking-record-form.html",Table:"car-booking-record"},
        "car-data":      	  			{url:"$A/modules/c/car-data.html",Table:"car",form_module:"car-form",router:1},
        "car-form":      	  			{url:"$A/modules/c/car-form.html",Table:"car"},
        "car-booking":   			    {url:"$A/modules/c/car-booking.html",Table:"car","booking_form":"car-booking-record-form",router:1},
        "car-booking-calendar": 	    {url:"$A/modules/c/car-booking-calendar.html",Table:"car-booking-record",
                                            "booking":"car-booking","booking_form":"car-booking-record-form",router:1},
        "car-booking-app":   			{url:"$A/modules/c/car-booking/index.html"},
    }
    for(m in modules) $vm.module_list[m]=modules[m];
    //-------------------------------------------------------------------------------------
    //equipment booking
    var modules={
        "equipment-booking-record-data":   	{url:"$A/modules/e/equipment-booking-record-data.html",Table:"equipment-booking-record",form_module:"equipment-booking-record-form",router:1},
        "equipment-booking-record-form":   	{url:"$A/modules/e/equipment-booking-record-form.html",Table:"equipment-booking-record"},
        "equipment-data":      	  			{url:"$A/modules/e/equipment-data.html",Table:"equipment",form_module:"equipment-form",router:1},
        "equipment-form":      	  			{url:"$A/modules/e/equipment-form.html",Table:"equipment"},
        "equipment-booking":   			    {url:"$A/modules/e/equipment-booking.html",Table:"equipment","booking_form":"equipment-booking-record-form",router:1},
        "equipment-booking-calendar": 	    {url:"$A/modules/e/equipment-booking-calendar.html",Table:"equipment-booking-record",
                                                "booking":"equipment-booking","booking_form":"equipment-booking-record-form",router:1},
        "equipment-booking-app":   			{url:"$A/modules/e/equipment-booking/index.html"},
    }
    for(m in modules) $vm.module_list[m]=modules[m];
    //-------------------------------------------------------------------------------------
    //clinical trials
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
        
        "nback1-data":    	                {url:"$A/modules/c/clinical-trials/tasks/nback1-data.html",Table:"nback1-demo", form_module:"nback1-form",game_module:"nback1-game",router:1},
        "nback1-form":    	                {url:"$A/modules/c/clinical-trials/tasks/nback1-form.html",Table:"nback1-demo"},
        "nback1-game":    	                {url:"$A/modules/c/clinical-trials/tasks/nback1-game.html",Table:"nback1-demo"},
        
        "dsst-data":    	                {url:"$A/modules/c/clinical-trials/tasks/dsst-data.html",Table:"dsst-demo", form_module:"dsst-form",game_module:"dsst-game",router:1},
        "dsst-form":    	                {url:"$A/modules/c/clinical-trials/tasks/dsst-form.html",Table:"dsst-demo"},
        "dsst-game":    	                {url:"$A/modules/c/clinical-trials/tasks/dsst-game.html",Table:"dsst-demo"},
    }
    var prefix="clinical-trials-"
    for(m in modules){
        $vm.module_list[prefix+m]=modules[m];
        $vm.module_list[prefix+m].prefix=prefix;
        if($vm.module_list[prefix+m].form_module!=undefined)  $vm.module_list[prefix+m].form_module=prefix+$vm.module_list[prefix+m].form_module;
        if($vm.module_list[prefix+m].game_module!=undefined)  $vm.module_list[prefix+m].game_module=prefix+$vm.module_list[prefix+m].game_module;
    }
    //-------------------------------------------------------------------------------------
    //apap
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
    for(m in modules) $vm.module_list[m]=modules[m];
    //-------------------------------------------------------------------------------------
    //biomakers-ii
    var modules={
        
        //the following are all biomarkers-ii-tasks
        "visit-dates-data":	  		                    {url:"$A/modules/b/biomarkers-ii-tasks/visit-dates-data.html",Table:"91000581",form_module:"visit-dates-form"},
        "visit-dates-form":	  		                    {url:"$A/modules/b/biomarkers-ii-tasks/visit-dates-form.html",Table:"91000581"},

        // Column 2, Screening visit
        "in-exclusion-criteria-data":                   {url:"$A/modules/b/biomarkers-ii-tasks/in-exclusion-criteria-data.html",Table:"91000582",form_module:"in-exclusion-criteria-form"},
        "in-exclusion-criteria-form":	 	            {url:"$A/modules/b/biomarkers-ii-tasks/in-exclusion-criteria-form.html",Table:"91000582"},
        "anthropometry-data":	                        {url:"$A/modules/b/biomarkers-ii-tasks/anthropometry-data.html",Table:"91000572",form_module:"anthropometry-form"},
        "anthropometry-form":	 	                    {url:"$A/modules/b/biomarkers-ii-tasks/anthropometry-form.html",Table:"91000572"},
        "education-data":	                            {url:"$A/modules/b/biomarkers-ii-tasks/education-data.html",Table:"91000583",form_module:"education-form"},
        "education-form":	 	                        {url:"$A/modules/b/biomarkers-ii-tasks/education-form.html",Table:"91000583"},
        // Column 2, Baseline psychometry
        "state-trait-anxiety-inventory-data":           {url:"$A/modules/b/biomarkers-ii-tasks/state-trait-anxiety-inventory-data.html",Table:"91000579",form_module:"state-trait-anxiety-inventory-form"},
        "state-trait-anxiety-inventory-form":           {url:"$A/modules/b/biomarkers-ii-tasks/state-trait-anxiety-inventory-form.html",Table:"91000579"},
        "thermoregulatory-index-data":                  {url:"$A/modules/b/biomarkers-ii-tasks/thermoregulatory-index-data.html",Table:"91000580",form_module:"thermoregulatory-index-form"},
        "thermoregulatory-index-form":                  {url:"$A/modules/b/biomarkers-ii-tasks/thermoregulatory-index-form.html",Table:"91000580"},
        "driving-accident-history-data":                {url:"$A/modules/b/biomarkers-ii-tasks/driving-accident-history-data.html",Table:"91000575",form_module:"driving-accident-history-form"},
        "driving-accident-history-form":                {url:"$A/modules/b/biomarkers-ii-tasks/driving-accident-history-form.html",Table:"91000575"},
        
        // Column 3, Ambulatory week
        "sleep-diary-d1-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000600",form_module:"sleep-diary-d1-form"},
        "sleep-diary-d1-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000600",task_name:"Sleep Diary - day 1, fill out in the morning"},
        "sleep-diary-d2-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000601",form_module:"sleep-diary-d2-form"},
        "sleep-diary-d2-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000601",task_name:"Sleep Diary - day 2, fill out in the morning"},
        "sleep-diary-d3-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000602",form_module:"sleep-diary-d3-form"},
        "sleep-diary-d3-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000602",task_name:"Sleep Diary - day 3, fill out in the morning"},
        "sleep-diary-d4-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000603",form_module:"sleep-diary-d4-form"},
        "sleep-diary-d4-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000603",task_name:"Sleep Diary - day 4, fill out in the morning"},
        "sleep-diary-d5-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000604",form_module:"sleep-diary-d5-form"},
        "sleep-diary-d5-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000604",task_name:"Sleep Diary - day 5, fill out in the morning"},
        "sleep-diary-d6-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000605",form_module:"sleep-diary-d6-form"},
        "sleep-diary-d6-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000605",task_name:"Sleep Diary - day 6, fill out in the morning"},
        "sleep-diary-d7-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000606",form_module:"sleep-diary-d7-form"},
        "sleep-diary-d7-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000606",task_name:"Sleep Diary - day 7, fill out in the morning"},
        "sleep-diary-d8-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000607",form_module:"sleep-diary-d8-form"},
        "sleep-diary-d8-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000607",task_name:"Sleep Diary - day 8, fill out in the morning"},
        "day-diary-d1-data":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000608",form_module:"day-diary-d1-form"},
        "day-diary-d1-form":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000608",task_name:"Day Diary - day 1, fill out in the evening",router:1},
        "day-diary-d2-data":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000609",form_module:"day-diary-d2-form"},
        "day-diary-d2-form":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000609",task_name:"Day Diary - day 2, fill out in the evening"},
        "day-diary-d3-data":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000610",form_module:"day-diary-d3-form"},
        "day-diary-d3-form":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000610",task_name:"Day Diary - day 3, fill out in the evening"},
        "day-diary-d4-data":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000611",form_module:"day-diary-d4-form"},
        "day-diary-d4-form":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000611",task_name:"Day Diary - day 4, fill out in the evening"},
        "day-diary-d5-data":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000612",form_module:"day-diary-d5-form"},
        "day-diary-d5-form":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000612",task_name:"Day Diary - day 5, fill out in the evening"},
        "day-diary-d6-data":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000613",form_module:"day-diary-d6-form"},
        "day-diary-d6-form":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000613",task_name:"Day Diary - day 6, fill out in the evening"},
        "day-diary-d7-data":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000614",form_module:"day-diary-d7-form"},
        "day-diary-d7-form":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000614",task_name:"Day Diary - day 7, fill out in the evening"},
        "actigraphy-ambulatory-data":                   {url:"$A/modules/b/biomarkers-ii-tasks/actigraphy-data.html",Table:"91000592",form_module:"actigraphy-ambulatory-form"},
        "actigraphy-ambulatory-form":                   {url:"$A/modules/b/biomarkers-ii-tasks/actigraphy-form.html",Table:"91000592"},
        
        // Column 4, Experimental visit
        "psg-evening-questionnaire-data":               {url:"$A/modules/b/biomarkers-ii-tasks/psg-evening-questionnaire-data.html",Table:"91000586",form_module:"psg-evening-questionnaire-form"},
        "psg-evening-questionnaire-form":               {url:"$A/modules/b/biomarkers-ii-tasks/psg-evening-questionnaire-form.html",Table:"91000586"},
        "psg-300-data":                                 {url:"$A/modules/b/biomarkers-ii-tasks/psg-300-data.html",Table:"91000591",form_module:'psg-300-form'},
        "psg-300-form":                                 {url:"$A/modules/b/biomarkers-ii-tasks/psg-300-form.html",Table:"91000591"},
        "actigraphy-laboratory-data":                   {url:"$A/modules/b/biomarkers-ii-tasks/actigraphy-data.html",Table:"91000593",form_module:"actigraphy-laboratory-form"},
        "actigraphy-laboratory-form":                   {url:"$A/modules/b/biomarkers-ii-tasks/actigraphy-form.html",Table:"91000593"},
        "psg-morning-questionnaire-data":               {url:"$A/modules/b/biomarkers-ii-tasks/psg-morning-questionnaire-data.html",Table:"91000587",form_module:"psg-morning-questionnaire-form"},
        "psg-morning-questionnaire-form":               {url:"$A/modules/b/biomarkers-ii-tasks/psg-morning-questionnaire-form.html",Table:"91000587"},
        "habitual-bedtimes-data":                       {url:"$A/modules/b/biomarkers-ii-tasks/habitual-bedtimes-data.html",Table:"91000588",form_module:"habitual-bedtimes-form"},
        "habitual-bedtimes-form":                       {url:"$A/modules/b/biomarkers-ii-tasks/habitual-bedtimes-form.html",Table:"91000588"},
        "karolinska-sleepiness-scale-data":             {url:"$A/modules/b/biomarkers-ii-tasks/karolinska-sleepiness-scale-data.html",Table:"91000589",form_module:"karolinska-sleepiness-scale-form"},
        "karolinska-sleepiness-scale-form":             {url:"$A/modules/b/biomarkers-ii-tasks/karolinska-sleepiness-scale-form.html",Table:"91000589"},
        "post-test-self-assessment-data":               {url:"$A/modules/b/biomarkers-ii-tasks/post-test-self-assessment-data.html",Table:"91000590",form_module:"post-test-self-assessment-form"},
        "post-test-self-assessment-form":               {url:"$A/modules/b/biomarkers-ii-tasks/post-test-self-assessment-form.html",Table:"91000590"},
        
        // Column 4, tasks
        "pvt-data":                                     {url:"$A/modules/b/biomarkers-ii-tasks/pvt-data.html",Table:"91000591",form_module:'pvt-form'},
        "pvt-form":                                     {url:"$A/modules/b/biomarkers-ii-tasks/pvt-form.html",Table:"91000591"},
        "choice-reaction-time-data":                    {url:"$A/modules/b/biomarkers-ii-tasks/choice-reaction-time-data.html",Table:"91000594",form_module:'choice-reaction-time-form'},
        "choice-reaction-time-form":                    {url:"$A/modules/b/biomarkers-ii-tasks/choice-reaction-time-form.html",Table:"91000594"},
        "karolinska-drowsiness-test-data":              {url:"$A/modules/b/biomarkers-ii-tasks/karolinska-drowsiness-test-data.html",Table:"91000595",form_module:'karolinska-drowsiness-test-form'},
        "karolinska-drowsiness-test-form":              {url:"$A/modules/b/biomarkers-ii-tasks/karolinska-drowsiness-test-form.html",Table:"91000595"},
        "maintenance-wakefulness-test-data":            {url:"$A/modules/b/biomarkers-ii-tasks/maintenance-wakefulness-test-data.html",Table:"91000596",form_module:'maintenance-wakefulness-test-form'},
        "maintenance-wakefulness-test-form":            {url:"$A/modules/b/biomarkers-ii-tasks/maintenance-wakefulness-test-form.html",Table:"91000596"},
        
    }
    var prefix="biomarkers-ii-"
    for(m in modules){
        $vm.module_list[prefix+m]=modules[m];
        $vm.module_list[prefix+m].prefix=prefix;
        if($vm.module_list[prefix+m].form_module!=undefined)  $vm.module_list[prefix+m].form_module=prefix+$vm.module_list[prefix+m].form_module;
        if($vm.module_list[prefix+m].game_module!=undefined)  $vm.module_list[prefix+m].game_module=prefix+$vm.module_list[prefix+m].game_module;
    }
    //-------------------------------------------------------------------------------------
    //isleephealth
    var modules = {
        "appointment-workflow": { url: "$A/modules/i/isleephealth/appointment-workflow.html",router:1},
        "appointment-data":     { url: "$A/modules/i/isleephealth/appointment-data.html", Table: "appointment", form_module: "appointment-form",router:1},
        "appointment-form":     { url: "$A/modules/i/isleephealth/appointment-form.html", Table: "appointment"},
    }
    var prefix="isleephealth-";
    for(m in modules){
        $vm.module_list[prefix+m]=modules[m];
        $vm.module_list[prefix+m].prefix=prefix;
        if($vm.module_list[prefix+m].form_module!=undefined)  $vm.module_list[prefix+m].form_module=prefix+$vm.module_list[prefix+m].form_module;
    }
    //-------------------------------------------------------------------------------------
    //astn
    var modules = {
        "panel-main-shq-astn": { url: "$A/modules/panel-main-shq.html"},
        "panel-child-shq-astn": { url: "$A/modules/panel-child-shq.html" },

        "project-shq-data": {
            url: "$A/modules/project-shq-data.html", Table: "astn-shq-project-20003481", form_module: "project-shq-form", router: 1,
            child_panel: "panel-main-shq-astn"
        },
        "project-shq-form": { url: "$A/modules/project-shq-form.html", Table: "astn-shq-project-20003481" },

        "participant-shq-data": {
            url: "$A//modules/participant-shq-data.html", Table: "astn-shq-participant-20002391", form_module: "participant-shq-form",
            child_panel: "panel-child-shq-astn",
            questionnaire_setup: "online-questionnaire-setup-shq-astn",
            online_questionnaire: "online-questionnaire-app-shq-astn",
            participant_id: { field1: "Local_ID", field2: "Initials" }
        },
        "participant-shq-form": { url: "$A//modules/participant-shq-form.html", Table: "astn-shq-participant-20002391" },

        "online-questionnaire-setup-shq-astn": { url: "$A/modules/online-questionnaire-setup.html", Table: "astn-shq-participant-20002391" },
        "online-questionnaire-app-shq-astn": { url: "$A/online-questionnaire/index.html" },

        "notes": { url: "$A/modules/notes.html" },

        "consent-astn-data": { url: "$A/modules/consent-astn-data.html", Table: "consent-astn-20002423", form_module: "consent-astn-form" },
        "consent-astn-form": { url: "$A/modules/consent-astn-form.html", Table: "consent-astn-20002423", task_name:"Consent" },
        "background-information-astn-data": { url: "$A/modules/background-information-astn-data.html", Table: "background-information-astn-20002400", form_module: "background-information-astn-form" },
        "background-information-astn-form": { url: "$A/modules/background-information-astn-form.html", Table: "background-information-astn-20002400", task_name:"Background Information" },
        "general-astn-data": { url: "$A/modules/general-astn-data.html", Table: "general-astn-20002401", form_module: "general-astn-form" },
        "general-astn-form": { url: "$A/modules/general-astn-form.html", Table: "general-astn-20002401", task_name:"General" },
        "ethnicity-self-astn-data": { url: "$A/modules/ethnicity-self-astn-data.html", Table: "ethnicity-self-astn-20002402", form_module: "ethnicity-self-astn-form" },
        "ethnicity-self-astn-form": { url: "$A/modules/ethnicity-self-astn-form.html", Table: "ethnicity-self-astn-20002402", task_name:"Ethnicity" },
        "lifestyle-astn-data": { url: "$A/modules/lifestyle-astn-data.html", Table: "lifestyle-astn-20002403", form_module: "lifestyle-astn-form" },
        "lifestyle-astn-form": { url: "$A/modules/lifestyle-astn-form.html", Table: "lifestyle-astn-20002403", task_name:"Lifestyle" },
        "medical-history-astn-data": { url: "$A/modules/medical-history-astn-data.html", Table: "medical-history-astn-20002404", form_module: "medical-history-astn-form" },
        "medical-history-astn-form": { url: "$A/modules/medical-history-astn-form.html", Table: "medical-history-astn-20002404", task_name:"Medical_History" },
        "sleep-disorder-patterns-astn-data": { url: "$A/modules/sleep-disorder-patterns-astn-data.html", Table: "sleep-disorder-patterns-astn-20002405", form_module: "sleep-disorder-patterns-astn-form" },
        "sleep-disorder-patterns-astn-form": { url: "$A/modules/sleep-disorder-patterns-astn-form.html", Table: "sleep-disorder-patterns-astn-20002405", task_name:"Sleep HQDP" },
        "sleep-hygiene-index-astn-data": { url: "$A/modules/sleep-hygiene-index-astn-data.html", Table: "sleep-hygiene-index-astn-20003571", form_module: "sleep-hygiene-index-astn-form" },
        "sleep-hygiene-index-astn-form": { url: "$A/modules/sleep-hygiene-index-astn-form.html", Table: "sleep-hygiene-index-astn-20003571", task_name:"Sleep Hygiene Index" },
        "family-sleep-history-astn-data": { url: "$A/modules/family-sleep-history-astn-data.html", Table: "family-sleep-history-astn-20002406", form_module: "family-sleep-history-astn-form" },
        "family-sleep-history-astn-form": { url: "$A/modules/family-sleep-history-astn-form.html", Table: "family-sleep-history-astn-20002406", task_name:"Family Sleep History" },
        "medications-astn-data": { url: "$A/modules/medications-astn-data.html", Table: "medications-astn-20002407", form_module: "medications-astn-form" },
        "medications-astn-form": { url: "$A/modules/medications-astn-form.html", Table: "medications-astn-20002407", task_name:"Medications" },
        "rec-drug-astn-data": { url: "$A/modules/rec-drug-astn-data.html", Table: "rec-drug-astn-20003574", form_module: "rec-drug-astn-form" },
        "rec-drug-astn-form": { url: "$A/modules/rec-drug-astn-form.html", Table: "rec-drug-astn-20003574", task_name:"Recreational Drugs" },
        "ess-astn-data": { url: "$A/modules/ess-astn-data.html", Table: "ess-astn-20002408", form_module: "ess-astn-form" },
        "ess-astn-form": { url: "$A/modules/ess-astn-form.html", Table: "ess-astn-20002408", task_name:"Epworth Sleepiness Scale" },
        "map-astn-data": { url: "$A/modules/map-astn-data.html", Table: "map-astn-20002409", form_module: "map-astn-form" },
        "map-astn-form": { url: "$A/modules/map-astn-form.html", Table: "map-astn-20002409", task_name:"Multivariate Apnea Prediction Questionnaire" },
        "isi-astn-data": { url: "$A/modules/isi-astn-data.html", Table: "isi-astn-20002410", form_module: "isi-astn-form" },
        "isi-astn-form": { url: "$A/modules/isi-astn-form.html", Table: "isi-astn-20002410", task_name:"Insomnia Severity Index" },
        "restless-leg-astn-data": { url: "$A/modules/restless-leg-astn-data.html", Table: "restless-leg-astn-20002411", form_module: "restless-leg-astn-form" },
        "restless-leg-astn-form": { url: "$A/modules/restless-leg-astn-form.html", Table: "restless-leg-astn-20002411", task_name:"Restless Legs" },
        "me-astn-data": { url: "$A/modules/me-astn-data.html", Table: "me-astn-20002412", form_module: "me-astn-form" },
        "me-astn-form": { url: "$A/modules/me-astn-form.html", Table: "me-astn-20002412", task_name:"Horne & &#214;stberg Morningness-Eveningness Composite Questionnaire" },
        "fosq-astn-data": { url: "$A/modules/fosq-astn-data.html", Table: "fosq-astn-20002413", form_module: "fosq-astn-form" },
        "fosq-astn-form": { url: "$A/modules/fosq-astn-form.html", Table: "fosq-astn-20002413", task_name:"Functional Outcomes of Sleep Questionnaire" },
        "psqi-astn-data": { url: "$A/modules/psqi-astn-data.html", Table: "psqi-astn-20003576", form_module: "psqi-astn-form" },
        "psqi-astn-form": { url: "$A/modules/psqi-astn-form.html", Table: "psqi-astn-20003576", task_name:"Pittsburgh Sleep Quality Index" },
        "phq-astn-data": { url: "$A/modules/phq-astn-data.html", Table: "phq-astn-20002414", form_module: "phq-astn-form" },
        "phq-astn-form": { url: "$A/modules/phq-astn-form.html", Table: "phq-astn-20002414", task_name:"Patient Health Questionnaire (PHQ-9)" },
        "gad7-astn-data": { url: "$A/modules/gad7-astn-data.html", Table: "gad7-astn-20002415", form_module: "gad7-astn-form" },
        "gad7-astn-form": { url: "$A/modules/gad7-astn-form.html", Table: "gad7-astn-20002415", task_name:"Generalised Anxiety Disorder (GAD-7)" },
        "dass-astn-data": { url: "$A/modules/dass-astn-data.html", Table: "dass-astn-20002416", form_module: "dass-astn-form" },
        "dass-astn-form": { url: "$A/modules/dass-astn-form.html", Table: "dass-astn-20002416", task_name:"Depression Anxiety Stress Scale (DASS-21)" },
        "fss-astn-data": { url: "$A/modules/fss-astn-data.html", Table: "fss-astn-20002417", form_module: "fss-astn-form" },
        "fss-astn-form": { url: "$A/modules/fss-astn-form.html", Table: "fss-astn-20002417", task_name:"Fatigue Severity Scale (FSS)" },
        "sds-astn-data": { url: "$A/modules/sds-astn-data.html", Table: "sds-astn-20002418", form_module: "sds-astn-form" },
        "sds-astn-form": { url: "$A/modules/sds-astn-form.html", Table: "sds-astn-20002418", task_name:"Sheehan Disability Scale (SDS)" },
        "hwpq-astn-data": { url: "$A/modules/hwpq-astn-data.html", Table: "hwpq-astn-20002419", form_module: "hwpq-astn-form" },
        "hwpq-astn-form": { url: "$A/modules/hwpq-astn-form.html", Table: "hwpq-astn-20002419", task_name:"Health & Work Performance Questionnaire" },
        "shiftwork-astn-data": { url: "$A/modules/shiftwork-astn-data.html", Table: "shiftwork-astn-20002420", form_module: "shiftwork-astn-form" },
        "shiftwork-astn-form": { url: "$A/modules/shiftwork-astn-form.html", Table: "shiftwork-astn-20002420", task_name:"Shiftwork" },
        "shiftworkii-astn-data": { url: "$A/modules/shiftworkii-astn-data.html", Table: "shiftworkii-astn-20003584", form_module: "shiftworkii-astn-form" },
        "shiftworkii-astn-form": { url: "$A/modules/shiftworkii-astn-form.html", Table: "shiftworkii-astn-20003584", task_name:"Shiftwork II" },
        "mva-astn-data": { url: "$A/modules/mva-astn-data.html", Table: "mva-astn-20002421", form_module: "mva-astn-form" },
        "mva-astn-form": { url: "$A/modules/mva-astn-form.html", Table: "mva-astn-20002421", task_name:"Motor Vehicle Accidents" },
        "wa-astn-data": { url: "$A/modules/wa-astn-data.html", Table: "wa-astn-20002422", form_module: "wa-astn-form" },
        "wa-astn-form": { url: "$A/modules/wa-astn-form.html", Table: "wa-astn-20002422", task_name:"Workplace Accidents" },
        "thank-you-astn-form": { url: "$A/modules/thank-you-astn-form.html", task_name:"Thank You" }
    }
    var prefix="astn-";
    var $A="https://astn.wappsystem.com.au/";
    if($vm.localhost==true) $A="http://127.0.0.1:8000/wappsystem/astn/";
    for(m in modules){
        $vm.module_list[prefix+m]=modules[m];
        $vm.module_list[prefix+m].prefix=prefix;
        $vm.module_list[prefix+m].url=$vm.module_list[prefix+m].url.replace("$A",$A);
    }
    //-------------------------------------------------------------------------------------
    //template-001
    var modules={
        "footer": {url:"$A/modules/t/template-001/modules/footer.html"},
    }
    var prefix="template-001-"; for(m in modules){ $vm.module_list[prefix+m]=modules[m]; $vm.module_list[prefix+m].prefix=prefix;}
    //-------------------------------------------------------------------------------------
    //replace $A...
    for(m in $vm.module_list) $vm.module_list[m].url=$vm.replace_url($vm.module_list[m].url);
    //-------------------------------------------------------------------------------------
})();
