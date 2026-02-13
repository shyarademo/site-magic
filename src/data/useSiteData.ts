import { useMemo } from "react";
import siteDataRaw from "./siteData.json";
import { siteDataSchema, type SiteData } from "./siteDataSchema";

export type SiteDataValid = { valid: true; data: SiteData };
export type SiteDataInvalid = { valid: false; errors: string[] };
export type UseSiteDataResult = SiteDataValid | SiteDataInvalid;

export function useSiteData(): UseSiteDataResult {
  return useMemo(() => {
    const parsed = siteDataSchema.safeParse(siteDataRaw);
    if (parsed.success) {
      return { valid: true, data: parsed.data } as SiteDataValid;
    }
    const errors = parsed.error.issues.map(
      (issue) => `${issue.path.join(" → ")}: ${issue.message}`
    );
    return { valid: false, errors } as SiteDataInvalid;
  }, []);
}
