import httpClient from "./httpClient";

const END_POINT = '/api/booking';

const bookings = {
    getAllBookings: () => httpClient.get(END_POINT + 's'),
    getBooking: (code) => httpClient.get(END_POINT + "/" + code),
    createBooking: (booking) => httpClient.post(END_POINT, booking),
    editBooking: (code, booking) => httpClient.put(END_POINT + '/' + code, booking),
    deleteBooking: (code) => httpClient.delete(END_POINT+'/'+ code),
}
export {
    bookings
}