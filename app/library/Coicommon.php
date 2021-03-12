<?php
use Phalcon\Mvc\User\Component;

class Coicommon extends Component
{
    public function fetchEmpDetails($getuserid,$user_group_id)
    {
        $connection = $this->dbtrd;
        $getlist = array();
        $query="SELECT memb.`employeecode`,memb.`fullname`,memb.`designation`,
                GROUP_CONCAT(DISTINCT dept.`deptname`) AS deptname,memb.`deptaccess` 
                FROM `it_memberlist` memb 
                LEFT JOIN `con_dept` dept ON FIND_IN_SET(memb.`deptaccess`,dept.`id`)
                WHERE memb.`status`='1' AND memb.`wr_id` = '3'";
        //print_r($query);exit; 
        try
        {
            $exeget = $connection->query($query);
            $getnum = trim($exeget->numRows());
            if($getnum>0)
            {
                while($row = $exeget->fetch())
                { 
                    $deptaccess = $row['deptaccess'];
                    $querymgrtyp="SELECT * FROM `it_memberlist` WHERE deptaccess = '".$deptaccess."' AND (managertype = 'hr' OR managertype = 'dept')";
                    $exegetmgrtyp = $connection->query($querymgrtyp);
                    $getnummgrtyp = trim($exegetmgrtyp->numRows());
                    if($getnummgrtyp>0)
                    {
                        while($rowmgrtyp = $exegetmgrtyp->fetch())
                        {
                            $row[$rowmgrtyp['managertype']] = $rowmgrtyp['fullname'];
                        }
                    }
                    else
                    {
                        $row['hr'] = '';
                        $row['dept'] = '';
                    }
                    $getlist = $row; 
                }
            }
            else
            {  $getlist = array(); }
        }
        catch (Exception $e)
        {   $getlist = array(); }
        //print_r($getlist);exit;
        return $getlist;
    }

    public function fetchCategory()
    {
        $connection = $this->dbtrd;
        $getlist = array();
        $query="SELECT * FROM `coi_category` WHERE `status` = '1'";
        //print_r($query);exit; 
        try
        {
            $exeget = $connection->query($query);
            $getnum = trim($exeget->numRows());
            if($getnum>0)
            {
                while($row = $exeget->fetch())
                {
                    $getlist[] = $row;
                }
            }
            else
            {  $getlist = array(); }
        }
        catch (Exception $e)
        {   $getlist = array(); }
        //print_r($getlist);exit;
        return $getlist;
    }
    
    public function fetchCateQuestions($getuserid,$user_group_id,$coicateid)
    {
        $connection = $this->dbtrd;
        $getlist = array();
        $query="SELECT * FROM `coi_category_questions` WHERE `cateid` = '".$coicateid."' AND `status` = '1'";
        //print_r($query);exit; 
        try
        {
            $exeget = $connection->query($query);
            $getnum = trim($exeget->numRows());
            if($getnum>0)
            {
                while($row = $exeget->fetch())
                {
                    $getlist[] = $row;
                }
            }
            else
            {  $getlist = array(); }
        }
        catch (Exception $e)
        {   $getlist = array(); }
        //print_r($getlist);exit;
        return $getlist;
    }
    
    public function insertcoi($getuserid,$user_group_id,$coipolicy,$coicategory,$catequeid)
    {
        $connection = $this->dbtrd;
        $time = time();
        $other_des = '';
        $attachments = '';
        try
        {
            $queryin = "INSERT INTO `coi_declaration` (`user_id`, `user_group_id`,`coi_policy`,`catid`,`catqueid`,`other_description`,`attachments`,`date_added`,`date_modified`,`timeago`) 
            VALUES   ('".$getuserid."','".$user_group_id."','".$coipolicy."','".$coicategory."','".$catequeid."','".$attachments."','".$other_des."',NOW(),NOW(),'".$time."')"; 
             //echo $queryin; exit;
            $exegetqry = $connection->query($queryin);

            if($exegetqry)
            {
                return true;
            }
            else
            {
                return false;
            }                            
        }
        catch(Exception $e)
        {
            //echo 'in catch';
            return false;
        }
    }
}