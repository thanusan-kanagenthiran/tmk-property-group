import axiosClient from ".";

export interface PropertyPostData {
  propertyType: string;
  pricePerNight: number;
  title: string;
  description: string;
  region: string;
  address: string;
  maxNoOfGuests: number;
  noOfBeds: number;
  noOfBaths: number;
  amenities: string[];
}

const endpoint = "/property";

type FilterParams = {
  propertyType?: string;
  region?: string;
  checkIn?: string;
  checkOut?: string;
};

async function GetProperties(filters: FilterParams = {}): Promise<any> {
  try {
    // Convert filters object to query string
    const queryString = new URLSearchParams(filters as any).toString();
    
    // Append query string to the endpoint
    const url = `/property?${queryString}`;
    
    // Make the API request
    const response = await axiosClient.get(url);
    
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw new Error("Failed to fetch properties.");
  }
}

async function AddProperty(propertyData: PropertyPostData): Promise<any> {
  try {
    const response = await axiosClient.post(endpoint, propertyData);
    return response.data;
  } catch (error) {
    console.error("Error adding property:", error);
    throw new Error("Failed to add property.");
  }
}

async function UpdateProperty(propertyData: PropertyPostData, id: string): Promise<any> {
  try {
    const response = await axiosClient.put(`${endpoint}/${id}`, propertyData);
    return response.data;
  } catch (error) {
    console.error("Error updating property:", error);
    throw new Error("Failed to update property.");
  }
}

async function GetPropertyTypes(): Promise<any> {
  try {
    const response = await axiosClient.get("/property-type");
    return response.data;
  } catch (error) {
    console.error("Error fetching property types:", error);
    throw new Error("Failed to fetch property types.");
  }
}

async function GetSingleProperty(id: string): Promise<any> {
  try {
    const response = await axiosClient.get(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching property:", error);
    throw new Error("Failed to fetch property.");
  }
}

async function getHostProperties(): Promise<any> {
  try {
    const response = await axiosClient.get("/property/host");
    return response.data;
  } catch (error) {
    console.error("Error fetching host properties:", error);
    throw new Error("Failed to fetch host properties.");
  }
}

export const propertiesService = {
  AddProperty,
  UpdateProperty,
  GetProperties,
  GetPropertyTypes,
  GetSingleProperty,
  getHostProperties
};
