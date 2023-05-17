function CallbackForm() {
    return (
        <form action="#" className="bg-[#D0D0D4] rounded-[30px] p-[40px] flex flex-row items-end">
            <div className="flex flex-col">
                <h3 className='text-[45px] font-extrabold leading-[35px] mb-[40px]'>Задайте нам вопрос</h3>
                <label htmlFor="full-name">
                    <input type="text" name="full-name" id='full-name' placeholder='Ваше ФИО' className='rounded-[30px] pl-[17px] py-[20px] w-[358px] mb-[17px]'/>
                </label>
                <label htmlFor="email">
                    <input type="email" name="email"  id='email'placeholder='Ваш E-mail' className='rounded-[30px] pl-[17px] py-[20px] w-[358px] mb-[17px]' />
                </label>
                <label htmlFor="comment">
                    <textarea cols="30" name="comment" id='comment' rows="10" placeholder='Комментарий' className='form__msg rounded-[30px] px-[17px] py-[20px] w-[358px] h-[122px] resize-none'></textarea>
                </label>
            </div>
            <label className='flex flex-col justify-between items-center'>
                <button type="sumbit" className='rounded-[40px] bg-white px-[58px] py-[20px] mb-[4px]'>Отправить</button>
                <p className='text-[10px] block w-[198px] text-center'>Отправляя данные, вы соглашаетесь с Политикой Конфиденциальности.</p>
            </label>
        </form>
    )    
}

export default CallbackForm