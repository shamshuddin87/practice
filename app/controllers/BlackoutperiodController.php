<?php 
class BlackoutperiodController extends ControllerBase
{
    public function initialize()
    {
        $getlan    = $this->elements->getTranslation();
        $this->tag->setTitle($getlan['websitetitle']);
		$this->elements->checkuserloggedin();
		//$getuserid = $this->session->loginauthspuserfront['id'];
        //echo ':frontend user::';print_r($this->session->loginauthsuser);exit;
        parent::initialize();
    }

    public function indexAction()
    {     
        $uid = $this->session->loginauthspuserfront['id'];
        $usergroup = $this->session->loginauthspuserfront['user_group_id'];
        $gmnlog = $this->session->loginauthspuserfront;
              
    }
    
    /**************************** search for cmp masters start *****************************/
    public function companymasterAction()
    {
        $this->view->disable();
        $getuserid = $this->session->loginauthspuserfront['id'];
        $cin = $this->session->memberdoccin;
        $user_group_id = $this->session->loginauthspuserfront['user_group_id'];
        //echo $getuserid.'*'.$cin;exit;

        if($this->request->isPost() == true)
        {
            if($this->request->isAjax() == true)
            {
                $searchvallist = $this->request->getPost('searchvallist');
                //echo  $searchvallist;exit;
                $searchlist = $this->filter->sanitize($searchvallist, "trim");
                $searchlist = $this->filter->sanitize($searchvallist, "string");
                if(preg_match("/[A-Za-z]+/", $searchlist))
                {
                    $getsearchkywo = $searchlist;
                    $limit = 10;
                    //echo $getsearchkywo;exit;
                    $userlist = array();
                    $complist = array();
                    
                    $complist = $this->blackoutperiodcommon->cmpdetails($getuserid,$user_group_id,$getsearchkywo);  
                    
                    $getcount = count($complist);
                    //echo $getcount; exit;

                    if(!empty($complist))
                    {
                        $data = array("logged" => true,'message' => 'Found!!!' ,'data'=> $complist,'count'=> $getcount);
                        //echo '<pre>'; print_r($data); exit;
                        $this->response->setJsonContent($data);
                    }
                    else
                    {
                        $data = array("logged" => false,'message' => 'No Result Found !!!');
                        $this->response->setJsonContent($data);
                    }
                }
            

                $this->response->send();
            }
            else
            {
                exit('No direct script access allowed');
                $connection->close();
            }
        }
        else
        {
            return $this->response->redirect('errors/show404');
            exit('No direct script access allowed');
        }
    }
    /**************************** search for cmp masters end *****************************/
    
    /**************************** insert cmp in blackout period start *****************************/
    public function insertblackoutperiodAction()
    {     
        $this->view->disable();
        $getuserid = $this->session->loginauthspuserfront['id'];
        $cin = $this->session->memberdoccin;
        $user_group_id = $this->session->loginauthspuserfront['user_group_id'];
        $firstname = $this->session->loginauthspuserfront['firstname'];
        $lastname = $this->session->loginauthspuserfront['lastname'];
        $timeago = time();
        if($this->request->isPost() == true)
        {
            if($this->request->isAjax() == true)
            {
                $date=date('d-m-Y');
                //print_r($this->request->getPost());exit;
                $compid   = $this->request->getPost('compid','trim');
                $blckoutfrom   = $this->request->getPost('blckoutfrom','trim');
                $blckoutto   = $this->request->getPost('blckoutto','trim');
                $reason   = $this->request->getPost('reason','trim');
                $infodata = $this->request->getPost();
                
                /*Date Validation for Date From and To Start */
                if(!empty($blckoutfrom))
                {
                    $blckoutfrom_arr = explode('-', $blckoutfrom);

                    $blckoutfromm = $blckoutfrom_arr[1];
                    $blckoutfromy = $blckoutfrom_arr[2];
                    $blckoutfromd = $blckoutfrom_arr[0];
                    $blckoutfromstatus = $this->elements->checkdate($blckoutfromm,$blckoutfromy,$blckoutfromd);
                    
                }
                
                if(!empty($blckoutto))
                {
                    $blckoutto_arr = explode('-', $blckoutto);

                    $blckouttom = $blckoutto_arr[1];
                    $blckouttoy = $blckoutto_arr[2];
                    $blckouttod = $blckoutto_arr[0];
                    $blckouttostatus = $this->elements->checkdate($blckouttom,$blckouttoy,$blckouttod);
                    
                }
                /*Date Validation for Date From and To End */
                
                if(empty($compid))
                {
                    $data = array("logged" => false,'message' => 'Please Select Company!!');
                    $this->response->setJsonContent($data);
                }
                else if(empty($blckoutfrom))
                {
                    $data = array("logged" => false,'message' => 'Black Out Date From should not empty!!');
                    $this->response->setJsonContent($data);
                }
                else if($blckoutfromstatus != "valid")
                {
                    $data = array("logged" => false,'message' => 'Please provide correct Black Out Date From');
                    $this->response->setJsonContent($data);
                }
                else if(strtotime($date) > strtotime($blckoutfrom))
                {
                      $data = array("logged" => false,'message' => 'Black Out Date From should be in future!!');
                      $this->response->setJsonContent($data);
                }
                else if(empty($blckoutto))
                {
                    $data = array("logged" => false,'message' => 'Black Out Date To should not empty!!');
                    $this->response->setJsonContent($data);
                }
                else if($blckouttostatus != "valid")
                {
                    $data = array("logged" => false,'message' => 'Please provide correct Black Out Date To');
                    $this->response->setJsonContent($data);
                }
                else if(strtotime($date) > strtotime($blckoutto))
                {
                      $data = array("logged" => false,'message' => 'Black Out Date To should be in future!!');
                      $this->response->setJsonContent($data);
                }
                else if(strtotime($blckoutfrom) > strtotime($blckoutto))
                {
                   $data = array("logged" => false,'message' => 'Black Out Date To should be Greater Than Black Out Date From!!');
                   $this->response->setJsonContent($data);
                }
                else
                {
                    $blckoutfrom =  date("d-m-Y", strtotime($blckoutfrom));
                    $blckoutto =  date("d-m-Y", strtotime($blckoutto));
                
                
                    $getres = $this->blackoutperiodcommon->insertblackoutperiod($getuserid,$user_group_id,$compid,$blckoutfrom,$blckoutto,$reason);
                    

                    $grpusrs = $this->insidercommon->getGroupUsers($getuserid,$user_group_id);
                    $connectedperson = $this->insidercommon->getconnectedusers($getuserid,$user_group_id);

                    //print_r($connectedperson);exit;
                    $email = $grpusrs['userlist'];
                    $email =array_merge($email,$connectedperson);
                    //print_r($email);exit;
                    
                  
                    for($i=0;$i<sizeof($email);$i++)
                    {
                        // echo '<pre>'; print_r($email[$i]); 

                        if(array_key_exists("wr_id", $email[$i]))
                        {
                           // echo "hello";
                        $sendtoid = $email[$i]['wr_id'];                        
                        $sendtoname = $email[$i]['fullname'];
                        $emailid = $email[$i]['email'];
                        }
                        else if(array_key_exists("nameofentity", $email[$i]))
                        {
                          //echo "not hello";
                        $sendtoid = $email[$i]['user_id'];                        
                        $sendtoname = $email[$i]['nameofentity'];
                        $emailid = $email[$i]['email'];
                        }
                        
                        //$result = $this->emailer->mailoftradingwindow($emailcontent,$emailid);
                                                
                        // ----- Start InsertDataInAutomailer -----
                        $qtypeid = '3'; //-- refer email_queuetype table
                       
                        $result = $this->automailercommon->insertemailqueue($getuserid,$user_group_id,$qtypeid,$sendtoid,$emailid,$sendtoname,$infodata);
                        //print_r($result);exit;
                    }

                    if($getres && $result==true)
                    {
                        $data = array("logged" => true,'message' => 'Record Added','resdta' => $getres);
                        $this->response->setJsonContent($data);
                    }
                    else
                    {
                        $data = array("logged" => false,'message' => "Record Not Added..!!");
                        $this->response->setJsonContent($data);
                    }  
               
                }
                
                $this->response->send();
            }
            else
            {
                exit('No direct script access allowed');
                $connection->close();
            }
        }
        else
        {
            return $this->response->redirect('errors/show404');
            exit('No direct script access allowed');
        }       
    }
    /**************************** insert cmp in blackout period end *****************************/
    

    /**************************** fetch cmp in blackout period start *****************************/
    public function fetchblackoutperiodAction()
    {
         $this->view->disable();
        $getuserid = $this->session->loginauthspuserfront['id'];
        $cin = $this->session->memberdoccin;
        $user_group_id = $this->session->loginauthspuserfront['user_group_id'];
        //echo $getuserid.'*'.$cin;exit;

        if($this->request->isPost() == true)
        {
            if($this->request->isAjax() == true)
            {
                $getres = $this->blackoutperiodcommon->fetchblackoutperiod($getuserid,$user_group_id);
                //print_r($getres);exit;
                if($getres)
                {
                    $data = array("logged" => true,'message' => 'Record Added','resdta' => $getres,'user_group_id'=>$user_group_id,'user_id'=>$getuserid);
                    $this->response->setJsonContent($data);
                }
                else
                {
                    $data = array("logged" => false,'message' => "Record Not Added..!!");
                    $this->response->setJsonContent($data);
                }
                

                $this->response->send();
            }
            else
            {
                exit('No direct script access allowed');
                $connection->close();
            }
        }
        else
        {
            return $this->response->redirect('errors/show404');
            exit('No direct script access allowed');
        }
    }
    /**************************** fetch cmp in blackout period end *****************************/
    
    /**************************** delete cmp in blackout period start *****************************/
    public function blackoutperioddeleteAction()
    {
        $this->view->disable();
        $getuserid = $this->session->loginauthspuserfront['id'];
        $cin = $this->session->memberdoccin;
        $user_group_id = $this->session->loginauthspuserfront['user_group_id'];
        //echo $getuserid.'*'.$cin;exit;

        if($this->request->isPost() == true)
        {
            if($this->request->isAjax() == true)
            {
                $id = $this->request->getPost('id','trim');
                $getres = $this->blackoutperiodcommon->blackoutperioddelete($id);
                if($getres)
                {
                    $data = array("logged" => true,'message' => 'Record Deleted');
                    $this->response->setJsonContent($data);
                }
                else
                {
                    $data = array("logged" => false,'message' => "Record Not Deleted..!!");
                    $this->response->setJsonContent($data);
                }
                

                $this->response->send();
            }
            else
            {
                exit('No direct script access allowed');
                $connection->close();
            }
        }
        else
        {
            return $this->response->redirect('errors/show404');
            exit('No direct script access allowed');
        }
    }
    /**************************** delete cmp in blackout period end *****************************/
    
    public function sendmailtoallusersAction()
    {
        $this->view->disable();
        $getuserid = $this->session->loginauthspuserfront['id'];
        $cin = $this->session->memberdoccin;
        $user_group_id = $this->session->loginauthspuserfront['user_group_id'];
        //echo $getuserid.'*'.$cin;exit;

        if($this->request->isPost() == true)
        {
            if($this->request->isAjax() == true)
            {
                $emailcontent = $this->request->getPost('emailcontent','trim');
                if(empty($emailcontent))
                {
                    $data = array('logged'=>false, 'message'=>'Please Enter Email Content'); 
                    $this->response->setJsonContent($data);
                }
                else
                {
                    $grpusrs = $this->insidercommon->getGroupUsers($getuserid,$user_group_id);
                    $email = $grpusrs['userlist'];
                    for($i=0;$i<sizeof($email);$i++)
                    {
                        // echo '<pre>'; print_r($email[$i]); 
                        $sendtoid = $email[$i]['wr_id'];                        
                        $sendtoname = $email[$i]['fullname'];
                        $emailid = $email[$i]['email'];
                        //$result = $this->emailer->mailoftradingwindow($emailcontent,$emailid);
                                                
                        // ----- Start InsertDataInAutomailer -----
                        $qtypeid = '3'; //-- refer email_queuetype table
                        $infodata = array('emailcontent'=>$emailcontent);
                        $result = $this->automailercommon->insertemailqueue($getuserid,$user_group_id,$qtypeid,$sendtoid,$emailid,$sendtoname,$infodata);
                        // ----- End InsertDataInAutomailer -----
                    }
                    // exit;
                    if($result==true)
                    {
                        $data = array('logged'=>true, 'message'=>'Send Successfully');
                        $this->response->setJsonContent($data);
                    }
                    else
                    {   
                        $data = array('logged'=>false, 'message'=>'Mail Not Sent'); 
                        $this->response->setJsonContent($data);

                    }
                }
                $this->response->send();
            }
            else
            {
                exit('No direct script access allowed');
                $connection->close();
            }
        }
        else
        {
            return $this->response->redirect('errors/show404');
            exit('No direct script access allowed');
        }
    }

      /*   ------- START Test Email Facility ------ */
    public function tradingWindowTestEmailAction()
    {
          $this->view->disable();
          $getuserid = $this->session->loginauthspuserfront['id'];
          $cin = $this->session->memberdoccin;
          $user_group_id = $this->session->loginauthspuserfront['user_group_id'];
          //echo $getuserid.'*'.$cin;exit;
  
          if($this->request->isPost() == true)
          {
              if($this->request->isAjax() == true)
              {


                $date=date('d-m-Y');
                $emailcontent=$this->request->getPost();
                $logedinuseremail = $this->session->loginauthspuserfront['email'];
                $logedinusername = $this->session->loginauthspuserfront['username'];
                  
                $blckoutfrom = $this->request->getPost('blckoutfrom','trim');
                $blckoutto = $this->request->getPost('blckoutto','trim');
                $purcloser = $this->request->getPost('reason','trim');
                $compid = $this->request->getPost('compid','trim');
                  
                 
                if(empty($compid))
                {
                    $data = array("logged" => false,'message' => 'Please Select Company!!');
                    $this->response->setJsonContent($data);
                }
                else if(empty($blckoutfrom))
                {
                    $data = array("logged" => false,'message' => 'Black Out Date From should not empty!!');
                    $this->response->setJsonContent($data);
                }
                else if(strtotime($date) > strtotime($blckoutfrom))
                {
                      $data = array("logged" => false,'message' => 'Black Out Date From should be in future!!');
                      $this->response->setJsonContent($data);
                }
                else if(empty($blckoutto))
                {
                    $data = array("logged" => false,'message' => 'Black Out Date To should not empty!!');
                    $this->response->setJsonContent($data);
                }
                else if(strtotime($date) > strtotime($blckoutto))
                {
                      $data = array("logged" => false,'message' => 'Black Out Date To should be in future!!');
                      $this->response->setJsonContent($data);
                }
                else if(strtotime($blckoutfrom) > strtotime($blckoutto))
                {
                   $data = array("logged" => false,'message' => 'Black Out Date To should be Greater Than Black Out Date From!!');
                   $this->response->setJsonContent($data);
                }
              
                  else
                  {
                     
                    $inserres = $this->blackoutperiodcommon->inserttradingwindowtestemail($getuserid,$user_group_id,$emailcontent,$logedinusername,$logedinuseremail);
                    //print_r($inserres);exit;
  
                      if($inserres)
                      { 
                        $result = $this->emailer->mailoftradingwindow($emailcontent,$logedinuseremail);
                         
                          if($result==true)
                          {
                              $data = array('logged'=>true, 'message'=>'Sent Successfully');
                              $this->response->setJsonContent($data);
                          }
                          else
                          {
                              $data = array('logged'=>false, 'message'=>'Mail Not Sent');
                              $this->response->setJsonContent($data);
  
                          }
                      }
                      else
                      {
                          $data = array('logged'=>false, 'message'=>'Announcement Test Email Not Sent.');
                          $this->response->setJsonContent($data);
  
                      }
                  }
                  $this->response->send();
              }
              else
              {
                  exit('No direct script access allowed');
                  $connection->close();
              }
          }
          else
          {
              return $this->response->redirect('errors/show404');
              exit('No direct script access allowed');
          }
    }
      /*   ------- END Test Email Facility ------ */
}
