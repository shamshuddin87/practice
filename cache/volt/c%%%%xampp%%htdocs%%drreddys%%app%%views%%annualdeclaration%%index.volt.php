<?php
$user_group_id = trim($this->session->loginauthspuserfront['user_group_id']);
$gtselctedcmp = $this->session->cmpconmemberdoc;
$condeptsess = $this->session->contractdepartment;
//echo "company is ";print_r($user_group_id);exit;
?>

<!-- Main content -->
<!-- ########################################## PageContent Start ########################################## --> 
<div class="right_col" role="main">
<div class="row">
<div class="content">

<!-- My messages -->
<div class="mainelementfom">
  <div class="create_button">
    <button type="button" class="btn btn-primary getdata">Create Declaration</button>
   </div> 
  <h1 class="h1_heading text-center" style="text-align: center;">Annual Declaration</h1>
  <table width="100%" border="1" class="table table-inverse" id="datableabhi">
 <thead>
  <tr>
    <th>Srno</th> 
    <th>Creation date</th>  
    <th>Send to Compliance Officer</th>
    <th>Annual Declaration Year</th>
    <th>Sent Date</th>      
    <th>Action</th>                                           
    </tr>
 </thead>
<tbody class="allpdf" appendrow='1'></tbody>
</table>
</div>



<div id="Mymodaldeclara" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <div class="modal-content" style="width:950px;">
      <div class="modal-header">
      	<select id="annualyear" name="annualyear">
         <option value="2020">2020</option>
         <option value="2021">2021</option>
         <option value="2022">2022</option>
         <option value="2023">2023</option>
         <option value="2024">2024</option>
         <option value="2025">2025</option>
       </select>
      
       <button type="button" class="close" data-dismiss="modal">&times;</button>
        <div id="downloadpdf" style="float: right;"></div>
         <div class="in_box">
           <button type="button" class="btn btn-primary formpdf">Generate PDF</button>
         </div>
          <div class="modalform">
        <!---------------------------------INITIAL DECLARATION FORM--------------------------------------------------->








        <!----------------------------------------------------------------------------------------------------------->


          </div>
        </div>
      </div>
    </div>
  </div>
        

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
            <h5 style="text-align: center;">Are You Sure To Delete This Request?</h5> </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" id="deletereq" tempid="">Delete</button> 
            </div>
        </div>
    </div>
</div>    
        


    <div id="sendmod" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                    &times;</button>
            
            </div>
            <div class="modal-body">
            <input type="hidden" id="reqid" value="" name="">
            <h5 style="text-align: center;">Are You Sure To Send This Request?</h5> </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-success" id="sendreq" tempid="">Send</button> 
            </div>
        </div>
    </div>
</div>    
        
<div class="clearelement"></div>
<div class="preloder_wraper">
    <a href="javascript:;" class="preloder"></a>
</div>
<div class="clearelement"></div>
</div>
</div>
</div>


<!---------------------------------------MODAL BOX-------------------------------------------------------->


<!-- ########################################## PageContent End ########################################## --> 
 





