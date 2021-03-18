<?php 
$gmnlog = $this->session->loginauthspuserfront;
//echo"<pre>";print_r($gmnlog); exit;
$category = $this->coicommon->fetchCategory();
//print_r($category);exit;
?> 

<!-- Main content -->
<!-- ########################################## PageContent Start ########################################## --> 
<div class="right_col" role="main">
<div class="row">
<div class="content">

<!-- My messages -->
<div class="mainelementfom">
    
    <h1 class="h1_heading text-center" style="text-align: center;">Conflict Of Interest Declaration Form</h1>
    <div class="containergrid">
        <div class="formcss">
            <form action="coi/insertcoi" id="insertcoi" method="post" autocomplete="off" enctype="multipart/form-data">
            <input type="hidden" name="coipdfhtml" id="coipdfhtml" value="">
            <input type="hidden" name="formsendtype" id="formsendtype" value="">
             <div class="coihtmldata">
                <div>
                    <h2 class="h2_heading" style="text-align:center;">Employee Details</h2>
                    <table border="1" style="border-collapse: collapse; border: 1px solid #ccc;  width: 600px;" class="table table-responsive table-inverse" width="100%">
                        <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Employee ID</th>
                            <th>Designation</th>
                            <th>Department</th>
                            <th>Manager</th>
                            <th>HR</th>
                        </tr>
                        </thead>
                        <tbody class="empdata">
                          <tr>
                            <td class="empname"></td>
                            <td class="empid"></td>
                            <td class="designation"></td>               
                            <td class="department"></td>               
                            <td class="dept"></td>               
                            <td class="hr"></td>               
                          </tr>
                        </tbody>
                    </table>
                </div>
            
                <div>
                    <h2 class="h2_heading" style="text-align:center;">Confirmation</h2>
                    <div style="color: #000">
                        <div class="form-check form-check-inline">
                            <p>Do you have any actual / potential conflict of interest situations you are facing as per 'Conflict of Interest' Policy. Click Here to download policy.</p>
                          <input class="coipolicy" type="radio" name="coipolicy" id="coiyes" value="Yes">
                          <label>Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="coipolicy" type="radio" name="coipolicy" id="coino" value="No" checked>
                          <label>No</label>
                        </div>
                    </div>
                </div>
            
                <div class="divcoipolicy" style="color: #000;display:none;">
                    <h2 class="h2_heading" style="text-align:center;">Information</h2>
                    <p>Please describe below the actual or potential conflict of interest.</p>
                    <p>Do you have any actual / potential conflict of interest situations you are facing as per 'Conflict of Interest' Policy. Click Here to download policy.</p>
                    <label>Please select the category</label>
                    <select class="form-control coicategory" id="coicategory" name="coicategory" required>
                       <option value="">Select Category</option>
                        <?php for($i=0;$i < count($category); $i++){?>
                            <option value="<?php echo $category[$i]['id'] ?>"><?php echo $category[$i]['category'] ?></option>
                        <?php } ?>
                    </select>
                    <div class="coicateque"></div>
                    <div class="form-group" id="coiothers" style="display:none;">
                        <label for="content">Content</label>
                        <div class="" name="content">
                            <textarea class="textareforedit"></textarea>
                            <input type="hidden" name="others_des" id="others_des" value="">
                        </div>
                    </div>

                    <h2 class="h2_heading" style="text-align:center;">Attachments</h2>
                    <div class="col-md-12 col-xs-12 ">
                      <label class="control-label">Upload File</label>
                      <div class="choose_files">
                         <input type="file" name="attachment[]" id="attachment" >
                      </div>
                    </div>
                    <div class="appendfile"  filecntr='1'></div>
                    <div class="">
                        <input type="button" class="btn btn-primary btnaddfile" value="+" >
                        <input type="button" class="btn btn-primary btndeletefile" value="-" >                    
                    </div>  
                </div>
            
            
                <h2 class="h2_heading" style="text-align:center;">Declaration</h2>
                <div class="" style="color: #000">
                    <p>I hereby declare that the information provided above is true and complete to best of my knowledge and belief.In addition,I affirm that i will make further disclosures as may be required in future in the event of any change of circustances. I have read and understood the Conflict of Interest policy and agree to abide with the same.</p>
                    <p>Date:<?php echo date('d-m-Y');?></p>
                </div>
              </div>  
            </form>
            <div class="col-md-12 text-right" style="margin-top: 20px;"> 
                <button type="submit" class="btn btn-primary savecoi">Submit</button>
            </div>
        </div>
    </div>
    
<div class="clearelement"></div>
<div class="preloder_wraper">
    <a href="javascript:;" class="preloder"></a>
</div>
<div class="clearelement"></div>
</div>
<!-- /main content -->
 
</div>
</div>
</div>



<div id="Mymodalcoideclara" class="modal  fade" role="dialog" style="overflow-y: auto;left:-22%; ">
   <div class="modal-dialog">
      <div class="modal-content" style="width:950px;">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <div id="downloadpdf" style="float: right;margin: 20px; z-index: 2; "></div>
            <div class="in_box">
               <button type="button" class="btn btn-primary coigeneratepdf floatright" style="margin: 20px;z-index: 2;">Generate PDF</button>
            </div>
            <div class="modalcoihtmldata"></div>
         </div>
      </div>
   </div>
</div>

<div id="sendcoiforapproval" class="modal fade" role="dialog">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
         </div>
         <div class="modal-body show_shadow">
            <div class="text-center modal_heading">
               <div class="clearelement"></div>
               Do you want to send the Conflict of Interest Declaration form.
            </div>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-primary sendcoiform" name="sendtype" id="" value="yes" tempid="">Yes</button>
            <button type="button" class="btn btn-primary sendcoiform"  value="no" tempid="">No</button>
         </div>
      </div>
   </div>
</div>
<!-- ########################################## PageContent End ########################################## --> 
 
