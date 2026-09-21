import "./App.css";

function App() {
  return (
    <div className="policy-container">
      <header className="policy-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Effective as of September 15, 2026</p>
        </div>
      </header>

      <main className="container">
        <section className="policy-card">
          <p>
            This Privacy Policy applies to the{" "}
            <strong>Unit Converter 3D</strong> mobile application (hereinafter
            referred to as the "Application"), developed by{" "}
            <strong>Isotope Core</strong> (hereinafter referred to as the
            "Service Provider") as a Free, ad-supported service. This service is
            provided "AS IS".
          </p>

          <h2>Information Collection and Use</h2>
          <p>
            The Application does not require any user account registration or
            personal sign-in. You can use all features of the Application
            without providing any personally identifiable information.
          </p>

          <h2>What information does the Application collect automatically?</h2>
          <p>
            The Application may collect certain non-personal information
            automatically to ensure proper functionality and display
            personalized or non-personalized advertisements, including:
          </p>
          <ul>
            <li>The type of mobile device and operating system you use</li>
            <li>Unique device identifiers (such as Advertising ID)</li>
            <li>IP address and general coarse location data</li>
            <li>Application performance and diagnostic logs</li>
          </ul>

          <h2>Does the Application collect precise real-time location data?</h2>
          <p>
            This Application does not collect or track precise GPS location data
            of your mobile device.
          </p>

          <h2>
            Does the Application use Artificial Intelligence (AI) technologies?
          </h2>
          <p>
            The Application does not use Artificial Intelligence (AI)
            technologies to process your data or provide features.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            The Application utilizes third-party service providers that may
            collect information used to identify your device in accordance with
            their own Privacy Policies:
          </p>
          <ul className="links-list">
            <li>
              <a
                href="https://www.google.com/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play Services
              </a>
            </li>
            <li>
              <a
                href="https://support.google.com/admob/answer/6128543?hl=uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                AdMob (Google)
              </a>
            </li>
            <li>
              <a
                href="https://expo.io/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Expo
              </a>
            </li>
          </ul>

          <h2>Data Retention Policy & Deletion</h2>
          <p>
            Since the Application does not require registration or store user
            accounts on external servers, no personal account data is retained
            by the Service Provider. If you have any questions or wish to
            request data deletion regarding automatically collected technical
            data, please contact us at <strong>isotopecore@gmail.com</strong>.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            The Application is not directed to children under the age of 13. The
            Service Provider does not knowingly collect personally identifiable
            information from children under 13 years of age.
          </p>

          <h2>Security</h2>
          <p>
            The Service Provider prioritizes protecting the confidentiality of
            your information and provides procedural and technical safeguards to
            protect data processed by third-party SDKs.
          </p>

          <h2>Consent</h2>
          <p>By using the Application, you consent to this Privacy Policy.</p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions regarding privacy while using the
            Application, please contact us via email at:{" "}
            <a href="mailto:isotopecore@gmail.com" className="email-link">
              isotopecore@gmail.com
            </a>
          </p>
        </section>
      </main>

      <footer className="policy-footer">
        <div className="container">
          <p>© 2026 Isotope Core. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
