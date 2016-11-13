module.exports = {
    getLinks: function (html) {
        var regex = /href=.*?>/g;
        var hrefAttrbs = html.match(regex);

        var links = hrefAttrbs.map((data) => {

            data = data.replace("href=", "");
            var index = data.indexOf(" ");
            data = data.slice(0, index);
            console.log(data);
            return data;
        });
        
        return links;
    }
}