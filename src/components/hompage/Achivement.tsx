const Achivement = () => {
  return (
    <div
      className="w-full  mt-[144px] px-[346px] py-16 h-[546px] "
      style={{ backgroundImage: 'url("/Avesta achievements.png")' }}
    >
      <div className=" flex py-3 px-[3px] gap-x-[176px] ">
        <div className="w-1/2 h-[394px] ">
          <div className="h-full pr-[62px] relative " dir="ltr">
            <img
              src="/Ellipse 4.png"
              className="absolute top-[149px] left-[241px] right-[90.35px] bottom-[123.3px] transform -translate-x-1/2    "
            />
            <div className="absolute top-[13px] left-[152px] right-[188px] bottom-[307px] flex flex-col justify-center items-center  text-shadow-[0px_4px_4px_rgba(0,0,0,0.5)] ">
              <div className="text-purpel-6  text-[32px]">+1453</div>
              <div className="text-purpel-7 text-[20px]">فرند کشتی</div>
            </div>
            <div className="absolute flex flex-col justify-center items-center top-[50px] left-[345px] right-[14px] bottom-[238px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]">
              <div className="text-purpel-6  text-[32px]">+6106</div>
              <div className="text-purpel-7 text-[20px]">ثبت واگن</div>
            </div>
            <div className="absolute flex flex-col justify-center items-center top-[308px] left-[143px] right-[197px] bottom-[12px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]">
              <div className="text-purpel-6  text-[32px]">+56419603</div>
              <div className="text-purpel-7 text-[20px]">تناژ تخلیه تاکنون</div>
            </div>
            <div className="absolute flex flex-col justify-center items-center  top-[259px] left-[338px] right-[7px] bottom-[61px]  text-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]">
              <div className="text-purpel-6  text-[32px]">+872</div>
              <div className="text-purpel-7 text-[20px]">ثبت کامیون</div>
            </div>
            <div className="absolute flex flex-col justify-center items-center  top-[154px] left-[43px] right-[248px] bottom-[166px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]">
              <div className="text-purpel-6  text-[32px]">+138</div>
              <div className="text-purpel-7 text-[20px]">صاحبان کالا</div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-y-6">
          <span className="text-[32px] font-bold text-black-1">
            دستاوردهای شرکت <span className="text-orange-1"> اَوستا‌ </span>
            هوش‌یار
          </span>
          <p className="text-[20px] text-black-1 text-justify">
            شرکت اوستا هوش‌یار با فعالیت گسترده در حوزه حمل‌ونقل، توانسته است
            نقش برجسته‌ای در صنعت حمل‌ونقل کشور ایفا کند. آمارهای به‌دست‌آمده
            نشان‌دهنده توان عملیاتی بالای این شرکت در جابه‌جایی بار، مدیریت
            بهینه ناوگان، و جلب اعتماد صاحبان کالا است. بررسی این داده‌ها نشان
            می‌دهد که اوستا باربندر در مسیر رشد و توسعه پایدار قرار دارد.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achivement;
