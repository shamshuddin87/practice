
website('.bootdatepick').datetimepicker({weekStart:1,todayBtn:0,autoclose:1,todayHighlight:0,startView:2,minView:2,forceParse:0,format:"yyyy-mm-dd"}).on('change',function(e,date)
{var getdate=website(this).val();console.log(getdate);var getid=website(this).closest('form').attr('id');});website('document').ready(function()
{var rqid=website('#rqst').val();var vote=website('#vote').val();if(vote==1)
{var formdata={rqid:rqid,vote:vote}
website.ajax({url:'request/updaterequst',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{website('#apprvrqst').html(response.apprvmsg);sendmailackreqstr(response.rqstid);}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});}
else
{website('.forreject').show();website('#updaterqststatus').ajaxForm({dataType:"json",beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{if(response.logged===true)
{website('.forreject').hide();website('#apprvrqst').hide();website('#rejctmsg').html(response.rejctmsg);}}},complete:function(response)
{},error:function()
{}});}});function sendmailackreqstr(rqstid)
{var formdata={rqstid:rqstid}
website.ajax({url:'request/mailacknwtoapprvr',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});};