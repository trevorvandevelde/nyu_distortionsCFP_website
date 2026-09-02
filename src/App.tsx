import './App.css';
import { useEffect, useState } from "react";
import { DistortionText }  from "./DistortionText.tsx"
import { MovingTextBorder } from "./MovingTextBorder.tsx"
import Schedule from "./Schedule.tsx"

const pageNames: Record<string, string> = {
  "schedule-program": "Schedule & Program",
  registration: "Registration",
  "keynote-info": "Keynote Info",
  "venues-accessibility": "Venues & Accessibility",
  "call-for-proposals": "Call for Proposals",
  contact: "Contact",
};

function getCurrentPage() {
  return window.location.hash.slice(1) || "home";
}

function ContactContent() {
  return (
    <section className="contact-section cfp_description">
      <p><strong>Conference Committee:</strong> Hannah Krasikov, Christine Oppedisano, and Yuval Tessman-Bar-On.</p>
      <p><strong>Volunteers:</strong></p>
      <p><strong>Faculty Advisor:</strong> Clifton Boyd</p>
      <p><strong>Thank you to our sponsors for helping make this conference possible:</strong></p>
      <ul>
        <li>NYU FAS Department of Music</li>
        <li>The American Musicological Society</li>
        <li>The Public Humanities Initiative in Graduate Education at NYU</li>
        <li>Dean Lynne Kiorpes and the Dean's Office of the Graduate School of Arts and Science</li>
        <li>Dean Elizabeth McHenry and the NYU Dean's Office for the Humanities</li>
        <li>XE: The Experimental Humanities &amp; Social Engagement Department at NYU Gallatin</li>
        <li>The Music Theory Group at NYU</li>
      </ul>
      <p>
        If you have any questions, please feel free to email conference co-chairs Hannah Krasikov,
        Christine Oppedisano, and Yuval Tessman-Bar-On at{" "}
        <a href="mailto:nyudistortions@gmail.com">nyudistortions@gmail.com</a>.
      </p>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage);
  const movingText =
    "DISTORTION  OVERDRIVE  GRAIN  SYNTHESIS  NOISE  STATIC  INTERFERENCE  WARPING  BENDING  SPIRALS  FRACTALS  PLASTICITY  DEFORMATION  DISINFORMATION  MISINFORMATION  FASCISM  PROPAGANDA  CENSORSHIP  POST-TRUTH  CONSPIRACY  FRAUD  FAKES  FORGERY  BOOTLEGGING  PIRACY  ARTIFICIALITY  STREAMING  MANIPULATION  FAILURE  CORRUPTION  GLITCH  MUTATION  TRANSFORMATION  TRANSLATION  DISRUPTION  ALTERNATE  REALITIES  QUEER  TEMPORALITIES  LIMINALITY  NON-PLACE  TIME  SPACE  SIMULATION  SPECULATIVE  FICTION  SONIC  FICTION  CRITICAL  FABULATION  FUTURITIES  PARA-SOCIALITY  CIRCULATION  CYBERNETICS  ARTIFICIAL  INTELLIGENCE  SUPERSTITION  URBAN  LEGEND  (MEDIA)  FOLKLORE  TECHNO-DOPING  SURGERY  BIOHACKING  TRAUMA  MENTAL  HEALTH  GHOSTS  HAUNTING  VERTIGO  DISORIENTATION  NEURODIVERGENCE  AND  MASKING  ALTERNATE  TUNINGS  DIY  INSTRUMENTS/MUSIC  SPACES  HACKING  AUDITORY  ILLUSIONS"

  useEffect(() => {
    const handleHashChange = () => setCurrentPage(getCurrentPage());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isCallForProposals = currentPage === "call-for-proposals";
  const isHome = currentPage === "home";
  const isContact = currentPage === "contact";
  const isKeynoteInfo = currentPage === "keynote-info";
  const isRegistration = currentPage === "registration";
  const isSchedule = currentPage === "schedule-program";

  return (
    <div className={`App ${isHome ? "App--home" : ""}`} style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Removed left and right vertical moving text borders */}

      {/* Top horizontal moving text border */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 48, zIndex: 2000 }}>
        <MovingTextBorder
          text={movingText}
          fontSize={22}
          color= "#ff0000"
          backgroundColor="#282c34"
          height={48}
          speed={80}
          direction={"right"}
        />
      </div>

      <nav className="site-navigation" aria-label="Conference sections">
        <a className={`site-navigation__tab ${isHome ? "site-navigation__tab--active" : ""}`} href="#home" aria-current={isHome ? "page" : undefined}>HOME</a>
        {Object.entries(pageNames).map(([pageId, pageName]) => (
          <a
            className={`site-navigation__tab ${currentPage === pageId ? "site-navigation__tab--active" : ""}`}
            href={`#${pageId}`}
            aria-current={currentPage === pageId ? "page" : undefined}
            key={pageId}
          >
            {pageName.toUpperCase()}
          </a>
        ))}
      </nav>

      {/* Bottom horizontal moving text border */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: 48, zIndex: 2000 }}>
        <MovingTextBorder
          text={movingText}
          fontSize={22}
          color="#ff0000"
          backgroundColor="#282c34"
          height={48}
          speed={80}
          direction={"left"}
        />
      </div>

      {isHome ? (
        <header className="App-header home-page" id="home">
          <div className="home-title">
            <DistortionText text="DISTORTIONS" customSizes={[150, 160, 170, 160, 150, 140, 150, 160, 170, 160, 150, 140]}/>
          </div>
          <div className="home-details">
            <DistortionText text="October 2-3, 2026" fontSize={50} varySize={false}/>
            <p className="home-location">
              <DistortionText text="New York University GSAS Music Department" fontSize={30} varySize={false}/>
            </p>
          </div>
        </header>
      ) : isCallForProposals ? (
      <header className="App-header" id="call-for-proposals">
        <DistortionText text="CALL FOR PROPOSALS" fontSize={60} varySize={false} color="#ff0000"/>
        <DistortionText text="DISTORTIONS" customSizes={[75, 80, 85, 80, 75, 70, 75, 80, 85, 80, 75, 70]}/>
        <p className="cfp_description"></p>

        <p className="cfp_description" style={{ lineHeight: 1.5 }}>
          The term <DistortionText text="distortion" fontSize={23} varySize={false} /> is derived from the Latin <em>dis</em>, meaning apart or away, and <em>torquere</em>,
          meaning to twist. It refers to the bending, warping, or deformation of an object’s shape and/or form.
          In a sonic context, <DistortionText text="distortion" fontSize={23} varySize={false} /> is used to describe the alteration of an audio signal or wave. It is often
          characterized by a harsh, gritty sound. Through the amplification of what are generally considered
          imperfections, errors, or failures, <DistortionText text="distortion" fontSize={23} varySize={false} /> performs an array of functions: it interrogates, confuses,
          vulgarizes, disrupts, alienates, subverts. At the same time, scrubbing a recording of its so-called
          imperfections also involves a warping of sonic materials; attempting to rid an object of <DistortionText text="distortion" fontSize={23} varySize={false} />
          only distorts further. <DistortionText text="Distortion" fontSize={23} varySize={false} /> can be weaponized by the powerful, just as it can function as a tool
          of resistance, liberation, and imagining. This conference explores <DistortionText text="distortion" fontSize={23} varySize={false} /> and its various
          overlapping contexts: sonic, political, metaphysical, aesthetic, literary, bodily, legal, and more.
        </p>
        <p className="cfp_description">
          The 2026 NYU GSAS Department of Music Graduate Student Conference Committee
            invites proposals for papers, lightning talks, roundtables, paper-performances, performances,
            installations, pre-formed panels (we will provide a panel chair), and other presentation formats
            (please consult our co-chairs for formats not listed before submitting). We welcome works that
            explore interpretations and expressions of distortions across a range of contexts. Contributions may
            engage with (but are certainly not limited to) topics and themes such as:
        </p>

        <ul id="themes" className="cfp_description" style={{ listStyleType: 'disc', paddingLeft: 0, paddingRight: 0, textAlign: 'left' }}>
          <li>distortion, overdrive, grain, synthesis, noise, static, interference;</li>
          <li>warping, bending, spirals, fractals, plasticity, deformation;</li>
          <li>disinformation, misinformation, fascism, propaganda, censorship, post-truth, conspiracy;</li>
          <li>fraud, fakes, forgery, bootlegging, piracy, artificiality, streaming manipulation;</li>
          <li>failure, corruption, glitch, mutation, transformation, translation, disruption;</li>
          <li>alternate realities, queer temporalities, liminality, non-place, time, space, simulation</li>
          <li>speculative fiction, sonic fiction, critical fabulation, futurities;</li>
          <li>para-sociality, circulation, cybernetics, artificial intelligence;</li>
          <li>superstition, urban legend, (media) folklore;</li>
          <li>techno-doping, surgery, biohacking;</li>
          <li>trauma, mental health, ghosts, haunting, vertigo, disorientation, neurodivergence and masking;</li>
          <li>alternate tunings, DIY instruments/music spaces, hacking, auditory illusions.</li>
        </ul>

        <p className="cfp_description">
          We welcome submissions from scholars and artists at any career stage, and we especially encourage
          graduate students and independent scholars to submit. We hope that financial concerns will not
          prevent anyone from submitting a proposal, and we will do our best to support travel on an
          as-needed basis. </p>

        <p className="cfp_description">
          Submit proposals to <a href="mailto:nyudistortions@gmail.com">nyudistortions@gmail.com</a> by <b>May 1, 2026</b>. Please include within the body of
          the email: the author’s name, contact information, and institutional affiliation/location. Your
          proposal should be attached as a file, with any identifying information removed (we understand that
          audiovisual work samples may be difficult to fully anonymize). In your attachment, include: </p>

        
        
      <p id="submission" className="cfp_description" style={{ marginBottom: 4, marginTop: 24 }}>
          For papers/presentations:
        </p>
        <ul className="cfp_description" style={{ listStyleType: 'disc', paddingLeft: 0, paddingRight: 0, textAlign: 'left', marginTop: 4 }}>
          <li>Title</li>
          <li>Abstract (250–300 words)</li>
          <li>Preferred presentation formats: 20-minute talk, lightning talk,<br />paper-performance, pre-formed panel</li>
          <li>3–5 keywords</li>
          <li>Hyperlinks for up to 3 relevant video/audio samples</li>
          <li>A/V or other technical requirements</li>
        </ul>

        <p className="cfp_description" style={{ marginBottom: 4, marginTop: 24 }}>
          For performance/installations
        </p>
        <ul className="cfp_description" style={{ listStyleType: 'disc', paddingLeft: 0, paddingRight: 0, textAlign: 'left', marginTop: 4 }}>
          <li>Title</li>
          <li>Proposal (250-300 word), including piece length</li>
          <li>Performance/installation format: live performance, installation</li>
          <li>3–5 keywords</li>
          <li>Hyperlinks for up to 3 relevant video/audio samples</li>
          <li>A/V or other technical requirements</li>
          <li>Tentative Stage Plot</li>
        </ul>

        <p className="cfp_description">
          *Please note: We are interested in all performances, but our ability to accommodate certain
            technical aspects may be limited. The more equipment you can provide, the better. A list of our
            equipment is available <a href="https://docs.google.com/document/d/1oXrqBL2NMyXWOp_KEBVwxGPLOixZC8tKZtP--BTrFqc/edit?tab=t.0">here</a>. An engineer will be available.
        </p>

        <section className="contact-section cfp_description">
          <p><strong>Conference Co-chairs:</strong> Hannah Krasikov, Christine Oppedisano, and Yuval Tessman-Bar-On.</p>
          <p>
            Feel free to email co-chairs Hannah Krasikov, Christine Oppedisano, and Yuval Tessman-Bar-On at{" "}
            <a href="mailto:nyudistortions@gmail.com">nyudistortions@gmail.com</a> with any questions.
          </p>
          <p>
            Download a PDF of the CfP{" "}
            <a href="http://localhost:3000/Distortions%20Conference%20CfP.pdf">here</a>.
          </p>
        </section>

 
        
      </header>
      ) : isRegistration ? (
        <main className="App-header filler-page registration-page">
          <DistortionText text="REGISTRATION" fontSize={60} varySize={false} color="#ffffff"/>
          <div className="venue-content registration-content">
            <p>
              The conference is free and open to the public. Registration is required and can be completed by filling out and
              submitting this form. If you are not affiliated with NYU, we will need you to include your first and last names as
              they appear on your government ID as well as your email address. This information is required for you to access the
              building.
            </p>
            <p>Please feel free to email us with any questions at <a href="mailto:nyudistortions@gmail.com">nyudistortions@gmail.com</a></p>
          </div>
        </main>
      ) : isSchedule ? (
        <Schedule />
      ) : isKeynoteInfo ? (
        <main className="App-header filler-page keynote-page">
          <DistortionText text="KEYNOTE INFORMATION" fontSize={60} varySize={false}/>
          <section className="keynote-profile">
            <h2>KEYNOTE PERFORMER</h2>
            <h3>Ka Baird</h3>
            <p className="keynote-placeholder">[SUBHEADING / TITLE]</p>
            <div className="keynote-photo">
              <img src="/Ka Baird Respires Web 020.jpg" alt="Ka Baird" />
            </div>
            <p className="keynote-placeholder">[BIO]</p>
          </section>
          <section className="keynote-profile">
            <h2>KEYNOTE SPEAKER</h2>
            <h3>Mara Mills</h3>
            <p className="keynote-placeholder">[SUBHEADING / TITLE]</p>
            <div className="keynote-photo">
              <img src="/Mara Mills Photo by Blair Rinn.jpg" alt="Mara Mills" />
            </div>
            <p className="keynote-placeholder">[BIO]</p>
          </section>
        </main>
      ) : currentPage === "venues-accessibility" ? (
        <main className="App-header filler-page venue-page">
          <DistortionText text="VENUES & ACCESSIBILITY" fontSize={60} varySize={false} color="#ffffff"/>
          <div className="venue-content">
            <p className="venue-highlight">
              Distortions will take place on NYU’s Washington Square campus. The NYU Silver Center for Arts and Sciences,
              Rooms 120, 220, and 320.
            </p>
            <p className="venue-highlight">
              The Silver Center can be accessed from both 31 Washington Place and 32 Waverly Place. The Waverly Place
              entrance is closest to our registration desk (Room 120).
            </p>

            <h2>WIFI</h2>
            <p className="venue-highlight">To use NYU's guest wifi network, please follow these instructions:</p>
            <ol className="venue-highlight">
              <li>On your device, select the wireless network called “nyuguest” from the list of available networks.</li>
              <li>Open a web browser and go to any web page. The browser will be automatically redirected to the nyuguest login page.</li>
              <li>Log in with the following event guest username and password:</li>
            </ol>

            <h2>CONFERENCE ACCESSIBILITY</h2>
            <p className="venue-highlight">
              If you have any concerns about being able to participate leading up to and during the conference for any reason,
              please let the conference organizers and/or any nearby volunteers know!
            </p>

            <h2>INCLUSIVE RESTROOM FACILITIES</h2>
            <p className="venue-highlight">A single-stall non-gendered restroom is available on the third floor of the Silver Center.</p>

            <h2>BUILDING ACCESS INFORMATION</h2>
            <p className="venue-highlight">
              The Silver Center (31 Washington Pl) should be accessible for those with mobility impairments. The conference
              committee is working to confirm functioning automatic door openers and available wheelchair accessible bathrooms.
              Of the Silver Center's two entrances (one on Washington Place and one on Waverly Place), the Waverly Place entrance
              is closest to our event but has several steps plus an uneven lip due to construction and may provide difficulties
              to those with mobility concerns. Both entrances are directly near elevators. All conference rooms will have reserved
              spaces for wheelchair users.
            </p>

            <h2>PROGRAM ACCESSIBILITY</h2>
            <p className="venue-highlight">
              If a paper program would be helpful to you in terms of accessibility, do not hesitate to let one of our conference
              volunteers know and we will provide you with a paper copy.
            </p>
          </div>
        </main>
      ) : isContact ? (
        <main className="App-header filler-page contact-page">
          <DistortionText text="CONTACT" fontSize={60} varySize={false}/>
          <ContactContent />
        </main>
      ) : (
        <main className="App-header filler-page">
          <DistortionText text={(pageNames[currentPage] || "Page Not Found").toUpperCase()} fontSize={60} varySize={false}/>
          <p className="page-message">This is the {pageNames[currentPage]?.toLowerCase() || "page you requested"} page.</p>
        </main>
      )}
    </div>
  );
}






