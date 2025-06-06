class DoorMachine {
    constructor() {
        this.state = "Terkunci"; // State awal pintu adalah "Terkunci"
    }

    // Method untuk mengubah state pintu
    changeState(action) {
        if (action === "KunciPintu") {
            if (this.state === "Terbuka") {
                this.state = "Terkunci";
                console.log("Pintu terkunci");
            } else {
                console.log("Pintu sudah terkunci");
            }
        } else if (action === "BukaPintu") {
            if (this.state === "Terkunci") {
                this.state = "Terbuka";
                console.log("Pintu tidak terkunci");
            } else {
                console.log("Pintu sudah terbuka");
            }
        } else {
            console.log("Aksi tidak valid");
        }
    }
}

// Contoh penggunaan
const door = new DoorMachine();

door.changeState("BukaPintu"); 
door.changeState("KunciPintu");
door.changeState("BukaPintu"); 
door.changeState("BukaPintu");
door.changeState("KunciPintu"); 
door.changeState("KunciPintu");