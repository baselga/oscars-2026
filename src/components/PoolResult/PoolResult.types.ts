import type { Player } from "../../data";

export type Voter = Pick<Player, "id" | "name" | "img">;
export type VotersByNomination = Map<string, Voter[]>;
