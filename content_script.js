// Check if the page is the first results page, which means that the user just searched for something
current_results_page = document.getElementsByClassName('cur')[0].innerHTML.split('</span>')[1]
//console.log(current_results_page)

if(current_results_page == '1'){
    // Get the query
    query = document.getElementsByClassName('gLFyf gsfi')[0].value
    //console.log(query)

    chrome.storage.sync.get('keywords', function(data) {

      const queryArray = query.split(' ');
      const keywordsArray = data.keywords.split(',');

      let containsDdgKeywords = keywordsArray.some(keyword => queryArray.indexOf(keyword.replace(' ', '')) !== -1);

      if( containsDdgKeywords ){
          console.log('Yeeey! We have some DDG keywords in the query!')
          window.location = 'https://www.duckduckgo.com?q='+query
      }

    });




    // Get the percentage
    chrome.storage.sync.get('percentage', function(data) {

        console.log(data.percentage)

        // Redirect the user to Duck Duck Go
        var d = Math.random();
        //console.log(d)
        if(d < data.percentage){
            //console.log('Yeeey!')
            window.location = 'https://www.duckduckgo.com?q='+query
        }

    });

}
