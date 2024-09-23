import XLSX, { BookType, WritingOptions } from 'xlsx';
import path from 'path';
import fs from 'fs';
import axios from 'axios';

class Spreadsheet {
    async downloadXlsx(url: string, filename: string): Promise<void> {
        const filePath = path.join('.cache', filename);

        this.deleteFileIfExists(filePath);

        try {
            await this.downloadFile(url, filePath);
            console.log(`File downloaded and saved to ${filePath}`);
        } catch (error) {
            console.error('Error downloading the file:', error);
        }
    }

    private deleteFileIfExists(filePath: string): void {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath); // Menghapus file jika ada
            console.log(`Existing file deleted: ${filePath}`);
        }
    }

    private async downloadFile(url: string, filePath: string): Promise<void> {
        if (!fs.existsSync('.cache')) {
            fs.mkdirSync('.cache', { recursive: true });
        }

        const response = await axios.get(url, {
            responseType: 'arraybuffer',
        });

        fs.writeFileSync(filePath, response.data);
    }
    
// eslint-disable-next-line class-methods-use-this
    getSpreadsheetData(filePath: string, sheetName = '') {
        // check file format
        const ext = path.extname(filePath);
        if (ext !== '.xlsx' && ext !== '.csv') throw new Error(`Failed to read file, invalid format: '${ext}'`);
        
        if (!fs.existsSync(filePath)) {
            throw new Error(`Failed to read file, file not found: '${filePath}'`);
        }

        const file = fs.readFileSync(filePath);
        const workbook = XLSX.read(file);

        // if excel, check sheet name
        if (ext === '.xlsx') {
            let validateSheet = false;
            workbook.SheetNames.forEach((sheet) => {
                if (sheet === sheetName) validateSheet = true;
            });
            if (!validateSheet) throw new Error(`Failed to read file, sheet name not found: '${sheetName}'`);
        }

        // convert file to json
        const worksheet = workbook.Sheets[sheetName === '' ? workbook.SheetNames[0] : sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { defval: null });

        // replace empty cells with null values
        const dataFilter = JSON.stringify(data, (key, value) => (value === '' ? null : value));

        // return rows that is not empty
        return JSON.parse(dataFilter).filter((obj: { [s: string]: unknown; } | ArrayLike<unknown>) => Object.values(obj).some((value) => value !== null));
    }

    // eslint-disable-next-line class-methods-use-this
    getSpreadsheetDataBuffer(data: object) {
        const workbook = XLSX.read(data, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: null });
    }

    // eslint-disable-next-line class-methods-use-this
    generateDataSheet(data: object[]) {
        const headers = Object.keys((data[0] || {}));
        const rows = (data || []).map((e) => Object.values(e || {}));
        const dataSheet = [headers, ...rows];
        return dataSheet;
    }

    // eslint-disable-next-line class-methods-use-this
    createDummySpreadsheet(sheetName: string, data: object[] = [], sheetType: BookType = 'xlsx', outputType = 'array') {
        const dataSheet = this.generateDataSheet(data);
        const ws = XLSX.utils.aoa_to_sheet(dataSheet);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
        return XLSX.write(wb, { type: outputType as WritingOptions['type'], bookType: sheetType });
    }
}

export default Spreadsheet;
