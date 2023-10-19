function sendMail(contactForm) {
    emailjs.send("service_lvndjyh", "template_2odmt7e", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectsummary.value
    })
        .then(
            function (response) {
                console.log("SUCCESS");
            },
            function (error) {
                console.log("FAILED", error);
            });
    return false;
}