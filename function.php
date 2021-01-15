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
                <div class="grid-function">
                    <div class="grid-function-1">
                        <div class="grid-function-2">hey1</div>
                        <div class="grid-function-2">hey2</div>
                        <div class="grid-function-2">hey3</div>
                    </div>
                    <div class="grid-function-1">
                        <div class="grid-function-2">hey4</div>
                        <div class="grid-function-2">hey5</div>
                        <div class="grid-function-2">hey6</div>
                    </div>
                    <div class="grid-function-1">
                        <div class="grid-function-2">hey7</div>
                        <div class="grid-function-2">hey8</div>
                        <div class="grid-function-2">hey9</div>
                    </div>
                </div>
            </center>
            <script src="script/function.js"></script>
<?php
require_once 'footer.php';
?>