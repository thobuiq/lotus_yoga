# 🤖 Hệ thống Chat AI với GPT-4o - Lotus Yoga Studio

## 🚀 Tổng quan
Hệ thống chat AI thông minh được tích hợp vào website Lotus Yoga Studio với khả năng:
- Tự động tư vấn và hỗ trợ khách hàng 24/7
- Sử dụng GPT-4o với Function Calling để xử lý đăng ký học viên
- Thu thập thông tin chi tiết và gửi về hệ thống quản lý
- Cung cấp thông tin lịch học, giá cả, địa chỉ tự động

## 🛠️ Cài đặt và Cấu hình

### 1. Lấy OpenAI API Key
1. Truy cập [OpenAI Platform](https://platform.openai.com/api-keys)
2. Đăng nhập/Đăng ký tài khoản
3. Tạo API key mới
4. Copy API key

### 2. Cấu hình trong file index.html
Mở file `index.html` và tìm dòng:
```javascript
const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY_HERE';
```
Thay thế `YOUR_OPENAI_API_KEY_HERE` bằng API key thực tế của bạn.

### 3. Cấu hình Webhook (Tùy chọn)
Để nhận thông tin đăng ký qua webhook:
```javascript
const WEBHOOK_URL = 'YOUR_WEBHOOK_URL_HERE';
```
Thay thế bằng URL endpoint của bạn.

### 4. Cấu hình Email (Tùy chọn)
Để gửi email tự động, sử dụng EmailJS:
1. Đăng ký tài khoản [EmailJS](https://www.emailjs.com/)
2. Tạo service và template
3. Cập nhật cấu hình trong `chat-config.js`

## 📋 Function Calling Features

### 1. Đăng ký học viên (`register_student`)
**Mục đích**: Thu thập và xử lý thông tin đăng ký học viên mới

**Thông tin thu thập**:
- Họ tên đầy đủ (bắt buộc)
- Số điện thoại (bắt buộc)  
- Email
- Tuổi
- Trình độ yoga (mới/trung cấp/nâng cao)
- Loại lớp muốn học (bắt buộc)
- Lịch học mong muốn
- Mục tiêu tập yoga
- Tình trạng sức khỏe đặc biệt

**Ví dụ sử dụng**:
```
User: "Tôi muốn đăng ký lớp yoga"
AI: "Tuyệt vời! Để tôi hỗ trợ bạn đăng ký. Trước tiên, cho tôi biết tên của bạn và số điện thoại nhé?"
User: "Tên tôi là Nguyễn Văn A, số điện thoại 0901234567"
AI: "Cảm ơn anh A! Anh quan tâm đến loại lớp nào? Chúng tôi có Yoga Bay, Yoga Sàn, và Lyra."
User: "Tôi muốn thử Yoga Bay"
AI: [Sử dụng function register_student để lưu thông tin]
```

### 2. Xem lịch học (`get_class_schedule`)
**Mục đích**: Cung cấp thông tin lịch học chi tiết

**Tham số**:
- `class_type`: yoga_bay | yoga_san | lyra | all

### 3. Xem bảng giá (`get_pricing_info`)  
**Mục đích**: Hiển thị bảng giá các gói học

**Tham số**:
- `package_type`: single | monthly | quarterly | yearly | all

### 4. Kiểm tra chỗ trống (`check_availability`)
**Mục đích**: Kiểm tra tình trạng chỗ học

**Tham số**:
- `class_type`: Loại lớp học
- `date`: Ngày (định dạng YYYY-MM-DD)
- `time`: Khung giờ

## 🎯 Các tình huống sử dụng

### Tình huống 1: Khách hàng mới hoàn toàn
```
User: "Tôi chưa bao giờ tập yoga, không biết bắt đầu từ đâu"
AI: "Chào mừng bạn đến với thế giới yoga! Cho người mới bắt đầu, tôi khuyên bạn nên..."
[AI sẽ tư vấn phù hợp và dẫn dắt đến đăng ký]
```

### Tình huống 2: So sánh các loại lớp
```
User: "Sự khác biệt giữa Yoga Bay và Yoga Sàn là gì?"
AI: "Tuyệt vời! Để tôi giải thích chi tiết..."
[AI cung cấp thông tin so sánh và đề xuất phù hợp]
```

### Tình huống 3: Đăng ký nhanh
```
User: "Tôi muốn đăng ký lớp Lyra ngay"
AI: "Tuyệt vời! Lyra là môn rất thú vị. Để tôi hỗ trợ bạn đăng ký..."
[AI thu thập thông tin cần thiết và xử lý đăng ký]
```

## 📊 Dữ liệu được thu thập

Mỗi lần đăng ký thành công, hệ thống sẽ gửi dữ liệu JSON như sau:
```json
{
  "type": "student_registration",
  "data": {
    "name": "Nguyễn Văn A",
    "phone": "0901234567", 
    "email": "email@example.com",
    "age": 25,
    "experience": "beginner",
    "class_type": "yoga_bay",
    "schedule_preference": "tối thứ 2, 4, 6",
    "goals": "giảm stress, tăng cường sức khỏe",
    "health_conditions": "không có"
  },
  "timestamp": "2025-08-19T10:30:00Z"
}
```

## 🔧 Tùy chỉnh và Mở rộng

### Thêm function mới
1. Định nghĩa function trong `availableFunctions` array
2. Implement logic trong `handleFunctionCall`
3. Test và deploy

### Cập nhật thông tin studio
Chỉnh sửa file `chat-config.js` để cập nhật:
- Thông tin studio
- Lịch học
- Bảng giá  
- Khuyến mãi

### Tùy chỉnh personality của AI
Chỉnh sửa system prompt trong function `initializeAIChat()` để thay đổi cách AI tương tác.

## 🚨 Lưu ý bảo mật

1. **Không commit API key**: Luôn sử dụng biến môi trường hoặc file config riêng
2. **Rate limiting**: OpenAI có giới hạn request, theo dõi usage
3. **Data validation**: Validate tất cả dữ liệu trước khi xử lý
4. **HTTPS**: Đảm bảo website chạy trên HTTPS

## 📞 Hỗ trợ

Nếu gặp vấn đề:
1. Kiểm tra API key OpenAI
2. Kiểm tra console browser để xem lỗi
3. Verify webhook URL (nếu sử dụng)
4. Test với message đơn giản trước

## 🎉 Tính năng nổi bật

- ✅ Xử lý tiếng Việt tự nhiên
- ✅ Function calling thông minh
- ✅ Thu thập thông tin từng bước
- ✅ Tự động gửi dữ liệu
- ✅ Fallback khi có lỗi
- ✅ Responsive trên mobile
- ✅ Typing indicator
- ✅ Quick action buttons
- ✅ Message animations

---

🧘‍♀️ **Chúc bạn thành công với Lotus Yoga Studio!** 🧘‍♂️
