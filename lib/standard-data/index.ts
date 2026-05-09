import type { StandardPageData } from "./types";

// NAS (IAS equivalents)
import { nas1 } from "./nas-1";
import { nas2 } from "./nas-2";
import { nas7 } from "./nas-7";
import { nas8 } from "./nas-8";
import { nas10 } from "./nas-10";
import { nas12 } from "./nas-12";
import { nas16 } from "./nas-16";
import { nas19 } from "./nas-19";
import { nas20 } from "./nas-20";
import { nas21 } from "./nas-21";
import { nas23 } from "./nas-23";
import { nas24 } from "./nas-24";
import { nas26 } from "./nas-26";
import { nas27 } from "./nas-27";
import { nas28 } from "./nas-28";
import { nas29 } from "./nas-29";
import { nas32 } from "./nas-32";
import { nas33 } from "./nas-33";
import { nas34 } from "./nas-34";
import { nas36 } from "./nas-36";
import { nas37 } from "./nas-37";
import { nas38 } from "./nas-38";
import { nas39 } from "./nas-39";
import { nas40 } from "./nas-40";
import { nas41 } from "./nas-41";

// NFRS (IFRS equivalents)
import { nfrs1 } from "./nfrs-1";
import { nfrs2 } from "./nfrs-2";
import { nfrs3 } from "./nfrs-3";
import { nfrs4 } from "./nfrs-4";
import { nfrs5 } from "./nfrs-5";
import { nfrs6 } from "./nfrs-6";
import { nfrs7 } from "./nfrs-7";
import { nfrs8 } from "./nfrs-8";
import { nfrs9 } from "./nfrs-9";
import { nfrs10 } from "./nfrs-10";
import { nfrs11 } from "./nfrs-11";
import { nfrs12 } from "./nfrs-12";
import { nfrs13 } from "./nfrs-13";
import { nfrs14 } from "./nfrs-14";
import { nfrs15 } from "./nfrs-15";
import { nfrs16 } from "./nfrs-16";
import { nfrs17 } from "./nfrs-17";

const dataMap: Record<string, StandardPageData> = {
	"nas-1": nas1,
	"nas-2": nas2,
	"nas-7": nas7,
	"nas-8": nas8,
	"nas-10": nas10,
	"nas-12": nas12,
	"nas-16": nas16,
	"nas-19": nas19,
	"nas-20": nas20,
	"nas-21": nas21,
	"nas-23": nas23,
	"nas-24": nas24,
	"nas-26": nas26,
	"nas-27": nas27,
	"nas-28": nas28,
	"nas-29": nas29,
	"nas-32": nas32,
	"nas-33": nas33,
	"nas-34": nas34,
	"nas-36": nas36,
	"nas-37": nas37,
	"nas-38": nas38,
	"nas-39": nas39,
	"nas-40": nas40,
	"nas-41": nas41,
	"nfrs-1": nfrs1,
	"nfrs-2": nfrs2,
	"nfrs-3": nfrs3,
	"nfrs-4": nfrs4,
	"nfrs-5": nfrs5,
	"nfrs-6": nfrs6,
	"nfrs-7": nfrs7,
	"nfrs-8": nfrs8,
	"nfrs-9": nfrs9,
	"nfrs-10": nfrs10,
	"nfrs-11": nfrs11,
	"nfrs-12": nfrs12,
	"nfrs-13": nfrs13,
	"nfrs-14": nfrs14,
	"nfrs-15": nfrs15,
	"nfrs-16": nfrs16,
	"nfrs-17": nfrs17,
};

export function getStandardPageData(slug: string): StandardPageData | undefined {
	return dataMap[slug];
}

export type { StandardPageData } from "./types";
