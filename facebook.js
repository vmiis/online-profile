$vm.facebook_init=function(){
    //------------------------------------
    window.fbAsyncInit = function() {
        FB.init({
        appId      : '596805194160323',
        xfbml      : true,
        version    : 'v3.3'
        });
        FB.AppEvents.logPageView();
        FB.getLoginStatus(function(response) {
            console.log(response)
            if (response.status === 'connected') {
                $vm.issuer_3rd="facebook";
                $vm.facebook_token=response.authResponse.accessToken;
                FB.api('/me', function(response) {
                    $vm.user_name_3rd=response.email;
                    if($vm.app_init!=undefined) $vm.app_init();
                })
            } 
        });
    };
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    //------------------------------------
    $vm.facebook_signin=function(){
        FB.login(function(response){
            if(response.status==='connected'){
                $vm.issuer_3rd="facebook";
                $vm.facebook_token=response.authResponse.accessToken;
                FB.api('/me?fields=name,email', function(response) {
                    $vm.user_name_3rd=response.email;
                    $vm.app_init();
                })
            }
            else{
            }
        }, {scope:'public_profile,email', return_scopes: true});
    }
    //------------------------------------
    $vm.facebook_signout=function(){
        $vm.clear_token();
        FB.logout(function(response){
            $vm.signout();
        });
    }
    //------------------------------------
}
//---------------------------------------------
if($vm.user_name_3rd==undefined) $vm.facebook_init();
//---------------------------------------------
