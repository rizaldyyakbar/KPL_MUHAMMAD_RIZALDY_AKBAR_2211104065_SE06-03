class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    printData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

// Pemanggilan di main:
const nimData = new DataGeneric("2211104065");
nimData.printData();