(function(){
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
    for(m in modules){$vm.module_list[m]=modules[m];}
    var prefix=""
    for(m in modules){
        $vm.module_list[prefix+m].url=$vm.replace_url($vm.module_list[prefix+m].url);
    }
})();
