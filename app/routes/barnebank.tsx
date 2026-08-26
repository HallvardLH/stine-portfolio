import type { MetaFunction } from "@remix-run/node";
import CoverImage from "~/components/cover-image/CoverImage";
import StandaloneParagraph from "~/components/project-sections/StandaloneParagraph";
import ParagraphWithImage from "~/components/project-sections/ParagraphWithImage";
import { StandaloneImage } from "~/components/project-sections/StandaloneImage";
import { MdOutlineOpenInNew } from "react-icons/md";

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
    <main>
      <CoverImage
        src="/barnebank/thumbnail.webp"
        colorScheme="barnebank-scheme"
      />
      <div className="gutter project-section barnebank-scheme">
        <StandaloneParagraph
          textSection={
            <>
              <h1 className="heading-large">Barnebank for Sparebanken Norge</h1>
              <p className="text-medium">
                I løpet av sommeren 2025 utviklet vi en bankløsning for de
                yngste kundene til Sparebanken Norge. Teamet besto av fem
                utviklere og to UX-designere. Den nye løsningen er nå lansert
                for bankens kunder.
              </p>
              <a
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  marginTop: "1rem",
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
                href="https://www.spv.no/dagligbank/nett-og-mobilbank/barnebank"
              >
                Les mer om barnebanken her
                <MdOutlineOpenInNew />
              </a>
            </>
          }
        />

        <div>
          <div className="project-info">
            <p
              style={{ color: "var(--barnebank-scheme-text) !important" }}
              className="text-large"
            >
              Plattform:
            </p>
            <p className="text-medium">App og nettside</p>
          </div>
          <div className="project-info">
            <p
              style={{ color: "var(--barnebank-scheme-text) !important" }}
              className="text-large"
            >
              Periode:
            </p>
            <p className="text-medium">Sommeren 2025</p>
          </div>
        </div>

        <StandaloneParagraph
          textSection={
            <>
              <h2 className="text-medium">Bakgrunn</h2>
              <p>
                Sparebanken Norges yngste kunder benyttet tidligere den samme
                løsningen som voksne kunder, men med visse begrensninger.
                Ettersom personer under 18 år for eksempel ikke kan søke om lån,
                resulterte dette i en applikasjon med mange funksjoner
                tilgjengelig, men med begrenset nytteverdi for barn og unge.
                Sommerprosjektet fulgte en iterativ designprosess der design og
                utvikling foregikk parallelt. UX-teamet leverte tidlig materiale
                til utviklerne, og hovedfunksjoner som kontosaldo, transaksjoner
                og sparemål ble prioritert. Totalt ble det gjennomført fire
                iterasjoner med justeringer basert på innsiktsarbeidet.
              </p>
            </>
          }
        />

        <StandaloneParagraph
          textSection={
            <div>
              <h2 className="text-medium">
                Innsiktsarbeid: Intervju og workshops{" "}
              </h2>
              <p>
                Vi startet innsiktsarbeidet med 11 intervjuer av barn i
                målgruppen, både forbipasserende i Bergen sentrum og barn av
                ansatte i Sparebanken Norge. Vi jobbet to og to, der én
                intervjuet og én noterte, og alle deltakerne fikk godteri som
                takk. Videre holdt vi to workshops med 12 barn, hvor vi
                utforsket hva de liker å gjøre på mobil og iPad. Barna tegnet,
                stemte på apper og laget egne forslag til appdesign, som vi
                senere brukte i prototypen. Vi fordelte rollene slik at én ledet
                og én noterte, og pizza og små belønninger ble servert for å
                gjøre øktene hyggelige.
              </p>
            </div>
          }
        />

        <StandaloneImage
          imageSrc="/barnebank/workshop-sketches.webp"
          imageText="Bordet fra en av workshopene der barna jobbet med tegneøvelser og delte idéer."
          altText="Bordet fra workshopene, dekket med ark, tusjer og barnas kreative forslag til appdesign."
        />

        <StandaloneParagraph
          textSection={
            <div>
              <h2 className="text-medium">Hva vil barna ha?</h2>
              <p>
                Workshopene viste tydelig at barna bruker mest mobil og iPad til
                spill, YouTube og sosiale apper, og at de setter pris på
                interaktivitet, personlig tilpasning og belønning. Penger ble
                oppfattet både fysisk og digitalt, og barna ønsket enkle,
                visuelle måter å følge saldo og sparing på. Gjennom
                tegneøvelsene kom det frem at de ville ha muligheter for å tjene
                penger hjemme, opprette sparemål og tilpasse en egen avatar,
                inspirert av spill som Roblox.
              </p>
            </div>
          }
        />

        <StandaloneImage
          imageSrc="/barnebank/workshop.webp"
          imageText="Barnas tegninger fra øvelsen Tegn din drømmebankapp. Her ser vi forslag som ukesoppgaver, sparemål (kjøpemål) og en avatar tegnet av barna selv."
          altText="Barnas tegninger fra øvelsen ' din drømmebankapp', med ukesoppgaver, avatar og sparemål"
        />

        <h2 className="heading">Prototypen</h2>

        <ParagraphWithImage
          textSection={
            <div>
              <h2 className="text-medium">Hjem</h2>
              <p>
                Innsiktsarbeidet resulterte i en hjemmeside som startpunkt i
                løsningen. Brukeren kan se saldo på alle kontoer ved å bla med
                pilknapper. Brukskonto vises som bankkort, mens sparekonto vises
                som pengeboks fra Kompisbutikken. Barna ønsket en enkel og
                visuell oversikt over pengene sine. Tradisjonelle bankfunksjoner
                som pengeoverføring og transaksjoner er inkludert, men med mer
                barnevennlig språk, der «overfør penger» blir til «flytt penger»
                og «transaksjoner» til «aktiviteter».
              </p>
            </div>
          }
          imageSrc="/barnebank/home.webp"
          imageText="Hjemskjermen viser saldo på alle kontoer visuelt, med barnevennlig språk og ikoner for brukskonto og sparekonto, samt widgets for enklere navigering."
          altText="Hjemskjerm for barnebanken som viser saldo på brukskonto og sparekonto med visuelle ikoner og barnevennlig språk."
        />

        <ParagraphWithImage
          textSection={
            <div>
              <h2 className="text-medium">Flytt penger og Mine penger</h2>
              <p>
                Flytt penger er designet slik at barnet enkelt kan velge hvilken
                konto de vil flytte penger fra, og hvilken de vil flytte pengene
                til. De kan fylle inn ønsket beløp selv, eller bruke
                hurtigknappene for noen faste summer. Mine penger gir barn
                oversikt over hvor pengene deres har gått. Med kategoriene
                Tjent, Spart og Brukt kan de raskt se hvilken kategori som er
                størst, og de kan fokusere på én søyle for detaljerte
                transaksjoner. Tidlig økonomisk bevissthet kan bidra til bedre
                økonomisk mestring senere.
              </p>
            </div>
          }
          imageSrc="/barnebank/mine-penger.webp"
          imageText="Fytt penger og Mine penger gir barna oversikt og kontroll: de kan enkelt flytte penger mellom kontoer og se hvor pengene har gått."
          altText="Skjermbilder som viser funksjonene 'Flytt penger' og 'Mine penger', med kategorier Tjent, Spart og Brukt, og oversikt over barnets transaksjoner."
        />

        <ParagraphWithImage
          textSection={
            <div>
              <h2 className="text-medium">Mine sparepenger</h2>
              <p>
                Etter innsiktsarbeidet landet vi på en versjon av siden Mine
                Sparepenger som kombinerer informasjon og animasjon, med
                sparekompisen som beveger seg rundt på skjermen og passer på
                pengene. Her kan barna også sette seg sparemål og tjene stjerner
                underveis. Intervjuer og workshops viste at barna ønsket en
                sparemålsfunksjon der de kan sette mål og gradvis spare.
                Funksjonen knyttes til stjerner som barna tjener når de setter
                av penger, og som kan brukes til å kle opp sparekompisen, både
                som belønning og som motivasjon for å bygge gode økonomiske
                vaner.
              </p>
            </div>
          }
          imageSrc="/barnebank/mine-sparepenger.webp"
          imageText="Mine Sparepenger kombinerer informasjon og animasjon, med en sparekompis som passer på pengene. Barna kan sette sparemål og tjene stjerner som belønning og motivasjon."
          altText="Skjermbildet 'Mine Sparepenger' med animert sparekompis som passer på pengene, sparemål og belønningssystem med stjerner."
        />

        <ParagraphWithImage
          textSection={
            <div>
              <h2 className="text-medium">Sparekompis</h2>
              <p>
                Workshopene viste at barna ønsket en avatar de kunne gi navn,
                kle opp og knytte personlig tilknytning til. Dette inspirerte
                Sparekompis, en sentral del av designet som gjør nettbanken mer
                engasjerende ved å belønne barn med stjerner når de utfører
                oppdrag, sparer penger eller logger inn. Sparekompisen
                symboliserer trygghet og ansvar, og barna kan ta vare på den for
                å tjene stjerner som brukes i Kompisbutikken til å låse opp nye
                karakterer, pynt og hus. Daglige besøk gir ekstra belønninger og
                skaper vane for jevnlig innsjekk.
              </p>
            </div>
          }
          imageSrc="/barnebank/sparekompis.webp"
          imageText="Sparekompis er en avatar barna kan tilpasse og ta vare på. Den belønner sparing og oppdrag med stjerner, som brukes i butikken. Dette skaper engasjement og vane for jevnlig innsjekk."
          altText="Sparekompis-avatar som barna kan tilpasse og ta vare på, belønner sparing og oppdrag med stjerner som brukes i Kompisbutikken"
        />

        <ParagraphWithImage
          textSection={
            <div>
              <h2 className="text-medium">Oppdrag: Barnesiden</h2>
              <p>
                Gjennom idemyldring i gruppa og workshopene med barna ble det
                tydelig at oppgaver hjemme kunne gi ukelønn. I Oppdrag kan barna
                tjene både ekte penger og stjerner. Oppdrag lar barna tjene
                penger og stjerner ved å fullføre oppgaver foreldrene har lagt
                inn. Når oppgaven godkjennes, legges beløpet i barnets
                spareglass, og stjernene kan brukes i Kompisbutikken.
              </p>
            </div>
          }
          imageSrc="/barnebank/oppdrag-barnesiden.webp"
          imageText="I Oppdrag kan barna tjene både penger og stjerner ved å fullføre oppgaver hjemme. "
          altText="Skjermbildet 'Oppdrag' hvor barna kan fullføre oppgaver hjemme for å tjene ekte penger og stjerner som legges i spareglass og brukes i Kompisbutikken."
        />

        <ParagraphWithImage
          textSection={
            <div>
              <h2 className="text-medium">Oppdrag: Foreldresiden</h2>
              <p>
                Foreldrene er kjernen for oppdrag. Det er de som må gi oppdrag
                til barna, godkjenne om oppdragene er fullført, og gi lønn for
                arbeidet. Foreldrene får en enkel oversikt over status på
                oppdragene for hvert barn, samt oppdrag som venter på
                godkjenning. Foreldreportalen er satt opp med det samme designet
                som barnesiden for å forsikre at funksjon og formål er tydelig
                kommunisert. Foreldre kan sette opp oppdrag, velge hvilke barn
                som skal få oppdraget og hvor ofte det skal gjennomføres. Når
                barna har bedt om lønn kan foreldre overføre beløpet barnet har
                opptjent.
              </p>
            </div>
          }
          imageSrc="/barnebank/oppdrag-foreldresiden.webp"
          imageText="Foreldrenes oppdragsside: de oppretter, godkjenner og belønner oppgaver, med oversikt over status for hvert barn."
          altText="Foreldreportal for Oppdrag med oversikt over barnas oppgaver, status og godkjenning, designet i samme stil som barnesiden for enkel bruk"
        />

        <StandaloneParagraph
          textSection={
            <div>
              <h2 className="text-medium">Min læring fra prosessen</h2>
              <p>
                Sommerprosjektet hos Sparebanken Norge har gitt betydelig faglig
                og personlig utvikling, både som UX-designer og i forståelsen av
                hvordan man arbeider med produkter for ekte brukere. Å arbeide
                mot lansering av et produkt som skal brukes av målgruppen har
                gitt innsikt i en realistisk designprosess, der vi har måttet
                vurdere hvordan løsningen faktisk vil bli brukt og ta høyde for
                ulike brukstilfeller. I tillegg er økonomi og penger et seriøst
                tema som krever at informasjonen er korrekt og tillitsvekkende,
                noe som har gjort arbeidet med presisjon og tydelig
                kommunikasjon ekstra viktig.
              </p>
              <br />
              <p>
                I tillegg har prosjektet understreket viktigheten av
                innsiktsarbeid og medvirkning fra målgruppen. Uten workshops og
                aktivt samarbeid med barna ville bankløsningen sannsynligvis
                ikke inkludert Sparekompis, som i dag er den delen av løsningen
                som knytter sammen alle aktiviteter i appen og sikrer oppnåelsen
                av det viktigste målet: å øke bruk blant målgruppen.
              </p>
            </div>
          }
        />
      </div>
    </main>
  );
}
