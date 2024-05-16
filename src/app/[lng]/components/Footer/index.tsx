import { useTranslation } from "@/i18n";
import { FooterBase } from "./FooterBase";

type FooterProps = { lng: string };
export const Footer = async ({ lng }: FooterProps) => {
  const { t } = await useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};
