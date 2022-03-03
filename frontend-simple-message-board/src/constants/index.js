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

export class CreateResponse extends BaseResponse{
    constructor(obj) {
        super(obj);
    }
}

export class DataPost extends BasePost {
    constructor(obj) {
        super(obj);
        this.id = obj.id;
        this.published_date = new Date(obj.published_date);
        this.responses_num = obj.responses_num
        this.reponses_list = obj.reponses_list
    }
    getFormatPublishedDate() {
        return dateFormat(this.published_date, "yyyy-mm-dd HH:MM:ss")
    }
}