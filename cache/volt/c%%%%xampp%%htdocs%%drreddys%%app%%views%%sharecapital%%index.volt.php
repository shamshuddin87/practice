<?php $gmnlog = $this->session->loginauthspuserfront; ?>
<?php //echo"<pre>";print_r($gmnlog); exit;?> 
<!-- Main content -->
<div class="right_col" role="main">
    <div class="*row">
        <div class="content">
            <!-- My messages -->
            <div class="">
                <h1 class="h1_heading">Insert Share Capital</h1>
                <div class="containergrid">
                    <div class="formcss">
                        <div class="typography form_pad">
                            <!--<h4 class="text-center form_heading">Create User</h4>-->
                            <div class="tablitiledesc text-center">
                                <div class="note">
                                    (<strong>Note : </strong>Important Fields are * Specified.)
                                </div>
                            </div>
                            <div class="formelementmain">
                                <form id="addshrecapital" action="sharecapital/addsharecapital" method="post" enctype="multipart/form-data" autocomplete="off">
                                    <div class="clearelement"></div>
                                    <section class="col col-md-6 col-xs-6">
                                        <label class="control-label">Share capital*</label>
                                        <div class="input">
                                            <input type="text" id="shrcap" name="shrcap" required="required" class="form_fields form-control col-md-7 col-xs-12" >
                                        </div>
                                    </section>
                                    <div class="clearelement"></div>
                                    <section class="col col-md-6 col-xs-12">
                                        <div class="control-label formgroup  btnuop">
                                            <button type="Submit" class="btn btn-primary addregion btnlblne">Submit</button> 
                                        </div>
                                    </section>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!--table start-->
                    <div class="containergrid">
                        <div class="formcss">
                            <h2 class="h1_heading">View Share Capital</h2>
                            <div class="cssnumrws">
                                <span>Show</span>
                                <select id="noofrows" name="noofrows" class="noofrows">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                                <span>Entries</span>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-inverse" id="datableabhi">
                                    <thead>
                                        <tr>
                                            <th>Sr No</th>
                                            <th>ShareCapital</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody class="sharecapitaldetail" appendrow='1'></tbody>
                                </table>
                                <div class="">
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
            <div id="upsimodel" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">
                            &times;</button>
                            <h4 class="modal-title">Update Share Capital</h4>
                        </div>
                        <div class="modal-body">
                            <label class="control-label">Share Capital</label>
                            <div class="input">
                                <input type="text" id="upupsnm" name="upupsnm" required="required" class="form_fields form-control col-md-7 col-xs-12" >
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success"  id="upbtn" editid="">Update</button> 
                        </div>
                    </div>
                </div>
            </div>
            <!--------------------DELETE Upsi MODEL--------------------->
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
                            <h5 style="text-align: center;">Are You Sure To Delete This UPSI Type?</h5>
                        </div>
                        <div class="modal-footer t-center">
                            <button type="button" class="btn btn-danger" id="delups">Delete</button> 
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- ########################################## PageContent End ########################################## -->