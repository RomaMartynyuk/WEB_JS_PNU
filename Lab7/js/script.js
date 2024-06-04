(function (global){
    const gi = {};

    const homeHtml = "snippets/home-snippets.html";
    const categoryHtml = "snippets/category-el-snippets.html";

    const categoriesJson = "data/categories.json"

    document.addEventListener("DOMContentLoaded", function(event) {
        loadHomeHtml();
        document.getElementById("navHomeButton").addEventListener("click", loadHomeHtml);
    });

    const insertHtml = function (selector, html) {
        const targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    }

    const showLoading = function (selector) {
        let html = "<div class='text-center'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    }

    const insertProperty = function (string, propName, propValue) {
        const propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;
    }

    loadHomeHtml = function(){
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function(responseText){
                document.querySelector("#main").innerHTML = responseText;
            },
            false
        )
    };

    gi.loadCatalogCategories = function () {
        $ajaxUtils.sendGetRequest(
            categoriesJson,
            showCategoriesHtml);
    };

    function showCategoriesHtml (categories) {
        $ajaxUtils.sendGetRequest(
            categoryHtml,
            function (categoryHtml) {
                const categoriesViewHtml = buildCategoriesViewHtml(categories, categoryHtml);
                insertHtml("#main", categoriesViewHtml);
            },
            false);
    }

    function buildCategoriesViewHtml (categories, categoryHtml) {
        
        let finalHtml = "<div class='album py-5 bg-body-tertiary'><div class='container'><div class='row justify-content-evenly p-3 g-3'>";

        for (let i = 0; i < categories.length; i++) {
            let html = categoryHtml;
            const full_name = "" + categories[i].full_name;
            const short_name = categories[i].short_name;
            const notes = categories[i].notes;
            html = insertProperty(html, "full_name", full_name);
            html = insertProperty(html, "short_name", short_name);
            html = insertProperty(html, "notes", notes);
            finalHtml += html;
        }

        finalHtml += "</div></div></div>";
        return finalHtml;
    }

    global.$gi = gi;
})(window)