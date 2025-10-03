import axiosClient from ".";

/**
 * Get all bookings for the current user
 * @returns Promise with list of bookings
 */
async function getBookings(): Promise<any> {
  try {
    const response = await axiosClient.get("/property/bookings");
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw new Error("Failed to fetch bookings.");
  }
}

/**
 * Reject a booking request
 * @param id - Booking ID to reject
 * @returns Promise with updated booking
 */
async function rejectBooking(id: string): Promise<any> {
  try {
    const response = await axiosClient.get(`/bookings/approve-or-reject/${id}?action=reject`);
    return response.data;
  } catch (error) {
    console.error("Error rejecting booking:", error);
    throw new Error("Failed to reject booking.");
  }
}

/**
 * Approve a booking request
 * @param id - Booking ID to approve
 * @returns Promise with updated booking
 */
async function approveBooking(id: string): Promise<any> {
  try {
    const response = await axiosClient.get(`/bookings/approve-or-reject/${id}?action=approve`);
    return response.data;
  } catch (error) {
    console.error("Error approving booking:", error);
    throw new Error("Failed to approve booking.");
  }
}

/**
 * Cancel a booking
 * @param id - Booking ID to cancel
 * @returns Promise with updated booking
 */
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
