import { siteMetadata } from "data/siteMetadata";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="pb-10">
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800" />
      </div>
      <div className="pb-10 text-center">
        <span>{siteMetadata.author}</span>
        <span> - </span>
        <span>{currentYear}©️</span>
      </div>
    </footer>
  );
};

export default Footer;
