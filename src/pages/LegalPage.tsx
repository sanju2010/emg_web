import { useEffect } from 'react'
import { ArrowLeft, Heart } from 'lucide-react'
import { business } from '../config/business'
import { useLanguage } from '../i18n/LanguageContext'
import './legal.css'

type LegalPageProps = { kind: 'privacy' | 'terms' }

export default function LegalPage({ kind }: LegalPageProps) {
  const isPrivacy = kind === 'privacy'
  const { language } = useLanguage()
  const title = isPrivacy
    ? (language === 'te' ? 'గోప్యతా విధానం (Privacy Policy)' : 'Privacy Policy')
    : (language === 'te' ? 'నిబంధనలు & షరతులు (Terms of Use)' : 'Terms of Use')

  useEffect(() => {
    document.title = `${title} | ${business.name}`
  }, [title])

  return (
    <div className="legal-page">
      <header className="legal-header">
        <a href="/" className="brand">
          <img
            src={business.logo}
            alt={business.name}
            className="brand-logo-img"
          />
          <span className="brand-name">
            {business.name}
            <small>{business.tagline}</small>
          </span>
        </a>
        <a className="text-link" href="/">
          <ArrowLeft size={16} /> Back to home
        </a>
      </header>

      <main className="legal-content">
        <span className="eyebrow">{business.name}</span>
        <h1>{title}</h1>
        <p className="legal-updated">Last updated: November 2026</p>

        {isPrivacy ? (
          <div className="legal-sections">
            <p>
              This page explains what information may be involved when you browse this website or contact Eat Move Grow.
              This website serves as a product catalogue and lead-generation enquiry platform; it does not collect online card payments or manage customer passwords.
            </p>
            <section>
              <h2>Information you choose to provide</h2>
              <p>
                Our enquiry forms ask for your name and mobile number, and allow you to optionally provide an email address, product selection, package quantity, and message. When you submit the form, the website formats your enquiry and opens WhatsApp. You choose whether to deliver the message in WhatsApp. The initial static website does not write to a remote database.
              </p>
            </section>
            <section>
              <h2>Third-party communication services</h2>
              <p>
                Enquiries and order conversations are conducted over WhatsApp, which is owned and operated by Meta Platforms, Inc. and is governed by its own Terms of Service and Privacy Policy. The site may also load fonts from Google Fonts and static assets from trusted CDNs.
              </p>
            </section>
            <section>
              <h2>Cookies and analytics</h2>
              <p>
                This site does not use invasive tracking cookies or commercial ad trackers. Basic technical session data (such as your chosen language preference in localStorage) is retained locally in your browser to maintain your browsing settings.
              </p>
            </section>
            <section>
              <h2>Contacting us about your data</h2>
              <p>
                If you have questions regarding this privacy notice or wish to update any details you shared with us, please contact us at <a href={`mailto:${business.email}`}>{business.email}</a>.
              </p>
            </section>
          </div>
        ) : (
          <div className="legal-sections">
            <p>
              These terms govern your visit to and use of the Eat Move Grow website. The site showcases homemade South Indian sweets and snacks and connects you with our kitchen.
            </p>
            <section>
              <h2>Catalogue information and pricing</h2>
              <p>
                All product names, descriptions, package sizes (e.g. 250g, 500g, 1kg), and prices are listed in Indian Rupees (INR ₹). Because all treats are freshly prepared to order in artisanal batches, availability and seasonal ingredient pricing may vary. Submitting an enquiry does not constitute a legally binding order or charge; our kitchen confirms product availability, custom packaging, and payment upon direct communication.
              </p>
            </section>
            <section>
              <h2>Placing orders via WhatsApp and phone</h2>
              <p>
                Clicking an enquiry or order button opens WhatsApp or your phone dialler with prefilled information. An order is finalized only once you and Eat Move Grow confirm quantities, payment methods, and delivery or collection schedules.
              </p>
            </section>
            <section>
              <h2>Homemade food & imagery</h2>
              <p>
                Food photographs are representative artistic depictions to showcase the traditional style and assortment of South Indian sweets and snacks. Handcrafted batch appearance and textures may naturally vary. Please inform our kitchen of any specific food allergies or dietary preferences when ordering.
              </p>
            </section>
            <section>
              <h2>Modifications</h2>
              <p>
                We reserve the right to update our product catalogue, seasonal offerings, and terms from time to time. For any questions, please write to us at <a href={`mailto:${business.email}`}>{business.email}</a>.
              </p>
            </section>
          </div>
        )}

        <p className="legal-template-note">
          Notice: Contact information and business details in this template can be updated in <code>src/config/business.ts</code> before launch.
        </p>
      </main>

      <footer className="legal-footer">
        <span>© {new Date().getFullYear()} {business.name}</span>
        <span>
          Made with care <Heart size={13} fill="currentColor" />
        </span>
        <nav>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
        </nav>
      </footer>
    </div>
  )
}
