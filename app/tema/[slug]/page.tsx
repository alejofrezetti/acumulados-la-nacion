type Params = {
  params: { slug: string };
};

export default function TemaSlug({ params }: Params) {
  return <p>Slug: {params.slug}</p>;
}
