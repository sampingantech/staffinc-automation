import {AttendancesComponent} from "../../../api/kerjaan-service/v1/attendances/attendances.component";
import {token} from "core/utils";
import { expect, test } from 'core'
import {
    BranchAttendances
} from "../../../api/kerjaan-service/v1/client/branch-attendances/branch-attendances.component";
import {AxiosResponse} from "axios";
import {z} from "zod";
import {
    getBranchAttendancesType
} from "../../../api/kerjaan-service/v1/client/branch-attendances/branch-attendances.type";
import {StaffincSuite} from "core/utils/token/modules/staffinc-suite";
import {createAttendancesPayloadType} from "../../../api/kerjaan-service/v1/attendances/attendances.type";

const branchAttendances = new BranchAttendances(token.get('ADMIN'))

/**
 * There's 2 ways to call createAttendances
 * 1. set user to value based on tokens.json and set tokenExist to true
 * 2. set phoneNumber to any user phone number with default otp enabled
 * @param user label on tokens.json
 * @param tokenExist flag for checking on tokens.json, set false if want to generate manually based on phone number
 * @param phoneNumber phone number provided for generating token
 * @param data
 */
export async function createAttendances({user='', tokenExist = false, phoneNumber = '', data
}) {
    let attendance: AttendancesComponent
    if (tokenExist) {
        if (!user) throw new Error(`createAttendances Error: user is not provided with tokenExist=${tokenExist}`)
        attendance = new AttendancesComponent(token.get(user))
    } else {
        if (!phoneNumber) throw new Error(`createAttendances Error: phoneNumber is not provided with tokenExist=${false}`)
        const token = new StaffincSuite()
        const generateToken = await token.getToken(phoneNumber, 8000, 'user', 'APPS')
        attendance = new AttendancesComponent(generateToken['user'])
    }
    await test.step('Create attendance', async () => {
        const attendancePayload = attendance.data.createAttendances(data)
        const attendanceResponse = await attendance.postCreateAttendances(attendancePayload)
        expect(attendanceResponse).isCorrectResponse(200, attendance.schema.postAttendances())
    })
}
export async function getBranchAttendances(branchId: number) {
    let listAttendances: AxiosResponse<getBranchAttendancesType>;
    await test.step('Fetch list of attendances need approve', async () => {
        const branchAttendancesResponse = await branchAttendances.getBranchAttendances({branchId});
        expect(branchAttendancesResponse).isCorrectResponse(200, branchAttendances.schema.getBranchAttendances())
        listAttendances = branchAttendancesResponse;
    })
    return listAttendances;
}

export async function approveAttendances(listOfAttendances:AxiosResponse<getBranchAttendancesType>) {
    await test.step('Approve attendances', async () => {
        for (const data of listOfAttendances.data.data) {
            const payload = branchAttendances.data.putApproveBranchAtendance(data.id)
            const approveAttendanceResponse = await branchAttendances.approveAttendance(payload, data.id)
            expect(approveAttendanceResponse).isCorrectResponse(200, branchAttendances.schema.putApproveBranchAttendances())
        }
    })
}