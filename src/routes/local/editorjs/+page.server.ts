import db from "$db"
import type { PageServerLoad } from "./$types"

export const load:PageServerLoad =async () => {
    const editorData = await db.collection("pages").findOne({ slug:"start" }) as any
    editorData['_id'] = editorData['_id'].toString()
    return { editorData }
}