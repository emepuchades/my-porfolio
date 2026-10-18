export default function NeonSign({ text, startDelay = 0, step = 80 }) {
  return [...text].map((character, index) => (
    <span
      key={`${character}-${index}`}
      className="neon-char"
      style={{ '--neon-delay': `${startDelay + index * step}ms` }}
    >
      {character}
    </span>
  ));
}
