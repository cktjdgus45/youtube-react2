class Youtube {
    constructor(key) {
        this.baseurl = "https://www.googleapis.com/youtube/v3";
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        this.key = key;
    }

    async search(query) {
        const response = await fetch(`${this.baseurl}/search?part=snippet&maxResults=25&q=${query}&key=${this.key}`, this.requestOptions);
        const data = await response.json();
        return data;
    }

    async mostPopularVideo() {
        const response = await fetch(`${this.baseurl}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`, this.requestOptions);
        const data = await response.json();
        return data;
    }
}

export default Youtube;