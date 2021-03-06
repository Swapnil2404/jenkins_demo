import { PropertyType } from "../enums/properties.js";

export const properties = [
  {
    id: "01",
    address: "some address here",
    description: "some long description",
    name: "Homemaker Grande A",
    type: PropertyType.residential,
    position: {
      lat: 8.948677279926585,
      lng: 125.5470567303216,
    },
    price: 210000,
    date: new Date(),
    enquiries: ["12"],
    currency: "PHP",
    features: ["Item 1", "Item 2", "Item 3", "Item 4"],
    userId: "01",
  },
  {
    id: "02",
    address: "some address3",
    description: "some long description",
    name: "The Glass Grande Maison B",
    type: PropertyType.commercial,
    position: {
      lat: 8.948603092201049,
      lng: 125.54424652989282,
    },
    date: new Date(),
    enquiries: [],
    price: 50000,
    currency: "PHP",
    features: [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
      "Item 6",
      "Item 7",
      "Item 8",
    ],
    userId: "0002",
  },
  {
    id: "03",
    address: "some address here",
    description: "shome short desciption",
    name: "La Grande Maison Certy C",
    type: PropertyType.industrial,
    position: {
      lat: 8.947998991587234,
      lng: 125.5430559487951,
    },
    price: 30000,
    date: new Date("2021/08/25"),
    enquiries: ["351"],
    currency: "PHP",
    features: [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
      "Item 6",
      "Item 7",
      "Item 8",
    ],
    userId: "01",
  },
];
