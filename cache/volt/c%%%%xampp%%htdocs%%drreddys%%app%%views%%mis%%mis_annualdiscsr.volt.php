<?php
    $user_group_id = trim($this->session->loginauthspuserfront['user_group_id']);
    $gtselctedcmp = $this->session->cmpconmemberdoc;
    $condeptsess = $this->session->contractdepartment;
    //$current_year =  date("Y");
    $current_year =  '2020';
    // print_r($getuserinfo);exit;
    ?>
<!-- Main content -->
<!-- ########################################## PageContent Start ########################################## --> 
<div class="right_col" role="main">
    <div class="*row">
        <div class="content">
            <!-- My messages -->
            <div class="mainelementfom ">
                <h1 class="h1_heading">Annual Disclosures</h1>
                <div class="formcss">
                    <div class="typography form_pad">
                        <div class="formelementmain">
                            <div class="clearelement"></div>
                            <div class="clearelement"></div>
                        </div>
                    </div>
                </div>
                <div class="table-responsive table_wraper *design_info itntfr" id="annualdisc" itntfr="annualdisc" >
                    <!-- <div class="cssnumrws">
                        <span>Show</span>
                         <select id="noofrows" name="noofrows" class="noofrows">
                            <option value="10">10</option><option value="25">25</option>
                             <option value="50">50</option><option value="100">100</option>
                          </select> 
                        <span>Entries</span>
                        <div style="float:right;">
                         <button type="button" class="btn btn-primary genfile excel_bg">Export Excel</button>
                         <a class="exportcss dwnldExcel" href="" style="display: none;" download>Download</a>
                        </div>
                        
                        <div class="top_margin"><input type="text" placeholder="Search By Name" id="srch" status="0"></div>
                        
                        <div class="cssfilter">               
                         <div class="control-label form-group">
                             <label>Status Filter</label>
                             <select id="filterstatus" name="filterstatus" class="form-control">
                                 <option value="">All</option>
                                 <option value="pending">Pending</option>
                                 <option value="sent_for_approval">Sent for approval</option>
                             </select>
                         </div>
                        </div>
                        </div> -->
                    <div class="cssnumrws showentry form-inline">
                        <label>Show</label>
                        <select id="noofrows" name="noofrows" class="noofrows form-control">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        <label>Entries</label>
                    </div>
                    <div class="otherfilter">
                        <div class="cssfilter " style="margin: 0 10px;">
                            <div class="control-label form-group">
                                <label>Select Year</label>
                                <select class="annualyear form-control" id="annualyear">
                                    <?php for ($i = 0 ; $i < 6 ; $i++) { ?>
                                    <option value="<?php echo($current_year + $i);  ?>"> <?php echo($current_year + $i);  ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="cssfilter" style="margin: 0 10px;">
                            <div class="control-label form-group">
                                <label>Status Filter</label>
                                <select id="filterstatus" name="filterstatus" class="form-control">
                                    <option value="">All</option>
                                    <option value="pending">Pending</option>
                                    <option value="sent_for_approval">Received</option>
                                </select>
                            </div>
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
                        <div class="searhbyname">
                            <input type="text" placeholder="Search By Name" class="form-control " id="srch" status="0">
                        </div>
                        <div class="excelanddownloadbtn">
                            <button type="button" class="btn btn-primary genfile excel_bg" style="padding: 8px 12px;">Export Excel</button>
                            <a class="exportcss dwnldExcel" href="" style="display: none;" download>Download</a>
                        </div>
                    </div>
                    <table class="table table-inverse" id="datableabhi7">
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Name</th>
                                <th>Employee Status</th>
                                <!-- <th>Employee ID</th>  -->
                                <th>Year</th>
                                <th>Date of receipt</th>
                                <th>File</th>
                            </tr>
                        </thead>
                        <tbody class="accdetails7" appendrow='1'>   
                        </tbody>
                    </table>
                    <div class="">
                        <div class="paginationmn" id="acc7"></div>
                        <input type="hidden" id="pagenum" name="pagenum" class="pagechnum" value="1">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="preloder_wraper">
        <a href="javascript:;" class="preloder"></a>
    </div>
    <!-- ########################################## PageContent End ########################################## --> 
</div>