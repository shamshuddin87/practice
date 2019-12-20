website('.datepicker').bootstrapMaterialDatePicker({time: false , switchOnClick: true/*,format:'dd-mm-YYYY'*/});
function commoninitpm(nm,act,tp)
{
    var formdata = website('#'+nm).serialize();
    //console.log(formdata); return false;
     website.ajax({
            url:'accountsetting/'+act,
            data:formdata,
            method:'POST',
            //contentType:'json',
            contentType:'application/x-www-form-urlencoded; charset=UTF-8',
            //default: 'application/x-www-form-urlencoded; charset=UTF-8' ,'multipart/form-data' , 'text/plain'
            dataType:"json",
            cache:false,
            //async:true, /*Cross domain checking*/
            beforeSend: function()
            { website('.progress-indeterminate').fadeIn();  },
            uploadProgress: function(event, position, total, percentComplete)
            {   },
            success: function(response, textStatus, jqXHR)
            {
                if(response.logged===true)
                {
                    new PNotify({title: 'Success',
                          text: 'Record saved successfully',
                          type: 'university',
                          hide: true,
                          styling: 'bootstrap3',
                          addclass: 'bg-primary alert-styled-left',
                      });
                }
                else
                {
                    new PNotify({title: 'Alert',
                          text: response.message,
                          type: 'university',
                          hide: true,
                          styling: 'bootstrap3',
                          addclass: 'bg-primary alert-styled-left',
                      });
                }
            },
            complete: function(response)
            {  website('.progress-indeterminate').fadeOut(); },
            error: function(jqXHR, textStatus, errorThrown)
            {  new PNotify({title: 'Alert',
                          text: 'Something went wrong ! Please Contact to website admin',
                          type: 'university',
                          hide: true,
                          styling: 'bootstrap3',
                          addclass: 'bg-primary alert-styled-left',
                      }); }
        });
}

website('body').on('click','.btnmnpwdchn',function(e){
    var nm = 'Validatepwd',act ='passwordchange';
    var formdata = website('#'+nm).serialize();
    
    website.ajax({
            url:'changepassword/'+act,
            data:formdata,
            method:'POST',
            contentType:'application/x-www-form-urlencoded; charset=UTF-8',
            dataType:"json",
            cache:false,
            beforeSend: function()
            { website('.progress-indeterminate').fadeIn();  },
            uploadProgress: function(event, position, total, percentComplete)
            {   },
            success: function(response, textStatus, jqXHR)
            {
                if(response.logged===true)
                {
                    new PNotify({title: 'Success',
                          text: 'Password updated successfully',
                          type: 'university',
                          hide: true,
                          styling: 'bootstrap3',
                          addclass: 'bg-primary alert-styled-left',
                      });
                }
                else
                {
                    new PNotify({title: 'Alert',
                          text: response.message,
                          type: 'university',
                          hide: true,
                          styling: 'bootstrap3',
                          addclass: 'bg-primary alert-styled-left',
                      });
                }
            },
            complete: function(response)
            {  website('.progress-indeterminate').fadeOut(); },
            error: function(jqXHR, textStatus, errorThrown)
            {  new PNotify({title: 'Alert',
                          text: 'Something went wrong ! Please Contact to website admin',
                          type: 'university',
                          hide: true,
                          styling: 'bootstrap3',
                          addclass: 'bg-primary alert-styled-left',
                      }); }
        });
});

website('body').on('click','.btnmngendtl',function(e){
    commoninitpm('Validateorgdtl','updateuer','updateit')
});

/* ----------------------- Upload via Excel START ----------------------- */
website('body').on('change','.uploadimg',function(e){
var filename = website(this).val().replace(/.*(\/|\\)/, '');
var getft = website(this).attr('data-gotfile');
//console.log(getft+" "+filename);
if(filename=='')
    {
        website('.'+getft).val('No file chosen');
    }
    else
    {
        website('.'+getft).val('Your file name: '+filename);
    }});
website('body').on('click','.uploadfilebtn',function()
{
    var content = '';
    //console.log('hi'); return false;
    if(!website('#file').val()) {
       // No file is uploaded, do not submit.        
            new PNotify({title: 'Please Choose File to Upload',
                      text: 'Please Choose Appropriate File to Upload',
                      type: 'university',
                      hide: true,
                      styling: 'bootstrap3',
                      addclass: 'dark ',
                  });
            return false;
    }
    //console.log('helloo');
    
    website('#Validatelogoupload').ajaxForm({
        //data:formdata,
        //contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        dataType:"json",
        beforeSend: function() 
        {  website('.uploadfilebtn').addClass('disabled');   },
        uploadProgress: function(event, position, total, percentComplete) 
        {   website('.progress-indeterminate').fadeIn();   },
        success: function(response, textStatus, jqXHR) 
        {
            website('.logoareavl').html('');
            if(response.logged===true)
            {
                new PNotify({title: 'File Upload Successful',
                          text: 'Avatar has been updated',
                          type: 'university',
                          hide: true,
                          styling: 'bootstrap3',
                          addclass: 'dark ',
                      });
                website('.logoareavl').html('<img src="'+response.imglocation+'" class="mnimgnmmet" /> ');
            }
            else
            {
                new PNotify({title: 'File could not be Upload Successful',
                          text: '',
                          type: 'university',
                          hide: true,
                          styling: 'bootstrap3',
                          addclass: 'dark ',
                      });
                
            }
            website('.uploadfilebtn').removeClass('disabled');
            website('.progress-indeterminate').fadeOut();
        },
        complete: function(response) 
        {
            
        },
        error: function() {
            
        }
    });
    website('#Validatelogoupload').trigger('submit');
});
/* ----------------------- Upload via Excel END ----------------------- */
