import Link from "next/link";
import { useTranslation } from "@/i18n";

type PageProps = { params: { lng: string } };
export default async function Page({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng, "second-page");
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}`}>{t("back-to-home")}</Link>
    </>
  );
}
