import {localize} from './localize/localize';
import {InverterModel} from './types';

export default {
	cardstyle: 'lite',
	wide: false,
	large_font: false,
	show_solar: true,
	show_battery: true,
	show_grid: true,
	card_height: '100%',
	card_width: '100%',
	decimal_places: 2,
	decimal_places_energy: 1,
	dynamic_line_width: true,
	max_line_width: 4,
	min_line_width: 1,
	inverter: {
		modern: true,
		colour: 'grey',
		autarky: 'power',
		model: InverterModel.Sunsynk,
		auto_scale: true,
		three_phase: false,
		navigate:'',
	},
	battery: {
		count: 1,
		energy: 0,
		shutdown_soc: 20,
		soc_end_of_charge: 100,
		invert_power: false,
		hide_soc: false,
		colour: 'pink',
		show_daily: false,
		show_remaining_energy: true,
		remaining_energy_to_shutdown: false,
		animation_speed: 6,
		max_power: 4500,
		show_absolute: false,
		auto_scale: true,
		dynamic_colour: true,
		linear_gradient: true,
		animate: true,
		path_threshold: 100,
		navigate:'',
		invert_flow: false,
	},
	battery2: {
		energy: 0,
		shutdown_soc: 20,
		soc_end_of_charge: 100,
		invert_power: false,
		hide_soc: false,
		colour: 'pink',
		show_remaining_energy: true,
		remaining_energy_to_shutdown: false,
		show_absolute: false,
		auto_scale: true,
		dynamic_colour: true,
		linear_gradient: true,
		animate: true,
		path_threshold: 100,
		navigate:'',
		invert_flow: false,
	},
	solar: {
		colour: 'orange',
		show_daily: false,
		mppts: 2,
		animation_speed: 9,
		max_power: 8000,
		pv1_name: localize('common.pv1_name'),
		pv2_name: localize('common.pv2_name'),
		pv3_name: localize('common.pv3_name'),
		pv4_name: localize('common.pv4_name'),
		pv5_name: localize('common.pv5_name'),
		pv6_name: localize('common.pv6_name'),
		auto_scale: true,
		display_mode: 1,
		dynamic_colour: true,
		efficiency: 3,
		off_threshold: 10,
		navigate:'',
		invert_flow: false,
	},
	load: {
		colour: '#5fb6ad',
		off_colour: 'grey',
		dynamic_colour: true,
		dynamic_icon: true,
		aux_dynamic_colour: true,
		off_threshold: 0,
		show_daily: false,
		show_aux: false,
		show_daily_aux: false,
		invert_aux: false,
		invert_load: false,
		show_absolute_aux: false,
		animation_speed: 4,
		max_power: 8000,
		aux_name: localize('common.aux_name'),
		aux_daily_name: localize('common.daily_aux'),
		aux_type: 'default',
		additional_loads: 0,
		aux_loads: 0,
		aux_load1_name: '',
		aux_load2_name: '',
		essential_name: localize('common.essential'),
		load1_icon: 'default',
		load2_icon: 'default',
		load1_name: '',
		load2_name: '',
		load3_name: '',
		load4_name: '',
		load5_name: '',
		load6_name: '',
		auto_scale: true,
		path_threshold: 100,
		navigate:'',
		invert_flow: false,
		label_daily_load: localize('common.daily_load'),
	},
	grid: {
		colour: '#5490c2',
		grid_name: localize('common.grid_name'),
		label_daily_grid_buy: localize('common.daily_grid_buy'),
		label_daily_grid_sell: localize('common.daily_grid_sell'),
		show_daily_buy: false,
		show_daily_sell: false,
		show_nonessential: true,
		nonessential_icon: 'default',
		nonessential_name: localize('common.nonessential_name'),
		additional_loads: 0,
		load1_name: '',
		load2_name: '',
		load3_name: '',
		load1_icon: 'default',
		load2_icon: 'default',
		load3_icon: 'default',
		invert_grid: false,
		animation_speed: 8,
		max_power: 8000,
		auto_scale: true,
		energy_cost_decimals: 2,
		show_absolute: false,
		off_threshold: 0,
		navigate:'',
		invert_flow: false,
	},
};
