import { Cell } from "ton-core";

export interface ContractSource {
    initialCode: Cell;
    initialData: Cell;
    workchain: number;
    type: string;
    backup(): string;
    describe(): string;
}