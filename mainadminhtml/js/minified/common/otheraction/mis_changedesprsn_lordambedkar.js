
website('body').on('click','.paginationmn li',function(e)
{var rscrntpg=website(this).attr('p');website('.panel.panel-white #pagenum').val(rscrntpg);getmischngedesprsn();});website('body').on('change','#noofrows',function(e)
{getmischngedesprsn();});website('body').on('click','.go_button',function(e)
{var rscrntpg=website('.gotobtn').val();website('.panel.panel-white #pagenum').val(rscrntpg);getmischngedesprsn();});datepicker();function datepicker(){website('.bootdatepick').datetimepicker({weekStart:1,todayBtn:0,autoclose:1,todayHighlight:0,startView:2,minView:2,forceParse:0,format:"yyyy-mm-dd"}).on('change',function(e,date)
{var getdate=website(this).val();var getid=website(this).closest('form').attr('id');});}
function changeFunc(){var selectBox=document.getElementById("dresign");var selectedValue=selectBox.options[selectBox.selectedIndex].value;getmischngedesprsn();}
website('body').on('change','#emp_status',function(e)
{getmischngedesprsn();});getmischngedesprsn();function getmischngedesprsn()
{var search=website('#srch').val();var noofrows=website('#noofrows').val();var pagenum=website('#pagenum').val();var startdate=website('#date1').val();var enddate=website('#date2').val();var dresign=website('#dresign').val();var emp_status=website('#emp_status').val();website.ajax({url:'mis/mischngedesprsn',data:{noofrows:noofrows,pagenum:pagenum,search:search,startdate:startdate,enddate:enddate,dresign:dresign,emp_status:emp_status},method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{var htmlelements='';if(response.logged==true)
{for(var i=0;i<response.data.length;i++)
{var j=i+1;var resign=response.data[i].dpdate?response.data[i].dpdate:'';htmlelements+='<tr>';htmlelements+='<td width="10%">'+j+'</td>';htmlelements+='<td width="10%">'+response.data[i].fullname+'</td>';if(response.data[i].emp_status=='1')
{htmlelements+='<td width="10%">Active</td>';}
else if(response.data[i].emp_status=='2')
{htmlelements+='<td width="10%">Resigned</td>';}
else if(response.data[i].emp_status=='3')
{htmlelements+='<td width="10%">Not a DP</td>';}
htmlelements+='<td width="10%">'+resign+'</td>'
if(response.data[i].status==1)
{htmlelements+='<td width="10%">Addition</td>';}
else if(response.data[i].status==0)
{htmlelements+='<td width="10%">Deletion</td>';}
else
{htmlelements+='<td width="10%"></td>';}
htmlelements+='<td width="10%">'+response.data[i].date_modified+'</td>';htmlelements+='</tr>';}}
else
{htmlelements+='<tr>';htmlelements+='<td colspan="8" style="text-align: center;">Data Not Found..!!</td></tr>';}
website('.accdetails8').html(htmlelements);website('#acc8').html(response.pgnhtml);},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});}
website("#srch").on("keyup",function(){var search=website('#srch').val();var pagenum=website('#pagenum').val();website('#srch').attr('status','0');if(pagenum!=1)
{website('#pagenum').val(1);}
getmischngedesprsn();});website('body').on('click','#dtrange',function(e)
{getmischngedesprsn();});;