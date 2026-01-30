import { PageHeader, Section } from '@/components'

export const metadata = {
  title: 'Imprint',
}

export default function ImprintPage() {
  return (
    <>
      <PageHeader title="Imprint" />

      <Section className="pt-0">
        <div className="max-w-prose mx-auto prose-grail">
          <h2>Legal Information</h2>
          <p>
            Information pursuant to § 5 TMG (German Telemedia Act):
          </p>

          <h3>Operator</h3>
          <p>
            Grail Instruments<br />
            Nils Caspar<br />
            [Address Placeholder]<br />
            [City, Postal Code]<br />
            Germany
          </p>

          <h3>Contact</h3>
          <p>
            Email: contact@grailinstruments.com<br />
            Website: grailinstruments.com
          </p>

          <h3>VAT ID</h3>
          <p>
            VAT identification number pursuant to § 27 a of the German VAT Act:<br />
            [VAT ID Placeholder]
          </p>

          <h2>Responsible for Content</h2>
          <p>
            Responsible for content pursuant to § 55 Abs. 2 RStV:<br />
            Nils Caspar<br />
            [Address as above]
          </p>

          <h2>EU Dispute Resolution</h2>
          <p>
            The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://ec.europa.eu/consumers/odr</a>
          </p>
          <p>
            We are not obligated or willing to participate in dispute resolution proceedings before a consumer arbitration board.
          </p>

          <h2>Disclaimer</h2>
          <h3>Liability for Content</h3>
          <p>
            As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 Abs.1 TMG. However, according to §§ 8 to 10 TMG, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
          </p>

          <h3>Liability for Links</h3>
          <p>
            Our website contains links to external websites of third parties over whose content we have no control. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages.
          </p>

          <h3>Copyright</h3>
          <p>
            The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator.
          </p>
        </div>
      </Section>
    </>
  )
}
