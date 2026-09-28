// ========================================
// NORMAL WHATSAPP NUMBER
// ========================================

const normalWhatsApp = "918890813598";


// ========================================
// SERVICE QUANTITY
// ========================================

const serviceSelect = document.getElementById("service");
const quantityBox = document.getElementById("quantityBox");


function updateQuantity() {

    const service = serviceSelect.value;

    let placeholder = "मात्रा";

    if (service === "क्रेन सेवा") {

        placeholder = "कितने घंटे क्रेन चाहिए?";

    } else if (service === "JCB सेवा") {

        placeholder = "कितने घंटे JCB चाहिए?";

    } else if (service === "लोडर सेवा") {

        placeholder = "कितने घंटे लोडर चाहिए?";

    } else if (service === "ट्रक सेवा") {

        placeholder = "कितने ट्रक चाहिए?";

    } else if (service === "सीमेंट सप्लाई") {

        placeholder = "कितने सीमेंट पैकेट चाहिए?";

    } else if (service === "पत्थर सप्लाई") {

        placeholder = "कितने ट्रक / लोड पत्थर चाहिए?";

    }


    quantityBox.innerHTML = `
        <input
            type="number"
            id="quantity"
            min="1"
            placeholder="${placeholder}"
            required
        >
    `;
}


serviceSelect.addEventListener(
    "change",
    updateQuantity
);


// ========================================
// BOOKING FORM
// ========================================

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        // ================================
        // FORM DATA
        // ================================

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const service =
            document.getElementById("service").value;

        const quantity =
            document.getElementById("quantity").value;

        const date =
            document.getElementById("date").value;

        const time =
            document.getElementById("time").value;

        const location =
            document.getElementById("location").value.trim();

        const message =
            document.getElementById("message").value.trim();


        // ================================
        // VALIDATION
        // ================================

        if (
            !name ||
            !phone ||
            !service ||
            !quantity ||
            !date ||
            !time ||
            !location
        ) {

            alert(
                "कृपया सभी जरूरी जानकारी भरें।"
            );

            return;
        }


        if (!/^[0-9]{10}$/.test(phone)) {

            alert(
                "कृपया सही 10 अंकों का मोबाइल नंबर डालें।"
            );

            return;
        }


        // ================================
        // DATE FORMAT
        // ================================

        const dateObject =
            new Date(date + "T00:00:00");

        const formattedDate =
            dateObject.toLocaleDateString(
                "hi-IN",
                {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric"
                }
            );


        // ================================
        // WHATSAPP MESSAGE
        // ================================

        const whatsappMessage =

`🚜 *कोटड़ी श्याम क्रेन सर्विस*

📋 *नई बुकिंग*

👤 *नाम:* ${name}

📱 *मोबाइल:* ${phone}

🚜 *सेवा:* ${service}

📦 *मात्रा:* ${quantity}

📅 *तारीख:* ${formattedDate}

⏰ *समय:* ${time}

📍 *काम की जगह:* ${location}

📝 *अतिरिक्त जानकारी:*
${message || "कोई अतिरिक्त जानकारी नहीं"}

━━━━━━━━━━━━━━

🙏 *कोटड़ी श्याम क्रेन सर्विस से संपर्क करने के लिए धन्यवाद।*`;


        // ================================
        // WHATSAPP URL
        // ONLY NORMAL WHATSAPP
        // ================================

        const whatsappURL =
            "https://wa.me/" +
            normalWhatsApp +
            "?text=" +
            encodeURIComponent(
                whatsappMessage
            );


        // ================================
        // OPEN WHATSAPP
        // ================================

        window.open(
            whatsappURL,
            "_blank"
        );


        // ================================
        // SUCCESS MESSAGE
        // ================================

        const bookingResult =
            document.getElementById(
                "bookingResult"
            );


        bookingResult.innerHTML = `

            <div class="success-message">

                ✅ Booking details WhatsApp में तैयार हैं।

                <br>

                कृपया WhatsApp में जाकर
                <strong>Send</strong> दबाएँ।

            </div>

        `;

    }
);