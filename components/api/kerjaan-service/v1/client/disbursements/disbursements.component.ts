import { BaseComponent } from 'components/api/component.base'
import {DisbursementsData} from "./disbursements.data";
import {DisbursementsSchema} from "./disbursements.schema";
import {Randomizer} from "core/utils/randomizer";

export class DisbursementsComponent extends BaseComponent {
    data = new DisbursementsData()
    schema = new DisbursementsSchema()
    private random = new Randomizer()

    constructor(token?: string) {
        super({
            baseURL: process.env.BASE_URL_API + '/v1/client/disbursements',
            headers: {
                Authorization: token ? `Bearer ${token}` : undefined,
            },
        })
    }

     postCreate(
        params: IsParameter<
            DisbursementsData['createDisbursement']
        >
    ) {
        return this.request.post<
            IsSchema<DisbursementsSchema['postCreateDisbursement']>
        >('',  params, {headers: {
            'idempotency-key': this.random.uuid()
            }} )
    }
}
