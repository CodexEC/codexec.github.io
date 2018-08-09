import React from "react";
import { Helmet } from "react-helmet";
import plantilla from "../../plantilla/index";
import Contador from "../../componentes/contador";
import Tiempo from "../../componentes/tiempo";
import Backer from "../../componentes/backer";
import Paper from "@material-ui/core/Paper";
import A from "../../act/img/0.jpg";
import B from "../../act/img/1.jpg";
import C from "../../act/img/2.jpg";

var start = new Date().getTime();

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Privacidad</title>
      </Helmet>
      <Backer imagenes={[A, B, C]}>
        <Paper
          style={{
            margin: "15px 15px 40px 15px",
            padding: "25px",
            textAlign: "justify",
            backgroundColor: "#bacfb2de"
          }}
          >
          <div>
            <div>Privacidad</div>
            <h1>Priva:</h1>
            <Tiempo elapsed={new Date().getTime() - start} />
            <Contador />
            <h2 className="text-center">Privacy Policy</h2>
            <hr />
            <p>
              Your privacy is critically important to us. At Free Code Camp we
              have a few fundamental principles:
            </p>
            <ol>
              <li>
                We don’t ask you for personal information unless we truly need
                it. (We can’t stand services that ask you for things like your
                gender or income level for no apparent reason.)
              </li>
              <li>
                We don’t share your personal information with anyone except to
                comply with the law, develop our products, or protect our
                rights.
              </li>
              <li>
                Unless you ask us not to (by clicking the button that says "hide
                all my solutions from other people" located on your code
                portfolio), we will share your solutions and progress with the
                public as part of our open data initiative. This is intended for
                academics and researchers to better understand Free Code Camp as
                an educational model.
              </li>
              <li>
                We don’t store personal information on our servers unless
                required for the on-going operation of one of our services.
              </li>
              <li>
                We aim to make it as simple as possible for you to control
                what’s visible to the public, seen by search engines, kept
                private, and permanently deleted. Below is our privacy policy
                which incorporates these goals
              </li>
            </ol>
            <p>
              If you have questions about deleting or correcting your personal
              data please email us at{" "}
              <a href="team@freecodecamp.com">team@freecodecamp.com</a>
            </p>
            <p>
              Free Code Camp Inc. (“<strong>Free Code Camp</strong>”) operates
              several websites including{" "}
              <a href="http://FreeCodeCamp.com/">FreeCodeCamp.com</a>. It is
              Free Code Camp’s policy to respect your privacy regarding any
              information we may collect while operating our websites.
            </p>
            <h3>Website Visitors</h3>
            <p>
              Like most website operators, Free Code Camp collects
              non-personally-identifying information of the sort that web
              browsers and servers typically make available, such as the browser
              type, language preference, referring site, and the date and time
              of each visitor request. Free Code Camp’s purpose in collecting
              non-personally identifying information is to better understand how
              Free Code Camp’s visitors use its website. From time to time, Free
              Code Camp may release non-personally-identifying information in
              the aggregate, e.g., by publishing a report on trends in the usage
              of its website.
            </p>
            <p>
              Free Code Camp also collects potentially personally-identifying
              information like Internet Protocol (IP) addresses for logged in
              users and for users leaving comments on{" "}
              <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a> blogs. Free
              Code Camp only discloses logged in user and commenter IP addresses
              under the same circumstances that it uses and discloses
              personally-identifying information as described below, except that
              blog commenter IP addresses and email addresses are visible and
              disclosed to the administrators of the blog where the comment was
              left.
            </p>
            <h3>Gathering of Personally-Identifying Information</h3>
            <p>
              Many visitors to Free Code Camp’s websites choose to interact with
              Free Code Camp in ways that require Free Code Camp to gather
              personally-identifying information. The amount and type of
              information that Free Code Camp gathers depends on the nature of
              the interaction. For example, we ask visitors who create an
              account for tracking their progress at{" "}
              <a href="http://FreeCodeCamp.com/">FreeCodeCamp.com</a> to provide
              either an email address or sign in with a social media oauth
              service like GitHub. Those who engage in transactions with Free
              Code Camp – by placing job ads, for example – are asked to provide
              additional information, including as necessary the personal and
              financial information required to process those transactions. In
              each case, Free Code Camp collects such information only insofar
              as is necessary or appropriate to fulfill the purpose of the
              visitor’s interaction with Free Code Camp. Free Code Camp does not
              disclose personally-identifying information other than as
              described below. And visitors can always refuse to supply
              personally-identifying information, with the caveat that it may
              prevent them from engaging in certain website-related activities.
            </p>
            <h3>Aggregated Statistics</h3>
            <p>
              Free Code Camp may collect statistics about the behavior of
              visitors to its websites. For instance, Free Code Camp may monitor
              the accounts to try and identify spammers. Free Code Camp may
              display this information publicly or provide it to others.
              However, Free Code Camp does not disclose personally-identifying
              information other than as described below.
            </p>
            <h3>Protection of Certain Personally-Identifying Information</h3>
            <p>
              Free Code Camp discloses potentially personally-identifying and
              personally-identifying information only to those of its employees,
              contractors and affiliated organizations that (i) need to know
              that information in order to process it on Free Code Camp’s behalf
              or to provide services available at Free Code Camp’s websites, and
              (ii) that have agreed not to disclose it to others. Some of those
              employees, contractors and affiliated organizations may be located
              outside of your home country; by using Free Code Camp’s websites,
              you consent to the transfer of such information to them. Free Code
              Camp will not rent or sell potentially personally-identifying and
              personally-identifying information to anyone. Other than to its
              employees, contractors and affiliated organizations, as described
              above, Free Code Camp discloses potentially personally-identifying
              and personally-identifying information only in response to a
              subpoena, court order or other governmental request, or when Free
              Code Camp believes in good faith that disclosure is reasonably
              necessary to protect the property or rights of Free Code Camp,
              third parties or the public at large. If you are a registered user
              of an Free Code Camp website and have supplied your email address,
              Free Code Camp may occasionally send you an email to tell you
              about new features, solicit your feedback, or just keep you up to
              date with what’s going on with Free Code Camp and our products. We
              primarily use our various product blogs to communicate this type
              of information, so we expect to keep this type of email to a
              minimum. If you send us a request (for example via a support email
              or via one of our feedback mechanisms), we reserve the right to
              publish it in order to help us clarify or respond to your request
              or to help us support other users. Free Code Camp takes all
              measures reasonably necessary to protect against the unauthorized
              access, use, alteration or destruction of potentially
              personally-identifying and personally-identifying information.
            </p>
            <h3>Cookies</h3>
            <p>
              A cookie is a string of information that a website stores on a
              visitor’s computer, and that the visitor’s browser provides to the
              website each time the visitor returns. Free Code Camp uses cookies
              to help Free Code Camp identify and track visitors, their usage of
              Free Code Camp website, and their website access preferences. Free
              Code Camp visitors who do not wish to have cookies placed on their
              computers should set their browsers to refuse cookies before using
              Free Code Camp’s websites, with the drawback that certain features
              of Free Code Camp’s websites may not function properly without the
              aid of cookies.
            </p>
            <h3>Business Transfers</h3>
            <p>
              If Free Code Camp, or substantially all of its assets, were
              acquired, or in the unlikely event that Free Code Camp goes out of
              business or enters bankruptcy, user information would be one of
              the assets that is transferred or acquired by a third party. You
              acknowledge that such transfers may occur, and that any acquirer
              of Free Code Camp may continue to use your personal information as
              set forth in this policy.
            </p>
            <h3>Ads</h3>
            <p>
              If in the future we show ads, ads appearing on any of our websites
              may be delivered to users by advertising partners, who may set
              cookies. These cookies allow the ad server to recognize your
              computer each time they send you an online advertisement to
              compile information about you or others who use your computer.
              This information allows ad networks to, among other things,
              deliver targeted advertisements that they believe will be of most
              interest to you. This Privacy Policy covers the use of cookies by
              Free Code Camp and does not cover the use of cookies by any
              advertisers.
            </p>
            <h3>Privacy Policy Changes</h3>
            <p>
              Although most changes are likely to be minor, Free Code Camp may
              change its Privacy Policy from time to time, and in Free Code
              Camp’s sole discretion. Free Code Camp encourages visitors to
              frequently check this page for any changes to its Privacy Policy.
              If you have a{" "}
              <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a> account,
              you should also check your blog’s dashboard for alerts to these
              changes. Your continued use of this site after any change in this
              Privacy Policy will constitute your acceptance of such change.
            </p>
            <p>
              This privacy policy is adopted from the Automattic (Free Code
              Camp){" "}
              <a href="https://automattic.com/privacy/">open source terms</a>{" "}
              and are subject to the{" "}
              <a href="http://creativecommons.org/licenses/by-sa/4.0/">
                {" "}
                Creative Commons Attribution-ShareAlike 4.0 International
                license
              </a>. We thank them for making this available.
            </p>
          </div>
        </Paper>
      </Backer>
    </div>
  );
};

export default plantilla(Index);
