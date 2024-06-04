(function (global){
    const bh = {};

    const homeHtml = "snippets/home-snippets.html";
    const categoryHtml = "snippets/category-snippets.html";

    document.addEventListener("DOMContentLoaded", function(event) {
        loadHomeHtml();
    });

    const insertHtml = function (selector, html) {
        const targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    }

    loadHomeHtml = function(){
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function(responseText){
                document.querySelector("#main").innerHTML = responseText;
            },
            false
        )
    }

    global.$bh = bh;
})(window)