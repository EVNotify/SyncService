const mongoose = require('mongoose');
 
const options = {
    id: false,
    timestamps: true,
    toObject: { getters: true },
    versionKey: false,
};
 
const TelemetrySchema = new mongoose.Schema({
    soc_display: {
        type: Number,
        required: false,
        default: null
    },
    soc_bms: {
        type: Number,
        required: false,
        default: null
    },
    soh: {
        type: Number,
        required: false,
        default: null
    },
    charging: {
        type: Boolean,
        required: false,
        default: null
    },
    slow_charge_port: {
        type: Boolean,
        required: false,
        default: null
    },
    normal_charge_port: {
        type: Boolean,
        required: false,
        default: null
    },
    rapid_charge_port: {
        type: Boolean,
        required: false,
        default: null
    },
    aux_battery_voltage: {
        type: Number,
        required: false,
        default: null
    },
    dc_battery_voltage: {
        type: Number,
        required: false,
        default: null
    },
    dc_battery_current: {
        type: Number,
        required: false,
        default: null
    },
    dc_battery_power: {
        type: Number,
        required: false,
        default: null
    },
    cumulative_energy_charged: {
        type: Number,
        required: false,
        default: null
    },
    cumulative_energy_discharged: {
        type: Number,
        required: false,
        default: null
    },
    battery_min_temperature: {
        type: Number,
        required: false,
        default: null
    },
    battery_max_temperature: {
        type: Number,
        required: false,
        default: null
    },
    battery_inlet_temperature: {
        type: Number,
        required: false,
        default: null
    },
    external_temperature: {
        type: Number,
        required: false,
        default: null
    },
    odo: {
        type: Number,
        required: false,
        default: null
    }
}, options);
 
module.exports = TelemetrySchema;