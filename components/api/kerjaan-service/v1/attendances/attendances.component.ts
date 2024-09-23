import { BaseComponent } from 'components/api/component.base'
import { AttendancesData } from './attendances.data'
import { AttendancesSchema } from './attendances.schema'
export class AttendancesComponent extends BaseComponent {
    data: AttendancesData = new AttendancesData()
    schema: AttendancesSchema = new AttendancesSchema()

    constructor(token?: string) {
        super({
            baseURL:
                process.env.BASE_URL_API + '/v1/attendances',
            headers: {
                Authorization: token ? `Bearer ${token}` : undefined,
            },
        })
    }

    postCreateAttendances(
        payload: IsPayload<AttendancesData['createAttendances']>
    ) {
        return this.request.post<
            IsSchema<AttendancesSchema['postAttendances']>
        >('', payload)
    }
}
