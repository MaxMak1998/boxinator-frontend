import http from "../http-common";

class orderService {
    submitOrder(data) {
        return http.post("/new-order", data);
    }

    getAll() {
        return http.get("/all-orders");
    }
}

export default new orderService();
