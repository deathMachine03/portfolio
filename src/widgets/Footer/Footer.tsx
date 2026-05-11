import {
    faTelegram,
    faYoutube,
    faTiktok,
    faYandex,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Footer = () => {
    return (
        <footer className="bg-black text-[#8f8f8f] border-t border-[#1f1f1f]">
            <div className="max-w-[1400px] mx-auto">
                {/* Top */}
                <div className="flex flex-col items-center justify-center py-10 border-b border-[#1f1f1f]">
                    <div className="flex items-center gap-7 mb-5">

                        <button className="hover:text-white transition-colors">
                            <FontAwesomeIcon
                                icon={faTelegram}
                                className="text-[26px]"
                            />
                        </button>

                        <button className="hover:text-white transition-colors">
                            <FontAwesomeIcon
                                icon={faYoutube}
                                className="text-[26px]"
                            />
                        </button>

                        <button className="hover:text-white transition-colors">
                            <FontAwesomeIcon
                                icon={faYandex}
                                className="text-[26px]"
                            />
                        </button>

                        <button className="hover:text-white transition-colors">
                            <FontAwesomeIcon
                                icon={faTiktok}
                                className="text-[26px]"
                            />
                        </button>
                    </div>

                    <p className="text-[20px] leading-[30px] text-center text-[#b3b3b3]">
                        Мы всегда готовы вам помочь.
                    </p>

                    <button className="mt-1 text-white text-[28px] font-medium hover:opacity-80 transition-opacity">
                        Задать вопрос
                    </button>
                </div>

                {/* Bottom */}
                <div className="flex justify-between gap-10 py-10">
                    <div className="flex flex-col gap-4 text-[15px] leading-[22px]">
                        <p>© 2003–2026 Кинопоиск. 18+</p>

                        <p>
                            HBO ® and related service marks are the property of
                            Home Box Office, Inc
                        </p>

                        <p>
                            ТОО «FUNTECH», адрес местонахождения:
                            Республика Казахстан, г. Алматы,
                            проспект Аль-Фараби, дом 11/1
                        </p>

                        <p>
                            Для обращений пользователей:
                            форма обратной связи
                        </p>

                        <div className="flex items-center gap-6">
                            <button className="hover:text-white transition-colors">
                                Соглашение
                            </button>

                            <button className="hover:text-white transition-colors">
                                Справка
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center whitespace-nowrap text-[18px] text-[#b3b3b3]">
            <span className="mr-2">
              Проект компании
            </span>

                        <span className="text-white font-semibold">
              Яндекс
            </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}