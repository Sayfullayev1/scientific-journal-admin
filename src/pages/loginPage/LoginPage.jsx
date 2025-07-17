import React, { useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const login = "rrr";
  const password = "rrr";

  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');

  const passwordRef = useRef(null);
  const buttonRef = useRef(null);

  // Определение языка из URL
  const lang = location.pathname.split('/')[1] || 'uz';

  // Переводы
  const translations = {
    ru: {
      title: "Админ Панель",
      subtitle: "Научный журнал",
      loginLabel: "Логин",
      loginPlaceholder: "Введите логин",
      passwordLabel: "Пароль",
      passwordPlaceholder: "Введите пароль",
      button: "Войти",
      error: "Неправильный логин или пароль"
    },
    uz: {
      title: "Admin Panel",
      subtitle: "Ilmiy jurnal",
      loginLabel: "Login",
      loginPlaceholder: "Login kiriting",
      passwordLabel: "Parol",
      passwordPlaceholder: "Parol kiriting",
      button: "Kirish",
      error: "Login yoki parol noto'g'ri"
    },
    en: {
      title: "Admin Panel",
      subtitle: "Scientific Journal",
      loginLabel: "Login",
      loginPlaceholder: "Enter login",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter password",
      button: "Sign in",
      error: "Incorrect login or password"
    }
  };

  const t = translations[lang] || translations.ru;

  const from = location.state?.from?.pathname || '/'

  function handleSubmit(event) {
    event.preventDefault();
    if (inputLogin !== login || inputPassword !== password) {
      setError(t.error);
    } else {
      setError('');
      // ...дальнейшие действия при успешном входе...
      navigate(from, { replace: true });
    }
  }

  const handleLoginChange = (e) => {
    setInputLogin(e.target.value);
    if (error) setError('');
  };

  const handlePasswordChange = (e) => {
    setInputPassword(e.target.value);
    if (error) setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA]">
      <div className="bg-white rounded-[12px] shadow-[0_4px_24px_0px_#00000014] px-10 py-8 w-full max-w-[400px]">
        <h1 className="text-[24px] font-bold text-[#2C5F7C] text-center mb-2">{t.title}</h1>
        <p className="text-center text-[#85929E] text-[14px] font-normal mb-6">{t.subtitle}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[14px] text-[#34495E] mb-2">{t.loginLabel}</label>
            <input
              type="text"
              placeholder={t.loginPlaceholder}
              value={inputLogin}
              onChange={handleLoginChange}
              className="w-full border border-[#e8ecf0] rounded-[6px] px-4 py-3 text-[16px] bg-[#f6f8fa] outline-none focus:border-[#2C5F7C] transition"
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  passwordRef.current?.focus();
                }
              }}
            />
          </div>
          <div className="mb-1">
            <label className="block text-[14px] text-[#34495E] mb-2">{t.passwordLabel}</label>
            <input
              type="password"
              placeholder={t.passwordPlaceholder}
              value={inputPassword}
              onChange={handlePasswordChange}
              className="w-full border border-[#e8ecf0] rounded-[6px] px-4 py-3 text-[16px] bg-[#f6f8fa] outline-none focus:border-[#2C5F7C] transition"
              ref={passwordRef}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  buttonRef.current?.click();
                }
              }}
            />
          </div>

          <div className="h-[30px] flex items-center text-[14px] text-[#FC1D1D] font-semibold">
            {error && error}
          </div>

          <button
            type="submit"
            ref={buttonRef}
            className="w-full bg-[#2C5F7C] text-white text-[14px] font-bold rounded-[6px] py-3 mt-2 hover:bg-[#1a3e5c] transition"
          >
            {t.button}
          </button>
        </form>
      </div>
    </div>
  )
}
