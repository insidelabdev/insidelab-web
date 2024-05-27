import Footer from "@/components/com/footer";
import { Navbar } from "@/components/navbar";
import { TemplateType } from "@/types";
import { Page } from "@/utils";
import { getTemplate } from "@/utils/Page";
export default async function Home({ params }: { params: { slug: string } }) {
  let template: TemplateType = await getTemplate();
  return (
    <Page
      params={{
        slug: "home",
      }}
    />
  );
}
