
website(document).ready(function()
{getdataonload();website('.bootdatepick').datetimepicker({weekStart:1,todayBtn:0,autoclose:1,todayHighlight:0,startView:2,minView:2,forceParse:0,format:"dd-mm-yyyy"}).on('change',function(e,date)
{var getdate=website(this).val();var getid=website(this).closest('form').attr('id');});});website('#insertrecipient').ajaxForm({dataType:"json",beforeSend:function()
{website('.preloder_wraper').fadeIn();},uploadProgress:function(event,position,total,percentComplete)
{website('.preloder_wraper').fadeIn();},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{new PNotify({title:'Record Added Successfully',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});window.location.reload();getdataonload();}else{new PNotify({title:'Record Not Added',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{website('.preloder_wraper').fadeOut();},error:function(jqXHR,textStatus,errorThrown)
{}});function getdataonload()
{website.ajax({url:'sensitiveinformation/fetchrecipient',method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{var addhtmlnxt='';for(var i=0;i<response.resdta.length;i++)
{var mobileno=response.resdta[i].mobileno?response.resdta[i].mobileno:''
var email=response.resdta[i].email?response.resdta[i].email:''
addhtmlnxt+='<tr class="counter" aprvllistid="'+response.resdta[i].id+'" >';if(response.resdta[i].category==16)
{var category=response.resdta[i].othercategory?response.resdta[i].othercategory:'';}
else
{var category=response.resdta[i].categoryname?response.resdta[i].categoryname:'';}
addhtmlnxt+='<td>'+category+'</td>';addhtmlnxt+='<td>'+response.resdta[i].nameofentity+'</td>';addhtmlnxt+='<td>'+response.resdta[i].name+'</td>';addhtmlnxt+='<td>'+response.resdta[i].identityno+'</td>';addhtmlnxt+='<td>'+response.resdta[i].phoneno+'</td>';addhtmlnxt+='<td>'+mobileno+'</td>';addhtmlnxt+='<td>'+response.resdta[i].designation+'</td>';addhtmlnxt+='<td>'+email+'</td>';if(response.resdta[i].filepath)
{addhtmlnxt+='<td><a href="'+response.resdta[i].filepath+'" download>&nbsp;<i class="fa fa-download" id="uploadattached1" aria-hidden="true"></i></a></td>';}
else
{addhtmlnxt+='<td></td>';}
if(response.resdta[i].agreemntfile)
{addhtmlnxt+='<td><a href="'+response.resdta[i].agreemntfile+'" download>&nbsp;<i class="fa fa-download" id="uploadattached1" aria-hidden="true"></i></a></td>';}
else
{addhtmlnxt+='<td></td>';}
addhtmlnxt+='<td >';if(response.getaccess[0]['upsi_conn_per_edit']==1)
{addhtmlnxt+='<i class="fa fa-edit faicon floatleft editrestrictedcmp" title="Edit entry" aprvllistid="'+response.resdta[i].id+'"> </i>';}
else
{addhtmlnxt+='';}
if(response.getaccess[0]['upsi_conn_per_delete']==1)
{addhtmlnxt+='<i class="fa fa-trash-o faicon floatleft deleterestrictedcmp" title="Delete entry" aprvllistid="'+response.resdta[i].id+'" ></i>';}
else
{addhtmlnxt+='';}
addhtmlnxt+='</td>';addhtmlnxt+='</tr>';}
if(response.getaccess[0]['upsi_conn_per_add']==0)
{website(".formelementmain").css("display","none");new PNotify({title:'You Do Not Have Access To Add Connected Person',text:"Please Contact To Your Admin",type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}
else
{website(".formelementmain").css("display","block");}
if(response.getaccess[0]['upsi_conn_per_view']==0)
{website(".table-responsive.table_wraper.rectable").css("display","none");new PNotify({title:'You Do Not Have Access To View This Section',text:"Please Contact To Your Admin",type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}
else
{website(".table-responsive.table_wraper.rectable").css("display","block");}
website('.appendrow').html(addhtmlnxt);website('#datableabhi').DataTable();}
else
{website('.appendrow').html('<tr><td >Data Not Found</td></tr>');if(response.getaccess[0]['upsi_conn_per_add']==0)
{website(".formelementmain").css("display","none");new PNotify({title:'You Do Not Have Access To Add Connected Person',text:"Please Contact To Your Admin",type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}
else
{website(".formelementmain").css("display","block");}
if(response.getaccess[0]['upsi_conn_per_view']==0)
{website(".table-responsive.table_wraper.rectable").css("display","none");new PNotify({title:'You Do Not Have Access To View This Section',text:"Please Contact To Your Admin",type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}
else
{website(".table-responsive.table_wraper.rectable").css("display","block");}}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});}
website('body').on('click','.editrestrictedcmp',function(){var id=website(this).attr('aprvllistid');var formdata={id:id};website.ajax({url:'sensitiveinformation/fetchrecipientforedit',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{var appendhtml='';website("#Mymodaledit #category").val(response.data['0'].category);if(response.data['0'].category==16)
{var html='<section class="col col-md-6 col-xs-6"><div class="input"><label class="control-label">Name of Other Category*</label><input type="text" id="othercategory" name="othercategory" class="form_fields form-control col-md-7 col-xs-12"  required> </div></section>';website('#Mymodaledit .othercateedit').html(html);website("#Mymodaledit #othercategory").val(response.data['0'].othercategory);}
else if(response.data['0'].category==14)
{var html='<section class="col col-md-6 col-xs-6"><div class="input"><label class="control-label">Name of Department*</label><input type="text" id="empcategory" name="empcategory" class="form_fields form-control col-md-7 col-xs-12"  required> </div></section>';website('#Mymodaledit .employeecateedit').html(html);website("#Mymodaledit #empcategory").val(response.data['0'].othercategory);website("#Mymodaledit #entity").attr("readonly",true);}
else
{website('#Mymodaledit .othercateedit').css('display','none');website('#Mymodaledit .empcateedit').css('display','none');website('#Mymodaledit #othercategory').removeAttr('required');website('#Mymodaledit #empcategory').removeAttr('required');}
website("#Mymodaledit #entity").val(response.data['0'].nameofentity);website("#Mymodaledit #name").val(response.data['0'].name);website("#Mymodaledit #identitynum").val(response.data['0'].identityno);website("#Mymodaledit #phonenum").val(response.data['0'].phoneno);website("#Mymodaledit #mobilenum").val(response.data['0'].mobileno);website("#Mymodaledit #designation").val(response.data['0'].designation);website("#Mymodaledit #email").val(response.data['0'].email);website('#updaterecipient #tempid').val(id);website('#updaterecipient #confiagrmnt').val(response.data['0'].agreemntfile);website('#updaterecipient #identityfile').val(response.data['0'].filepath);website('#Mymodaledit').modal('show');}
else
{website('.appendrowwaprvl').html('');}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});});website('#updaterecipient').ajaxForm({dataType:"json",beforeSend:function()
{website('.preloder_wraper').fadeIn();},uploadProgress:function(event,position,total,percentComplete)
{website('.preloder_wraper').fadeIn();},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{new PNotify({title:'Record Updated Successfully',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});window.location.reload();}
else
{new PNotify({title:'Record Not Updated',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{website('#Mymodaledit .mainprogressbarforall').fadeOut();},error:function()
{}});website('body').on('click','.deleterestrictedcmp',function(){var id=website(this).attr('aprvllistid');website('#myModalyesno').modal('show');website('#myModalyesno .yesconfirm').attr('aprvllistid',id);});website('body').on('click','.yesconfirm',function(){var id=website(this).attr('aprvllistid');var formdata={id:id};website.ajax({url:'sensitiveinformation/recipientfordelete',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{window.location.reload();new PNotify({title:'Record Deleted Successfully',text:'Record Deleted Successfully',type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}
else
{new PNotify({title:'Record Not Deleted',text:'Record Not Updated',type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{website('#myModalyesno .mainprogressbarforall').fadeOut();},error:function()
{}});});website('body').on('change','#category',function(){var id=website(this).val();if(id==16)
{website('#insertrecipient .employeecate').css('display','none');website('#insertrecipient .othercate').css('display','block');var html='<section class="col col-md-4 col-xs-12"><div class="input"><label class="control-label">Name of Other Category*</label><input type="text" id="othercategory" name="othercategory" class="form_fields form-control col-md-7 col-xs-12"  required> </div></section>';website('#insertrecipient .othercate').html(html);}
else if(id==14)
{website('#insertrecipient .othercate').css('display','none');website('#insertrecipient .employeecate').css('display','block');var html='<section class="col col-md-4 col-xs-12"><div class="input"><label class="control-label">Name of Department*</label><input type="text" id="empcategory" name="empcategory" class="form_fields form-control col-md-7 col-xs-12"  required> </div></section>';website('#insertrecipient .employeecate').html(html);website('#insertrecipient #entity').val("Dr Reddy's Laboratories Ltd.");website('#insertrecipient #entity').attr("readonly",true);}
else
{website('#insertrecipient .othercate').css('display','none');website('#insertrecipient .employeecate').css('display','none');website('#insertrecipient #othercategory').removeAttr('required');website('#insertrecipient #empcategory').removeAttr('required');}});website('body').on('change','#Mymodaledit #category',function(){var id=website(this).val();if(id==16)
{website('#Mymodaledit .employeecateedit').css('display','none');website('#Mymodaledit .othercateedit').css('display','block');var html='<section class="col col-md-8 col-xs-8"><div class="input"><label class="control-label">Name of Other Category*</label><input type="text" id="othercategory" name="othercategory" class="form_fields form-control col-md-7 col-xs-12"  required> </div></section>';website('#Mymodaledit .othercateedit').html(html);}
else if(id==14)
{website('#Mymodaledit .othercateedit').css('display','none');website('#Mymodaledit .employeecateedit').css('display','block');var html='<section class="col col-md-8 col-xs-8"><div class="input"><label class="control-label">Name of Department*</label><input type="text" id="empcategory" name="empcategory" class="form_fields form-control col-md-7 col-xs-12"  required> </div></section>';website('#Mymodaledit .employeecateedit').html(html);website('#Mymodaledit #entity').val("Dr Reddy's Laboratories Ltd.");website('#Mymodaledit #entity').attr("readonly",true);}
else
{website('#Mymodaledit .othercateedit').css('display','none');website('#Mymodaledit .employeecateedit').css('display','none');website('#Mymodaledit #othercategory').removeAttr('required');website('#Mymodaledit #empcategory').removeAttr('required');}});function numberalphOnly()
{var charCode=event.keyCode;if((charCode>47&&charCode<58)||charCode==32||(charCode>64&&charCode<91)||(charCode>96&&charCode<123)||charCode==8||charCode==44||charCode==40||charCode==41||charCode==46||charCode==47)
return true;else
return false;}
function emailOnly()
{var re=/[A-Z0-9a-z@\._-]/.test(event.key);if(!re){return false;}};