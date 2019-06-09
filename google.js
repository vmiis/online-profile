$vm.google_init=function(){
    var client_id='749341509401-hkeis22lje3snu4i248oknml56anskak.apps.googleusercontent.com';
    gapi.load('auth2', function(){
        $vm.google_auth2 = gapi.auth2.init({
            client_id: client_id,
            cookiepolicy: 'single_host_origin',
            //scope: 'additional_scope'
            scope: 'profile'
        });
    });
    $vm.google_button=function(bid){
        var element=document.getElementById(bid);
        $vm.google_auth2.attachClickHandler(
            element, {}, 
            function(googleUser) {
                $vm.google_token=googleUser.getAuthResponse().id_token;
                //alert($vm.google_token)
                var profile = googleUser.getBasicProfile();
                sessionStorage.setItem("google_profile_email", profile.getEmail());
                sessionStorage.setItem("google_token", $vm.google_token);

                $vm.user_name_3rd=profile.getEmail();
                $vm.issuer_3rd="google";
                $vm.app_init();
            },
            function(error){}
        );
    };
    $vm.google_signout=function(){
        $vm.clear_token();
        sessionStorage.removeItem("google_profile_email");
        sessionStorage.removeItem("google_token");
        location.reload(true);
    }
    var p=sessionStorage.getItem("google_profile_email");
    if(p!=null){
        $vm.user_name_3rd=p;
        $vm.issuer_3rd="google";
    } 
    var t=sessionStorage.getItem("google_token");
    if(t!=null){
        $vm.google_token=t;
    } 
}
if($vm.user_name_3rd==undefined) $vm.google_init();
