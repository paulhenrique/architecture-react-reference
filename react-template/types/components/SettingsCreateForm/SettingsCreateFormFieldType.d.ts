export type SettingsCreateFormFieldType = {
    contractedDemand: number;
    rechargePrioritization: string;
    maxDefaultPotency: number;
    maxDateTimeRangePotency: {
        start: string;
        end: string;
        maxPotency: number;
        key?: string;
    }[];
    state: string;
    city: string;
    rechargeStation: string;
    address: string;
};
