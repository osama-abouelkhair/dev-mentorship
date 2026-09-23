# مرشد

واجهة عربية لحجز جلسات إرشاد وتطوير مهارات مجانية للمبرمجين والخريجين، مبنية بـ React وVite ومتكاملة مع Clerk.

## التشغيل

```bash
cp .env.example .env.local
npm install
npm run dev
```

ضع مفتاح Clerk القابل للنشر في `VITE_CLERK_PUBLISHABLE_KEY`. من دون المفتاح يعمل الموقع في وضع المعاينة.
