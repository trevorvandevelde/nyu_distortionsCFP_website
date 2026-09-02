import './Schedule.css';
import { useState } from 'react';
import { DistortionText } from './DistortionText.tsx';

const scheduleText = `DISTORTIONS

New York University GSAS Department of Music Conference

Silver Center for Arts and Sciences

31 Washington Pl, New York, NY 10003

CONFERENCE SCHEDULE

FRIDAY OCTOBER 2, 2026

8:00 a.m. - 5:00 p.m.
Registration (Silver 120)

8:00 a.m. - 9:00 a.m.
Breakfast (Silver 120)

9:00 a.m. - 9:15 a.m.
Introductory Remarks (Silver 320)

9:00 a.m. - 5:00 p.m.
Installations (Silver 120)
- Skyler Zheng, Vision Noise
- Bria Nachele, Bridge Over Troubled Waters / Still Watters Run Deep

9:15 a.m. - 10:45 a.m.
Panel 1: Refracting Queerness and Femininity (Silver 320)
Chair: Maureen Mahon
- Jaida Wilson, "'I Wanna Take You Out Sometime': 'Sushi' and Black Queer Nightlife in Eusexua"
- Stella Seorin Bak, "Distorting Femininity in K-POP across Borders: The Transnational Reconfiguration of Body Image in TWICE"
- Gillian Radcliffe, "Timbral Expressions of Gender and Sexuality in SOPHIE'S 'OIL OF EVERY PEARL'S UN-INSIDES' (2017)"

11:00 a.m. - 12:30 p.m.
Panel 2: Temporal Mediations (Silver 320)
Chair: Jaime Oliver
- Yanqi Chen, "Mediated Duration: Technical Memory, Cybernetic Operationality, and the Distortion of Time"
- Julian Day, "'At Least I'll Live As I Believe': Peering Through the Dark Shades of 'Pop Star Time'"
- Lauren Adamow, "She('s) Got A()way: Temporal Drag in Chappell Roan's 'The Subway'"

12:30 p.m. - 1:30 p.m.
*1:00 p.m.
Lunch (Silver 120)
- Screening: Sawyer Adler, The Sunset Scrolls: An Opera for TikTok (10 min)

1:30 p.m. - 3:15 p.m.
Concert 1 (Silver 220)
- JD Davids, Moira Williams, Forest Kamerin, Care on Hold: Pharmacy Hold Music, Access Intimacy, and the Sonic Politics of Chronic Illness
- Thessia Machado and Ranjit Bhatnagar, slipgear
- Lisa Ann Schonberg and Sara Wentworth, Mount Right
- Federico Balducci, Dial Drift v3: System Signal Residue

3:30 p.m. - 5:00 p.m.
Panel 3: Warping Space (Silver 320)
Chair: Fanny Gribenski
- Sophia Cocozza, "Distorting the Environment: Carolee Schneemann and the Sound of Collision"
- Jenn Grossman, "Tracing the Blur: Exploring Reverb's Psycho-Spatial Resonance"
- Jessie Monts, "Knowing after Postmodernism: Ecological Imaginings of Spatio-Temporal Epistemology in Jessie Montgomery's Rounds"

5:15 p.m. - 6:45 p.m.
Panel 4: Distorted Vitalities (Silver 320)
Chair: Clifton Boyd
- Seon Shim, "Distortions in the Brain: QEEG Brain Mapping in Neurodivergence Diagnosis"
- Ian Mahanpour, "'The Digital Revolution is Over': Oval, Mille Plateaux, and the Silence of Madness"
- Max Keller, "Halted Voices: AIDS Testimony in the K. Robert Schwarz Papers"

7:00 - 8:00 p.m.
Keynote Performance: Ka Baird (Silver 220)

8:00 - 9:00 p.m.
Reception (Silver 220)

SATURDAY OCTOBER 3, 2026

8:00 a.m. - 5:00 p.m.
Registration (Silver 120)

8:00 a.m. - 9:00 a.m.
Breakfast (Silver 120)

9:00 a.m. - 5:00 p.m.
Installations (Silver 120)
- Skyler Zheng, Vision Noise
- Bria Nachele, Bridge Over Troubled Waters / Still Watters Run Deep

9:00 a.m. - 10:30 a.m.
Panel 5: Paranormal Presences (Silver 320)
Chair: Annie Garlid
- Isobel D'Cruz Barnes, "Hearing Things: Haunted Acoustemology and the Sound of Supernatural in Post-Colonial Malaysia"
- DB Amorin, "Interference Events: UAP and the Mythogenic Field"
- Liz Jorgenson, "Digital Ghosts in the Analog Machine: Technological Failure, Sampling Loops, and Echoes of the COVID-19 Pandemic in Alex Kister's The Mandela Catalogue"

10:45 a.m. - 12:15 p.m.
Panel 6: Audio Interference (Silver 320)
Chair: Joshua Biggs
- Alex Durr, "It's Like You're Really There: Liveness and/as Fidelity in Recordings of Independent Origin"
- Isaac Blumfield, "The Speed of Samples: Audio Playback Speed as (Artistic) Research"
- Mike Clemow, "Audi Pro Nobis: Field Recording, Dysmorphia, and the Post-commodity Condition"

12:15 p.m. - 1:15 p.m.
Lunch (Silver 120)

1:15 p.m. - 2:45 p.m.
Panel 7: Twisting Narratives and Semiotics (Silver 320)
Chair: David Samuels
- Jardena Gertler-Jaffe, "Jewish Opera? The Look and Sound of Jewish Difference in Bates's Kavalier and Clay"
- Ellen Jeon, "IMDb Sorting Algorithms and the Semiotics of Audience Voice in Squid Game"
- Zachary Walker-Kahne, "The False Promise of Music in Dorothy Baker's Young Man with a Horn (1938) and Michael Ondaatje's Coming Through Slaughter (1976)"

3:00 p.m. - 4:00 p.m.
Panel 8: Political Spirals (Silver 320)
Chair: Louis Karchin
- Lydia Rufin, "Dancing With the Devil: Music and Dance as Indicators of Social Inversion in Images of the Witches' Sabbath in Early Modern Europe"
- Winter Craig, "Satanic Seal of Approval: The Parental Advisory Label's Religious-Right Backmasking Scare Origins and Role in Democratic Campaign Strategies"

4:15 p.m. - 5:45 p.m.
Concert 2 (Silver 220)
- Alma Laprida and Bryce Hackford, Subwoofer Duo
- Alexandra Berger and Allen Fogelsanger, Static
- David Acevedo, NANO 1
- Laura Horne, To Which Do We Belong

6:00 p.m. - 7:30 p.m.
Keynote Talk: Mara Mills (Silver 320)

7:30 p.m. - 8:30 p.m.
Reception and Closing Remarks (Silver 220)`;

function renderScheduleText(text: string) {
  return text.split(/\n\n+/).map((block, blockIndex) => {
    const lines = block.split("\n");
    const isHeader = lines.length === 1 && lines[0] === lines[0].toUpperCase() && /[A-Z]/.test(lines[0]);
    const times = lines.filter((line) => /^\*?\d/.test(line));
    const information = lines.filter((line) => !/^\*?\d/.test(line));

    if (isHeader) {
      return <div className="schedule-heading" key={`${block}-${blockIndex}`}>{lines[0]}</div>;
    }

    return (
      <div className="schedule-entry" key={`${block}-${blockIndex}`}>
        <div className="schedule-times">
          {times.map((time, timeIndex) => <div key={`${time}-${timeIndex}`}>{time}</div>)}
        </div>
        <div className="schedule-information">
          {information.map((line, lineIndex) => {
            const isEvent = /^(Panel|Concert|Keynote|Installations|Lunch|Breakfast|Registration|Reception|Introductory Remarks)/.test(line);
            const displayLine = line.startsWith("- ") ? `\u2022 ${line.slice(2)}` : line;
            return <div className={isEvent ? "schedule-event" : "schedule-line"} key={`${line}-${lineIndex}`}>{displayLine}</div>;
          })}
        </div>
      </div>
    );
  });
}

export default function Schedule() {
  const [, fridayAndSaturday] = scheduleText.split("\nFRIDAY OCTOBER 2, 2026\n");
  const [fridaySchedule, saturdaySchedule] = fridayAndSaturday.split("\nSATURDAY OCTOBER 3, 2026\n");
  const [activeDay, setActiveDay] = useState<"friday" | "saturday">("friday");
  const scheduleForDay = activeDay === "friday"
    ? `FRIDAY OCTOBER 2, 2026\n\n${fridaySchedule.trim()}`
    : `SATURDAY OCTOBER 3, 2026\n\n${saturdaySchedule.trim()}`;

  return (
    <main className="schedule-page">
      <div className="schedule-intro">
        <DistortionText text="CONFERENCE SCHEDULE" fontSize={60} varySize={false} color="#ffffff" />
      </div>
      <div className="schedule-tabs" role="tablist" aria-label="Schedule days">
        <button
          className={activeDay === "friday" ? "schedule-tab schedule-tab-active" : "schedule-tab"}
          onClick={() => setActiveDay("friday")}
          role="tab"
          aria-selected={activeDay === "friday"}
        >
          FRIDAY
        </button>
        <button
          className={activeDay === "saturday" ? "schedule-tab schedule-tab-active" : "schedule-tab"}
          onClick={() => setActiveDay("saturday")}
          role="tab"
          aria-selected={activeDay === "saturday"}
        >
          SATURDAY
        </button>
      </div>
      <div className="schedule-column" role="tabpanel">
        {renderScheduleText(scheduleForDay)}
      </div>
      <a className="schedule-download" href="/Distortions Conference Website.pdf" download>
        DOWNLOAD SCHEDULE PDF
      </a>
    </main>
  );
}
