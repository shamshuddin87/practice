
website(document).ready(function()
{getdataonload();website('.bootdatepick').datetimepicker({weekStart:1,todayBtn:0,autoclose:1,todayHighlight:0,startView:2,minView:2,forceParse:0,format:"dd-mm-yyyy"}).on('change',function(e,date)
{var getdate=website(this).val();var getid=website(this).closest('form').attr('id');});});function getdataonload()
{website.ajax({url:'mis/fetchrecipient',method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{var addhtmlnxt='';for(var i=0;i<response.resdta.length;i++)
{var addedondte='';var addedon=response.resdta[i].date_added;if(addedon)
{addedon=addedon.split(/[- :]/);addedondte=addedon[2]+'-'+addedon[1]+'-'+addedon[0]+' '+addedon[3]+':'+addedon[4]+':'+addedon[5];}
var mobileno=response.resdta[i].mobileno?response.resdta[i].mobileno:''
var email=response.resdta[i].email?response.resdta[i].email:''
addhtmlnxt+='<tr class="counter" aprvllistid="'+response.resdta[i].id+'" >';addhtmlnxt+='<td width="8%">'+response.resdta[i].categoryname+'</td>';addhtmlnxt+='<td width="8%">'+response.resdta[i].nameofentity+'</td>';addhtmlnxt+='<td width="8%">'+response.resdta[i].name+'</td>';addhtmlnxt+='<td width="8%">'+response.resdta[i].identityno+'</td>';addhtmlnxt+='<td width="8%">'+response.resdta[i].phoneno+'</td>';addhtmlnxt+='<td width="8%">'+mobileno+'</td>';addhtmlnxt+='<td width="8%">'+response.resdta[i].designation+'</td>';addhtmlnxt+='<td width="8%">'+email+'</td>';if(response.resdta[i].filepath)
{addhtmlnxt+='<td width="8%"><a href="'+response.resdta[i].filepath+'" download>&nbsp;<i class="fa fa-download" id="uploadattached1" aria-hidden="true"></i></a></td>';}
else
{addhtmlnxt+='<td width="8%"></td>';}
if(response.resdta[i].agreemntfile)
{addhtmlnxt+='<td width="8%"><a href="'+response.resdta[i].agreemntfile+'" download>&nbsp;<i class="fa fa-download" id="uploadattached1" aria-hidden="true"></i></a></td>';}
else
{addhtmlnxt+='<td width="8%"></td>';}
addhtmlnxt+='<td width="8%">'+addedondte+'</td>';addhtmlnxt+='<td width="8%">'+response.resdta[i].fullname+'</td>';addhtmlnxt+='</tr>';}
website('.appendrow').html(addhtmlnxt);website('#datableabhi').DataTable();}
else
{website('.appendroww').html('');}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});}
function numberalphOnly()
{var charCode=event.keyCode;if((charCode>47&&charCode<58)||charCode==32||(charCode>64&&charCode<91)||(charCode>96&&charCode<123)||charCode==8||charCode==44||charCode==40||charCode==41||charCode==46||charCode==47)
return true;else
return false;}
function emailOnly()
{var re=/[A-Z0-9a-z@\._-]/.test(event.key);if(!re){return false;}};