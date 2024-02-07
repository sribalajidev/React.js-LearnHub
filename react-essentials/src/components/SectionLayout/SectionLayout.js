function SectionLayout({ title, children, ...attribute }) {
  return (
    <section {...attribute}>
      <h2>{ title }</h2>
      { children }
    </section>
  );
}

export default SectionLayout;