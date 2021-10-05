import { useRouter } from "next/router";
import Link from "next/link";
import { namespace } from "locales/namespace";

const Navbar = () => {
  const { asPath, locale, locales, defaultLocale } = useRouter();

  const langsRoutes = locales
    ?.map((loc: string) => {
      const { flag }: any = namespace[loc];

      return {
        route: defaultLocale !== loc ? `/${loc}${asPath}` : asPath,
        loc,
        flag,
      };
    })
    .filter(({ loc }) => loc !== locale);

  return (
    <header className="flex items-center justify-between py-10">
      <p className="text-2xl font-semibold">
        <Link href="/" passHref>
          next-starter v2
        </Link>
      </p>

      <ul>
        {langsRoutes?.map(({ route, loc, flag }) => (
          <Link key={route} href={route} locale={loc}>
            {flag}
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
