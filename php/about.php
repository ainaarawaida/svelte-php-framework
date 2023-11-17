<?php
// This would be your framework default bootstrap file

// During dev, this file would be hit when accessing your local host, like:
// http://http://svelte.test/php/about.php

require_once __DIR__ . '/helpers.php';

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="#">
    <title>Svelte App</title>

    <?= vite('main.js') ?>
    <?php $passVariable = 'data from about.php' ; ?>

</head>

<body>
    <div style="padding:10px;">
        <span><a href="index.php">Index</a> </span> &nbsp;||&nbsp;
        <span><a href="about.php">About</a></span>
        <h1>About</h1>
    </div>
   
    <div id="vite_about" passdata="<?php echo base64_encode(json_encode($passVariable)); ?>"></div>
</body>

</html>
