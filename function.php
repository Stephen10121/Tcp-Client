<?php
require_once 'header.php';
?>
            <center>
                <?php
                    if (isset($_GET['gerror'])) {
                        if ($_GET['gerror'] == "gotin") {
                            echo '<p id="gerror">Hooray! You accesed your server!</p>';
                        }
                    }
                ?>
                <form action="javascript: addFunc()">
                    <input type="text" placeholder="New Func Name" id="funcName"/>
                    <input type="text" placeholder="Toggled Func Name" id="togFuncName"/>
                    <input type="text" placeholder="Funcion Id Send" id="funcId"/>
                    <input type="text" placeholder="Funcion Id Send Toggled" id="funcIdTog"/>
                    <input type="submit" value="Make Function"/>
                </form>
            </center>
            <center class="center">
                <div class="grid-function">
                    <div class="grid-function-1">
                        <div id="oneOne" class="grid-function-2"></div>
                        <div id="twoTwo" class="grid-function-2"></div>
                        <div id="threeThree" class="grid-function-2"></div>
                    </div>
                    <div class="grid-function-1">
                        <div id="fourFour" class="grid-function-2"></div>
                        <div id="fiveFive" class="grid-function-2"></div>
                        <div id="sixSix" class="grid-function-2"></div>
                    </div>
                    <div class="grid-function-1">
                        <div id="sevenSeven" class="grid-function-2"></div>
                        <div id="eightEight" class="grid-function-2"></div>
                        <div id="nineNine" class="grid-function-2"></div>
                    </div>
                </div>
            </center>
            <script src="script/function.js"></script>
<?php
require_once 'footer.php';
?>