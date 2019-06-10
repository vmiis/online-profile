$vm.google_init=function(){
    var client_id='749341509401-hkeis22lje3snu4i248oknml56anskak.apps.googleusercontent.com';
    gapi.load('auth2', function(){
        $vm.google_auth2 = gapi.auth2.init({
            client_id: client_id,
            cookiepolicy: 'single_host_origin',
            //scope: 'additional_scope'
            scope: 'profile'
        });
        $vm.google_button=function(bid){
            var element=document.getElementById(bid);
            $vm.google_auth2.attachClickHandler(
                element, {}, 
                function(googleUser) {
                    var token=googleUser.getAuthResponse().id_token;
                    $vm.w_google_token(token)
                },
                function(error){}
            );
        };
        //------------------------------------
        var I=0; var loop_1=setInterval(function (){
            if( $('#google_signin').length!=0 ){  clearInterval(loop_1); $vm.google_button('google_signin'); }
            I++; if(I>50){ clearInterval(loop_1);  }
            console.log('google-button');
        },100);
        //-------------------------------------
    });   
    //------------------------------------
    $vm.w_google_token=function(token){
        $vm.request({cmd:'signin-3rd',issuer:'google',token:token},function(res){
            $vm.user_name=res.user_name;
            $vm.set_token(res.token,res.user_name);
            $vm.show_user();
            localStorage.setItem("authentication-issuer","google")
        })
    }
    //------------------------------------
}
//if(localStorage.getItem("authentication-issuer")!="google" && (sessionStorage.getItem("vm_token")==undefined || sessionStorage.getItem("vm_token")=="")) 
$vm.google_init();
