
website('body').on('change','#noofrows',function(e)
{getdataonload();});website('body').on('click','.paginationmn li',function(e)
{var rscrntpg=website(this).attr('p');website('.panel.panel-white #pagenum').val(rscrntpg);getdataonload();});website('body').on('click','.go_button',function(e)
{var rscrntpg=website('.gotobtn').val();website('.panel.panel-white #pagenum').val(rscrntpg);getdataonload();});getdataonload();function getdataonload()
{var noofrows=website('#noofrows').val();var pagenum=website('#pagenum').val();var formdata={noofrows:noofrows,pagenum:pagenum};website.ajax({url:'mis/fetchallupsitypes',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{var myhtml='';for(var i=0;i<response.resdta.length;i++)
{var j=i+1;var enddate=response.resdta[i]['enddate']?response.resdta[i]['enddate']:'';myhtml+='<tr class="getallups" upsid="'+response.resdta[i]['uppid']+'">';myhtml+='<td>'+j+'</td>';myhtml+='<td>'+response.resdta[i]['upsitype']+'</td>';myhtml+='<td>'+response.resdta[i]['projstartdate']+'</td>';myhtml+='<td>'+enddate+'</td>';myhtml+='<td>'+response.resdta[i]['dtadd']+'</td>';myhtml+='<td>'+response.resdta[i]['fullname']+'</td>';myhtml+='</tr>';}
website('.appendrow').html(myhtml);website('.paginationmn').html(response.pgnhtml);}
else
{website('.appendrow').html('<tr><td style="text-align:center;" colspan="13">Data Not Found!!!!</td></tr>');website('.paginationmn').html(response.pgnhtml);}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});}
website('body').on('click','.getallups',function(e)
{var baseHref=getbaseurl();var upsid=website(this).attr('upsid');window.location.href=baseHref+"mis/mis_infosharing?upsid="+upsid;});website('.genfile').on('click',function(e){var request=website(this).attr('request');var formdata={request:request}
website.ajax({url:'mis/fetchallupsiexport',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{website('.preloder_wraper').fadeIn();},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response)
{if(response.logged==true)
{website('.dwnldExcel').fadeIn();website('.dwnldExcel').attr('href',response.genfile);website('#alertcommon #allalertmsg').html(response.message);website('#alertcommon').modal('show');}
else
{website('#alertcommon #allalertmsg').html(response.message);website('#alertcommon').modal('show');}},complete:function(response)
{website('.preloder_wraper').fadeOut();},error:function(response)
{}});});;