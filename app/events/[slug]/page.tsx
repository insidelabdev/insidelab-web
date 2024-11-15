import { Page } from "@/utils";
export default async function Blog({ params }: { params: { slug: string } }) {
  return <Page params={params} searchParams={null} />;
}
