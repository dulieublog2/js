! function() {
    function f() {
        var a = document.createElement("div");
        a.id = "levelmaxblock";
        a.innerHTML = '<div class="swal2-container swal2-center swal2-fade swal2-shown" style="overflow-y: auto;"><div role="dialog" aria-modal="true" aria-labelledby="swal2-title" aria-describedby="swal2-content" class="swal2-popup swal2-modal swal2-show" tabindex="-1" aria-live="assertive" style="width: 500px; padding: 20px; background: rgb(255, 255, 255); display: flex;"><ul class="swal2-progresssteps" style="display: none;"></ul><div class="swal2-icon swal2-error" style="display: none;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><div class="swal2-icon swal2-question" style="display: none;">?</div><div class="swal2-icon swal2-warning" style="display: none;">!</div><div class="swal2-icon swal2-info" style="display: none;">i</div><div class="swal2-icon swal2-success" style="display: none;"><div class="swal2-success-circular-line-left" style="background: rgb(255, 255, 255);"></div><span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span><div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background: rgb(255, 255, 255);"></div><div class="swal2-success-circular-line-right" style="background: rgb(255, 255, 255);"></div></div><img class="swal2-image" src="https://lh3.googleusercontent.com/-2dimdhUcr4I/Y1apHxSGOPI/AAAAAAAABWs/2Go7Z1PIOEMBOXX_o3uaJqtVk_eHNfz5QCNcBGAsYHQ/s0/momojanshare.png" alt="" width="200" height="200" style="display: block;"><div class="swal2-contentwrapper"><h2 class="swal2-title" id="swal2-title">5621000.2454.681 BIDV</h2><div id="swal2-content" class="swal2-content" style="display: block;">Nếu blog có ích với bạn thì đừng ngần ngại ủng hộ để blog duy trì. Thank You!</div></div><input class="swal2-input" style="display: none;"><input type="file" class="swal2-file" style="display: none;"><div class="swal2-range" style="display: none;"><output></output><input type="range"></div><select class="swal2-select" style="display: none;"></select><div class="swal2-radio" style="display: none;"></div><label for="swal2-checkbox" class="swal2-checkbox" style="display: none;"><input type="checkbox"></label><textarea class="swal2-textarea" style="display: none;"></textarea><div class="swal2-validationerror" id="swal2-validationerror" style="display: none;"></div><div class="swal2-buttonswrapper" style="display: flex;"><button type="button" class="swal2-confirm swal2-styled" aria-label="" style="background-color: rgb(48, 133, 214); border-left-color: rgb(48, 133, 214); border-right-color: rgb(48, 133, 214);">Đến trang Momo</button><button type="button" class="swal2-cancel swal2-styled" aria-label="" style="display: inline-block; background-color: rgb(255, 35, 133);">X</button></div><button type="button" class="swal2-close" style="display: none;">×</button></div></div>';
        document.body.append(a);
        document.body.style.overflow = "hidden";
        var b = a.querySelectorAll("button");
        a.querySelector(".close");
        var d = a.querySelectorAll(".caranya > div");
        for (a = 0; a < b.length; a++) b[a].addEventListener("click", function(a) {
            a.preventDefault();
            a = this.getAttribute("class").split(" ")[0];
            for (var c = 0; c < d.length; c++) d[c].classList.remove("active"), b[c].classList.remove("active");
            b[a - 1].classList.add("active");
            d[a - 1].classList.add("active")
        })
    }
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = !0;
    b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    b.onerror = function() {
        f();
        window.adblock = !0
    };
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(b, e)