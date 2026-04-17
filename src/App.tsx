import './App.css';
import { DistortionText }  from "./DistortionText.tsx"
import { MovingTextBorder, MovingTextBorderVertical } from "./MovingTextBorder.tsx"

export default function App() {
  const movingText =
    "distortion,  overdrive,  grain,  synthesis,  noise,  static,  interference,  warping,  bending,  spirals,  fractals,  plasticity,  deformation,  disinformation,  misinformation,  fascism,  propaganda,  censorship,  post-truth,  conspiracy,  fraud,  fakes,  forgery,  bootlegging,  piracy,  artificiality,  streaming  manipulation,  failure,  corruption,  glitch,  mutation,  transformation,  translation,  disruption,  alternate  realities,  queer  temporalities,  liminality,  non-place,  time,  space,  simulation,  speculative  fiction,  sonic  fiction,  critical  fabulation,  futurities,  para-sociality,  circulation,  cybernetics,  artificial  intelligence,  superstition,  urban  legend,  (media)  folklore,  techno-doping,  surgery,  biohacking,  trauma,  mental  health,  ghosts,  haunting,  vertigo,  disorientation,  neurodivergence  and  masking,  alternate  tunings,  DIY  instruments/music  spaces,  hacking,  auditory  illusions"

  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Removed left and right vertical moving text borders */}

      {/* Top horizontal moving text border */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 48, zIndex: 2000 }}>
        <MovingTextBorder
          text={movingText}
          fontSize={22}
          color="#ff6666"
          backgroundColor="#282c34"
          height={48}
          speed={80}
          direction={"right"}
        />
      </div>

      {/* Bottom horizontal moving text border */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: 48, zIndex: 2000 }}>
        <MovingTextBorder
          text={movingText}
          fontSize={22}
          color="#ff6666"
          backgroundColor="#282c34"
          height={48}
          speed={80}
          direction={"left"}
        />
      </div>

      <header className="App-header">
        <DistortionText text="DISTORTIONS" customSizes={[150, 160, 170, 160, 150, 140, 150, 160, 170, 160, 150, 140]}/>
        <div style={{ height: 8 }} />
        <DistortionText text="New York University GSAS Department of Music Conference" fontSize={35} varySize={false}/>
        <div style={{ height: 16 }} />
        <DistortionText text="October 2-3, 2026" fontSize={50} varySize={false}/>

        <div style={{ marginBottom: 0, textAlign: "center" }}>
          <p className="cfp_description" style={{ marginBottom: 0, textAlign: "center", fontSize: 35 }}>
            Keynote Speaker - <a href="https://maramills.org/" target="_blank" rel="noopener noreferrer" style={{ color: "#ff6666", textDecoration: "underline" }}>Mara Mills</a>
          </p>
            <p style={{ fontSize: 20, marginTop: 0, marginBottom: 0, textAlign: "center", maxWidth: 700, marginLeft: "auto", marginRight: "auto", whiteSpace: "normal" }}>
              (Associate Professor and Ph.D. Director in the Department of Media, Culture, and Communication at New York University)
            </p>
        </div>
        <div style={{ marginBottom: 0, textAlign: "center" }}>
          <p className="cfp_description" style={{ marginBottom: 0, textAlign: "center", fontSize: 35}}>Keynote Performer - TBA</p>
              <p style={{ fontSize: 20, marginTop: 0, marginBottom: 0, textAlign: "center", maxWidth: 700, marginLeft: "auto", marginRight: "auto", whiteSpace: "normal" }}>
              </p>
        </div>
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

        <ul className="cfp_description" style={{ listStyleType: 'disc', paddingLeft: 120, paddingRight: 100, textAlign: 'left' }}>
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

        
        
       <p  style={{ marginBottom: 4, marginTop: 24 }}>
          <b>For papers/presentations:</b>
        </p>
        <ul className="cfp_description" style={{ listStyleType: 'disc', paddingLeft: 120, paddingRight: 100, textAlign: 'left', marginTop: 4 }}>
          <li>Title</li>
          <li>Abstract (250–300 words)</li>
          <li>Preferred presentation formats: 20-minute talk, lightning talk,<br />paper-performance, pre-formed panel</li>
          <li>3–5 keywords</li>
          <li>Hyperlinks for up to 3 relevant video/audio samples</li>
          <li>A/V or other technical requirements</li>
        </ul>

        <p style={{ marginBottom: 4, marginTop: 24 }}>
          <b>For performance/installations</b>
        </p>
        <ul className="cfp_description" style={{ listStyleType: 'disc', paddingLeft: 120, paddingRight: 100, textAlign: 'left', marginTop: 4 }}>
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

 
        <p className="cfp_description">
          *Feel free to email co-chairs Hannah Krasikov, Christine Oppedisano, and Yuval Tessman-Bar-On at 
          <a href="mailto:nyudistortions@gmail.com"> nyudistortions@gmail.com</a>  with any questions.
        </p>
     
        
  
      <p></p>
      
      
      
      </header>
    </div>
  );
}






