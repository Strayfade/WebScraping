//------------------------------------

var url = 'https://www.YouTube.com/Strayfade'

var startSearch =   '},"subscriberCountText":{"simpleText":"'   // Information after this string
var endSearch =     ' subscribers"},"tvBanner":{"thumbnails":[{"url":"http'                                                                // Information before this string

//------------------------------------

const rp = require('request-promise');

rp(url)
.then(function(html){

    // Create Result Variable
    var result

    // Get actual string positions of the start and end of search (for isolation of information).
    var n = html.toString().indexOf(startSearch)
    var m = html.toString().indexOf(endSearch)

    // Rewrite source into new variable (result) using text between variable 'n' and 'm'
    for (var i = n; i < m; i++)
    {
        result = result + html.toString()[i]
    }
    
    // String manipulation for some reason
    if(result.startsWith('undefined'))
    {
        result = result.replace('undefined', '')
        result = result.replace(startSearch, '')
    }

    // Result variable is the searching result. This is HTML body between the start string and end string.
    console.log(result)

})