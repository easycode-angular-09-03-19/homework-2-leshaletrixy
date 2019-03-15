// News api USA
var USA;
(function (USA) {
    class NewsService {
        constructor() {
            this.apiurl = 'https://news_api_usa_url';
        }
        getNews() { } // method
    }
})(USA || (USA = {}));
// News api Ukraine
var Ukraine;
(function (Ukraine) {
    class NewsService2 {
        constructor() {
            this.apiurl = 'https://news_api_2_url';
        }
        getNews() { } // method get all news
        addToFavorite() { } // method add to favorites
    }
})(Ukraine || (Ukraine = {}));
