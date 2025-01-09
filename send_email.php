<?php
    
    if(isset($_POST['SubmitButton'])){  // Check if submit button is pressed
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        
        echo "User Details: ".$name." ".$email." ".$phone;
        
        echo "\nSending an email";
        
        $to      = $email;
        $subject = 'testing mail';
        $message = '
            <html>
            <head>
              <title>HTML Test Message</title>
            </head>
            <body>
              <p>Here are the birthdays upcoming in August!</p>
              <p>Name: '.$name.'</p>
              <p>Email: '.$email.'</p>
              <p>Phone: '.$phone.'</p>
              
            </body>
            </html>
            ';
        
        // To send HTML mail, the Content-type header must be set
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        
        $headers .= 'From: info@xyz.net'       . "\r\n" .
                     'Reply-To: info@xyz.net' . "\r\n" .
                     'X-Mailer: PHP/' . phpversion();
    
        if(mail($to, $subject, $message, $headers)){
            echo "\nEmail Sent";
        }
        else {
            echo "\nFailed to Send the email";
        }
    }
?>