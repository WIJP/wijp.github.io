const key = "AIzaSyDkm8oKo8mwiUbh9piWN520x6vRs4ZZTFg";
const channel = "@WatisjeProbleemTV";
var catalog;

class Video {
    constructor(name, keywords, image_url, link_url, upload_date) {
        this.name = name;
        this.keywords = keywords;
        this.image_url = image_url;
        this.link_url = link_url;
        this.upload_date = upload_date;
    }
};

class VideoCatalog {
    constructor(videos) {
        this.list = [];
        for (var video in videos)
            this.list.add(video);
    }
};

const getVideoNames = function() {
    var names = [];
    return names;
};

const loadVideoInfo = function(name) {
    var keywords = [];
    var image_url = "";
    var link_url = "";
    var upload_date = "";
    return new Video(name, keywords, image_url, link_url, upload_date);
};

const loadVideos = function() {
    var videos = [];
    var names = getVideoNames();
    for (var name in names)
        videos.add(loadVideoInfo(name));
    return videos;
};

const loadCatalog = function() {
    return new VideoCatalog(loadVideos());
};

const displayCatalog = function() {
    for (var video in catalog) {
    }
};

const updateCatalog = function() {
    catalog = loadCatalog();
    displayCatalog();
}

document.addEventListener("load", updateCatalog);
