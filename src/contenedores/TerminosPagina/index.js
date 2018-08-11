import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import Top from "../../plantilla/top";
import Bot from "../../plantilla/bot";
import Backer from "../../componentes/backer";
// import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import A from "../../act/img/0.jpg";
import B from "../../act/img/1.jpg";
import C from "../../act/img/2.jpg";

/* const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 8 * 3,
    marginBottom: "40px",
    background: "red",
    height: "100%",
    width: "100%",
    position: "absolute"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "15px 15px 40px 15px"
  }
}); */

function Index() {
  // const { classes } = props;

  return (
    <div>
      <Helmet>
        <title>Términos de uso</title>
      </Helmet>
      <CssBaseline />
      <Top titulo="Términos de Uso" />
      <Backer imagenes={[C, B, A]}>
            <Paper
              style={{
                margin: "15px 15px 40px 15px",
                padding: "25px",
                textAlign: "justify",
                backgroundColor: "#a2afac"
              }}
              >
              <div>
              <h2 style={{textAlign: "center"}}>Términos de uso</h2>
              <hr />
              <h3>The gist:</h3>
              <p>We (the <a href="http://FreeCodeCamp.com/about/">folks that run Free Code Camp's open source community</a>) would <strong>love</strong> for you to use it. Our community is free, and our service is designed to give you as much control and ownership over the code you write as possible, and encourage you to express yourself freely. However, be responsible in what you publish. In particular, make sure that none of the prohibited items (like spam, viruses, or serious threats of violence) appear on your website. If you find anything on Free Code Camp that you believe violates these Terms of Service, please email us at <a href="team@freecodecamp.com">team@freecodecamp.com</a></p>
              <h3>Terms of Service:</h3>
              <p>The following terms and conditions govern all use of the <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a> website and all content, services, and products available at or through the website - taken together, our Services. Our Services are offered subject to your acceptance without modification of all of the terms and conditions contained herein and all other operating rules, policies (including, without limitation, <a href="http://freecodecamp.com/privacy/">Free Code Camp's Privacy Policy</a>) and procedures that may be published from time to time by Free Code Camp (collectively, the “Agreement”). You agree that we may automatically upgrade our Services, and these terms will apply to any upgrades. Your agreement is with Free Code Camp Inc. Please read this Agreement carefully before accessing or using our Services. By accessing or using any part of our services, you agree to become bound by the terms and conditions of this agreement. If you do not agree to all the terms and conditions of this agreement, then you may not access or use any of our services. If these terms and conditions are considered an offer by Free Code Camp, acceptance is expressly limited to these terms. Our Services are not directed to children younger than 13, and access and use of our Services is only offered to users 13 years of age or older. If you are under 13 years old, please do not register to use our Services. Any person who registers as a user or provides their personal information to our Services represents that they are 13 years of age or older. Use of some aspects of our Services may require a <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a> account. You agree to provide us with complete and accurate information when you register for an account. You will be solely responsible and liable for any activity that occurs under your username. You are responsible for keeping your password secure.</p>
              <h4>1. <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a>.</h4>
              <ul>
              <li><strong>Your <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a> Account and Website.</strong> If you create a website on <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a>, you are responsible for maintaining the security of your account and website, and you are fully responsible for all activities that occur under the account and any other actions taken in connection with the website. You must immediately notify Free Code Camp of any unauthorized uses of your website, your account, or any other breaches of security. Free Code Camp will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.</li>
              <li><strong>Responsibility of Contributors.</strong> If you operate a website, comment on a website, post material to <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a>, post links on <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a>, or otherwise make (or allow any third party to make) material available (any such material, “Content”), you are entirely responsible for the content of, and any harm resulting from, that Content or your conduct. That is the case regardless of what form the Content takes, which includes, but is not limited to text, photo, video, audio, or code. By using <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a>, you represent and warrant that your Content and conduct do not violate these terms or the <a href="http://FreeCodeCamp.com/code-of-conduct/">Code of Conduct</a>. By submitting Content to Free Code Camp for inclusion on your website, you grant Free Code Camp a world-wide, royalty-free, and non-exclusive license to reproduce, modify, adapt and publish the Content solely for the purpose of displaying, distributing, and promoting your website. This license allows Free Code Camp to make publicly-posted content available to third parties selected by Free Code Camp (through the Free Code Camp Firehose, for example) so that these third parties can analyze and distribute (but not publicly display) your content through their services. You also give other <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a> users permission to share your Content on other <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a> websites and add their own Content to it (aka to reblog your Content), so long as they use only a portion of your post and they give you credit as the original author by linking back to your website. If you delete Content, Free Code Camp will use reasonable efforts to remove it from <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a>, but you acknowledge that caching or references to the Content may not be made immediately unavailable. Without limiting any of those representations or warranties, Free Code Camp has the right (though not the obligation) to, in Free Code Camp’s sole discretion, (i) refuse or remove any content that, in Free Code Camp’s reasonable opinion, violates any Free Code Camp policy or is in any way harmful or objectionable, or (ii) terminate or deny access to and use of <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a> to any individual or entity for any reason. Free Code Camp will have no obligation to provide a refund of any amounts previously paid.</li>
              <li><strong>Attribution.</strong> Free Code Camp reserves the right to display attribution links such as ‘Website at <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a>,’ theme author, and font attribution in your website footer or toolbar.</li>
              </ul>
              <h4>4. Responsibility of Visitors.</h4>
              <p>Free Code Camp has not reviewed, and cannot review, all of the material, including computer software, posted to our Services, and cannot therefore be responsible for that material’s content, use or effects. By operating our Services, Free Code Camp does not represent or imply that it endorses the material there posted, or that it believes such material to be accurate, useful, or non-harmful. You are responsible for taking precautions as necessary to protect yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content. Our Services may contain content that is offensive, indecent, or otherwise objectionable, as well as content containing technical inaccuracies, typographical mistakes, and other errors. Our Services may also contain material that violates the privacy or publicity rights, or infringes the intellectual property and other proprietary rights, of third parties, or the downloading, copying or use of which is subject to additional terms and conditions, stated or unstated. Free Code Camp disclaims any responsibility for any harm resulting from the use by visitors of our Services, or from any downloading by those visitors of content there posted.</p>
              <h4>5. Content Posted on Other Websites.</h4>
              <p>We have not reviewed, and cannot review, all of the material, including computer software, made available through the websites and webpages to which <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a> links, and that link to <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a>. Free Code Camp does not have any control over those non-FreeCodeCamp.com websites, and is not responsible for their contents or their use. By linking to a non-FreeCodeCamp.com website, Free Code Camp does not represent or imply that it endorses such website. You are responsible for taking precautions as necessary to protect yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content. Free Code Camp disclaims any responsibility for any harm resulting from your use of non-FreeCodeCamp.com websites and webpages.</p>
              <h4>6. Copyright Infringement and DMCA Policy.</h4>
              <p>As Free Code Camp asks others to respect its intellectual property rights, it respects the intellectual property rights of others. If you believe that material located on or linked to by <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a> violates your copyright, you are encouraged to notify Free Code Camp in accordance with <a href="http://FreeCodeCamp.com/dmca-notice/">Free Code Camp’s Digital Millennium Copyright Act (“DMCA”) Policy</a>. Free Code Camp will respond to all such notices, including as required or appropriate by removing the infringing material or disabling all links to the infringing material. Free Code Camp will terminate a visitor’s access to and use of the Website if, under appropriate circumstances, the visitor is determined to be a repeat infringer of the copyrights or other intellectual property rights of Free Code Camp or others.</p>
              <h4>7. Intellectual Property.</h4>
              <p>This Agreement does not transfer from Free Code Camp to you any Free Code Camp or third party intellectual property, and all right, title, and interest in and to such property will remain (as between the parties) solely with Free Code Camp. Free Code Camp, <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a>, the <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a> logo, and all other trademarks, service marks, graphics and logos used in connection with <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a> or our Services, are trademarks or registered trademarks of Free Code Camp or Free Code Camp’s licensors. Other trademarks, service marks, graphics and logos used in connection with our Services may be the trademarks of other third parties. Your use of our Services grants you no right or license to reproduce or otherwise use any Free Code Camp or third-party trademarks.</p>
              <h4>10. Changes.</h4>
              <p>We are constantly updating our Services, and that means sometimes we have to change the legal terms under which our Services are offered. If we make changes that are material, we will let you know by posting on one of our websites, or by sending you an email or other communication before the changes take effect. The notice will designate a reasonable period of time after which the new terms will take effect. If you disagree with our changes, then you should stop using our Services within the designated notice period. Your continued use of our Services will be subject to the new terms. However, any dispute that arose before the changes shall be governed by the Terms (including the binding individual arbitration clause) that were in place when the dispute arose.</p>
              <h4>11. Termination.</h4>
              <p>Free Code Camp may terminate your access to all or any part of our Services at any time, with or without cause, with or without notice, effective immediately. If you wish to terminate this Agreement or your <a href="http://FreeCodeCamp.com">FreeCodeCamp.com</a> account (if you have one), you may simply discontinue using our Services. All provisions of this Agreement which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
              <h4>12. Disclaimer of Warranties.</h4>
              <p>Our Services are provided “as is.” Free Code Camp and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. Neither Free Code Camp nor its suppliers and licensors, makes any warranty that our Services will be error free or that access thereto will be continuous or uninterrupted. If you’re actually reading this, we praise your diligence and concern. We'd be better off as a civilization if more people cared like you do. You understand that you download from, or otherwise obtain content or services through, our Services at your own discretion and risk.</p>
              <h4>13. Limitation of Liability.</h4>
              <p>In no event will Free Code Camp, or its suppliers or licensors, be liable with respect to any subject matter of this Agreement under any contract, negligence, strict liability or other legal or equitable theory for: (i) any special, incidental or consequential damages; (ii) the cost of procurement for substitute products or services; (iii) for interruption of use or loss or corruption of data; or (iv) for any amounts that exceed the fees paid by you to Free Code Camp under this agreement during the twelve (12) month period prior to the cause of action. Free Code Camp shall have no liability for any failure or delay due to matters beyond their reasonable control. The foregoing shall not apply to the extent prohibited by applicable law.</p>
              <h4>14. General Representation and Warranty.</h4>
              <p>You represent and warrant that (i) your use of our Services will be in strict accordance with the Free Code Camp Privacy Policy, with this Agreement, and with all applicable laws and regulations (including without limitation any local laws or regulations in your country, state, city, or other governmental area, regarding online conduct and acceptable content, and including all applicable laws regarding the transmission of technical data exported from the United States or the country in which you reside) and (ii) your use of our Services will not infringe or misappropriate the intellectual property rights of any third party.</p>
              <h4>15. US Economic Sanctions.</h4>
              <p>You expressly represent and warrant that your use of our Services and or associated services and products is not contrary to applicable U.S. Sanctions. Such use is prohibited, and Free Code Camp reserve the right to terminate accounts or access of those in the event of a breach of this condition.</p>
              <h4>16. Indemnification.</h4>
              <p>You agree to indemnify and hold harmless Free Code Camp, its contractors, and its licensors, and their respective directors, officers, employees, and agents from and against any and all claims and expenses, including attorneys’ fees, arising out of your use of our Services, including but not limited to your violation of this Agreement.</p>
              <h4>17. Translation.</h4>
              <p>These Terms of Service were originally written in English (US). We may translate these terms into other languages. In the event of a conflict between a translated version of these Terms of Service and the English version, the English version will control.</p>
              <h4>18. Miscellaneous.</h4>
              <p>This Agreement constitutes the entire agreement between Free Code Camp and you concerning the subject matter hereof, and they may only be modified by a written amendment signed by an authorized executive of Free Code Camp, or by the posting by Free Code Camp of a revised version. Except to the extent applicable law, if any, provides otherwise, this Agreement, any access to or use of our Services will be governed by the laws of the state of California, U.S.A., excluding its conflict of law provisions, and the proper venue for any disputes arising out of or relating to any of the same will be the state and federal courts located in San Francisco County, California. Except for claims for injunctive or equitable relief or claims regarding intellectual property rights (which may be brought in any competent court without the posting of a bond), any dispute arising under this Agreement shall be finally settled in accordance with the Comprehensive Arbitration Rules of the Judicial Arbitration and Mediation Service, Inc. (“JAMS”) by three arbitrators appointed in accordance with such Rules. The arbitration shall take place in San Francisco, California, in the English language and the arbitral decision may be enforced in any court. The prevailing party in any action or proceeding to enforce this Agreement shall be entitled to costs and attorneys’ fees. If any part of this Agreement is held invalid or unenforceable, that part will be construed to reflect the parties’ original intent, and the remaining portions will remain in full force and effect. A waiver by either party of any term or condition of this Agreement or any breach thereof, in any one instance, will not waive such term or condition or any subsequent breach thereof. You may assign your rights under this Agreement to any party that consents to, and agrees to be bound by, its terms and conditions; Free Code Camp may assign its rights under this Agreement without condition. This Agreement will be binding upon and will inure to the benefit of the parties, their successors and permitted assigns.</p>
              <p>These terms are adopted from the Automattic (WordPress) <a href="https://github.com/Automattic/legalmattic">open source terms</a> and are subject to the <a href="http://creativecommons.org/licenses/by-sa/4.0/"> Creative Commons Attribution-ShareAlike 4.0 International license</a>. We thank them for making this available.</p>
              </div>
            </Paper>
      </Backer>
      <Bot />
    </div>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Index;
