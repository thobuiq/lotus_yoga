// Chat Configuration for Lotus Yoga Studio
// Cấu hình chat AI cho Lotus Yoga Studio

const CHAT_CONFIG = {
    // OpenAI Configuration
    openai: {
        apiKey: 'YOUR_OPENAI_API_KEY_HERE', // Thay thế bằng API key thực tế
        model: 'gpt-4o',
        temperature: 0.7,
        maxTokens: 1000
    },
    
    // Webhook Configuration
    webhook: {
        url: 'YOUR_WEBHOOK_URL_HERE', // URL để gửi thông tin đăng ký
        enabled: false // Bật/tắt webhook
    },
    
    // Email Configuration (optional)
    email: {
        serviceId: 'YOUR_EMAILJS_SERVICE_ID', // EmailJS service ID
        templateId: 'YOUR_EMAILJS_TEMPLATE_ID', // EmailJS template ID  
        userId: 'YOUR_EMAILJS_USER_ID', // EmailJS user ID
        enabled: false // Bật/tắt gửi email
    },
    
    // Studio Information
    studio: {
        name: 'Lotus Yoga Studio',
        address: '43/12b Hậu Lân 1, Bà Điểm, Hóc Môn, TP.HCM',
        phone: '097 448 28 47',
        email: 'info@lotusyoga.io.vn',
        hours: 'T2-T7: 6:00-21:00, CN: 7:00-20:00',
        website: 'https://lotusyoga.io.vn'
    },
    
    // Class Information
    classes: {
        yoga_bay: {
            name: 'Yoga Bay (Aerial)',
            description: 'Yoga trên không với sự hỗ trợ của dây lụa, giúp giãn cột sống và tăng cường sức mạnh',
            price: {
                single: 200000,
                monthly: 2000000,
                quarterly: 5400000,
                yearly: 19200000
            },
            schedule: [
                'Thứ 2, 4, 6: 6:30-7:30, 18:30-19:30, 20:00-21:00',
                'Thứ 3, 5, 7: 7:00-8:00, 19:00-20:00', 
                'Chủ nhật: 8:00-9:00, 16:00-17:00'
            ]
        },
        yoga_san: {
            name: 'Yoga Sàn',
            description: 'Yoga truyền thống trên thảm với các phong cách Hatha, Vinyasa, Yin',
            price: {
                single: 150000,
                monthly: 1500000,
                quarterly: 4050000,
                yearly: 14400000
            },
            schedule: [
                'Hatha Yoga: T2,T4,T6 - 6:00-7:00, 17:30-18:30',
                'Vinyasa Flow: T3,T5,T7 - 6:30-7:30, 18:00-19:00',
                'Yin Yoga: T7,CN - 19:30-20:30'
            ]
        },
        lyra: {
            name: 'Lyra (Aerial Hoop)',
            description: 'Múa trên vòng tròn kết hợp yoga và acrobatics',
            price: {
                single: 250000,
                monthly: 2500000,
                quarterly: 6750000,
                yearly: 24000000
            },
            schedule: [
                'Cơ bản: T3,T5 - 19:00-20:00',
                'Nâng cao: T2,T6 - 20:00-21:00',
                'Workshop cuối tuần: CN 14:00-16:00'
            ]
        },
        private: {
            name: 'Học riêng (Private)',
            description: 'Lớp học cá nhân 1-1 với giáo viên',
            price: {
                single: 500000
            },
            schedule: [
                'Linh hoạt theo lịch của học viên và giáo viên'
            ]
        }
    },
    
    // Promotions
    promotions: {
        grand_opening: {
            name: 'Khuyến mãi khai trương',
            description: 'Giảm 20% cho gói 3 tháng đầu',
            discount: 0.2,
            valid_until: '2025-12-31',
            active: true
        }
    },
    
    // Chat Settings
    chat: {
        showTypingDelay: 1000, // Độ trễ hiển thị "đang gõ..."
        autoReplyDelay: 1500, // Độ trễ auto reply
        maxMessageLength: 1000, // Độ dài tối đa tin nhắn
        enableFallback: true // Bật chế độ fallback khi API lỗi
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAT_CONFIG;
} else {
    window.CHAT_CONFIG = CHAT_CONFIG;
}
