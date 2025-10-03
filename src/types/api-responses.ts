/**
 * Common API response types for type safety
 */

export interface PropertyType {
  id: string;
  title: string;
  description?: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  image?: string;
  noOfBaths: number;
  noOfBeds: number;
  maxNoOfGuests: number;
  pricePerNight: number;
  region: string;
  propertyType?: string;
  address?: string;
  amenities?: string[];
}

export interface PropertiesResponse {
  properties: Property[];
  total?: number;
}

export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  status: "pending" | "approved" | "rejected" | "cancelled";
  totalPrice: number;
}

export interface BookingsResponse {
  bookings: Booking[];
  total?: number;
}

export interface ApiError {
  error: string;
  message?: string;
}
