import {key,baseUrl} from "../util/const.js"

export async function getTwiceTem(LoctionID){
    const res =await fetch(`${baseUrl}/v7/weather/24h?key=${key}&location=${LoctionID}`);
    const result = await res.json()
    return result
}