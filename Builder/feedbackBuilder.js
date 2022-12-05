import { FeedbackModel } from "../Models/feedbackModel.js"

class FeedbackArrayBuilder {
    constructor(jsonData) {
        this.jsonData = jsonData
    }

    build() {
        let feedbackArray = []
        for (let i = 0; i < (this.jsonData.length); i++) {
            feedbackArray[i] = new FeedbackBuilder(this.jsonData[i]).build()
        }
        return feedbackArray;
    }
}

class FeedbackBuilder {
    constructor(jsonData) {
        this.feedbackInfo = jsonData.feedbackInfo
        this.feedbackId = jsonData.feedbackId
    }

    build() {
        let feedbackModel = new FeedbackModel(this.feedbackId,this.feedbackInfo);
        return feedbackModel;
    }
}

export { FeedbackBuilder, FeedbackArrayBuilder }