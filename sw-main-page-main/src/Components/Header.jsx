import logo from '../assets/icons/logo.svg';

function Header() {
    const navLinks = [
        'О нас',
        'Топ проекты',
        'Направления',
        'Отзывы',
        'FAQ'
    ];
  return (
    <header className='py-4 bg-white'>
        <div className="flex flex-row justify-between items-center max-w-7xl mx-auto my-0">
            <a href="#"><img src={logo} alt="logo image" /></a>
            <nav>
                <ul className='flex flex-row justify-between items-center text-sm font-semibold last-child:mr-[0px]'>
                    {navLinks.map((link, id) => {return <li className='.nav__list__item mr-8' key={id}><a href="#" className='link'>{link}</a></li>})}
                </ul>
            </nav>
            <div className="flex flex-row justify-between items-center">
                <button className='py-5 px-10 rounded-2xl text-sm font-semibold bg-[#D0D0D4] text-black cursor-pointer border-none'>Войти</button>
                <button className='py-5 px-10 rounded-2xl text-sm font-semibold bg-[#232524] text-white cursor-pointer border-none'>Регистрация</button>
            </div>
        </div>
    </header>
  )
}

export default Header