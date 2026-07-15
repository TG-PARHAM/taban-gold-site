function sendTicket(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    addTicket(name, subject, message);
}

async function addTicket(name, subject, message) {
    await fetch("https://api.github.com/repos/tg-parham/taban-gold-site/dispatches", {
        method: "POST",
        headers: {
            "Accept": "application/vnd.github.v3+json",
            "Content-Type": "application/json",
            "Authorization": "Bearer ghp_public_token_here"
        },
        body: JSON.stringify({
            event_type: "add-ticket",
            client_payload: {
                name: name,
                subject: subject,
                message: message
            }
        })
    });

    alert("تیکت با موفقیت ثبت شد");
}
