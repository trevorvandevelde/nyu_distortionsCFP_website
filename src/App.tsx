import './App.css';
import { useEffect, useState } from "react";
import { DistortionText }  from "./DistortionText.tsx"
import { MovingTextBorder } from "./MovingTextBorder.tsx"
import Schedule from "./Schedule.tsx"
import DistortionHero from "./DistortionHero.tsx"

const pageNames: Record<string, string> = {
  "schedule-program": "Schedule",
  registration: "Registration",
  "keynote-info": "Keynote Info",
  "venues-accessibility": "Access",
  "call-for-proposals": "Call",
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

function MaraMillsBio() {
  return (
    <div className="keynote-bio">
      <p>
        Mara Mills is Associate Professor and Ph.D. Director in the Department of Media, Culture, and Communication at New York University.
        She is cofounder and Director of the <a href="https://disabilitystudies.nyu.edu/">NYU Center for Disability Studies</a>; founding director of the NYU cross-school minor in <a href="https://steinhardt.nyu.edu/mcc/undergraduate/disability_minor">Disability Studies</a>; and a founding editor of the award-winning journal <a href="https://catalystjournal.org/index.php/catalyst">Catalyst: Feminism, Theory, Technoscience</a>. She is also a founding member of the steering committees for the NYU cross-school minor in <a href="http://www.nyu.edu/students/undergraduates/academic-services/undergraduate-advisement/unique-academic-opportunities/cross-school-minors/cross-school-minors-alphabetically/minor-in-science-and-society.html">Science and Society</a>.
      </p>
      <details>
        <summary>SEE MORE</summary>
        <p>
          Trained in Biology (BA, MA), Literature (BA), Education (MA), and History of Science (PhD), Mills is an interdisciplinary scholar and teacher in the fields of disability studies, Science and Technology Studies, and sound studies. Her work on “disability and media” spans disability arts and technoscience, with a focus on the history, politics, and cultures of electronics and digital media. The author or coauthor of over 80 articles, chapters, and reviews, her work has received the IEEE History Prize, the Walter Benjamin Award, and the Irving Zola Award, among other honors. She is also a recipient of the Jim Ferris Award for Outstanding Achievement in Disability and Communication. Her writing has been translated into German, French, Spanish, and Portuguese.
        </p>
        <p>
          Her research has been funded by the National Science Foundation, the National Endowment for the Humanities, the Mellon Foundation, the Ford Foundation, the American Council of Learned Societies, the DAAD, the Alexander von Humboldt Foundation, and the IEEE, among other organizations. At the intersection of STS and disability studies, she is currently working on the histories of information theory and optical character recognition, and an edited collection with Michele Friedner titled “The Global Cochlear Implant: Provincializing ‘Brain Implants’ through Disability Technocultures.” With Jonathan Sterne, she is writing a book on the history, aesthetics, and politics of time stretching technology, to be previewed as a <a href="https://www.instagram.com/p/DOIHrnqjprR/">podcast series produced by Benjamen Walker</a> in 2026. Through the Center for Disability Studies, she coordinates public humanities, disability arts, community-based, and collaborative projects. From 2025-2028, she is directing <a href="https://steinhardt.nyu.edu/news/mara-mills-awarded-1-million-grant-mellon-foundation">ASAP: Access for Small Arts Partnerships</a> at CDS, funded by the Mellon Foundation.
        </p>
        <p>
          With Harris Kornstein, Faye Ginsburg, and Rayna Rapp she recently directed an NSF-funded project on Covid-19 and disability communities in New York, resulting in <a href="https://nyupress.org/9781479830855/how-to-be-disabled-in-a-pandemic/">How to be Disabled in a Pandemic</a> (NYU Press, 2025). With Rebecca Sanchez, she edited <a href="https://nyupress.org/9781479819362/crip-authorship/">Crip Authorship: Disability as Method</a> (NYU Press, 2023). With Alexandra Hui and Viktoria Tkaczyk, she edited <a href="https://global.oup.com/academic/product/testing-hearing-9780197511138?cc=us&lang=en&">Testing Hearing: The Making of Modern Aurality</a> (Oxford UP, 2020), and with Rebecca Sanchez she previously released a new edition of <a href="https://gupress.gallaudet.edu/Books/A/And-No-Birds-Sing">And No Birds Sing</a>, Pauline Leader’s memoir about life as a deaf working-class runaway among the bohemians of Greenwich Village in the 1920s.
        </p>
        <p>
          Mills has also coedited special issues of <a href="https://catalystjournal.org/index.php/catalyst/issue/view/2199">Catalyst: Feminism, Theory, Technoscience</a> and <a href="https://www.journals.uchicago.edu/journals/osiris/forthcoming">Osiris</a>. With John Tresch, she edited a special issue of <a href="https://direct.mit.edu/grey/issue/number/43">Grey Room</a> on “Audio/Visual.” She has been a member of the research teams that produced the white papers <a href="https://ainowinstitute.org/publication/disabilitybiasai-2019">Disability, Bias, and AI</a> and <a href="https://corpus.ulaval.ca/entities/publication/4cffd00e-0ffb-49cf-aa01-12e94c9e3648">Reassessing What Matters in Experiences with Cochlear Implants</a>. Her academic articles have appeared in Technology &amp; Culture, IEEE Annals of the History of Computing, Grey Room, differences, Social Text, Film Quarterly, and PMLA, among many others.
        </p>
        <p>
          Her public arts and humanities writing can be found at Triple Canopy, Artforum, Aperture, Somatosphere, Bomb, Public Books, and AVIDLY. She has also been interviewed by The New York Times, The History Channel, 99% Invisible, TechCrunch, Gizmodo, The Atlantic, The Boston Globe, The Chronicle of Higher Education, and other venues.
        </p>
        <p>
          Mills has been the Beaverbrook Visiting Scholar at Media@McGill, and in 2026-2027 she will be a Tokyo College Visiting Professor at the University of Tokyo as well as a Visiting Professor in the Film and Media Studies Program at Yale. She is currently a Research Fellow with the <a href="https://cse.umn.edu/cbi/people">Charles Babbage Institute</a> and a member of the <a href="https://history.acm.org/">ACM History Committee</a>.
        </p>
        <p>
          At NYU, she teaches courses on STS, the history of technology, and disability studies. For the past 15 years she has taught “Disability, Technology, and Media,” combining disability theory with training in media accessibility. She has received numerous teaching awards at NYU, including the Steinhardt Teaching Excellence Award and the University Distinguished Teaching Award.
        </p>
      </details>
    </div>
  );
}

function KaBairdBio() {
  return (
    <div className="keynote-bio">
      <p>
        Ka Baird is a performer, sound artist, musician and composer based in New York City. Using extended voice and microphone techniques along with electronics, feedback, field recordings, and flutes, they explore the outer dimensions of sound through performance. They create a present tense sound with a vigorous, ritualistic delivery that seeks extreme release through physical exertion and psychic extension. They have collaborated with many other artists, both in structured compositions and through their dedicated practice of improvisation.
      </p>
      <details>
        <summary>SEE MORE</summary>
        <p>
          Their solo releases include “Sapropelic Pycnic” (Drag City 2017), “Respires” (RVNG Intl 2019), “Brooding Exercises” (Longform Editions 2021), “Vivification Exercises” (RVNG Intl 2021) and “Bearings: Soundtracks for the Bardos” (RVNG 2024). Recent national and international engagements have included performances at Unsound (Krakow, PL), Rewire (The Hague, NL), Intonal (Malmo, SE), Lampo (Chicago, IL), Museum of Contemporary Art (Chicago, IL), MoMA PS1 (Queens, NY), Issue Project Room (Brooklyn, NY), The Kitchen (NYC), The Institute of Contemporary Art (Philadelphia, PA), TUSK Festival (Newcastle, UK), KRAAK (Brussels, BE), and Le Guess Who (Utrecht, NL). They have been artist-in-residence at We Jazz Festival (Helsinki, FI), Sonoscopia (Porto, PT), Inkonst (Malmo, SE), Experimental Sound Studio (Chicago, IL), and Pioneer Works (Brooklyn, NY). They have been a recipient of the Foundation of Contemporary Art's Emergency Grant, a Jerome Foundation Artist-In-Residence at Roulette Intermedium, and a Jerome Hill Artist Fellow through 2023-25.
        </p>
        <p>They are one of the core members of Spires That In The Sunset Rise, founded in Chicago in 2001.</p>
      </details>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage);
  const [homeColor, setHomeColor] = useState("#fa4e2d");
  const [isBorderPaused, setIsBorderPaused] = useState(false);
  const movingText =
    "DISTORTION  OVERDRIVE  GRAIN  SYNTHESIS  NOISE  STATIC  INTERFERENCE  WARPING  BENDING  SPIRALS  FRACTALS  PLASTICITY  DEFORMATION  DISINFORMATION  MISINFORMATION  FASCISM  PROPAGANDA  CENSORSHIP  POST-TRUTH  CONSPIRACY  FRAUD  FAKES  FORGERY  BOOTLEGGING  PIRACY  ARTIFICIALITY  STREAMING  MANIPULATION  FAILURE  CORRUPTION  GLITCH  MUTATION  TRANSFORMATION  TRANSLATION  DISRUPTION  ALTERNATE  REALITIES  QUEER  TEMPORALITIES  LIMINALITY  NON-PLACE  TIME  SPACE  SIMULATION  SPECULATIVE  FICTION  SONIC  FICTION  CRITICAL  FABULATION  FUTURITIES  PARA-SOCIALITY  CIRCULATION  CYBERNETICS  ARTIFICIAL  INTELLIGENCE  SUPERSTITION  URBAN  LEGEND  (MEDIA)  FOLKLORE  TECHNO-DOPING  SURGERY  BIOHACKING  TRAUMA  MENTAL  HEALTH  GHOSTS  HAUNTING  VERTIGO  DISORIENTATION  NEURODIVERGENCE  AND  MASKING  ALTERNATE  TUNINGS  DIY  INSTRUMENTS/MUSIC  SPACES  HACKING  AUDITORY  ILLUSIONS "

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
      <a className="moving-border-link" href="#home" aria-label="Go to Home">
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 48, zIndex: 2000 }}>
          <MovingTextBorder
            text={movingText}
            fontSize={22}
            color="#fa4e2d"
            backgroundColor="#282c34"
            height={48}
            speed={80}
            direction={"right"}
            isPaused={isBorderPaused}
          />
        </div>
      </a>

      <button
        className="pause-border-button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsBorderPaused(!isBorderPaused);
        }}
        aria-label={isBorderPaused ? "Resume scrolling text" : "Pause scrolling text"}
      >
        {isBorderPaused ? "PLAY" : "PAUSE"}
      </button>

      <nav className="site-navigation" aria-label="Conference sections">
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
      <a className="moving-border-link" href="#home" aria-label="Go to Home">
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: 48, zIndex: 2000 }}>
          <MovingTextBorder
            text={movingText}
            fontSize={22}
            color="#fa4e2d"
            backgroundColor="#282c34"
            height={48}
            speed={80}
            direction={"left"}
            isPaused={isBorderPaused}
          />
        </div>
      </a>

      {isHome ? (
        <header className="App-header home-page" id="home">
          <div className="home-title">
            <div className="distortion-hero">
              <DistortionHero text="DISTORTIONS" onColorChange={setHomeColor} />
            </div>
          </div>
          <div className="home-details">
            <DistortionText text="October 2-3, 2026" fontSize={50} varySize={false} color={homeColor} italic={false} responsive/>
            <p className="home-location">
              <DistortionText text="New York University GSAS Music Department" fontSize={30} varySize={false} color={homeColor} italic={false} responsive/>
            </p>
          </div>
        </header>
      ) : isCallForProposals ? (
      <header className="App-header" id="call-for-proposals">
        <DistortionText text="CALL FOR PROPOSALS" fontSize={45} varySize={false} color="#fa4e2d"/>
        <DistortionText text="DISTORTIONS" customSizes={[50, 53, 57, 53, 50, 47, 50, 53, 57, 53, 50, 47]}/>
        <p className="cfp_description"></p>

        <p className="cfp_description" style={{ lineHeight: 1.5 }}>
          The term <DistortionText text="distortion" fontSize={24} varySize={false} /> is derived from the Latin <em>dis</em>, meaning apart or away, and <em>torquere</em>,
          meaning to twist. It refers to the bending, warping, or deformation of an object’s shape and/or form.
          In a sonic context, <DistortionText text="distortion" fontSize={24} varySize={false} /> is used to describe the alteration of an audio signal or wave. It is often
          characterized by a harsh, gritty sound. Through the amplification of what are generally considered
          imperfections, errors, or failures, <DistortionText text="distortion" fontSize={24} varySize={false} /> performs an array of functions: it interrogates, confuses,
          vulgarizes, disrupts, alienates, subverts. At the same time, scrubbing a recording of its so-called
           imperfections also involves a warping of sonic materials; attempting to rid an object of <DistortionText text="distortion" fontSize={24} varySize={false} />{" "}
            only distorts further. <DistortionText text="Distortion" fontSize={24} varySize={false} /> can be weaponized by the powerful, just as it can function as a tool
          of resistance, liberation, and imagining. This conference explores <DistortionText text="distortion" fontSize={24} varySize={false} /> and its various
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
            <a href="/Distortions%20Conference%20CFP.pdf" download>here</a>.
          </p>
        </section>

 
        
      </header>
      ) : isRegistration ? (
        <main className="App-header filler-page registration-page">
          <DistortionText text="REGISTRATION" fontSize={45} varySize={false} color="#ffffff"/>
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
          <DistortionText text="KEYNOTE INFORMATION" fontSize={45} varySize={false}/>
          <section className="keynote-profile">
            <h2>KEYNOTE PERFORMER</h2>
            <h3><a href="https://www.kabaird.com/" target="_blank" rel="noopener noreferrer">Ka Baird</a></h3>
            <p className="keynote-placeholder">Performer, Sound Artist, Musician, and Composer</p>
            <div className="keynote-photo">
              <img src="/Ka Baird Respires Web 020.jpg" alt="Ka Baird" />
            </div>
            <KaBairdBio />
          </section>
          <section className="keynote-profile">
            <h2>KEYNOTE SPEAKER</h2>
            <h3><a href="https://maramills.org/" target="_blank" rel="noopener noreferrer">Mara Mills</a></h3>
            <p className="keynote-placeholder">Associate Professor of Media, Culture, and Communication, New York University</p>
            <div className="keynote-photo">
              <img src="/Mara Mills Photo by Blair Rinn.jpg" alt="Mara Mills" />
            </div>
            <MaraMillsBio />
          </section>
        </main>
      ) : currentPage === "venues-accessibility" ? (
        <main className="App-header filler-page venue-page">
          <DistortionText text="VENUES & ACCESSIBILITY" fontSize={45} varySize={false} color="#ffffff"/>
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
          <DistortionText text="CONTACT" fontSize={45} varySize={false} color="#ffffff"/>
          <ContactContent />
        </main>
      ) : (
        <main className="App-header filler-page">
          <DistortionText text={(pageNames[currentPage] || "Page Not Found").toUpperCase()} fontSize={45} varySize={false}/>
          <p className="page-message">This is the {pageNames[currentPage]?.toLowerCase() || "page you requested"} page.</p>
        </main>
      )}
    </div>
  );
}






