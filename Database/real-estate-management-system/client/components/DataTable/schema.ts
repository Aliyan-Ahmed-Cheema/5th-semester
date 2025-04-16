export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: string;
};

export type Listings = {
  id: string;
  propertyName: string;
  description: string;
  listingType: string;
  propertyType: string;
  price: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  contactNumber: string;
  dealer: string;
  createdAt: string;
};

export type Agreement = {
  id: string;
  dealer: string;
  property: string;
  client: string;
  agreementType: string;
  price: string;
  rentAmount: string;
  leaseAmount: string;
  leaseTerms: string;
  duration: string;
};
