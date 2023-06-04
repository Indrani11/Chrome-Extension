fetch('https://favqs.com/api/qotd')
    .then(data => data.json())
    .then(reminderData => {
        const reminderbody = reminderData.quote.body;
        const reminderElement = document.getElementById('reminderElement');

        reminderElement.innerHTML = reminderbody;

    })