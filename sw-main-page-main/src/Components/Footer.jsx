import logo from '../assets/icons/logo-footer.svg'

function Footer() {
    return (
        <div className="bg-white">
            <div className="rounded-t-[80px] bg-[#232524]">
                <div className="max-w-7xl mx-auto my-0 py-[100px] flex flex-row justify-between">
                    <img src={logo} alt="" />
                    <ul className='text-white'>
                        <li className='text-[24px] font-semibold mb-[16px]'>О нас</li>
                        <li className='text-[16px] mb-[16px]'><a href="#">О проекте</a></li>
                        <li className='text-[16px] mb-[16px]'><a href="#">Пользовательское соглашение</a></li>
                        <li className='text-[16px]'><a href="#">Политика конфиденциальности</a></li>
                    </ul>
                    <ul className='text-white'>
                        <li className='text-[24px] font-semibold mb-[16px]'>Сообщество</li>
                        <li className='text-[16px] mb-[16px]'><a href="#">Блог</a></li>
                        <li className='text-[16px]'><a href="#">Новости</a></li>
                    </ul>
                    <ul className='text-white'>
                        <li className='text-[24px] font-semibold mb-[16px]'>Полезное</li>
                        <li className='text-[16px] mb-[16px]'><a href="#">Студентам</a></li>
                        <li className='text-[16px]'><a href="#">Работадателям</a></li>
                    </ul>
                    <ul className='text-white'>
                        <li className='text-[24px] font-semibold mb-[16px]'>Помощь</li>
                        <li className='text-[16px] mb-[16px]'><a href="#">Вопрос-ответ</a></li>
                        <li className='text-[16px]'><a href="#">Служба-поддержки</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer