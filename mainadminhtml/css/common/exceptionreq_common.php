<?php
$cssFiles = array(
 "../calendar/bootstrap-material-datetimepicker.css",  
  "../calendar/bootstrap-datetimepicker.min.css", 
   "../plugin/rajuharryironman-forms.css",    
   "../plugin/tab/rajuharry-ironman-tabs.css", 
   "../scrollbar/jquery.mCustomScrollbar.css", 
   "../plugin/higchart.css", 
   "../preloader.css", 
   "../calendar/calendersupercal.css",  
   "commoncss/exceptionreq_common.css"   
);
/**
 * Ideally, you wouldn't need to change any code beyond this point.
 */
$buffer = "";
foreach ($cssFiles as $cssFile) {
  $buffer .= file_get_contents($cssFile);
}
include('minify/common.php');
?>


