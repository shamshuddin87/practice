<?php
ini_set("max_execution_time", '900');
ini_set('memory_limit', '1024M');
require_once 'phpexcelimpexpo/PHPExcel.php';
require_once 'phpexcelimpexpo/PHPExcel/IOFactory.php';

Class Phpimportexpogen extends Phalcon\Mvc\User\Component {
    
    
    public function insertcmpmodule($getuserid,$user_group_id,$excelfilenamepath)
    {
        //print_r($getuserid);exit;
        $connection = $this->dbtrd;
        $time= time();
        $flag=0;
       
        
        $objPHPExcel = PHPExcel_IOFactory::load($excelfilenamepath);
        $objPHPExcel->setActiveSheetIndex(0);
        $worksheet = $objPHPExcel->getActiveSheet(0);
         

        try
        {
            foreach ($objPHPExcel->getWorksheetIterator() as $worksheet)
            {
                $highestRow = $worksheet->getHighestRow();

                for ($row=2; $row<=$highestRow;$row++)
                {
                    $cmpname = $worksheet->getCellByColumnAndRow(0, $row)->getValue();
                    $cmpname = trim($cmpname);
                    //echo $cmpname; exit;
                    
                    $sqlquery="SELECT * FROM listedcmpmodule WHERE `company_name`='".$cmpname."' AND added_by='".$getuserid."'";
                    $exeqry = $connection->query($sqlquery);
                    $getnum = trim($exeqry->numRows());
                    if($getnum==0)
                    {
                        $sql="INSERT INTO listedcmpmodule (company_name,access,added_by) 
                            VALUES ('".$cmpname."','1','".$getuserid."') ";
                        $exeml = $connection->query($sql);
                        if($exeml)
                        {
                            $flag=1;
                        }
                    }                  
                }
            }
            
            return $flag;
        }
        catch (Exception $e)
        {
            return false;
        }
    }
    
    public function insertreconcilation($getuserid,$user_group_id,$excelfilenamepath,$stmnttill,$uniqueid)
    {
        
        $connection = $this->dbtrd;
        $time= time();
        $objPHPExcel = PHPExcel_IOFactory::load($excelfilenamepath);
        $objPHPExcel->setActiveSheetIndex(0);
        $worksheet = $objPHPExcel->getActiveSheet(0);

        try
        {
            foreach ($objPHPExcel->getWorksheetIterator() as $worksheet)
            {
                $highestRow = $worksheet->getHighestRow();
                 for ($row=2; $row<=$highestRow;$row++)
                 {
                    $panno  = $worksheet->getCellByColumnAndRow(0, $row)->getValue();
                    $cmpname  = $worksheet->getCellByColumnAndRow(1, $row)->getValue();
                    $rtaholding  = $worksheet->getCellByColumnAndRow(2, $row)->getValue();
                     //echo $rtaholding;exit;
                    $reconciArray = array('panno'=>$panno,'company'=>$cmpname,'holding'=>$rtaholding);
                  
                    $getstatus = $this->reconcilationcommon->insertreconcilation($getuserid,$user_group_id,$reconciArray,$stmnttill,$uniqueid);
                }
                
            }
           return true;
        }
        catch (Exception $e)
        {
            return false;
            $connection->close();
        }
    }
    
    /*************   insert into ESOP start *************/
    public function insertesop($getuserid,$user_group_id,$excelfilenamepath,$uniqueid)
    {
        
        $connection = $this->dbtrd;
        $time= time();
        $objPHPExcel = PHPExcel_IOFactory::load($excelfilenamepath);
        $objPHPExcel->setActiveSheetIndex(0);
        $worksheet = $objPHPExcel->getActiveSheet(0);

        try
        {
            foreach ($objPHPExcel->getWorksheetIterator() as $worksheet)
            {
                $highestRow = $worksheet->getHighestRow();
                 for ($row=2; $row<=$highestRow;$row++)
                 {
                    $emp_name  = $worksheet->getCellByColumnAndRow(0, $row)->getValue();
                    $emp_pan  = $worksheet->getCellByColumnAndRow(1, $row)->getValue();
                    $emp_shares  = $worksheet->getCellByColumnAndRow(2, $row)->getValue();
                    $emp_almtdate  = $worksheet->getCellByColumnAndRow(3, $row)->getValue();
                    $emp_almtdate  = PHPExcel_Style_NumberFormat::toFormattedString($emp_almtdate, "DD-MM-YYYY");
                    $emp_cmpnme  = $worksheet->getCellByColumnAndRow(4, $row)->getValue();
                    $esopdata = array('empname'=>$emp_name,'emppan'=>$emp_pan,'empshares'=>$emp_shares,'almtdte'=>$emp_almtdate,'cmpname'=>$emp_cmpnme);
                  
                    $getstatus = $this->esopcommon->insertesop($getuserid,$user_group_id,$esopdata,$uniqueid);
                }
                
            }
            if($getstatus)
            {
                return true;
            }
            else
            {
                return false;
            }
           
        }
        catch (Exception $e)
        {
            return false;
            $connection->close();
        }
    }
    /*************   insert into ESOP end *************/
    public function fetchallupsiexportexcel($getuserid,$user_group_id,$processdata)
    {

         //echo '<pre>'; print_r($processdata);exit;
        $connection = $this->db;
        $time = time();
        
        $excelfilenamepath = 'samplefile/MIS/upsitypeclassify.xlsx';
        $newfilepath = 'img/mis/upsitypeclassify'.'_'.$time.'.xlsx';
        $j=1;
        foreach($processdata as $tblrow)
        {
          
          
            $nwexcl[] = array('0' => $tblrow['upsitype'],
                            '1' => $tblrow['projstartdate'],
                            '2'=> $tblrow['enddate'],
                            '3' => $tblrow[11],
                            '4' => $tblrow['fullname']
                            //'4' => $tblrow['designation']
                           
                        );
            $j++;
        }
        //echo '<pre>';print_r($nwexcl);exit;
       
        $objPHPExcel = PHPExcel_IOFactory::load($excelfilenamepath);
        
        $objPHPExcel->setActiveSheetIndex(0);
        $worksheet = $objPHPExcel->getActiveSheet();
        $highestColumn = $worksheet->getHighestColumn();
        $highestColumnIndex = PHPExcel_Cell::columnIndexFromString($highestColumn);
        $highestRow = $worksheet->getHighestRow();
        $worksheet = $objPHPExcel->getActiveSheet();
               //echo "yo";exit;  
            //echo '<pre>';print_r($nwexcl);exit;
            if(count($nwexcl)>0)
            {
                $row = 2; // 1-based index

                foreach($nwexcl as $rowdata)
                {
                    $col = 0;
                    foreach($rowdata as $key=>$value) 
                    {
                        //echo $col." ".$row." ".$value.'<br>';
                        $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow($col, $row, $value);
                        $col++;
                    }                    
                    $row++;
                }

                $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
                //echo '<pre>';print_r($newfilepath);exit;
                $objWriter->save($newfilepath);
                //echo $newfilepath;exit;

                $genfile = $newfilepath;
            }
            else
            {
                $genfile = '';
            }

        //echo '<pre>';print_r($genfile);exit;
        return $genfile;

    }
    
    public function fetchSharedInfoexcel($getuserid,$user_group_id,$upsidata)
    {

         //echo '<pre>'; print_r($processdata);exit;
        $connection = $this->db;
        $time = time();
        
        $excelfilenamepath = 'samplefile/MIS/upsisharing.xlsx';
        $newfilepath = 'img/mis/upsisharing'.'_'.$time.'.xlsx';
        $j=1;
        foreach($upsidata as $tblrow)
        {
          //print_r($tblrow);exit;
            $category = $tblrow['category_name'];
            if($tblrow['category'] == 16)
            {
                $category = $tblrow['othercategory'];
            }
            $nwexcl[] = array('0' => $tblrow['name'],
                            '1' => $category,
                            '2'=> $tblrow['sharingdate'],
                            '3' => $tblrow['sharingtime'],
                            '4' => $tblrow['enddate'],
                            '5' => $tblrow['datashared'],
//                            '6' => $tblrow['purpose'],
                            '6' => $tblrow['fullname']
                        );
            $j++;
        }
        //echo '<pre>';print_r($nwexcl);exit;
       
        $objPHPExcel = PHPExcel_IOFactory::load($excelfilenamepath);
        
        $objPHPExcel->setActiveSheetIndex(0);
        $worksheet = $objPHPExcel->getActiveSheet();
        $highestColumn = $worksheet->getHighestColumn();
        $highestColumnIndex = PHPExcel_Cell::columnIndexFromString($highestColumn);
        $highestRow = $worksheet->getHighestRow();
        $worksheet = $objPHPExcel->getActiveSheet();
               //echo "yo";exit;  
            //echo '<pre>';print_r($nwexcl);exit;
            if(count($nwexcl)>0)
            {
                $row = 2; // 1-based index

                foreach($nwexcl as $rowdata)
                {
                    $col = 0;
                    foreach($rowdata as $key=>$value) 
                    {
                        //echo $col." ".$row." ".$value.'<br>';
                        $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow($col, $row, $value);
                        $col++;
                    }                    
                    $row++;
                }

                $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
                //echo '<pre>';print_r($newfilepath);exit;
                $objWriter->save($newfilepath);
                //echo $newfilepath;exit;

                $genfile = $newfilepath;
            }
            else
            {
                $genfile = '';
            }

        //echo '<pre>';print_r($genfile);exit;
        return $genfile;

    }
    
    public function fetchArchiveSharedInfoexcel($getuserid,$user_group_id,$archiveupsidata)
    {

         //echo '<pre>'; print_r($processdata);exit;
        $connection = $this->db;
        $time = time();
        
        $excelfilenamepath = 'samplefile/MIS/upsisharing.xlsx';
        $newfilepath = 'img/mis/upsisharing'.'_'.$time.'.xlsx';
        $j=1;
        foreach($archiveupsidata as $tblrow)
        {
          //print_r($tblrow);exit;
            $category = $tblrow['category_name'];
            if($tblrow['category'] == 16)
            {
                $category = $tblrow['othercategory'];
            }
            $nwexcl[] = array('0' => $tblrow['name'],
                            '1' => $category,
                            '2'=> $tblrow['sharingdate'],
                            '3' => $tblrow['sharingtime'],
                            '4' => $tblrow['enddate'],
                            '5' => $tblrow['datashared'],
//                            '6' => $tblrow['purpose'],
                            '6' => $tblrow['fullname']
                        );
            $j++;
        }
        //echo '<pre>';print_r($nwexcl);exit;
       
        $objPHPExcel = PHPExcel_IOFactory::load($excelfilenamepath);
        
        $objPHPExcel->setActiveSheetIndex(0);
        $worksheet = $objPHPExcel->getActiveSheet();
        $highestColumn = $worksheet->getHighestColumn();
        $highestColumnIndex = PHPExcel_Cell::columnIndexFromString($highestColumn);
        $highestRow = $worksheet->getHighestRow();
        $worksheet = $objPHPExcel->getActiveSheet();
               //echo "yo";exit;  
            //echo '<pre>';print_r($nwexcl);exit;
            if(count($nwexcl)>0)
            {
                $row = 2; // 1-based index

                foreach($nwexcl as $rowdata)
                {
                    $col = 0;
                    foreach($rowdata as $key=>$value) 
                    {
                        //echo $col." ".$row." ".$value.'<br>';
                        $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow($col, $row, $value);
                        $col++;
                    }                    
                    $row++;
                }

                $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
                //echo '<pre>';print_r($newfilepath);exit;
                $objWriter->save($newfilepath);
                //echo $newfilepath;exit;

                $genfile = $newfilepath;
            }
            else
            {
                $genfile = '';
            }

        //echo '<pre>';print_r($genfile);exit;
        return $genfile;

    }
}
