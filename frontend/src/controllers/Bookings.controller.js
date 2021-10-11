import httpClient from "./httpClient";

const END_POINT = '/api/booking';

const bookings = {
    getAllBookings: () => httpClient.get(END_POINT + 's'),
    createBooking: (booking) => httpClient.post(END_POINT, booking),
    editBooking: (booking, code) => httpClient.put(END_POINT + '/' + booking, code),
    deleteBooking: (code) => httpClient.delete(END_POINT+'/'+ code),
}
export {
    bookings
}