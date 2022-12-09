class FeedbackUtils {

    static sortByDate(feedbacks, order) {
            let tempFeedback
            if (order === 'asc') {
            for (let ii = 0; ii < (feedbacks.length - 1); ii++) {
                for (let i = 0; i < (feedbacks.length - 1); i++) {
                    if (Date.parse(feedbacks[i].feedbackInfo.date) < Date.parse(feedbacks[i+1].feedbackInfo.date)) {
                        tempFeedback = feedbacks[i]
                        feedbacks[i] = feedbacks[i+1]
                        feedbacks[i+1] = tempFeedback
                    }
                }
            } 
            } else {
                for (let ii = 0; ii < (feedbacks.length - 1); ii++) {
                    for (let i = 0; i < (feedbacks.length - 1); i++) {
                        if (Date.parse(feedbacks[i].feedbackInfo.date) > Date.parse(feedbacks[i+1].feedbackInfo.date)) {
                            tempFeedback = feedbacks[i]
                            feedbacks[i] = feedbacks[i+1]
                            feedbacks[i+1] = tempFeedback
                        }
                    }
            }}
            console.log('-----Sort on date------')
            console.log(feedbacks)
    }





}


export { FeedbackUtils }

