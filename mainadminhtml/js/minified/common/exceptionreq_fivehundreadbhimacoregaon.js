
checkredirecturl();function checkredirecturl()
{var redirecturl=website('#redirecturl').val();if(redirecturl=="modal")
{website('#Mymodalreq').modal('show');}}
website('body').on('click','.paginationmn li',function(e)
{var rscrntpg=website(this).attr('p');website('.panel.panel-white #pagenum').val(rscrntpg);getalltradingrequest();});website('body').on('change','#noofrows',function(e)
{getalltradingrequest();});website('body').on('click','.go_button',function(e)
{var rscrntpg=website('.gotobtn').val();website('.panel.panel-white #pagenum').val(rscrntpg);getalltradingrequest();});datepicker();function datepicker(){website('.bootdatepick').datetimepicker({weekStart:1,todayBtn:0,autoclose:1,todayHighlight:0,startView:2,minView:2,forceParse:0,format:"dd-mm-yyyy"}).on('change',function(e,date)
{var getdate=website(this).val();var getid=website(this).closest('form').attr('id');});}
website('.relativesform').hide();website('.personal').click(function(e){e.preventDefault();website(this).addClass('active');website('.relatives').removeClass('active');website('.personaldetails').show();website('.relativesform').hide();});website('.relatives').click(function(e){e.preventDefault();website(this).addClass('active');website('.personal').removeClass('active');website('.relativesform').show();website('.personaldetails').hide();});website('.createreq').click(function(e)
{website('#Mymodalreq').modal('show');});website("#pricepershare").keyup(function(){var noofshare=website('#noofshare').val();var pricepershare=website('#pricepershare').val();if(noofshare!=''&&pricepershare!='')
{var totalamt=noofshare*pricepershare;website('#totalamt').val(totalamt)}});onkeysearchcmp();function onkeysearchcmp(){website('#searchcmp').css("display","none");website("#nameofcmp").keyup(function(){var search=website('#nameofcmp').val();var addhtml='';website('#tradinform #searchcmp').html("");var formdata={search:search};if(search==''){website('#searchcmp').css("display","none");}
else{website.ajax({url:'exceptionreq/searchcompany',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{addhtml+='<ul>';if(response.logged==true)
{website('#searchcmp').css("display","block");for(var i=0;i<response.data.length;i++)
{addhtml+='<li  id="'+response.data[i].id+'" name="'+response.data[i].company_name+'"  class="topul validatorsid">'+response.data[i].company_name+'</li>';}}
else{addhtml+='<li> Result Not Found..!!</li>';}
addhtml+='</ul>';website('#tradinform #searchcmp').html(addhtml);},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});}});}
website("body").on("click",".topul",function(e){var id=website(this).attr('id');website('#idofcmp').val(id);var name=website(this).attr('name');website('#nameofcmp').val(name);website('#searchcmp').css("display","none");});website("body").on("click",".myupnaresh",function(e){var id=website(this).attr('id');website('#tradinformupdate #idofcmp').val(id);var name=website(this).attr('name');website('#tradinformupdate #nameofcmp').val(name);website('#tradinformupdate #searchcmp').css("display","none");});website('body').on('click','.sendrequst',function()
{var approverids=website('#approverid').val();website('#checkappvlrequest #approverid').val(approverids);var reqnames=website('#reqname').val();website('#checkappvlrequest #reqname').val(reqnames);var typeofrequests=website('#typeofrequest').val();website('#checkappvlrequest #typeofrequest').val(typeofrequests);var selrelatives=website('#selrelative').val();website('#checkappvlrequest #selrelative').val(selrelatives);var idofcmps=website('#idofcmp').val();website('#checkappvlrequest #idofcmp').val(idofcmps);var nameofcmps=website('#nameofcmp').val();website('#checkappvlrequest #nameofcmp').val(nameofcmps);var noofshares=website('#noofshare').val();website('#checkappvlrequest #noofshare').val(noofshares);var sectypes=website('#sectypeid').val();website('#checkappvlrequest #sectype').val(sectypes);var typeoftranss=website('#typeoftrans').val();website('#checkappvlrequest #typeoftrans').val(typeoftranss);var sendreq=website('#sendrequest').val();website('#checkappvlrequest #sendreq').val(sendreq);website('#checkappvlrequest').modal('show');console.log('hello');return false;});website('body').on('click','.reqdraft',function()
{draftreq();console.log('here');return false;});function draftreq()
{var approverid=website('#approverid').val();var reqname=website('#reqname').val();var typeofrequest=website('#typeofrequest').val();var selrelative=website('#selrelative').val();var idofcmp=website('#idofcmp').val();var nameofcmp=website('#nameofcmp').val();var noofshare=website('#noofshare').val();var sectype=website('#sectypeid').val();var typeoftrans=website('#typeoftrans').val();var sendreq='';var formdata={approverid:approverid,reqname:reqname,typeofrequest:typeofrequest,selrelative:selrelative,sectype:sectype,idofcmp:idofcmp,nameofcmp:nameofcmp,noofshare:noofshare,typeoftrans:typeoftrans,sendreq:sendreq};website.ajax({url:'exceptionreq/exctradingrequests',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{website('.personaldetails #Mymodalreq').modal('hide');getalltradingrequest();new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}
else
{new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{},error:function()
{}});}
website('body').on('click','#Yesreqst',function(e)
{var approverid=website('#checkappvlrequest #approverid').val();var reqname=website('#checkappvlrequest #reqname').val();var typeofrequest=website('#checkappvlrequest #typeofrequest').val();var selrelative=website('#checkappvlrequest #selrelative').val();var sectype=website('#checkappvlrequest #sectype').val();var idofcmp=website('#checkappvlrequest #idofcmp').val();var nameofcmp=website('#checkappvlrequest #nameofcmp').val();var noofshare=website('#checkappvlrequest #noofshare').val();var typeoftrans=website('#checkappvlrequest #typeoftrans').val();var sendreq=website('#checkappvlrequest #sendreq').val();var formdata={approverid:approverid,reqname:reqname,typeofrequest:typeofrequest,selrelative:selrelative,sectype:sectype,idofcmp:idofcmp,nameofcmp:nameofcmp,noofshare:noofshare,typeoftrans:typeoftrans,sendreq:sendreq};website.ajax({url:'exceptionreq/exctradingrequests',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{website('#checkappvlrequest').modal('hide');website('.personaldetails #Mymodalreq').modal('hide');getalltradingrequest();new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}
else
{new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{},error:function()
{}});});website('#uploadtrade').ajaxForm({dataType:"json",beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{website('#uploadmyfile').modal('hide');getalltradingrequest();new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}
else{new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{},error:function()
{}});website('#tradinformupdate').ajaxForm({dataType:"json",beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{website('.personaldetails #updatemodal').modal('hide');getalltradingrequest();new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}
else
{new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{},error:function()
{}});getalltradingrequest();function getalltradingrequest()
{var noofrows=website('#noofrows').val();var pagenum=website('#pagenum').val();var myredirecturl=website('#redirecturl').val();var formdata={noofrows:noofrows,pagenum:pagenum,redirecturl:myredirecturl};website.ajax({url:'exceptionreq/excgettradingrequest',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged==true)
{var addhtmlnxt='';for(var i=0;i<response.data.length;i++)
{var j=i+1;var demat_acc_no=response.data[i].demat_acc_no?response.data[i].demat_acc_no:'';var sectype=response.data[i].security_type?response.data[i].security_type:'';var name_of_company=response.data[i].mycompany?response.data[i].mycompany:''
var no_of_shares=response.data[i].no_of_shares?response.data[i].no_of_shares:'';var type_of_transaction=response.data[i].transaction?response.data[i].transaction:'';var price_per_share=response.data[i].price_per_share?response.data[i].price_per_share:''
var total_amount=response.data[i].total_amount?response.data[i].total_amount:'';var date_added=response.data[i].date_added?response.data[i].date_added:'';var date_modified=response.data[i].date_modified?response.data[i].date_modified:'';var transaction_date=response.data[i].date_of_transaction?response.data[i].date_of_transaction:'';var trading_date=response.data[i].trading_date?response.data[i].trading_date:'';var send_status=response.data[i].send_status;var approved_status=response.data[i].approved_status;var file=response.data[i].file?response.data[i].file:'';var type_of_request=response.data[i].type_of_request?response.data[i].type_of_request:'';var trading_status=response.data[i].trading_status?response.data[i].trading_status:'';var message=response.data[i].rejmessage?response.data[i].rejmessage:'';var typeofrequest=response.data[i].request_type?response.data[i].request_type:'';var nameofreq=response.data[i].name?response.data[i].name:'';var relationship=response.data[i].relationship?response.data[i].relationship:'';var excep_approv=response.data[i].excepapp_status?response.data[i].excepapp_status:'';addhtmlnxt+='<tr class="counter" tempid="'+response.data[i].id+'" >';addhtmlnxt+='<td>'+j+'</td>';addhtmlnxt+='<td>'+sectype+'</td>';addhtmlnxt+='<td>'+name_of_company+'</td>';addhtmlnxt+='<td>'+type_of_transaction+'</td>';addhtmlnxt+='<td>'+no_of_shares+'</td>';addhtmlnxt+='<td>'+typeofrequest+'</td>';addhtmlnxt+='<td>'+nameofreq+'</td>';addhtmlnxt+='<td>'+relationship+'</td>';if(send_status==1)
{addhtmlnxt+='<td width="15%">Sent</td>';}
else
{addhtmlnxt+='<td width="15%">Drafted</td>';}
if(excep_approv==1){addhtmlnxt+='<td width="15%"><i class="fa fa-check-circle" style="font-size:18px;color:green;">Approved</i></td>';}
else if(excep_approv==2)
{addhtmlnxt+='<td width="15%" class="rejmessage" mymessage="'+message+'"><i class="fa fa-close" style="font-size:18px;color:red;">Rejected</i></td>';}
else{addhtmlnxt+='<td width="15%">Not Approved</td>';}
addhtmlnxt+='<td width="15%">'+transaction_date+'</td>';addhtmlnxt+='<td width="15%">'+date_modified+'</td>';addhtmlnxt+='<td width="15%">'+file+'<p reqid="'+response.data[i].myid+'" class="checkstatus"><i class="fa fa-line-chart" style="color:green;"></i></p></td>';addhtmlnxt+='<td width="15%"><i class="fa fa-bar-chart excprequsttrail" rqstid="'+response.data[i].id+'" trdeid="'+response.data[i].myid+'" ></i></td>';addhtmlnxt+='</tr>';}}
else
{addhtmlnxt+='<td width="15%" colspan="13" style="text-align:center;">Data No Found..!!!</td>';}
website(".reqtable").html(addhtmlnxt);website('.paginationmn').html(response.pgnhtml);},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});}
website("body").on("click",".delreq",function(e){var delid=website(this).attr('perdelid');website("#deletereq").attr('tempid',delid)
website('#delmod').modal('show');});website("body").on("click","#deletereq",function(e){var delid=website(this).attr('tempid');website.ajax({url:'exceptionreq/deletepersrequest',data:{delid:delid},method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged==true)
{getalltradingrequest();website('#delmod').modal('hide');new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}
else{new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}})})
website("body").on("click",".editper",function(e)
{var editid=website(this).attr('pereditid');website.ajax({url:'exceptionreq/excgetsinglereq',data:{editid:editid},method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged==true)
{website('#updatemodal #typeofrequest [value="'+response.data.type_of_request+'"]').attr('selected','true');website('#updatemodal #sectype [value="'+response.data.sectype+'"]').attr('selected','true');website('#updatemodal #typeoftrans [value="'+response.data.type_of_transaction+'"]').attr('selected','true');website('#updatemodal #noofshare').val(response.data.no_of_shares);website('#updatemodal #transdate').val(response.data.transaction_date);website('#updatemodal #pricepershare').val(response.data.price_per_share);website('#updatemodal #totalamt').val(response.data.total_amount);website('#updatemodal #nameofcmp').val(response.data.name_of_company);website('#updatemodal #idofcmp').val(response.data.id_of_company);website('#updatemodal #editid').val(editid);if(response.data.type_of_request==2)
{website('#updatemodal #selrel').css("display","block");website('#updatemodal #selrelative [value="'+response.data.relative_id+'"]').attr('selected','true');}
else
{website('#updatemodal #selrel').css("display","none");}
website('#updatemodal').modal('show');onkeysearchcmp();selecttypeofreqonmodal();}
else{}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});});website("body").on("click",".close",function(e){website('#searchcmp').css("display","none");});website("body").on("click",".modalclose",function(e){website('#tradinformupdate #searchcmp').css("display","none");});onkeysearchcmpmodal();function onkeysearchcmpmodal(){website('#tradinformupdate #searchcmp').css("display","none");website("#tradinformupdate #nameofcmp").keyup(function(){var search=website('#tradinformupdate #nameofcmp').val();var addhtml='';website('#tradinformupdate #searchcmp').html("");var formdata={search:search};if(search==''){website('#tradinformupdate #searchcmp').css("display","none");}
else{website.ajax({url:'exceptionreq/excsearchcompany',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{addhtml+='<ul>';if(response.logged==true)
{website('#tradinformupdate #searchcmp').css("display","block");for(var i=0;i<response.data.length;i++)
{addhtml+='<li  id="'+response.data[i].id+'" class="myupnaresh" cmpid="'+response.data[i].id+'" name="'+response.data[i].company_name+'">'+response.data[i].company_name+'</li>';}}
else{addhtml+='<li> Result Not Found..!!</li>';}
addhtml+='</ul>';website('#tradinformupdate #searchcmp').html(addhtml);},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});}});}
website("body").on("click",".getallchkbox",function(e){if(website(this).is(":checked"))
{website('div input').attr('checked',true);}
else
{website('div input').attr('checked',false);}});website("body").on("click","#sendmulreq",function(e){var selected_value=[];website(".sendchkbox:checked").each(function(){selected_value.push(website(this).val());});website('#checkappvlreq #selctedid').val(selected_value);website('#checkappvlreq #selctedidlength').val(selected_value.length);website('#checkappvlreq').modal('show');});website("body").on("click","#Yesreqstsend",function(e){var selctedid=website('#checkappvlreq #selctedid').val();var selected_value=website('#checkappvlreq #selctedidlength').val();if(selected_value>0){website.ajax({url:'exceptionreq/sendmultiplereq',data:{selctedid:selctedid},method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged==true)
{website('#checkappvlreq').modal('hide');getalltradingrequest();new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}
else{new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}})}
else{new PNotify({title:'Alert',text:"You Should Selct At Least One Request",type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}});website("body").on("click",".uploadfile",function(e){var editid=website(this).attr('editid');var typeofreq=website(this).attr('typeofreq');var compid=website(this).attr('compid');var sectype=website(this).attr('sectype');var total=website(this).attr('modtotal');var priceofshare=website(this).attr('modpriceshare');var noofshare=website(this).attr('modnoofshare');var transdate=website(this).attr('modaltransdate');var tradedate=website(this).attr('trading_date');website.ajax({url:'exceptionreq/checktradestatus',data:{editid:editid,typeofreq:typeofreq},method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged==true)
{tradestatus=response.data['trading_status'];var noofshare1=response.data.no_of_share?response.data.no_of_share:"";var priceofshare1=response.data.price_per_share?response.data.price_per_share:"";var total1=response.data.total_amount?response.data.total_amount:"";var transdate1=response.data.date_of_transaction?response.data.date_of_transaction:"";var myhtml='<tr><td><input type="text" name="noofshare" value="'+noofshare1+'" id="noofshare" class="form-control" size="20px"></td><td><input type="text" name="priceofshare" value="'+priceofshare1+'" id="pricepershare" class="form-control" size="20px">'+'</td><td><input type="text" name="total" value="'+total1+'" id="totalamt" class="form-control" size="20px"></td><td><input type="text"  name="transdate" value="'+transdate1+'" class="form-control bootdatepick" size="20px"></td>';var appendsel='';website.each(response.dematacc,function(index,value){if(response.data.demat_acc_no==value['accountno'])
{appendsel+='<option value='+value['accountno']+' selected>'+value['accountno']+'</option>';}
else{appendsel+='<option value='+value['accountno']+'>'+value['accountno']+'</option>';}});myhtml+='<td><select id="dmatacc" name="dmatacc" class="form_fields form-control col-md-7 col-xs-12" required>'+appendsel+'</select></td></tr>';website('#uploadmyfile #filereqid').val(editid);website('#uploadmyfile #compid').val(compid);website('#uploadmyfile #sectype').val(sectype);website('#uploadmyfile #tradedate').val(tradedate);website('.modtable').html(myhtml);website('#uploadmyfile').modal('show');datepicker();}
else{var myhtml='<tr><td><input type="text" name="noofshare" value="'+noofshare+'" id="noofshare" class="form-control" size="20px"></td><td><input type="text" name="priceofshare" value="'+priceofshare+'" id="pricepershare" class="form-control" size="20px">'+'</td><td><input type="text" name="total" value="'+total+'" id="totalamt" class="form-control" size="20px"></td><td><input type="text"  name="transdate" value="'+transdate+'" class="form-control bootdatepick" size="20px"></td>';var appendsel='';website.each(response.dematacc,function(index,value){appendsel+='<option value='+value['accountno']+'>'+value['accountno']+'</option>';});myhtml+='<td><select id="dmatacc" name="dmatacc" class="form_fields form-control col-md-7 col-xs-12" required>'+appendsel+'</select></td></tr>';website('#uploadmyfile #filereqid').val(editid);website('#uploadmyfile #compid').val(compid);website('#uploadmyfile #sectype').val(sectype);website('#uploadmyfile #tradedate').val(tradedate);website('.modtable').html(myhtml);website('#uploadmyfile').modal('show');datepicker();}}});});website("body").on("click",".rejmessage",function(e){var mymessage=website(this).attr('mymessage');console.log(mymessage);website('#mymess').val(mymessage);website('#commentmodal').modal('show');});website("body").on("click",".notrade",function(e){website(".dispalytrade").css("display","none");website(".notrading").css("display","block");});website("body").on("click",".yestrade",function(e){website(".dispalytrade").css("display","block");website(".notrading").css("display","none");});website("body").on("click","#nottrade",function(e){var reqid=website('#filereqid').val();website.ajax({url:'exceptionreq/notdonetrade',data:{reqid:reqid},method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged==true)
{new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});website('#uploadmyfile').modal('hide');getalltradingrequest();}
else
{new PNotify({title:'Alert',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}}});});hidereldropdown();function hidereldropdown(){website('#selrel').css("display","none");}
selecttypeofreqonmodal();function selecttypeofreqonmodal()
{website("body").on("click","#updatemodal #typeofrequest",function(e){var typeofreq=website("#updatemodal #typeofrequest option:selected").val();if(typeofreq==2)
{website('#updatemodal #selrel').css("display","block");}
else
{website('#updatemodal #selrel').css("display","none");}});}
selecttypeofreq();function selecttypeofreq()
{website("body").on("click","#typeofrequest",function(e){var typeofreq=website("#typeofrequest option:selected").val();if(typeofreq==2)
{website('#selrel').css("display","block");}
else
{website('#selrel').css("display","none");}});}
website("body").on("click",".checkstatus",function(e){var reqid=website(this).attr('reqid');website.ajax({url:'exceptionreq/getsuccesstrade',data:{reqid:reqid},method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged==true){var noofshare=response.data.no_of_share?response.data.no_of_share:'Not Found';var price_per_share=response.data.price_per_share?response.data.price_per_share:'Not Found';var total_amount=response.data.total_amount?response.data.total_amount:'Not Found';var date_of_transaction=response.data.date_of_transaction?response.data.date_of_transaction:'Not Found';var demat_acc_no=response.data.demat_acc_no?response.data.demat_acc_no:'Not Found';var addhtmlnxt='<tr>';addhtmlnxt+='<td>'+noofshare+'</td>';addhtmlnxt+='<td>'+price_per_share+'</td>';addhtmlnxt+='<td>'+total_amount+'</td>';addhtmlnxt+='<td>'+date_of_transaction+'</td>';addhtmlnxt+='<td>'+demat_acc_no+'</td>';addhtmlnxt+='</tr>';website('#myModal .statustable').html(addhtmlnxt)
website('#myModal').modal('show');}
else{new PNotify({title:'Alert',text:"Something Went To Wrong",type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}}});});website('body').on('click','#Norequestsend',function(e)
{new PNotify({title:'Alert',text:'You cannot sent request',type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});setTimeout(function(){window.location.reload();},1000);});website('body').on('click','#Norequest',function(e)
{new PNotify({title:'Alert',text:'You cannot sent request',type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});setTimeout(function(){window.location.reload();},1000);});website('body').on("click",".excprequsttrail",function(e){var rqstid=website(this).attr('rqstid');var trdeid=website(this).attr('trdeid');var formdata={rqstid:rqstid,trdeid:trdeid}
website.ajax({url:'exceptionreq/fetchexcereqtrail',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{dteadded=response.data[0].time_added.split("-");dteaddedspace=response.data[0].time_added.split(" ");ddmmyyadded=dteaddedspace[0];dteadded=dteaddedspace[0].split("-");ddmmyyadded=dteadded[2]+'-'+dteadded[1]+'-'+dteadded[0];timesadded=dteaddedspace[1];dtemodified=response.data[0].modified_time.split("-");dtemodifdspace=response.data[0].modified_time.split(" ");ddmmyymodified=dtemodifdspace[0];dtemodified=dtemodifdspace[0].split("-");ddmmyymodified=dtemodified[2]+'-'+dtemodified[1]+'-'+dtemodified[0];timesmodified=dtemodifdspace[1];website('#Mymodalaudittrail .reqstcreateddte').html(ddmmyyadded+' '+timesadded);website('#Mymodalaudittrail .reqstupdteddte').html(ddmmyymodified+' '+timesmodified);if(response.data[0].excep_approv==1)
{if(response.data[0].excepsendaprv_date)
{dtesendaprv=response.data[0].excepsendaprv_date.split("-");dtesendaprvspace=response.data[0].excepsendaprv_date.split(" ");ddmmyysendaprv=dtesendaprvspace[0];dtesendaprv=dtesendaprvspace[0].split("-");ddmmyysendaprv=dtesendaprv[2]+'-'+dtesendaprv[1]+'-'+dtesendaprv[0];timessendaprv=dtesendaprvspace[1];website('#Mymodalaudittrail .reqstsendapprv').html(ddmmyysendaprv+' '+timessendaprv);}}
else
{website('#Mymodalaudittrail .reqstsendapprv').html('');}
if(response.data[0].excepapp_status==1)
{if(response.data[0].excepapprv_date)
{dteaprv=response.data[0].excepapprv_date.split("-");dteaprvspace=response.data[0].excepapprv_date.split(" ");ddmmyyaprv=dteaprvspace[0];dteaprv=dteaprvspace[0].split("-");ddmmyyaprv=dteaprv[2]+'-'+dteaprv[1]+'-'+dteaprv[0];timesaprv=dteaprvspace[1];website('#Mymodalaudittrail .reqstapprvd').html(ddmmyyaprv+' '+timesaprv);}}
else
{website('#Mymodalaudittrail .reqstapprvd').html('');}
if(response.persnreq[0].trading_status==1)
{website('#Mymodalaudittrail .reqsttrdngsts').html('Completed');if(response.persnreq[0].tradestatus_date)
{dtetrdsts=response.persnreq[0].tradestatus_date.split("-");dtetrdstsspace=response.persnreq[0].tradestatus_date.split(" ");ddmmyytrdsts=dtetrdstsspace[0];dtetrdsts=dtetrdstsspace[0].split("-");ddmmyytrdsts=dtetrdsts[2]+'-'+dtetrdsts[1]+'-'+dtetrdsts[0];timestrdsts=dtetrdstsspace[1];website('#Mymodalaudittrail .reqststsupdate').html(ddmmyytrdsts+' '+timestrdsts);}
if(response.data[0].date_of_transaction)
{dtetransdate=response.data[0].date_of_transaction.split("-");dtetransdatespace=response.data[0].date_of_transaction.split(" ");ddmmyytransdate=dtetransdatespace[0];dtetransdate=dtetransdatespace[0].split("-");ddmmyytransdate=dtetransdate[2]+'-'+dtetransdate[1]+'-'+dtetransdate[0];website('#Mymodalaudittrail .reqsttranscmplt').html(ddmmyytransdate);}}
else
{website('#Mymodalaudittrail .reqsttrdngsts').html('Pending');website('#Mymodalaudittrail .reqststsupdate').html('');website('#Mymodalaudittrail .reqsttranscmplt').html('');}
website('#Mymodalaudittrail').modal('show');}
else
{}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});});;