import Footer from "../Components/Footer";
import Logo from "../assets/icons/logo-transparent-bg-w.svg";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="py-5">
            <div className="row">
              <div className="col-lg-12">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-50 h-50 d-flex mx-auto"
                />
              </div>
              <div className="col-lg-12">
                <div>
                  <h4 className="fw-bold">Privacy Policy</h4>
                  <p>
                    Antrak Exports LLC (&#34;Antrak Export&#34;, &#34;we&#34;,
                    &#34;us&#34;, or &#34;our&#34;) respects your privacy and is
                    committed to protecting it through our compliance with this
                    privacy policy. This privacy policy describes the types of
                    information we may collect from you or that you may provide
                    when you visit our website and our practices for collecting,
                    using, maintaining, protecting, and disclosing that
                    information. Please read this privacy policy carefully to
                    understand our policies and practices regarding your
                    information and how we will treat it. If you do not agree
                    with our policies and practices, your choice is not to use
                    our website. By accessing or using this website, you agree
                    to this privacy policy. This privacy policy may change
                    sometimes. Your continued use of this Website after we make
                    changes is deemed acceptable, so please check the privacy
                    policy periodically for updates.
                  </p>
                  <h4 className="fw-bold">Information We Collect</h4>
                  <p>
                    We collect several types of information from and about users
                    of our website. This includes information:
                  </p>
                  <ul>
                    <li>
                      By which you may be personally identified, such as name,
                      postal address, e-mail address, telephone number, or any
                      other identifier by which you may be contacted online or
                      offline (&#34;personal information&#34;).
                    </li>
                    <li>
                      That is about you but individually does not identify you,
                      such as your usage details, IP addresses, and information
                      collected through cookies and other tracking technologies.
                    </li>
                    <li>
                      About your internet connection, the equipment you use to
                      access our website, and usage details.
                    </li>
                  </ul>
                  <p>We collect this information:</p>
                  <ul>
                    <li>Directly from you when you provide it to us. </li>
                    <li>
                      Automatically as you navigate through the site.
                      Information collected automatically may include usage
                      details, IP addresses, and information collected through
                      cookies, web beacons, and other tracking technologies.
                    </li>
                  </ul>
                  <h4 className="fw-bold">Use of Information</h4>
                  <p>
                    We use information that we collect about you or that you
                    provide to us, including any personal information:
                  </p>
                  <ul>
                    <li>To present our website and its contents to you.</li>
                    <li>
                      To provide you with information, products, or services
                      that you request from us.
                    </li>
                    <li>
                      To fulfill any other purpose for which you provide it.
                    </li>
                    <li>
                      To carry out our obligations and enforce our rights
                      arising from any contracts entered between you and us,
                      including for billing and collection.
                    </li>
                    <li>
                      To notify you about changes to our website or any products
                      or services we offer or provide though it.
                    </li>
                    <li>
                      In any other way we may describe when you provide the
                      information.
                    </li>
                    <li>For any other purpose with your consent.</li>
                  </ul>
                  <h4 className="fw-bold">Disclosure of Your Information</h4>
                  <p>
                    We may disclose aggregated information about our users, and
                    information that does not identify any individual, without
                    restriction.
                  </p>
                  <p>
                    We may disclose personal information that we collect, or you
                    provide as described in this privacy policy:
                  </p>
                  <ul>
                    <li>
                      To contractors, service providers, and other third parties
                      we use to support our business.
                    </li>
                    <li>
                      To a buyer or other successor in the event of a merger,
                      divestiture, restructuring, reorganization, dissolution,
                      or other sale or transfer of some or all Antrak
                      Exports&#39; assets, whether as a going concern or as part
                      of bankruptcy, liquidation, or similar proceeding, in
                      which personal information held by Antrak Exports about
                      our website users is among the assets transferred.
                    </li>
                    <li>To fulfill the purpose for which you provide it.</li>
                  </ul>
                  <p>We may also disclose your personal information:</p>
                  <ul>
                    <li>
                      To comply with any court order, law, or legal process,
                      including to respond to any government or regulatory
                      request.
                    </li>
                    <li>
                      To enforce or apply our Terms of Use and other agreements,
                      including for billing and collection purposes.
                    </li>
                    <li>
                      If we believe disclosure is necessary or appropriate to
                      protect the rights, property, or safety of Antrak Exports,
                      our customers, or others.
                    </li>
                  </ul>
                  <h4 className="fw-bold">Data Security</h4>
                  <p>
                    We have implemented measures designed to secure your
                    personal information from accidental loss and from
                    unauthorized access, use, alteration, and disclosure.
                    Unfortunately, the transmission of information via the
                    internet is not completely secure. Although we do our best
                    to protect your personal information, we cannot guarantee
                    the security of your personal information transmitted to our
                    website. Any transmission of personal information is at your
                    own risk. We are not responsible for circumvention of any
                    privacy settings or security measures contained on the
                    website.
                  </p>
                  <h4 className="fw-bold">Contact Information</h4>
                  <p>
                    To ask questions or comment about this privacy policy and
                    our privacy practices, contact us at:
                  </p>
                  <p>
                    Call:{" "}
                    <Link to="tel:(941) -276-8532" target="_blank">
                      (941) -276-8532
                    </Link>
                  </p>
                  <p>
                    Email:{" "}
                    <Link to="mailto:antrakexport@gmail.com" target="_blank">
                      antrakexport@gmail.com
                    </Link>
                  </p>
                  <p>
                    Address:{" "}
                    <Link
                      to="https://maps.app.goo.gl/XBwfnoHwdQVNLHac7"
                      target="_blank"
                    >
                      4018 E 12th Avenue Tampa, FL, 33605
                    </Link>
                  </p>
                  <h4 className="fw-bold">Changes to Our Privacy Policy</h4>
                  <p>
                    It is our policy to post any changes we make to our privacy
                    policy on this page. If we make material changes to how we
                    treat our users&#39; personal information, we will notify
                    you by email to the email address specified in your account
                    and/or through a notice on the website home page. The date
                    the privacy policy was last revised is identified at the top
                    of the page. You are responsible for ensuring we have an
                    up-to-date active and deliverable email address for you, and
                    for periodically visiting our website and this privacy
                    policy to check for any changes.
                  </p>
                  <h4 className="fw-bold">Opting Out of Email Marketing</h4>
                  <p>
                    If you no longer wish to receive marketing emails from us,
                    you may opt out by following the instructions contained in
                    each email or contacting us directly at{" "}
                    <Link to="mailto:antrakexport@gmail.com" target="_blank">
                      antrakexport@gmail.com
                    </Link>
                    .
                  </p>
                  <h4 className="fw-bold">No Rights of Third Parties</h4>
                  <p>
                    This privacy policy does not create rights enforceable by
                    third parties. Complaints If you believe that your privacy
                    rights have been violated, you have the right to file a
                    complaint with us. To do so, please contact us at{" "}
                    <Link to="tel:(941) -276-8532" target="_blank">
                      (941) -276-8532
                    </Link>
                    . You also have the right to submit a complaint to the
                    appropriate supervisory authority in your jurisdiction.
                  </p>
                  <h4 className="fw-bold">Language</h4>
                  <p>
                    The original version of this privacy policy is drafted in
                    the English language. In case of any discrepancy between the
                    English version and any translated version, the English
                    version shall prevail.
                  </p>
                  <h4 className="fw-bold">Effective Date</h4>
                  <p>This privacy policy is effective as of 4th April 2024.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Privacy;
