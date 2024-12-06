import {
  FACEBOOK_MAX_CHRACTER,
  INSTRAGRAM_MAX_CHRACTER,
} from "../lib/constans";

export default function Stats({ stats }) {
  const { numberOfCharacters, numberOfWords } = stats;
  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharacters} label="Chacracters" />
      <Stat
        number={INSTRAGRAM_MAX_CHRACTER - numberOfCharacters}
        label="Instagram"
      />
      <Stat
        number={FACEBOOK_MAX_CHRACTER - numberOfCharacters}
        label="Facebook"
      />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
