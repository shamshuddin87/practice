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
     

    <h1 class="h1_heading text-center">MIS REPORT</h1>

    <p id="noofusers">
        
    </p>
    <div class="containergrid">       
        <div class="formcss">                           
            <div class="typography form_pad">
                   
             <div class="clearelement"></div>
            </div>
       </div>     
    </div>
    

     <div class="cssnumrws">
       <span>Show</span>
        <select id="noofrows" name="noofrows" class="noofrows">
           <option value="10">10</option><option value="25">25</option>
            <option value="50">50</option><option value="100">100</option>
         </select> 
      
        <span>Entries</span>
        </div> 
       

        <div class="table-responsive table_wraper">
   
        <table class="table datatable-responsive" class="templatetbl" id="datableabhi" dtausi = "" border="1">
            <thead>
                <tr>
                    <th>User Name</th>
                    <th colspan="3" style="text-align: center;">Closing Balance</th>
                </tr>
                <tr>  
                    <th></th>
                    <th>Equity</th>
                    <th>Preference</th>
                    <th>Debenture</th>
                </tr>
              </thead>
            <tbody class="appendrow" appendrow='1'></tbody>
        </table>
    </div>
 
<div class="panel panel-white">
<div class="paginationmn" id="mis1"></div>
<input type="hidden" id="pagenum" name="pagenum" class="pagechnum" value="1">
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
<!-- ########################################## PageContent End ########################################## --> 
 



</div>

