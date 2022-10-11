// document.getElementById("demo").onmouseover = function() {mouseOver()};
        // document.getElementById("demo").onmouseout = function() {mouseOut()};
        // function mouseOver() {
        //     document.getElementById('autoscrollmotion').scrollTop = document.getElementById('autoscrollmotion').scrollTop + 0
        // }
        // function mouseOut() {
        //     if (document.getElementById('autoscrollmotion').scrollTop < (document.getElementById('autoscrollmotion').scrollHeight - document.getElementById('autoscrollmotion').offsetHeight)) {                
        //         -1
        //         document.getElementById('autoscrollmotion').scrollTop = document.getElementById('autoscrollmotion').scrollTop + 1
        //     }
        //     else { document.getElementById('autoscrollmotion').scrollTop = 100; }
        // }

        function ScrollDiv() {

            if (document.getElementById('autoscrollmotion1').scrollTop < (document.getElementById('autoscrollmotion1').scrollHeight - document.getElementById('autoscrollmotion1').offsetHeight)) {                
                -1
                document.getElementById('autoscrollmotion1').scrollTop = document.getElementById('autoscrollmotion1').scrollTop + 1
            }
            else { document.getElementById('autoscrollmotion1').scrollTop = 0; }
        }

        function ScrollDiv2() {

            if (document.getElementById('autoscrollmotion2').scrollTop < (document.getElementById('autoscrollmotion2').scrollHeight - document.getElementById('autoscrollmotion2').offsetHeight)) {
                +1
                document.getElementById('autoscrollmotion2').scrollTop = document.getElementById('autoscrollmotion2').scrollTop - 1
            }
            else { document.getElementById('autoscrollmotion2').scrollTop = 0; }
        }

        function ScrollDiv3() {

            if (document.getElementById('autoscrollmotion3').scrollTop < (document.getElementById('autoscrollmotion3').scrollHeight - document.getElementById('autoscrollmotion3').offsetHeight)) {
                -1
                document.getElementById('autoscrollmotion3').scrollTop = document.getElementById('autoscrollmotion3').scrollTop + 1
            }
            else { document.getElementById('autoscrollmotion3').scrollTop = 0; }
        }

        function ScrollDiv4() {

            if (document.getElementById('autoscrollmotion4').scrollTop < (document.getElementById('autoscrollmotion4').scrollHeight - document.getElementById('autoscrollmotion4').offsetHeight)) {
                -1
                document.getElementById('autoscrollmotion4').scrollTop = document.getElementById('autoscrollmotion4').scrollTop + 1
            }
            else { document.getElementById('autoscrollmotion4').scrollTop = 0; }
        }

        function ScrollDiv5() {

            if (document.getElementById('autoscrollmotion5').scrollTop < (document.getElementById('autoscrollmotion5').scrollHeight - document.getElementById('autoscrollmotion5').offsetHeight)) {
                -1
                document.getElementById('autoscrollmotion5').scrollTop = document.getElementById('autoscrollmotion5').scrollTop + 1
            }
            else { document.getElementById('autoscrollmotion5').scrollTop = 0; }
        }

        function ScrollDiv6() {

            if (document.getElementById('autoscrollmotion6').scrollTop < (document.getElementById('autoscrollmotion6').scrollHeight - document.getElementById('autoscrollmotion6').offsetHeight)) {
                -1
                document.getElementById('autoscrollmotion6').scrollTop = document.getElementById('autoscrollmotion6').scrollTop + 1
            }
            else { document.getElementById('autoscrollmotion6').scrollTop = 0; }
        }

        function ScrollDiv7() {

            if (document.getElementById('autoscrollmotion7').scrollTop < (document.getElementById('autoscrollmotion7').scrollHeight - document.getElementById('autoscrollmotion7').offsetHeight)) {
                -1
                document.getElementById('autoscrollmotion7').scrollTop = document.getElementById('autoscrollmotion7').scrollTop + 1
            }
            else { document.getElementById('autoscrollmotion7').scrollTop = 0; }
        }

        function ScrollDiv8() {

            if (document.getElementById('autoscrollmotion8').scrollTop < (document.getElementById('autoscrollmotion8').scrollHeight - document.getElementById('autoscrollmotion8').offsetHeight)) {
                -1
                document.getElementById('autoscrollmotion8').scrollTop = document.getElementById('autoscrollmotion8').scrollTop + 1
            }
            else { document.getElementById('autoscrollmotion8').scrollTop = 0; }
        }

        function ScrollDiv9() {

            if (document.getElementById('autoscrollmotion9').scrollTop < (document.getElementById('autoscrollmotion9').scrollHeight - document.getElementById('autoscrollmotion9').offsetHeight)) {
                -1
                document.getElementById('autoscrollmotion9').scrollTop = document.getElementById('autoscrollmotion9').scrollTop + 1
            }
            else { document.getElementById('autoscrollmotion9').scrollTop = 0; }
        }

        function ScrollDiv10() {

            if (document.getElementById('autoscrollmotion10').scrollTop < (document.getElementById('autoscrollmotion10').scrollHeight - document.getElementById('autoscrollmotion10').offsetHeight)) {
                -1
                document.getElementById('autoscrollmotion10').scrollTop = document.getElementById('autoscrollmotion10').scrollTop + 1
            }
            else { document.getElementById('autoscrollmotion10').scrollTop = 0; }
        }

        setInterval(ScrollDiv, 50)
        setInterval(ScrollDiv2, 50)
        setInterval(ScrollDiv3, 50)
        setInterval(ScrollDiv4, 50)
        setInterval(ScrollDiv5, 50)
        setInterval(ScrollDiv6, 50)
        setInterval(ScrollDiv7, 50)
        setInterval(ScrollDiv8, 50)
        setInterval(ScrollDiv9, 50)
        setInterval(ScrollDiv10, 50)
