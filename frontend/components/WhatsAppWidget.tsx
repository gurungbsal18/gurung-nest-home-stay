import { FloatingWhatsApp } from "@digicroz/react-floating-whatsapp"

function WhatsAppWidget() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+9779700941788"
        accountName="Gurung Nest Home Stay"
        avatar="/images/logo-mark-white.png"
        statusMessage="Typically replies within 1 hour"
        chatMessage="Hello! 👋 How can we help you today?"
        darkMode={true}
        allowClickAway={false}
        allowEsc={true}
        notification={true}
        notificationSound={true}
      />
    </div>
  )
}
export default WhatsAppWidget
