    // emailjs
    //   .sendForm(
    //     import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
    //     import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
    //     "#form",
    //     {
    //       publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
    //     }
    //   )
    //   .then(
    //     () => {
    //       reset();
    //       toast.success("Message sent successfully");
    //     },
    //     () => {
    //       toast.error("Failed to send message");
    //     }
    //   );
      // useEffect(() => emailjs.init(import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY), []);

      // import emailjs from "@emailjs/browser";
// import { useEffect } from "react";

<!-- VITE_EMAIL_JS_PUBLIC_KEY=oJd95zEjJqv5uvk75
VITE_EMAIL_JS_SERVICE_ID=service_j01cevh
VITE_EMAIL_JS_TEMPLATE_ID=template_q2alzng
VITE_RECAPTURE_SITE_KEY=6LdcXLcpAAAAAGnHHfYibERfMwzT8t6wqbqJXVJg
VITE_RECAPTURE_SECRET_KEY=6LdcXLcpAAAAAPNZPLuSIV6pFnfW0vOJrCBl4u6J -->

<!-- import { useState } from "react";
import { Link } from "react-router-dom";
import Image01 from "../assets/images/gallery/image01.jpeg";
import Image02 from "../assets/images/gallery/image02.jpeg";
import Image03 from "../assets/images/gallery/image03.jpeg";
import Image04 from "../assets/images/gallery/image04.jpeg";
import Image05 from "../assets/images/gallery/image05.jpeg";
import Image06 from "../assets/images/gallery/image06.jpeg";
import Image07 from "../assets/images/gallery/image07.jpeg";
import Image08 from "../assets/images/gallery/image08.jpeg";
import Image09 from "../assets/images/gallery/image09.jpeg";
import Image10 from "../assets/images/gallery/image10.jpeg";
import Image11 from "../assets/images/gallery/image11.jpeg";
import Image12 from "../assets/images/gallery/image12.jpeg";
import Image13 from "../assets/images/gallery/image13.jpeg";
import Image14 from "../assets/images/gallery/image14.jpeg";
import Image15 from "../assets/images/gallery/image15.jpeg";
import Image16 from "../assets/images/gallery/image16.jpeg";
import Image17 from "../assets/images/gallery/image17.jpeg";
import Image18 from "../assets/images/gallery/image18.jpeg";
import Image19 from "../assets/images/gallery/image19.jpeg";
import Image20 from "../assets/images/gallery/image20.jpeg";
import Image21 from "../assets/images/gallery/image21.jpeg";
import Image22 from "../assets/images/gallery/image22.jpeg";
import Image23 from "../assets/images/gallery/image23.jpeg";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(Image01);
  const [activeThumbnail, setActiveThumbnail] = useState(Image01);

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
    setActiveThumbnail(image);
  };

  return (
    <>
      <section className="gallery">
        <div className="py-2">
          <Link to="/">Home</Link>
        </div>
        <div className="row g-0 slider">
          <div className="col-12 w-100 h-100">
            <img src={currentImage} className="h-100" alt="Main" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex px-3 thumbnail">
            <div className="thumbnail-container">
              <img
                src={Image01}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image01)}
                className={activeThumbnail === Image01 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image02}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image02)}
                className={activeThumbnail === Image02 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image03}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image03)}
                className={activeThumbnail === Image03 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image04}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image04)}
                className={activeThumbnail === Image04 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image05}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image05)}
                className={activeThumbnail === Image05 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image06}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image06)}
                className={activeThumbnail === Image06 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image07}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image07)}
                className={activeThumbnail === Image07 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image08}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image08)}
                className={activeThumbnail === Image08 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image09}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image09)}
                className={activeThumbnail === Image09 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image10}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image10)}
                className={activeThumbnail === Image10 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image11}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image11)}
                className={activeThumbnail === Image11 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image12}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image12)}
                className={activeThumbnail === Image12 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image13}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image13)}
                className={activeThumbnail === Image13 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image14}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image14)}
                className={activeThumbnail === Image14 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image15}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image15)}
                className={activeThumbnail === Image15 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image16}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image16)}
                className={activeThumbnail === Image16 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image17}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image17)}
                className={activeThumbnail === Image17 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image18}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image18)}
                className={activeThumbnail === Image18 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image19}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image19)}
                className={activeThumbnail === Image19 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image20}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image20)}
                className={activeThumbnail === Image20 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image21}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image21)}
                className={activeThumbnail === Image21 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image22}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image22)}
                className={activeThumbnail === Image22 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image23}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image23)}
                className={activeThumbnail === Image23 ? "active-thumbnail" : ""}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;



section.gallery {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}

section.gallery div.slider {
  width: 100%;
  height: 80%;
}

section.gallery div.slider img {
  width: 100%;
  display: flex;
  margin: 0 auto;
  object-fit: cover;
}

section.gallery div.thumbnail {
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
}

section.gallery div.thumbnail img {
  cursor: pointer;
  opacity: 0.5;
}

section.gallery div.thumbnail div.thumbnail-container img.active-thumbnail,
section.gallery div.thumbnail div.thumbnail-container img:hover {
  background-color: #000;
  opacity: 1;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
} -->

<!--       <div id="container" classNameName="ContentFlow">
        <div
          id="content"
          classNameName="flow"
          style={{ width: "950px", visibility: "visible", height: "460px" }}
        >
          <article
            id="connection"
            className="item blue item-connection  active"
            style={{
              display: "block",
              left: "323px",
              zIndex: 32768,
              visibility: "visible",
            }}
          >
            <div classNameName="item-hd clearfix">
              <h2>Connection</h2>
            </div>
            <div classNameName="item-content">
              <div
                classNameName="state connectShow"
                style={{ display: "block" }}
              >
                <a classNameName="switch on"></a>
                <h3 id="spnWanNetworkName" title="MTN">
                  MTN
                </h3>
                <p>
                  <span id="spnWanConnectState">Connected</span>
                  <span classNameName="roaming hidden">R</span>
                </p>
              </div>
              <div
                classNameName="statusContent"
                id="simCardStatus"
                style={{ textAlign: "center", display: "none" }}
              ></div>
              <p classNameName="warnColor hidden22">
                Slide to use data while roaming. Check with your network
                provider for pricing.
              </p>
              <ul
                classNameName="dashboard connectShow"
                style={{ display: "block" }}
              >
                <li classNameName="chrono">
                  <span className="icon">
                    <span className="hide">Time elapsed</span>
                  </span>
                  <p id="spnConnectTime">0:02:17</p>
                </li>
                <li className="debit">
                  <span className="icon">
                    <span className="hide">Debit</span>
                  </span>
                  <p id="spnWanUsage">0.00&nbsp;KB</p>
                </li>{" "}
              </ul>
              <div className="infos">
                <div
                  className="solidline connectShow"
                  style={{ display: "block" }}
                ></div>
                <ul
                  id="infos-network"
                  className="connectShow"
                  style={{ display: "block" }}
                >
                  <li className="icons">
                    <span className="icon singal4" id="signalImg"></span>
                  </li>{" "}
                  <li
                    className="txt"
                    id="spnWanNetworkType"
                    style={{ fontSize: "40px" }}
                  >
                    4G
                  </li>{" "}
                </ul>{" "}
                <div className="solidline"></div>{" "}
                <ul id="infos-battery">
                  {" "}
                  <li className="icons">
                    {" "}
                    <span id="batteryImg" className="hidden">
                      Battery
                    </span>{" "}
                    <div className="bar">
                      {" "}
                      <div
                        className="progress"
                        style={{ width: "52.4366px", overflow: "hidden" }}
                      ></div>{" "}
                    </div>{" "}
                  </li>{" "}
                  <li className="txt">
                    {" "}
                    <span id="ibatterylvl">92</span>
                    <sup>%</sup>{" "}
                  </li>{" "}
                </ul>{" "}
                <div className="solidline"></div>{" "}
                <ul id="infos-people">
                  {" "}
                  <li className="icons">
                    {" "}
                    <span className="icon people">People</span>{" "}
                  </li>{" "}
                  <li className="txt" id="linkConDevice">
                    {" "}
                    <span id="spnconnectedPerson">2</span>
                    <span className="row">Connected</span>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
            <div className="article-mask"></div>
          </article>
          <article
            id="usage"
            classNameName="red item item-usage  activeNext"
            style={{
              display: "block",
              left: "703px",
              zIndex: 32763,
              visibility: "visible",
            }}
          >
            {" "}
            <div classNameName="item-hd clearfix">
              {" "}
              <h2>Usage</h2>{" "}
              <div
                classNameName="mini-menu-wrap connectShow"
                style={{ display: "block" }}
              >
                {" "}
                <span classNameName="mini-menu">Settings</span>{" "}
                <span classNameName="mini-menu-arrow hide"></span>{" "}
                <ul classNameName="mini-menu-list hide">
                  {" "}
                  <li>
                    {" "}
                    <a
                      href="#usage/usageSettings.html"
                      classNameName="linkPage changePageLink"
                    >
                      Usage Settings
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="javascript:void(0)" id="reset">
                      Clear history
                    </a>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
            <div classNameName="item-content">
              {" "}
              <div
                classNameName="national connectShow"
                style={{ display: "block" }}
              >
                {" "}
                <h3>
                  {" "}
                  <span classNameName="l">Home</span>{" "}
                  <span
                    id="usage_limit_icon"
                    classNameName="usage-icon icon-warning"
                    style={{ display: "none" }}
                  ></span>{" "}
                </h3>{" "}
                <div classNameName="result">
                  {" "}
                  <span id="home_total_usage" style={{ float: "left" }}>
                    0.00&nbsp;KB
                  </span>{" "}
                  <span
                    id="max_usage_sets"
                    style={{ float: "right", display: "none" }}
                  >
                    &nbsp; of &nbsp;<span id="max_usage">0.00&nbsp;KB</span>
                  </span>{" "}
                </div>{" "}
                <div className="bar" style={{ display: "none" }}>
                  {" "}
                  <div className="progress" data-percent="71"></div>{" "}
                </div>{" "}
              </div>{" "}
              <div
                className="national connectShow"
                style={{ display: "block" }}
              >
                {" "}
                <ul className="dashboard">
                  {" "}
                  <li className="bottom">
                    {" "}
                    <span className="icon">
                      {" "}
                      <span className="hide">Downloaded</span>{" "}
                    </span>{" "}
                    <p id="home_curr_download">0.00&nbsp;KB</p>{" "}
                  </li>{" "}
                  <li className="top">
                    {" "}
                    <span className="icon">
                      {" "}
                      <span className="hide">Uploaded</span>{" "}
                    </span>{" "}
                    <p id="home_curr_upload">0.00&nbsp;KB</p>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
              <p className="notAccurateTips hidden">
                Statistics may not be accurate.
              </p>{" "}
              <div
                className="solidline connectShow"
                style={{ display: "block" }}
              ></div>{" "}
              <div
                className="international connectShow"
                style={{ display: "block" }}
              >
                {" "}
                <h3 className="r">
                  Roaming <span className="roaming hidden">R</span>{" "}
                  <span id="roam_total_usage" className="result">
                    0.00&nbsp;KB
                  </span>{" "}
                </h3>{" "}
                <ul className="dashboard">
                  {" "}
                  <li className="bottom">
                    {" "}
                    <span className="icon">
                      {" "}
                      <span className="hide">Downloaded</span>{" "}
                    </span>{" "}
                    <p id="roam_curr_download">0.00&nbsp;KB</p>{" "}
                  </li>{" "}
                  <li className="top">
                    {" "}
                    <span className="icon">
                      {" "}
                      <span className="hide">Uploaded</span>{" "}
                    </span>{" "}
                    <p id="roam_curr_upload">0.00&nbsp;KB</p>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
              <div
                className="solidline connectShow"
                style={{ display: "block" }}
              ></div>{" "}
              <div
                className="national connectShow"
                style={{ display: "block" }}
              >
                {" "}
                <h3 className="r">
                  {" "}
                  <span className="l">Duration</span>{" "}
                  <span
                    id="time_limit_icon"
                    className="usage-icon icon-warning"
                    style={{ display: "none" }}
                  ></span>{" "}
                </h3>{" "}
                <div className="result">
                  {" "}
                  <span id="total_times">0&nbsp;Hrs&nbsp;0&nbsp;Min</span>{" "}
                </div>{" "}
                <ul className="dashboard">
                  {" "}
                  <li className="bottom chrono">
                    {" "}
                    <span className="icon">
                      {" "}
                      <span className="hide">Downloaded</span>{" "}
                    </span>{" "}
                    <p id="curr_times">0&nbsp;Hrs&nbsp;2&nbsp;Min</p>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
              <div
                className="statusContent"
                id="simCardStatus"
                style={{ display: "none" }}
              ></div>{" "}
            </div>{" "}
            <div className="article-mask"></div>
          </article>
          <article
            id="sms"
            classNameName="pink item item-sms "
            style={{
              display: "none",
              left: "551.4px",
              zIndex: 32763,
              visibility: "visible",
            }}
          >
            {" "}
            <div classNameName="sms-list">
              {" "}
              <div classNameName="item-hd clearfix">
                {" "}
                <h2>SMS</h2>{" "}
                <div
                  classNameName="mini-menu-wrap connectShow"
                  style={{ display: "block" }}
                >
                  {" "}
                  <span classNameName="mini-menu"></span>{" "}
                  <span classNameName="mini-menu-arrow hide"></span>{" "}
                  <ul classNameName="mini-menu-list hide">
                    {" "}
                    <li style={{ display: "none" }}>
                      {" "}
                      <a classNameName="delete-all">Delete all</a>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <a href="#sms/smsSetting.html">SMS Settings</a>{" "}
                    </li>{" "}
                    <li classNameName="smsForwarding hidden">
                      {" "}
                      <a href="#sms/smsForwarding.html">SMS Forwarding</a>{" "}
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
              <div
                id="smsContent"
                classNameName="connectShow"
                style={{ display: "block" }}
              >
                {" "}
                <p className="total">
                  {" "}
                  <span id="sms_not_read">0</span>unread of{" "}
                  <span id="sms_count">0</span>{" "}
                </p>{" "}
                <div id="scrollContainer">
                  {" "}
                  <div
                    className="scroll-pane"
                    style={{ overflow: "hidden", padding: 0, width: "301px" }}
                  >
                    {" "}
                    <div
                      className="jspContainer"
                      style={{ width: "301px", height: "334px" }}
                    >
                      <div
                        className="jspPane"
                        style={{
                          padding: "0px",
                          top: "0px",
                          left: "0px",
                          width: "301px",
                        }}
                      >
                        <div id="scrollContent">
                          {" "}
                          <ul id="ContactListTable"></ul>{" "}
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div id="MessageLoadingBkg" style={{ display: "none" }}></div>{" "}
                  <div id="MessageLoading" style={{ display: "none" }}></div>{" "}
                </div>{" "}
                <a
                  className="linkSmsNew button"
                  href="#sms/smsWrite.html?list=inbox&amp;doAction=new"
                >
                  {" "}
                  <span className="sms-icon icon-add"></span>New Message
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="statusContent"
              id="simCardStatus"
              style={{ display: "none" }}
            ></div>{" "}
            <div className="article-mask"></div>
          </article>
          <article
            id="settings"
            classNameName="green item item-settings"
            style={{
              display: "none",
              left: "551.4px",
              zIndex: 32763,
              visibility: "visible",
            }}
          >
            <div classNameName="item-hd clearfix">
              {" "}
              <h2>Settings</h2>{" "}
            </div>{" "}
            <div classNameName="item-content">
              {" "}
              <ul classNameName="settings-list" id="settingsList">
                <li>
                  <a
                    href="#settings/wifiSetting.html"
                    className="changePageLink"
                  >
                    WiFi Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#settings/adminSetup.html"
                    classNameName="changePageLink"
                  >
                    Login Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#settings/profileManagement.html"
                    className="changePageLink"
                  >
                    Profile Management
                  </a>
                </li>
                <li>
                  <a
                    href="#settings/pinManagement.html"
                    classNameName="changePageLink"
                  >
                    PIN Code Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#settings/connectionMode.html"
                    classNameName="changePageLink"
                  >
                    Connection Mode
                  </a>
                </li>
                <li>
                  <a
                    href="#settings/networkSelection.html"
                    classNameName="changePageLink"
                  >
                    Network Mode
                  </a>
                </li>
                <li>
                  <a
                    href="#settings/routerSetting.html"
                    classNameName="changePageLink"
                  >
                    Advanced Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#settings/systemSetting.html"
                    classNameName="changePageLink"
                  >
                    About
                  </a>
                </li>
              </ul>{" "}
            </div>{" "}
            <div classNameName="article-mask"></div>
          </article>
          <article
            id="more"
            classNameName="orange item item-more activePre"
            style={{
              display: "block",
              left: "-57px",
              zIndex: 32763,
              visibility: "visible",
            }}
          >
            <div classNameName="item-hd clearfix">
              {" "}
              <h2>More</h2>{" "}
            </div>{" "}
            <div classNameName="item-content">
              {" "}
              <ul classNameName="more-list" id="moreList">
                <li>
                  <a href="#more/wpsSetting.html" className="changeLink">
                    WPS
                  </a>
                </li>
                <li>
                  <a href="#more/update.html" className="changeLink">
                    Online Update
                  </a>
                </li>
              </ul>{" "}
            </div>{" "}
            <div classNameName="article-mask"></div>
          </article>
        </div>{" "}
        <div id="loading" style={{ display: "none" }}></div>{" "}
      </div> -->

<!-- import Header from "../Components/Header";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import imageGallery from "../Data/gallery.json";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = imageGallery.itemData;

  const slideInVariants = {
    hidden: { y: 100 },
    visible: { y: 0 },
  };

  return (
    <>
      <Header />

      <Navbar />

      <div classNameName="hero-container">
        <div classNameName="hero"></div>
        <div classNameName="hero-text">
          <h2>Gallery</h2>
        </div>
      </div>
      <section classNameName="gallery">
        <div classNameName="container wrapper">
          <div classNameName="py-5">
            <InView triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  exit={{ y: 100 }}
                  variants={slideInVariants}
                  transition={{
                    duration: 2,
                    type: "fade",
                    stiffness: 50,
                  }}
                >
                  <ImageList
                    sx={{ width: "100%", height: "100%", overflow: "hidden" }}
                    variant="masonry"
                    cols={3}
                    gap={15}
                  >
                    {images.map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.img}?w=161&fit=crop&auto=format`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </motion.div>
              )}
            </InView>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
 -->

<!-- import { useState } from "react";
import { Link } from "react-router-dom";
import Image01 from "../assets/images/gallery/image01.jpeg";
import Image02 from "../assets/images/gallery/image02.jpeg";
import Image03 from "../assets/images/gallery/image03.jpeg";
import Image04 from "../assets/images/gallery/image04.jpeg";
import Image05 from "../assets/images/gallery/image05.jpeg";
import Image06 from "../assets/images/gallery/image06.jpeg";
import Image07 from "../assets/images/gallery/image07.jpeg";
import Image08 from "../assets/images/gallery/image08.jpeg";
import Image09 from "../assets/images/gallery/image09.jpeg";
import Image10 from "../assets/images/gallery/image10.jpeg";
import Image11 from "../assets/images/gallery/image11.jpeg";
import Image12 from "../assets/images/gallery/image12.jpeg";
import Image13 from "../assets/images/gallery/image13.jpeg";
import Image14 from "../assets/images/gallery/image14.jpeg";
import Image15 from "../assets/images/gallery/image15.jpeg";
import Image16 from "../assets/images/gallery/image16.jpeg";
import Image17 from "../assets/images/gallery/image17.jpeg";
import Image18 from "../assets/images/gallery/image18.jpeg";
import Image19 from "../assets/images/gallery/image19.jpeg";
import Image20 from "../assets/images/gallery/image20.jpeg";
import Image21 from "../assets/images/gallery/image21.jpeg";
import Image22 from "../assets/images/gallery/image22.jpeg";
import Image23 from "../assets/images/gallery/image23.jpeg";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(Image01);
  const [activeThumbnail, setActiveThumbnail] = useState(Image01);

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
    setActiveThumbnail(image);
  };

  return (
    <>
      <section className="gallery">
        <div className="py-2">
          <Link to="/">Home</Link>
        </div>
        <div className="row g-0 slider">
          <div className="col-4">
            <img src={currentImage} className="h-50" alt="Main" />
          </div>
          <div className="col-4">
            <img src={currentImage} className="h-50" alt="Main" />
          </div>
          <div className="col-4">
            <img src={currentImage} className="h-50" alt="Main" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex px-3 thumbnail">
            <div className="thumbnail-container">
              <img
                src={Image01}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image01)}
                className={activeThumbnail === Image01 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image02}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image02)}
                className={activeThumbnail === Image02 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image03}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image03)}
                className={activeThumbnail === Image03 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image04}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image04)}
                className={activeThumbnail === Image04 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image05}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image05)}
                className={activeThumbnail === Image05 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image06}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image06)}
                className={activeThumbnail === Image06 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image07}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image07)}
                className={activeThumbnail === Image07 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image08}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image08)}
                className={activeThumbnail === Image08 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image09}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image09)}
                className={activeThumbnail === Image09 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image10}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image10)}
                className={activeThumbnail === Image10 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image11}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image11)}
                className={activeThumbnail === Image11 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image12}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image12)}
                className={activeThumbnail === Image12 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image13}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image13)}
                className={activeThumbnail === Image13 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image14}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image14)}
                className={activeThumbnail === Image14 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image15}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image15)}
                className={activeThumbnail === Image15 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image16}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image16)}
                className={activeThumbnail === Image16 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image17}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image17)}
                className={activeThumbnail === Image17 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image18}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image18)}
                className={activeThumbnail === Image18 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image19}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image19)}
                className={activeThumbnail === Image19 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image20}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image20)}
                className={activeThumbnail === Image20 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image21}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image21)}
                className={activeThumbnail === Image21 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image22}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image22)}
                className={activeThumbnail === Image22 ? "active-thumbnail" : ""}
              />
            </div>
            <div className="thumbnail-container">
              <img
                src={Image23}
                alt="thumbnail"
                width={100}
                height={100}
                onClick={() => handleThumbnailClick(Image23)}
                className={activeThumbnail === Image23 ? "active-thumbnail" : ""}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;



 -->


<!-- 90589407 -->