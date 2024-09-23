import { BaseComponent } from 'components/api/component.base'
import { BranchAttendancesSchema } from './branch-attendances.schema'
import {BranchAttendancesData} from "./branch-attendances.data";
export class BranchAttendances extends BaseComponent {
    schema = new BranchAttendancesSchema()
    data = new BranchAttendancesData()

    constructor(token?: string) {
        super({
            baseURL: process.env.BASE_URL_API + '/v1/client/branch-attendances',
            headers: {
                Authorization: token ? `Bearer ${token}` : undefined,
            },
        })
    }

    getBranchAttendances({branchId=1823, latestStatus='waiting_for_confirmation', skip=0, limit=15, filter='', query=''}:{
        branchId: number,
        latestStatus?: string,
        query?: string,
        skip?: number,
        limit?: number,
        filter?: string
                         }) {
        return this.request.get<
            IsSchema<BranchAttendancesSchema['getBranchAttendances']>
        >(`?branch_id=${branchId}&latest_status=${latestStatus}&q=${query}&skip=${skip}&limit=${limit}&filter=${filter}`)
    }

    approveAttendance(params: IsParameter<
        BranchAttendancesData['putApproveBranchAtendance']
    >, id) {
        return this.request.put<IsSchema<BranchAttendancesSchema['putApproveBranchAttendances']>>(`/${id}`, params)
    }
}