import { z } from 'zod'

export class partnerSchema {
    postCreatePartner() {
        return z.object({
            name: z.string(),
            description: z.string(),
            image: z.object({ file_url: z.string(), thumbnail_url: z.string() }),
            channel_type: z.string(),
            pic_name: z.string(),
            pic_phone_number: z.string(),
            pic_whatsapp_number: z.string(),
            pic_email: z.string(),
            district_id: z.number(),
            address: z.string(),
            geo_location: z.object({
                type: z.string(),
                coordinates: z.array(z.number()),
            }),
            stage: z.string(),
            external_id: z.string(),
            additional_notes: z.string(),
        });

    }
}