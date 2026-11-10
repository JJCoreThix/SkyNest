const enquiryForm = document.getElementById("enquiryForm");
const packageSelect = document.getElementById("package-interest");
const enquiryResponse = document.getElementById("enquiry-response");
const packageAdviceButton = document.getElementById("get-package-advice");
const packageAdviceSelect = document.getElementById("package-advice-choice");
const packageAdviceResponse = document.getElementById("package-advice-response");

function selectPackageFromLink() {
    const selectedPackage = new URLSearchParams(window.location.search).get("package");
    const packageIsAvailable = Array.from(packageSelect.options, option => option.value)
        .includes(selectedPackage);

    if (packageIsAvailable) {
        packageSelect.value = selectedPackage;
    }
}

function checkEnquiry(event) {
    event.preventDefault();
    enquiryResponse.textContent =
        "Your enquiry has been checked. This demonstration form does not send or store enquiries.";
}

function showPackageAdvice() {
    const adviceByPackage = {
        "Premium Stay": "Private studio apartment, weekly cleaning service, utilities and high-speed internet included, access to all facilities, and a monthly community events pass. From [Monthly price to be confirmed] / month.",
        "Standard Stay": "Private bedroom in a shared apartment, fortnightly cleaning, utilities included, access to co-working space, and shared kitchen and lounge. From [Monthly price to be confirmed] / month.",
        "Short-Term Stay": "Flexible booking for 1-4 weeks, furnished room, utilities included, and limited access to shared facilities. From [Weekly price to be confirmed] / week.",
        "Custom Packages": "Available for corporate bookings, long-term stays, and residents with accessibility needs. Price available on enquiry."
    };
    const selectedAdvice = adviceByPackage[packageAdviceSelect.value];

    packageAdviceResponse.textContent =
        selectedAdvice || "Please choose a package first.";
}

if (enquiryForm && packageSelect && enquiryResponse) {
    selectPackageFromLink();
    enquiryForm.addEventListener("submit", checkEnquiry);
}

if (packageAdviceButton && packageAdviceSelect && packageAdviceResponse) {
    packageAdviceButton.addEventListener("click", showPackageAdvice);
}
