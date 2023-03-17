! function() {
    function f() {
        var a = document.createElement("div");
        a.id = "levelmaxblock";
        a.innerHTML = '<div id="imgout2" class="mt-2 text-center"><img src="blob:https://www.janshare.com/3bf7ce5f-ab1f-43b2-82d7-1b414269358b" style="width:500px;" class="vienanhxuat"><br><a class="my-4 jbtn jbtn--border jbtn--primary2 jbtn--animated2" href="blob:https://www.janshare.com/3bf7ce5f-ab1f-43b2-82d7-1b414269358b" target="blank" id="downloadImg" title="Tải ảnh về" download="thiepchuc8-3"><i class="fas fa-cloud-download-alt"></i> Tải ảnh xuống</a> <div id="share-out"></div></div>';
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
