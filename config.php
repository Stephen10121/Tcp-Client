<?php
require_once 'header.php';
?>
            <center>
                <form id="password-form" action="javascript: sendMsg()">
                    <input type="text" id="ip" class="input" placeholder="Ip Address"><br>
                    <input type="text" id="port" class="input" placeholder="Port Number"><br>
                    <input type="password" id="password" class="input" placeholder="Password">
                    <input type="Submit" value="Connect">
                </form>
                <p id="output"></p>
            </center>
<?php
require_once 'footer.php';
?>