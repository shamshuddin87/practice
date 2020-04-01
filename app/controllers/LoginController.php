<?php

class LoginController extends ControllerBase
{
    public function initialize()
    {
		$this->elements->checkalreadyuserloggedin();
		
        $this->tag->setTitle('Sign In To Dashboard');
		$LoginAuthsAdmin = $this->session->loginauthspuserfront;
		
        parent::initialize();
    }

    public function indexAction()
    {
		
    }
    public function orglogAction()
    {
		
    }


    public function autovidmloginAction()
    {
        $this->view->disable();
        if($this->request->isPost() == true)
        {
            $vidm_loggedemail = $this->request->getPost('username','trim');
           // echo"<pre>";print_r($azure_loggedemail);exit;

            $getdata = $this->logincommon->setvidmsession($vidm_loggedemail);
            //echo"<pre>";print_r($getdata);exit;
            $resetlogin = $this->logincommon->updatetlogin($vidm_loggedemail);

            if($getdata['logged']==true)
            {
                $data = array("logged" => true,'message' => $getdata['message'], 'user_grp_id' => $getdata['user_group_id'],'fieldname'=>'loginpage');
                //print_r($data);exit;
                $this->response->setJsonContent($data);
            }
            else
            {
                $data = array("logged" => false,'message' => $getdata['message'], 'user_grp_id' => '','fieldname'=>'loginpage');
                $this->response->setJsonContent($data);
            }
            $this->response->send();
            //$connection->close();
            //echo $username; exit;
        }
    }

	public function loginchecAction()
    {
		$connection = $this->db;
        $this->view->disable();
        if($this->request->isPost() == true) 
        {
            if($this->request->isAjax() == true) 
            {
				$ip = $this->request->getClientAddress();
				$youremail = $this->request->getPost('youremail','trim');
                $youremailch = $this->request->getPost('youremail','trim');
				$youremail = $this->validationcommon->emailvalidate($youremail);
				$pwd = $this->request->getPost('password');
				$pwdcharter = $this->elements->pwdcharregex($pwd);  
                //echo $ip.'*'.$pwd.'*'.$pwdcharter; exit; 
                
                $sessionid = $this->session->getId();
                //echo $sessionid; exit;               

				if($youremail==false)
				{
					$data = array("logged" => false,'message' => 'not valid Email','fieldname'=>'emailrrormsg');
					$this->response->setJsonContent($data);
				}
				else if(empty($pwd))
				{
					$data = array("logged" => false,'message' => 'Password is Blank','fieldname'=>'pwderrormsg');
					$this->response->setJsonContent($data);
				}
				else if($pwdcharter==true)
				{
					$data = array("logged" => false,'message' => 'Password Contains Special Character. Supports only "@", "Alphabets" and "numbers" ','fieldname'=>'pwderrormsg');
					$this->response->setJsonContent($data);
				}
				else
				{				
					$getemail 	=	strtolower($youremailch);
                    
                    $getdata = $this->logincommon->checkuserlogin($getemail,$pwd);

                    $resetlogin = $this->logincommon->updatetlogin($getemail);

                    //$getdata = $this->logincommon->checkusermylogin($getemail,$pwd);
                    //echo '<pre>';print_r($getdata);exit;
                    if($getdata['logged']==true)
                    {
                        $data = array("logged" => true,'message' => 'Login Successfully');
                        $this->response->setJsonContent($data);
                    }
                    else
                    {
                        $data = array("logged" => false,'message' => 'Wrong Username or Password');
                        $this->response->setJsonContent($data);
                    }
                    
				}
                
				$this->response->send();
			}
		}
		
    }
    
    public function myloginchecAction()
    {
		$connection = $this->db;
        $this->view->disable();
        if($this->request->isPost() == true) 
        {
            if($this->request->isAjax() == true) 
            {
				$ip = $this->request->getClientAddress();
				$youremail = $this->request->getPost('youremail','trim');
                $youremailch = $this->request->getPost('youremail','trim');
				$youremail = $this->validationcommon->emailvalidate($youremail);
				$pwd = $this->request->getPost('password');
				$pwdcharter = $this->elements->pwdcharregex($pwd);  
                //echo $ip.'*'.$pwd.'*'.$pwdcharter; exit; 
                
                $sessionid = $this->session->getId();
                //echo $sessionid; exit;               

				if($youremail==false)
				{
					$data = array("logged" => false,'message' => 'not valid Email','fieldname'=>'emailrrormsg');
					$this->response->setJsonContent($data);
				}
				else if(empty($pwd))
				{
					$data = array("logged" => false,'message' => 'Password is Blank','fieldname'=>'pwderrormsg');
					$this->response->setJsonContent($data);
				}
				else if($pwdcharter==true)
				{
					$data = array("logged" => false,'message' => 'Password Contains Special Character','fieldname'=>'pwderrormsg');
					$this->response->setJsonContent($data);
				}
				else
				{				
					$getemail =	strtolower($youremailch);
					
                    $getdata = $this->logincommon->checkuserlogin($getemail,$pwd);
                    //$getdata = $this->logincommon->checkusermylogin($getemail,$pwd);
                    //echo '<pre>';print_r($getdata);exit;
                    if($getdata['logged']==true)
                    {
                        $data = array("logged" => true,'message' => 'Login Successfully');
                        $this->response->setJsonContent($data);
                    }
                    else
                    {
                        $data = array("logged" => false,'message' => 'Wrong Username or Password');
                        $this->response->setJsonContent($data);
                    }
                    
				}
                
				$this->response->send();
			}
		}
		
    }
    
	public function logoutAction()
    {
        $fgnm = 'login';        
		$this->session->destroy();
		$this->session->remove('loginauthspuserfront');
		return $this->response->redirect($fgnm);
	}
    
    
    
    
}
?>