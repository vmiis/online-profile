(function(){
    var modules={
        "predefined-transaction-item-data": {url:"$A/modules/p/predefined-transaction-item-data.html",Table:"predefined-transaction-item-wappsystem",form_module:"predefined-transaction-item-form"},
        "predefined-transaction-item-form": {url:"$A/modules/p/predefined-transaction-item-form.html",Table:"predefined-transaction-item-wappsystem"},
        
        "transaction-y-q-tax-return-data":  {url:"$A/modules/t/transaction-year-quarter-tax-return-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        "transaction-y-q-bas-data":    		{url:"$A/modules/t/transaction-year-quarter-bas-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        "transaction-y-q-data":    		    {url:"$A/modules/t/transaction-year-quarter-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        
        "transaction-bas-data":   		{url:"$A/modules/t/transaction-bas-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        "transaction-tax-return-data":  {url:"$A/modules/t/transaction-tax-return-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        "transaction-data":    			{url:"$A/modules/t/transaction-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        "transaction-form":    			{url:"$A/modules/t/transaction-form.html",Table:"transaction-wappsystem",
                                            item_table:'predefined-transaction-item-wappsystem'
                                        },

        "ato-bas-quarter-aggregation-data":     {url:"$A/modules/a/ato-bas-quarter-aggregation-data.html",Table:"ato-bas-quarter-aggregation-wappsystem",form_module:"ato-bas-quarter-aggregation-form",router:1},
        "ato-bas-quarter-aggregation-form":     {url:"$A/modules/a/ato-bas-quarter-aggregation-form.html",Table:"ato-bas-quarter-aggregation-wappsystem",
                                                    transaction_table:'transaction-wappsystem'
                                                },
    }
    var prefix="wapp-bookkeeping-"
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
