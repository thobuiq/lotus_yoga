# 🧘‍♀️ Lotus Yoga Studio - AI Chat Integration

## 📋 Tổng quan dự án

Dự án tích hợp hệ thống chat AI thông minh sử dụng **GPT-4o với Function Calling** vào website Lotus Yoga Studio để tự động hỗ trợ đăng ký học viên và tư vấn khách hàng 24/7.

## 🎯 Mục tiêu

- ✅ Tự động hóa quy trình đăng ký học viên
- ✅ Cung cấp thông tin chính xác về lịch học, giá cả
- ✅ Thu thập thông tin khách hàng một cách tự nhiên
- ✅ Giảm tải công việc cho nhân viên
- ✅ Cải thiện trải nghiệm khách hàng

## 📁 Cấu trúc file

```
yoga/
├── index.html              # Website chính với AI chat tích hợp
├── chat-config.js          # Cấu hình hệ thống chat
├── chat-demo.html          # Demo chat (không cần API key)
├── chat-backup.js          # Backup hệ thống chat cũ
├── AI_CHAT_SETUP.md        # Hướng dẫn cài đặt chi tiết
└── README.md              # File này
```

## 🚀 Tính năng chính

### 1. AI Chat với GPT-4o
- Hiểu ngữ cảnh tiếng Việt tự nhiên
- Trả lời thông minh, phù hợp với từng tình huống
- Personality thân thiện, chuyên nghiệp

### 2. Function Calling
- **register_student**: Thu thập và xử lý đăng ký học viên
- **get_class_schedule**: Cung cấp lịch học chi tiết
- **get_pricing_info**: Hiển thị bảng giá đầy đủ
- **check_availability**: Kiểm tra chỗ trống

### 3. Giao diện thân thiện
- Responsive design cho mọi thiết bị
- Quick action buttons
- Typing indicator
- Message animations
- Fallback cho Facebook Messenger

## 🛠️ Cài đặt nhanh

### Bước 1: Lấy OpenAI API Key
1. Truy cập [OpenAI Platform](https://platform.openai.com)
2. Tạo tài khoản và lấy API key
3. Đảm bảo có quota cho GPT-4o

### Bước 2: Cấu hình
Mở file `chat-config.js` và cập nhật:
```javascript
openai: {
    apiKey: 'sk-your-actual-api-key-here'
}
```

### Bước 3: Webhook (Tùy chọn)
Để nhận dữ liệu đăng ký:
```javascript
webhook: {
    url: 'https://your-backend.com/webhook',
    enabled: true
}
```

### Bước 4: Test
Mở `chat-demo.html` để test trước khi deploy live.

## 💬 Ví dụ cuộc hội thoại

```
👤 User: Tôi muốn đăng ký lớp yoga
🤖 AI: Tuyệt vời! Để tôi hỗ trợ bạn. Trước tiên, cho tôi biết tên và số điện thoại của bạn nhé?

👤 User: Tên tôi là Nguyễn Văn A, SĐT 0901234567
🤖 AI: Cảm ơn anh A! Anh quan tâm đến loại lớp nào?
- Yoga Bay (Aerial): 200k/buổi
- Yoga Sàn: 150k/buổi  
- Lyra: 250k/buổi

👤 User: Tôi muốn thử Yoga Bay
🤖 AI: Tuyệt! Yoga Bay rất phù hợp. Anh đã từng tập yoga chưa?

[AI tiếp tục thu thập thông tin và tự động đăng ký]
```

## 📊 Dữ liệu thu thập

Mỗi lần đăng ký thành công, hệ thống sẽ gửi JSON:
```json
{
  "type": "student_registration",
  "data": {
    "name": "Nguyễn Văn A",
    "phone": "0901234567",
    "email": "email@example.com",
    "class_type": "yoga_bay",
    "experience": "beginner",
    "schedule_preference": "tối T2,4,6",
    "goals": "giảm stress, tăng sức khỏe"
  },
  "timestamp": "2025-08-19T10:30:00Z"
}
```

## 🔧 Tùy chỉnh

### Thay đổi personality AI
Chỉnh sửa system prompt trong `initializeAIChat()`:
```javascript
content: `Bạn là trợ lý AI của Lotus Yoga Studio...`
```

### Thêm function mới
1. Định nghĩa trong `availableFunctions`
2. Implement trong `handleFunctionCall`
3. Test và deploy

### Cập nhật thông tin studio
Chỉnh sửa `chat-config.js`:
```javascript
studio: {
    name: 'Tên studio mới',
    address: 'Địa chỉ mới',
    // ...
}
```

## 📱 Demo

Mở file `chat-demo.html` để xem demo hoạt động:
- Không cần API key
- Tự động trả lời với dữ liệu mẫu
- Full UI/UX experience

## 🚨 Lưu ý quan trọng

### Bảo mật
- ❌ Không commit API key lên GitHub
- ✅ Sử dụng biến môi trường production
- ✅ Giới hạn rate limiting
- ✅ Validate input từ user

### Performance
- Monitor OpenAI usage và cost
- Cache các response phổ biến
- Implement fallback khi API lỗi

### Privacy
- Tuân thủ GDPR/CCPA nếu cần
- Inform user về data collection
- Secure data transmission (HTTPS)

## 📈 Phát triển tiếp

### Phase 2
- [ ] Integration với CRM/booking system
- [ ] Voice chat support
- [ ] Multi-language support
- [ ] Analytics dashboard

### Phase 3
- [ ] Mobile app integration
- [ ] Advanced AI features
- [ ] Personalization based on history
- [ ] Integration với payment gateway

## 🆘 Troubleshooting

### Chat không hoạt động
1. Kiểm tra API key OpenAI
2. Check browser console errors
3. Verify network connectivity
4. Test với demo mode

### AI trả lời không đúng
1. Review system prompt
2. Update training examples
3. Adjust temperature settings
4. Add more context to functions

### Performance chậm
1. Check OpenAI API status
2. Optimize request payload
3. Implement caching
4. Use streaming responses

## 📞 Support

- 📧 Email: tech@lotusyoga.io.vn
- 📱 Phone: 097 448 28 47
- 💬 Chat: Qua hệ thống AI chat này! 😄

## 📄 License

MIT License - See LICENSE file for details.

---

**🧘‍♀️ Made with ❤️ for Lotus Yoga Studio**

*Bringing technology and wellness together*
