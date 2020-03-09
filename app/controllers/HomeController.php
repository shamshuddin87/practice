<?php 
class HomeController extends ControllerBase
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
        $gmnlog = $this->session->loginauthspuserfront;
        
        
        /*################  Phalcon Database name Fetching
        $connection = $this->db->getDescriptor();
        $connection = $connection['dbname'];
        echo '<pre>';print_r($connection);exit; 
        ###########################*/
        
        //$getmn = $this->session->orgdtl;
        //echo '<pre>';print_r($getmn);exit;        
    }
    public function countofrestrictcompAction()
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
                $getres = $this->homecommon->countofrestrictcomp($getuserid,$user_group_id);
                //print_r($getres);exit;
                if($getres)
                {
                    $data = array("logged" => true,'message' => 'Found','data'=>$getres);
                    $this->response->setJsonContent($data);
                }
                else
                {
                    $data = array("logged" => false,'message' => "Record Not Found..!!");
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
    
    public function countofdepreltvAction()
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
                $getres = $this->homecommon->countdepndrelative($getuserid,$user_group_id);
                //print_r($getres);exit;
                if($getres)
                {
                    $data = array("logged" => true,'message' => 'Found','data'=>$getres);
                    $this->response->setJsonContent($data);
                }
                else
                {
                    $data = array("logged" => false,'message' => "Record Not Found..!!");
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
        
    public function countofreqpendappAction()
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
                $getres = $this->homecommon->countofreqpendapp($getuserid,$user_group_id);
                //print_r($getres);exit;
                if($getres)
                {
                    $data = array("logged" => true,'message' => 'Found','data'=>$getres);
                    $this->response->setJsonContent($data);
                }
                else
                {
                    $data = array("logged" => false,'message' => "Record Not Found..!!");
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

    public function getallholdingsummaryAction()
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
                $getres = $this->homecommon->fetchholdingsummary($getuserid,$user_group_id);
                $getcmpname = $this->homecommon->fetchcmpname($getuserid,$user_group_id);
                $getequity = $this->homecommon->fetchequity($getuserid,$getres['companyid']);
                $getprefereence = $this->homecommon->fetchprefereence($getuserid,$getres['companyid']);
                //$getdebenure = $this->homecommon->fetchdebenure($getuserid,$getres['companyid']);
                //print_r($getdebenure);exit;
                if(!empty($getcmpname))
                {
                    $data = array("logged" => true,'message' => 'Record Added','resdta' => $getres['data'],'data'=>$getres,'user_group_id'=>$user_group_id,'user_id'=>$getuserid,'equity'=>$getequity,'prefer'=>$getprefereence,'cmpname'=>$getcmpname);
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


    public function checkdetailsAction()
    {
        $this->view->disable();
        $uid = $this->session->loginauthspuserfront['id'];
        $usergroup = $this->session->loginauthspuserfront['user_group_id'];
        if($this->request->isPost() == true)
        {
            if($this->request->isAjax() == true)
            {     
                $result = $this->employeemodulecommon->getmydetails($uid,$usergroup);
                //print_r($result);exit;
                $getdematsstatus=$this->portfoliocommon->getdematsstatus($uid,$usergroup);
                //print_r($getdematsstatus);exit;
                if(!empty($getdematsstatus))
                {
                   // print_r($getdematsstatus);exit;
                  if($getdematsstatus[0]['status']==1)
                  {
                       // print_r("hh");exit;
                      $getdematsstatus=1;
                  }
                  else
                  {
                     $getdematsstatus=0;
                  }
                }
                else
                {
                     $getdematsstatus=2;
                }

                // print_r($getdematsstatus);exit;
            
                if(!empty($result))
                {  
                    

                    $getresponse = $this->portfoliocommon->getaccnoinfo($uid,$usergroup);
                  
                    if((empty($getresponse) &&  $getdematsstatus==1) || (empty($getresponse) &&  $getdematsstatus==2))
                    {
                       $data = array("logged" => false,'message' => "For using the software please enter your demat account details ",'data'=>'portfolio','usergroup'=>$usergroup);
                         $this->response->setJsonContent($data);
                       $this->response->setJsonContent($data);
                    }
                    else
                    {
                        $data = array("logged" => true,'message' => "Data Fetch Successfully",'data'=>'');
                             $this->response->setJsonContent($data);

                    }
                }
                else
                {

                    $data = array("logged" => false,'message' => "For using the software please enter your personal details",'data'=>'employeemodule','usergroup'=>$usergroup);
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
    
    
    
    

}


