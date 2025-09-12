import {type ClientSchema, a, defineData} from "@aws-amplify/backend";

const schema = a.schema({
    Shift: a
        .model({
            name: a.string(), // Name of the shift (e.g., "Shift 1", "Shift 2")
            start: a.datetime(),
            stop: a.datetime(),
            routes: a.hasMany("Route", "shiftId"), // One-to-many relationship with Route
        })
        .authorization((allow) => [allow.owner()]),

    Route: a
        .model({
            name: a.string(), // Optional field for route name
            shiftId: a.string(), // Foreign key to Shift
            shift: a.belongsTo("Shift", "shiftId"), // Belongs-to relationship with Shift
            addresses: a.hasMany("Address", "routeId"), // One-to-many relationship with Address
        })
        .authorization((allow) => [allow.owner()]),

    Address: a
        .model({
            fullAddress: a.string(),
            notes: a.string(),
            pictures: a.hasMany("Picture", "addressId"), // One-to-many relationship with Picture
            route: a.belongsTo("Route", "routeId"), // Belongs-to relationship with Route
            routeId: a.string(), // Foreign key to Route
        })
        .authorization((allow) => [allow.owner()]),

    Picture: a
        .model({
            url: a.string(), // URL or path to the picture
            description: a.string(), // Optional description of the picture
            address: a.belongsTo("Address", "addressId"), // Belongs-to relationship with Address
            addressId: a.string(), // Foreign key to Address

        })
        .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: "userPool",
    },
});