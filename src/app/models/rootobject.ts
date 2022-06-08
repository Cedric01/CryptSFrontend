import { Exchange } from "./exchanges";
import { Status } from "./status";

export interface RootObject {
    status: Status;
    data: Exchange[];
}