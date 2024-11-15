export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const file = (await params).slug;

  return <div>Test</div>;
}