import dateFormat from "dateformat";
export class BasePost {
    constructor(obj) {
        this.title = obj.title;
        this.content = obj.content;
        this.author = obj.author;
    }
}

export class CreatePost extends BasePost {
    constructor(obj) {
        super(obj);
    }
}

export class BaseResponse {
    constructor(obj) {
        this.post_id = obj.post_id
        this.message = obj.message;
        this.author = obj.author;
    }
}

export class CreateResponse extends BaseResponse {
    constructor(obj) {
        super(obj);
    }
}

export class DataPost extends BasePost {
    constructor(obj) {
        super(obj);
        this.id = obj.id;
        this.published_date = obj.published_date && new Date(obj.published_date);
        this.responses_num = obj.responses_num
        this.responses_num = obj.responses ? obj.responses.length : this.responses_num;
        this.responses_list = (obj.responses && obj.responses.map(elem => new DataResponse(elem))) || []
    }
    getFormatPublishedDate() {
        return dateFormat(this.published_date, "yyyy-mm-dd HH:MM:ss")
    }
}

export class DataResponse extends BaseResponse {
    constructor(obj) {
        super(obj);
        this.id = obj.id;
        this.response_date = new Date(obj.response_date);
    }
    getFormatResonseDate() {
        return dateFormat(this.response_date, "yyyy-mm-dd HH:MM:ss")
    }
}