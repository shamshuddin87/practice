<?php $gmnlog = $this->session->loginauthspuserfront;
   // print_r($gmnlog);exit;
   $uid = $this->session->loginauthspuserfront['id'];
   
   ?>
<?php /*echo"<pre>";print_r($cmpname); exit;*/?> 
<!-- Main content -->
<div class="right_col" role="main">
<div class="">
<div class="content">
   <!-- My messages -->
   <div class="mainelementfom">
      <h1 class="h1_heading">UPSI Module</h1>
      <div class="containergrid">
         <?php if($gmnlog['user_group_id'] == 14){?>
         <div class="containergrid formcss">
            <div class="typography form_pad">
               <!--<h4 class="text-center form_heading">Create User</h4>-->
               <div class="tablitiledesc text-center">
               </div>
               <div class="formelementmain">
                  <form id="addupsimast" action="upsimaster/addupsimaster" method="post" enctype="multipart/form-data" autocomplete="off">
                     <input type="hidden" name="cmpid" class="cmpid" id="cmpid" value="">
                     <input type="hidden" name="ownerid" class="ownerid" id="ownerid" value="">
                     <div class="clearelement"></div>
                     <!--
                        <section class="col col-md-12 col-xs-12">
                            <div class="input">
                                <input type="checkbox" id="alldps" name="alldps"><label class="control-label">If UPSI relates to all DPs or specific DPs.*</label>
                            </div>
                        </section>
                        -->
                     <section class="col col-md-6 col-xs-6">
                        <label class="control-label">Title of UPSI*</label>
                        <div class="input">
                           <input type="text" id="upnm" name="upname" required="required" class="form_fields form-control col-md-7 col-xs-12" >
                        </div>
                     </section>
                     <section class="col col-md-6 col-xs-6">
                        <label class="control-label">UPSI Start Date*</label>
                        <div class="input">
                           <input type="text" id="pstartdte" name="pstartdte" required="required" class="form_fields form-control col-md-7 col-xs-12" placeholder="dd-mm-yyyy" maxlength="10">
                        </div>
                     </section>
                     <section class="col col-md-6 col-xs-6">
                        <div class="input">
                           <div class="mainelem company_product">
                              <label class="control-label">Enter Name of UPSI Owner / Group Leader*</label>
                              <div class="header-search-wrapper  floatnone find_box_company">
                                 <i class="fa fa-search"></i>
                                 <input type="text" name="getvalueofsearch" class="header-search-input z-depth-2 floatleft" placeholder="Search Project Owner/Group Leader" id="search-box" autocomplete="off"/>
                                 <div id="live-search-header-wrapper" class="">
                                    <ul class="live-searchul"></ul>
                                 </div>
                                 <div class="clearelement"></div>
                                 <div class="mainelementch">
                                    <div class="clearelement"></div>
                                 </div>
                              </div>
                              <div class="header-search-wrapper hide-on-med-and-down services_search find_box_company" style="display: none;">
                                 <i class="fa fa-search"></i>
                                 <input type="text" name="getvalueofsearch" class="header-search-input1 z-depth-2 floatleft" placeholder="Explore Resolutions" id="search-box1"/>
                                 <div class="clearelement"></div>
                                 <div id="live-search-header-wrapper1" class="">
                                    <ul class="live-searchul1"></ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>
                     <section class="col col-md-6 col-xs-6">
                        <div class="input">
                           <label class="control-label">UPSI Owner / Group Leader*</label>
                           <input type="text" id="owner" name="owner" class="form_fields form-control col-md-7 col-xs-12" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required readonly>
                        </div>
                     </section>
                     <!--
                        <section class="col col-md-6 col-xs-6" id="connectedpform">
                            <div class="input">
                            <label class="control-label">Connected DPs*</label>
                               <select id="connectdps" name="connectdps[]" class="form_fields form-control col-md-7 col-xs-12" multiple required size="12">
                                    <option value="">Select Connected DPs</option>
                                   <?php foreach ($alldpusers as $userval) { ?> 
                                   <option value="<?php echo $userval['wr_id'];?>"><?php echo $userval['fullname'];?></option>
                                   <?php } ?>
                                </select>
                           </div>
                        </section>
                        -->
                     <div class="clearelement"></div>
                     <section class="col col-md-6 col-xs-6">
                        <div class="input">
                           <label class="control-label">UPSI Description</label>
                           <textarea name="projdesc" id="projdesc" class="projdesc  form-control" style="margin: 0px;width: 475px;height: 73px;"></textarea>
                        </div>
                     </section>
                  </form>
                  <section class="col col-md-12 col-xs-12 text-right">
                     <div class="control-label formgroup  btnuop">
                        <div class="note text-left">
                           (<strong>Note : </strong>Field specified by * are mandatory fields)
                        </div>
                        <input type="submit" class="btn btn-primary addupsitype btnlblne" value="Submit"> 
                     </div>
                  </section>
               </div>
            </div>
         </div>
         <?php }?>
         <!--table start-->
         <div class="containergrid formcss">
            <div class="panel panel-primary">
               <div class="cssnumrws form-inline">
                  <label>Show</label>
                  <select id="noofrows" name="noofrows" class="noofrows form-control">
                     <option value="10">10</option>
                     <option value="25">25</option>
                     <option value="50">50</option>
                     <option value="100">100</option>
                  </select>
                  <label>Entries</label>
               </div>
               <div class="table-responsive">
                  <table class="table table-inverse" id="datableabhi">
                     <thead>
                        <tr>
                           <th>Sr No</th>
                           <th>Title of UPSI</th>
                           <th>UPSI Start Date</th>
                           <th>UPSI End Date</th>
                           <th>UPSI Owner/Group Leader</th>
                           <!--                                    <th>Announcement</th>-->
                           <th>Actions</th>
                        </tr>
                     </thead>
                     <tbody class="upsitails" appendrow='1'></tbody>
                  </table>
                  <div class="panel panel-white">
                     <div class="paginationmn"></div>
                     <input type="hidden" id="pagenum" name="pagenum" class="pagechnum" value="1">
                  </div>
               </div>
            </div>
         </div>
         <!--table end-->
      </div>
      <div class="clearelement"></div>
      <div class="preloder_wraper">
         <a href="javascript:;" class="preloder"></a>
      </div>
      <div class="clearelement"></div>
   </div>
   <!-- /main content -->
   <div id="upsimodel" class="modal fade" role="dialog" tabIndex=-1 >
      <div class="modal-dialog">
         <!-- Modal content-->
         <div class="modal-content">
            <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal">
               &times;</button>
               <h4 class="modal-title">Update UPSI Details</h4>
            </div>
            <div class="modal-body">
               <div class="formelementmain">
                  <form id="updateupsimast" action="upsimaster/updateupsi" method="post" enctype="multipart/form-data" autocomplete="off">
                     <input type="hidden" name="cmpid" class="cmpid" id="cmpid" value="">
                     <input type="hidden" name="ownerid" class="ownerid" id="ownerid" value="">
                     <input type="hidden" name="cmpownerid" class="cmpownerid" id="cmpownerid" value="">
                     <input type="hidden" name="editid" class="editid" id="editid" value="">
                     <div class="step_1">
                        <i class="sec">1</i> 
                        <p>Change UPSI Details</p>
                        <section class="col col-md-12 col-xs-12">
                           <!--   <div class="input">
                              <input type="checkbox" id="upalldps" name="upalldps"><label class="control-label">If UPSI relates to all DPs or specific DPs.*</label>
                              </div> -->
                        </section>
                        <section class="col col-md-6 col-xs-6">
                           <input type="hidden" id="cmpupname" name="cmpupname">
                           <label class="control-label">Title of UPSI*</label>
                           <div class="input">
                              <input type="text" id="upname" name="upname" required="required" class="form_fields form-control col-md-7 col-xs-12" >
                           </div>
                        </section>
                        <section class="col col-md-6 col-xs-6">
                           <input type="hidden" id="cmppstartdte" name="cmppstartdte">
                           <label class="control-label">UPSI Start Date*</label>
                           <div class="input">
                              <input type="text" id="pstartdtecopy" name="pstartdte"  class="form_fields form-control col-md-7 col-xs-12 " style="display: none">
                              <input type="text" id="pstartdte" name="pstartdte" required="required" class="form_fields form-control col-md-7 col-xs-12" placeholder="dd-mm-yyyy" maxlength="10">
                           </div>
                        </section>
                        <section class="col col-md-12 col-xs-6">
                           <input type="hidden" id="cmpenddate" name="cmpenddate">
                           <div class="input">
                              <label class="control-label">UPSI End Date*</label>
                              <input type="text" id="enddatecopy" name="enddate"  class="form_fields form-control col-md-7 col-xs-12"  style="display: none;">
                              <input type="text" id="enddate" name="enddate" class="form_fields form-control col-md-7 col-xs-12" placeholder="dd-mm-yyyy" maxlength="10">
                           </div>
                        </section>
                        <section class="col col-md-12 col-xs-12">
                           <input type="hidden" id="cmpprojdes" name="cmpprojdes">
                           <div class="input">
                              <label class="control-label">UPSI Description</label>
                              <textarea name="projdesc" id="projdesc" class="projdesc" style="margin: 0px;width: 100%;height: 73px;border-color: #ddd;"></textarea>
                           </div>
                        </section>
                     </div>
                    <!--  <div class="step_1">
                        <div class="div">
                           <i class="sec">2</i> 
                           <p>Change UPSI Owner</p>
                        </div>
                        

                        <section class="col col-md-6 col-xs-6" id="projowner">
                            <label class="control-label">New UPSI Owner / Group Leader*</label>
                           <div class="input">
                              <div class="mainelem company_product">
                                
                                 <div class="header-search-wrapper  floatnone find_box_company">
                                    <i class="fa fa-search"></i>
                                    <input type="text" name="getvalueofsearch" class="header-search-input z-depth-2 floatleft searchowner" placeholder="Search Project Owner/Group Leader" id="search-box" autocomplete="off"/>
                                    <div id="live-search-header-wrapper" class="">
                                       <ul class="live-searchul"></ul>
                                    </div>
                                    <div class="clearelement"></div>
                                    <div class="mainelementch">
                                       <div class="clearelement"></div>
                                    </div>
                                 </div>
                                 <div class="header-search-wrapper hide-on-med-and-down services_search find_box_company" style="display: none;">
                                    <i class="fa fa-search"></i>
                                    <input type="text" name="getvalueofsearch" class="header-search-input1 z-depth-2 floatleft" placeholder="Explore Resolutions" id="search-box1"/>
                                    <div class="clearelement"></div>
                                    <div id="live-search-header-wrapper1" class="">
                                       <ul class="live-searchul1"></ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </section>
                        <section class="col col-md-6 col-xs-6">
                           <input type="hidden" id="cmpownermodal" name="cmpownermodal">
                           <div class="input">
                              <label class="control-label">UPSI Owner / Group Leader*</label>
                              <input type="text" id="ownermodal" name="ownermodal" class="form_fields form-control col-md-7 col-xs-12" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required readonly>
                           </div>
                        </section>
                     </div> -->
                     <div class="step_1">
                        <i class="sec">2</i> 
                        <p>Change UPSI Owner</p>
                        <section class="col col-md-12 col-xs-12">
                           <!--   <div class="input">
                              <input type="checkbox" id="upalldps" name="upalldps"><label class="control-label">If UPSI relates to all DPs or specific DPs.*</label>
                              </div> -->
                        </section>
                        <section class="col col-md-6 col-xs-6" id="projowner">
                          
                           <label class="control-label">New UPSI Owner / Group Leader*</label>
                           <div class="input">
                               <div class="mainelem company_product">
                                
                                 <div class="header-search-wrapper  floatnone find_box_company">
                                    <i class="fa fa-search"></i>
                                    <input type="text" name="getvalueofsearch" class="header-search-input z-depth-2 floatleft searchowner" placeholder="Search Project Owner/Group Leader" id="search-box" autocomplete="off"/>
                                    <div id="live-search-header-wrapper" class="">
                                       <ul class="live-searchul"></ul>
                                    </div>
                                    <div class="clearelement"></div>
                                    <div class="mainelementch">
                                       <div class="clearelement"></div>
                                    </div>
                                 </div>
                                 <div class="header-search-wrapper hide-on-med-and-down services_search find_box_company" style="display: none;">
                                    <i class="fa fa-search"></i>
                                    <input type="text" name="getvalueofsearch" class="header-search-input1 z-depth-2 floatleft" placeholder="Explore Resolutions" id="search-box1"/>
                                    <div class="clearelement"></div>
                                    <div id="live-search-header-wrapper1" class="">
                                       <ul class="live-searchul1"></ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </section>
                        <section class="col col-md-6 col-xs-6">
                           <input type="hidden" id="cmpownermodal" name="cmpownermodal">
                           <div class="input">
                              <label class="control-label">UPSI Owner / Group Leader*</label>
                              <input type="text" id="ownermodal" name="ownermodal" class="form_fields form-control col-md-7 col-xs-12" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required readonly>
                           </div>
                        </section>
                        
                       
                    </div>
                     <div class="step_1">
                        <div class="div">
                           <i class="sec">3</i> 
                           <p>Enter Name of the DPs who are a part or have access to this UPSI</p>
                        </div>
                        <div id="dpsmodel">
                           <section class="col col-md-12 col-xs-12" id="connectedpmodal">
                              <div class="input">
                                 <div class="mainelem company_product">
                                    <label class="control-label">Enter Name of the DPs connected to this UPSI*</label>
                                    <div class="header-search-wrapper  floatnone find_box_company">
                                       <i class="fa fa-search"></i>
                                       <input type="text" name="getvalueofsearch" class="header-search-input z-depth-2 floatleft " placeholder="Search Name of the DPs connected" id="search-box" autocomplete="off"/>
                                       <div id="live-search-header-wrapper" class="">
                                          <ul class="live-searchul"></ul>
                                       </div>
                                       <div class="clearelement"></div>
                                       <div class="mainelementch">
                                          <div class="clearelement"></div>
                                       </div>
                                    </div>
                                    <div class="header-search-wrapper hide-on-med-and-down services_search find_box_company" style="display: none;">
                                       <i class="fa fa-search"></i>
                                       <input type="text" name="getvalueofsearch" class="header-search-input1 z-depth-2 floatleft" placeholder="Explore Resolutions" id="search-box1"/>
                                       <div class="clearelement"></div>
                                       <div id="live-search-header-wrapper1" class="">
                                          <ul class="live-searchul1"></ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </section>
                           <input type="hidden" id="cmpconnectdps" name="cmpconnectdps">
                           <div class="connectedp"></div>
                        </div>
                     </div>
                     <!-- ExcelUpload start -->                
                     <div class="excluplod">
                        <!--                    <form action="usermaster/insertuserdetailviaexcel" id="insertuserdetailviaexcel" method="post" enctype="multipart/form-data">-->
                        <div class="boxshadow col-md-6 col-md-offset-3">
                           <label class="labelcss">Connected Dp Names For UPSI</label>
                           <div class="choose_files">
                              <input type="file" name="connecteddps" id="connecteddps" >
                           </div>
                           <div class="updatefile">
                              <div class="sample_down floatleft">
                                 <a href="samplefile\UPSI\connected_dp.xlsx" download>
                                    <p class="sample">
                                       Download Sample Excel <i class="fa fa-file-excel-o" aria-hidden="true"></i>
                                    </p>
                                 </a>
                              </div>
                              <div class="clearelement"></div>
                           </div>
                           <div id="message" class="message"></div>
                        </div>
                        <!--                    </form>                 -->
                     </div>
                     <!-- ExcelUpload End --> 
                     <!--
                        <section class="col col-md-8 col-xs-8" id="connectedpmodal">
                            
                            <div class="input">
                            <label class="control-label">Connected DPs*</label>
                               <select id="connectdps" name="connectdps[]" class="form_fields form-control col-md-7 col-xs-12" multiple size="12">
                                    <option value="">Select Connected DPs</option>
                                   <?php foreach ($alldpusers as $userval) { ?> 
                                   <option value="<?php echo $userval['wr_id'];?>"><?php echo $userval['fullname'];?></option>
                                   <?php } ?>
                                </select>
                           </div>
                        </section>   
                        -->
                     <div class="modal-footer">
                        <section class="col col-md-12 col-xs-12 text-right">
                           <input type="submit" class="btn btn-success"  id="upbtn" editid="" value="Update">
                        </section>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
      <!--------------------DELETE Upsi MODEL--------------------->
   </div>
   <div id="delmod" class="modal fade" role="dialog">
      <div class="modal-dialog">
         <!-- Modal content-->
         <div class="modal-content">
            <!-- <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal">
               &times;</button>
            </div> -->
            <div class="modal-body">
               <input type="hidden" id="deleteid" value="" name="">
               <h5 class="delete-title">Are You Sure To Delete This UPSI Type?</h5>
            </div>
            <div class="modal-footer t-center">
               <button type="button" class="btn btn-danger" id="delups">Delete</button> 
               <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
            </div>
         </div>
      </div>
   </div>
   <div id="modaltradingwindow" class="modal fade" role="dialog">
      <div class="modal-dialog">
         <!-- Modal content-->
         <div class="modal-content">
            <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal">
               &times;</button>
               <h4 class="modal-title">
               </h4>
            </div>
            <div class="modal-body">
               <h4 style="text-align: center;">Submitting this form will block Trading Window for the Project Owner / Group Leader.</h4>
            </div>
            <div class="modal-footer">
               <input type="button" class="btn btn-success" id="tradingacc" value="OK">
               <input type="button" class="btn btn-success" id="tradingrej" value="Cancel">
            </div>
         </div>
      </div>
   </div>
   <div id="upsiannouncement" class="modal fade" role="dialog">
      <div class="modal-dialog">
         <!-- Modal content-->
         <div class="modal-content">
            <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal">
               &times;</button>
            </div>
            <div class="modal-body">
               <form id="sendannounce" action="upsimaster/sendmailannounce" method="post" enctype="multipart/form-data" autocomplete="off">
                  <input type="hidden" name="reqid" id="reqid" value="">
                  <input type="hidden" name="prowner" id="prowner" value="">
                  <input type="hidden" name="cndps" id="cndps" value="">
                  <input type="hidden" name="upsiname" id="upsiname" value="">
                  <input type="hidden" name="projstartdate" id="projstartdate" value="">
                  <input type="hidden" name="enddate" id="enddate" value="">
                  <label>Please type the announcement to be done : </label> 
                  <br>
                  <textarea rows="4" cols="500" width="100%" name="description" class="width_100">
              </textarea>
            </div>
            <div class="modal-footer">
            <button type="submit" class="btn btn-primary" id="sendannounce">Send</button> 
            </div>
            </form>
         </div>
      </div>
   </div>
</div>


<div id="modaltradingwindowclose" class="modal fade" role="dialog">
    <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-body">

                     <button type="button" class="close" data-dismiss="modal">
                     &times;</button>                    
                     <h5 style="text-align: center;color: #000;margin: 45px 50px 25px 50px;line-height: 25px;">You have just created an entry for UPSI, would you like to close the trading window.</h5>
                  </div>
                  <div class="modal-footer" style="border-top:none;">
             <a><button type="button" class="btn btn-primary" id="tradingwindowyes" >Yes</button> </a>
             <button style="color: #522c8f !important;border-color: #cecece;"  type="button" class="btn btn-default" id="tradingwindowno">No</button>
            </div>
        </div>
    </div>
</div>
<!-- ########################################## PageContent End ########################################## -->