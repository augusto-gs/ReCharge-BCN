interface Contact {
  operator_phone: string;
  operator_website: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Address {
  address_string: string;
  locality: string;
  admin_area?: string;
  postal_code: string;
  country_code: string;
  language_code: string;
}

interface OpeningHours {
  weekday_begin: number;
  weekday_end: number;
  hour_begin: string;
  hour_end: string;
}

interface Host {
  name: string;
  address: Address;
  contact: Contact;
}

interface PortStatus {
  status: string;
}

interface Authentication {
  authentication_id: string;
  payment_required: boolean;
}

interface Port {
  id: string;
  connector_type: string;
  power_kw: number;
  charging_mechanism: string;
  port_status: PortStatus[];
  last_updated: string;
  authentications: Authentication[];
  notes: string;
  reservable: boolean;
}

interface Station {
  id: string;
  label: string;
  coordinates: Coordinates;
  ports: Port[];
  notes: string;
}

interface ChargingLocationStructure {
  id: string;
  network_brand_name: string;
  network_name: string;
  contact: Contact;
  coordinates: Coordinates;
  address: Address;
  opening_hours: OpeningHours[];
  access_restriction: string;
  host: Host;
  stations: Station[];
  onstreet_location: boolean;
  language_code: string;
  last_updated: string;
}

export default ChargingLocationStructure;
