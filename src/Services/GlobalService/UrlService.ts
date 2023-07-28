class UrlService{
    // private port = 8080;
    // private baseUrl = `http://localhost:${this.port}`;
    // public todo = this.baseUrl + "/api/tasks";
    // public user = this.baseUrl + "/api/users/tasks";
    public taskUrl = 'https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/tasks';
    public userUrl = 'https://randomuser.me/api/?results=10';
    public booksUrl='http://localhost:8080/api/library';
}

const urlService = new UrlService();
export default urlService;