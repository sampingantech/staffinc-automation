import {utils} from "core/utils";
import {Randomizer} from "core/utils/randomizer";

const randomizer = new Randomizer()
export class agentsData {
    createAgent(branchId = 1823, payrollGroupId=1742) {
        return {
            attendance: {
                leave_policy_ids: [
                    42
                ]
            },
            emergency_contact: {
                address: "Bekasi Juga",
                name: "User Dua",
                phone_number: "08123123541341",
                relationship: "father"
            },
            employee: {
                approval_client_acc_id: 216,
                branch_id: branchId,
                email: randomizer.email(),
                join_date: "2024-09-11",
                name: randomizer.personName(),
                payroll_group_id: payrollGroupId,
                phone_number: randomizer.phoneNo('0821', 12),
                position: "Employee"
            },
            employment_data: {
                contract_type: "pkwt",
                deployment_city_id: 720,
                deployment_district_id: 2594,
                deployment_group: "Test",
                deployment_province_id: 12,
                employment_type: "full_time",
                end_date: "2025-09-12",
                external_id: "3124345123",
                privy_id: "43534345112",
                project_ids: [
                    1753
                ],
                start_date: "2024-09-12",
                entity_company: "Test"
            },
            payment_information: {
                account_number: "1234512312",
                bank_code_id: 94,
                bank_name: "Bank Central Asia (BCA)",
                owner_name: "User Satu",
                passbook_image_url: "https://file.dev.kerjaan.co.id/v1/sessions/files/6eb3041c-9690-4dba-968a-df7688b4b2f8.jpg"
            },
            personal_data: {
                birth_place: "Kota Bekasi",
                blood_type: "a",
                citizenship_image_url: "https://file.dev.kerjaan.co.id/v1/sessions/files/b2ca4fe9-5ee1-41dc-a27c-6bea1b71cbf3.jpg",
                citizenship_number: "1234567890123456",
                city_id: 720,
                date_of_birth: "1994-09-30",
                district_id: 2594,
                domicile: "Jl. Bekasi",
                gender: "male",
                marital_status: "never_married",
                province_id: 12,
                religion: "islam"
            },
            social_security: {
                bpjs_of_health_number: "4351312312312313123",
                bpjs_membership: "bpu",
                bpjs_of_employment_number: "123123125345123412312",
                bpjs_tk_program: [
                    "jkk",
                    "jkm",
                    "jht"
                ],
                is_bpjs_calculation_active: true,
                is_bpjs_employment_calculation_active: true,
                non_taxable_income_status: "tk_0",
                tax_id: "452134123123123"
            }
        }
    }
}
