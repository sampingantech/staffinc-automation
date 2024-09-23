import { Faker, base, en, id_ID } from '@faker-js/faker'

export class Randomizer extends Faker {
    constructor() {
        super({
            locale: [base, en, id_ID],
        })
    }

    personName(gender: 'male' | 'female' = 'male') {
        return this.person.firstName(gender) + ' ' + this.person.lastName(gender)
    }

    uuid() {
        return this.string.uuid()
    }

    bpkb() {
        const firstAlpha = this.string.alpha({ length: 1, casing: 'upper' })
        const BPKBDigits = this.string.numeric(8)

        return `${firstAlpha}-${BPKBDigits}`
    }

    plateNumber(prefix = 'B') {
        const firstAlpha = prefix
        const plateDigit = this.string.numeric(4)
        const lastAlpha = this.string.alpha({
            length: this.number.int({ min: 1, max: 3 }),
            casing: 'upper',
        })

        return `${firstAlpha}${plateDigit}${lastAlpha}`
    }

    chassisNumber(prefix = 'MHZ') {
        return `${prefix}${this.string.alphanumeric({
            length: 14,
            casing: 'upper',
        })}`
    }

    engineNumber() {
        return `${this.string.alphanumeric({
            length: 15,
            casing: 'upper',
        })}`
    }

    email(input?: { domain?: string }) {
        return this.internet.email({
            provider: input?.domain || 'mailsac.com',
        })
    }

    nik(prefixDigit = '321657') {
        const lengthRemainNIK = 16 - prefixDigit.length
        return `${prefixDigit}${this.string.numeric(lengthRemainNIK)}`
    }

    npwp(formatted = false) {
        let npwp
        const randomNumber = this.string.numeric(15)

        if (formatted) {
            const pattern = /^(\d{2})(\d{3})(\d{3})(\d)(\d{3})(\d{3})$/
            const match = randomNumber.match(pattern)
            if (match)
                npwp = `${match[1]}.${match[2]}.${match[3]}.${match[4]}-${match[5]}.${match[6]}`
        } else {
            npwp = randomNumber
        }

        return npwp
    }

    phoneNo(prefix = '89', maxLength = 11): string {
        const randomPart = this.string.numeric({
            length: maxLength - prefix.length,
        })
        return prefix + randomPart
    }

    randomNumeric(options: { min: number; max: number } | number): string {
        const randomNumber = this.number.int(options)
        return randomNumber.toString()
    }

    stnk() {
        return this.string.numeric({ length: 8 })
    }
}
