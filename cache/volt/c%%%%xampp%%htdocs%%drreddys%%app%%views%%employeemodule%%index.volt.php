﻿<?php $gmnlog = $this->session->loginauthspuserfront; ?>
<?php //echo"<pre>";print_r($gmnlog); exit;?> 
<!-- Main content -->
<!-- ########################################## PageContent Start ########################################## --> 
<div class="right_col" role="main">
<div class="row">
<div class="content">
<!--    Total Number of Contracts Ends-->
<!-- My messages -->
<div class="top_space">
<div class="container">
   <div class="preloder_wraper">
      <a href="javascript:;" class="preloder"></a>
   </div>
   <div class="col-md-12 col-sm-12 col-lg-offset-2">
      <div class="login-button-container clearfix">
         <div class="col-md-3 col-xs-12 sign-in register">
            <button class="btn personal active">
            Employee Personal Details        
            </button>
         </div>
         <div class="col-md-3 col-xs-12 register">
            <button class="btn relatives ">
            Dependent Relatives  Details   
            </button>
            <!-- <span class="tooltiptext_bg">The term “immediate relative” means spouse of a person, and includes parents, siblings, and child of such person or the spouse, any of whom is either dependent financially on such person, or consults such person in taking decisions relating to trading in securities.</span> -->
         </div>
         <div class="col-md-3 col-xs-12 register">
            <button class="btn mfr">
            Material Financial Relationship    
            </button>
            <!-- <span class="tooltiptext_bg">The term “material financial relationship” shall mean a relationship in which one person is a recipient of any kind of payment such as by way of a loan or gift during the immediately preceding twelve months, equivalent to at least 25% of such payer’s annual income but shall exclude relationships in which the payment is based on arm’s length transactions</span> -->
         </div>
      </div>
   </div>
   <div class="col-md-12 col-xs-12">
      <div class="row personaldetails" style="display: block;">
                <div class="tablitiledesc text-center">
                    <div class="note">
                        (<strong>Note : </strong>Please fill information on all the 3 tabs.)
                    </div>
            </div>
         <!-------------------------------------------------------------------------------------------->
         <h3>Insert Personal Details</h3>
         <div class="insert">
            <div class="col-md-4 col-xs-12">
               <label for="fn">Employee ID*</label>
               <input type="text"  value="<?php echo($userdetails[0]['employeecode']) ?>" readonly="readonly"/>
            </div>
            <div class="col-md-4 col-xs-12">
               <label for="fn">First Name*</label>
               <input type="text"  value="<?php echo($userdetails[0]['firstname']) ?>" readonly="readonly"/>
            </div>
            <div class="col-md-4 col-xs-12">
               <label for="ln">Last Name*</label>
               <input type="text"  value="<?php echo($userdetails[0]['lastname']) ?>" readonly="readonly"/>
            </div>
            <div class="col-md-4 col-xs-12">
               <label for="eid">Email Id*</label>
               <input type="text" value="<?php echo($userdetails[0]['email']) ?>" readonly="readonly"/>
            </div>
            <form action="employeemodule/insmydetail" id="perdetail" method="post" autocomplete="off">
               <!-- <div class="col-md-12"> -->
               <!-- <label for="fname">Full Name:</label> -->
               <input type="hidden" id="fname" name="fname" placeholder="Your name.." value="<?php echo($userdetails[0]['fullname']) ?>">
               <?php if(!empty($personaldetails)){ ?>
                <input type="hidden" id="rqid" name="rqid" placeholder="" value="<?php echo($personaldetails['id']) ?>">
               <!-- </div> -->
               <div class="col-md-4 col-xs-12">
                  <label for="pan">PAN*</label>
                  <input type="text" id="pan" name="pan" value="<?php echo($personaldetails['pan']) ?>" placeholder="pan" onkeypress="return isAlphaNumeric(event,this.value);" maxlength="10">
               </div>
               <div class="col-md-4 col-xs-12">
                    <div class="tooltip_div">
                     <a href="javascript:void(0);" data="Nature of Identifier (only for overseas employees)" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle iji"></abbr><span class="arrow-down"></span></a>
                   </div>
                  <label for="legal_idntfr" style="display: inline;">Any other legal identifier</label>
                  <input type="text" id="legal_idntfr" name="legal_idntfr" value="<?php echo($personaldetails['legal_identifier']) ?>" placeholder="Any other legal identifier">
               </div>
               <div class="col-md-4 col-xs-12">
                    <div class="tooltip_div">
                     <a href="javascript:void(0);" data="only for overseas employees (only for overseas employees)" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle iji"></abbr><span class="arrow-down"></span></a>
                   </div>
                  <label for="legal_idntfctn_no">Any other legal identification number</label>
                  <input type="text" id="legal_idntfctn_no" value="<?php echo($personaldetails['legal_identification_no']) ?>" name="legal_idntfctn_no" onkeypress="return IsAlphaNumeric(event);" placeholder="Any other legal identification number">
               </div>
               <div class="col-md-4 col-xs-12">
                  <label for="aadhar">Aadhaar</label>
                  <input type="text" id="aadhar" name="aadhar" placeholder="aadhaar" onkeypress='return event.charCode >= 48 && event.charCode <= 57' value="<?php echo($personaldetails['aadhar']) ?>" maxlength="12" pattern="[0-9]{12}">
               </div>
               <div class="col-md-4 col-xs-12">
                  <label for="Dob">DOB*</label>
                  <input type="text" id="dob" name="dob" value="<?php echo($personaldetails['dob']) ?>" class="bootdatepick" placeholder="DOB">
               </div>
                
               <div class="col-md-12 col-xs-12"> 
                   <div class="col-md-4 col-xs-12"> 
                        <label class="gender" for="sex">Gender*</label>
                        <?php if($personaldetails['sex'] == 'Male'){?>
                        <input type="radio" id="sex" name="sex" value="Male" checked/>Male
                        <input type="radio" id="sex" name="sex"  value="Female"/>Female
                        <input type="radio" id="sex" name="sex"  value="Other"/>Other
                       <?php } elseif($personaldetails['sex'] == 'Female'){?>
                        <input type="radio" id="sex" name="sex" value="Male" />Male
                        <input type="radio" id="sex" name="sex"  value="Female" checked />Female
                        <input type="radio" id="sex" name="sex"  value="Other"/>Other
                         <?php } elseif($personaldetails['sex'] == 'Other'){?>
                        <input type="radio" id="sex" name="sex" value="Male" />Male
                        <input type="radio" id="sex" name="sex"  value="Female"  />Female
                        <input type="radio" id="sex" name="sex"  value="Other" checked />Other
                          <?php } else {?>
                        <input type="radio" id="sex" name="sex" value="Male" checked />Male
                        <input type="radio" id="sex" name="sex"  value="Female"  />Female
                        <input type="radio" id="sex" name="sex"  value="Other" checked />Other
                        <?php }?>
                   </div>
                   <div class="col-md-4 col-xs-12">
                       <div class="tooltip_div">
                           <a href="javascript:void(0);" data="Please enter multiple Education Qualifications using semi-colon separator. Educational qualifications to be graduation and above" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle"></abbr><span class="arrow-down"></span></a>
                        </div>
                      <label for="age">Educational Qualification*</label>
                      <input type="text" id="eduqulfcn" name="eduqulfcn" value="<?php echo($personaldetails['education']) ?>" placeholder="Educational Qualification">
                   </div>
                   <div class="col-md-4 col-xs-12">
                      <label for="age">Institute From Which Acquired*</label>
                      <input type="text" id="institute" name="institute" value="<?php echo($personaldetails['institute']) ?>" placeholder="Institute From Which Acquired">
                   </div>
              </div>
                
               <div class="col-md-4 col-xs-12"> 
                  <label for="subject">Address*</label>
                  <textarea id="address" name="address" value="<?php echo($personaldetails['address']) ?>" placeholder="Write address.." style="height:50px"><?php echo($personaldetails['address']) ?></textarea>
               </div>
               <div class="col-md-4 col-xs-12">
                  <label class="control-label">Upload Identity Proof</label>
                   <?php if(!empty($personaldetails['filepath'])){ ?>
                   <a href="<?php echo ($personaldetails['filepath']); ?>" download>&nbsp;<i class="fa fa-download" id="uploadattached1" aria-hidden="true"></i></a>
                   <input type="hidden" name="updtfile" id="updtfile" value="<?php echo ($personaldetails['filepath']); ?>">
                   <?php } ?>
                  <div class="choose_files">
                     <input type="file" name="hldngfile" id="hldngfile" >
                  </div>
               </div>
               <div class="col-md-4 col-xs-12 "> 
                  <label for="age">Mobile No*</label>
                  <input type="text" id="mobno" name="mobno" value="<?php echo($personaldetails['mobileno']) ?>" placeholder="Mobile No" maxlength="10" onkeypress='return event.charCode >= 48 && event.charCode <= 57' min="10" max="10" >
                  <span id="mobileappend"></span>
               </div>
                <div class="row">
                  <div class="col-md-12 col-xs-12"> 
                <div class="col-md-4 col-xs-12 "> 
                  <label for="age">Holdings In Shares*</label>  
                  <input type="text" id="shareholdng" name="shareholdng" value="<?php echo($personaldetails['sharehldng']) ?>" placeholder="Holdings In Shares" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required>
                </div>
                
                <div class="col-md-4 col-xs-12 "> 
                  <label for="age">Holdings In ADRs*</label>
                  <input type="text" id="adrsholdng" name="adrsholdng" value="<?php echo($personaldetails['adrshldng']) ?>" placeholder="Holdings In ADRs" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required>
               </div>
                </div>
                </div>
                <?php } else { ?>
                <input type="hidden" id="rqid" name="rqid" placeholder="" value="">
               <div class="col-md-4 col-xs-12">
                  <label for="pan">PAN*</label>
                  <input type="text" id="pan" name="pan" placeholder="pan" onkeypress="return isAlphaNumeric(event,this.value);" maxlength="10">
               </div>
               <div class="col-md-4 col-xs-12">
                   <div class="tooltip_div">
                     <a href="javascript:void(0);" data="Nature of Identifier (only for overseas employees)" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle iji"></abbr><span class="arrow-down"></span></a>
                   </div>
                  <label for="legal_idntfr" style="display: inline;">Any other legal identifier </label>
                  <input type="text" id="legal_idntfr" name="legal_idntfr"  placeholder="Any other legal identifier" >
               </div>
               <div class="col-md-4 col-xs-12">
                   <div class="tooltip_div">
                     <a href="javascript:void(0);" data="only for overseas employees (only for overseas employees)" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle iji"></abbr><span class="arrow-down"></span></a>
                   </div>
                  <label for="legal_idntfctn_no">Any other legal identification number</label>
                  <input type="text" id="legal_idntfctn_no" name="legal_idntfctn_no" onkeypress="return IsAlphaNumeric(event);" placeholder="Any other legal identification number">
               </div>
               <div class="col-md-4 col-xs-12">
                  <label for="aadhar">Aadhaar</label>
                  <input type="text" id="aadhar" name="aadhar" placeholder="aadhaar" onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength="12" pattern="[0-9]{12}">
               </div>
               <div class="col-md-4 col-xs-12">
                  <label for="Dob">Dob*</label>
                  <input type="text" id="dob" name="dob" class="bootdatepick" placeholder="dob">
               </div>
                
               <div class="col-md-12 col-xs-12"> 
                   <div class="col-md-4 col-xs-12"> 
                        <label class="gender" for="sex">Gender*</label>
                        <input type="radio" id="sex" name="sex" value="Male" checked/>Male
                        <input type="radio" id="sex" name="sex"  value="Female"/>Female
                        <input type="radio" id="sex" name="sex"  value="Other"/>Other
                   </div>
                   <div class="col-md-4 col-xs-12">
                       <div class="tooltip_div">
                           <a href="javascript:void(0);" data="Please enter multiple Education Qualifications using semi-colon separator. Educational qualifications to be graduation and above" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle"></abbr><span class="arrow-down"></span></a>
                        </div>
                      <label for="age">Educational Qualification*</label>
                      <input type="text" id="eduqulfcn" name="eduqulfcn"  placeholder="Educational Qualification">
                   </div>
                   <div class="col-md-4 col-xs-12">
                      <label for="age">Institute From Which Acquired*</label>
                      <input type="text" id="institute" name="institute"  placeholder="Institute From Which Acquired">
                   </div>
                </div>
                
               <div class="col-md-4 col-xs-12"> 
                  <label for="subject">Address*</label>
                  <textarea id="address" name="address" placeholder="Write address.." style="height:50px"></textarea>
               </div>
               <div class="col-md-4 col-xs-12">
                  <label class="control-label">Upload Identity Proof</label>
                  <div class="choose_files">
                     <input type="file" name="hldngfile" id="hldngfile" >
                  </div>
               </div>
               <div class="col-md-4 col-xs-12 "> 
                  <label for="age">Mobile No*</label>
                  <input type="text" id="mobno" name="mobno" placeholder="Mobile No" maxlength="10" onkeypress='return event.charCode >= 48 && event.charCode <= 57' min="10" max="10" >
                  <span id="mobileappend"></span>
               </div>
               <div class="row">
                <div class="col-md-12 col-xs-12"> 
                <div class="col-md-4 col-xs-12 "> 
                  <label for="age">Holdings In Shares*</label>  
                  <input type="text" id="shareholdng" name="shareholdng" placeholder="Holdings In Shares" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required>
                </div>
                
                <div class="col-md-4 col-xs-12 "> 
                  <label for="age">Holdings In ADRs*</label>
                  <input type="text" id="adrsholdng" name="adrsholdng"  placeholder="Holdings In ADRs" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required>
               </div>
                </div>
              </div>
                <?php } ?>
               <div class="col-md-12 "> 
                  <input class="btn btn-primary" type="submit" value="Submit">
               </div>
            </form>
         </div>
         <!-- My messages -->
         <h3 style="text-align: center;">Add Past Employer</h3>
         <div class="col-md-4 col-xs-12">
            <label for="age">Please Enter No Of Past Employer*</label>
            <input type="text" id="pastemp" name="pastemp" placeholder="No Of Past Employer">
         </div>
         <div class="col-md-4">
            <button class="add_button">Go</button>
         </div>
         <div class="mainelementfom">
            <div class="containergrid">
               <div class="formcss">
                  <div class="typography form_pad" id="addnoofforms">
                     <!--   <div class="formelementmain">                      
                        <form id="insertpastemp" action="employeemodule/insertpastemp" method="post" enctype="multipart/form-data" autocomplete="off"> 
                        <input type = "hidden" value="<?php echo $personid; ?>" id="personid" name="personid">
                         <section class="col col-md-6 col-xs-6">
                                <div class="input">
                                    <label class="control-label">Name of employer*</label>
                                    <input type="text" id="empname" name="empname" class="form_fields form-control col-md-7 col-xs-12" required>
                                </div>
                            </section>
                            
                             <section class="col col-md-6 col-xs-6">
                                <div class="input">
                                    <label class="control-label">Designation Served*</label>
                                    <input type="text" id="designtn" name="designtn" class="form_fields form-control col-md-7 col-xs-12" required>
                                </div>
                            </section>
                        
                            
                        <section class="col col-md-6 col-xs-6">
                        <div class="input">
                            <label class="control-label">Start Date of Employment*</label> 
                            <input type="text" name="strtdte" id="strtdte" class="form-control bootdatepick" required readonly>
                        </div>
                        </section>
                            
                        <section class="col col-md-6 col-xs-6">
                        <div class="input">
                        <label class="control-label">End Date of employent*</label>  
                            <input type="text" name="enddte" id="enddte" class="form-control bootdatepick" required readonly>
                        </div>
                        </section>
                            
                        
                            
                            <section class="col col-md-12 company_asses">
                                <input type="submit" value="Submit" class="btn btn-primary contractexcelbtn">
                            </section>
                            <div class="clearelement"></div>
                            
                        </form>
                        </div>  -->                               
                     <div class="clearelement"></div>
                  </div>
               </div>
            </div>
             <div class="tablitiledesc text-center">
                    <div class="note">
                        (<strong>Note : </strong>Once your personal information is filled please send 'Declaration form' to the Compliance Officer. <a href="annualdeclaration">Click here.</a>)
                    </div>
            </div>
            <div class="clearelement"></div>
<!--
            <div class="table_data table-responsive">
               <table class="table table-inverse" id="datableabhi">
                  <thead>
                     <tr>
                        <th>Sr No</th>
                        <th>Pan</th>
                        <th>Aadhaar</th>
                        <th>Date Of Becoming Dp</th>
                        <th>Date Of Birth</th>
                        <th>Qualification</th>
                        <th>Institute</th>
                        <th>Mobile No</th>
                        <th>File</th>
                        <th>Past Employment</th>
                        <th>Send For Approval</th>
                        <th>Approval Status</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody class="perdetail" appendrow='1'></tbody>
               </table>
            </div>
-->
            <!------------------------------------MODAL BOX FOR EDIT------------------------------------------>
            <div id="mydataedit" class="modal fade" role="dialog">
               <div class="modal-dialog">
                  <div class="modal-content" style="border: none;padding: 0;">
                     <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Please Edit Content</h4>
                     </div>
                     <div class="modal-body show_shadow">
                        <form action="employeemodule/updatemydetails" id="upmydetails" method="post" autocomplete="off">
                           <div class="col-md-6">
                              <input type="hidden" name="reqid" id="reqid" value="">
                              <input type="hidden" name="filepath" id="filepath" value="">
                              <label for="pan">PAN*</label>
                              <input type="text" id="pan" name="pan" placeholder="pan" onkeypress="return isAlphaNumeric(event,this.value);" maxlength="10">
                           </div>

                           <div class="col-md-6">
                              <label for="aadhar">Aadhaar</label>
                              <input type="text" id="aadhar" name="aadhar" placeholder="aadhaar" onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength="12" pattern="[0-9]{12}">
                           </div>

                           <div class="col-md-6">
                              <label for="legal_idntfr">Any other legal identifier</label>
                              <input type="text" id="legal_idntfr" name="legal_idntfr" placeholder="Any other legal identifier">
                           </div>

                           <div class="col-md-6">
                               <div class="tooltip_div">
                                 <a href="javascript:void(0);" data="only for overseas employees (only for overseas employees)" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle iji"></abbr><span class="arrow-down"></span></a>
                               </div>
                              <label for="legal_idntfctn_no">Any other legal identification number</label>
                              <input type="text" id="legal_idntfctn_no" name="legal_idntfctn_no" onkeypress="return IsAlphaNumeric(event);" placeholder="Any other legal identification number">
                           </div>


                           
                           <div class="col-md-6">
                              <label for="Dob">Dob*</label>
                              <input type="text" id="dob" name="dob" class="bootdatepick" placeholder="dob">
                           </div>
                           <div class="col-md-6"> 
                              <label class="gender" for="sex">Gender*</label>
                              <input type="radio" id="sex" name="sex" value="Male" checked/>Male
                              <input type="radio" id="sex" name="sex"  value="Female"/>Female
                              <input type="radio" id="sex" name="sex"  value="Other"/>Other
                           </div>
                           <div class="col-md-12">
                              <label for="age">Mobile No*</label>
                              <input type="hidden" id="upmobileno" name="upmobileno" value="">
                              <input type="text" id="upmobno" name="upmobno" placeholder="Mobile No" maxlength="10" onkeypress='return event.charCode >= 48 && event.charCode <= 57' min="10" max="10">
                              <!--                 <p id="addmobileonmd"></p>-->
                           </div>
                           <!--
                              <div class="col-md-12">
                              <input type="button" value="Add" name="" id="upaddmobile" class="inner_button">
                               </div>
                                
                              -->
                           <div class="col-md-6">
                            <div class="tooltip_div">
                                <a href="javascript:void(0);" data="Please enter multiple Education Qualifications using semi-colon separator. Educational qualifications to be graduation and above" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle"></abbr><span class="arrow-down"></span></a>
                            </div>
                              <label for="age">Educational Qualification*</label>
                              <input type="text" id="eduqulfcn" name="eduqulfcn" placeholder="Educational Qualification">
                           </div>
                           <div class="col-md-6">
                              <label for="age">Institute From Which Acquired*</label>
                              <input type="text" id="institute" name="institute" placeholder="Institute From Which Acquired">
                           </div>
                           <div class="col-md-12"> 
                              <label for="subject">Address*</label>
                              <textarea id="address" name="address" placeholder="Write address.." style="height:100px"></textarea>
                           </div>
                           <div class="col-md-6">
                              <label class="control-label">Upload Identity Proof</label>
                              <div class="choose_files">
                                 <input type="file" name="hldngfile" id="hldngfile" >
                              </div>
                           </div>
                           <div class="col-md-12"> 
                              <input type="submit" value="Update">
                           </div>
                        </form>
                     </div>
                     <div class="modal-footer">
                     </div>
                  </div>
               </div>
            </div>
            <!------------------------------------MODAL BOX FOR EDIT FINISH------------------------------------------>
            <!-------------------------------DELETE MY INFO MODAL START HERE------------------------------------------>
            <!--------------------DELETE COMPANY MODEL--------------------->
            <div id="delmod" class="modal fade" role="dialog">
               <div class="modal-dialog">
                  <!-- Modal content-->
                  <div class="modal-content">
                     <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                        &times;</button>
                     </div>
                     <div class="modal-body">
                        <input type="hidden" id="deleteid" value="" name="">
                        <h5 style="text-align: center;">Are You Sure To Delete Personal Information?</h5>
                     </div>
                     <div class="modal-footer">
                        <button type="button" class="btn btn-danger" id="delinfo">Delete</button> 
                     </div>
                  </div>
               </div>
            </div>
            <!----------------------------------------DELETE MY INFO FINISH HERE------------------------->
            <!---------------------------------------------------------------------------------------------->
         </div>
      </div>
      <div class="col-md-12 col-xs-12 col-sm-12">
         <div class=" row relativesform" style="display: none;">
            <h3 class="col col-xs-6" style="margin-top: 30px;">Insert Relative Details</h3>
            <!--tooltip div -->
            <div class="tooltip_div col col-xs-6" style="margin-top: 30px;">
               <a href="javascript:void(0);" data="The term “immediate relative” means spouse of a person, and includes parents, siblings, and child of such person or the spouse, any of whom is either dependent financially on such person, or consults such person in taking decisions relating to trading in securities.!" class="tooltip_c">who is dependent relative <abbr class="fa fa-info-circle"></abbr><span class="arrow-down"></span></a>
            </div>
            <!--tooltip div end-->
            <div class="col col-xs-12">
               <form action ="employeemodule/relationdata" class="chklength" id="getdata_1" method="post" enctype="multipart/form-data" autocomplete="off">
                  <div class="input-group col-md-12 col-xs-12 col-sm-12">
                    <div class="row">
                      <div class="col-md-4">
                        <label>Relationship*</label >
                        <select id="relationship" name="relationship" class="form_fields form-control col-md-7 col-xs-12" required="">
                           <option value="1">HUF</option>
                           <option value="2">Spouse</option>
                           <option value="3">Father</option>
                           <option value="4">Mother</option>
                           <option value="5">Brother</option>
                           <option value="6">Sister</option>
                           <option value="7">Son</option>
                           <option value="8">Daughter</option>
                           <option value="9">Son's Wife</option>
                           <option value="10">Daughter's Husband</option>
                           <option value="11">Others</option>
                        </select>
                     </div>  
                     <div class="col-md-4">
                        <label>Nature of Dependency*</label >
                        <select id="depnature" name="depnature[]" class="form_fields form-control col-md-7 col-xs-12" required="" multiple size="3">
                           <option value="1">Financially Dependent</option>
                           <option value="2">Consult in trading for securities</option>
                           <option value="3">Non-dependent</option>
                        </select>
                     </div>  
                     <div class="col-md-4">
                        <label>Full Name*</label>
                        <input  class="" placeholder="Full Name"  class="fname" id="fname" name="fname" type="text" />
                     </div>
                      </div>
                    <div class="row">
                     <div class="col-md-4">
                           <div class="tooltip_div">
                             <a href="javascript:void(0);" data="In case no PAN number available with dependents, please enter 00000000" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle iji"></abbr><span class="arrow-down"></span></a>
                           </div>
                        <label>PAN*</label>
                        <input  class=" panval" placeholder="PAN" class="pan" id="pan"  name="pan" type="text" onkeypress="return isAlphaNumeric(event,this.value);" maxlength="10" />
                     </div>
                     <div class="col-md-4">
                        <div class="tooltip_div">
                             <a href="javascript:void(0);" data="Nature of Identifier (only for overseas employees)" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle iji"></abbr><span class="arrow-down"></span></a>
                           </div>
                        <label for="legal_idntfr" style="display: inline;">Any other legal identifier </label>
                        <input type="text" id="legal_idntfr" name="legal_idntfr"  placeholder="Any other legal identifier">
                    </div>
                     <div class="col-md-4">
                         <div class="tooltip_div">
                                 <a href="javascript:void(0);" data="only for overseas employees (only for overseas employees)" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle iji"></abbr><span class="arrow-down"></span></a>
                               </div>
                        <label for="legal_idntfctn_no">Any other legal identification number</label>
                        <input type="text" id="legal_idntfctn_no" name="legal_idntfctn_no" onkeypress="return IsAlphaNumeric(event);"  placeholder="Any other legal identification number">
                    </div>
                    </div>
                      
                    <div class="row">
                     <div class="col-md-4"> 
                        <label>Aadhaar</label>
                        <input  class=" aadhar" placeholder="Aadhaar" id="aadhar"  name="aadhar" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength="12" pattern="[0-9]{12}" />
                     </div>
                     <div class="col-md-4">
                        <label>DOB*</label>
                        <input type="text"  id="1_dob" name="dob" class="bootdatepick" placeholder="DOB">
                     </div>
                     <div class="col-md-4">
                         <div class="tooltip_div">
                                <a href="javascript:void(0);" data="Please enter multiple Education Qualifications using semi-colon separator. Educational qualifications to be graduation and above" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle"></abbr><span class="arrow-down"></span></a>
                            </div>
                        <label>Educational Qualification</label>
                        <input type="text" id="eduqulfcn" name="eduqulfcn" placeholder="Educational Qualification">
                     </div>
                    </div>
                      
                    <div class="row">
                     <div class="col-md-4"> 
                        <label style="display: block;" for="sex">Gender*</label>
                        <input type="radio" id="1_sex" name="sex" value="Male" checked/>Male
                        <input type="radio" id="1_sex" name="sex"  value="Female">Female 
                        <input type="radio" id="1_sex" name="sex"  value="Other">Other 
                     </div>
                     <div class="col-md-4">
                        <label>Address*</label>
                        <textarea class="" placeholder="Address" id="addr"  name="address" type="text"></textarea>
                     </div>
                     <div class="col-md-4">
                        <label class="control-label">Upload Identity Proof</label>
                        <input type="file" name="file[]" id="file" >
                     </div>
                    </div>
                      <div class="row">
                    <div class="col-md-12 col-md-12">
                     <div class="col-md-4 "> 
                          <label for="age">Holdings In Shares*</label>
                          <input type="text" id="shareholdng" name="shareholdng" placeholder="Holdings In Shares"  onkeypress='return event.charCode >= 48 && event.charCode <= 57' required >
                       </div>
                     <div class="col-md-4"> 
                          <label for="age">Holdings In ADRs*</label>
                          <input type="text" id="adrsholdng" name="adrsholdng" placeholder="Holdings In ADRs" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required >
                       </div>
                    </div>
                     </div>
                     <div class="col-md-12">
                        <input class="btn btn-primary" type="submit" name="submit" value="Submit" id="relsub">
                     </div>
                  </div>
               </form>
            </div>
            <!--
               <div class="valida">  
               
               <span class="glyphicon glyphicon-plus addrelinfo" style="color: green;" formno="1"></span>
               <span class="glyphicon glyphicon-minus deleterelinfo" style="color:red;" formno="1"></span>
               </div>
               -->
            <!-------------------------------------------Relative Details Table----------------------------------->
            <div class="table_data">
               <table class="table table-inverse" id="datableabhi">
                  <thead>
                     <tr>
                        <th>Sr No</th>
                        <th>Relationship</th>
                        <th>Name</th>
                        <th>Pan</th>
                        <th>Aadhaar</th>
                        <!--      <th>Age</th>-->
                        <th>Date</th>
                        <th>Qualification</th>
                        <th>File</th>
                        <th>Holding in Shares</th>
                        <th>Holding in ADRs</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody class="reldetails" appendrow='1'></tbody>
               </table>
            </div>
            <!----------------------------------------------------------------------------------------------------->
            <!------------------------------Delete Relational Data Modal----------------------------------------->
            <div id="delrelation" class="modal fade" role="dialog">
               <div class="modal-dialog">
                  <!-- Modal content-->
                  <div class="modal-content">
                     <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                        &times;</button>
                     </div>
                     <div class="modal-body">
                        <input type="hidden" id="delrel" value="" name="">
                        <h5 style="text-align: center;">Are You Sure To Delete Relative Information?</h5>
                     </div>
                     <div class="modal-footer">
                        <button type="button" class="btn btn-danger" id="deleterel">Delete</button> 
                     </div>
                  </div>
               </div>
            </div>
            <!------------------------------------------------------------------------------------------------------>
            <!------------------------------------MODAL BOX FOR EDIT RELATIONSHIP------------------------------------------>
            <div id="reledit" class="modal fade" role="dialog">
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Please Edit Content</h4>
                     </div>
                     <div class="modal-body show_shadow">
                        <form action="employeemodule/updaterelatives" id="uprel" method="post" autocomplete="off">
                            <div class="col-md-6">
                              <label for="relationship">Relationship*</label>
                              <select id="relationship" name="relationship" class="form_fields form-control col-md-7 col-xs-12" required="">
                                 <option value="1">HUF</option>
                                 <option value="2">Spouse</option>
                                 <option value="3">Father</option>
                                 <option value="4">Mother</option>
                                 <option value="5">Brother</option>
                                 <option value="6">Sister</option>
                                 <option value="7">Son</option>
                                 <option value="8">Daughter</option>
                                 <option value="9">Son's Wife</option>
                                 <option value="10">Daughter's Husband</option>
                                 <option value="11">Others</option>
                              </select>
                           </div>
                            
                             <div class="col-md-6">
                                <label>Nature of Dependency*</label >
                                <select id="depnature" name="depnature[]" class="form_fields form-control col-md-7 col-xs-12" required="" multiple size="3">
                                   <option value="1">Financially Dependent</option>
                                   <option value="2">Consult in trading for securities</option>
                                   <option value="3">Non-dependent</option>
                                </select>
                             </div>  
                            
                           <div class="col-md-6">
                              <input type="hidden" name="releditid" id="releditid" value="">
                              <input type="hidden" name="filepath" id="filepath" value="">
                              <label for="name">Name*</label>
                              <input type="text" id="name" name="name" placeholder="Name">
                           </div>
                           <div class="col-md-6">
                               <div class="tooltip_div">
                                 <a href="javascript:void(0);" data="In case no PAN number available with dependents, please enter 00000000" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle iji"></abbr><span class="arrow-down"></span></a>
                               </div>
                              <input type="hidden" name="reqid" id="reqid" value="">
                              <label for="pan">PAN*</label>
                              <input type="text" id="pan" name="pan" placeholder="PAN" onkeypress="return isAlphaNumeric(event,this.value);" maxlength="10">
                           </div>
                             <div class="col-md-6">
                                <div class="tooltip_div">
                                     <a href="javascript:void(0);" data="Nature of Identifier (only for overseas employees)" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle iji"></abbr><span class="arrow-down"></span></a>
                                   </div>
                                <label for="legal_idntfr" style="display: inline;">Any other legal identifier </label>
                                <input type="text" id="legal_idntfr" name="legal_idntfr"  placeholder="Any other legal identifier">
                            </div>
                             <div class="col-md-6">
                                 <div class="tooltip_div">
                                 <a href="javascript:void(0);" data="only for overseas employees (only for overseas employees)" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle iji"></abbr><span class="arrow-down"></span></a>
                               </div>
                                <label for="legal_idntfctn_no">Any other legal identification number</label>
                                <input type="text" id="legal_idntfctn_no" name="legal_idntfctn_no" onkeypress="return IsAlphaNumeric(event);" placeholder="Any other legal identification number">
                            </div>
                           <div class="col-md-6">
                              <label for="aadhar">Aadhaar</label>
                              <input type="text" id="aadhar" name="aadhar" placeholder="Aadhaar" onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength="12" pattern="[0-9]{12}">
                           </div>
                           <div class="col-md-6">
                              <label for="Dob">DOB*</label>
                              <input type="text" id="dob" name="dob" class="bootdatepick" placeholder="DOB" readonly>
                           </div>
                           <div class="col-md-12"> 
                               <label style="display: block;" for="sex">Gender*</label>
                              <input type="radio" id="sex" name="sex" value="Male" checked/>Male
                              <input type="radio" id="sex" name="sex"  value="Female"/>Female
                              <input type="radio" id="sex" name="sex"  value="Other"/>Other
                           </div>
                           
                           <div class="col-md-12"> 
                              <label for="subject">Address*</label>
                              <textarea id="address" name="address" placeholder="Write address.." style="height:100px"></textarea>
                           </div>
                           <div class="col-md-6">
                              <div class="tooltip_div">
                                <a href="javascript:void(0);" data="Please enter multiple Education Qualifications using semi-colon separator. Educational qualifications to be graduation and above" class="tooltip_c right" style="margin-right:0px;"><abbr class="fa fa-info-circle"></abbr><span class="arrow-down"></span></a>
                              </div>
                              <label for="age">Educational Qualification</label>
                              <input type="text" id="eduqulfcn" name="eduqulfcn" placeholder="Educational Qualification">
                           </div>
                           <div class="col-md-6">
                              <label class="control-label">Upload Identity Proof</label>
                              <input type="file" name="file" id="file" >
                           </div>
                           <div class="row">
                            <div class="col-md-12">
                            <div class="col-md-6">
                              <label for="age">Holdings In Shares*</label>
                              <input type="text" id="shareholdng" name="shareholdng" placeholder="Holdings In Shares"  onkeypress='return event.charCode >= 48 && event.charCode <= 57' required >
                           </div>

                            <div class="col-md-6">
                              <label for="age">Holdings In ADRs*</label>
                              <input type="text" id="adrsholdng" name="adrsholdng" placeholder="Holdings In ADRs" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required >
                           </div>
                            </div>
                          </div>
                           <div class="col-md-12"> 
                              <input type="submit" value="Update">
                           </div>
                        </form>
                     </div>
                     <div class="modal-footer">
                     </div>
                  </div>
               </div>
            </div>
            <!----------------------MODAL BOX FOR EDIT RELATIONSHIP FINISH------------------------------------------>
         </div>
      </div>
      <div class="col-md-12 col-lg-12">
         <div class="row relativesform mymfr" style="display: none;">
           <h3 class="col col-xs-6" style="margin-top: 30px;">Insert Financial Relationship Details</h3>
            <div class="tooltip_div col col-xs-6" style="margin-top: 30px;">
               <a href="javascript:void(0);" data="The term “material financial relationship” shall mean a relationship in which one person is a recipient of any kind of payment such as by way of a loan or gift during the immediately preceding twelve months, equivalent to at least 25% of such payer’s annual income but shall exclude relationships in which the payment is based on arm’s length transactions" class="tooltip_c">what is material financial relationship <abbr class="fa fa-info-circle"></abbr><span class="arrow-down"></span></a>
            </div>
            <div class="col col-xs-12">
              <div class="input-group row">
               <div class="col-md-6">
                  <label>Name of the Related party*</label>
                  <input type="text" placeholder="Name of the Related party" id="mfrname">
               </div>
               <div class="col-md-6">
                  <label>Identity Number (PAN/Aadhaar etc.)*</label>
                  <input type="text" placeholder="pan" id="adharpan" onkeypress="return isAlphaNumeric(event,this.value);">
               </div>
               <div class="col-md-6">
                  <label>Nature of Relationship*</label>
                  <input type="text" placeholder="Nature of Relationship " id="mfrrelation">
               </div>
               <div class="col-md-6">
                  <label>Address</label>
                  <textarea id="materialaddress" placeholder="Write address.." style="height:100px"></textarea>
               </div>

               <div class="col-md-12 text-right">
                 <button type="button" class="btn btn-primary" id="savemfr">Submit</button>
               </div>

            </div>
            </div>
            <!---------------------------------------------------------------------------------------------->
            <!----TABLE OF INSERTED DATA------------------------------------------------------------------>
            <h4 class="mfrdetails">Material Financial Relationship Details</h4>
            <table class="table table-inverse" id="datableabhi">
               <thead>
                  <tr>
                     <th>Sr No</th>
                     <th>Name of the Related party</th>
                     <th>Identity Number</th>
                     <th>Nature of Relationship</th>
                     <th>Address</th>
                     <th> Action </th>
                  </tr>
               </thead>
               <tbody class="mfrtable" appendrow='1'></tbody>
               <tr>
                  <td></td>
               <tr>
            </table>
<!--
            <div class="trdebtn">
               <div class="trdinti">
                  <h4 class="tradedetails">Trade Intimation Details</h4>
               </div>
               <div class="text-right">
               <button type="button" class="btn btn-danger" id="trdeintimatn">Trade Intimation</button> 
            </div>
            </div>
            <table class="table table-inverse" id="datableabhi">
               <thead>
                  <tr>
                     <th>Sr No</th>
                     <th>Name of the Related party</th>
                     <th>Type Of Security</th>
                     <th>Company Name</th>
                     <th>No.Of Shares</th>
                     <th>Date Of Transaction</th>
                     <th>Type Of Transaction</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody class="trdeintimatndetail" appendrow='1'></tbody>
               <tr>
                  <td></td>
               <tr>
            </table>
-->
         </div>
         <div id="mfrdelmodal" class="modal fade" role="dialog">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header">
                     <button type="button" class="close" data-dismiss="modal">
                     &times;</button>
                  </div>
                  <div class="modal-body">
                     <input type="hidden" id="mfrdelid" value="" name="">
                     <h5 style="text-align: center;">Are you sure you want to delete this entry?</h5>
                  </div>
                  <div class="modal-footer">
                     <button type="button" class="btn btn-danger" id="delbtnmfr">Delete</button> 
                  </div>
               </div>
            </div>
         </div>
         <div id="mfrdelmodaledit" class="modal fade" role="dialog">
            <div class="modal-dialog">
               <!-- Modal content-->
               <div class="modal-content">
                  <div class="modal-header">
                     <h4 class="modal-title">
                     Please Update Your data</h5> 
                     <button type="button" class="close" data-dismiss="modal">
                     &times;</button>
                  </div>
                  <div class="modal-body">
                     <input type="hidden" id="mfreditid" value="" name="">
                  </div>
                  <div class="col-md-6">
                     <label>Name of the Related party</label>
                     <input type="text" placeholder="Name of the Related party" id="mfrnameup">
                  </div>
                  <div class="col-md-6">
                     <label>Identity Number (PAN/Aadhaar etc.)*</label>
                     <input type="text" placeholder="pan" id="adharpanup" onkeypress="return isAlphaNumeric(event,this.value);">
                  </div>
                  <div class="col-md-6">
                     <label>Nature of Relationship</label>
                     <input type="text" placeholder="Nature of Relationship " id="mfrrelationup">
                  </div>
                  <div class="col-md-6">
                     <label>Address</label>
                     <textarea id="materialaddressup" placeholder="Write address.." style="height:100px"></textarea>
                  </div>
                  <div class="modal-footer">
                     <button type="button" class="btn btn-primary" id="upmfrmod">Update</button> 
                  </div>
               </div>
            </div>
         </div>
         <div id="tradeintimationmodel" class="modal fade" role="dialog">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header">
                     <button type="button" class="close" data-dismiss="modal">&times;</button>
                     <h4 class="modal-title">Please Fill Form</h4>
                  </div>
                  <div class="modal-body show_shadow">
                     <form action="employeemodule/inserttrdintimtn" id="inserttrdintimtn" method="post" enctype="multipart/form-data" autocomplete="off">
                        <input type="hidden" name="compid" class="compid" id="compid" value="">
                        <section class="col col-md-6 col-xs-6">
                           <div class="input">
                              <div class="mainelem company_product">
                                 <label class="control-label">Search Name of company*</label>
                                 <div class="header-search-wrapper  floatnone find_box_company">
                                    <i class="fa fa-search"></i>
                                    <input type="text" name="getvalueofsearch" class="header-search-input z-depth-2 floatleft" placeholder="Select Company" id="search-box" autocomplete="off"/>
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
                              <label class="control-label">Name Of Company*</label>
                              <input type="text" id="validators" name="validators" class="form_fields form-control col-md-7 col-xs-12" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required readonly>
                           </div>
                        </section>
                        <section class="col col-md-6 col-xs-6">
                           <div class="input">
                              <label class="control-label">Name Of Related Party*</label> 
                              <select id="reltedprty" name="reltedprty" class="form_fields form-control col-md-7 col-xs-12" >
                                 <option value="" id="reltedprty" >Select Related Party</option>
                                 <?php foreach($relatedparty as $party){  ?>
                                 <option value="<?php echo $party['id']; ?>"><?php echo $party['related_party']; ?></option>
                                 <?php } ?>
                              </select>
                           </div>
                        </section>
                        <section class="col col-md-6 col-xs-6">
                           <div class="input">
                              <label class="control-label">Type Of Security</label>  
                              <select id="secutype" name="secutype" class="form_fields form-control col-md-7 col-xs-12" >
                                 <option value="" id="secutype" >Select Security Type</option>
                                 <?php foreach($sectype as $secutype){  ?>
                                 <option value="<?php echo $secutype['id']; ?>"><?php echo $secutype['security_type']; ?></option>
                                 <?php } ?>
                              </select>
                           </div>
                        </section>
                        <section class="col col-md-6 col-xs-6">
                           <div class="input">
                              <label class="control-label">Type Of Transaction</label>  
                              <select id="trnstype" name="trnstype" class="form_fields form-control col-md-7 col-xs-12" >
                                 <?php foreach($transctn as $trns){  ?>
                                 <option value="<?php echo $trns['id']; ?>"><?php echo $trns['transaction']; ?></option>
                                 <?php } ?>
                              </select>
                           </div>
                        </section>
                        <section class="col col-md-6 col-xs-6">
                           <div class="input">
                              <label class="control-label">No. Of Shares*</label>
                              <input type="text" id="shres" name="shres" class="form_fields form-control col-md-7 col-xs-12" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required>
                           </div>
                        </section>
                        <section class="col col-md-12 col-xs-12" id="dateoftrans">
                           <div class="input">
                              <label class="control-label">Date Of Transaction</label> 
                              <input type="text" name="transdate" id="transdate" class="form-control bootdatepick" required readonly>
                           </div>
                        </section>
                        <section class="col col-md-12 ">
                           <input type="submit" value="Submit" class="btn btn-primary ">
                        </section>
                        <div class="clearelement"></div>
                     </form>
                  </div>
                  <div class="modal-footer">
                  </div>
               </div>
            </div>
         </div>
         <div id="Mymodaledit" class="modal fade" role="dialog">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header">
                     <button type="button" class="close" data-dismiss="modal">&times;</button>
                     <h4 class="modal-title">Please Fill Form</h4>
                  </div>
                  <div class="modal-body show_shadow">
                     <form action="employeemodule/updatetrdintimtn" id="updatetrdintimtn" method="post" enctype="multipart/form-data" autocomplete="off">
                        <input type="hidden" id="trdeditid" value="" name="trdeditid">
                        <input type="hidden" name="compid" class="compid" id="compid" value="">
                        <section class="col col-md-6 col-xs-6">
                           <div class="input">
                              <div class="mainelem company_product">
                                 <label class="control-label">Search Name of company*</label>
                                 <div class="header-search-wrapper  floatnone find_box_company">
                                    <i class="fa fa-search"></i>
                                    <input type="text" name="getvalueofsearch" class="header-search-input z-depth-2 floatleft" placeholder="Select Company" id="search-box" autocomplete="off"/>
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
                              <label class="control-label">Name Of Company*</label>
                              <input type="text" id="validators" name="validators" class="form_fields form-control col-md-7 col-xs-12" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required readonly>
                           </div>
                        </section>
                        <section class="col col-md-6 col-xs-6">
                           <div class="input">
                              <label class="control-label">Name Of Related Party*</label> 
                              <select id="reltedprty" name="reltedprty" class="form_fields form-control col-md-7 col-xs-12" >
                                 <?php foreach($relatedparty as $party){  ?>
                                 <option value="<?php echo $party['id']; ?>"><?php echo $party['related_party']; ?></option>
                                 <?php } ?>
                              </select>
                           </div>
                        </section>
                        <section class="col col-md-6 col-xs-6">
                           <div class="input">
                              <label class="control-label">Type Of Security</label>  
                              <select id="secutype" name="secutype" class="form_fields form-control col-md-7 col-xs-12" >
                                 <?php foreach($sectype as $secutype){  ?>
                                 <option value="<?php echo $secutype['id']; ?>"><?php echo $secutype['security_type']; ?></option>
                                 <?php } ?>
                              </select>
                           </div>
                        </section>
                        <section class="col col-md-6 col-xs-6">
                           <div class="input">
                              <label class="control-label">Type Of Transaction</label>  
                              <select id="trnstype" name="trnstype" class="form_fields form-control col-md-7 col-xs-12" >
                                 <?php foreach($transctn as $trns){  ?>
                                 <option value="<?php echo $trns['id']; ?>"><?php echo $trns['transaction']; ?></option>
                                 <?php } ?>
                              </select>
                           </div>
                        </section>
                        <section class="col col-md-6 col-xs-6">
                           <div class="input">
                              <label class="control-label">No. Of Shares*</label>
                              <input type="text" id="shres" name="shres" class="form_fields form-control col-md-7 col-xs-12" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required>
                           </div>
                        </section>
                        <section class="col col-md-6 col-xs-6" id="dateoftrans">
                           <div class="input">
                              <label class="control-label">Date Of Transaction</label> 
                              <input type="text" name="transdate" id="transdate" class="form-control bootdatepick" required readonly>
                           </div>
                        </section>
                        <section class="col col-md-12 ">
                           <input type="submit" value="Submit" class="btn btn-primary ">
                        </section>
                        <div class="clearelement"></div>
                     </form>
                  </div>
                  <div class="modal-footer">
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<div id="myModalyesno" class="modal fade" role="dialog">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Would you like to go ahead?</h4>
         </div>
         <div class="modal-body show_shadow">
            <div class="text-center modal_heading">
               NOTE
               <div class="clearelement"></div>
               All The Details of Recipient Will be Deleted.<br>Are You Sure You Want To Proceed.
            </div>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-primary mar_0 yesconfirm" tempid="">Yes</button>
            <button type="button" class="btn btn-default btn-default-one" data-dismiss="modal">No</button>
         </div>
      </div>
   </div>
</div>
<div id="sendappp" class="modal fade" role="dialog">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
         </div>
         <div class="modal-body show_shadow">
            <div class="text-center modal_heading">
               <div class="clearelement"></div>
               Are You Sure To Send This Information For Approval?
            </div>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-primary mar_0 sendreq" tempid="">Send</button>
         </div>
      </div>
   </div>
</div>
<!-- ########################################## PageContent End ########################################## -->