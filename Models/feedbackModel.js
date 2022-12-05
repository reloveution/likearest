import { FeedbackBuilder } from "../Builder/feedbackBuilder.js"
import { FeedbackArrayBuilder } from "../Builder/feedbackBuilder.js"

class FeedbackModel {
    constructor(feedbackId,feedbackInfo) {
        this.feedbackInfo = feedbackInfo
        this.feedbackId = feedbackId
    }

    static feedbackArrayBuilder(jsonData) {
        return new FeedbackArrayBuilder(jsonData)
    }

}

export { FeedbackModel }