<?php
$user_group_id = trim($this->session->loginauthspuserfront['user_group_id']);
$gtselctedcmp = $this->session->cmpconmemberdoc;
$condeptsess = $this->session->contractdepartment;
$current_year =  date("Y");
// print_r($getuserinfo);exit;
?>

<!-- Main content -->
<!-- ########################################## PageContent Start ########################################## --> 
<div class="right_col" role="main">
<div class="*row">
<div class="content">

<!-- My messages -->
<div class="mainelementfom "> 
    <h1 class="h1_heading">Non-Execution of Trade</h1>
<div class="table-responsive table_wraper *design_info itntfr" id="annualdisc" itntfr="annualdisc" >
        
        <div class="cssnumrws  form-inline ">
           <label>Show</label>
            <select id="noofrows" name="noofrows" class="noofrows  form-control">
               <option value="10">10</option><option value="25">25</option>
                <option value="50">50</option><option value="100">100</option>
             </select> 
        <label>Entries</label>
            <div style="float: right;">
                <input type="text" placeholder="Search By Name" id="srch" status="0" class=" form-control">
            </div>
            <div class="cssfilter" style="float: right;margin-right: 10px;">               
              <div class="control-label form-group">
                  <label>Employee Status</label>
                  <select id="emp_status" name="emp_status" class="form-control">
                      <option value="">All</option>
                      <option value="1">Active</option>
                      <option value="2">Resigned</option>
                      <option value="3">Not a DP</option>
                  </select>
              </div>
            </div>
        </div>
        <table class="table table-inverse" id="datableabhi7">
             <thead>
               <tr>
                    <th>Sr No.</th> 
                    <th>Name</th> 
                    <th>Employee Status</th> 
                  <!--   <th>Name Of Company</th>  -->
                    <!-- <th>Date of Pre-Clearance</th>  -->
                    <th>Shares approved under PC</th> 
                    <th>Date of confirmation of non execution</th>
                    <!-- <th>Compliance or Non-Compliance </th> -->
                </tr>
             </thead>
            <tbody class="accdetails8" appendrow='1'>   
            </tbody>
        </table> 
        <div class="">
            <div class="paginationmn" id="acc8"></div>
            <input type="hidden" id="pagenum" name="pagenum" class="pagechnum" value="1">
        </div>
    </div>
    
    

</div>
</div>
</div>
<!-- ########################################## PageContent End ########################################## --> 
 



</div>

