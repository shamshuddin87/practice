
website('body').on('click','.paginationmn li',function(e)
{var rscrntpg=website(this).attr('p');website('.panel.panel-white #pagenum').val(rscrntpg);getinitialdisclsr();});website('body').on('change','#noofrows',function(e)
{getinitialdisclsr();});website('body').on('click','.go_button',function(e)
{var rscrntpg=website('.gotobtn').val();website('.panel.panel-white #pagenum').val(rscrntpg);getinitialdisclsr();});website('body').on('change','#filterstatus',function(e)
{getinitialdisclsr();});datepicker();function datepicker(){website('.bootdatepick').datetimepicker({weekStart:1,todayBtn:0,autoclose:1,todayHighlight:0,startView:2,minView:2,forceParse:0,format:"dd-mm-yyyy"}).on('change',function(e,date)
{var getdate=website(this).val();var getid=website(this).closest('form').attr('id');});}
getinitialdisclsr();function getinitialdisclsr()
{var noofrows=website('#noofrows').val();var pagenum=website('#pagenum').val();var filterstatus=website('#filterstatus').val();var search=website('#srch').val();website.ajax({url:'mis/pendinginitialdisclsr',data:{noofrows:noofrows,pagenum:pagenum,search:search,filterstatus:filterstatus},method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{var htmlelements='';if(response.logged==true)
{for(var i=0;i<response.data.length;i++)
{var j=i+1;htmlelements+='<tr>';var sent_date=response.data[i].sent_date?response.data[i].sent_date:'';htmlelements+='<td width="10%">'+j+'</td>';htmlelements+='<td width="10%">'+response.data[i].fullname+'</td>';htmlelements+='<td width="10%">'+response.data[i].dpdate+'</td>';htmlelements+='<td width="10%">'+sent_date+'</td>';if(response.data[i].sent_date)
{htmlelements+='<td width="10%"><a target="_blank" href="'+response.data[i].pdfpath+'" class="downlodthfle" style="color:black;"><span class="glyphicon glyphicon-download-alt floatleft"></span></a></td>';}
else
{htmlelements+='<td width="10%"></td>';}
htmlelements+='</tr>';}}
else
{htmlelements+='<tr>';htmlelements+='<td colspan="8" style="text-align: center;">Data Not Found..!!</td></tr>';}
website('.accdetails8').html(htmlelements);website('#acc8').html(response.pgnhtml);},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});}
website("#srch").on("keyup",function(){var search=website('#srch').val();var pagenum=website('#pagenum').val();website('#srch').attr('status','0');if(pagenum!=1)
{website('#pagenum').val(1);}
getinitialdisclsr();});;