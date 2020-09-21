website(document).ready(function()
{
    getdataonload();
    website('.bootdatepick').datetimepicker({
        weekStart: 1,
        todayBtn:  0,
        autoclose: 1,
        todayHighlight: 0,
        startView: 2,
        minView: 2,
        forceParse: 0,
        format: "dd-mm-yyyy"

    }).on('change', function(e, date)
    {
        var getdate = website(this).val();
        // console.log(getdate);
        var getid = website(this).closest('form').attr('id');
    });
    
});
website('body').on('change','#noofrows', function(e) 
{
  getdataonload();
});

website('body').on('click','.paginationmn li', function(e) 
{
    var rscrntpg = website(this).attr('p');
    website('.panel.panel-white #pagenum').val(rscrntpg);
    getdataonload();
});
//-------------------------GO BUTTON-------------------------

website('body').on('click','.go_button', function(e) 
{
   
    var rscrntpg = website('.gotobtn').val();
    website('.panel.panel-white #pagenum').val(rscrntpg);
    getdataonload();
});

   website('#insertholdingsummry').ajaxForm({
      //method:'POST',
      //contentType:'json',
      //contentType:'application/x-www-form-urlencoded; charset=UTF-8',
      //default: 'application/x-www-form-urlencoded; charset=UTF-8' ,'multipart/form-data' , 'text/plain'
      dataType:"json",
      beforeSend: function()
      { website('.preloder_wraper').fadeIn();},
      uploadProgress: function(event, position, total, percentComplete)
      {  website('.preloder_wraper').fadeIn(); },
      success: function(response, textStatus, jqXHR)
      {
        if(response.logged===true)
        {  
          new PNotify({title: 'Record Added Successfully',
            text: response.message,
            type: 'university',
            hide: true,
            styling: 'bootstrap3',
            addclass: 'dark ',
          });
            window.location.reload();
            getdataonload();
          //window.location.reload();
           
            
        }else{
          new PNotify({title: 'Record Not Added',
            text: response.message,
            type: 'university',
            hide: true,
            styling: 'bootstrap3',
            addclass: 'dark ',
          });
        }
      },
      complete: function(response)
      {  website('.preloder_wraper').fadeOut(); },
      error: function(jqXHR, textStatus, errorThrown)
      {   }
  //});
});


website('#updateholdingsummry').ajaxForm({
      //method:'POST',
      //contentType:'json',
      //contentType:'application/x-www-form-urlencoded; charset=UTF-8',
      //default: 'application/x-www-form-urlencoded; charset=UTF-8' ,'multipart/form-data' , 'text/plain'
      dataType:"json",
      beforeSend: function()
      { website('.preloder_wraper').fadeIn();},
      uploadProgress: function(event, position, total, percentComplete)
      {  website('.preloder_wraper').fadeIn(); },
      success: function(response, textStatus, jqXHR)
      {
        if(response.logged===true)
        {  
          new PNotify({title: 'Record Added Successfully',
            text: response.message,
            type: 'university',
            hide: true,
            styling: 'bootstrap3',
            addclass: 'dark ',
          });
         window.location.reload();
            getdataonload();
          //window.location.reload();
           
            
        }else{
          new PNotify({title: 'Record Not Added',
            text: response.message,
            type: 'university',
            hide: true,
            styling: 'bootstrap3',
            addclass: 'dark ',
          });
        }
      },
      complete: function(response)
      {  website('.preloder_wraper').fadeOut(); },
      error: function(jqXHR, textStatus, errorThrown)
      {   }
  //});
});

function getdataonload()
{
    var noofrows = website('#noofrows').val(); 
    var pagenum = website('#pagenum').val();
    var formdata = {noofrows:noofrows,pagenum:pagenum};
    website.ajax({
      url:'holdingsummary/fetchholdingsummary',
      data:formdata,
      method:'POST',
      //contentType:'json',
      contentType:'application/x-www-form-urlencoded; charset=UTF-8',
      //default: 'application/x-www-form-urlencoded; charset=UTF-8' ,'multipart/form-data' , 'text/plain'
      dataType:"json",
      cache:false,
      //async:true, /*Cross domain checking*/
      beforeSend: function()
      {   },
      uploadProgress: function(event, position, total, percentComplete)
      {   },
      success: function(response, textStatus, jqXHR)
      {
        if(response.logged===true)
        {
         var addhtmlnxt='';   
         var equityclosblnc = [];var preferclosblnc = [];var debntrclosblnc = [];
         var equityopnblnc = '';var preferopnblnc = '';var debntropnblnc = '';
         var othercloseequity = [];var othercloseprefer = [];var otherclosedebtr = [];
       
        
        for(var k = response.pagefrm; k <= response.len; k++) 
        {
            addhtmlnxt += '<tr class="counter" aprvllistid="'+response.resdta[k].id+'" >';
            addhtmlnxt += '<td width="20%">'+response.resdta[k].company_name+'</td>';
            addhtmlnxt += '<td width="10%">'+response.resdta[k].equityshare+'</td>'; //equity opening blnc
            addhtmlnxt += '<td width="10%">'+response.resdta[k].prefershare+'</td>'; //prefr opening blnc
            // addhtmlnxt += '<td width="25%">'+response.resdta[k].debntrshare+'</td>'; //debtr opening blnc 
            
                /*----- EQUITY -----*/
              if(response.equity[k]!='')
                {
                    var opnblnceq = response.resdta[k].equityshare;
                    var buyeq = response.equity[k].buyequity;
                    var selleq = response.equity[k].sellequity;
                    var totaleq = Number(buyeq) - Number(selleq);
                    var closblnceq = Number(opnblnceq) + Number(totaleq);
                    equityclosblnc.push({k:closblnceq});

                }
                else
                {
                    var opnblnceq = response.resdta[k].equityshare;
                    var totaleq = 0;
                    var closblnceq = Number(opnblnceq) + Number(totaleq);
                    equityclosblnc.push({k:closblnceq});
                }

                /*----- PREFERENCE -----*/
                if(response.prefer[k] != '')
                {
                    var opnblncpref = response.resdta[k].prefershare;
                    var buypref = response.prefer[k].buyprefer;
                    var sellpref = response.prefer[k].sellprefer;;
                    var totalpref = Number(buypref) - Number(sellpref);
                    var closblncpref = Number(opnblncpref) + Number(totalpref);
                    preferclosblnc.push(closblncpref);
                }
                else
                {
                    var opnblncpref = response.resdta[k].prefershare;
                    var totalpref = 0;
                    var closblncpref = Number(opnblncpref) + Number(totalpref);
                    preferclosblnc.push(closblncpref);
                }
                
                /*----- DEBENTURE -----*/
                if(response.debenture[k] != '')
                {
                    var opnblncdeb = response.resdta[k].debntrshare;
                    var buydeb = response.debenture[k].buydebtr;
                    var selldeb = response.debenture[k].selldebtr;;
                    var totaldeb = Number(buydeb) - Number(selldeb);
                    var closblncdeb = Number(opnblncdeb) + Number(totaldeb);
                    debntrclosblnc.push(closblncdeb);
                }
                else
                {
                    var opnblncdeb = response.resdta[k].debntrshare;
                    var totaldeb = 0;
                    var closblncdeb = Number(opnblncdeb) + Number(totaldeb);
                    debntrclosblnc.push(closblncdeb);
                }
                            
                       

                if(response.equity.length!=0)
                { 
                    
                    addhtmlnxt += '<td width="10%">'+totaleq+'</td>'; //equity buy/sell 
                }
                if(response.prefer.length!=0)
                {
                    addhtmlnxt += '<td width="10%">'+totalpref+'</td>'; //prefr buy/sell
                }
                // if(response.debenture.length!=0)
                // { 
                //     addhtmlnxt += '<td width="25%">'+totaldeb+'</td>'; //debtr buy/sell 
                // }
            
                addhtmlnxt += '<td width="10%">'+response.resdta[k].esop+'</td>';
            
                if(response.equity.length!=0)
                { 
                    var esop= Number(closblnceq+Number(response.resdta[k].esop));
                    addhtmlnxt += '<td width="10%">'+esop+'</td>'; //equity closing blnc
                }
                
                if(response.prefer.length!=0)
                {
                    addhtmlnxt += '<td width="10%">'+closblncpref+'</td>'; //prefr closing blnc
                }
                
                
                // if(response.debenture.length!=0)
                // { 
                //     addhtmlnxt += '<td width="25%">'+closblncdeb+'</td>'; //debtr closing blnc
                // }
            

            addhtmlnxt+='<td width="10%"><i class="fa fa-edit editopngblnc " editopngblncid="'+response.resdta[k].id+'"   style="font-size:20px;"></i></td>'
            addhtmlnxt += '</tr>';
           
            
        }
        website('.appendrow').html(addhtmlnxt);
        website('.paginationmn').html(response.pgnhtml);
      }
      else
      {
        website('.appendrow').html('<tr><td style="text-align:center;" colspan="13">Data Not Found!!!!</td></tr>');
         website('.paginationmn').html(response.pgnhtml);
      }
    },
    complete: function(response)
    {},
    error: function(jqXHR, textStatus, errorThrown)
    {}
  });
    
    
}

website('body').on('click','.editopngblnc', function(){
var id = website(this).attr('editopngblncid');
    var formdata = {id:id};
    
    website.ajax({
      url:'holdingsummary/holdingsummaryedit',
      data:formdata,
      method:'POST',
      //contentType:'json',
      contentType:'application/x-www-form-urlencoded; charset=UTF-8',
      //default: 'application/x-www-form-urlencoded; charset=UTF-8' ,'multipart/form-data' , 'text/plain'
      dataType:"json",
      cache:false,
      //async:true, /*Cross domain checking*/
      beforeSend: function()
      {   },
      uploadProgress: function(event, position, total, percentComplete)
      {   },
      success: function(response, textStatus, jqXHR)
      {
        if(response.logged===true)
        {
            website('#Mymodal #equity').val(response.data[0].equityshare);
            website('#Mymodal #prefernc').val(response.data[0].prefershare);
            website('#Mymodal #debenture').val(response.data[0].debntrshare);
            website('#updateholdingsummry #tempid').val(id);
            website('#Mymodal').modal('show');

        }
        else
        {

        }
    },
    complete: function(response)
    {},
    error: function(jqXHR, textStatus, errorThrown)
    {}
  });
    
    
});

website('body').on('click','.deleterestrictedcmp', function(){
    var id = website(this).attr('aprvllistid');
    //console.log(id);return false;
    website('#myModalyesno').modal('show');
    website('#myModalyesno .yesconfirm').attr('aprvllistid',id);
});

website('body').on('click','.yesconfirm', function(){
    
    var id = website(this).attr('aprvllistid');
    //console.log(id);return false;
    var formdata = {id:id};
    website.ajax({
        
      url:'holdingstatement/holdingstatementdelete',
      data:formdata,
      method:'POST',
      //contentType:'json',
      contentType:'application/x-www-form-urlencoded; charset=UTF-8',
      //default: 'application/x-www-form-urlencoded; charset=UTF-8' ,'multipart/form-data' , 'text/plain'
      dataType:"json",
      cache:false,
      //async:true, /*Cross domain checking*/
      beforeSend: function()
      {   },
      uploadProgress: function(event, position, total, percentComplete)
      {   },
        success: function(response, textStatus, jqXHR) 
        {
           if(response.logged === true)
           {
              //fetchmasterlist();
              window.location.reload();
              //website('#Mymodaledit').fadeOut();
              new PNotify({title: 'Record Deleted Successfully',
                  text: 'Record Deleted Successfully',
                  type: 'university',
                  hide: true,
                  styling: 'bootstrap3',
                  addclass: 'dark ',
              }); 
           }
           else
           {    
              new PNotify({title: 'Record Not Deleted',
                  text: 'Record Not Updated',
                  type: 'university',
                  hide: true,
                  styling: 'bootstrap3',
                  addclass: 'dark ',
              });
           }
        },
        complete: function(response) 
        {
            website('#myModalyesno .mainprogressbarforall').fadeOut(); 
        },
        error: function() 
        {   }
    });
});


website('body').on('click','.openingblnc', function(){
    website('#Mymodaledit').modal('show');
});

var timer = 0;
function mySearch (){ 
    var getvalue = website('.header-search-input').val();
    doSearch(getvalue); 
}

website('.header-search-input').on('keyup', function(e){
    var getkeycode = website.trim(e.keyCode);
     if (getkeycode != '40' && getkeycode !='38' && getkeycode != '13'){
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(mySearch, 400); 
     }
});
function doSearch(getvalue)
{
 //console.log(getvalue);return false;
  var getkeyword = getvalue;
  if(website.trim(getkeyword)=="")
  {
    website('#live-search-header-wrapper ul').html('<li class="noresultfound">No Result Fould!!!!</li>');
  }
  else
  {
  var formdata = {searchvallist:getkeyword,geturl:''}
    website.ajax({
      url:'restrictedcompany/cmplists',
      //url:'template/templatedetails',   
      data:formdata,
      method:'POST',
      //contentType:'json',
      contentType:'application/x-www-form-urlencoded; charset=UTF-8',
      //default: 'application/x-www-form-urlencoded; charset=UTF-8' ,'multipart/form-data' , 'text/plain'
      dataType:"json",
      cache:false,
      //async:true, /*Cross domain checking*/
      beforeSend: function() 
      {
                website('#live-search-header-wrapper').fadeIn();
        website('#live-search-header-wrapper ul').html("<li>Please wait...</li>");
                website('.mainprogressbarforall .progress').fadeIn();
                website('.filtr-container').html("");
                website('.filtr-container').removeAttr("style");
                website('.filtr-search').fadeIn();
                website('.filtr-search').val("");
      },
      uploadProgress: function(event, position, total, percentComplete) 
      {
                website('#live-search-header-wrapper').fadeIn();
        website('#live-search-header-wrapper ul').html("<li>Please wait...</li>");
                website('.mainprogressbarforall .progress').fadeIn();
                website(".mainprogressbarforall .progress .progress-bar").width(percentComplete+'%');
                
      },
      success: function(response, textStatus, jqXHR) 
      {
        var addhtml='';
        website('#live-search-header-wrapper ul').html("");  
        website('#live-search-header-wrapper').fadeIn();
                
        if (response.logged == true && response.data.length>=1) 
                {         
          //console.log(response.data);return false;
          for(var i = 0; i < response.data.length; i++) 
                    {   
            if(i==0)
            {                           
              addhtml += '<li id="'+response.data[i].id+'" company_name="'+response.data[i].company_name+'" class="topul validatorsid">'+response.data[i].company_name;
              //addhtml += '<a target="_blank" href="profile/willline/'+response.data[i].cid+'" class="floatleft searchavtarname">'+response.data[i].comanyname+'</a>';
              addhtml += '<div class="clearelement"></div></li>';
            }
            else if(i==((response.data.length)-1))
            {
              addhtml += '<li id="'+response.data[i].id+'" company_name="'+response.data[i].company_name+'"  class="bottomul validatorsid">'+response.data[i].company_name;
              //addhtml += '<a target="_blank" href="profile/willline/'+response.data[i].cid+'" class="floatleft searchavtarname">'+response.data[i].comanyname+'</a>';
              addhtml += '<div class="clearelement"></div></li>';
              
            }
            else
            {
              addhtml += '<li id="'+response.data[i].id+'" company_name="'+response.data[i].company_name+'"  class="bottomul validatorsid">'+response.data[i].company_name;
              //addhtml += '<a target="_blank" href="profile/willline/'+response.data[i].cid+'" class="floatleft searchavtarname">'+response.data[i].comanyname+'</a>';
              addhtml += '<div class="clearelement"></div></li>';
            }
          }
          website('#live-search-header-wrapper ul').html(addhtml);
          //window.location.reload();
        }
        else
        {
          website('#live-search-header-wrapper ul').html('<li class="noresultfound"><span class="resp_new">'+response.message+'</span></li>');
        }
        website(".mainprogressbarforall .progress .progress-bar").width('100%');
      },
      complete: function(response) 
      {
                website('.search-row').fadeIn();
                website(".mainprogressbarforall .progress .progress-bar").fadeOut();
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        //website('#live-search-header-wrapper ul').fadeOut();      
      }
    }); 
  }
  
}

    website('body').on('click','.validatorsid',function(e){
   
       var compid = website(this).attr('id');
       var compname = website(this).attr('company_name');
       //console.log(compid+'  '+compname);return false;
       website('#insertholdingsummry #search-box').val(compname);
       website('#search-box').attr('compid',compid);
       website('#search-box').attr('compname',compname);
       website('#insertholdingsummry #compid').val(compid);
       website('#live-search-header-wrapper').fadeOut();       
       
       website('#insertholdingsummry #name').val(compname);
       website('#name').attr('compid',compid);
       website('#name').attr('compnyname',compname);
    });
