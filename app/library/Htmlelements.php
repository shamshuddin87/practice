<?php

use Phalcon\Mvc\User\Component;
/**
 * Elements
 *
 * Helps to build UI elements for the application
 */
class Htmlelements extends Component
{
    
    

    public function cmpmaslist($arrdta,$country,$state,$litiid)
    {
        
        //echo "checkoing arr ";print_r($arrdta);exit;
        $ndir = explode(',', $arrdta['nameofdir']);
        $ddir = explode(',', $arrdta['dirdesig']);
        $edir = explode(',', $arrdta['diremail']);
        $appendhtml = '';
        $appendhtml .='<input type="hidden" name="mlistid" class="mlistid" id="mlistid" value="'.$litiid.'"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="control-label form-group col-lg-6">
                        <span class="floatleft"><b>Organisation/Company/Firm Name *</b></span>
                        <input type="text" class="form-control" id="orgcmpfrm" name="orgcmpfrm" value="'.$arrdta['companyname'].'" required>
                    </div>
                    <div class="control-label form-group col-lg-6">
                        <span class="floatleft"><b>Proprietor/Authorized Signatory *</b></span>
                        <input type="text" class="form-control" id="propauthsig" name="propauthsig" value="'.$arrdta['proprietor'].'" required>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="control-label form-group col-lg-12">
                        <span class="floatleft"><b>Address Line 1 *</b></span>
                        <input type="text" class="form-control" id="addrlone" name="addrlone" value="'.$arrdta['addrone'].'" required >
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="control-label form-group col-lg-6">
                        <span class="floatleft"><b>Address Line 2 *</b></span>
                        <input type="text" class="form-control" id="addrltwo" name="addrltwo" value="'.$arrdta['addrtwo'].'" required>
                    </div>
                    <div class="control-label form-group col-lg-6">
                        <span class="floatleft"><b>City *</b></span>
                        <div class="input">
                            <input type="text" id="citycmp" name="citycmp" class="form_fields form-control col-md-7 col-xs-12" value="'.$arrdta['city'].'" required>
                        </div>
                    </div>
                    <div class="control-label form-group col-lg-6">
                        <span class="floatleft"><b>State *</b></span>
                        <div class="input">
                            <select id="statecmp" name="statecmp" class="form_fields form-control col-md-7 col-xs-12" required><option value="">Select State</option>';
                    foreach ($state as $ks => $vs) {
                        if ($arrdta['state'] == $vs['id']) {$selected = 'selected';}else{$selected = '';}
            $appendhtml .='<option value="'.$vs['id'].'" '.$selected.'>'.$vs['statename'].'</option>';
                    }
            $appendhtml .='</select>
                        </div>
                    </div>';

            $appendhtml .='<div class="control-label form-group col-lg-6">
                        <span class="floatleft"><b>Pin *</b></span>
                        <div class="input">
                            <input type="text" id="pincmp" name="pincmp" class="form_fields form-control col-md-7 col-xs-12" value="'.$arrdta['pin'].'" maxlength="6" required>
                        </div>
                    </div><div class="control-label form-group col-lg-6">
                        <span class="floatleft"><b>Country *</b></span>
                        <div class="input">
                            <select id="countrycmp" name="countrycmp" class="form_fields form-control col-md-7 col-xs-12" required><option value="">Select Country</option>';
                    foreach ($country as $kc => $vc) {
                        if ($arrdta['country'] == $vc['id']) {$select = 'selected';}else{$select = '';}
            $appendhtml .='<option value="'.$vc['id'].'" '.$select.'>'.$vc['countryname'].'</option>';
                    }
            $appendhtml .='</select>
                        </div>
                    </div>';

            $appendhtml .='<div class="control-label form-group col-lg-6">
                        <span class="floatleft"><b>Number Of Directors/Partners </b></span>
                        <div class="input">
                            <input type="text" id="noodircmp" name="noodircmp" value="'.$arrdta['noofdir'].'" class="form_fields form-control col-md-7 col-xs-12" >
                        </div>
                    </div>
                    <div class="control-label form-group col-lg-12">
                        <span class="floatleft"><b>Director/Partner Details</b></span>
                    </div><div class="dirdet" nooflp="'.$arrdta['noofdir'].'">';
                    $rn = 1;
            for ($ipk=0; $ipk < $arrdta['noofdir']; $ipk++) {
                $name = isset($ndir[$ipk]) ? $ndir[$ipk] : '';
                $desid = isset($ddir[$ipk]) ? $ddir[$ipk] : '';
                $email = isset($edir[$ipk]) ? $edir[$ipk] : '';
                $appendhtml .='<div class="dir_'.$rn.'">
                    <div class="control-label form-group col-md-4">
                        <span class="floatleft"><b>Name *</b></span>
                        <div class="input">
                            <input type="text" id="dirnamecmp" name="dirnamecmp[]" value="'.$name.'" class="form_fields form-control col-md-7 col-xs-12" required>
                        </div>
                    </div>
                    <div class="control-label form-group col-lg-4">
                        <span class="floatleft"><b>Designation *</b></span>
                        <div class="input">
                            <input type="text" id="dirdescmp" name="dirdescmp[]" value="'.$desid.'" class="form_fields form-control col-md-7 col-xs-12" required>
                        </div>
                    </div>
                    <div class="control-label form-group col-lg-4">
                        <span class="floatleft"><b>Email Id *</b></span>
                        <div class="input">
                            <input type="text" id="emailcmp" name="emailcmp[]" value="'.$email.'" class="form_fields form-control col-md-7 col-xs-12" required>
                        </div>
                    </div></div><div class="clearfix"></div>';
                $rn++;
            }


            $appendhtml .='</div></div>
                <div class="control-label form-group btnsubmitme">
                    <button type="submit" class="btn btn-primary updatecmmlistid">Submit</button>
                </div>';
        return $appendhtml;
    }
    
     public function requestforesign($filepath,$getuserid,$rqid)
     {
       $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="htth3://www.w3.org/1999/xhtml">
    <head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
    </head>
    <body style="margin: 0px;padding: 0px;font-family: Arial;width: 100%;max-width:600px;margin: 0 auto;border-top: 5px solid #373F89;background:#fff;">
    <h1>Dear sir,
    </h1>
    <h2>Please e-sign this document.</h2>
    <h2 style="text-align:left;">Thank You.</h2>
    <a href="https://www.volody.com/user/contractagreement/pixel?file='.$filepath.".pdf"."&&userid=".$getuserid."&&rowid=".$rqid.'">Click here to e-sign this document</a>
    </body>
    </html>';
            return $html;
     }   
    
    public function createsubuser($name,$to,$pwdemail)
    { $server_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";            
                $baseuri = $this->url->getBaseUri();
                $baseurl = $server_link.$baseuri;

            $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,500,700" rel="stylesheet" type="text/css">
</head>

  <body style="margin:0; background: #e5e5e5;">
        <table cellpadding="0" cellspacing="0" width="100%" border="0">
    <tr>
      <td>
      <table cellpadding="0" cellspacing="0" border="0" style="font-family:"Roboto",Arial, Helvetica, sans-serif; max-width:680px; font-size:12px; color:#333; background: #fff;" align="center">
       <tr>
            <td style="padding:20px 0 20px 0px; background: #f8f8f8;width:50%;" align="center">
               <a href="https://www.volody.com/" target="_blank" style="border:0; outline:0;">
                <img src="https://www.volody.com/mainadmin/img/emailer/logo.png" border="0"/>
               </a>
            </td>

            <td align="center" style="background: #f8f8f8;width:50%;">
                <a href="https://www.facebook.com/VolodySoftware/" style="text-decoration: none; padding-right: 15px;">
                  <img src="https://www.volody.com/companysecretary/gstemailer/images/facebook.png" alt="" />
                </a>
                <a href="https://www.youtube.com/channel/UCV8kLW489Q-iw16n_nxAmAg" style="text-decoration: none;">
                  <img src="https://www.volody.com/companysecretary/gstemailer/images/youtube.png" alt="" />
                </a>
            </td>
       </tr>

      <tr>
         <td align="center" colspan="2" style="padding-top: 20px; background: #fff;">
            <p style="max-width: 100%; margin:0; font-weight:600; letter-spacing: 1px; color:#333; font-size:24px; font-family:\'Roboto\',Arial,Helvetica,sans-serif;"><b>Welcome '.$name.'</b></p>
            <p style="max-width: 68%; margin:10px 0;color:#333; font-size:15px; line-height:20px; font-family:\'Roboto\',Arial,Helvetica,sans-serif;"> We\'re happy to have you on board.</p>
         </td>
      </tr>

      <tr>
         <td align="center" colspan="2" style="padding-top: 20px; background: #fff;">
            <p style="max-width: 100%; margin:0; font-weight:600; letter-spacing: 1px; color:#333; font-size:24px; font-family:\'Roboto\',Arial,Helvetica,sans-serif;">Login Details</p>
         </td>
      </tr>

      <tr>
         <td align="center" colspan="2" style="padding-top: 20px; background: #fff;">
          <form target="_blank">
            <div style="background:#f8f8f8;width:80%;height:45px;border-radius:3px">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding-top:13px">
                <span style="width:35%;float:left;text-align:center;color:#5d5d5d;font-size:14px;font-weight:600">Login Url :</span>
                <a href="https://www.volody.com/user/" style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;text-decoration:none;font-weight:600" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.volody.com/user/&amp;source=gmail&amp;ust=1517468278757000&amp;usg=AFQjCNFqTVDabRm7DZR1AUnQ5zLi-ncSOw">
                https://www.volody.com/user/</a></div>
              </div>
              <div style="background:#f8f8f8;width:80%;height:45px;border-radius:3px;margin-top:15px">
                <div style="border:0;outline:0;color:#333;background:0;width:100%;padding-top:13px;font-weight:600">
                  <span style="width:35%;float:left;text-align:center;color:#5d5d5d;font-size:14px">User Name :</span>
                  <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">
                    <a href="mailto: "'.$to.'" " style="color:#5d5d5d;text-decoration:none" target="_blank">"'.$to.'"</a></span>
                  </div>
                </div>
                <div style="background:#f8f8f8;width:80%;height:45px;border-radius:3px;margin-top:15px">
                  <div style="border:0;outline:0;color:#333;background:0;width:100%;padding-top:13px;font-weight:600">
                    <span style="width:35%;float:left;text-align:center;color:#5d5d5d;font-size:14px">Password :</span>
                    <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">
                    "'.$pwdemail.'"</span> </div>
                  </div>
                </form>
         </td>
      </tr>



      <tr>
        <td colspan="2" align="center">
        <div style="padding:40px 0 50px 0; background: #fff;">
        <a href="https://www.volody.com/user/" style="background:#27b16d;border-radius:3px;padding:12px 40px;color:#fff;font-size:16px;text-decoration:none;letter-spacing:1px" target="_blank" data-saferedirecturl="">Login Now!</a>
        </div>
        </td>
      </tr>
     
      <tr>
          <td style="padding:0px 0 20px 0; background: #f7f7f7; padding: 10px;" colspan="2">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td align="center" colspan="2">
                <p style="font-weight:600; letter-spacing: 1px; color:#333; font-size:20px; font-family:\'Roboto\',Arial,Helvetica,sans-serif;">For Support</p>
              </td>
            </tr>

              <tr>
                  <td align="center" style="width:340px">
                  <img src="'.$baseurl.'/mainadminhtml/img/emailer/phone.png" style="display:block; border:0"/>
                  <p style="margin:5px 0 0; color:#333; font-family:\'Roboto\',Arial,Helvetica,sans-serif; font-size:15px;">+91 8080809301</p>
                  </td>


                  <td align="center" style="width:340px">
                    <img src="'.$baseurl.'/mainadminhtml/img/emailer/gmailicon.png" style="display:block; border:0"/>
                    <p style="margin:5px 0 0; font-family:\'Roboto\',Arial,Helvetica,sans-serif; font-size:15px;"><a href="mailto:care@pretr.com" style="color:#333; text-decoration:none; border:0; outline:0;"> connect@volody.in</a></p>
                  </td>
              </tr>

          </table>
          </td>
      </tr>

      <tr>
           <td align="center" colspan="2" style="max-width:100%; line-height:25px; background: #333;">
           <p style="margin:0px; padding:8px 0 8px 0;  color:#fff; font-size:12px; font-family:\'Roboto\',Arial,Helvetica,sans-serif;">© 2019-20 Volody Products Pvt Ltd. - volody.com </p>
            </td>
      </tr>

    </table>
         
    </td>
    </tr>


      </table>
  </body>
</html>';
            return $html;
    }

       public function initialdeclarationannual($getname)
    {
        // print_r($getname);exit;
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="htth3://www.w3.org/1999/xhtml">
        <head>
        <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <title>Phoenix Peth</title>
        </head>
        <body>
        <p style="text-align:left;">Dear sir/mam,
        </p>
        <p style="text-align:left;">'.$getname.' Sent Annual Declaration.</p>
        <p style="text-align:left;">Thank You.</p>

        </body>
        </html>';


        return $html;
    } 


/************ Send approval  ****************/

public function sendforapproval($subject,$userids,$emailconstent)
{

   //echo "<pre>";print_r($userids);exit;
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="htth3://www.w3.org/1999/xhtml">

<head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
        <style>
        p{color: black;}
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        .button2 {background-color: #008CBA;} /* Blue */
        .button3 {background-color: #f44336;} /* Red */ 
        .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
        .button5 {background-color: #555555;} /* Black */
        </style>
</head>

<body style="font-family: Arial;
    width: 100%;
    background-color: #f2f2f2;
    padding:30px;
    max-width: 600px;
    margin: 0 auto;;

  ">
    <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
        <div class="main_container" style="max-width:600px; margin:0px;">
            <div class="header" style="margin-bottom:50px;">
                <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                    <div style="    text-shadow: 1px 0px 2px #626262;
    color: #626262;">Contract Approval</div>
                </div>
                <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
    color: #626262;

    text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                 <div style="clear:both;"></div>
            </div>
        <div style="    background-color: #f2f2f2;
    padding: 18px;">
            <div class="main">
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Subject : '.$subject.',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Contract Name : '.$emailconstent['agreementname'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Start Date : '.$emailconstent['startdate'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                End Date :'.$emailconstent['enddate'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Purpose : '.$emailconstent['purpose'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Amount : '.$emailconstent['amount'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Requester Name :'.$emailconstent['requestername'].',</div>             
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                  <span class="floatleft"><b>Exception:</b></span><textarea rows="3" cols="70">'.$emailconstent['exception'].'</textarea></div>
                 <div style="font-size: 14px;margin-bottom: 15px;color: #626262;font-weight: 700;letter-spacing: .7px; text-transform: capitalize;">
                  <a href="'.$emailconstent['url'].'randomaccess?raid='.$userids.'&vote=1&section='.$emailconstent['section'].'&view='.$emailconstent['rqid'].'"><button class="button  ">Accept</button></a>
                  <a href="'.$emailconstent['url'].'randomaccess?raid='.$userids.'&vote=0&section='.$emailconstent['section'].'&view='.$emailconstent['rqid'].'">
                    <button class="button  button3">Reject</button></a>
            </div>
                                                
    
<div style="font-size: 16px; color:#626262 ; font-weight: 700; margin-bottom:8px;font-weight:bold;">Warm regards,</div>
<div style="font-size: 14px; color:#626262 ; margin-bottom:1px;font-weight:bold;">Team Volody</div>
<div><a href="www.volody.com" target="_blank" style=" text-decoration:none;color:#003366;text-shadow: 1px 1px 5px #fff;text-align:left;font-size: 14px;font-weight:bold;">volody.com</a>
</div>
            </div>
        </div>
    </div>
        
    </div>
</body>
</html>';

//echo $html; exit; 

 return $html;
}

    
public function sendforapprovallegal($subject,$userids,$emailconstent)
{

   //echo "<pre>";print_r($userids);exit;
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="htth3://www.w3.org/1999/xhtml">

<head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
        <style>
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        .button2 {background-color: #008CBA;} /* Blue */
        .button3 {background-color: #f44336;} /* Red */ 
        .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
        .button5 {background-color: #555555;} /* Black */
        </style>
</head>

<body style="font-family: Arial;
    width: 100%;
    background-color: #f2f2f2;
    padding:30px;
    max-width: 600px;
    margin: 0 auto;;

  ">
    <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
        <div class="main_container" style="max-width:600px; margin:0px;">
            <div class="header" style="margin-bottom:50px;">
                <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                    <div style="    text-shadow: 1px 0px 2px #626262;
    color: #626262;">Contract Approval</div>
                </div>
                <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
    color: #626262;

    text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                 <div style="clear:both;"></div>
            </div>
        <div style="    background-color: #f2f2f2;
    padding: 18px;">
            <div class="main">
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Subject : '.$subject.',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Contract Name : '.$emailconstent['agreementname'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Start Date : '.$emailconstent['startdate'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                End Date :'.$emailconstent['enddate'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Purpose : '.$emailconstent['purpose'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Amount : '.$emailconstent['amount'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Requester Name :'.$emailconstent['requestername'].',</div>             
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                  <span class="floatleft"><b>Exception:</b></span><textarea rows="3" cols="70">'.$emailconstent['exception'].'</textarea></div>
                 <div style="font-size: 14px;margin-bottom: 15px;color: #626262;font-weight: 700;letter-spacing: .7px; text-transform: capitalize;">
                  <a href="'.$emailconstent['url'].'randomaccess?raid='.$userids.'&vote=1&section='.$emailconstent['section'].'&view='.$emailconstent['rqid'].'"><button class="button  ">Accept</button></a>
                  <a href="'.$emailconstent['url'].'randomaccess?raid='.$userids.'&vote=0&section='.$emailconstent['section'].'&view='.$emailconstent['rqid'].'">
                    <button class="button  button3">Reject</button></a>
            </div>
                                                
    
<div style="font-size: 16px; color:#626262 ; font-weight: 700; margin-bottom:8px;font-weight:bold;">Warm regards,</div>
<div style="font-size: 14px; color:#626262 ; margin-bottom:1px;font-weight:bold;">Team Volody</div>
<div><a href="www.volody.com" target="_blank" style=" text-decoration:none;color:#003366;text-shadow: 1px 1px 5px #fff;text-align:left;font-size: 14px;font-weight:bold;">volody.com</a>
</div>
            </div>
        </div>
    </div>
        
    </div>
</body>
</html>';

//echo $html; exit; 

 return $html;
}

/************End of Send approval  ****************/


/************ Send legal approval approval  ****************/

public function sendforlegalapproval($subject,$emaildata)
{   
   //echo "<pre>";print_r($userids);exit;
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="htth3://www.w3.org/1999/xhtml">

<head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
        <style>
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        .button2 {background-color: #008CBA;} /* Blue */
        .button3 {background-color: #f44336;} /* Red */ 
        .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
        .button5 {background-color: #555555;} /* Black */
        </style>
</head>

<body style="font-family: Arial;
    width: 100%;
    background-color: #f2f2f2;
    padding:30px;
    max-width: 600px;
    margin: 0 auto;;

  ">
    <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
        <div class="main_container" style="max-width:600px; margin:0px;">
            <div class="header" style="margin-bottom:50px;">
                <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                    <div style="    text-shadow: 1px 0px 2px #626262;
    color: #626262;">Volody</div>
                </div>
                <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
    color: #626262;

    text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                 <div style="clear:both;"></div>
            </div>
        <div style="    background-color: #f2f2f2;
    padding: 18px;">
            <div class="main">
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Subject : '.$subject.',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Contract Name : '.$emaildata['agreementname'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Start Date : '.$emaildata['startdate'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                End Date :'.$emaildata['enddate'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Purpose : '.$emaildata['purpose'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Amount : '.$emaildata['amount'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Requester Name :'.$emaildata['requestername'].',</div>                                          
    
<div style="font-size: 16px; color:#626262 ; font-weight: 700; margin-bottom:8px;font-weight:bold;">Warm regards,</div>
<div style="font-size: 14px; color:#626262 ; margin-bottom:1px;font-weight:bold;">Team Volody</div>
<div><a href="www.volody.com" target="_blank" style=" text-decoration:none;color:#003366;text-shadow: 1px 1px 5px #fff;text-align:left;font-size: 14px;font-weight:bold;">volody.com</a>
</div>
            </div>
        </div>
    </div>
        </div>
</body>
</html>';

//echo $html; exit; 

 return $html;
}


/************End of Send approval  ****************/



/************ Send legal approval approval  ****************/

public function sendmsgwithmail($subject,$agreementname,$messagenote,$reqname)
{   
   //echo "<pre>";print_r($userids);exit;
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="htth3://www.w3.org/1999/xhtml">

<head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
        <style>
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        .button2 {background-color: #008CBA;} /* Blue */
        .button3 {background-color: #f44336;} /* Red */ 
        .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
        .button5 {background-color: #555555;} /* Black */
        </style>
</head>

<body style="font-family: Arial;
    width: 100%;
    background-color: #f2f2f2;
    padding:30px;
    max-width: 600px;
    margin: 0 auto;;

  ">
    <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
        <div class="main_container" style="max-width:600px; margin:0px;">
            <div class="header" style="margin-bottom:50px;">
                <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                    <div style="    text-shadow: 1px 0px 2px #626262;
    color: #626262;">Volody</div>
                </div>
                <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
    color: #626262;

    text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                 <div style="clear:both;"></div>
            </div>
        <div style="    background-color: #f2f2f2;
    padding: 18px;">
            <div class="main">
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;font-weight: 700;letter-spacing: .7px; text-transform: capitalize;">
                Contract Name : '.$agreementname.',</div>

                 <div style="font-size: 14px;margin-bottom: 15px;color: #626262;font-weight: 700;letter-spacing: .7px; text-transform: capitalize;">
                   Message : '.$messagenote.',</div> 

                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;font-weight: 700;letter-spacing: .7px; text-transform: capitalize;">                  
                   Sent by : '.$reqname.'.</div> 
                                                   
    
<div style="font-size: 16px; color:#626262 ; font-weight: 700; margin-bottom:8px;font-weight:bold;">Warm regards,</div>
<div style="font-size: 14px; color:#626262 ; margin-bottom:1px;font-weight:bold;">Team Volody</div>
<div><a href="www.volody.com" target="_blank" style=" text-decoration:none;color:#003366;text-shadow: 1px 1px 5px #fff;text-align:left;font-size: 14px;font-weight:bold;">volody.com</a>
</div>
            </div>
        </div>
    </div>
        
    </div>
</body>
</html>';

//echo $html; exit; 

 return $html;
}


/************End of Send approval  ****************/
 public function mailcomprestriction($username,$getcompdata,$periodfrom,$periodto)
 {
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="htth3://www.w3.org/1999/xhtml">

    <head>
        <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <title>Phoenix Peth</title>
            <style>
            .button {
                background-color: #4CAF50; /* Green */
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }

            .button2 {background-color: #008CBA;} /* Blue */
            .button3 {background-color: #f44336;} /* Red */ 
            .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
            .button5 {background-color: #555555;} /* Black */
            </style>
    </head>

    <body style="font-family: Arial;
        width: 100%;
        background-color: #f2f2f2;
        padding:30px;
        max-width: 600px;
        margin: 0 auto;;

      ">
        <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
            <div class="main_container" style="max-width:600px; margin:0px;">
                <div class="header" style="margin-bottom:50px;">
                <div style="    background-color: #f2f2f2; padding: 18px;">
                <div class="main">
                <p>Dear '.$username.'</p>
                <p>A new company is now entered into the restricted company list for trading in shares/securities. Following are its details - </p>
                <table border="1"  style="border-collapse: collapse;">
                <tr>
                <th>Company Name</th>
                <th>From date</th>
                <th>To date</th>
                </tr>
                <tr>
                <td>'.$getcompdata.'</td>
                <td>'.$periodfrom.'</td>
                <td>'.$periodto.'</td>
                </tr>
                </table>
                </div>';
        
        //print_r($html);exit;
        return $html;
    }
    
 public function mailemprestriction($username,$getcompdata,$periodfrom,$periodto)
 {
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="htth3://www.w3.org/1999/xhtml">

    <head>
        <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <title>Phoenix Peth</title>
            <style>
            .button {
                background-color: #4CAF50; /* Green */
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }

            .button2 {background-color: #008CBA;} /* Blue */
            .button3 {background-color: #f44336;} /* Red */ 
            .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
            .button5 {background-color: #555555;} /* Black */
            </style>
    </head>

    <body style="font-family: Arial;
        width: 100%;
        background-color: #f2f2f2;
        padding:30px;
        max-width: 600px;
        margin: 0 auto;;

      ">
        <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
            <div class="main_container" style="max-width:600px; margin:0px;">
                <div class="header" style="margin-bottom:50px;">
                <div style="    background-color: #f2f2f2; padding: 18px;">
                <div class="main">
                <p>Dear '.$username.'</p>
                <p>A new company is now entered into the restricted company list for trading in shares/securities. Following are its details - </p>
                <table border="1"  style="border-collapse: collapse;">
                <tr>
                <th>Company Name</th>
                <th>From date</th>
                <th>To date</th>
                </tr>
                <tr>
                <td>'.$getcompdata.'</td>
                <td>'.$periodfrom.'</td>
                <td>'.$periodto.'</td>
                </tr>
                </table>
                </div>';
        
        //print_r($html);exit;
        return $html;
    }
    
  /********** send request approval start *********/
   public function sendmailrqstapprvl($subject,$emaildata)
   {
          $uid = $this->session->loginauthspuserfront['id'];
           $transaction = strip_tags($emaildata['type_trnscn']);
       //echo "<pre>";print_r($userids);exit;
            $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="htth3://www.w3.org/1999/xhtml">

    <head>
        <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <title>Phoenix Peth</title>
            <style>
            p{color: black;}
            .button {
                background-color: #4CAF50; /* Green */
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }

            .button2 {background-color: #008CBA;} /* Blue */
            .button3 {background-color: #f44336;} /* Red */ 
            .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
            .button5 {background-color: #555555;} /* Black */
            </style>
    </head>

    <body style="font-family: Arial;
        width: 100%;
        background-color: #f2f2f2;
        padding:30px;
        max-width: 600px;
        margin: 0 auto;;

      ">
        <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
            <div class="main_container" style="max-width:600px; margin:0px;">
                <div class="header" style="margin-bottom:50px;">
                    <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                        <div style="    text-shadow: 1px 0px 2px #626262;
        color: #626262;">Request Approval</div>
                    </div>
                    <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
        color: #626262;

        text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                     <div style="clear:both;"></div>
                </div>
            <div style="    background-color: #f2f2f2;
        padding: 18px;">
                <div class="main">
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                    Requester Name : '.$emaildata['requester_name'].',</div>
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                    Company Name : '.$emaildata['company_name'].',</div>
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                    Type of Transaction : '.$transaction.',</div>
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                    Security Type :'.$emaildata['securty_type'].',</div>
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                    No Of Securities : '.$emaildata['noofshres'].'</div>
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                      <a href="'.$emaildata['url'].'randomrequest?vote='.base64_encode("1").'&rqst='.base64_encode($emaildata['rqst_id']).'&userid='.base64_encode($uid).'"><button class="button ">Approve</button></a>
                      <a href="'.$emaildata['url'].'randomrequest?vote='.base64_encode("0").'&rqst='.base64_encode($emaildata['rqst_id']).'&userid='.base64_encode($uid).'"><button class="button  button3">Reject</button></a>
                </div>
                </div>
            </div>
        </div>

        </div>
    </body>
    </html>';

    //echo $html; exit; 

     return $html;
}
  /********** send request approval end ***********/
    
     /********** send ack mail to requster start *********/
   public function sendmailackapprvl($subject,$emaildata)
   {
       
       $transaction = strip_tags($emaildata['type_trnscn']);
   //echo "<pre>";print_r($userids);exit;
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="htth3://www.w3.org/1999/xhtml">

<head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
        <style>
        p{color: black;}
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        .button2 {background-color: #008CBA;} /* Blue */
        .button3 {background-color: #f44336;} /* Red */ 
        .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
        .button5 {background-color: #555555;} /* Black */
        </style>
</head>

<body style="font-family: Arial;
    width: 100%;
    background-color: #f2f2f2;
    padding:30px;
    max-width: 600px;
    margin: 0 auto;;

  ">
    <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
        <div class="main_container" style="max-width:600px; margin:0px;">
            <div class="header" style="margin-bottom:50px;">
                <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                    <div style="    text-shadow: 1px 0px 2px #626262;
    color: #626262;">Request Approval</div>
                </div>
                <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
    color: #626262;

    text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                 <div style="clear:both;"></div>
            </div>
        <div style="    background-color: #f2f2f2;
    padding: 18px;">
            <div class="main">
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Company Name : '.$emaildata['company_name'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Type of Transaction : '.$transaction.',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Security Type :'.$emaildata['securty_type'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                No Of Securities : '.$emaildata['noofshres'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
            </div>
                                                
            </div>
        </div>
    </div>
        
    </div>
</body>
</html>';

//echo $html; exit; 

 return $html;
}
  /********** send ack mail to requster end ***********/
    
    /********** send request approval start *********/
   public function sendmailexcbrqstapprvl($subject,$emaildata)
   {
       
           $transaction = strip_tags($emaildata['type_trnscn']);
       //echo "<pre>";print_r($userids);exit;
            $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="htth3://www.w3.org/1999/xhtml">

    <head>
        <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <title>Phoenix Peth</title>
            <style>
            p{color: black;}
            .button {
                background-color: #4CAF50; /* Green */
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }

            .button2 {background-color: #008CBA;} /* Blue */
            .button3 {background-color: #f44336;} /* Red */ 
            .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
            .button5 {background-color: #555555;} /* Black */
            </style>
    </head>

    <body style="font-family: Arial;
        width: 100%;
        background-color: #f2f2f2;
        padding:30px;
        max-width: 600px;
        margin: 0 auto;;

      ">
        <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
            <div class="main_container" style="max-width:600px; margin:0px;">
                <div class="header" style="margin-bottom:50px;">
                    <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                        <div style="    text-shadow: 1px 0px 2px #626262;
        color: #626262;">Request Approval</div>
                    </div>
                    <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
        color: #626262;

        text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                     <div style="clear:both;"></div>
                </div>
            <div style="    background-color: #f2f2f2;
        padding: 18px;">
                <div class="main">
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                    Requester Name : '.$emaildata['requester_name'].',</div>
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                    Company Name : '.$emaildata['company_name'].',</div>
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                    Type of Transaction : '.$transaction.',</div>
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                    Security Type :'.$emaildata['securty_type'].',</div>
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                    No Of Securities : '.$emaildata['noofshres'].'</div>
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                      <a href="'.$emaildata['url'].'randomexception?vote='.base64_encode("1").'&excrqst='.base64_encode($emaildata['id']).'&rqst='.base64_encode($emaildata['id']).'"><button class="button ">Accept</button></a>
                      <a href="'.$emaildata['url'].'randomexception?vote='.base64_encode("0").'&excrqst='.base64_encode($emaildata['id']).'"><button class="button  button3">Reject</button></a>
                </div>

                </div>
            </div>
        </div>

        </div>
    </body>
    </html>';

    //echo $html; exit; 

     return $html;
}
  /********** send request approval end ***********/
    
     /********** send exception ack mail to requster start *********/
   public function sendexcmailackapprvl($subject,$emaildata)
   {
       
       $transaction = strip_tags($emaildata['type_trnscn']);
   //echo "<pre>";print_r($userids);exit;
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="htth3://www.w3.org/1999/xhtml">

<head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
        <style>
        p{color: black;}
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        .button2 {background-color: #008CBA;} /* Blue */
        .button3 {background-color: #f44336;} /* Red */ 
        .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
        .button5 {background-color: #555555;} /* Black */
        </style>
</head>

<body style="font-family: Arial;
    width: 100%;
    background-color: #f2f2f2;
    padding:30px;
    max-width: 600px;
    margin: 0 auto;;

  ">
    <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
        <div class="main_container" style="max-width:600px; margin:0px;">
            <div class="header" style="margin-bottom:50px;">
                <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                    <div style="    text-shadow: 1px 0px 2px #626262;
    color: #626262;">Request Approval</div>
                </div>
                <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
    color: #626262;

    text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                 <div style="clear:both;"></div>
            </div>
        <div style="    background-color: #f2f2f2;
    padding: 18px;">
            <div class="main">
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Company Name : '.$emaildata['company_name'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Type of Transaction : '.$transaction.',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Security Type :'.$emaildata['securty_type'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                No Of Securities : '.$emaildata['noofshres'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
            </div>
                      
            </div>
        </div>
    </div>
        
    </div>
</body>
</html>';

//echo $html; exit; 

 return $html;
}
  /********** send exception ack mail to requster end ***********/
    
     /********** send exception ack mail to requster start *********/
   public function sendmailaftrfinlsub($subject,$emaildata)
   {
       
       $transaction = strip_tags($emaildata['transaction']);
   //echo "<pre>";print_r($userids);exit;
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="htth3://www.w3.org/1999/xhtml">

<head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
        <style>
        p{color: black;}
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        .button2 {background-color: #008CBA;} /* Blue */
        .button3 {background-color: #f44336;} /* Red */ 
        .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
        .button5 {background-color: #555555;} /* Black */
        </style>
</head>

<body style="font-family: Arial;
    width: 100%;
    background-color: #f2f2f2;
    padding:30px;
    max-width: 600px;
    margin: 0 auto;;

  ">
    <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
        <div class="main_container" style="max-width:600px; margin:0px;">
            <div class="header" style="margin-bottom:50px;">
                <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                    <div style="    text-shadow: 1px 0px 2px #626262;
    color: #626262;">Final Submit Request</div>
                </div>
                <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
    color: #626262;

    text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                 <div style="clear:both;"></div>
            </div>
        <div style="    background-color: #f2f2f2;
    padding: 18px;">
            <div class="main">
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Subject : '.$subject.',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Requester Name : '.$emaildata['requester_name'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Company Name : '.$emaildata['company_name'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Type of Transaction : '.$transaction.',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Security Type :'.$emaildata['securty_type'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                No Of Securities : '.$emaildata['noofshres'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Date Of Transaction : '.$emaildata['tradedate'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                
            </div>
                  
            </div>
        </div>
    </div>
        
    </div>
</body>
</html>';

//echo $html; exit; 

 return $html;
}
  /********** send exception ack mail to requster end ***********/
    
      /********** send mail for trade request start *********/
   public function sendmailtrdepln($subject,$emaildata)
   {
       
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="htth3://www.w3.org/1999/xhtml">

<head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
        <style>
        p{color: black;}
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        .button2 {background-color: #008CBA;} /* Blue */
        .button3 {background-color: #f44336;} /* Red */ 
        .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
        .button5 {background-color: #555555;} /* Black */
        </style>
</head>

<body style="font-family: Arial;
    width: 100%;
    background-color: #f2f2f2;
    padding:30px;
    max-width: 600px;
    margin: 0 auto;;

  ">
    <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
        <div class="main_container" style="max-width:600px; margin:0px;">
            <div class="header" style="margin-bottom:50px;">
                <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                    <div style="    text-shadow: 1px 0px 2px #626262;
    color: #626262;">Trading Plan Request</div>
                </div>
                <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
    color: #626262;

    text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                 <div style="clear:both;"></div>
            </div>
        <div style="    background-color: #f2f2f2;
    padding: 18px;">
            <div class="main">
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Subject : '.$subject.',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Requester Name : '.$emaildata['requester_name'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Company Name : '.$emaildata['comp_name'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Date From : '.$emaildata['fromdate'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Date To : '.$emaildata['todate'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                
            </div>
                 
            </div>
        </div>
    </div>
        
    </div>
</body>
</html>';

//echo $html; exit; 

 return $html;
}
  /********** send mail for trade request end ***********/
    
/********** send ack mail for trade request start *********/
   public function sendtorqstrofack($subject,$emaildata)
   {
       
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="htth3://www.w3.org/1999/xhtml">

<head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
        <style>
        p{color: black;}
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        .button2 {background-color: #008CBA;} /* Blue */
        .button3 {background-color: #f44336;} /* Red */ 
        .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
        .button5 {background-color: #555555;} /* Black */
        </style>
</head>

<body style="font-family: Arial;
    width: 100%;
    background-color: #f2f2f2;
    padding:30px;
    max-width: 600px;
    margin: 0 auto;;

  ">
    <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
        <div class="main_container" style="max-width:600px; margin:0px;">
            <div class="header" style="margin-bottom:50px;">
                <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                    <div style="    text-shadow: 1px 0px 2px #626262;
    color: #626262;">Trading Plan Request</div>
                </div>
                <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
    color: #626262;

    text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                 <div style="clear:both;"></div>
            </div>
        <div style="    background-color: #f2f2f2;
    padding: 18px;">
            <div class="main">
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Subject : '.$subject.',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Company Name : '.$emaildata['comp_name'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Date From : '.$emaildata['fromdate'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Date To : '.$emaildata['todate'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                
            </div>
            </div>
        </div>
    </div>
        
    </div>
</body>
</html>';

//echo $html; exit; 

 return $html;
}
  /********** send ack mail for trade request end ***********/
    
    public function mailsenttousr($name)
    {
            $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="htth3://www.w3.org/1999/xhtml">
    <head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
    </head>
    <body style="margin: 0px;padding: 0px;font-family: Arial;width: 100%;max-width:600px;margin: 0 auto;border-top: 5px solid #373F89;background:#fff;">
    <div class="container" style="width:100%; max-width:600px; margin: 0 auto; border-top: 5px solid #373F89;    box-shadow: 0 0 20px rgba(0,0,0,.3);">
    <div class="main_container" style="max-width:550px; margin:0 20px;">
    <div class="header" style="margin-bottom:50px;">
    <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
    <div style="text-shadow: 1px 0px 2px #626262;color: #626262;">Volody</div>
    </div>
    <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;color: #626262;text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
    <div style="clear:both;"></div></div>

    <div class="main">
    <div class="circlech" style="background: -webkit-linear-gradient(top,rgba(255,255,255,.8) 0,rgba(255,255,255,.6) 20%,rgba(255,255,255,.8));background: linear-gradient(to bottom,rgba(255,255,255,.8) 0,rgba(255,255,255,.6) 20%,rgba(255,255,255,.8));border-radius: 50%;width: 250px;height: 100px;line-height: normal;text-align: center;max-width: 100%;    position: relative;top: 0px;left: 0px;right:0px; z-index: 1;margin:0px auto;">
    <div style="padding: 0px 0px;"><div  style="font-size: 25px;color: #215c86;">Dear '.$name.',</div>
    <div style="color: #67b9c7;font-weight: bold;">Please Fill Up Your Personal Details.</div>
    </div>
    </div>

    </div>
    </div>
    <div class="footer" style="width:100%; max-width:600px; margin: 0 auto; position:relative;padding-bottom: 10px;">

    <div class="mnfootetext" style="position: relative;z-index: 1;margin: 0 20px;margin-top: 50px;background: rgba(255,255,255,1);box-shadow: 0 0 20px rgba(0,0,0,.3);">

    <div style="clear:both;"></div>
    <div class="footer_text_down" style="text; margin-top: 10px;">
    <div style="padding: 8px 0px; color:#626262; font-size:12px; text-align:center;">&copy; Volody. All rights reserved </div>
    </div>
    </div>
    </div>
    </div>
    </body>
    </html>';
            return $html;
    }
    
    public function hldngmailsenttousr($name)
    {
            $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="htth3://www.w3.org/1999/xhtml">
    <head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
    </head>
    <body style="margin: 0px;padding: 0px;font-family: Arial;width: 100%;max-width:600px;margin: 0 auto;border-top: 5px solid #373F89;background:#fff;">
    <div class="container" style="width:100%; max-width:600px; margin: 0 auto; border-top: 5px solid #373F89;    box-shadow: 0 0 20px rgba(0,0,0,.3);">
    <div class="main_container" style="max-width:550px; margin:0 20px;">
    <div class="header" style="margin-bottom:50px;">
    <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
    <div style="text-shadow: 1px 0px 2px #626262;color: #626262;">Volody</div>
    </div>
    <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;color: #626262;text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
    <div style="clear:both;"></div></div>

    <div class="main">
    <div class="circlech" style="background: -webkit-linear-gradient(top,rgba(255,255,255,.8) 0,rgba(255,255,255,.6) 20%,rgba(255,255,255,.8));background: linear-gradient(to bottom,rgba(255,255,255,.8) 0,rgba(255,255,255,.6) 20%,rgba(255,255,255,.8));border-radius: 50%;width: 250px;height: 100px;line-height: normal;text-align: center;max-width: 100%;    position: relative;top: 0px;left: 0px;right:0px; z-index: 1;margin:0px auto;">
    <div style="padding: 0px 0px;"><div  style="font-size: 25px;color: #215c86;">Dear '.$name.',</div>
    <div style="color: #67b9c7;font-weight: bold;">Please Upload Your Holding Statement.</div>
    </div>
    </div>

    </div>
    </div>
    <div class="footer" style="width:100%; max-width:600px; margin: 0 auto; position:relative;padding-bottom: 10px;">

    <div class="mnfootetext" style="position: relative;z-index: 1;margin: 0 20px;margin-top: 50px;background: rgba(255,255,255,1);box-shadow: 0 0 20px rgba(0,0,0,.3);">

    <div style="clear:both;"></div>
    <div class="footer_text_down" style="text; margin-top: 10px;">
    <div style="padding: 8px 0px; color:#626262; font-size:12px; text-align:center;">&copy; Volody. All rights reserved </div>
    </div>
    </div>
    </div>
    </div>
    </body>
    </html>';
            return $html;
    }
    
    
    public function mailtonotdonetrdrqst($data)
    {
        $transaction = strip_tags($data['transaction']);
      $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="htth3://www.w3.org/1999/xhtml">

    <head>
        <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <title>Phoenix Peth</title>
            <style>
            p{color: black;}
            .button {
                background-color: #4CAF50; /* Green */
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }

            .button2 {background-color: #008CBA;} /* Blue */
            .button3 {background-color: #f44336;} /* Red */ 
            .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
            .button5 {background-color: #555555;} /* Black */
            </style>
    </head>

    <body style="font-family: Arial;
        width: 100%;
        background-color: #f2f2f2;
        padding:30px;
        max-width: 600px;
        margin: 0 auto;;

      ">
        <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
            <div class="main_container" style="max-width:600px; margin:0px;">
                <div class="header" style="margin-bottom:50px;">
                    <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                        <div style="    text-shadow: 1px 0px 2px #626262;
        color: #626262;"></div>
                    </div>
                    <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
        color: #626262;

        text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                     <div style="clear:both;"></div>
                </div>
            <div style="    background-color: #f2f2f2;
        padding: 18px;">
                <div class="main">
                    <p style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">Dear User,</p>
                    <p style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">You have not updated status of pre-clearance taken by you. Details of request are as -</p>
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                    Company Name : '.$data['company_name'].',</div>
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                    Type Of Transaction : '.$transaction.'</div>
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                    Security Type : '.$data['security_type'].'</div>
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                    No. Of Securities  : '.$data['no_of_shares'].'</div>
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">

                </div>
                </div>
            </div>
        </div>

        </div>
    </body>
    </html>';
    return $html;
    //echo $html; exit; 
    }
    
    /********** send mail for form b start *********/
   public function mailformbapprvlrqst($subject,$emaildata)
   {
       
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="htth3://www.w3.org/1999/xhtml">

<head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
        <style>
        p{color: black;}
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        .button2 {background-color: #008CBA;} /* Blue */
        .button3 {background-color: #f44336;} /* Red */ 
        .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
        .button5 {background-color: #555555;} /* Black */
        </style>
</head>

<body style="font-family: Arial;
    width: 100%;
    background-color: #f2f2f2;
    padding:30px;
    max-width: 600px;
    margin: 0 auto;;

  ">
    <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
        <div class="main_container" style="max-width:600px; margin:0px;">
            <div class="header" style="margin-bottom:50px;">
                <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                    <div style="    text-shadow: 1px 0px 2px #626262;
    color: #626262;">Form B Request</div>
                </div>
                <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
    color: #626262;

    text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                 <div style="clear:both;"></div>
            </div>
        <div style="    background-color: #f2f2f2;
    padding: 18px;">
            <div class="main">
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Name : '.$emaildata['fullname'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                PAN : '.$emaildata['pan'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Designation : '.$emaildata['designation'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                
            </div>
            </div>
        </div>
    </div>
        
    </div>
</body>
</html>';

//echo $html; exit; 

 return $html;
}
    
   public function mailformbackrqst($subject,$emaildata)
   {
       
   //echo "<pre>";print_r($userids);exit;
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="htth3://www.w3.org/1999/xhtml">

<head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
        <style>
        p{color: black;}
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        .button2 {background-color: #008CBA;} /* Blue */
        .button3 {background-color: #f44336;} /* Red */ 
        .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
        .button5 {background-color: #555555;} /* Black */
        </style>
</head>

<body style="font-family: Arial;
    width: 100%;
    background-color: #f2f2f2;
    padding:30px;
    max-width: 600px;
    margin: 0 auto;;

  ">
    <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
        <div class="main_container" style="max-width:600px; margin:0px;">
            <div class="header" style="margin-bottom:50px;">
                <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                    <div style="    text-shadow: 1px 0px 2px #626262;
    color: #626262;">Form B</div>
                </div>
                <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
    color: #626262;

    text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                 <div style="clear:both;"></div>
            </div>
        <div style="    background-color: #f2f2f2;
    padding: 18px;">
            <div class="main">
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Date of appointment of Director /KMP : '.$emaildata['date'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Category : '.$emaildata['category'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
            </div>
                                                
            </div>
        </div>
    </div>
        
    </div>
</body>
</html>';

//echo $html; exit; 

 return $html;
}
  /********** send mail for form b start ***********/
   

  /********** send mail for form c start *********/
   public function mailformcapprvlrqst($subject,$emaildata)
   {
       
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="htth3://www.w3.org/1999/xhtml">

<head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
        <style>
        p{color: black;}
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        .button2 {background-color: #008CBA;} /* Blue */
        .button3 {background-color: #f44336;} /* Red */ 
        .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
        .button5 {background-color: #555555;} /* Black */
        </style>
</head>

<body style="font-family: Arial;
    width: 100%;
    background-color: #f2f2f2;
    padding:30px;
    max-width: 600px;
    margin: 0 auto;;

  ">
    <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
        <div class="main_container" style="max-width:600px; margin:0px;">
            <div class="header" style="margin-bottom:50px;">
                <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                    <div style="    text-shadow: 1px 0px 2px #626262;
    color: #626262;">Form C Request</div>
                </div>
                <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
    color: #626262;

    text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                 <div style="clear:both;"></div>
            </div>
        <div style="    background-color: #f2f2f2;
    padding: 18px;">
            <div class="main">
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Name : '.$emaildata['fullname'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                PAN : '.$emaildata['pan'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Designation : '.$emaildata['designation'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                
            </div>
            </div>
        </div>
    </div>
        
    </div>
</body>
</html>';

//echo $html; exit; 

 return $html;
}
    
    public function mailformcackrqst($subject,$emaildata)
   {
       
   //echo "<pre>";print_r($userids);exit;
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="htth3://www.w3.org/1999/xhtml">

<head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
        <style>
        p{color: black;}
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        .button2 {background-color: #008CBA;} /* Blue */
        .button3 {background-color: #f44336;} /* Red */ 
        .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
        .button5 {background-color: #555555;} /* Black */
        </style>
</head>

<body style="font-family: Arial;
    width: 100%;
    background-color: #f2f2f2;
    padding:30px;
    max-width: 600px;
    margin: 0 auto;;

  ">
    <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
        <div class="main_container" style="max-width:600px; margin:0px;">
            <div class="header" style="margin-bottom:50px;">
                <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                    <div style="    text-shadow: 1px 0px 2px #626262;
    color: #626262;">Form C</div>
                </div>
                <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
    color: #626262;

    text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                 <div style="clear:both;"></div>
            </div>
        <div style="    background-color: #f2f2f2;
    padding: 18px;">
            <div class="main">
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                From Date : '.$emaildata['fromdate'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                 To Date : '.$emaildata['todate'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Category : '.$emaildata['category'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
            </div>
                                                
            </div>
        </div>
    </div>
        
    </div>
</body>
</html>';

//echo $html; exit; 

 return $html;
}
  /********** send mail for form c start ***********/
    
    /********** send mail for form d start *********/
   public function mailformdapprvlrqst($subject,$emaildata)
   {
       
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="htth3://www.w3.org/1999/xhtml">

<head>
    <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Phoenix Peth</title>
        <style>
        p{color: black;}
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        .button2 {background-color: #008CBA;} /* Blue */
        .button3 {background-color: #f44336;} /* Red */ 
        .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
        .button5 {background-color: #555555;} /* Black */
        </style>
</head>

<body style="font-family: Arial;
    width: 100%;
    background-color: #f2f2f2;
    padding:30px;
    max-width: 600px;
    margin: 0 auto;;

  ">
    <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
        <div class="main_container" style="max-width:600px; margin:0px;">
            <div class="header" style="margin-bottom:50px;">
                <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                    <div style="    text-shadow: 1px 0px 2px #626262;
    color: #626262;">Form D Request</div>
                </div>
                <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
    color: #626262;

    text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
                 <div style="clear:both;"></div>
            </div>
        <div style="    background-color: #f2f2f2;
    padding: 18px;">
            <div class="main">
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Name : '.$emaildata['fullname'].',</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                PAN : '.$emaildata['pan'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                Designation : '.$emaildata['designation'].'</div>
                <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
                
            </div>
            </div>
        </div>
    </div>
        
    </div>
</body>
</html>';

//echo $html; exit; 

 return $html;
}
    
    public function mailformdackrqst($subject,$emaildata)
   {

          //echo "<pre>";print_r($userids);exit;
          $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="htth3://www.w3.org/1999/xhtml">

          <head>
          <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
          <title>Phoenix Peth</title>
          <style>
          p{color: black;}
          .button {
          background-color: #4CAF50; /* Green */
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          }

          .button2 {background-color: #008CBA;} /* Blue */
          .button3 {background-color: #f44336;} /* Red */ 
          .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
          .button5 {background-color: #555555;} /* Black */
          </style>
          </head>

          <body style="font-family: Arial;
          width: 100%;
          background-color: #f2f2f2;
          padding:30px;
          max-width: 600px;
          margin: 0 auto;;

          ">
          <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
          <div class="main_container" style="max-width:600px; margin:0px;">
          <div class="header" style="margin-bottom:50px;">
          <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
          <div style="    text-shadow: 1px 0px 2px #626262;
          color: #626262;">Form D</div>
          </div>
          <div class="head_text" style="padding: 10px 20px 10px 20px;text-align: center;border-bottom: 2px dotted #ccc;font-size: 11px;
          color: #626262;

          text-shadow: 1px 1px 10px #fff;"> If opportunity doesnt Knock break the door. </div>
          <div style="clear:both;"></div>
          </div>
          <div style="    background-color: #f2f2f2;
          padding: 18px;">
          <div class="main">
          <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
          From Date : '.$emaildata['fromdate'].',</div>
          <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
          To Date : '.$emaildata['todate'].',</div>
          <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
          Connection with company : '.$emaildata['connection'].'</div>
          <div style="font-size: 14px;margin-bottom: 15px;color: #626262;letter-spacing: .7px; text-transform: capitalize;">
          </div>
                                    
          </div>
          </div>
          </div>

          </div>
          </body>
          </html>';

//echo $html; exit; 

 return $html;
}



public function sendmailforpersinfo($subject,$fullname){

  
          // $server_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
          //             //echo '<pre>'; print_r($server_link); exit;
          //             $baseuri = $this->url->getBaseUri();
          //             $baseurl = $server_link.$baseuri;
          $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="htth3://www.w3.org/1999/xhtml">
          <head>
          <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
          <title>Phoenix Peth</title>
          </head>
          <body style="margin: 0px;padding: 0px;font-family: Arial;width: 100%;max-width:600px;margin: 0 auto;border-top: 5px solid #373F89;background:#fff;">
          <h3>you have recieved a new request from  '.$fullname.'</h3>

          <h4> for approvel of personal information  please login into the software and approve it</h4>


          </body>                                                                                        
          </html>';
          return $html;


 }

  /********** send mail for form d start ***********/


  //----------------------------------------------AUTO MAIL TO USER-----------------------------//



    public function automailtouser($myarr)
     {

          // print_r($myarr);exit;
          $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="htth3://www.w3.org/1999/xhtml">
          <head>
          <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
          <title>Phoenix Peth</title>
          </head>
          <body style="margin: 0px;padding: 0px;font-family: Arial;width: 100%;max-width:600px;margin: 0 auto;border-top: 5px solid #373F89;background:#fff;">
          <h1>You Have Recieved Reminder For Trading</h1>
          <h3>Company:'.$myarr['mycompany'].'</h3>
          <h3>No Of Shares:'.$myarr['no_of_shares'].'</h3>
          <h3>Approved Date:'.$myarr['approved_date'].'</h3>
          <h3>Trading Date:'.$myarr['trading_date'].'</h3>
          <h3>Type Of Request:'.$myarr['request_type'].'</h3>
          </body>
          </html>';
      return $html;
     }   
    

     public function automailtoapprover($myarr)
     {

          // print_r($myarr);exit;
          $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="htth3://www.w3.org/1999/xhtml">
          <head>
          <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
          <title>Phoenix Peth</title>
          </head>
          <body style="margin: 0px;padding: 0px;font-family: Arial;width: 100%;max-width:600px;margin: 0 auto;border-top: 5px solid #373F89;background:#fff;">
          <h1>You Have Recieved Reminder For Pending Trading Request</h1>
          <h3>Requester Name:'.$myarr['name_of_requester'].'
          <h3>Company:'.$myarr['mycompany'].'</h3>
          <h3>No Of Shares:'.$myarr['no_of_shares'].'</h3>
          <h3>Approved Date:'.$myarr['approved_date'].'</h3>
          <h3>Trading Date:'.$myarr['trading_date'].'</h3>
          <h3>Type Of Request:'.$myarr['request_type'].'</h3>
          </body>
          </html>';

          // print_r($html);exit;
      return $html;
     }   


    public function initialdeclaration($getname)
    {
        // print_r($getname);exit;
        $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="htth3://www.w3.org/1999/xhtml">
        <head>
        <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <title>Phoenix Peth</title>
        </head>
        <body>
        <p style="text-align:left;">Dear sir/mam,
        </p>
        <p style="text-align:left;">'.$getname.' Sent Initial Declaration.</p>
        <p style="text-align:left;">Thank You.</p>

        </body>
        </html>';


        return $html;
    }
    
public function mailofupsitradingwindow($username,$upsitype,$enddate,$addedby,$pstartdate,$today)
  {   
         $unixTimestamp = strtotime($today);
        $dayOfWeek = date("l", $unixTimestamp);
        $unixTimestamp1 = strtotime($enddate);
        $dayOfWeek1 = date("l", $unixTimestamp1);
         $unixTimestamp2 = strtotime($pstartdate);
        $dayOfWeek2 = date("l", $unixTimestamp2);

      $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="htth3://www.w3.org/1999/xhtml">

      <head>
        <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <title>Phoenix Peth</title>
            <style>
            .button {
                background-color: #4CAF50; /* Green */
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }

            .button2 {background-color: #008CBA;} /* Blue */
            .button3 {background-color: #f44336;} /* Red */ 
            .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
            .button5 {background-color: #555555;} /* Black */
            </style>
    </head>

    <body style="font-family: Arial;
        width: 100%;
        background-color: #f2f2f2;
        padding:30px;
        max-width: 600px;
        margin: 0 auto;;

      ">
        <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
            <div class="main_container" style="max-width:600px; margin:0px;">
                <div class="header" style="margin-bottom:50px;">
                    <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                        <div style="    text-shadow: 1px 0px 2px #626262;
        color: #626262;">Trading Window Closure</div>
                    </div>
                     <div style="clear:both;"></div>
                </div>
            <div style="    background-color: #f2f2f2;
        padding: 18px;">
        <p>Dear All</p>
        <p>A meeting of the Board of Directors of Dr. Reddys Laboratories Limited (the Company) is scheduled to be held on (day), (Date) to consider the Unaudited Financial Results of the Company for the quarter and nine months ended December 31, 2019.
        </p>
        <p>Under the Securities and Exchange Board of India (Prohibition of Insider Trading) Regulations 2015, (Insider Trading Regulations) buying, selling or dealing in the securities of the company by its directors/employees on the knowledge of any inside, unpublished price-sensitive information is prohibited and doing so is an offense. The Directors and employees of the Company and their immediate relatives are not permitted to trade in the Company’s shares/ADRs during the period, as may be notified in this behalf and/or till such price-sensitive information is disseminated to the public at large.
          </p>
        <p>Under the revised Insider Trading Regulations and Company’s revised Code of Conduct to regulate, monitor and report trading by designated persons (the Code), the trading restriction period can be made applicable from the end of every quarter till 48 hours after the declaration of financial results or such other period as may be notified in this behalf. Accordingly, it is hereby informed that the Trading Window for buying, selling or dealing in the securities of the Company by the designated persons (including their immediate relatives) will be closed from (day), (date) to  (day), (date) (both days inclusive).
         </p>
         <p>
         Any contravention of the above would attract penalty as mentioned under Clause 13 of the Code and/or by SEBI. Hence, please refrain from buying, selling or dealing in the shares/ADRs of the Company during the above mentioned period. You are also requested not to take position in any derivatives in the securities of the Company.</p>
         <p>Further, exercise of stock options shall not be allowed during the above period.</p>

        
            </div>
        </div>

        </div>
    </body>
    </html>';

    //echo $html; exit; 

     return $html;
}

  public function Type1content($email,$todaydate,$title,$dt_added,$owner,$dpnames,$greeting)
  {   
       
            $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="htth3://www.w3.org/1999/xhtml">

      <head>
        <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <title>Phoenix Peth</title>
            <style>
            .button {
                background-color: #4CAF50; /* Green */
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }

            .button2 {background-color: #008CBA;} /* Blue */
            .button3 {background-color: #f44336;} /* Red */ 
            .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
            .button5 {background-color: #555555;} /* Black */
            </style>
    </head>

    <body style="font-family: Arial;
        width: 100%;
        background-color: #f2f2f2;
        padding:30px;
        max-width: 600px;
        margin: 0 auto;;

      ">
        <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
            <div class="main_container" style="max-width:600px; margin:0px;">
                <div class="header" style="margin-bottom:50px;">
                    <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                        <div style="    text-shadow: 1px 0px 2px #626262;
        color: #626262;">UPSI Updated</div>
                    </div>
                     <div style="clear:both;"></div>
                </div>
            <div style="    background-color: #f2f2f2;
        padding: 18px;">
        <p>Dear '.$greeting.', 
        </p>
        <p>This is to inform you that '.$dpnames.' has been added to the UPSI titled '.$title.' on '.$todaydate.'. This UPSI was created by '.$owner.' on '.$dt_added.'.
         </p>
        
               
            </div>
        </div>

        </div>
    </body>
    </html>';

    //echo $html; exit; 

     return $html;
} 

public function mailofupdatedp($tomail,$tousername,$pstartdate,$enddate,$today,$fromusername,$upsitype)
  {   
       //echo "<pre>";print_r($userids);exit;
            $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="htth3://www.w3.org/1999/xhtml">

      <head>
        <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <title>Phoenix Peth</title>
            <style>
            .button {
                background-color: #4CAF50; /* Green */
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }

            .button2 {background-color: #008CBA;} /* Blue */
            .button3 {background-color: #f44336;} /* Red */ 
            .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
            .button5 {background-color: #555555;} /* Black */
            </style>
    </head>

    <body style="font-family: Arial;
        width: 100%;
        background-color: #f2f2f2;
        padding:30px;
        max-width: 600px;
        margin: 0 auto;;

      ">
        <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
            <div class="main_container" style="max-width:600px; margin:0px;">
                <div class="header" style="margin-bottom:50px;">
                    <div class="header_img" style="width:300px;float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                        <div style="    text-shadow: 1px 0px 2px #626262;
        color: #626262;">Trading Window Closure</div>
                    </div>
                     <div style="clear:both;"></div>
                </div>
            <div style="    background-color: #f2f2f2;
        padding: 18px;">
        <p>Dear '.$tousername.'</p>
        <p>You have been added as Project Owner / Project member in connection with Project as mentioned herein, which is Unpublished Price Sensitive Information (UPSI).</p>
        <p>As part of the Project, you would be deemed to be in possession / recipient <b>of Unpublished Price Sensitive Information (UPSI) </b>in relation to the affairs concerning the Company. Please note that all UPSI in your possession or that may be shared with you over the course of time, are private and confidential and intended to be used STRICTLY for legitimate purposes only in pursuance to the applicable provisions of the SEBI (Prohibition of Insider Trading) Regulations, 2015 (including any amendment(s) or re-enactment(s) thereof) (SEBI PIT Regulations).</p>
        <p>The holder/recipient of UPSI (including its Representative) is expected to maintain highest level of confidentiality and shall abide by and undertake to comply with the applicable provisions of the said SEBI PIT Regulations in dealings concerning the listed securities of the Company.</p>
        
                <div class="main">
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;font-weight: 700;letter-spacing: .7px;">
                    UPSI Name : '.$upsitype.',</div>
                    
                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;font-weight: 700;letter-spacing: .7px;">
                    Name added by : '.$fromusername.',</div>
                       
                       <div style="font-size: 14px;margin-bottom: 15px;color: #626262;font-weight: 700;letter-spacing: .7px;">
                       Project Start Date : '.$pstartdate.',</div>
                       
                       <div style="font-size: 14px;margin-bottom: 15px;color: #626262;font-weight: 700;letter-spacing: .7px;">
                       Date of closure of Trading Window : '.$enddate.',</div> 

                    <div style="font-size: 14px;margin-bottom: 15px;color: #626262;font-weight: 700;letter-spacing: .7px;">        Project End Date : to be notified </div> 
                     <p>Please note that in view of the holding of aforesaid UPSI, the trading window to deal in the listed securities of the Company, has been closed for you and your immediate relatives with immediate effect and shall continue to be so till 48 hours after the said UPSI is made available to public or such activity or project is abandoned.</p>
                     <p>Please consult the Corporate Governance Dept. for any query or clarification. </p>
                     <div><br></div>
                     <p>Regards,</p>
                     <p>Corporate Governance Team</p>
                     
                </div>
            </div>
        </div>

        </div>
    </body>
    </html>';

    //echo $html; exit; 

     return $html;
}

    
public function internalmember($uniquemail,$sharingdate,$upsiname,$toname)
  {   
       $title ="You have been added to digital database of Dr. Reddy's Laboratories Ltd";
            $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="htth3://www.w3.org/1999/xhtml">

      <head>
        <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <title>Phoenix Peth</title>
            <style>
            .button {
                background-color: #4CAF50; /* Green */
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }

            ol,ul{ padding-left: 18px; text-align: justify;}
            ol>li{margin-bottom: 15px;}
            ol>li>ol>li{margin-bottom: 10px;}            
            ol>li>ol{margin-top: 10px;}            
            ol>li>ol>ul>li{margin-bottom:5px;}

            .button2 {background-color: #008CBA;} /* Blue */
            .button3 {background-color: #f44336;} /* Red */ 
            .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
            .button5 {background-color: #555555;} /* Black */
            </style>
    </head>

    <body style="font-family: Arial;width: 100%;background-color: #f2f2f2;padding:30px;max-width: 600px;margin: 0 auto;">
        <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
            <div class="main_container" style="max-width:600px; margin:0px;">
                <div class="header" style="margin-bottom:25px;">
                    <div class="header_img" style="/*width:300px;*/float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                        <div style="    text-shadow: 1px 0px 2px #626262;
        color: #626262;">'.$title.'.</div>
                    </div>
                     <div style="clear:both;"></div>
                </div>
            <div style="    background-color: #f2f2f2;
        padding: 18px;">
        <p>Dear '.$toname.'</p>
        <p>Please note that you have received information pertaining to '.$upsiname.' on '.$sharingdate.'. Please note that the information is Unpublished Price Sensitive Information (UPSI) as defined in SEBI (Prohibition of Insider Trading) Regulations, 2015, as amended from time to time (hereinafter referred to as “Insider Trading Regulations”).</p>
        
                <div class="main">
                    <div style="">Accordingly, you are requested to ensure the below:</div>

                    <ol type="a">
                      <li>Such UPSI should not be shared with any one and should be kept confidential until the same is made generally available / public by the Company.</li>

                      <li>Since this UPSI is being shared with you, you are deemed to be an insider as defined in Insider Trading Regulations. No insider or his/her immediate relative shall trade / deal in Company’s securities when in possession of UPSI pursuant to Insider Trading Regulations.</li>

                      <li>You are required to ensure compliance with the Insider Trading Regulations including duties, responsibilities and liabilities related to misuse or unwarranted use of such UPSI.</li>

                      <li>You are required to share with (Project Owner name) the following information of the entity / persons (internal/external) to whom such information is being further shared by you for Legitimate Purposes, performance of duties or discharge of his / her legal obligations, as defined in Insider Trading Regulations, after obtaining prior written / email permission from (Project owner). The (Project owner) is responsible to make entries in the structured digital database maintained by the Company for UPSI under Insider Trading Regulations. So whenever you share this UPSI:
                        <ol>
                          <li>Such person, entity with whom UPSI is being shared shall also be deemed to be an insider, for the purpose Insider Trading Regulations.</li>
                          <li>You are requested to share with us the below details of the person, entity with whom the UPSI is being shared:</li>
                          <ul type="circul">
                            <li>Full name</li>
                            <li>Email ids</li>
                            <li>Cell phone number</li>
                            <li>Permanent Account Number (PAN) or any other identifier authorized by law where PAN is not available.</li>
                          </ul>
                        </ol>
                      </li>

                      <li>The Company is expected to maintain a database of the UPSI provided to such persons, entity. The Company may disclose the said information a) as permitted or required by applicable laws or regulatory requirements. In such a case, we will endeavour to disclose only the requested information under the circumstances; b) as part of the Company’s reporting or disclosure obligations, if any.</li>
                    </ol>
                   
                    
                   
                     
                </div>
            </div>
        </div>

        </div>
    </body>
    </html>';

    //echo $html; exit; 

     return $html;
}

public function externalmember($uniquemail,$sharingdate,$upsiname,$toname)
  {   
       //echo "<pre>";print_r($userids);exit;
    $title ="You have been added to digital database of Dr. Reddy's Laboratories Ltd";
            $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="htth3://www.w3.org/1999/xhtml">

      <head>
        <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <title>Phoenix Peth</title>
            <style>
            .button {
                background-color: #4CAF50; /* Green */
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }

            ol,ul{ padding-left: 18px; text-align: justify;}
            ol>li{margin-bottom: 15px;}
            ol>li>ol>li{margin-bottom: 10px;}            
            ol>li>ol{margin-top: 10px;}            
            ol>li>ol>ul>li{margin-bottom:5px;}

            .button2 {background-color: #008CBA;} /* Blue */
            .button3 {background-color: #f44336;} /* Red */ 
            .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
            .button5 {background-color: #555555;} /* Black */
            </style>
    </head>

    <body style="font-family: Arial;width: 100%;background-color: #f2f2f2;padding:30px;max-width: 600px;margin: 0 auto;">
        <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
            <div class="main_container" style="max-width:600px; margin:0px;">
                <div class="header" style="margin-bottom:25px;">
                    <div class="header_img" style="/*width:300px;*/float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                        <div style="    text-shadow: 1px 0px 2px #626262;
        color: #626262;">'.$title.'.</div>
                    </div>
                     <div style="clear:both;"></div>
                </div>
            <div style="    background-color: #f2f2f2;
        padding: 18px;">
        <p>Dear '.$toname.'</p>
        <p>Please note that you have received information pertaining to '.$upsiname.' of Dr. Reddy’s Laboratories Limited on '.$sharingdate.'. Please note that the information is Unpublished Price Sensitive Information (UPSI) as defined in SEBI (Prohibition of Insider Trading) Regulations, 2015, as amended from time to time (hereinafter referred to as “Insider Trading Regulations”)..</p>
        
                <div class="main">
                    <div style="">Accordingly, you are requested to ensure the below:</div>

                    <ol type="a">
                      <li>In addition to the Confidentiality and Non-Disclosure agreements, such UPSI should not be shared with any one and should be kept confidential until the same is made generally available / public by the Company..</li>

                      <li>Since this UPSI is being shared with you, you are deemed to be an insider as defined in Insider Trading Regulations. No insider shall trade / deal in Company’s securities when in possession of UPSI pursuant to Insider Trading Regulations.</li>

                      <li>You are required to ensure compliance with the Insider Trading Regulations and Company’s Code of Conduct to Regulate, Monitor and Report Trading by Designated Persons, including duties, responsibilities and liabilities related to misuse or unwarranted use of such UPSI.</li>

                      <li>You are required to share with (Project Owner name) the following information regarding your entity / persons (internal/external) to whom such information is being further shared by you for Legitimate Purposes, performance of duties or discharge of his / her legal obligations, as defined in Insider Trading Regulations, after obtaining prior written / email permission from (Project owner). The (Project owner) is responsible to make entries in the structured digital database maintained by the Company for UPSI under Insider Trading Regulations. So whenever you share this UPSI:
                        <ol>
                          <li>Such person, entity with whom UPSI is being shared shall also be deemed to be an insider, for the purpose Insider Trading Regulations.</li>
                          <li>You are requested to share with us the below details of the person, entity with whom the UPSI is being shared:</li>
                          <ul type="circul">
                            <li>Full name</li>
                            <li>Email ids</li>
                            <li>Cell phone number</li>
                            <li>Permanent Account Number (PAN) or any other identifier authorized by law where PAN is not available.</li>
                          </ul>
                        </ol>
                      </li>

                      <li>At your end, kindly ensure that your entity maintains the details under the Schedule C of the Insider Trading Regulations and maintain a list of persons having access to UPSI along with their PANs or other unique identifier (incase PAN is not available) in accordance with Regulation 9A(2)(d) of the said Regulations.</li>
                      
                       <li>The Company is expected to maintain a database of the UPSI provided to such entities. The Company may disclose the said information a) as permitted or required by applicable laws or regulatory requirements. In such a case, we will endeavour to disclose only the requested information under the circumstances; b) as part of the Company’s reporting or disclosure obligations, if any.</li>
                    </ol>
                   
                    
                    
                     
                </div>
            </div>
        </div>

        </div>
    </body>
    </html>';

    //echo $html; exit; 

     return $html;
}

   
public function mailofpersonalinfo($data)
  {   
     $server_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";            
                $baseuri = $this->url->getBaseUri();
                $baseurl = $server_link.$baseuri;
  $html='<!DOCTYPE html>
   <html>
  <head>
  </head>

 <body style="margin:0; background: #e5e5e5;">
        <table cellpadding="0" cellspacing="0" width="100%" border="0">
    <tr>
     <td>
     <table cellpadding="0" cellspacing="0" border="0" style="font-family:"Roboto,Arial, Helvetica, sans-serif; max-width:680px; font-size:12px; color:#333; background: #fff; align="center">

       <tr>
            <td style="padding:20px 0 20px 0px; background: #f8f8f8;width:50%;" align="center">
               <a href="https://www.volody.com/" target="_blank" style="border:0; outline:0;">  
                <img src="https://www.volody.com/mainadmin/img/emailer/logo.png" border="0"/>
               </a>
            </td>

            <td align="center" style="background: #f8f8f8;width:50%;">
                <a href="https://www.facebook.com/VolodySoftware/" style="text-decoration: none; padding-right: 15px;">
                  <img src="https://www.volody.com/companysecretary/gstemailer/images/facebook.png" alt="" />
                </a>
                <a href="https://www.youtube.com/channel/UCV8kLW489Q-iw16n_nxAmAg" style="text-decoration: none;">
                  <img src="https://www.volody.com/companysecretary/gstemailer/images/youtube.png" alt="" />
                </a>
            </td>
       </tr>

     
      <tr>
         <td  colspan="2" style="padding-top: 20px;padding-left: 20px; background: #fff;">
          <p>Dear '.$data['fname'].',</p>
          <p>You have updated Personal Information section of ‘personal information’ under ‘My info’. This is for your information..</p>
       
         </td>
      </tr>

      <tr>
         <td align="center" colspan="2" style="padding-top: 20px; background: #fff;">
          <form target="_blank">
           

             <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;font-weight:600;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px"> Employee ID:</span>
                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600"> '.$data['ecode'].'</span>
              </div>
            </div>

            <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px;font-weight:600">Name:</span>

                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600"> '.$data['fname'].'</span>
              </div>
            </div>

           

            <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;font-weight:600;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px">Email ID :</span>
                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">'.$data['toemail'].'</span>
              </div>
            </div>

            <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px;font-weight:600">PAN :</span>
                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">'.$data['pan'].'</span>
              </div>
            </div>

            <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;font-weight:600;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px">Any other legal identifier:</span>
                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">'.$data['legal_idntfr'].'</span>
              </div>
            </div>

            <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;font-weight:600;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px">Other legal identification No:</span>
                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">'.$data['legal_idntfctn_no'].'</span>
              </div>
            </div>

            <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px;font-weight:600">Aadhaar:</span>
                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">'.$data['aadhar'].'</span>
              </div>
            </div>

            <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;font-weight:600;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px">Date of Birth:</span>
                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">'.$data['dob'].'</span>
              </div>
            </div>

            <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;font-weight:600;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px">Gender :</span>
                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">'.$data['sex'].'</span>
              </div>
            </div>

            <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px;font-weight:600">Educational Qualification:</span>
                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">'.$data['eduqulfcn'].'</span>
              </div>
            </div>

            <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;font-weight:600;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px">Institute:</span>
                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">'.$data['eduqulfcn'].'</span>
              </div>
            </div>

            <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;font-weight:600;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px">Password :</span>
                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">'.$data['institute'].'</span>
              </div>
            </div>

            <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px;font-weight:600">Address:</span>
                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">'.$data['address'].'</span>
              </div>
            </div>

            <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;font-weight:600;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px">Mobile No:</span>
                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">'.$data['mobno'].'</span>
              </div>
            </div>

             <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;font-weight:600;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px">Holding in Shares:</span>
                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">'.$data['shareholdng'].'</span>
              </div>
            </div>

             <div style="background:#f8f8f8;width:80%;border-radius:3px;margin:10px 0">
              <div style="border:0;outline:0;color:#333;background:0;width:100%;padding:8px 0;font-weight:600;display:flex">
                <span style="width:35%;text-align:center;color:#5d5d5d;font-size:14px">Holding in ADRs:</span>
                <span style="width:65%;float:right;text-align:left;color:#5d5d5d;font-size:12px;font-weight:600">'.$data['adrsholdng'].'</span>
              </div>
            </div>

          </form>
         </td>
      </tr>



     
      <tr>
          <td style="padding:0px 0 20px 0; background: #f7f7f7; padding: 10px;" colspan="2">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td align="center" colspan="2">
                <p style="font-weight:600; letter-spacing: 1px; color:#333; font-size:20px; font-family:\'Roboto\',Arial,Helvetica,sans-serif;">For Support</p>
              </td>
            </tr>

              <tr>
                  <td align="center" style="width:340px">
                  <img src="'.$baseurl.'/mainadminhtml/img/emailer/phone.png" style="display:block; border:0"/>
                  <p style="margin:5px 0 0; color:#333; font-family:\'Roboto\',Arial,Helvetica,sans-serif; font-size:15px;">+91 8080809301</p>
                  </td>


                  <td align="center" style="width:340px">
                    <img src="'.$baseurl.'/mainadminhtml/img/emailer/gmailicon.png" style="display:block; border:0"/>
                    <p style="margin:5px 0 0; font-family:\'Roboto\',Arial,Helvetica,sans-serif; font-size:15px;"><a href="mailto:care@pretr.com" style="color:#333; text-decoration:none; border:0; outline:0;"> connect@volody.in</a></p>
                  </td>
              </tr>

          </table>
          </td>
      </tr>

      <tr>
           <td align="center" colspan="2" style="max-width:100%; line-height:25px; background: #333;">
           <p style="margin:0px; padding:8px 0 8px 0;  color:#fff; font-size:12px; font-family:\'Roboto\',Arial,Helvetica,sans-serif;">© 2019-20 Volody Products Pvt Ltd. - volody.com </p>
            </td>
      </tr>

    </table>
         
    </td>
    </tr>


      </table>
  </body>

 </html>';

    //echo $html; exit; 

     return $html;
}

public function notifyupsi($addedby,$addedbyemail,$title,$desc,$todaydate,$dayOfWeek)
  {   
      // echo "<pre>";print_r($data);exit;
            $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="htth3://www.w3.org/1999/xhtml">

      <head>
        <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <title>Phoenix Peth</title>
            <style>
            .button {
                background-color: #4CAF50; /* Green */
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }

            ol,ul{ padding-left: 18px; text-align: justify;}
            ol>li{margin-bottom: 15px;}
            ol>li>ol>li{margin-bottom: 10px;}            
            ol>li>ol{margin-top: 10px;}            
            ol>li>ol>ul>li{margin-bottom:5px;}

            .button2 {background-color: #008CBA;} /* Blue */
            .button3 {background-color: #f44336;} /* Red */ 
            .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
            .button5 {background-color: #555555;} /* Black */
            </style>
    </head>

    <body style="font-family: Arial;width: 100%;background-color: #f2f2f2;padding:30px;max-width: 600px;margin: 0 auto;">
        <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
            <div class="main_container" style="max-width:600px; margin:0px;">
                <div class="header" style="margin-bottom:25px;">
                    <div class="header_img" style="/*width:300px;*/float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                        <div style="    text-shadow: 1px 0px 2px #626262;
        color: #626262;">New UPSI Created</div>
                    </div>
                     <div style="clear:both;"></div>
                </div>
            <div style="    background-color: #f2f2f2;
        padding: 18px;">
        <p>Dear '.$addedby.'</p>
        <p>You have created an entry in the UPSI module for '.$title.' on '.$dayOfWeek.', '.$todaydate.'. This is for your information. 
          </p>
        
            </div>
        </div>

        </div>
    </body>
    </html>';

    //echo $html; exit; 

     return $html;
}



public function notifysharing($name,$loggedemail,$upsiname,$todaydate,$dayOfWeek,$nameoflogged)
  {   
         //echo "<pre>";print_r($upsiname);exit;
            $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "htth3://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="htth3://www.w3.org/1999/xhtml">

      <head>
        <meta htth3-equiv="Content-Tyh3e" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <title>Phoenix Peth</title>
            <style>
            .button {
                background-color: #4CAF50; /* Green */
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }

            ol,ul{ padding-left: 18px; text-align: justify;}
            ol>li{margin-bottom: 15px;}
            ol>li>ol>li{margin-bottom: 10px;}            
            ol>li>ol{margin-top: 10px;}            
            ol>li>ol>ul>li{margin-bottom:5px;}

            .button2 {background-color: #008CBA;} /* Blue */
            .button3 {background-color: #f44336;} /* Red */ 
            .button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
            .button5 {background-color: #555555;} /* Black */
            </style>
    </head>

    <body style="font-family: Arial;width: 100%;background-color: #f2f2f2;padding:30px;max-width: 600px;margin: 0 auto;">
        <div class="container" style=" max-width:600px; margin: 0 auto; background-color: #fff;padding:25px;">
            <div class="main_container" style="max-width:600px; margin:0px;">
                <div class="header" style="margin-bottom:25px;">
                    <div class="header_img" style="/*width:300px;*/float:none;display: block;margin: 0px auto;text-align:center;margin-top: 10px;font-size:31px;color:#fff;font-weight:bold;">
                        <div style="    text-shadow: 1px 0px 2px #626262;
        color: #626262;">A new entry was added in UPSI</div>
                    </div>
                     <div style="clear:both;"></div>
                </div>
            <div style="    background-color: #f2f2f2;
        padding: 18px;">
        <p>Dear '.$nameoflogged.'</p>
        <p>You have created an entry for information sharing with '.$name.' for the UPSI pertaining to '.$upsiname.' on '.$dayOfWeek.' '.$todaydate.'. This is for your information. 
          </p> 
        
            </div>
        </div>

        </div>
    </body>
    </html>';

    //echo $html; exit; 

     return $html;
}
    
    public function Reqform2content($userdata,$data)
    {
        $todate = date('d-m-Y');
//        print_r($userdata);
//        print_r($data);exit;
        if($data['typeoftrans'] == 1 || $data['typeoftrans'] == 3 || $data['typeoftrans'] == 4)
        {
            $transtype = 'Purchase';
        }
        else if($data['typeoftrans'] == 2)
        {
            $transtype = 'Sell';
        }
       $html=' <div>
          <table style=" border-collapse: collapse; border: none;" border="0" cellpadding="0" cellspacing="0" width="100%">
           <tr>
              <td>Dr. Reddy’s Laboratories Limited</td>
              <td><img src="img/dr reddy logo BnW"></td>                        
            </tr>
          </table>

          <p style="text-align: center;"><b>
            Form II<br/>
            (Application for grant of relaxation of minimum holding period) <br/>
            Under Clause 9.1(a) of the Code</b>
          </p>

          <br/>

          <p style="text-align: left;">
            The Compliance Officer<br/>
            <b>Dr. Reddy’s Laboratories Limited</b><br/>
            Hyderabad
          </p>

          <br/>

          <p>Dears Sir,<br/><br/>
           In terms of Clause 9.1(a) of the Code, I would like to state that I intend to '.$transtype.' '.$data['noofshare'].' shares/ADRs/options of the Company because of following reason(s):-
          </p>

          <br/>

          <table width="100%" style="border-width: 2px; border-color: #000; border-top: solid; border-bottom: solid; ">
            <tr>
              <td style="padding: 10px;"></td>
            </tr>
          </table>

          <br/>

          <table style=" border-collapse: collapse; border: none;" border="0" cellpadding="0" cellspacing="0" width="100%">
           <tr>
              <td width="50%"><ol style="padding-left: 17px;"><li type="circle">Medical Expenses for self / family Members</li></ol></td>
              <td width="50%"><ol style="padding-left: 17px;"><li type="circle">Repayment of existing Loan</li></ol></td>                    
            </tr>
            <tr>
              <td width="50%"><ol style="padding-left: 17px;"><li type="circle">Education</li></ol></td>
              <td width="50%"><ol style="padding-left: 17px;"><li type="circle">Wedding /other family function</li></ol></td>                         
            </tr>
            <tr>
              <td width="50%"><ol style="padding-left: 17px;"><li type="circle">Any other reason (Please specify):</li></ol></td>                         
            </tr>
          </table>

          <br/>

          <table style=" border-collapse: collapse; border: none;" border="0" cellpadding="0" cellspacing="0" width="100%">
           <tr>
              <td width="50%">Date of last purchase / sale<br/>
                  (Immediately prior to the date of this application) <br/><br/> </td>
              <td width="50%">: '.$data['lasttransdate'].'</td>                    
            </tr>
            <tr>
              <td width="50%">No. of shares / ADRs purchase/sold  <br/>
                  (Immediately prior to the date of this application)<br/><br/> </td>
              <td width="50%">: '.$data['noofshareoftrans'].'</td>                         
            </tr>
            <tr>
              <td width="50%">No. of shares / ADRs held as on date</td>
              <td width="50%">: </td>                          
            </tr>
          </table>

          <br/>

          <p>You are requested to consider my application and grant the relaxation to enter into an opposite transaction within 6 months period basis the above reason(s) and undertaking given herein below:-. </p>

          <p><b>I hereby undertake and confirm that,</b></p>
          <ol style="padding-left: 17px;">
            <li>I do not have any access or have not received "Unpublished Price Sensitive Information" up to the time of signing this undertaking.</li>
            <li>In case I have access to or have received "Unpublished Price Sensitive Information" after the signing of the undertaking but before the execution of the transaction I will inform the Compliance Officer of the change in my position and that I or my Immediate Relative(s) would completely refrain from dealing in the Securities till the time such information becomes public.</li>
            <li>I have not contravened the Code (as amended from time to time) and any of the provisions of the Insider Trading Regulations (as applicable).</li>
          </ol>

          <br/>

          <p>I further confirm that the aforesaid facts are true and correct and I shall be fully responsible for any wrongful acts and/or misrepresentation done by me or my Immediate Relative(s) including such penalties as may be imposed by the Company/ SEBI.<br/><br/>
        Thanking you,<br/><br/>
        Yours faithfully,<br/><br/><br/>

        ---------------------<br/>
        Name: '.$userdata['fullname'].'<br/>
        Employee code: '.$userdata['employeecode'].'<br/>
        Designation: '.$userdata['designation'].'<br/>
        Date: '.$todate.'<br/>
        Place: '.$data['form2place'].'<br/>
        </p>
        </div>';
        return $html;
    }


public function formI($personalinfo,$itmemberinfo,$approxprice,$broker,$demataccount,$place,$datetrans,$transaction,$sharestrans,$nature,$noofshare,$date,$dp,$dpacc,$relativename,$datetrans,$transaction,$sharestrans)
  {   
         //echo "<pre>";print_r($datetrans);exit;
            $html='<div>
  <table style="  border: none;" border="0" cellpadding="0" cellspacing="0" width="100%">
   <tr>
      <td>Dr. Reddy’s Laboratories Limited</td>
      <td><img src="img/dr reddy logo BnW"></td>                        
    </tr>
  </table>

  <p style="text-align: center;"><b>
    Form I<br/>
    (Application for pre-clearance of trade)  <br/>
    Under Clause 8.3 of the Code</b>
  </p>

  <br/>

  <p style="text-align: left;">
    The Compliance Officer<br/>
    <b>Dr. Reddy’s Laboratories Limited</b><br/>
    Hyderabad
  </p>

  <br/>

  <p>Dears Sir,<br/><br/>
   I/we am/are desirous of dealing in the shares / ADRs of the Company.  In terms of the Company’s Code, I/we seek your approval for the trade as detailed below: 
  </p>

  <br/>

  <table width="100%" style="border-collapse: collapse;">
    <tr>
      <td style="border: 1px solid #000; " width="40%">Name of Designated Person</td>
      <td style="border: 1px solid #000; " colspan="3" width="60%">'.$itmemberinfo['fullname'].'</td>
    </tr>
     <tr>
      <td style="border: 1px solid #000; " width="40%">Employee Code</td>
      <td style="border: 1px solid #000; " colspan="3" width="60%">'.$itmemberinfo['employeecode'].'</td>
    </tr>
     <tr>
      <td style="border: 1px solid #000; " width="40%">Designation</td>
      <td style="border: 1px solid #000; " colspan="3" width="60%">'.$itmemberinfo['designation'].'</td>
    </tr>
     <tr>
      <td style="border: 1px solid #000; " width="40%">Name of the Immediate relative with relationship<br/>(if he/she intends to deal)</td>
      <td style="border: 1px solid #000; " colspan="3" width="60%">'.$relativename.'</td>
    </tr>
     <tr>
      <td style="border: 1px solid #000; " width="40%">No. of shares/ADRs held as on this date</td>
      <td style="border: 1px solid #000; " colspan="3" width="60%">'.$personalinfo['sharehldng'].','.$personalinfo['adrshldng'].'</td>
    </tr>
     <tr>
      <td style="border: 1px solid #000; " width="40%">Approx. price or range<br/> (shares/ADRs * market price)</td>
      <td style="border: 1px solid #000; " colspan="3" width="60%">'.$approxprice.'</td>
    </tr>
     <tr>
      <td style="border: 1px solid #000; " width="40%">Nature of deal – Purchase / Sale</td>
      <td style="border: 1px solid #000; " colspan="3" width="60%">'.$nature.'</td>
    </tr>
     <tr>
      <td style="border: 1px solid #000; " width="40%">No. of shares / ADRs intended to be dealt in within next 7 days</td>
      <td style="border: 1px solid #000; " colspan="3" width="60%">'.$noofshare.'</td>
    </tr>
     <tr>
      <td style="border: 1px solid #000; " width="40%">Broker through which dealing will take place</td>
      <td style="border: 1px solid #000; " colspan="3" width="60%">'.$broker.'</td>
    </tr>
     <tr>
      <td style="border: 1px solid #000; " width="40%">DP name with whom the demat account is maintained along with DP ID and Client ID / Folio no.</td>
      <td style="border: 1px solid #000; " colspan="3" width="60%">'.$dp.'  '.$dpacc.'</td>
    </tr>    
     <tr>
      <td style="border: 1px solid #000; " width="40%">Provide, details, of any transaction done in Company’s Security in the last Six months (Except exercise of stock options)</td>
      <td>
      <table style="width:100%">
     <tr>
    <th>Date</th>
    <th>Transaction</th>
    <th>No. of shares</th>
    </tr>';
  
  if(count($datetrans) != 0)
  {
  for($i= 0 ;$i<count($datetrans);$i++)
  {        
    '<tr>
    <td>'.$datetrans[$i].'</td>
    <td>'. $transaction[$i].'</td>
    <td>'.$sharestrans[$i].'</td>
    </tr>';
   }}

  '</table>
      </td>
    </tr>
  </table>

  <br/>

  <p>You are requested to consider my application and grant the relaxation to enter into an opposite transaction within 6 months period basis the above reason(s) and undertaking given herein below:-. </p>

  <p><b>I hereby undertake and confirm that,</b></p>
  <ol style="padding-left: 17px;">
    <li>I do not have any access or have not received "Unpublished Price Sensitive Information" up to the time of signing this undertaking</li>
    <li>In case I have access to or have received "Unpublished Price Sensitive Information" after the signing of the undertaking but before the execution of the transaction I shall inform the Compliance Officer of the change in my position and that I or my immediate relatives would completely refrain from dealing in the Securities till the time such information becomes public.</li>
    <li>I have not contravened the Code (as emended from time to time) and any of the provisions of the Insider Trading Regulations (as applicable).</li>
  </ol>

  <p>I further confirm that the aforesaid facts are true and correct and I shall be fully responsible for any wrongful acts and / or misrepresentation done by me or my immediate relatives including such penalties as may be imposed by the Company / SEBI<br/><br/>You are requested to provide your approval to the aforesaid transaction. <br/><br/>

  Thanking you,<br/><br/>
  Yours faithfully,<br/><br/><br/>
  
  _____________________<br/>
  Signature<br/><br/>
  Place '.$place.'<br/>
  Date:'.$date.'<br/>
  </p>

  <br/>

  <p><b>Note:</b><br/>
  <ol style="padding-left: 17px;">
    <li>This application has to be submitted through electronic system / mail and followed by a hard copy.</li>
    <li>Fresh application for pre-clearance shall be required if the trade is not executed within 7 days of approval.</li>
  </ol>
  </p>
  
  


</div>';

    //echo $html; exit; 

     return $html;
}






    
}



