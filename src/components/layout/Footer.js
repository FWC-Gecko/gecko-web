import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer bg-primary dark:bg-primaryDark dark:bg-gray-100 text-white">
        <div className="n-container">
          <div className="py-10 sm:py-20 sm:flex justify-between gap-10">
            <div>
              <img src="/img/logo.png" className="h-20" alt="" />
              <p className="footer_text max-w-[300px] mt-5 text-white">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the industry.
              </p>
            </div>

            <div className="flex justify-between gap-5 w-full">
              <div className="mt-3">
                <h1 className="footer_title">{t("Products")}</h1>

                <div className="mt-5">
                  <p className="footer_text">- {t("Blockchain Explorer")}</p>
                  <p className="footer_text">- {t("Crypto API")}</p>
                  <p className="footer_text">- {t("Crypto Indices")}</p>
                  <p className="footer_text">- {t("Jobs Board")}</p>
                  <p className="footer_text">- {t("Sitemap")}</p>
                </div>
              </div>
              <div className="mt-3">
                <h1 className="footer_title">{t("Company")}</h1>

                <div className="mt-5">
                  <p className="footer_text">- {t("Blockchain Explorer")}</p>
                  <p className="footer_text">- {t("Crypto API")}</p>
                  <p className="footer_text">- {t("Crypto Indices")}</p>
                  <p className="footer_text">- {t("Jobs Board")}</p>
                  <p className="footer_text">- {t("Sitemap")}</p>
                </div>
              </div>
              <div className="mt-3">
                <h1 className="footer_title">{t("Support ")}</h1>

                <div className="mt-5">
                  <p className="footer_text">- {t("Blockchain Explorer")}</p>
                  <p className="footer_text">- {t("Crypto API")}</p>
                  <p className="footer_text">- {t("Crypto Indices")}</p>
                  <p className="footer_text">- {t("Jobs Board")}</p>
                  <p className="footer_text">- {t("Sitemap")}</p>
                </div>
              </div>
              <div className="mt-3">
                <h1 className="footer_title">{t("Socials")}</h1>

                <div className="mt-5">
                  <p className="footer_text">- {t("Blockchain Explorer")}</p>
                  <p className="footer_text">- {t("Crypto API")}</p>
                  <p className="footer_text">- {t("Crypto Indices")}</p>
                  <p className="footer_text">- {t("Jobs Board")}</p>
                  <p className="footer_text">- {t("Sitemap")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-black dark:border-white  py-4 sm:flex justify-between items-center">
            <div className="text-center sm:text-right">
              <p>© 2022 Football World Communityt. All rights reserved</p>
            </div>
            <div className="flex gap-2 justify-center">
              <img src="/img/discord.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/twitter.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
