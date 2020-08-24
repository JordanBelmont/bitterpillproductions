<?php
   if(isset($_POST['submit'])) {
      $name = $_POST['name'];
      $mailFrom = $_POST['mail'];
      $message = $_POST['message'];

      $mailTo = "jordan.belmont@hotmail.com";
      $headers = "From: ".$mailFrom;
      $txt = "You have received an E-mail from ".$name.".\n\n".$message;

      mail($mailTo, $txt, $headers);
      header("Location: bio.html?mailsend");
   }
?>