import type { GetStaticProps, NextPage } from "next";
import { useI18n } from "next-localization";
import PageSeo from "components/seo/PageSeo";

import tools from "lib/mock/tools";

const Home: NextPage = () => {
  const { t } = useI18n();
  const tTools = t("tools");
  return (
    <>
      <PageSeo title={t("title")} description={t("description")} />
      <main>
        <h1 className="text-3xl font-bold text-center pb-5">{t("title")}</h1>
        <h2 className="text-2xl italic text-center pb-5">{t("description")}</h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool: any) => {
            return (
              <a href={tool.url} target="_blank" rel="noreferrer" key={tool.name}>
                <li className="border border-gray-200 rounded-lg p-5 hover:border-blue-500 hover:text-blue-500">
                  <h3 className="text-xl font-semibold pb-3">{tool.name}</h3>
                  <p>{tTools[tool.key]}</p>
                </li>
              </a>
            );
          })}
        </ul>

        <p className="text-xl text-blue-500 pt-24 text-center">
          <a
            href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fnext-starter-v2.vercel.app%2F&tab=mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center hover:underline"
          >
            {t("performance")}
          </a>
        </p>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const language = await import(`../locales/${locale}/home.json`);

  return {
    props: {
      lngDict: language.default,
    },
  };
};

export default Home;
