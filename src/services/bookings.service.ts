import axiosClient from ".";

async function getBookings(): Promise<any> {
  try {
    const response = await axiosClient.get("/property/bookings");
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw new Error("Failed to fetch bookings.");
  }
}

async function rejectBooking(id: string): Promise<any> {
  try {
    const response = await axiosClient.get(`/bookings/approve-or-reject/${id}?action=reject`);
    return response.data;
  } catch (error) {
    console.error("Error rejecting booking:", error);
    throw new Error("Failed to reject booking.");
  }
}

async function approveBooking(id: string): Promise<any> {
  try {
    const response = await axiosClient.get(`/bookings/approve-or-reject/${id}?action=approve`);
    return response.data;
  } catch (error) {
    console.error("Error approving booking:", error);
    throw new Error("Failed to approve booking.");
  }
}

async function cancelBooking(id: string): Promise<any> {
  try {
    const response = await axiosClient.get(`/bookings/cancel-booking/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error canceling booking:", error);
    throw new Error("Failed to cancel booking.");
  }
}
export const bookingServices = {
  getBookings,
  rejectBooking,
  approveBooking,
  cancelBooking
};
