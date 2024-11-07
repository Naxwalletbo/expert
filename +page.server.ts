import type { PageServerLoad } from "./$types";
import { baseUrl } from "$lib/baseUrl";
export const load = (async ({ fetch, parent }) => {
    const parentData = await parent();
    const resJson: {
        remark: string;
        data: {
            sections: {
                faq?: any
                insurance?: any
                subscribe?: any
            }[]
        };
        status: "success" | "error";
    } = await (await fetch(`${baseUrl}/api/pages/home`)).json();
    return {
        ...parentData,
        ...resJson.data,
    };
}) satisfies PageServerLoad;