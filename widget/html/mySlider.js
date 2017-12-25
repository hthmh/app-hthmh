; (function ($) {
    var slideNumber, box;

    function init() {
        slideNumber = box.find(".img").size();
        for (i = 0; i < slideNumber; i++) {
            box.find(".img:eq(" + i + ")").attr("data-slide-imgId", i);
        }

        //根据轮播图片数量设定图片位置对应的class
        if (slideNumber == 1) {
            box.find(".img:eq(0)").addClass("img3");
        }
        if (slideNumber == 2) {
            for (i = 0; i < slideNumber; i++) {
                box.find(".img:eq(" + i + ")").addClass("img" + (i + 3));
            }
        }
        if (slideNumber == 3) {
            for (i = 0; i < slideNumber; i++) {
                box.find(".img:eq(" + i + ")").addClass("img" + (i + 2));
            }
        }
        if (slideNumber > 3 && slideNumber < 6) {
            for (i = 0; i < slideNumber; i++) {
                box.find(".img:eq(" + i + ")").addClass("img" + (i + 1));
            }
        }
        if (slideNumber >= 6) {
            for (i = 0; i < slideNumber; i++) {
                if (i < 5) {
                    box.find(".img:eq(" + i + ")").addClass("img" + (i + 1));
                } else {
                    box.find(".img:eq(" + i + ")").addClass("img5");
                }
            }
        }

    }

    function addEvents() {
        slideLi();
        imgClickFy();
    }

    //根据轮播图片数量设定轮播图按钮数量
    function renderSlideBt() {
        for (i = 1; i <= slideNumber; i++) {
            box.find(".slide-bt").append("<span data-slide-bt='" + i + "'></span>");
        }
        box.find(".slide-bt").width(slideNumber * 34);
        box.find(".slide-bt").css("margin-left", "-" + slideNumber * 17 + "px");
    }

    //自动轮播
    function renderAutoLb(autoLbtime) {
        return setInterval(function () {
            next();
        }, autoLbtime);
    }

    //下一个
    function next() {
        var fy = [];
        for (i = 0; i < slideNumber; i++) {
            fy[i] = box.find(".img[data-slide-imgId=" + i + "]").attr("class");
        }
        for (i = 0; i < slideNumber; i++) {
            if (i == 0) {
                box.find(".img[data-slide-imgId=" + i + "]").attr("class", fy[slideNumber - 1]);
            } else {
                box.find(".img[data-slide-imgId=" + i + "]").attr("class", fy[i - 1]);
            }
        }
        slideLi();
        return box.find(".img3").index()
    }


    //上一个
    function prev() {
        var fy = [];
        for (i = 0; i < slideNumber; i++) {
            fy[i] = box.find(".img[data-slide-imgId=" + i + "]").attr("class");
        }
        for (i = 0; i < slideNumber; i++) {
            if (i == (slideNumber - 1)) {
                box.find(".img[data-slide-imgId=" + i + "]").attr("class", fy[0]);
            } else {
                box.find(".img[data-slide-imgId=" + i + "]").attr("class", fy[i + 1]);
            }
        }
        slideLi();
        return box.find(".img3").index();
    }


    function imgClickFy() {
        //轮播图片左右图片点击翻页
        box.on("click", ".img", function () {
            if ($(this).hasClass("img2")) {
                prev();
            } else if ($(this).hasClass("img4")) {
                next();
            }
        })

        //底部按钮点击翻页
        box.on("click", "[data-slide-bt]", function () {
            tz($(this).attr("data-slide-bt"));
        })
    }

    //修改当前最中间图片对应按钮选中状态
    function slideLi() {
        var slideList = parseInt(box.find(".img3").attr("data-slide-imgId")) + 1;
        box.find(".slide-bt span").removeClass("on");
        box.find(".slide-bt span[data-slide-bt=" + slideList + "]").addClass("on");
    }

    //轮播按钮点击翻页
    function tz(id) {
        var tzcs = id - (parseInt(box.find(".img3").attr("data-slide-imgId")) + 1);
        if (tzcs > 0) {
            for (i = 0; i < tzcs; i++) {
                setTimeout(function () {
                    next();
                }, 1);
            }
        }
        if (tzcs < 0) {
            tzcs = (-tzcs);
            for (i = 0; i < tzcs; i++) {
                setTimeout(function () {
                    prev();
                }, 1);
            }
        }
        slideLi();
    }

    function renderSliderHtml(list) {
        var str = "";
        list.forEach(function (item) {
            str += '<div class="img" style="background-image:url(' + item.bg + ')"><h3>' + item.title + '</h3><p>' + item.desc + '</p></div>'
        })
        str += '<div class="slide-bt"></div>';
        box.html(str);
    }

    $.fn.extend({
        /* 
         list: data.list,
         bottomBtn: true,
         duration: 1000
        */
        mySlider: function (option) {
            box = $(this);
            renderSliderHtml(option.list);//拼盒子html
            init();//渲染每个图片盒子class
            var autoInterval;
            if (option.bottomBtn) {
                renderSlideBt();
            }
            if (option.duration) {
                autoInterval = renderAutoLb(option.duration);
                box.find(".img").hover(function () {
                    clearInterval(autoInterval)
                }, function () {
                    autoInterval = renderAutoLb(option.duration);
                })
            }
            if (option.click) {
                box.find(".img").click(function () {
                    option.click($(this).index())
                })
            }

            addEvents()

            return {
                prev: prev,
                next: next,
                destory: function () {
                    box.off();
                    clearInterval(autoInterval);
                }
            }
        }
    })
})(jQuery)