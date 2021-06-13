var reporttype = '';

function sendRequest() {
    document.writeln('<h1> ')
}

function check() {
    const mail = document.getElementById("email").value;
    const textarea = document.getElementById("textarea").value;
    var e = document.getElementById("selected-request-type");
    var selectedreporttype = e.value;
    if (mail === '') {
        console.log("You must mail complete")
        return
    } else if (selectedreporttype === 'Select Type') {
        console.log("You must select report type")
        return
    } else if (textarea === '') {
        console.log("You must text complete")
        return
    } else {
        selectReportType()
    }
}

function selectReportType() {
    var e = document.getElementById("selected-request-type");
    var type = e.value;
    if (type === "1") {
        reporttype = 'Help & Support';
        sendRequest();
    } else if (type === "2") {
        reporttype = 'Bug Reporting';
        sendRequest();
    } else if (type === "3") {
        reporttype = 'Billing';
        sendRequest();
    } else {
        console.log('ERROR 106')
    }
}