function SupportService() {
    return (
        <div className="p-[40px] bg-[#AAE63F] rounded-[30px]">
            <h3 className='text-[46px] font-extrabold leading-[45px] w-[380px] mb-[30px]'>Служба-поддержки</h3>
            <p className='text-[20px] mb-[50px] w-[300px]'>Наш специалист свяжется с вами в ближайшее время и ответит на интересующие вас вопросы.</p>
            <ul className="">
                <li className='text-[14px]'>Телефон для связи</li>
                <li className='mb-[16px] text-[18px]'><a href="tel:8(999)000-00-00" className=''>8(999)000-00-00</a></li>
                <li className='text-[14px]'>Почта для предложений:</li>
                <li className='text-[18px]'><a href="mailto:studentworks@mail.ru" className=''>studentworks@mail.ru</a></li>
            </ul>
        </div>
    )
}

export default SupportService