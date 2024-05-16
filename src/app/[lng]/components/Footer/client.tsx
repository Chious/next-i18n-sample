"use client";

import { FooterBase } from "./FooterBase";
import { useTranslation } from "@/i18n/client";

type FooterProps = { lng: string };
export const Footer = ({ lng }: FooterProps) => {
  const { t } = useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};
