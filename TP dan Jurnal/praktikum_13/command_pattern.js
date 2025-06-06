// Command Interface
// Mendefinisikan kontrak untuk semua perintah konkret
class IOrderCommand {
    // Metode abstrak yang harus diimplementasikan oleh semua perintah konkret
    execute() {
        throw new Error('Method execute() belum diimplementasikan!');
    }
}

// Concrete Command: Perintah untuk memesan makanan
class OrderFoodCommand extends IOrderCommand {
    constructor(chef, dish) {
        super();
        this.chef = chef;
        this.dish = dish;
    }

    execute() {
        this.chef.prepareFood(this.dish);
    }
}

// Concrete Command: Perintah untuk membatalkan pesanan
class CancelOrderCommand extends IOrderCommand {
    constructor(chef, dish) {
        super();
        this.chef = chef;
        this.dish = dish;
    }

    execute() {
        this.chef.cancelFood(this.dish);
    }
}

// Receiver
// Kelas yang melakukan tindakan nyata (menyiapkan/membatalkan makanan)
class Chef {
    prepareFood(dish) {
        console.log(`Chef: Menyiapkan ${dish}`);
    }

    cancelFood(dish) {
        console.log(`Chef: Membatalkan pesanan ${dish}`);
    }
}

// Invoker
// Menerima dan menyimpan perintah, lalu mengeksekusinya
class Waiter {
    constructor() {
        this.orders = [];
    }

    takeOrder(command) {
        this.orders.push(command);
    }

    placeOrders() {
        console.log("Waiter: Menyampaikan pesanan ke dapur...");
        for (const command of this.orders) {
            command.execute();
        }
        this.orders = []; // Kosongkan daftar setelah eksekusi
    }
}

// Client Code
const chef = new Chef();     // Receiver
const waiter = new Waiter(); // Invoker

// Menambahkan perintah ke Waiter
waiter.takeOrder(new OrderFoodCommand(chef, "Nasi Goreng"));
waiter.takeOrder(new OrderFoodCommand(chef, "Soto Ayam"));
waiter.takeOrder(new CancelOrderCommand(chef, "Nasi Goreng"));
waiter.takeOrder(new OrderFoodCommand(chef, "Es Teh Manis"));

// Eksekusi semua perintah
waiter.placeOrders();
