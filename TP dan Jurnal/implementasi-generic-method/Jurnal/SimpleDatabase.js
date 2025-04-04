class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    addNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date().toUTCString());
    }

    printAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
        });
    }
}

// Contoh penggunaan:
const db = new SimpleDataBase();
db.addNewData(21);
db.addNewData(11);
db.addNewData(65);
db.printAllData();