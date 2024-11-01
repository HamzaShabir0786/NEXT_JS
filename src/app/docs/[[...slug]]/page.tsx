// in this folder we will see cath all segments
export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        viewing docs for featuring {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1> viewing docs for featuring {params.slug[0]}</h1>;
  }
  return <h1> Docs Home page</h1>;
}
