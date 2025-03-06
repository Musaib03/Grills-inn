document.getElementById("submitBtn").addEventListener("click", function () {
	// Define recipient WhatsApp number
	const phoneNumber = "919797632997";

	// Get form values
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const date = document.getElementById("date").value;
	const time = document.getElementById("time").value;

	// Create a formatted message for WhatsApp
	const message = `Hello!\n\nI would like to book a table. Here are my details:\n\n` +
					`🧑 Name: ${name}\n📧 Email: ${email}\n📅 Date: ${date}\n⏰ Time: ${time}\n\nThank you!`;

	// WhatsApp URL with the recipient number
	const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

	// Redirect to WhatsApp
	window.open(whatsappUrl, "_blank");
});
