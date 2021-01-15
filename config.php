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
                <div id="info">
                    <br><p>Ip:</p>
                    <p id="ipIp" style="display:block;">null</p><br>
                    <p>Port:</p>
                    <p id="portPort" style="display:block;">null</p>
                </div>
                <?php
                if (isset($_GET['error'])) {
                    if ($_GET['error'] == "notconfig") {
                        echo '<p id="error">You did not configure the settings!</p>';
                    }
                }
                ?>
                <input type="button" style="display:none;" onclick="deleteConfig()" id="delConf" value="Delete Configuration">
                <p id="output"></p>
                <script>
                    document.getElementById('ip').innerHTML="jeff";
                </script>
            </center>
<?php
require_once 'footer.php';
?>