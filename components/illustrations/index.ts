export { HeroScene, type HeroSceneProps } from "./HeroScene";
export { PagodaMotif, type PagodaMotifProps } from "./PagodaMotif";
export { LedgerMotif, type LedgerMotifProps } from "./LedgerMotif";
export { ScaleMotif, type ScaleMotifProps } from "./ScaleMotif";
export { CalculatorMotif, type CalculatorMotifProps } from "./CalculatorMotif";
export { AbacusMotif, type AbacusMotifProps } from "./AbacusMotif";
export { CoinsMotif, type CoinsMotifProps } from "./CoinsMotif";
export { PlanMotif, type PlanMotifProps } from "./PlanMotif";
export { ReceiptMotif, type ReceiptMotifProps } from "./ReceiptMotif";
export { KeyMotif, type KeyMotifProps } from "./KeyMotif";
export { ShieldMotif, type ShieldMotifProps } from "./ShieldMotif";
export { WarehouseMotif, type WarehouseMotifProps } from "./WarehouseMotif";
export { TaxMotif, type TaxMotifProps } from "./TaxMotif";
export { CarveOutsCollage, type CarveOutsCollageProps } from "./CarveOutsCollage";

import { PagodaMotif } from "./PagodaMotif";
import { LedgerMotif } from "./LedgerMotif";
import { ScaleMotif } from "./ScaleMotif";
import { CalculatorMotif } from "./CalculatorMotif";
import { AbacusMotif } from "./AbacusMotif";
import { CoinsMotif } from "./CoinsMotif";
import { PlanMotif } from "./PlanMotif";
import { ReceiptMotif } from "./ReceiptMotif";
import { KeyMotif } from "./KeyMotif";
import { ShieldMotif } from "./ShieldMotif";
import { WarehouseMotif } from "./WarehouseMotif";
import { TaxMotif } from "./TaxMotif";

export const motifByKey: Record<string, React.ComponentType<{ className?: string; "aria-label"?: string }>> = {
	pagoda: PagodaMotif,
	ledger: LedgerMotif,
	scale: ScaleMotif,
	calculator: CalculatorMotif,
	abacus: AbacusMotif,
	coins: CoinsMotif,
	plan: PlanMotif,
	receipt: ReceiptMotif,
	key: KeyMotif,
	shield: ShieldMotif,
	warehouse: WarehouseMotif,
	tax: TaxMotif,
};
