import { utils } from "core/utils";
import { Randomizer } from "core/utils/randomizer";
import { createAgentPayloadType } from "./agent.type";

const randomizer = new Randomizer();

export class agentsData {
    createAgent(data?: createAgentPayloadType, branchId = 1823, payrollGroupId = 1742) {
        return {
            attendance: {
                leave_policy_ids: data?.attendance?.leave_policy_ids ? data.attendance.leave_policy_ids : [42]
            },
            emergency_contact: {
                address: data?.emergency_contact?.address ? data.emergency_contact.address : "Bekasi Juga",
                name: data?.emergency_contact?.name ? data.emergency_contact.name : "User Dua",
                phone_number: data?.emergency_contact?.phone_number ? data.emergency_contact.phone_number : "08123123541341",
                relationship: data?.emergency_contact?.relationship ? data.emergency_contact.relationship : "father"
            },
            employee: {
                approval_client_acc_id: data?.employee?.approval_client_acc_id ? data.employee.approval_client_acc_id : 216,
                branch_id: data?.employee?.branch_id ? data.employee.branch_id : branchId,
                email: data?.employee?.email ? data.employee.email : randomizer.email(),
                join_date: data?.employee?.join_date ? data.employee.join_date : "2024-09-11",
                name: data?.employee?.name ? data.employee.name : randomizer.personName(),
                payroll_group_id: data?.employee?.payroll_group_id ? data.employee.payroll_group_id : payrollGroupId,
                phone_number: data?.employee?.phone_number ? data.employee.phone_number : randomizer.phoneNo('0821', 12),
                position: data?.employee?.position ? data.employee.position : "Employee"
            },
            employment_data: {
                contract_type: data?.employment_data?.contract_type ? data.employment_data.contract_type : "pkwt",
                deployment_city_id: data?.employment_data?.deployment_city_id ? data.employment_data.deployment_city_id : 720,
                deployment_district_id: data?.employment_data?.deployment_district_id ? data.employment_data.deployment_district_id : 2594,
                deployment_group: data?.employment_data?.deployment_group ? data.employment_data.deployment_group : "Test",
                deployment_province_id: data?.employment_data?.deployment_province_id ? data.employment_data.deployment_province_id : 12,
                employment_type: data?.employment_data?.employment_type ? data.employment_data.employment_type : "full_time",
                end_date: data?.employment_data?.end_date ? data.employment_data.end_date : "2025-09-12",
                external_id: data?.employment_data?.external_id ? data.employment_data.external_id : "3124345123", // di bikin random aja
                privy_id: data?.employment_data?.privy_id ? data.employment_data.privy_id : "43534345112", // di bikin random aja
                project_ids: data?.employment_data?.project_ids ? data.employment_data.project_ids : [1753],
                start_date: data?.employment_data?.start_date ? data.employment_data.start_date : "2024-09-12",
                entity_company: data?.employment_data?.entity_company ? data.employment_data.entity_company : "Test"
            },
            payment_information: {
                account_number: data?.payment_information?.account_number ? data.payment_information.account_number : "1234512312",
                bank_code_id: data?.payment_information?.bank_code_id ? data.payment_information.bank_code_id : 94,
                bank_name: data?.payment_information?.bank_name ? data.payment_information.bank_name : "Bank Central Asia (BCA)",
                owner_name: data?.payment_information?.owner_name ? data.payment_information.owner_name : "User Satu",
                passbook_image_url: data?.payment_information?.passbook_image_url ? data.payment_information.passbook_image_url : "https://file.dev.kerjaan.co.id/v1/sessions/files/6eb3041c-9690-4dba-968a-df7688b4b2f8.jpg"
            },
            personal_data: {
                birth_place: data?.personal_data?.birth_place ? data.personal_data.birth_place : "Kota Bekasi",
                blood_type: data?.personal_data?.blood_type ? data.personal_data.blood_type : "a",
                citizenship_image_url: data?.personal_data?.citizenship_image_url ? data.personal_data.citizenship_image_url : "https://file.dev.kerjaan.co.id/v1/sessions/files/b2ca4fe9-5ee1-41dc-a27c-6bea1b71cbf3.jpg",
                citizenship_number: data?.personal_data?.citizenship_number ? data.personal_data.citizenship_number : "1234567890123456", // di bikin random aja
                city_id: data?.personal_data?.city_id ? data.personal_data.city_id : 720,
                date_of_birth: data?.personal_data?.date_of_birth ? data.personal_data.date_of_birth : "1994-09-30",
                district_id: data?.personal_data?.district_id ? data.personal_data.district_id : 2594,
                domicile: data?.personal_data?.domicile ? data.personal_data.domicile : "Jl. Bekasi",
                gender: data?.personal_data?.gender ? data.personal_data.gender : "male",
                marital_status: data?.personal_data?.marital_status ? data.personal_data.marital_status : "never_married",
                province_id: data?.personal_data?.province_id ? data.personal_data.province_id : 12,
                religion: data?.personal_data?.religion ? data.personal_data.religion : "islam"
            },
            social_security: {
                bpjs_of_health_number: data?.social_security?.bpjs_of_health_number ? data.social_security.bpjs_of_health_number : "4351312312312313123",
                bpjs_membership: data?.social_security?.bpjs_membership ? data.social_security.bpjs_membership : "bpu",
                bpjs_of_employment_number: data?.social_security?.bpjs_of_employment_number ? data.social_security.bpjs_of_employment_number : "123123125345123412312",
                bpjs_tk_program: data?.social_security?.bpjs_tk_program ? data.social_security.bpjs_tk_program : ["jkk", "jkm", "jht"],
                is_bpjs_calculation_active: data?.social_security?.is_bpjs_calculation_active ? data.social_security.is_bpjs_calculation_active : true,
                is_bpjs_employment_calculation_active: data?.social_security?.is_bpjs_employment_calculation_active ? data.social_security.is_bpjs_employment_calculation_active : true,
                non_taxable_income_status: data?.social_security?.non_taxable_income_status ? data.social_security.non_taxable_income_status : "tk_0",
                tax_id: data?.social_security?.tax_id ? data.social_security.tax_id : "452134123123123"
            }
        };
    }
}
