import type { MetaFunction } from "@remix-run/node";
import CoverImage from "~/components/cover-image/CoverImage";
import { thumbnails } from "~/data/thumbnails";
import { MdOutlineOpenInNew } from "react-icons/md";
import ChapterNav, { type Chapter } from "~/components/chapter-nav/ChapterNav";
import CaseTitle from "~/components/case/CaseTitle";
import CaseBreak from "~/components/case/CaseBreak";
import CaseImageBreak from "~/components/case/CaseImageBreak";
import CaseColumns from "~/components/case/CaseColumns";
import { Feature, FeatureGroup } from "~/components/case/Feature";
import RelatedProjects from "~/components/case/RelatedProjects";
import {
  Chapter as CaseChapter,
  ChapterBlock,
} from "~/components/case/Chapter";
import { Figure } from "~/components/case/Figure";

const chapters: Chapter[] = [
  { id: "intro", label: "Intro" },
  { id: "bakgrunn", label: "Bakgrunn" },
  { id: "innsikt", label: "Innsikt" },
  { id: "losning", label: "Løsning" },
  { id: "laering", label: "Læring" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Barnebank for Sparebanken Norge - Stine Knutsen" },
    {
      name: "description",
      content:
        "I løpet av sommeren 2025 utviklet vi en bankløsning for de yngste kundene til Sparebanken Norge. Teamet besto av fem utviklere og to UX-designere. Den nye løsningen er nå lansert for bankens kunder.",
    },
  ];
};

export default function ProjectsLibaryRoute() {
  return (
    <main className="case">
      <CoverImage thumbnail={thumbnails.barnebank} />

      <div className="case-chapters">
        <ChapterNav chapters={chapters} />

        <CaseTitle
          id="intro"
          title="Barnebank for Sparebanken Norge"
          intro="I løpet av sommeren 2025 utviklet vi en bankløsning for de yngste kundene til Sparebanken Norge. Teamet besto av fem utviklere og to UX-designere. Den nye løsningen er nå lansert for bankens kunder."
          marginTitle="Om prosjektet"
          facts={[
            { label: "Plattform", value: "App og nettside" },
            { label: "Periode", value: "Sommeren 2025" },
            { label: "Rolle", value: "UX-designer" },
            { label: "Team", value: "Fem utviklere og to UX-designere" },
            {
              label: "Les mer",
              value: (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.spv.no/dagligbank/nett-og-mobilbank/barnebank"
                >
                  Les mer om barnebanken her
                  <MdOutlineOpenInNew />
                </a>
              ),
            },
          ]}
        />
        <CaseBreak eyebrow="I korte trekk">
          En bank for barn, formet av barna selv.
        </CaseBreak>

        <CaseChapter
          id="bakgrunn"
          number="01"
          title="Bakgrunn"
          rule
          lead="Hvorfor barn trenger en bank som er laget for dem."
        >
          <p>
            Sparebanken Norges yngste kunder benyttet tidligere den samme
            løsningen som voksne kunder, men med visse begrensninger. Ettersom
            personer under 18 år for eksempel ikke kan søke om lån, resulterte
            dette i en applikasjon med mange funksjoner tilgjengelig, men med
            begrenset nytteverdi for barn og unge.
          </p>
          <p>
            Sommerprosjektet fulgte en iterativ designprosess der design og
            utvikling foregikk parallelt. UX-teamet leverte tidlig materiale til
            utviklerne, og hovedfunksjoner som kontosaldo, transaksjoner og
            sparemål ble prioritert. Totalt ble det gjennomført fire iterasjoner
            med justeringer basert på innsiktsarbeidet.
          </p>
        </CaseChapter>

        <CaseImageBreak
          src="/barnebank/workshop-sketches.webp"
          alt="Bordet fra workshopene, dekket med ark, tusjer og barnas kreative forslag til appdesign."
          caption="Bordet fra en av workshopene der barna jobbet med tegneøvelser og delte idéer."
          background="linear-gradient(90deg, #a09481, #9b8045)"
        />

        <CaseChapter
          id="innsikt"
          number="02"
          title="Innsikt"
          surface="dark"
          lead="Det vi lærte av barna."
          wide={
            <>
              <CaseColumns
                items={[
                  {
                    title: "Intervjuer",
                    text: (
                      <p>
                        Vi startet innsiktsarbeidet med 11 intervjuer av barn i
                        målgruppen, både forbipasserende i Bergen sentrum og
                        barn av ansatte i Sparebanken Norge. Vi jobbet to og to,
                        der én intervjuet og én noterte, og alle deltakerne fikk
                        godteri som takk.
                      </p>
                    ),
                  },
                  {
                    title: "Workshops",
                    text: (
                      <p>
                        Videre holdt vi to workshops med 12 barn, hvor vi
                        utforsket hva de liker å gjøre på mobil og iPad. Barna
                        tegnet, stemte på apper og laget egne forslag til
                        appdesign, som vi senere brukte i prototypen. Vi
                        fordelte rollene slik at én ledet og én noterte, og
                        pizza og små belønninger ble servert for å gjøre øktene
                        hyggelige.
                      </p>
                    ),
                  },
                ]}
              />

              <ChapterBlock title="Hva vil barna ha?">
                <p className="case-wide-intro">
                  Workshopene viste tydelig at barna bruker mest mobil og iPad
                  til spill, YouTube og sosiale apper, og at de setter pris på
                  interaktivitet, personlig tilpasning og belønning. Penger ble
                  oppfattet både fysisk og digitalt, og barna ønsket enkle,
                  visuelle måter å følge saldo og sparing på. Gjennom
                  tegneøvelsene kom det frem at de ville ha muligheter for å
                  tjene penger hjemme, opprette sparemål og tilpasse en egen
                  avatar, inspirert av spill som Roblox.
                </p>
              </ChapterBlock>

              <Figure
                src="/barnebank/workshop.webp"
                alt="Barnas tegninger fra øvelsen «Tegn din drømmebankapp», med ukesoppgaver, avatar og sparemål."
                caption="Barnas tegninger fra øvelsen Tegn din drømmebankapp. Her ser vi forslag som ukesoppgaver, sparemål (kjøpemål) og en avatar tegnet av barna selv."
              />
            </>
          }
        />

        <CaseChapter
          id="losning"
          number="03"
          title="Løsning"
          lead="En barnebank med fokus på oversikt, sparing og belønning."
          wide={
            <>
              <FeatureGroup title="For barna">
                <Feature
                  title="Hjem"
                  figures={[
                    {
                      src: "/barnebank/home.webp",
                      alt: "Hjemskjerm for barnebanken som viser saldo på brukskonto og sparekonto med visuelle ikoner og barnevennlig språk.",
                      caption:
                        "Hjemskjermen viser saldo på alle kontoer visuelt, med barnevennlig språk og ikoner for brukskonto og sparekonto, samt widgets for enklere navigering.",
                    },
                  ]}
                >
                  <p>
                    Innsiktsarbeidet resulterte i en hjemmeside som startpunkt i
                    løsningen. Brukeren kan se saldo på alle kontoer ved å bla
                    med pilknapper. Brukskonto vises som bankkort, mens
                    sparekonto vises som pengeboks fra Kompisbutikken. Barna
                    ønsket en enkel og visuell oversikt over pengene sine.
                    Tradisjonelle bankfunksjoner som pengeoverføring og
                    transaksjoner er inkludert, men med mer barnevennlig språk,
                    der «overfør penger» blir til «flytt penger» og
                    «transaksjoner» til «aktiviteter».
                  </p>
                </Feature>

                <Feature
                  title="Flytt penger og Mine penger"
                  figures={[
                    {
                      src: "/barnebank/mine-penger.webp",
                      alt: "Skjermbilder som viser funksjonene «Flytt penger» og «Mine penger», med kategoriene Tjent, Spart og Brukt, og oversikt over barnets transaksjoner.",
                      caption:
                        "Flytt penger og Mine penger gir barna oversikt og kontroll: de kan enkelt flytte penger mellom kontoer og se hvor pengene har gått.",
                    },
                  ]}
                >
                  <p>
                    Flytt penger er designet slik at barnet enkelt kan velge
                    hvilken konto de vil flytte penger fra, og hvilken de vil
                    flytte pengene til. De kan fylle inn ønsket beløp selv,
                    eller bruke hurtigknappene for noen faste summer. Mine
                    penger gir barn oversikt over hvor pengene deres har gått.
                    Med kategoriene Tjent, Spart og Brukt kan de raskt se
                    hvilken kategori som er størst, og de kan fokusere på én
                    søyle for detaljerte transaksjoner. Tidlig økonomisk
                    bevissthet kan bidra til bedre økonomisk mestring senere.
                  </p>
                </Feature>

                <Feature
                  title="Mine sparepenger"
                  figures={[
                    {
                      src: "/barnebank/mine-sparepenger.webp",
                      alt: "Skjermbildet «Mine sparepenger» med animert sparekompis som passer på pengene, sparemål og belønningssystem med stjerner.",
                      caption:
                        "Mine sparepenger kombinerer informasjon og animasjon, med en sparekompis som passer på pengene. Barna kan sette sparemål og tjene stjerner som belønning og motivasjon.",
                    },
                  ]}
                >
                  <p>
                    Etter innsiktsarbeidet landet vi på en versjon av siden Mine
                    sparepenger som kombinerer informasjon og animasjon, med
                    sparekompisen som beveger seg rundt på skjermen og passer på
                    pengene. Her kan barna også sette seg sparemål og tjene
                    stjerner underveis. Intervjuer og workshops viste at barna
                    ønsket en sparemålsfunksjon der de kan sette mål og gradvis
                    spare. Funksjonen knyttes til stjerner som barna tjener når
                    de setter av penger, og som kan brukes til å kle opp
                    sparekompisen, både som belønning og som motivasjon for å
                    bygge gode økonomiske vaner.
                  </p>
                </Feature>

                <Feature
                  title="Sparekompis"
                  figures={[
                    {
                      src: "/barnebank/sparekompis.webp",
                      alt: "Sparekompis-avatar som barna kan tilpasse og ta vare på, og som belønner sparing og oppdrag med stjerner til bruk i Kompisbutikken.",
                      caption:
                        "Sparekompis er en avatar barna kan tilpasse og ta vare på. Den belønner sparing og oppdrag med stjerner, som brukes i butikken. Dette skaper engasjement og vane for jevnlig innsjekk.",
                    },
                  ]}
                >
                  <p>
                    Workshopene viste at barna ønsket en avatar de kunne gi
                    navn, kle opp og knytte personlig tilknytning til. Dette
                    inspirerte Sparekompis, en sentral del av designet som gjør
                    nettbanken mer engasjerende ved å belønne barn med stjerner
                    når de utfører oppdrag, sparer penger eller logger inn.
                    Sparekompisen symboliserer trygghet og ansvar, og barna kan
                    ta vare på den for å tjene stjerner som brukes i
                    Kompisbutikken til å låse opp nye karakterer, pynt og hus.
                    Daglige besøk gir ekstra belønninger og skaper vane for
                    jevnlig innsjekk.
                  </p>
                </Feature>

                <Feature
                  title="Oppdrag: Barnesiden"
                  figures={[
                    {
                      src: "/barnebank/oppdrag-barnesiden.webp",
                      alt: "Skjermbildet «Oppdrag» hvor barna kan fullføre oppgaver hjemme for å tjene ekte penger og stjerner som legges i spareglass og brukes i Kompisbutikken.",
                      caption:
                        "I Oppdrag kan barna tjene både penger og stjerner ved å fullføre oppgaver hjemme.",
                    },
                  ]}
                >
                  <p>
                    Gjennom idemyldring i gruppa og workshopene med barna ble
                    det tydelig at oppgaver hjemme kunne gi ukelønn. I Oppdrag
                    kan barna tjene både ekte penger og stjerner. Oppdrag lar
                    barna tjene penger og stjerner ved å fullføre oppgaver
                    foreldrene har lagt inn. Når oppgaven godkjennes, legges
                    beløpet i barnets spareglass, og stjernene kan brukes i
                    Kompisbutikken.
                  </p>
                </Feature>
              </FeatureGroup>

              <FeatureGroup title="For foreldrene">
                <Feature
                  title="Oppdrag: Foreldresiden"
                  figures={[
                    {
                      src: "/barnebank/oppdrag-foreldresiden.webp",
                      alt: "Foreldreportal for Oppdrag med oversikt over barnas oppgaver, status og godkjenning, designet i samme stil som barnesiden.",
                      caption:
                        "Foreldrenes oppdragsside: de oppretter, godkjenner og belønner oppgaver, med oversikt over status for hvert barn.",
                    },
                  ]}
                >
                  <p>
                    Foreldrene er kjernen for oppdrag. Det er de som må gi
                    oppdrag til barna, godkjenne om oppdragene er fullført, og
                    gi lønn for arbeidet. Foreldrene får en enkel oversikt over
                    status på oppdragene for hvert barn, samt oppdrag som venter
                    på godkjenning. Foreldreportalen er satt opp med det samme
                    designet som barnesiden for å forsikre at funksjon og formål
                    er tydelig kommunisert. Foreldre kan sette opp oppdrag,
                    velge hvilke barn som skal få oppdraget og hvor ofte det
                    skal gjennomføres. Når barna har bedt om lønn kan foreldre
                    overføre beløpet barnet har opptjent.
                  </p>
                </Feature>
              </FeatureGroup>
            </>
          }
        />

        <CaseChapter
          id="laering"
          number="04"
          title="Min læring fra prosessen"
          surface="soft"
          lead="Hva sommerprosjektet har lært meg som UX-designer."
        >
          <CaseColumns
            items={[
              {
                title: "Design for ekte brukere",
                text: "Sommerprosjektet hos Sparebanken Norge har gitt betydelig faglig og personlig utvikling, både som UX-designer og i forståelsen av hvordan man arbeider med produkter for ekte brukere. Å arbeide mot lansering av et produkt som skal brukes av målgruppen har gitt innsikt i en realistisk designprosess, der vi har måttet vurdere hvordan løsningen faktisk vil bli brukt og ta høyde for ulike brukstilfeller. I tillegg er økonomi og penger et seriøst tema som krever at informasjonen er korrekt og tillitsvekkende, noe som har gjort arbeidet med presisjon og tydelig kommunikasjon ekstra viktig.",
              },
              {
                title: "Verdien av innsiktsarbeid",
                text: "I tillegg har prosjektet understreket viktigheten av innsiktsarbeid og medvirkning fra målgruppen. Uten workshops og aktivt samarbeid med barna ville bankløsningen sannsynligvis ikke inkludert Sparekompis, som i dag er den delen av løsningen som knytter sammen alle aktiviteter i appen og sikrer oppnåelsen av det viktigste målet: å øke bruk blant målgruppen.",
              },
            ]}
          />
        </CaseChapter>
      </div>

      <RelatedProjects
        projects={[
          {
            thumbnail: thumbnails.dromme,
            title: "Drømmeland",
            link: "/drømmeland",
          },
          {
            thumbnail: thumbnails.finn,
            title: "FINN Eiendom",
            link: "/finn-eiendom",
          },
          {
            thumbnail: thumbnails.rema,
            title: "Redesign: Rema appen",
            link: "/æ",
          },
          { thumbnail: thumbnails.corwell, title: "CorWell", link: "/corwell" },
        ]}
      />
    </main>
  );
}
