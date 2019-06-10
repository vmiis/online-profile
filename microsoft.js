//------------------------------------
$vm.m365_init=function(){
    $vm.m365_scope={
        scopes: ["user.read"]
    };
    $vm.msalConfig={
        auth: {
            clientId: 'f39f8959-8cd7-4570-8c0f-548306bf899a',
        },
        cache: {
            cacheLocation: "localStorage",
            storeAuthStateInCookie: true
        }
    };
    $vm.m365_msal=new Msal.UserAgentApplication($vm.msalConfig);
    //------------------------------------
    $vm.w_microsoft_token=function(tokenResponse){
        var token=tokenResponse.idToken.rawIdToken;
        $vm.request({cmd:'signin-3rd',issuer:'microsoft',token:token},function(res){
            $vm.user_name=res.user_name;
            $vm.set_token(res.token,res.user_name);
            $vm.show_user();
            localStorage.setItem("authentication-issuer","microsoft")
            $vm.user_name_3rd=$vm.m365_msal.getAccount().userName;
            $vm.issuer_3rd="microsoft";
        })
    }
    //------------------------------------
    $vm.m365_signin=function (){
        $vm.m365_msal.handleRedirectCallback((error, response) => {
        });
        $vm.m365_msal.loginPopup($vm.m365_scope).then(function (loginResponse){
            if($vm.m365_msal.getAccount()!=undefined){
                $vm.m365_msal.acquireTokenSilent($vm.m365_scope).then(function (tokenResponse) {
                    $vm.w_microsoft_token(tokenResponse);
                }).catch(function (error){
                    console.log("more than ? hour.");
                });
            }
        }).catch(function (error) {
            console.log(error);
        });
    }
    //------------------------------------
    $vm.m365_signout=function(){
        $vm.m365_msal.logout();
    }
    //------------------------------------
    /*
    if($vm.m365_msal.getAccount()!=undefined){
        $vm.m365_msal.acquireTokenSilent($vm.m365_scope).then(function (tokenResponse) {
            $vm.w_microsoft_token(tokenResponse);
        }).catch(function (error){
            console.log("more than 1 hour.");
        });
    }
    */
    //------------------------------------
    $vm.m365_graph=function(url,callback){
        $vm.m365_msal.acquireTokenSilent($vm.m365_scope).then(function (tokenResponse) {
            var xmlHttp = new XMLHttpRequest();
            var mt1=new Date().getTime();
            xmlHttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200){
                    $("#_sys_dev_info_elapsed").html( (this.response.length/1000).toFixed(1)+"kb/"+(new Date().getTime()-mt1).toString()+"ms");
                    var data=JSON.parse(this.responseText);
                    callback(data);
                }
                else if(this.readyState == 4 && this.status == 403){
                    $vm.alert("No permission");
                    callback({});
                }
                if(this.status == 404){
                    $vm.alert(url+", 404 (Not found)");
                    callback({});
                }
            }
            xmlHttp.open("GET", url, true); // true for asynchronous
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + tokenResponse.accessToken);
            xmlHttp.send();
        }).catch(function (error){
            console.log(error);
            $vm.alert("You haven't signed in, or your previous session has expired.")
        });
    };
    //------------------------------------
}
$vm.m365_init();
//------------------------------------
//if(localStorage.getItem("authentication-issuer")=="microsoft" && (sessionStorage.getItem("vm_token")==undefined || sessionStorage.getItem("vm_token")=="")) 
//-------------------------------------
