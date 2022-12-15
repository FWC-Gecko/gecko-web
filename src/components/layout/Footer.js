import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer bg-[#121318] dark:bg-gray-100 text-white">
        <div className="n-container">
          <div className="py-5 sm:py-10 sm:flex justify-between gap-10">
            <div className="flex items-center justify-start sm:block">
              <img src="/img/logo.png" className="h-20" alt="" />
              <p className="footer_text max-w-[300px] mt-5 sm:mt-0 text-white">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the industry.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 w-full">
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

          <div className="border-t border-[#595959] py-4 sm:flex justify-between items-center">
            <div className="text-center sm:text-right">
              <p>© 2022 Football World Communityt. All rights reserved</p>
            </div>
            <div className="flex gap-2 justify-center mt-4 sm:mt-0">
              <img src="/img/socials/discord.png" alt="" />
              <img src="/img/socials/facebook.png" alt="" />
              <img src="/img/socials/twitter.png" alt="" />
              <img src="/img/socials/instagram.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
