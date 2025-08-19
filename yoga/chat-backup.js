/* 
 * Backup của hệ thống chat cũ - Lotus Yoga Studio
 * File này chứa code chat đơn giản trước khi tích hợp AI
 */

// Backup JavaScript cũ
const oldChatSystem = `
function toggleChatPopup() {
    const popup = document.getElementById('chat-popup');
    const isVisible = popup.style.display === 'flex';
    
    if (isVisible) {
        popup.style.transform = 'scale(0.8) translateY(20px)';
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    } else {
        popup.style.display = 'flex';
        setTimeout(() => {
            popup.style.transform = 'scale(1) translateY(0)';
            popup.style.opacity = '1';
        }, 10);
    }
}

function sendQuickMessage(message) {
    addMessage(message, 'user');
    
    setTimeout(() => {
        let reply = '';
        if (message.includes('đăng ký')) {
            reply = 'Tuyệt vời! Bạn có thể đăng ký ngay tại website hoặc gọi cho chúng tôi. Bạn quan tâm đến lớp nào: Yoga Bay, Yoga Sàn, hay Lyra? 🧘‍♀️';
        } else if (message.includes('lịch')) {
            reply = 'Lịch học của chúng tôi: Thứ 2-7: 6:00-21:00, Chủ nhật: 7:00-20:00. Bạn muốn biết lịch chi tiết của lớp nào? 📅';
        } else if (message.includes('giá')) {
            reply = 'Hiện tại chúng tôi đang có ưu đãi khai trương đặc biệt! Vui lòng gọi 097 448 28 47 để biết bảng giá chi tiết nhé. 💝';
        } else if (message.includes('địa chỉ')) {
            reply = 'Studio của chúng tôi tại: 43/12b Hậu Lân 1, Bà Điểm, Hóc Môn, TP.HCM. Bạn có cần chỉ đường không? 🗺️';
        } else {
            reply = 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể. Để được hỗ trợ nhanh hơn, vui lòng gọi 097 448 28 47. 😊';
        }
        addMessage(reply, 'bot');
    }, 1000);
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, 'user');
        input.value = '';
        
        setTimeout(() => {
            addMessage('Cảm ơn bạn đã nhắn tin! Chúng tôi sẽ phản hồi trong thời gian sớm nhất. Để được hỗ trợ ngay lập tức, vui lòng gọi 097 448 28 47. 📞', 'bot');
        }, 1000);
    }
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    
    if (sender === 'user') {
        messageDiv.style.cssText = \`
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            color: white;
            padding: 12px 16px;
            border-radius: 15px 15px 5px 15px;
            margin: 10px 0 10px auto;
            max-width: 80%;
            word-wrap: break-word;
            box-shadow: 0 2px 10px rgba(231, 76, 60, 0.3);
            animation: slideInRight 0.3s ease;
        \`;
    } else {
        messageDiv.style.cssText = \`
            background: white;
            color: #2c3e50;
            padding: 12px 16px;
            border-radius: 15px 15px 15px 5px;
            margin: 10px auto 10px 0;
            max-width: 80%;
            word-wrap: break-word;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            border-left: 3px solid #e74c3c;
            animation: slideInLeft 0.3s ease;
        \`;
    }
    
    messageDiv.innerHTML = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
`;

// Backup HTML chat messages cũ
const oldChatHTML = `
<div style="
    background: white;
    padding: 15px;
    border-radius: 15px;
    margin-bottom: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #e74c3c;
">
    <p style="margin: 0; color: #2c3e50; line-height: 1.5;">
        <strong>Xin chào! 👋</strong><br>
        Chúng tôi là Lotus Yoga Studio. Chúng tôi có thể giúp gì cho bạn hôm nay?
    </p>
</div>

<!-- Quick Actions -->
<div style="margin-top: 15px;">
    <p style="font-size: 14px; color: #7f8c8d; margin-bottom: 10px; font-weight: 600;">Câu hỏi thường gặp:</p>
    <div class="quick-actions">
        <button class="quick-action-btn" onclick="sendQuickMessage('Tôi muốn đăng ký lớp yoga')">
            📋 Đăng ký lớp học
        </button>
        <button class="quick-action-btn" onclick="sendQuickMessage('Lịch học yoga như thế nào?')">
            📅 Lịch học
        </button>
        <button class="quick-action-btn" onclick="sendQuickMessage('Giá cả của các lớp học?')">
            💰 Bảng giá
        </button>
        <button class="quick-action-btn" onclick="sendQuickMessage('Địa chỉ studio ở đâu?')">
            📍 Địa chỉ
        </button>
    </div>
</div>
`;

/* 
 * Hướng dẫn khôi phục hệ thống cũ:
 * 
 * 1. Copy code JavaScript từ oldChatSystem
 * 2. Thay thế phần <script> trong index.html
 * 3. Copy HTML từ oldChatHTML  
 * 4. Thay thế phần chat messages trong index.html
 * 5. Xóa phần cấu hình OpenAI API
 */

console.log('Backup chat system loaded - Use for restoration if needed');
