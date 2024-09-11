import archiver from 'archiver'
import dayjs from 'dayjs'
import fs from 'fs'
import path from 'path'

export { generateMock as generateData } from '@anatine/zod-mock'

export class Utils {
    date = dayjs
    rootPath = __dirname.replace(/\/utils/, '')

    async zip(targetPath: string, destinationPath: string) {
        const archive = archiver('zip')
        const dest = fs.createWriteStream(destinationPath)

        archive.pipe(dest)
        archive.directory(targetPath, false)

        await archive.finalize()
        await new Promise((writeStreamComplete) =>
            dest.on('close', writeStreamComplete)
        )
    }

    replaceNbsp(string: string) {
        return string.replace(/\u00a0/g, ' ')
    }

    getTestDataSync(filename: string, encoding: BufferEncoding = 'utf-8') {
        const testDataPath = path.resolve(
            __dirname,
            '..',
            '..',
            'test-data',
            filename
        )
        if (!fs.existsSync(testDataPath)) {
            throw `File with name ${filename} not found!`
        }

        return fs.readFileSync(testDataPath, encoding)
    }
}
