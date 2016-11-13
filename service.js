/**
 * Get data via request
 * @return Promise - Resolved with response on success, reject on fail. 
 */
const request = require('request');

module.exports = {


    getData: function () {
        return new Promise(function (resolve, reject) {
            request("https://medium.com", (error, response, body) => {
                if (!error && response.statusCode == 200) {
                   resolve(body);
                }
                else{
                    reject(error);
                }
            });

        });
    }

}





