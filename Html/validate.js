$(document).ready(function(){
    $('#form-login').validate({
        rules:{
            username: {
                required: true,
            },
            password:{
                required: true,
            }
        },
        messages:{
            username: {
                required: 'Username is required',
            },
            password:{
                required: 'Password is required',
            }
        }
    });
});
function success(){
    if($('#password').val() != "" & $('#username').val() != "" ){
        alert('Success');
    }    
}