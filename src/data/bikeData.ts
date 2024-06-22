import ChargingLocationStructure from "../types";

const networkName = "Endolla Barcelona";
const cityNetwork = "Barcelona de Serveis Municipals S.A.";
const hostName = "B:SM Barcelona de Serveis Municipals";
const website = "www.endolla.barcelona";
const cityName = "Barcelona";
const phoneNumber = "937 064 866";
const cityInitials = "BCN";
const countryCode = "ES";
const languageCode = "CA";
const startHour = "00:00";
const endHour = "24:00";
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

const locations: ChargingLocationStructure[] = [
  {
    id: "3715",
    network_brand_name: networkName,
    network_name: cityNetwork,
    contact: {
      operator_phone: phoneNumber,
      operator_website: website,
    },
    coordinates: {
      latitude: 41.372802,
      longitude: 2.154058,
    },
    address: {
      address_string: "Av. Reina Maria Cristina, 16",
      locality: cityName,
      admin_area: cityInitials,
      postal_code: "08004",
      country_code: countryCode,
      language_code: languageCode,
    },
    opening_hours: [
      {
        weekday_begin: 1,
        weekday_end: 7,
        hour_begin: startHour,
        hour_end: endHour,
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
        id: "11316",
        label: "MULT_RIUS1",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
        },
        ports: [
          {
            id: "1",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: inUseStatus,
              },
            ],
            last_updated: "2024-06-20T22:24:14+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "1",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: inUseStatus,
              },
            ],
            last_updated: "2024-06-20T22:24:14+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T06:21:47+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T06:21:47+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "3",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-18T17:31:41+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "3",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-18T17:31:41+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "4",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:38:24+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "4",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:38:24+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "5",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:39:00+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "5",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:39:00+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "6",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:40:28+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "6",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:40:28+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "7",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:41:40+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "7",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:41:40+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "8",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: inUseStatus,
              },
            ],
            last_updated: "2024-06-21T14:32:28+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "8",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: inUseStatus,
              },
            ],
            last_updated: "2024-06-21T14:32:28+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "9",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:36:45+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "9",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:36:45+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "10",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:35:37+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "10",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:35:37+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "11",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:34:30+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "11",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:34:30+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "12",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:33:20+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "12",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:33:20+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "13",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:30:46+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "13",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:30:46+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "14",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:19:02+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "14",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:19:02+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "15",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:26:42+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "15",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:26:42+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "16",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:27:53+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "16",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:27:53+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "17",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-18T12:07:23+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "17",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-18T12:07:23+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "18",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:29:47+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "18",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:29:47+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "19",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T05:13:28+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "19",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T05:13:28+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "20",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:44:17+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "20",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:44:17+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "21",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:21:35+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "21",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:21:35+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "22",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:23:02+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "22",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:23:02+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "23",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:23:54+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "23",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-13T13:23:54+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12976",
        label: "RiusTaulet 84",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-02T22:37:44+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12977",
        label: "RiusTaulet 86",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-04-30T19:56:59+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12978",
        label: "RiusTaulet 88",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-16T13:30:15+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12979",
        label: "RiusTaulet 90",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-20T16:26:32+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12980",
        label: "RiusTaulet 92",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-19T08:01:13+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12981",
        label: "RiusTaulet 94",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-17T02:03:31+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12982",
        label: "RiusTaulet 96",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
        },
        ports: [
          {
            id: "1",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: inUseStatus,
              },
            ],
            last_updated: "2024-06-20T00:20:45+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12983",
        label: "RiusTaulet 98",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-05-26T16:53:31+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12984",
        label: "RiusTaulet 100",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-21T01:07:52+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12985",
        label: "RiusTaulet 102",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-13T22:01:47+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12986",
        label: "RiusTaulet 104",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-21T00:54:00+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12987",
        label: "RiusTaulet 106",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-05-12T12:48:53+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12988",
        label: "RiusTaulet 108",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-05-24T17:38:44+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12989",
        label: "RiusTaulet 110",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-19T13:38:56+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12990",
        label: "RiusTaulet 112",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-11T19:47:03+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12991",
        label: "RiusTaulet 114",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-15T06:02:59+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12992",
        label: "RiusTaulet 116",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-21T01:02:34+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12993",
        label: "RiusTaulet 118",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-20T20:03:10+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12994",
        label: "RiusTaulet 120",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-21T21:12:01+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12995",
        label: "RiusTaulet 122",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-19T16:36:55+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
      {
        id: "12996",
        label: "RiusTaulet 124",
        coordinates: {
          latitude: 41.372802,
          longitude: 2.154058,
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
            last_updated: "2024-06-15T06:08:19+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Rius i Taulet",
      },
    ],
    onstreet_location: false,
    language_code: languageCode,
    last_updated: "2023-07-11T09:15:08+02:00",
  },
  {
    id: "3717",
    network_brand_name: networkName,
    network_name: cityNetwork,
    contact: {
      operator_phone: phoneNumber,
      operator_website: website,
    },
    coordinates: {
      latitude: 41.40645,
      longitude: 2.15223,
    },
    address: {
      address_string: "C/Torrent de l´Olla, 221",
      locality: cityName,
      admin_area: cityInitials,
      postal_code: "08012",
      country_code: countryCode,
      language_code: languageCode,
    },
    opening_hours: [
      {
        weekday_begin: 1,
        weekday_end: 7,
        hour_begin: startHour,
        hour_end: endHour,
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
        id: "11321",
        label: "MULT_TORRENT_OLLA1",
        coordinates: {
          latitude: 41.40645,
          longitude: 2.15223,
        },
        ports: [
          {
            id: "1",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: inUseStatus,
              },
            ],
            last_updated: "2024-06-21T16:02:44+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "1",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: inUseStatus,
              },
            ],
            last_updated: "2024-06-21T16:02:44+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-21T21:08:04+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-21T21:08:04+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "3",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-19T19:35:36+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "3",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-19T19:35:36+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "4",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-21T06:39:00+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "4",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-21T06:39:00+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "6",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T07:55:56+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "6",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T07:55:56+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "7",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-10T09:19:36+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "7",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-10T09:19:36+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Torrent de l´Olla",
      },
      {
        id: "11403",
        label: "Torrent13",
        coordinates: {
          latitude: 41.40645,
          longitude: 2.15223,
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
            last_updated: "2024-06-20T09:39:48+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Torrent de l´Olla",
      },
      {
        id: "11404",
        label: "Torrent15",
        coordinates: {
          latitude: 41.40645,
          longitude: 2.15223,
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
            last_updated: "2024-06-21T13:14:53+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Torrent de l´Olla",
      },
      {
        id: "12205",
        label: "01C002",
        coordinates: {
          latitude: 41.40645,
          longitude: 2.15223,
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
            last_updated: "2024-06-15T05:49:01+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Torrent de l´Olla",
      },
      {
        id: "12206",
        label: "01C004",
        coordinates: {
          latitude: 41.40645,
          longitude: 2.15223,
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
            last_updated: "2024-06-20T22:02:40+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Torrent de l´Olla",
      },
      {
        id: "12207",
        label: "01C006",
        coordinates: {
          latitude: 41.40645,
          longitude: 2.15223,
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
            last_updated: "2024-06-18T08:59:39+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Torrent de l´Olla",
      },
      {
        id: "12208",
        label: "01C008",
        coordinates: {
          latitude: 41.40645,
          longitude: 2.15223,
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
            last_updated: "2024-06-21T15:50:52+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Torrent de l´Olla",
      },
      {
        id: "12209",
        label: "01C010",
        coordinates: {
          latitude: 41.40645,
          longitude: 2.15223,
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
            last_updated: "2024-06-15T05:48:55+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Torrent de l´Olla",
      },
      {
        id: "12210",
        label: "01C012",
        coordinates: {
          latitude: 41.40645,
          longitude: 2.15223,
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
            last_updated: "2024-06-12T08:33:24+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Torrent de l´Olla",
      },
      {
        id: "12211",
        label: "01C014",
        coordinates: {
          latitude: 41.40645,
          longitude: 2.15223,
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
            last_updated: "2024-06-15T12:08:45+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Torrent de l´Olla",
      },
      {
        id: "12212",
        label: "01C016",
        coordinates: {
          latitude: 41.40645,
          longitude: 2.15223,
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
            last_updated: "2024-06-21T21:50:37+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Torrent de l´Olla",
      },
      {
        id: "12213",
        label: "01C017",
        coordinates: {
          latitude: 41.40645,
          longitude: 2.15223,
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
            last_updated: "2024-06-19T15:22:17+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Torrent de l´Olla",
      },
      {
        id: "12214",
        label: "01M003",
        coordinates: {
          latitude: 41.40645,
          longitude: 2.15223,
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
            last_updated: "2024-06-15T05:58:39+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-15T05:58:39+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Torrent de l´Olla",
      },
      {
        id: "12215",
        label: "01M004",
        coordinates: {
          latitude: 41.40645,
          longitude: 2.15223,
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
            last_updated: "2024-05-24T09:19:55+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-05-24T09:19:55+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Torrent de l´Olla",
      },
      {
        id: "12216",
        label: "01M005",
        coordinates: {
          latitude: 41.40645,
          longitude: 2.15223,
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
            last_updated: "2024-06-15T05:49:00+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-15T05:49:00+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Torrent de l´Olla",
      },
    ],
    onstreet_location: false,
    language_code: languageCode,
    last_updated: "2023-07-06T11:00:09+02:00",
  },
  {
    id: "3718",
    network_brand_name: networkName,
    network_name: cityNetwork,
    contact: {
      operator_phone: phoneNumber,
      operator_website: website,
    },
    coordinates: {
      latitude: 41.37643,
      longitude: 2.178412,
    },
    address: {
      address_string: "Pg. de Colom, 1",
      locality: cityName,
      admin_area: cityInitials,
      postal_code: "08002",
      country_code: countryCode,
      language_code: languageCode,
    },
    opening_hours: [
      {
        weekday_begin: 1,
        weekday_end: 7,
        hour_begin: startHour,
        hour_end: endHour,
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
        id: "11251",
        label: "CCL1_MOLL1",
        coordinates: {
          latitude: 41.37643,
          longitude: 2.178412,
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
            last_updated: "2024-06-21T22:22:34+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
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
            last_updated: "2024-06-21T22:22:34+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-21T19:06:53+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-21T19:06:53+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "3",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T16:50:29+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "3",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T16:50:29+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "4",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-21T16:40:55+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "4",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-21T16:40:55+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "5",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-21T14:41:13+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "6",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-18T13:32:41+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "7",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T21:57:28+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
          {
            id: "8",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T21:56:27+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Moll de la Fusta",
      },
      {
        id: "11252",
        label: "CCL1_MOLL2",
        coordinates: {
          latitude: 41.37643,
          longitude: 2.178412,
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
            last_updated: "2024-06-15T14:59:56+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
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
            last_updated: "2024-06-15T14:59:56+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-16T23:43:56+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-16T23:43:56+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Moll de la Fusta",
      },
      {
        id: "12217",
        label: "01C278",
        coordinates: {
          latitude: 41.37643,
          longitude: 2.178412,
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
            last_updated: "2024-06-21T19:04:36+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Moll de la Fusta",
      },
      {
        id: "12218",
        label: "01C280",
        coordinates: {
          latitude: 41.37643,
          longitude: 2.178412,
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
            last_updated: "2024-06-20T18:03:52+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Moll de la Fusta",
      },
      {
        id: "12219",
        label: "01C284",
        coordinates: {
          latitude: 41.37643,
          longitude: 2.178412,
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
            last_updated: "2024-06-20T10:36:51+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Moll de la Fusta",
      },
      {
        id: "12220",
        label: "01C286",
        coordinates: {
          latitude: 41.37643,
          longitude: 2.178412,
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
            last_updated: "2024-06-19T18:12:31+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: "",
            reservable: false,
          },
        ],
        notes: "Aparcament Moll de la Fusta",
      },
    ],
    onstreet_location: false,
    language_code: languageCode,
    last_updated: "2023-07-20T12:25:23+02:00",
  },
  {
    id: "3719",
    network_brand_name: networkName,
    network_name: cityNetwork,
    contact: {
      operator_phone: phoneNumber,
      operator_website: website,
    },
    coordinates: {
      latitude: 41.403247,
      longitude: 2.152312,
    },
    address: {
      address_string: "c/ Gran de Gràcia 190",
      locality: cityName,
      admin_area: cityInitials,
      postal_code: "08012",
      country_code: countryCode,
      language_code: languageCode,
    },
    opening_hours: [
      {
        weekday_begin: 1,
        weekday_end: 7,
        hour_begin: startHour,
        hour_end: endHour,
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
        id: "11266",
        label: "GMotos1",
        coordinates: {
          latitude: 41.403247,
          longitude: 2.152312,
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
            last_updated: "2024-06-20T15:50:41+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T15:50:41+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Gràcia Motos",
      },
      {
        id: "11267",
        label: "GMotos2",
        coordinates: {
          latitude: 41.403247,
          longitude: 2.152312,
        },
        ports: [
          {
            id: "1",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: "OUT_OF_ORDER",
              },
            ],
            last_updated: "2023-09-28T12:10:49+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: "OUT_OF_ORDER",
              },
            ],
            last_updated: "2023-09-28T12:10:49+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Gràcia Motos",
      },
      {
        id: "12151",
        label: "Moto  5",
        coordinates: {
          latitude: 41.403247,
          longitude: 2.152312,
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
            last_updated: "2024-06-20T15:50:51+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T15:50:51+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Gràcia Motos",
      },
      {
        id: "12152",
        label: "Moto  6",
        coordinates: {
          latitude: 41.403247,
          longitude: 2.152312,
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
            last_updated: "2024-06-21T08:35:54+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-21T08:35:54+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Gràcia Motos",
      },
      {
        id: "12153",
        label: "Moto  7",
        coordinates: {
          latitude: 41.403247,
          longitude: 2.152312,
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
            last_updated: "2024-06-20T15:50:38+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T15:50:38+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Gràcia Motos",
      },
      {
        id: "12154",
        label: "Moto  8",
        coordinates: {
          latitude: 41.403247,
          longitude: 2.152312,
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
            last_updated: "2024-06-20T15:50:34+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T15:50:34+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Gràcia Motos",
      },
      {
        id: "12155",
        label: "Moto  9",
        coordinates: {
          latitude: 41.403247,
          longitude: 2.152312,
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
            last_updated: "2024-06-20T15:50:54+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T15:50:54+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Gràcia Motos",
      },
      {
        id: "12156",
        label: "Moto  10",
        coordinates: {
          latitude: 41.403247,
          longitude: 2.152312,
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
            last_updated: "2024-06-20T15:50:47+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T15:50:47+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Gràcia Motos",
      },
      {
        id: "12157",
        label: "Moto  11",
        coordinates: {
          latitude: 41.403247,
          longitude: 2.152312,
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
            last_updated: "2024-06-20T15:50:38+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T15:50:38+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Gràcia Motos",
      },
      {
        id: "12158",
        label: "Moto  12",
        coordinates: {
          latitude: 41.403247,
          longitude: 2.152312,
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
            last_updated: "2024-06-20T15:50:46+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T15:50:46+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Gràcia Motos",
      },
      {
        id: "12159",
        label: "Moto  79",
        coordinates: {
          latitude: 41.403247,
          longitude: 2.152312,
        },
        ports: [
          {
            id: "1",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: "OUT_OF_ORDER",
              },
            ],
            last_updated: "2024-05-31T11:29:14+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: "OUT_OF_ORDER",
              },
            ],
            last_updated: "2024-05-31T11:29:14+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Gràcia Motos",
      },
      {
        id: "12160",
        label: "Moto  81",
        coordinates: {
          latitude: 41.403247,
          longitude: 2.152312,
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
            last_updated: "2024-06-20T15:50:58+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T15:50:58+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Gràcia Motos",
      },
      {
        id: "12161",
        label: "Moto  83",
        coordinates: {
          latitude: 41.403247,
          longitude: 2.152312,
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
            last_updated: "2024-06-20T15:50:47+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T15:50:47+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Gràcia Motos",
      },
      {
        id: "12162",
        label: "Moto  84",
        coordinates: {
          latitude: 41.403247,
          longitude: 2.152312,
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
            last_updated: "2024-06-20T15:50:42+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
          {
            id: "2",
            connector_type: wallConnector,
            power_kw: standardKillowatts,
            charging_mechanism: socketChargingMechanism,
            port_status: [
              {
                status: availableStatus,
              },
            ],
            last_updated: "2024-06-20T15:50:42+02:00",
            authentications: [
              {
                authentication_id: authenticationIdA1,
                payment_required: true,
              },
            ],
            notes: motorcycleRestrictionString,
            reservable: false,
          },
        ],
        notes: "Aparcament Gràcia Motos",
      },
    ],
    onstreet_location: false,
    language_code: languageCode,
    last_updated: "2023-07-05T08:35:57+02:00",
  },
];

export default locations;
