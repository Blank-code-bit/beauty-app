import { createClient } from "@sanity/client";
import { fetchQuery } from "./utils/supports";

const client = createClient({
    projectId:'0r1xpjq2',
    dataset:'production',
    apiVersion:'2023-10-11',
    useCdn: true
});

export const fetchFeeds = async ( ) => {
    let data = await client.fetch(fetchQuery).then(feeds => {return feeds})
    return data 
}