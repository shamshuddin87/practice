
website(document).ready(function()
{getdataonload();website('.bootdatepick').datetimepicker({weekStart:1,todayBtn:0,autoclose:1,todayHighlight:0,startView:2,minView:2,forceParse:0,format:"dd-mm-yyyy"}).on('change',function(e,date)
{var getdate=website(this).val();var getid=website(this).closest('form').attr('id');});});website('body').on('change','#noofrows',function(e)
{getdataonload();});website('body').on('click','.paginationmn li',function(e)
{var rscrntpg=website(this).attr('p');website('.panel.panel-white #pagenum').val(rscrntpg);getdataonload();});website('body').on('click','.go_button',function(e)
{var rscrntpg=website('.gotobtn').val();website('.panel.panel-white #pagenum').val(rscrntpg);getdataonload();});function getdataonload()
{var noofrows=website('#noofrows').val();var pagenum=website('#pagenum').val();var formdata={noofrows:noofrows,pagenum:pagenum};website.ajax({url:'sebi/fetchformctransdata',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{var addhtmlnxt='';var ids=[];var place=[];for(var i=0;i<response.resdta.length;i++)
{var company_name=response.resdta[i].company_name?response.resdta[i].company_name:''
var transaction=response.resdta[i].transaction?response.resdta[i].transaction:''
var no_of_share=response.resdta[i].no_of_share?response.resdta[i].no_of_share:''
var total_amount=response.resdta[i].total_amount?response.resdta[i].total_amount:''
var date_of_transaction=response.resdta[i].date_of_transaction?response.resdta[i].date_of_transaction:''
addhtmlnxt+='<tr class="counter" aprvllistid="'+response.resdta[i].id+'" >';addhtmlnxt+='<td width="10%"><input type="checkbox" class="" id="" name="check" value="'+response.resdta[i].id+'" /></td>';addhtmlnxt+='<td width="20%">'+transaction+'</td>';addhtmlnxt+='<td width="20%">'+no_of_share+'</td>';addhtmlnxt+='<td width="20%">'+total_amount+'</td>';addhtmlnxt+='<td width="20%">'+date_of_transaction+'</td>';addhtmlnxt+='</tr>';ids.push(response.resdta[i].id);place.push(response.resdta[i].place);}
var trdeid=ids.join(",");var place=ids.join(",");website('#formcsend').attr('trdeid',trdeid);website('#formcsend').attr('place',place);website('.appendrow').html(addhtmlnxt);website('.paginationmn').html(response.pgnhtml);}
else
{website('.appendrow').html('<tr><td colspan="9" style="text-align:center;">Data Not Found..!!</td></tr>');website('.paginationmn').html(response.pgnhtml);}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});}
website('body').on('click','#formcsend',function(){var ids=[];website.each(website("input[name='check']:checked"),function(){ids.push(website(this).val());});var trdeid=website(this).attr('trdeid');var place=website(this).attr('place');var apprvid=website('.approverid').val();if(ids.length==0)
{new PNotify({title:'Alert!!',text:'Please Select Atleast One Record',type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}
else
{var formdata={ids:ids,apprvid:apprvid,trdeid:trdeid,place:place};website.ajax({url:'sebi/insertformc',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{var baseHref=getbaseurl();window.location.href=baseHref+'sebi/formc';}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});}});website('body').on('click','#formcprevious',function(){var baseHref=getbaseurl();window.location.href=baseHref+'sebi/formc';});website('body').on('click','#formctypes',function(){website('#myModalFormctypes').modal('show');});website('body').on('click','.openFormc',function(){var formctype=website(this).attr('id');if(formctype)
{website('#myModalFormctypes').modal('hide');website('#Mymodal'+formctype).modal('show');}});website("#Mymodaltype1 #pricepershare").keyup(function(){var noofshare=website('#Mymodaltype1 #noofshare').val();var pricepershare=website('#Mymodaltype1 #pricepershare').val();if(noofshare!=''&&pricepershare!='')
{var totalamt=noofshare*pricepershare;website('#Mymodaltype1 #totalamt').val(totalamt)}});website("#Mymodaltype2 #pricepershare").keyup(function(){var noofshare=website('#Mymodaltype2 #noofshare').val();var pricepershare=website('#Mymodaltype2 #pricepershare').val();if(noofshare!=''&&pricepershare!='')
{var totalamt=noofshare*pricepershare;website('#Mymodaltype2 #totalamt').val(totalamt)}});website("#Mymodaltype3 #pricepershare").keyup(function(){var noofshare=website('#Mymodaltype3 #noofshare').val();var pricepershare=website('#Mymodaltype3 #pricepershare').val();if(noofshare!=''&&pricepershare!='')
{var totalamt=noofshare*pricepershare;website('#Mymodaltype3 #totalamt').val(totalamt)}});website('#insertformctype1').ajaxForm({dataType:"json",beforeSend:function()
{website('.preloder_wraper').fadeIn();},uploadProgress:function(event,position,total,percentComplete)
{website('.preloder_wraper').fadeIn();},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});window.location.reload();}
else
{new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{website('.preloder_wraper').fadeOut();website('#Mymodaledit .mainprogressbarforall').fadeOut();},error:function()
{}});website('#insertformctype2').ajaxForm({dataType:"json",beforeSend:function()
{website('.preloder_wraper').fadeIn();},uploadProgress:function(event,position,total,percentComplete)
{website('.preloder_wraper').fadeIn();},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});window.location.reload();}
else
{new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{website('.preloder_wraper').fadeOut();website('#Mymodaledit .mainprogressbarforall').fadeOut();},error:function()
{}});website('#insertformctype3').ajaxForm({dataType:"json",beforeSend:function()
{website('.preloder_wraper').fadeIn();},uploadProgress:function(event,position,total,percentComplete)
{website('.preloder_wraper').fadeIn();},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});window.location.reload();}
else
{new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{website('.preloder_wraper').fadeOut();website('#Mymodaledit .mainprogressbarforall').fadeOut();},error:function()
{}});function numberalphOnly()
{var charCode=event.keyCode;if((charCode>47&&charCode<58)||charCode==32||(charCode>64&&charCode<91)||(charCode>96&&charCode<123)||charCode==8||charCode==44||charCode==40||charCode==41||charCode==46||charCode==47)
return true;else
return false;}
function emailOnly()
{var re=/[A-Z0-9a-z@\._-]/.test(event.key);if(!re){return false;}};