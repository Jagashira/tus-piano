import dayjs from "dayjs";
import { atom } from "recoil";
import { getMonth } from "../lib/dayUtil";

export const MonthKey=atom({
    key:"MonthKey",
    default:dayjs().month()
})