<?php
$cssFiles = array(
  "commoncss/commingsoon_common.css",
  "../../calendar/bootstrap-material-datetimepicker.css",  
    "../../calendar/bootstrap-datetimepicker.min.css"
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


