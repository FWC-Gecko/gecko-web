import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer bg-primary dark:bg-primaryDark dark:bg-gray-100 text-black dark:text-white">
        <div className="n-container">
          <div className="py-10 sm:py-20 sm:flex justify-between gap-5">
            <div>
              <img src="/img/Logo_Transparency.png" className="h-16" alt="" />
              <p className="footer_text max-w-[300px] mt-5 text-black dark:text-white">
                Staking Max is the leading data provider for staking and
                crypto-growth tools. We are currently tracking
                <span className="text-[#F4BC1D]"> 215 </span> yield-bearing
                assets with an average interest rate of{" "}
                <span className="text-[#F4BC1D]">10.46%</span> and{" "}
                <span className="text-[#F4BC1D]">48801</span> providers.
              </p>
            </div>

            <div className="flex justify-between gap-5 sm:w-1/3">
              <div className="mt-3">
                <h1 className="footer_title ">{t("Quick Links")}</h1>

                <div className="mt-5">
                  <Link to="/stakingReward">
                    <p className="footer_text">{t("Staking Reward")}</p>
                  </Link>
                  <Link to="/cryptoassets">
                    <p className="footer_text">{t("Crypto Asset")}</p>
                  </Link>
                  <Link to="/providers">
                    <p className="footer_text">{t("Staking Providers")}</p>
                  </Link>
                  <Link to="/calculator">
                    <p className="footer_text">{t("Calculator")}</p>
                  </Link>
                  <Link to="/privacy">
                    <p className="footer_text">{t("Privacy")}</p>
                  </Link>
                  <Link to="/journal">
                    <p className="footer_text">{t("Journal")}</p>
                  </Link>
                </div>
              </div>

              <div className="mt-3">
                <h1 className="footer_title">{t("Help")}</h1>

                <div className="mt-5">
                  <p className="footer_text">- {t("Support")}</p>
                  <p className="footer_text">- {t("Teams & Conditions")}</p>
                  <p className="footer_text">- {t("Privacy Policy")}</p>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h1 className="footer_title">{t("Newsletter")}</h1>

              <div className="mt-5">
                <p className="footer_text">
                  {t("Duis aute irure dolor in reprehen derit in velit")}
                </p>
              </div>

              <div className="flex items-center mt-5">
                <input
                  type="text"
                  className="bg-fourth dark:bg-fourthDark border border-fiveth dark:border-fivethDark rounded-3xl px-3 py-1 w-full"
                  placeholder="Enter email address"
                />

                <img
                  src="/img/mail.png"
                  style={{ marginLeft: "-40px" }}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="border-t border-black dark:border-white  py-4 sm:flex justify-between items-center">
            <div className="flex gap-2 justify-center">
              <img src="/img/discord.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/twitter.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="text-center sm:text-right">
              <p className="mt-2">
                {t("Designed and Developed by")}{" "}
                <a
                  href="https://raylancer.co"
                  className="text-decoration-none"
                  target="_blank"
                  without
                  rel="noreferrer"
                  style={{ color: "#CA9E67" }}
                >
                  raylancer.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
