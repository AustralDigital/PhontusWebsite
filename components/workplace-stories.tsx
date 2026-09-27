import { photography } from "@/lib/photography";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow, PhotoFrame } from "@/components/ui";

export const workplaces = [
  {
    id: "healthcare",
    name: "Healthcare",
    title: "Closer to the person.\nCloser to the point of care.",
    copy: "From check-in to a conversation at the bedside, bring interpretation to the room where it’s needed.",
    image: photography.healthcare.src,
    mobileSrc: photography.healthcare.mobileSrc,
    alt: photography.healthcare.alt,
    href: "/solutions/healthcare",
  },
  {
    id: "education",
    name: "Schools & districts",
    title: "Every family.\nPart of the conversation.",
    copy: "Make space for the everyday exchanges that connect schools and families.",
    image: photography.education.src,
    mobileSrc: photography.education.mobileSrc,
    alt: photography.education.alt,
    href: "/solutions/education",
  },
  {
    id: "field",
    name: "Field operations",
    title: "Where the work\nis happening.",
    copy: "At the service counter, the warehouse or the worksite. Keep the conversation close to the job.",
    image: "/images/phontus-frontline-kit-business-v2.webp",
    alt: "Two warehouse team members communicating across a counter with a Phontus Interpreting Kit.",
    href: "/solutions/business-operations#field-operations",
  },
  {
    id: "business",
    name: "Business",
    title: "Good service starts\nwith understanding.",
    copy: "A question, a request, a next step. Help the person in front of you move forward.",
    image: photography.officeKit.src,
    mobileSrc: photography.officeKit.mobileSrc,
    alt: photography.officeKit.alt,
    href: "/solutions/business-operations",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    title: "A warmer welcome.\nIn their own words.",
    copy: "From arrival to the small requests that shape a stay, keep the guest at the center of the exchange.",
    image: photography.hospitality.src,
    mobileSrc: photography.hospitality.mobileSrc,
    alt: photography.hospitality.alt,
    href: "/solutions/hospitality",
  },
];

export function WorkplaceStories({
  introduction = true,
}: {
  introduction?: boolean;
}) {
  const Heading = introduction ? "h3" : "h2";
  return (
    <section className="workplaces" id="industries">
      <Container>
        {introduction && (
          <div className="section-intro workplaces__intro" data-reveal>
            <Eyebrow>At work in your world</Eyebrow>
            <h2>
              The environment changes.
              <br />
              <span>The system stays the same.</span>
            </h2>
            <p>
              One Phontus system. A natural part of the places where people
              meet.
            </p>
          </div>
        )}
        <div className="workplace-sequence">
          {workplaces.map((place, index) => (
            <article
              className={`workplace workplace--${place.id}`}
              id={`workplace-${place.id}`}
              key={place.id}
            >
              <div className="workplace__image" data-reveal>
                <PhotoFrame
                  src={place.image}
                  mobileSrc={place.mobileSrc}
                  alt={place.alt}
                  sizes={
                    index === 0 || index === 2
                      ? "(max-width: 960px) 100vw, 90vw"
                      : "(max-width: 960px) 100vw, 55vw"
                  }
                />
                <span className="photo-index">0{index + 1} / 05</span>
              </div>
              <div className="workplace__copy" data-reveal>
                <Eyebrow>{place.name}</Eyebrow>
                <Heading className="workplace__title">
                  {place.title.split("\n").map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </Heading>
                <p>{place.copy}</p>
                <Link className="text-link" href={place.href}>
                  Phontus for {place.name.toLowerCase()}{" "}
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
