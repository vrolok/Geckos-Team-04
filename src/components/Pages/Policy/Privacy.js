import React from 'react';
import styled from 'styled-components';
import Layout from '../../Layout/Layout';

export const PolicySnap = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 48px;

  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  -webkit-font-smoothing: anti-aliased;

  @media (min-width: 482px) {
    max-width: 449px;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 701px) {
    max-width: 668px;
  }

  @media (min-width: 1026px) {
    max-width: 946px;
  }

  > h2 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    margin-top: 32px;
  }

  > p {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  ul {
    list-style-type: disc;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: #009fd9;
  }
`;

export const PolicyTitle = styled.h1`
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;

  @media (min-width: 701px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const Policy = () => (
  <PolicySnap>
    <PolicyTitle>Privacy Policy</PolicyTitle>

    <p>
      <em>Last Updated: October 24, 2016</em>
    </p>

    <p>
      Thumbtack, Inc. ("Thumbtack," "we," "our," or "us") values your privacy. In this Privacy
      Policy ("Policy"), we describe the information we collect, how we use it, and when and with
      whom we share it. This Policy applies to all sites, mobile applications, and other online
      services (collectively, "Platform") made available by Thumbtack. This Policy applies only to
      information collected on or through the Platform. It does not apply to information collected
      or obtained by or through any other means (including, without limitation, information
      collected offline, in person, over the telephone and/or by mail, or from third parties outside
      the Platform). Undefined capitalized terms used herein shall have the definitions as set forth
      in our <a href="http://www.thumbtack.com/terms">Terms of Use</a>. By accessing or using the
      Platform, you agree to this Policy. IF YOU DO NOT AGREE TO THIS POLICY, PLEASE DO NOT ACCESS
      OR USE THE PLATFORM.
    </p>

    <h3>KEY TERMS</h3>

    <p>
      Please review the <a href="/terms/#key-terms">"Key Terms" section in the Terms of Use</a>.
    </p>

    <h3>INFORMATION WE COLLECT</h3>

    <p>
      How we collect and store information depends on how you access and use the Platform. We
      collect information in multiple ways including when you provide information directly to us,
      when you permit third parties to provide information to us, and when we passively collect
      information from you, such as information collected from your browser or device.
    </p>

    <p>
      <em>Information You Provide Directly to Us</em>
    </p>

    <p>We may collect information from you during your use or access of the Platform, such as:</p>

    <ul>
      <li>When you register for an Account;</li>
      <li>When you participate in polls or surveys;</li>
      <li>When you enroll for electronic newsletters;</li>
      <li>When you request a quote or other information;</li>
      <li>When you submit or respond to a quote;</li>
      <li>When you make a purchase;</li>
      <li>When you fill out any forms;</li>
      <li>When you enter a sweepstakes or contest, or register for a promotion;</li>
      <li>When you transmit User Content;</li>
      <li>When you download or use one of our mobile applications; or</li>
      <li>When you otherwise communicate with us or other users through the Platform.</li>
    </ul>

    <p>
      This list is illustrative, not exhaustive; the Privacy Policy applies to <em>all</em> use of
      the Platform.
    </p>
    <p>
      The information you provide directly to us may concern you or others and may include, but is
      not limited to: (a) name; (b) zip code; (c) email address; (d) home or business telephone
      number; (e) home, business or mailing address; (f) demographic information (e.g., gender, age,
      political preference, education, race or ethnic origin, and other information relevant to user
      surveys and/or offers); (g) date of birth; (h) insurance information; (i) photographs; (j)
      information about your project, request or need; (k) video or audio files; (l) in certain
      circumstances, payment and/or identity verification information. and/or (m) any other content
      you include in private communications with other users through the Platform or communications
      with us. It may also include information specific to services you are requesting or offering
      through the Platform, such as a business name, service description, qualifications and
      credentials. You are not required to provide us with such information, but certain features of
      the Platform may not be accessible or available, absent the provision of the requested
      information.
    </p>

    <p>
      <em>
        Information from Affiliates, Social Networking Sites, and other Non-affiliated Third Parties
      </em>
    </p>

    <p>
      We may collect information about you or others through Thumbtack affiliates or through
      non-affiliated third parties. For example, you may be able to access the Platform through a
      social networking account, such as Facebook. If you access the Platform through your Facebook
      account, you may allow us to have access to certain information in your Facebook profile. This
      may include your name, profile picture, gender, networks, user IDs, list of friends, location,
      date of birth, email address, photos, videos, people you follow and/or who follow you, and/or
      your posts or "likes."
    </p>

    <p>
      Social networking sites, such as Facebook, have their own policies for handling your
      information. For a description of how these sites may use and disclose your information,
      including any information you make public, please consult the sites' privacy policies. We have
      no control over how any third-party site uses or discloses the personal information it
      collects about you.
    </p>

    <p>
      We may also collect information about you or others through non-affiliated third parties. For
      example, to the extent permitted by law, we may, in our sole discretion, ask for and collect
      supplemental information from third parties, such as information about your credit from a
      credit bureau, or information to verify your identity or trustworthiness, or for other fraud
      or safety protection purposes. We may combine information that we collect from you through the
      Platform with information that we obtain from such third parties and information derived from
      any other products or services we provide.
    </p>

    <p>
      <em>Information That is Passively or Automatically Collected</em>
    </p>

    <p>
      <em>Device/Usage Information.</em> We and our third-party service providers, which include ad
      networks and analytics companies including DoubleClick and Google Analytics, may use cookies,
      web beacons, and other tracking technologies to collect information about the computers or
      devices (including mobile devices) you use to access the Platform. As described further below,
      we may collect and analyze information including but not limited to (a) browser type; (b) ISP
      or operating system; (c) domain name; (d) access time; (e) referring or exit pages; (f) page
      views; (g) IP address; (h) unique device identifiers (e.g. IDFA or Android ID); and (i) the
      type of device that you use. We may also track how frequently you access or use the Platform.
      We use this information (including the information collected by our third-party service
      providers) for Platform analytics (including to determine which portions of the Platform are
      used most frequently and what our users like/do not like), to assist in determining relevant
      advertising (both on and off the Platform), to evaluate the success of our advertising
      campaigns, and as otherwise described in this Policy.
    </p>

    <p>
      <em>Location Information.</em> When you use the Platform, we may collect general location
      information (such as IP address). If you install our mobile app, we may ask you to grant us
      access to your mobile device's geolocation data. If you grant such permission, we may collect
      information about your precise geolocation, and we may use that information to improve the
      Platform, including providing you with location-based features (e.g. for identification of Pro
      Services available near you). To deliver customized content and advertising, we may share your
      location information with our agents, vendors, or advertisers. If you access the Platform
      through a mobile device and you do not want your device to provide us with location-tracking
      information, you can disable the GPS or other location-tracking functions on your device,
      provided your device allows you to do this. See your device manufacturer's instructions for
      further details. If you disable certain functions, you may be unable to use certain parts of
      the Platform.
    </p>

    <p>
      <em>Cookies and Other Electronic Technologies.</em>
      We and our third-party service providers may use cookies, clear GIFs, pixel tags, and other
      technologies that help us better understand user behavior, personalize preferences, perform
      research and analytics, and improve the Platform. These technologies, for example, may allow
      us to tailor the Platform to your needs, save your password in password-protected areas, track
      the pages you visit, help us manage content, and compile statistics about Platform usage. We
      also use certain of these technologies to deliver advertisements through the Platform that may
      interest you. We or our third-party service providers also may use certain of these
      technologies in emails to our customers to help us track email response rates, identify when
      our emails are viewed, and track whether our emails are forwarded.
    </p>

    <p>
      We may also use local shared objects (also known as "Flash cookies") to assist in delivering
      special content, such as video clips or animation. Flash cookies are stored on your device,
      but they are not managed through your web browser. To learn more about how to manage Flash
      cookies, you can visit the Adobe website and make changes at the Global Privacy Settings
      Panel.
    </p>

    <p>
      You can choose to accept or decline cookies. Most web browsers automatically accept cookies,
      but your browser may allow you to modify your browser settings to decline cookies if you
      prefer. If you disable cookies, you may be prevented from taking full advantage of the
      Platform, because it may not function properly. Flash cookies operate differently than browser
      cookies, and cookie management tools available in a web browser may not affect flash cookies.
      As we adopt additional technologies, we may also gather additional information through other
      methods.
    </p>

    <h3>HOW THUMBTACK USES THE INFORMATION WE COLLECT</h3>
    <p>We may use your information for any of the following reasons:</p>
    <ul>
      <li>For the purposes for which you provided it;</li>
      <li>
        To enable you to use the services available through the Platform, including registering you
        for our services and verifying your identity and authority to use our services;
      </li>
      <li>For customer support and to respond to your inquiries;</li>
      <li>For internal record-keeping purposes;</li>
      <li>To administer surveys, sweepstakes, promotions, or contests;</li>
      <li>
        To process billing and payment including sharing with third-party payment gateways and
        payment service providers in connection with the Platform;
      </li>
      <li>To improve and maintain the Platform and for product development;</li>
      <li>
        To address fraud or safety concerns, or to investigate complaints or suspected fraud or
        wrongdoing;
      </li>
      <li>
        To periodically send promotional emails regarding new products from Thumbtack, special
        offers from Thumbtack, or other information that may interest you;
      </li>
      <li>
        With your consent, to contact you by text message regarding certain services or information
        you have requested;
      </li>
      <li>
        With your consent, to contact you by telephone or text message regarding Platform features,
        improvements, or other products and services that may interest you;
      </li>
      <li>
        For Thumbtack's market research purposes, including, but not limited to, the customization
        of the Platform according to your interests;
      </li>
      <li>
        To contact you about goods and services that may interest you or with information about your
        use of the Platform;
      </li>
      <li>For other research and analytical purposes; and</li>
      <li>
        To resolve disputes, to protect ourselves and other users of the Platform, and to enforce
        any legal terms that govern your use of the Platform.
      </li>
    </ul>

    <p>
      We may combine information that we collect from you through the Platform with information that
      we obtain from affiliated and nonaffiliated third parties, and information derived from any
      other products or services we provide.
    </p>

    <p>
      We may aggregate and/or de-identify information collected through the Platform. We may use
      de-identified or aggregated data for any purpose, including without limitation for research
      and marketing purposes and may also share such data with any third parties, including without
      limitation, advertisers, promotional partners, sponsors, event promoters, and/or others.
    </p>

    <p>
      We may, either directly or through third parties we engage to provide services to us, review,
      scan, or analyze your communications with other users exchanged via the Platform for fraud
      prevention, risk assessment, regulatory compliance, investigation, product development,
      research and customer support purposes. For example, as part of our fraud prevention efforts,
      we may scan and analyze messages to prevent fraud or improper actions. We may also scan,
      review or analyze messages for research and product development purposes, as well as to debug,
      improve and expand product offerings. By using the Platform, you consent that Thumbtack, in
      its sole discretion, may, either directly or through third parties we engage to provide
      services to us, review, scan, analyze, and store your communications, whether done manually or
      through automated means.
    </p>

    <h3>WHEN THUMBTACK DISCLOSES YOUR INFORMATION</h3>

    <p>
      Unless otherwise described in this Policy, we may also share the information that we collect
      from you through the Platform as follows:
    </p>

    <ul>
      <li>
        <em>Affiliates.</em> We may share your information with any Thumbtack affiliates.
      </li>
      <li>
        <em>Consent.</em> We may disclose your information to nonaffiliated third parties based on
        your consent to do so. Such consent includes the disclosure of your information (a) in order
        to provide services or products that you have requested (please see below for more details);
        (b) when we have your permission; or (c) as described in this Policy, the Terms of Use, or
        any other legal terms governing your use of the Platform.
      </li>
      <li>
        <em>Service Providers</em>. We may provide access to your information to select third
        parties who perform services on our behalf. These third parties provide a variety of
        services to us including without limitation billing, sales, marketing, advertising, market
        research, fulfillment, data storage, analysis and processing, identity verification, fraud
        and safety protection and legal services. As we retain new service providers, we generally
        seek contractual assurances from these service providers that they will not use your
        information in any manner other than to help us provide you with the services and products
        available from Thumbtack.
      </li>
      <li>
        <em>Legal Requirements</em>. We may disclose your information when required by law or when
        we believe in good faith that such disclosure is necessary to: (a) comply with subpoenas,
        court orders, or other legal process we receive; (b) establish or exercise our legal rights
        including enforcing and administering agreements with users; or (c)defend Thumbtack against
        legal claims.If we are required by law to disclose your information, we will use
        commercially reasonable efforts to notify you unless (a) we believe in our sole discretion
        that providing notice could create a risk of injury or death, or that harm or fraud could be
        directed to Thumbtack or users; or (b) we are precluded from providing notice by law. We
        will attempt to provide the notice by email if you have given us an email address. If you do
        not challenge the disclosure request, we may be legally required to turn over your
        information.
      </li>

      <li>
        <em>Protection of Thumbtack and Others</em>. We may disclose your information when we
        believe it appropriate to investigate, prevent, or take action regarding possible illegal
        activities, suspected fraud, situations involving potential threats to the physical safety
        of any person, violations of the Terms of Use or any other legal terms governing use of the
        Platform, and/or to protect our rights and property and the rights and property of other
        users.
      </li>

      <li>
        <em>Business Transfers</em>. As we continue to develop our business, we may sell, buy, merge
        or partner with other companies or businesses, or sell some or all of our assets. In such
        transactions or where there is any change of control of Thumbtack, user information may be
        among the transferred assets.
      </li>

      <li>
        <em>App Store Providers</em>. We may provide your identity and mobile device identifier to
        third-party app store providers (for example, the Apple App Store) to allow you to download
        our mobile apps.
      </li>

      <li>
        <em>Academics and Research</em>. We may provide information about users to third parties for
        academic and research purposes, in anonymized or aggregated form.
      </li>
    </ul>

    <p>
      Please be advised that some information you provide will be publicly accessible. For instance,
      registration for an Account requires that you provide us with your name. If you register
      through Facebook, the Platform will use the name associated with your Facebook account. Your
      name (full name, or in some instances, your first name and last initial) may be visible to
      other users. Depending on the circumstances, your name may be attached to your Content or
      information, such as scheduling of Pro Services, service requests, reviews, participating in
      discussions or forums, messaging, and profile information. Certain other people, including
      other users with whom you have interacted via the Platform, will see information about you
      that is attached to your name. For example (but without limitation), if you are a Customer
      Member seeking Pro Services, the description you provide of your desired services, along with
      your name, will be shown to some Pro Members registered in the relevant category along with
      your name. Thus, other users may be able to personally identify you based on Content you
      provide.
    </p>

    <p>
      We invite you to post Content on or through our Platform, including, but not limited to, your
      comments,pictures, and any other information. However, please be careful and responsible
      whenever you are online. If you choose to post User Content on or through the Platform, such
      as through Member-to-Member messaging or through our review boards, forums, blogs, or other
      postings, that information: (a) may be or may become publicly available; (b) may be collected
      and used by third parties without our knowledge; and (c) may be used in a manner that may
      violate this Policy, the law, or your personal privacy.
    </p>

    <h3>ONLINE ANALYTICS AND TAILORED ADVERTISING</h3>

    <p>
      <em>Analytics</em>
    </p>

    <p>
      We may use third-party web analytics services on the Platform, such as those of Google
      Analytics. These service providers use the sort of technology described in the Information
      That Is Passively or Automatically Collected section above to help us analyze how users use
      the Platform, including by noting the third-party website from which you arrive. The
      information collected by the technology will be disclosed to or collected directly by these
      service providers, who use the information to evaluate your use of the Platform. We also use
      Google Analytics for certain purposes related to advertising, as described in the following
      section. To prevent Google Analytics from using your information for analytics, you may
      install the
      <a href="https://tools.google.com/dlpage/gaoptout">
        Google Analytics Opt-Out Browser Add-on
      </a>.
    </p>

    <p>
      <em>Tailored Advertising</em>
    </p>

    <p>
      Third parties whose products or services are accessible or marketed via the Platform may also
      place cookies or other tracking technologies on your computer, mobile phone, or other device
      to collect information about your use of the Platform in order to (a) inform, optimize, and
      serve marketing content based on past visits to our websites and other sites and (b) report
      how our marketing content impressions, other uses of marketing services, and interactions with
      these marketing impressions and marketing services are related to visits to our websites. We
      also allow other third parties(e.g., ad networks and ad servers such as Google Analytics,
      DoubleClick, Facebook and others) to serve tailored marketing to you and to access their own
      cookies or other tracking technologies on your computer, mobile phone, or other device you use
      to access the Platform. We neither have access to, nor does this Policy govern, the use of
      cookies or other tracking technologies that may be placed on your computer, mobile phone, or
      other device you use to access the Platform by non-affiliated, third-party ad technology, ad
      servers, ad networks or any other non-affiliated third parties. Those parties that use these
      technologies may offer you a way to opt out of targeted advertising as described below. You
      may receive tailored advertising on your computer through a web browser. Cookies may be
      associated with de-identified data linked to or derived from data you voluntarily have
      submitted to us (e.g., your email address) that we may share with a service provider in
      hashed, non-human-readable form.
    </p>

    <p>
      If you are interested in more information about tailored browser advertising and how you can
      generally control cookies from being put on your computer to deliver tailored marketing, you
      may visit the{' '}
      <a href="http://www.networkadvertising.org/choices">
        Network Advertising Initiative's Consumer Opt-Out Link
      </a>{' '}
      and/or the{' '}
      <a href="http://www.aboutads.info/choices">
        Digital Advertising Alliance's Consumer Opt-Out Link
      </a>{' '}
      to opt-out of receiving tailored advertising from companies that participate in those
      programs. To opt out of Google Analytics for Display Advertising or customize Google Display
      Network ads, you can visit the{' '}
      <a href="https://www.google.com/settings/ads">Google Ads Settings page</a>. Please note that
      to the extent advertising technology is integrated into the Platform, you may still receive
      advertising content even if you opt out of tailored advertising. In that case, the advertising
      content will just not be tailored to your interests. Also, we do not control any of the above
      opt-out links and are not responsible for any choices you make using these mechanisms or the
      continued availability or accuracy of these mechanisms. If your browsers are configured to
      reject cookies when you visit this opt-out page, or you subsequently erase your cookies, use a
      different computer or change web browsers, your NAI or DAA opt-out may no longer be effective.
      Additional information is available on NAI's and DAA's websites, accessible by the above
      links.
    </p>

    <p>
      When using a mobile application you may also receive tailored in-application advertising
      content. Each operating system-iOS for Apple devices, Android for Android devices, and Windows
      for Microsoft devices-provides its own instructions on how to prevent the delivery of tailored
      in-application marketing content. You may review the support materials and/or the privacy
      settings for the respective operating systems in order to opt-out of tailored in-application
      advertising. For any other devices and/or operating systems, please visit the privacy settings
      for the applicable device or contact the applicable platform operator.
    </p>

    <h3>CALIFORNIA DO-NOT-TRACK DISCLOSURE</h3>

    <p>
      Thumbtack is committed to providing you with meaningful choices about the information
      collected on our Platform for third party purposes. That is why we have provided links (above)
      to the NAI "Consumer Opt-Out" link, the DAA opt-out link, and a Google opt-out link. However,
      Thumbtack does not currently recognize or respond to browser-initiated Do-Not-Track signals,
      as the Internet industry is currently still working on Do-Not-Track standards, implementations
      and solutions.
    </p>

    <h3>PRIVACY OF MINORS</h3>

    <p>
      Our Services are not designed for minors under 18. Only persons 18 years of age or older may
      use the Platform. If we discover that an individual under 18 has provided us with personal
      information, we will close the account and delete the personal information to the extent
      required by the Children's Online Privacy Protection Act. We may, where permitted by law,
      retain certain information internally for purposes described in this Policy.
    </p>

    <h3>SECURITY</h3>

    <p>
      We employ appropriate physical, procedural and technological security measures, which are
      reasonably designed to help protect your personal information from unauthorized access or
      disclosure. Thumbtack may use encryption, passwords, and physical security measures to help
      protect your personal information against unauthorized access and disclosure. No security
      measures, however, are 100% failsafe. Therefore, we do not promise and cannot guarantee, and
      thus you should not expect, that your personal information or private communications will not
      be collected, disclosed and/or used by others. You should take steps to protect against
      unauthorized access to your password, phone, and computer by, among other things, signing off
      after using a shared computer, choosing a robust password that nobody else knows or can easily
      guess, keeping your log-in and password private, and not recycling passwords from other
      websites or accounts. Thumbtack is not responsible for the unauthorized use of your
      information nor for any lost, stolen, or compromised passwords, or for any activity on your
      Account via unauthorized password activity.
    </p>

    <h3>LINKS TO EXTERNAL PLATFORMS</h3>

    <p>
      The Platform may contain links to other websites or resources over which Thumbtack does not
      have any control. Such links do not constitute an endorsement by Thumbtack of those external
      websites. You acknowledge that Thumbtack is providing these links to you only as a
      convenience, and further agree that Thumbtack is not responsible for the content of such
      external websites or the protection and privacy of information you provide while visiting such
      external websites.
    </p>

    <h3>UPDATING, DELETING, AND CORRECTING YOUR INFORMATION</h3>

    <p>
      You may review, correct and delete certain information about you by logging in to the Platform
      and navigating to your preferences page in "Your Dashboard." You must promptly update your
      Account information if it changes or is inaccurate. Upon your request, we will close your
      Account and remove your profile information from view as soon as reasonably possible. We may
      retain information from closed Accounts in order to comply with the law, prevent fraud,
      collect any fees owed, resolve disputes, troubleshoot problems, assist with any investigations
      of any user, enforce our Terms of Use, and/or for any other purposes otherwise permitted by
      law that we deem necessary in our sole discretion. You should understand, however, that once
      you transmit User Content through the Platform, you may not be able to change or remove it.
      Once we have deactivated or removed your Account, you agree that Thumbtack will not be
      responsible to you for retaining information related to your Account.
    </p>

    <h3>YOUR CHOICES REGARDING EMAIL COMMUNICATIONS</h3>

    <p>
      We may send periodic promotional or informational emails to you. You may opt out of such
      communications by following the opt-out instructions contained in the email. Please note that
      it may take up to 10 business days for us to process opt-out requests. If you opt out of
      receiving emails about recommendations or other information we think may interest you, we may
      still send you emails about your Account or any services you have requested or received from
      us.
    </p>

    <h3>CHANGES TO THIS POLICY</h3>

    <p>
      THIS POLICY IS CURRENT AS OF THE EFFECTIVE DATE SET FORTH ABOVE. THUMBTACK MAY, IN ITS SOLE
      AND ABSOLUTE DISCRETION, CHANGE THIS POLICY AT ANY TIME. THUMBTACK WILL POST ITS UPDATED
      POLICY ON THE PLATFORM, SEND YOU A MESSAGE OR OTHERWISE NOTIFY YOU WHEN YOU ARE LOGGED INTO
      YOUR ACCOUNT IN ADVANCE OF THE NEW EFFECTIVE DATE. THUMBTACK ENCOURAGES YOU TO REVIEW THIS
      POLICY REGULARLY FOR ANY CHANGES. YOUR CONTINUED ACCESS TO OR USE OF THE PLATFORM WILL BE
      SUBJECT TO THE TERMS OF THE THEN-CURRENT POLICY.
    </p>

    <h3>CONSENT TO TRANSFER</h3>

    <p>
      Our computer systems are currently based in the United States, so your personal data will be
      processed by us in the United States, where data protection and privacy regulations may not
      offer the same level of protection as in other parts of the world, such as the European Union.
      If you create an Account with the Platform as a visitor from outside the United States, by
      using the Platform, you agree to this Policy and you consent to the transfer of all such
      information to the United States, which may not offer a level of protection equivalent to that
      required in the European Union or certain other countries, and to the processing of that
      information as described in this Policy.
    </p>

    <h3>CONTACT US</h3>

    <p>
      If you have any questions about the Privacy Policy or the Platform, please contact us by
      sending an email to
      <a href="mailto:support@thumbtack.com">support@thumbtack.com</a>, or by writing to: Thumbtack,
      Inc., 1355 Market Street, Suite 600, San Francisco, CA 94103.
    </p>
  </PolicySnap>
);

const Privacy = () => (
  <Layout>
    <Policy />
  </Layout>
);

export default Privacy;
