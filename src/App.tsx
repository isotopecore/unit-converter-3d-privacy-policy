import "./App.css";

function App() {
  return (
    <div className="policy-container">
      <header className="policy-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Effective as of 2026-05-14</p>
        </div>
      </header>

      <main className="container">
        <section className="policy-card">
          <p>
            This privacy policy is applicable to the <strong>Convertify</strong>{" "}
            app (hereinafter referred to as "Application") for mobile devices,
            which was developed by <strong>Isotope Core</strong> (hereinafter
            referred to as "Service Provider") as a Free service. This service
            is provided "AS IS".
          </p>

          <h2>
            What information does the Application obtain and how is it used?
          </h2>
          <p>
            The Application acquires the information you supply when you
            download and register the Application. Registration with the Service
            Provider is not mandatory. However, bear in mind that you might not
            be able to utilize some of the features offered by the Application
            unless you register with them.
          </p>
          <p>
            The Service Provider may also use the information you provided them
            to contact you from time to time to provide you with important
            information, required notices and marketing promotions.
          </p>

          <h2>What information does the Application collect automatically?</h2>
          <p>
            In addition, the Application may collect certain information
            automatically, including, but not limited to:
          </p>
          <ul>
            <li>The type of mobile device you use</li>
            <li>Your mobile devices unique device ID</li>
            <li>The IP address of your mobile device</li>
            <li>Your mobile operating system</li>
            <li>The type of mobile Internet browsers you use</li>
            <li>Information about the way you use the Application</li>
          </ul>

          <h2>
            Does the Application collect precise real time location information?
          </h2>
          <p>
            This Application does not gather precise information about the
            location of your mobile device.
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
            The Application utilizes third-party services that have their own
            Privacy Policy about handling data. Below are the links to the
            privacy policies of the third-party service providers used:
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
                href="https://support.google.com/admob/answer/6128543?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                AdMob
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

          <h2>Data Retention Policy</h2>
          <p>
            The Service Provider will retain User Provided data for as long as
            you use the Application and for a reasonable time thereafter. If
            you'd like the Service Provider to delete User Provided Data, please
            contact them at <strong>isotopecore@gmail.com</strong>.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            The Service Provider does not use the Application to knowingly
            solicit data from or market to children under the age of 13. If the
            Service Provider discover that a child under 13 has provided
            personal information, it will be immediately deleted.
          </p>

          <h2>Security</h2>
          <p>
            The Service Provider are concerned about safeguarding the
            confidentiality of your information. We provide physical,
            electronic, and procedural safeguards to protect information we
            process and maintain.
          </p>

          <h2>Consent</h2>
          <p>
            By using the Application, you are giving your consent to the Service
            Provider processing of your information as set forth in this Privacy
            Policy now and as amended by us.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions regarding privacy while using the
            Application, please contact us via email at:
            <a href="mailto:isotopecore@gmail.com" className="email-link">
              isotopecore@gmail.com
            </a>
          </p>
        </section>
      </main>

      <footer className="policy-footer">
        <div className="container">
          <p>© 2026 Isotope Core. All rights reserved.</p>
          <p className="generated-by">
            Generated by{" "}
            <a
              href="https://app-privacy-policy-generator.nisrulz.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Privacy Policy Generator
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
