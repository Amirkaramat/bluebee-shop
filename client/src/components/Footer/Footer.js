import React from "react";
import "./Footer.css";
import FooterWidget from "../FooterWidget/FooterWidget";
export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-widgets'>
          <div className='row'>
            <FooterWidget
              title='درباره ما'
              desc='وقتی تازه شروع به یادگیری برنامه نویسی کردم. یکی از مشکلاتی که در فرآیند یادگیری داشتم، کمبود آموزش های خوب با پشتیبانی قابل قبول بود که باعث شد اون موقع تصمیم بگیرم اگر روزی توانایی مالی و فنی قابل قبولی داشتم یک وب سایت برای حل این مشکل راه اندازی کنم! و خب امروز آکادمی آموزش برنامه نویسی سبزلرن به عنوان یک آکادمی خصوصی فعالیت میکنه و این به این معنی هست که هر مدرسی اجازه تدریس در اون رو نداره و باید از فیلترینگ های خاص آکادمی سبزلرن رد شه! این به این معنی هست که ما برامون فن بیان و نحوه تعامل مدرس با دانشجو بسیار مهمه! ما در آکادمی سبزلرن تضمین پشتیبانی خوب و با کیفیت رو به شما میدیم . چرا که مدرسین وب سایت سبزلرن حتی برای پشتیبانی دوره های رایگان شون هم هزینه دریافت میکنند و متعهد هستند که هوای کاربر های عزیز رو داشته باشند !'
            />

            <FooterWidget
              title='آخرین مطالب'
              links={[
                "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون",
                " چگونه پایتون را آپدیت کنیم؟ | آموزش صفر تا صد آپدیت کردن پایتون",
                " آموزش نصب پایتون ( Python ) در در مک، ویندوز و لینوکس | گام به گام و تصویری",
                "   بهترین فریم ورک های فرانت اند | 16 فریم ورک Front end بررسی معایب و مزایا",
                "              معرفی بهترین سایت آموزش جاوا اسکریپت [ تجربه محور ] + آموزش رایگان",
              ]}
              grid={false}
            />
            <FooterWidget
              title='دسترسی سریع'
              links={[
                "دسترسی سریع",
                "آموزش CSS",
                "آموزش جاوا اسکریپت",
                " آموزش بوت استرپ",
                "آموزش ریکت",
                "آموزش پایتون",
              ]}
              grid={true}
            />
          </div>
        </div>
        <div className='footer__copyright'>
          <span className='footer__copyright-text'>
            کلیه حقوق برای آکادمی آموزش برنامه نویسی سبز لرن محفوظ است.
          </span>
        </div>
      </div>
    </footer>
  );
}
