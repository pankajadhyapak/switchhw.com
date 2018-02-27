<?php

$EmailFrom = $_REQUEST['email'];
$EmailTo = "prameetkotak@me.com"; // Your email address here
$Subject = "Contact form";
$Name = Trim(stripslashes($_POST['name']));
$Email = Trim(stripslashes($_POST['email']));
$Phone = Trim(stripslashes($_POST['phone']));
$Message = Trim(stripslashes($_POST['message']));

// validation
$validationOK=true;
if (!$validationOK) {
  echo "Error";
  exit;
}

// prepare email body text
$Body = "Email from Switch Website";
$Body .= "\n";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $Phone;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= "\n";
$Body .= "\n";
$Body .= $Message;
$Body .= "\n";

// send email
$success = false;
$res = sendmailbymailgun($Name, $Email, "Website Contact form", $Body, $EmailTo);

if(is_array($res) && array_key_exists('message', $res)){
    $success = true;
}

// redirect to success page
if ($success){
  echo "<script type='text/javascript'>
            alert('Mail Sent');
            window.location = '/';
        </script>";
}
else{
  echo "<script type='text/javascript'>
            alert('Mail not Sent');
            window.location = '/';
        </script>";
}



function sendmailbymailgun($mailfromname, $mailfrom, $subject, $text, $toemail){
    define('MAILGUN_URL', 'https://api.mailgun.net/v3/web.switchhw.com');
    define('MAILGUN_KEY', 'key-0p1srjab99s0hsh61rqypneqwk25u0p9');
    $array_data = array(
        'from'=> $mailfromname .'<'.$mailfrom.'>',
        'to'=> 'Web <'.$toemail.'>',
        'subject'=> $subject,
        'text'=> $text,
        'h:Reply-To'=> $mailfrom
    );
    $session = curl_init(MAILGUN_URL.'/messages');
    curl_setopt($session, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($session, CURLOPT_USERPWD, 'api:'.MAILGUN_KEY);
    curl_setopt($session, CURLOPT_POST, true);
    curl_setopt($session, CURLOPT_POSTFIELDS, $array_data);
    curl_setopt($session, CURLOPT_HEADER, false);
    curl_setopt($session, CURLOPT_ENCODING, 'UTF-8');
    curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($session, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($session);
    curl_close($session);
    $results = json_decode($response, true);
    return $results;
}

?>

