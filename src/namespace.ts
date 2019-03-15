// News api USA
namespace USA {
    interface INews {
        id: number;
        title: string;
        text: string;
        author: string;
    }
    
    class NewsService {
        protected apiurl: string = 'https://news_api_usa_url'
        public getNews() {} // method
    }
}


// News api Ukraine
namespace Ukraine {
    interface INews2 {
        uuid: string;
        title: string;
        body: string;
        author: string;
        date: string;
        imgUrl: string;
    }
    
    class NewsService2 {
        protected apiurl: string = 'https://news_api_2_url'
        public getNews() {} // method get all news
        public addToFavorite() {} // method add to favorites
    }
}