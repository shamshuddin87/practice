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
<div class="row">
<div class="content">

<!-- My messages -->
<div class="mainelementfom "> 
    <h1 class="h1_heading text-center" style="text-align: center;">Initial Disclosures</h1>
<div class="table-responsive design_info itntfr" id="annualdisc" itntfr="annualdisc" >
        
        <div class="cssnumrws  form-inline">
           <label>Show</label>
            <select id="noofrows" name="noofrows" class="noofrows form-control">
               <option value="10">10</option><option value="25">25</option>
                <option value="50">50</option><option value="100">100</option>
             </select> 
        <label>Entries</label>

        <div class="top_margin">
            <input class=" form-control" type="text" placeholder="Search By Name" id="srch" status="0">
        </div>

        <div class="cssfilter">               
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

        <div class="cssfilter" style="margin-right: 10px;">               
        <div class="control-label form-group">
            <label>Status Filter</label>
            <select id="filterstatus" name="filterstatus" class="form-control">
                <option value="">All</option>
                <option value="pending">Pending</option>
                <option value="sent_for_approval">Sent for approval</option>
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
                    <!-- <th>Employee ID</th>  -->
                    <th>Date Of Becoming Insider</th> 
                    <th>Due for receipt</th>
                    <th>File</th>
                </tr>
             </thead>
            <tbody class="accdetails8" appendrow='1'>   
            </tbody>
        </table> 
        <div class="panel panel-white">
            <div class="paginationmn" id="acc8"></div>
            <input type="hidden" id="pagenum" name="pagenum" class="pagechnum" value="1">
        </div>
    </div>
    
    

</div>
</div>
</div>
<!-- ########################################## PageContent End ########################################## --> 
 



</div>

