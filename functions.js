module.exports = {
    createRandamizedFeedbacks: function () {
        var feedbackData = [
            { header: "I like my work environment, and I believe it helps me perform at my best.", feedbackTitle: "Workplace", feedbackPlaceholder: "Anything to add for Workplace?" },
            { header: "I am satisfied with my roles and responsibilities.", feedbackTitle: "Roles and Responsibilities", feedbackPlaceholder: "Anything to add for Roles and Responsibilities?" },
            { header: "I feel like I have a healthy work/life balance.", feedbackTitle: "Work/Life Balance", feedbackPlaceholder: "Anything to add for Roles and Work/Life Balance?" },
            { header: "I feel comfortable working and interacting with the colleagues on my team.", feedbackTitle: "Teamwork", feedbackPlaceholder: "Anything to add for Roles and Teamwork?" },
            { header: "My direct manager gives me necessary support and clear objectives.", feedbackTitle: "Management", feedbackPlaceholder: "Anything to add for Roles and Management?" },
        ]
        return shuffle(feedbackData)

    }
};

function shuffle(array) {
    var currentIndex = array.length, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
