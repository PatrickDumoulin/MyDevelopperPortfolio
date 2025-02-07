import { useRouter } from 'next/router';

const LanguageSelector = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const changeLanguage = (e) => {
    const newLocale = e.target.value;
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <select
      onChange={changeLanguage}
      value={locale}
      className="bg-black/30 text-white border border-white/20 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-accent cursor-pointer"
    >
      <option value="en" className="bg-black text-white">EN</option>
      <option value="fr" className="bg-black text-white">FR</option>
    </select>
  );
};

export default LanguageSelector; 