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
                <?php
                if (isset($_GET['error'])) {
                    if ($_GET['error'] == "notconfig") {
                        echo '<p id="error">You did not configure the settings!</p>';
                    }
                }
                ?>
                <p id="output"></p>
            </center>
<?php
require_once 'footer.php';
?>