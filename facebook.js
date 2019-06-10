$vm.facebook_init=function(){
    //------------------------------------
    window.fbAsyncInit = function() {
        FB.init({
        appId      : '596805194160323',
        xfbml      : true,
        version    : 'v3.3'
        });
        FB.AppEvents.logPageView();
        /*
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
        */
    };
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    //------------------------------------
    $vm.w_facebook_token=function(token){
        $vm.request({cmd:'signin-3rd',issuer:'facebook323',token:token},function(res){
            $vm.user_name=res.user_name;
            $vm.set_token(res.token,res.user_name);
            $vm.show_user();
            localStorage.setItem("authentication-issuer","facebook");
        })
    }
    //------------------------------------
    $vm.facebook_signin=function(){
        FB.login(function(response){
            if(response.status==='connected'){
                $vm.w_facebook_token(response.authResponse.accessToken);
                /*
                //$vm.issuer_3rd="facebook";
                //$vm.facebook_token=response.authResponse.accessToken;
                FB.api('/me?fields=name,email', function(response) {
                    $vm.user_name_3rd=response.email;
                    $vm.app_init();
                })
                */
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
//if(localStorage.getItem("authentication-issuer")=="facebook") 
$vm.facebook_init();
//---------------------------------------------
