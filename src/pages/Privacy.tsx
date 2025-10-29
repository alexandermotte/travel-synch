import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <ExecPassHeader />
      
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-lg">
              Welcome to the privacy policy for the www.exec-pass.com and website ("we", "us" or "our").
            </p>
            
            <p>
              We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you. If you have any question regarding our data policy, please contact us by email at contact@exec-pass.com.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">IMPORTANT INFORMATION AND WHO WE ARE</h2>
              
              <h3 className="text-xl font-semibold mb-3">Purpose of this privacy policy</h3>
              <p>
                This privacy policy aims to give you information on how we collect and process your personal data through your use of this website, including any data you may provide through this website when you purchase our services.
              </p>
              <p>
                This website is not intended for children and we do not knowingly collect data relating to children.
              </p>
              <p>
                It is important that you read this privacy policy together with any other privacy policy or fair processing policy we may provide on specific occasions when we are collecting or processing personal data about you so that you are fully aware of how and why we are using your data. This privacy policy supplements other notices and privacy policies and is not intended to override them.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Controller</h3>
              <p>
                We are the controller and responsible for your personal data. We have appointed a data privacy manager who is responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact the data privacy manager using the details set out below.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Contact details</h3>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact our data privacy manager by emailing contact@exec-pass.com or writing to Marvelliant B.V - Bos en Lommerplein, 280, Amsterdam, 1055RW
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Changes to the privacy policy and your duty to inform us of changes</h3>
              <p>
                We keep our privacy policy under regular review. This version was last updated on the date specified at the end. Historic versions can be obtained by contacting us.
              </p>
              <p>
                It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Third-Party Links</h3>
              <p>
                This website may include links to third-party websites, plug-ins and applications, including with payment providers. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">THE DATA WE COLLECT ABOUT YOU</h2>
              <p>
                Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
              </p>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you, which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
                <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Transaction Data</strong> includes details of products and services you have purchased from us.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
              </ul>
              <p className="mt-4">
                We use a third party to collect and process your financial data including, as appropriate, your bank account or payment card details. They will confirm that your payment was successful and pass the payment to us.
              </p>
              <p>
                We also collect, use and share "Aggregated Data" such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific website feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy policy.
              </p>
              <p>
                As part of fulfilling this service, we may collect "Special Categories of Personal Data" about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data). We may also collect information about criminal convictions and offences. We will not store this data once we have forwarded it to you.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">If you fail to provide personal data</h3>
              <p>
                Where we need to collect personal data by law, or under the terms of a contract we have with you, and you fail to provide that data when requested, we may not be able to provide you with the services you are paying for. In this case, we may have to cancel the service or subscription you have with us, but we will notify you if this is the case at the time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">HOW IS YOUR PERSONAL DATA COLLECTED</h2>
              <p>We use different methods to collect data from and about you, including through:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Information you give us.</strong> This is information about you that you give us by filling in forms on our website and member zone or by corresponding with us by phone, e-mail or chat. You may give us your Identity, Contact and Financial Data by filling in forms or by corresponding with us by post, phone, email or chat. This includes personal data you provide when you apply for our products or services, create an account on our website, subscribe to our service or publications, request marketing to be sent to you, or give us feedback or contact us.</li>
                <li><strong>Information we collect about you.</strong> As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs and other similar technologies. We may also receive Technical Data about you if you visit other websites employing our cookies. Please see Cookies below for further details.</li>
                <li><strong>Information we receive from other sources.</strong> We will receive personal data about you from various third parties and public sources as set out below:
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Technical Data from the following parties: analytics providers such as Google, advertising networks DoubleClick or Google and search information providers Google or Bing</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">HOW WE USE YOUR PERSONAL DATA</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you for us to provide services to you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests. This means it is in the interest of our business in conducting and managing our business to enable us to give you the best service/product and the best and most secure experience. We make sure we consider and balance any potential impact on you (both positive and negative) and your rights before we process your personal data for our legitimate interests. We do not use your personal data for activities where our interests are overridden by the impact on you (unless we have your consent or are otherwise required or permitted to by law). You can obtain further information about how we assess our legitimate interests against any potential impact on you in respect of specific activities by contacting us</li>
                <li>Where we need to comply with a legal obligation such as where it is necessary for compliance with a legal obligation that we are subject to.</li>
              </ul>
              <p className="mt-4">
                Generally, we do not rely on consent as a legal basis for processing your personal data, although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Purposes for which we will use your personal data</h3>
              <p>
                We have set out below, in a table format, a description of all the ways we plan to use your personal data, and which of the legal bases we rely on to do so. We have also identified what our legitimate interests are where appropriate.
              </p>
              <p>
                Note that we may process your personal data for more than one lawful ground, depending on the specific purpose for which we are using your data. Please contact us if you need details about the specific legal ground we are relying on to process your personal data where more than one ground has been set out in the table below.
              </p>

              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left">Purpose/Activity</th>
                      <th className="border border-border p-3 text-left">Type of data</th>
                      <th className="border border-border p-3 text-left">Lawful basis for processing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">To register you as a new customer</td>
                      <td className="border border-border p-3">Identity<br/>Contact</td>
                      <td className="border border-border p-3">Performance of a contract with you</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">To process and deliver your order including: Manage payments, fees and charges; Collect and recover money owed to us</td>
                      <td className="border border-border p-3">Identity<br/>Contact<br/>Financial<br/>Transaction<br/>Marketing and Communications</td>
                      <td className="border border-border p-3">Performance of a contract with you<br/>Necessary for our legitimate interests (to recover debts due to us)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">To manage our relationship with you including: Notifying you about changes to our terms or privacy policy; Asking you to leave a review or take a survey</td>
                      <td className="border border-border p-3">Identity<br/>Contact<br/>Profile<br/>Marketing and Communications</td>
                      <td className="border border-border p-3">Performance of a contract with you<br/>Necessary to comply with a legal obligation<br/>Necessary for our legitimate interests</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">To enable you to partake in a prize draw, competition or complete a survey</td>
                      <td className="border border-border p-3">Identity<br/>Contact<br/>Profile<br/>Usage<br/>Marketing and Communications</td>
                      <td className="border border-border p-3">Performance of a contract with you<br/>Necessary for our legitimate interests</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">To administer and protect our business and this website</td>
                      <td className="border border-border p-3">Identity<br/>Contact<br/>Technical</td>
                      <td className="border border-border p-3">Necessary for our legitimate interests<br/>Necessary to comply with a legal obligation</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">To deliver relevant website content and advertisements to you</td>
                      <td className="border border-border p-3">Identity<br/>Contact<br/>Profile<br/>Usage<br/>Marketing and Communications<br/>Technical</td>
                      <td className="border border-border p-3">Necessary for our legitimate interests</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">To use data analytics to improve our website, products/services, marketing</td>
                      <td className="border border-border p-3">Technical<br/>Usage</td>
                      <td className="border border-border p-3">Necessary for our legitimate interests</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">To make suggestions and recommendations to you about goods or services</td>
                      <td className="border border-border p-3">Identity<br/>Contact<br/>Technical<br/>Usage<br/>Profile<br/>Marketing and Communications</td>
                      <td className="border border-border p-3">Necessary for our legitimate interests</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Marketing</h3>
              <p>
                We strive to provide you with choices regarding certain personal data uses, particularly around marketing and advertising. You can contact us about this marketing.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Promotional offers from us</h3>
              <p>
                We may use your Identity, Contact, Technical, Usage and Profile Data to form a view on what we think you may want or need, or what may be of interest to you. This is how we decide which products, services and offers may be relevant for you (we call this marketing).
              </p>
              <p>
                You will receive marketing communications from us if you have requested information from us or purchased services from us and you have not opted out of receiving that marketing.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Third-party marketing</h3>
              <p>
                We will get your express opt-in consent before we share your personal data with any third party for marketing purposes.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Opting Out</h3>
              <p>
                You can ask us or third parties to stop sending you marketing messages at any time by following the opt-out links on any marketing message sent to you or by contacting us at any time.
              </p>
              <p>
                Where you opt out of receiving these marketing messages, this will not apply to personal data provided to us as a result of a service purchase, warranty registration, service experience or other transactions.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Cookies</h3>
              <p>
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. For more information about the cookies we use, please see Cookies below.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Change of purpose</h3>
              <p>
                We will only use your personal data for the purposes for which we collected it unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us.
              </p>
              <p>
                If we need to use your personal data for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so.
              </p>
              <p>
                Please note that we may process your personal data without your knowledge or consent, in compliance with the above rules, where this is required or permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">DISCLOSURES OF YOUR PERSONAL DATA</h2>
              <p>
                We may share your personal data with the parties set out below for the purposes set out in the table Purposes for which we will use your personal data above.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Third party suppliers of the Travel Arrangements, including but not limited to accommodation providers, transfer providers, car hire companies, airlines, tour operators and attraction providers.</li>
                <li>Other companies in our group acting as joint controllers or processors and provide IT and system administration services and undertake leadership reporting.</li>
                <li>Service providers acting as processors who provide IT and system administration services.</li>
                <li>Professional advisers acting as processors or joint controllers including lawyers, bankers, auditors and insurers who provide consultancy, banking, legal, insurance and accounting services.</li>
                <li>Third parties to whom we may choose to sell, transfer or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this privacy policy.</li>
              </ul>
              <p className="mt-4">
                We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">INTERNATIONAL TRANSFERS</h2>
              <p>
                We use third party payment providers, and this may involve the transfer of your data outside the EEA. Where we use certain service providers, we may use specific contracts approved for use which give personal data the same protection it has such as the Standard Contractual Clauses. Please contact us if you want further information on the specific mechanism used by us when transferring your personal data outside the EEA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">DATA SECURITY</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
              </p>
              <p>
                We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">DATA RETENTION</h2>
              <h3 className="text-xl font-semibold mb-3">How long will you use my personal data for</h3>
              <p>
                We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
              </p>
              <p>
                To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.
              </p>
              <p>
                By law, we have to keep basic information about our customers (including Contact, Identity, Financial and Transaction Data) for six years after they cease being customers.
              </p>
              <p>
                In some circumstances, you can ask us to delete your data: see Your legal rights below for further information.
              </p>
              <p>
                In some circumstances, we will anonymise your personal data (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.
              </p>
              <p>
                All information from filled in applications that did not result in payment will be deleted within 48 hours.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">YOUR LEGAL RIGHTS</h2>
              <p>
                Under certain circumstances, you have the following rights under data protection laws in relation to your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Request access to your personal data</strong> (commonly known as a "data subject access request"). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.</li>
                <li><strong>Request correction</strong> of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.</li>
                <li><strong>Request erasure</strong> of your personal data. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.</li>
                <li><strong>Object to processing</strong> of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms.</li>
                <li><strong>Request restriction of processing</strong> of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios: If you want us to establish the data's accuracy; Where our use of the data is unlawful but you do not want us to erase it; Where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims; You have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.</li>
                <li><strong>Request the transfer</strong> of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.</li>
                <li><strong>Withdraw consent</strong> at any time when we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.</li>
              </ul>
              <p className="mt-4">
                If you wish to exercise any of the rights set out above, please contact us by email at contact@exec-pass.com
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">No fee usually required</h3>
              <p>
                You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your request in these circumstances.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">What we may need from you</h3>
              <p>
                We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Time limit to respond</h3>
              <p>
                We try to respond to all legitimate requests within one month. Occasionally it could take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">COOKIES</h2>
              <p>
                We use cookies on our website to distinguish you from other users. This helps us to provide you with a good experience when you browse our site and also allows us to improve our website.
              </p>
              <p>
                A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.
              </p>
              <p className="mt-4">We use the following cookies:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Strictly necessary cookies.</strong> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services.</li>
                <li><strong>Analytical/performance cookies.</strong> They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</li>
                <li><strong>Functionality cookies.</strong> These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region).</li>
                <li><strong>Targeting/Analytics cookies.</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose. If you don't want analytics cookies to be used when visiting our website then you can remove them by following these steps: (a) click 'Tools' and select 'Internet Options'; (b) click the 'Privacy' tab and select 'Advanced'; (c) click 'Override automatic cookie handling'; and (d) specify how you wish to handle cookies from first and third party websites.</li>
                <li><strong>Session cookies.</strong> These cookies store your browsing information and will be active until you leave our website and close your browser at which point, they are erased. We use these to enable selected purchases to be carried over to subsequent web pages to speed up the process of your transaction.</li>
                <li><strong>Persistent cookies.</strong> These cookies stay in one of a browser's subfolders until they are deleted manually, or your browser deletes them based on the duration period contained within the persistent cookie's file. You can set your browser to automatically remove these cookies.</li>
                <li><strong>Social sharing.</strong> These cookies enable you to share any of Our content that you may find interesting with friends via email and social media platforms.</li>
              </ul>
              <p className="mt-4">
                Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which We have no control. These cookies are likely to be analytical/performance cookies or targeting cookies.
              </p>
              <p>
                You block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our website.
              </p>
              <p>
                For more information about cookies, please visit: <a href="http://www.allaboutcookies.org" className="text-accent hover:underline">http://www.allaboutcookies.org</a>.
              </p>
              <p>
                We store personal data in digital format on secure cloud servers and systems hosted in the European Union (EU). Where data is stored on servers located in the US we rely on the Privacy Shield Framework to transfer this information. Access to personal data is highly restricted internally for approved business purposes only. Any personal data processed in paper form are securely filed at our office location in Netherlands.
              </p>
            </section>

            <div className="mt-8 pt-8 border-t">
              <p className="font-semibold">Last updated: 21 March 2025</p>
            </div>
          </div>
        </div>
      </main>

      <ExecPassFooter />
    </div>
  );
}
