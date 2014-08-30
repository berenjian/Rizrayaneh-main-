<?php
if ($_GET['randomId'] != "Gq_wmafi9pCprh9FRPIG_ft1haXsLh0c4D4DvtgDHEFD4AVuUcTq_gE8Wd4xupdf") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
