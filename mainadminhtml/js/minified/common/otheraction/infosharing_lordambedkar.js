
website(document).ready(function()
{getdataonload();website('.bootdatepick').datetimepicker({weekStart:1,todayBtn:0,autoclose:1,todayHighlight:0,startView:2,minView:2,forceParse:0,format:"dd-mm-yyyy"}).on('change',function(e,date)
{var getdate=website(this).val();var getid=website(this).closest('form').attr('id');});});website('#insertinfosharing').ajaxForm({dataType:"json",beforeSend:function()
{website('.preloder_wraper').fadeIn();},uploadProgress:function(event,position,total,percentComplete)
{website('.preloder_wraper').fadeIn();},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{new PNotify({title:'Record Added Successfully',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});window.location.reload();getdataonload();}else{new PNotify({title:'Record Not Added',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{website('.preloder_wraper').fadeOut();},error:function(jqXHR,textStatus,errorThrown)
{}});website('body').on('change','#noofrows',function(e)
{getdataonload();});website('body').on('click','.paginationmn li',function(e)
{var rscrntpg=website(this).attr('p');website('.panel.panel-white #pagenum').val(rscrntpg);getdataonload();});website('body').on('click','.go_button',function(e)
{var rscrntpg=website('.gotobtn').val();website('.panel.panel-white #pagenum').val(rscrntpg);getdataonload();});function getdataonload()
{var upsitypeid=website('#upsitypeid').val();var noofrows=website('#noofrows').val();var pagenum=website('#pagenum').val();var formdata={noofrows:noofrows,pagenum:pagenum,upsitypeid:upsitypeid};website.ajax({url:'sensitiveinformation/fetchinfosharing',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{var addhtmlnxt='';for(var i=0;i<response.resdta.length;i++)
{var category=response.resdta[i].category_name?response.resdta[i].category_name:'';var enddate=response.resdta[i].enddate?response.resdta[i].enddate:'';var datefrom=response.resdta[i].sharingdate;var upsiname=response.resdta[i].upsiname;var time=response.resdta[i].sharingtime?response.resdta[i].sharingtime:'';var newtime=time.replace(/:[^:]*$/,'');addhtmlnxt+='<tr class="counter" aprvllistid="'+response.resdta[i].id+'" >';addhtmlnxt+='<td width="10%">'+response.resdta[i].name+'</td>';if(response.resdta[i].category==16)
{category=response.resdta[i].othercategory?response.resdta[i].othercategory:'';}
addhtmlnxt+='<td width="10%">'+category+'</td>';addhtmlnxt+='<td width="10%">'+datefrom+'</td>';addhtmlnxt+='<td width="5%">'+newtime+'</td>';addhtmlnxt+='<td width="10%">'+enddate+'</td>';addhtmlnxt+='<td width="10%">'+response.resdta[i].datashared+'</td>';addhtmlnxt+='<td width="10%">'+response.resdta[i].purpose+'</td>';addhtmlnxt+='<td width="10%">'+upsiname+'</td>';addhtmlnxt+='<td width="5%"><i class="fa fa-bar-chart viewtrail" infoshrid="'+response.resdta[i].id+'"></i></td>';addhtmlnxt+='<td width="10%">'+response.resdta[i].fullname+'</td>';addhtmlnxt+='<td width="25%">';if(response.getaccess[0].upsi_infoshare_delete==1)
{addhtmlnxt+='<i class="fa fa-trash-o faicon floatleft deleterestrictedcmp" title="Delete entry" aprvllistid="'+response.resdta[i].id+'" ></i>';}
else
{addhtmlnxt+='';}
if(enddate=='')
{addhtmlnxt+='<i class="fa fa-edit faicon floatleft editenddate" title="View entry" infoidtid="'+response.resdta[i].id+'"></i>';}
addhtmlnxt+='</td>';addhtmlnxt+='</tr>';}
if(response.getaccess[0].upsi_infoshare_add==1)
{website('.formelementmain').css('display','block');}
else
{website('.formelementmain').css('display','none');website('#alertcommon #allalertmsg').html("You Do Not Have Access To Add Info Sharing");website('#alertcommon').modal('show');}
if(response.getaccess[0].upsi_infoshare_view==1)
{website('.table-responsive.table_wraper ').css('display','block');website('.appendrow').html(addhtmlnxt);website('.paginationmn').html(response.pgnhtml);}
else
{website('.table-responsive.table_wraper ').css('display','none');website('#alertcommon #allalertmsg').html("You Do Not Have Access To View This Section");website('#alertcommon').modal('show');}}
else
{if(response.getaccess[0].upsi_infoshare_add==1)
{website('.formelementmain').css('display','block');}
else
{website('.formelementmain').css('display','none');website('#alertcommon #allalertmsg').html("You Do Not Have Access To Add Info Sharing");website('#alertcommon').modal('show');}
if(response.getaccess[0].upsi_infoshare_view==1)
{website('.table-responsive.table_wraper ').css('display','block');website('.appendrow').html('<tr><td style="text-align:center;" colspan="14">Data Not Found!!!!</td></tr>');website('.paginationmn').html(response.pgnhtml);}
else
{website('.table-responsive.table_wraper ').css('display','none');website('#alertcommon #allalertmsg').html("You Do Not Have Access To View This Section");website('#alertcommon').modal('show');}}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});}
website('body').on('click','.editrestrictedcmp',function(){var id=website(this).attr('aprvllistid');var formdata={id:id};website.ajax({url:'sensitiveinformation/fetchinfosharingforedit',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{var datefrom=response.data['0'].date;datefrom=datefrom.split(' ')[0];dtfrmtfrom=datefrom.split("-");dtfrmtspacefrom=datefrom.split(" ");ddmmyyfrom=dtfrmtspacefrom[0];dtfrmtfrom=dtfrmtspacefrom[0].split("-");ddmmyyfrom=dtfrmtfrom[2]+'-'+dtfrmtfrom[1]+'-'+dtfrmtfrom[0];var appendhtml='';website("#Mymodaledit #name").val(response.data['0'].name);website("#Mymodaledit #date").val(ddmmyyfrom);website("#Mymodaledit #datashared").val(response.data['0'].datashared);website("#Mymodaledit #purpose").val(response.data['0'].purpose);website('#updateinfosharing #tempid').val(id);website('#updateinfosharing #filepath').val(response.data['0'].filepath);website('#Mymodaledit').modal('show');}
else
{website('.appendrowwaprvl').html('');}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});});website('body').on('click','.editenddate',function(){var id=website(this).attr('infoidtid');website('#updateenddate #tempid').val(id);website('#Mymodalenddateedit').modal('show');});website('#updateinfosharing').ajaxForm({dataType:"json",beforeSend:function()
{website('.preloder_wraper').fadeIn();},uploadProgress:function(event,position,total,percentComplete)
{website('#Mymodaledit').modal('hide');website('.preloder_wraper').fadeIn();},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{new PNotify({title:'Record Updated Successfully',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});window.location.reload();}
else
{new PNotify({title:'Record Not Updated',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{website('#Mymodaledit .mainprogressbarforall').fadeOut();},error:function()
{}});website('#updateenddate').ajaxForm({dataType:"json",beforeSend:function()
{website('.preloder_wraper').fadeIn();},uploadProgress:function(event,position,total,percentComplete)
{website('#Mymodaledit').modal('hide');website('.preloder_wraper').fadeIn();},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{new PNotify({title:'Record Updated Successfully',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});window.location.reload();}
else
{new PNotify({title:'Record Not Updated',text:response.message,type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{website('.preloder_wraper').fadeOut();website('#Mymodaledit .mainprogressbarforall').fadeOut();},error:function()
{}});website('body').on('click','.deleterestrictedcmp',function(){var id=website(this).attr('aprvllistid');website('#myModalyesno').modal('show');website('#myModalyesno .yesconfirm').attr('aprvllistid',id);});website('body').on('click','.yesconfirm',function(){var id=website(this).attr('aprvllistid');var formdata={id:id};website.ajax({url:'sensitiveinformation/infosharingfordelete',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{window.location.reload();new PNotify({title:'Record Deleted Successfully',text:'Record Deleted Successfully',type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}
else
{new PNotify({title:'Record Not Deleted',text:'Record Not Updated',type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{website('#myModalyesno .mainprogressbarforall').fadeOut();},error:function()
{}});});function numberalphOnly()
{var charCode=event.keyCode;if((charCode>47&&charCode<58)||charCode==32||(charCode>64&&charCode<91)||(charCode>96&&charCode<123)||charCode==8||charCode==44||charCode==40||charCode==41||charCode==46||charCode==47)
return true;else
return false;}
var timer=0;function mySearch(){var getvalue=website('.header-search-input').val();doSearch(getvalue);}
website('.header-search-input').on('keyup',function(e){var getkeycode=website.trim(e.keyCode);if(getkeycode!='40'&&getkeycode!='38'&&getkeycode!='13'){if(timer){clearTimeout(timer);}
timer=setTimeout(mySearch,400);}});var timer=0;function mySearchforedit(){var getvalue=website('#Mymodaledit .header-search-input').val();doSearchforedit(getvalue);}
website('#Mymodaledit .header-search-input').on('keyup',function(e){var getkeycode=website.trim(e.keyCode);if(getkeycode!='40'&&getkeycode!='38'&&getkeycode!='13'){if(timer){clearTimeout(timer);}
timer=setTimeout(mySearchforedit,400);}});website("#live-search-header-wrapper").scroll(function(){});website("#Mymodaledit #live-search-header-wrapper").scroll(function(){});function myCustomFn(el){}
website("#live-search-header-wrapper").mCustomScrollbar({scrollButtons:{enable:true,scrollType:"stepped"},keyboard:{scrollType:"stepped"},mouseWheel:{scrollAmount:188},theme:"rounded-dark",autoExpandScrollbar:true,snapAmount:188,snapOffset:65,callbacks:{onScroll:function(){myCustomFn(this);}}});website("#Mymodaledit #live-search-header-wrapper").mCustomScrollbar({scrollButtons:{enable:true,scrollType:"stepped"},keyboard:{scrollType:"stepped"},mouseWheel:{scrollAmount:188},theme:"rounded-dark",autoExpandScrollbar:true,snapAmount:188,snapOffset:65,callbacks:{onScroll:function(){}}});function doSearch(getvalue)
{var getkeyword=getvalue;if(website.trim(getkeyword)=="")
{website('#live-search-header-wrapper ul').html('<li class="noresultfound">No Result Fould!!!!</li>');}
else
{var formdata={searchvallist:getkeyword,geturl:''}
website.ajax({url:'sensitiveinformation/namelists',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{website('#live-search-header-wrapper').fadeIn();website('#live-search-header-wrapper ul').html("<li>Please wait...</li>");website('.mainprogressbarforall .progress').fadeIn();website('.filtr-container').html("");website('.filtr-container').removeAttr("style");website('.filtr-search').fadeIn();website('.filtr-search').val("");},uploadProgress:function(event,position,total,percentComplete)
{website('#live-search-header-wrapper').fadeIn();website('#live-search-header-wrapper ul').html("<li>Please wait...</li>");website('.mainprogressbarforall .progress').fadeIn();website(".mainprogressbarforall .progress .progress-bar").width(percentComplete+'%');},success:function(response,textStatus,jqXHR)
{var addhtml='';website('#live-search-header-wrapper ul').html("");website('#live-search-header-wrapper').fadeIn();if(response.logged==true&&response.data.length>=1)
{for(var i=0;i<response.data.length;i++)
{if(i==0)
{addhtml+='<li rec_id="'+response.data[i].id+'" name="'+response.data[i].name+'" category ="'+response.data[i].category+'" class="topul validatorsid">'+response.data[i].name;addhtml+='<div class="clearelement"></div></li>';}
else if(i==((response.data.length)-1))
{addhtml+='<li rec_id="'+response.data[i].id+'" name="'+response.data[i].name+'" category ="'+response.data[i].category+'"   class="bottomul validatorsid">'+response.data[i].name;addhtml+='<div class="clearelement"></div></li>';}
else
{addhtml+='<li rec_id="'+response.data[i].id+'" name="'+response.data[i].name+'" category ="'+response.data[i].category+'" class="bottomul validatorsid">'+response.data[i].name;addhtml+='<div class="clearelement"></div></li>';}}
website('#live-search-header-wrapper ul').html(addhtml);}
else
{website('#live-search-header-wrapper ul').html('<li class="noresultfound"><span class="resp_new">'+response.message+'</span></li>');}
website(".mainprogressbarforall .progress .progress-bar").width('100%');},complete:function(response)
{website('.search-row').fadeIn();website(".mainprogressbarforall .progress .progress-bar").fadeOut();},error:function(jqXHR,textStatus,errorThrown)
{}});}}
function doSearchforedit(getvalue)
{var getkeyword=getvalue;if(website.trim(getkeyword)=="")
{website('#Mymodaledit #live-search-header-wrapper ul').html('<li class="noresultfound">No Result Fould!!!!</li>');}
else
{var formdata={searchvallist:getkeyword,geturl:''}
website.ajax({url:'sensitiveinformation/namelists',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{website('#Mymodaledit #live-search-header-wrapper').fadeIn();website('#Mymodaledit #live-search-header-wrapper ul').html("<li>Please wait...</li>");website('#Mymodaledit .mainprogressbarforall .progress').fadeIn();website('#Mymodaledit .filtr-container').html("");website('#Mymodaledit .filtr-container').removeAttr("style");website('#Mymodaledit .filtr-search').fadeIn();website('#Mymodaledit .filtr-search').val("");},uploadProgress:function(event,position,total,percentComplete)
{website('#Mymodaledit #live-search-header-wrapper').fadeIn();website('#Mymodaledit #live-search-header-wrapper ul').html("<li>Please wait...</li>");website('#Mymodaledit .mainprogressbarforall .progress').fadeIn();website("#Mymodaledit .mainprogressbarforall .progress .progress-bar").width(percentComplete+'%');},success:function(response,textStatus,jqXHR)
{var addhtml='';website('#Mymodaledit #live-search-header-wrapper ul').html("");website('#Mymodaledit #live-search-header-wrapper').fadeIn();if(response.logged==true&&response.data.length>=1)
{for(var i=0;i<response.data.length;i++)
{if(i==0)
{addhtml+='<li rec_id="'+response.data[i].id+'" name="'+response.data[i].name+'" category ="'+response.data[i].category+'" class="topul validatorsid">'+response.data[i].name;addhtml+='<div class="clearelement"></div></li>';}
else if(i==((response.data.length)-1))
{addhtml+='<li rec_id="'+response.data[i].id+'" name="'+response.data[i].name+'" category ="'+response.data[i].category+'" class="bottomul validatorsid">'+response.data[i].name;addhtml+='<div class="clearelement"></div></li>';}
else
{addhtml+='<li rec_id="'+response.data[i].id+'" name="'+response.data[i].name+'" category ="'+response.data[i].category+'" class="bottomul validatorsid">'+response.data[i].name;addhtml+='<div class="clearelement"></div></li>';}}
website('#live-search-header-wrapper ul').html(addhtml);}
else
{website('#Mymodaledit #live-search-header-wrapper ul').html('<li class="noresultfound"><span class="resp_new">'+response.message+'</span></li>');}
website("#Mymodaledit .mainprogressbarforall .progress .progress-bar").width('100%');},complete:function(response)
{website('#Mymodaledit .search-row').fadeIn();website("#Mymodaledit .mainprogressbarforall .progress .progress-bar").fadeOut();},error:function(jqXHR,textStatus,errorThrown)
{}});}}
website('body').on('click','.validatorsid',function(e){var recid=website(this).attr('rec_id');var name=website(this).attr('name');var cate=website(this).attr('category');website('#insertinfosharing #search-box').val(name);website('#search-box').attr('recid',recid);website('#search-box').attr('recname',name);website('#insertinfosharing #recid').val(recid);website('#insertinfosharing #category').val(cate);website('#live-search-header-wrapper').fadeOut();website('#insertinfosharing #name').val(name);website('#validators').attr('recid',recid);website('#validators').attr('recname',name);});website('body').on('click','#Mymodaledit .validatorsid',function(e){var recid=website(this).attr('rec_id');var name=website(this).attr('name');var cate=website(this).attr('category');website('#updateinfosharing #search-box').val(name);website('#Mymodaledit #search-box').attr('recid',recid);website('#Mymodaledit #search-box').attr('recname',name);website('#Mymodaledit #live-search-header-wrapper').fadeOut();website('#updateinfosharing #recid').val(recid);website('#updateinfosharing #category').val(cate);website('#updateinfosharing #name').val(name);website('#Mymodaledit #validators').attr('recid',recid);website('#Mymodaledit #validators').attr('recname',name);});website(function(){});website(".time_of_data").inputmask();website('body').on("click",".viewtrail",function(e){var infoid=website(this).attr('infoshrid');var formdata={infoid:infoid}
website.ajax({url:'sensitiveinformation/fetchinfotrail',data:formdata,method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{dteadded=response.data.date_added.split("-");dteaddedspace=response.data.date_added.split(" ");ddmmyyadded=dteaddedspace;dteadded=dteaddedspace[0].split("-");ddmmyyadded=dteadded[2]+'-'+dteadded[1]+'-'+dteadded[0];timesadded=dteaddedspace[1];dtemodified=response.data.date_modified.split("-");dtemodifdspace=response.data.date_modified.split(" ");ddmmyymodified=dtemodifdspace[0];dtemodified=dtemodifdspace[0].split("-");ddmmyymodified=dtemodified[2]+'-'+dtemodified[1]+'-'+dtemodified[0];timesmodified=dtemodifdspace[1];website('#Mymodalaudittrail .reqstcreateddte').html(ddmmyyadded+' '+timesadded);website('#Mymodalaudittrail .reqstupdteddte').html(ddmmyymodified+' '+timesmodified);website('#Mymodalaudittrail').modal('show');}
else
{new PNotify({title:'Alert!!',text:'Something Went Wrong',type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});});website('body').on('click','.archiveinfoshr',function(e){var baseHref=getbaseurl();window.location.href=baseHref+'sensitiveinformation/archive_infosharing';});website('body').on('click','.getfile',function(e){filepath=website(this).attr('filepath');website.ajax({url:'sensitiveinformation/getdecryptedfile',data:{filepath:filepath},method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{var baseurl=getbaseurl();var completeurl=baseurl+response.filepath;window.open(completeurl);setTimeout(function(){unlinkfile(response.filepath);},3000);}
else
{new PNotify({title:'Alert!!',text:'Something Went Wrong',type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});});function unlinkfile(filepath)
{website.ajax({url:'sensitiveinformation/unlinkgivenfile',data:{filepath:filepath},method:'POST',contentType:'application/x-www-form-urlencoded; charset=UTF-8',dataType:"json",cache:false,beforeSend:function()
{},uploadProgress:function(event,position,total,percentComplete)
{},success:function(response,textStatus,jqXHR)
{if(response.logged===true)
{new PNotify({title:'Alert!!',text:'File Deleted Successfully',type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}
else
{new PNotify({title:'Alert!!',text:'Something Went Wrong',type:'university',hide:true,styling:'bootstrap3',addclass:'dark ',});}},complete:function(response)
{},error:function(jqXHR,textStatus,errorThrown)
{}});};