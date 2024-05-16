import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "@/i18n/setting";
import { TFunction } from "i18next";

type FooterBaseProps = {
  t: ((key: string) => string) & TFunction<"translation", undefined>;
  lng: string;
};
export const FooterBase = ({ t, lng }: FooterBaseProps) => {
  return (
    <footer style={{ marginTop: 50 }}>
      <Trans i18nKey="languageSwitcher" t={t} values={{ lng }}>
        Switch from <strong>{lng}</strong> to:
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </footer>
  );
};
