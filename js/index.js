"use-strict";
try {
    (() => {
        var whoplayer = "O", player_whoplaying = document.body.querySelector("p[class='player_game']"), draw_part_game = false, btn_winner = document.querySelector("button[class='btn_winner']"), all_case_query = [...document.body.querySelectorAll("article[class='grid_cell']  >  aside")];
        [...document.querySelectorAll("article[class='grid_cell']  >  aside")].map((elt, index) => {
            elt.onclick = function () {
                this.textContent = whoplayer;
                if (whoplayer == "O") {
                    whoplayer = "x";
                    this.style.color = "#dc3545";
                } else if (whoplayer == "x") {
                    whoplayer = "O";
                    this.style.color = "#ffc107";
                }
                player_whoplaying.textContent = whoplayer + " turn 's";
            }
        });
        btn_winner.addEventListener("click", function () {
            if (all_case_query[0].textContent == "X" && all_case_query[1].textContent == "X" && all_case_query[2].textContent == "X") {
                Swal.fire({
                    title: "Winner !",
                    text: "X  win",
                    icon: "success"
                });
                

            } else if (all_case_query[3].textContent == "X" && all_case_query[4].textContent == "X" && all_case_query[5].textContent == "X") {
                Swal.fire({
                    title: "Winner !",
                    text: "X  win",
                    icon: "success"
                });
            } else if (all_case_query[6].textContent == "X" && all_case_query[7].textContent == "X" && all_case_query[8].textContent == "X") {
                Swal.fire({
                    title: "Winner !",
                    text: "X win",
                    icon: "success"
                });
            } else if (all_case_query[0].textContent == "X" && all_case_query[3].textContent == "X" && all_case_query[6].textContent == "X") {
                Swal.fire({
                    title: "Winner !",
                    text: "X win",
                    icon: "success"
                });
            } else if (all_case_query[1].textContent == "X" && all_case_query[4].textContent == "X" && all_case_query[7].textContent == "X") {
                Swal.fire({
                    title: "Winner!",
                    text: "X win",
                    icon: "success"
                });
            } else if (all_case_query[2].textContent == "X" && all_case_query[5].textContent == "X" && all_case_query[8].textContent == "X") {

                Swal.fire({
                    title: "Winner!",
                    text: "X win",
                    icon: "success"
                });


            } else if (all_case_query[0].textContent == "X" && all_case_query[4].textContent == "X" && all_case_query[8].textContent == "X") {
                Swal.fire({
                    title: "Winner!",
                    text: "X win",
                    icon: "success"
                });
            } else if (all_case_query[2].textContent == "X" && all_case_query[4].textContent == "X" && all_case_query[6].textContent == "X") {
                Swal.fire({
                    title: "Winner!",
                    text: "X win",
                    icon: "success"
                });
            } else if (all_case_query[0].textContent == "O" && all_case_query[1].textContent == "O" && all_case_query[2].textContent == "O") {
                Swal.fire({
                    title: "Winner!",
                    text: "O win",
                    icon: "success"
                });
            } else if (all_case_query[3].textContent == "O" && all_case_query[4].textContent == "O" && all_case_query[5].textContent == "O") {
                Swal.fire({
                    title: "Winner!",
                    text: "O win",
                    icon: "success"
                });
            } else if (all_case_query[6].textContent == "O" && all_case_query[7].textContent == "O" && all_case_query[8].textContent == "O") {
                Swal.fire({
                    title: "Winner!",
                    text: "O win",
                    icon: "success"
                });
            } else if (all_case_query[0].textContent == "O" && all_case_query[3].textContent == "O" && all_case_query[6].textContent == "O") {
                Swal.fire({
                    title: "Winner!",
                    text: "O win",
                    icon: "success"
                });
            } else if (all_case_query[1].textContent == "O" && all_case_query[4].textContent == "O" && all_case_query[7].textContent == "O") {
                Swal.fire({
                    title: "Winner!",
                    text: "O win",
                    icon: "success"
                });
            } else if (all_case_query[2].textContent == "O" && all_case_query[5].textContent == "O" && all_case_query[8].textContent == "O") {
                Swal.fire({
                    title: "Winner!",
                    text: "O win",
                    icon: "success"
                });
            } else if (all_case_query[0].textContent == "O" && all_case_query[4].textContent == "O" && all_case_query[8].textContent == "O") {
                Swal.fire({
                    title: "Winner!",
                    text: "O win",
                    icon: "success"
                });
            } else if (all_case_query[2].textContent == "X" && all_case_query[4].textContent == "X" && all_case_query[6].textContent == "X") {
                Swal.fire({
                    title: "Winner!",
                    text: "O win",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Drawn",
                    text: "Draw !!",
                });
            }
        }, true); 
        document.querySelector("button[class='btn_restart']").onclick = function() {location.reload()}
    })();
} catch (err) { console.error(err); }
finally { console.info("code has executly !"); }