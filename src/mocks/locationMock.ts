import { ChargingLocationStructure } from "../types";

const networkName = "Endolla Barcelona";
const cityNetwork = "Barcelona de Serveis Municipals S.A.";
const hostName = "B:SM Barcelona de Serveis Municipals";
const website = "www.endolla.barcelona";
const cityName = "Barcelona";
const phoneNumber = "937 064 866";
const cityInitials = "BCN";
const countryCode = "ES";
const languageCode = "CA";
const publicStatus = "PUBLIC";
const hostAddress = "Carrer de Calàbria, 66";
const hostPostalCode = "08015";
const wallConnector = "WALL_OUTLET";
const socketChargingMechanism = "SOCKET";
const inUseStatus = "IN_USE";
const availableStatus = "AVAILABLE";
const authenticationIdA1 = "A1";
const motorcycleRestrictionString = "MOTORCYCLE_ONLY";
const standardKillowatts = 3.6;

export const locationsMock: ChargingLocationStructure[] = [
  {
    id: "1",
    network_brand_name: networkName,
    network_name: cityNetwork,
    contact: {
      operator_phone: phoneNumber,
      operator_website: website,
    },
    coordinates: {
      latitude: 41.3851,
      longitude: 2.1734,
    },
    address: {
      address_string: "Av. Reina Maria Cristina, 16",
      locality: cityName,
      admin_area: cityInitials,
      postal_code: "08037",
      country_code: countryCode,
      language_code: languageCode,
    },
    opening_hours: [
      {
        weekday_begin: 1,
        weekday_end: 5,
        hour_begin: "08:00",
        hour_end: "18:00",
      },
      {
        weekday_begin: 6,
        weekday_end: 7,
        hour_begin: "10:00",
        hour_end: "16:00",
      },
    ],
    access_restriction: publicStatus,
    host: {
      name: hostName,
      address: {
        address_string: hostAddress,
        locality: cityName,
        postal_code: hostPostalCode,
        country_code: countryCode,
        language_code: "CA",
      },
      contact: {
        operator_phone: phoneNumber,
        operator_website: "https://hostco.com",
      },
    },
    stations: [
      {
        id: "1",
        label: "Station 1",
        coordinates: {
          latitude: 41.3851,
          longitude: 2.1734,
        },
        ports: [
          {
            id: "1",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T12:00:00Z",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: true,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: inUseStatus,
              },
            ],
            last_updated: "2024-06-20T12:00:00Z",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: true,
          },
        ],
        notes: "",
      },
    ],
    onstreet_location: false,
    language_code: languageCode,
    last_updated: "2024-06-20T12:00:00Z",
  },
  {
    id: "2",
    network_brand_name: networkName,
    network_name: cityNetwork,
    contact: {
      operator_phone: phoneNumber,
      operator_website: website,
    },
    coordinates: {
      latitude: 41.3879,
      longitude: 2.16992,
    },
    address: {
      address_string: "Carrer de Mallorca, 401",
      locality: cityName,
      admin_area: cityInitials,
      postal_code: "08013",
      country_code: "ES",
      language_code: "CA",
    },
    opening_hours: [
      {
        weekday_begin: 1,
        weekday_end: 7,
        hour_begin: "07:00",
        hour_end: "22:00",
      },
    ],
    access_restriction: publicStatus,
    host: {
      name: hostName,
      address: {
        address_string: hostAddress,
        locality: cityName,
        postal_code: hostPostalCode,
        country_code: countryCode,
        language_code: languageCode,
      },
      contact: {
        operator_phone: phoneNumber,
        operator_website: website,
      },
    },
    stations: [
      {
        id: "2",
        label: "Station 2",
        coordinates: {
          latitude: 41.3879,
          longitude: 2.16992,
        },
        ports: [
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: inUseStatus,
              },
            ],
            last_updated: "2024-06-20T12:00:00Z",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: false,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: motorcycleRestrictionString,
      },
    ],
    onstreet_location: true,
    language_code: languageCode,
    last_updated: "2024-06-20T12:00:00Z",
  },
];

export const locationMock = locationsMock[0];
