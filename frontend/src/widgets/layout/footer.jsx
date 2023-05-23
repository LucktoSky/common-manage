import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export function Footer({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography variant="small" className="font-normal text-inherit">
          copyright &copy; {year} {"  "}
          <a
            href={brandLink}
            target="_blank"
            className="transition-colors hover:text-blue-500"
          >
            {brandName}.
          </a>{" All rights reserved. "}
        </Typography>
        
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  brandName: "FUTBOT",
  brandLink: "",
  routes: [
    { name: "Creative Tim", path: "/" },
    { name: "About Us", path: "/presentation" },
    { name: "Blog", path: "/blog" },
    { name: "License", path: "/license" },
  ],
};

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
