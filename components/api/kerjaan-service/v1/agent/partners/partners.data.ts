export class partnerData {
    createPartner() {
        return {
            name: "string",
            description: "string",
            image: {
                file_url: "string",
                thumbnail_url: "string"
            },
            channel_type: "string",
            pic_name: "string",
            pic_phone_number: "string",
            pic_whatsapp_number: "string",
            pic_email: "string",
            district_id: 0,
            address: "string",
            geo_location: {
                type: "Point",
                coordinates: []
            },
            stage: "string",
            external_id: "string",
            additional_notes: "string"
        }
    }
}
