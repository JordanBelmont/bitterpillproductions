<?php
      $name = $_POST['name'];
      $visitorMail = $_POST['email'];
      $message = $_POST['message'];

      $emailFrom = "jordanbelmont@bitterpillproductions.com";

      $emailSubject = "Bitter Pill Mail";

      $emailMessage = "NAME: $name.\n\n".
                        "EMAIL ADDRESS: $visitorMail.\n\n".
                           "MESSAGE: \n\n$message.\n\n";

      $to = "jordan.belmont@hotmail.com";

      $headers = "From: $emailFrom \r\n";

      $headers .= "Reply-To: $visitorMail \r\n";

      mail($to, $emailSubject, $emailMessage, $headers);

      header("Location: https://bitterpillproductions.com/bio.html");
?>