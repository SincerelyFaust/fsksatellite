import React from "react";
import Blooddrop from "./Blooddrop";

const History = () => {
  return (
    <div className="flex flex-row flex-wrap-reverse justify-around gap-10 items-center w-screen">
      <div className="w-8/12 sm:w-11/12">
        <div className="bg-red-600 p-16 sm:p-10">
          <p className="text-white text-xl sm:text-sm">
            The collective was born in 2017 in Venosa, province of Potenza, and
            was made up of Sapobully (initially known as SapoHaze), Chiello,
            Taxi B (previously known as Disa and then as TAXMANIA), ThugNizü,
            Powv and YoungGucci. The first song of the collective was Flexioni,
            published on YouTube on 2 June 2017 in which Sapobully, Chiello and
            Younggucci participated. In 2018, Zingaro was released, an
            independent album consisting of 8 tracks in which the drill
            influences of Sapobully and the emo ones of Chiello are denoted. The
            collective rises to the fore with the album &quot;FSK
            TRAPSHIT&quot;, released on July 12, 2019 for the Thaurus label and
            distributed by Universal. The album, belonging to the trap genre,
            has some hardstyle, screamo and emo influences. On December 6, 2019,
            the re-edition of &quot;FSK TRAPSHIT&quot; is released, the
            &quot;FSK TRAPSHIT REVENGE&quot;, containing 7 unreleased tracks;
            one of those is &quot;CAPI DELLA TRAP&quot; created in collaboration
            with Gué Pequeno. Thanks to its re-issue, FSK TRAPSHIT reached the
            sixth position in the FIMI Album Ranking. In January 2020, the album
            received a gold record from the Italian Music Industry Federation
            for having totaled more than 25,000 sold units nationwide. Later
            that year in September, it exceeded 50,000 sales becoming platinum.
            Anticipated by the single &quot;SETTIMANA AL CALDO&quot;, the
            collective&apos;s second studio album &quot;PADRE, FIGLIO E
            SPIRITO&quot; is released on September 11th. Consisting of fifteen
            tracks, it features the likes of Sfera Ebbasta, Chief Keef and
            Tadoe. On 29th June of 2021, the members of the group announced
            their decision to split temporarily and dedicate themselves to solo
            projects via a press release on their social profiles. The first
            member to release a solo song after the announcement of their break
            is Taxi B, who on September 17th, 2021, released &quot;Sesso &
            Soldi&quot;, produced by Boss Doms, former producer of Achille
            Lauro. The second member to release a solo song is Chiello, who on
            September 24th, 2021, publishes the single &quot;Quanto ti
            vorrei&quot;, produced by Shablo. The song anticipates his first
            album, &quot;Oceano Paradiso&quot;, released on October 15th of the
            same year. Consisting of eleven tracks, the only guest is Taxi B on
            the Damerino track; the productions were entrusted to Mace, Shablo,
            Greg Willen and Colombre. Later he participated in Sick Luke&apos;s
            single &quot;La strega del frutteto &quot; with Madame. Sapobully,
            on the other hand, will be engaged in several features, such as that
            of &quot;VVS & Molly&quot; by Thelonious B., not releasing anything
            of his own by the end of 2021.
          </p>
        </div>
        <div className="flex flex-row gap-10 justify-between">
          <Blooddrop duration={1} y={150} />
          <Blooddrop duration={1} y={100} />
          <Blooddrop duration={1} y={150} />
          <Blooddrop duration={1} y={100} />
          <Blooddrop duration={1} y={150} />
          <Blooddrop duration={1} y={100} />
          <Blooddrop duration={1} y={150} />
          <Blooddrop duration={1} y={100} />
          <Blooddrop duration={1} y={150} />
          <Blooddrop duration={1} y={100} />
          <Blooddrop duration={1} y={150} />
          <Blooddrop duration={1} y={100} />
          <Blooddrop duration={1} y={150} />
          <Blooddrop duration={1} y={100} />
          <Blooddrop duration={1} y={150} />
          <Blooddrop duration={1} y={100} />
        </div>
      </div>
      <div className="h-96 w-96 text-10xl text-red-600 flex justify-center items-center font-swampwitch sm:text-8xl">
        <p>History</p>
      </div>
    </div>
  );
};

export default History;
