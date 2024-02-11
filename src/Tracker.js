import Navbar from "./Navbar";
import UserInputForm from "./UserInputForm";
import React from "react";
import { useState } from "react";
import "./styles.css";
const data = [
	[
		{
		  "Year": 2023,
		  "Location": "Australia",
		  "Bee Population (thousands)": 2805,
		  "Hive Count": 63,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2018,
		  "Location": "UK",
		  "Bee Population (thousands)": 2330,
		  "Hive Count": 111,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2017,
		  "Location": "USA",
		  "Bee Population (thousands)": 2860,
		  "Hive Count": 140,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2020,
		  "Location": "USA",
		  "Bee Population (thousands)": 3095,
		  "Hive Count": 141,
		  "Average Hive Health": "Poor",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2022,
		  "Location": "USA",
		  "Bee Population (thousands)": 3044,
		  "Hive Count": 129,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "High",
		  "Threats": "Disease"
		},
		{
		  "Year": 2023,
		  "Location": "Australia",
		  "Bee Population (thousands)": 2805,
		  "Hive Count": 63,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2023,
		  "Location": "USA",
		  "Bee Population (thousands)": 3638,
		  "Hive Count": 64,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Disease"
		},
		{
		  "Year": 2020,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2459,
		  "Hive Count": 141,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "Low",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2020,
		  "Location": "Australia",
		  "Bee Population (thousands)": 2343,
		  "Hive Count": 53,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Medium",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2020,
		  "Location": "UK",
		  "Bee Population (thousands)": 2087,
		  "Hive Count": 104,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Medium",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2019,
		  "Location": "Canada",
		  "Bee Population (thousands)": 3184,
		  "Hive Count": 133,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Medium",
		  "Threats": "Disease"
		},
		{
		  "Year": 2019,
		  "Location": "Canada",
		  "Bee Population (thousands)": 3184,
		  "Hive Count": 133,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Medium",
		  "Threats": "Disease"
		},
		{
		  "Year": 2020,
		  "Location": "Australia",
		  "Bee Population (thousands)": 2343,
		  "Hive Count": 53,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Medium",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2017,
		  "Location": "UK",
		  "Bee Population (thousands)": 3238,
		  "Hive Count": 96,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "High",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2016,
		  "Location": "USA",
		  "Bee Population (thousands)": 3459,
		  "Hive Count": 98,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Disease"
		},
		{
		  "Year": 2017,
		  "Location": "USA",
		  "Bee Population (thousands)": 2860,
		  "Hive Count": 140,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2022,
		  "Location": "UK",
		  "Bee Population (thousands)": 3123,
		  "Hive Count": 52,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2016,
		  "Location": "USA",
		  "Bee Population (thousands)": 3459,
		  "Hive Count": 98,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Disease"
		},
		{
		  "Year": 2016,
		  "Location": "USA",
		  "Bee Population (thousands)": 3459,
		  "Hive Count": 98,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Disease"
		},
		{
		  "Year": 2015,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2385,
		  "Hive Count": 58,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2019,
		  "Location": "Australia",
		  "Bee Population (thousands)": 2769,
		  "Hive Count": 67,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2019,
		  "Location": "Canada",
		  "Bee Population (thousands)": 3184,
		  "Hive Count": 133,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Medium",
		  "Threats": "Disease"
		},
		{
		  "Year": 2020,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2459,
		  "Hive Count": 141,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "Low",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2015,
		  "Location": "USA",
		  "Bee Population (thousands)": 3126,
		  "Hive Count": 138,
		  "Average Hive Health": "Poor",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Medium",
		  "Threats": "Disease"
		},
		{
		  "Year": 2015,
		  "Location": "Australia",
		  "Bee Population (thousands)": 3687,
		  "Hive Count": 56,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2016,
		  "Location": "USA",
		  "Bee Population (thousands)": 3459,
		  "Hive Count": 98,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Disease"
		},
		{
		  "Year": 2022,
		  "Location": "Australia",
		  "Bee Population (thousands)": 3437,
		  "Hive Count": 109,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Disease"
		},
		{
		  "Year": 2019,
		  "Location": "Canada",
		  "Bee Population (thousands)": 3184,
		  "Hive Count": 133,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Medium",
		  "Threats": "Disease"
		},
		{
		  "Year": 2020,
		  "Location": "USA",
		  "Bee Population (thousands)": 3095,
		  "Hive Count": 141,
		  "Average Hive Health": "Poor",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2019,
		  "Location": "Canada",
		  "Bee Population (thousands)": 3184,
		  "Hive Count": 133,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Medium",
		  "Threats": "Disease"
		},
		{
		  "Year": 2018,
		  "Location": "USA",
		  "Bee Population (thousands)": 3294,
		  "Hive Count": 108,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Medium",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2016,
		  "Location": "UK",
		  "Bee Population (thousands)": 2466,
		  "Hive Count": 111,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Medium",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2022,
		  "Location": "UK",
		  "Bee Population (thousands)": 3123,
		  "Hive Count": 52,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2020,
		  "Location": "Australia",
		  "Bee Population (thousands)": 2343,
		  "Hive Count": 53,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Medium",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2019,
		  "Location": "USA",
		  "Bee Population (thousands)": 3130,
		  "Hive Count": 91,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2021,
		  "Location": "Canada",
		  "Bee Population (thousands)": 3337,
		  "Hive Count": 109,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2020,
		  "Location": "USA",
		  "Bee Population (thousands)": 3095,
		  "Hive Count": 141,
		  "Average Hive Health": "Poor",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2018,
		  "Location": "Australia",
		  "Bee Population (thousands)": 3332,
		  "Hive Count": 88,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2016,
		  "Location": "UK",
		  "Bee Population (thousands)": 2466,
		  "Hive Count": 111,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Medium",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2021,
		  "Location": "UK",
		  "Bee Population (thousands)": 3396,
		  "Hive Count": 113,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2020,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2459,
		  "Hive Count": 141,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "Low",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2023,
		  "Location": "USA",
		  "Bee Population (thousands)": 3638,
		  "Hive Count": 64,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Disease"
		},
		{
		  "Year": 2020,
		  "Location": "USA",
		  "Bee Population (thousands)": 3095,
		  "Hive Count": 141,
		  "Average Hive Health": "Poor",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2021,
		  "Location": "UK",
		  "Bee Population (thousands)": 3396,
		  "Hive Count": 113,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2016,
		  "Location": "Canada",
		  "Bee Population (thousands)": 3215,
		  "Hive Count": 139,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "High",
		  "Threats": "Disease"
		},
		{
		  "Year": 2017,
		  "Location": "USA",
		  "Bee Population (thousands)": 2860,
		  "Hive Count": 140,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2016,
		  "Location": "Australia",
		  "Bee Population (thousands)": 2130,
		  "Hive Count": 70,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2023,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2252,
		  "Hive Count": 93,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Low",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2015,
		  "Location": "Australia",
		  "Bee Population (thousands)": 3687,
		  "Hive Count": 56,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2022,
		  "Location": "Australia",
		  "Bee Population (thousands)": 3437,
		  "Hive Count": 109,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Disease"
		},
		{
		  "Year": 2017,
		  "Location": "USA",
		  "Bee Population (thousands)": 2860,
		  "Hive Count": 140,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2015,
		  "Location": "Australia",
		  "Bee Population (thousands)": 3687,
		  "Hive Count": 56,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2016,
		  "Location": "Australia",
		  "Bee Population (thousands)": 2130,
		  "Hive Count": 70,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2019,
		  "Location": "Canada",
		  "Bee Population (thousands)": 3184,
		  "Hive Count": 133,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Medium",
		  "Threats": "Disease"
		},
		{
		  "Year": 2021,
		  "Location": "USA",
		  "Bee Population (thousands)": 3724,
		  "Hive Count": 109,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Disease"
		},
		{
		  "Year": 2020,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2459,
		  "Hive Count": 141,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "Low",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2023,
		  "Location": "UK",
		  "Bee Population (thousands)": 2871,
		  "Hive Count": 100,
		  "Average Hive Health": "Poor",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Medium",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2015,
		  "Location": "USA",
		  "Bee Population (thousands)": 3126,
		  "Hive Count": 138,
		  "Average Hive Health": "Poor",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Medium",
		  "Threats": "Disease"
		},
		{
		  "Year": 2016,
		  "Location": "UK",
		  "Bee Population (thousands)": 2466,
		  "Hive Count": 111,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Medium",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2015,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2385,
		  "Hive Count": 58,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2021,
		  "Location": "Australia",
		  "Bee Population (thousands)": 3515,
		  "Hive Count": 138,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Medium",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2019,
		  "Location": "Australia",
		  "Bee Population (thousands)": 2769,
		  "Hive Count": 67,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2018,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2276,
		  "Hive Count": 51,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Low",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2017,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2955,
		  "Hive Count": 102,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2022,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2021,
		  "Hive Count": 120,
		  "Average Hive Health": "Poor",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2021,
		  "Location": "USA",
		  "Bee Population (thousands)": 3724,
		  "Hive Count": 109,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Disease"
		},
		{
		  "Year": 2021,
		  "Location": "UK",
		  "Bee Population (thousands)": 3396,
		  "Hive Count": 113,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2022,
		  "Location": "Australia",
		  "Bee Population (thousands)": 3437,
		  "Hive Count": 109,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Disease"
		},
		{
		  "Year": 2016,
		  "Location": "USA",
		  "Bee Population (thousands)": 3459,
		  "Hive Count": 98,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Disease"
		},
		{
		  "Year": 2015,
		  "Location": "USA",
		  "Bee Population (thousands)": 3126,
		  "Hive Count": 138,
		  "Average Hive Health": "Poor",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Medium",
		  "Threats": "Disease"
		},
		{
		  "Year": 2017,
		  "Location": "UK",
		  "Bee Population (thousands)": 3238,
		  "Hive Count": 96,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "High",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2019,
		  "Location": "USA",
		  "Bee Population (thousands)": 3130,
		  "Hive Count": 91,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2019,
		  "Location": "Canada",
		  "Bee Population (thousands)": 3184,
		  "Hive Count": 133,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Medium",
		  "Threats": "Disease"
		},
		{
		  "Year": 2023,
		  "Location": "USA",
		  "Bee Population (thousands)": 3638,
		  "Hive Count": 64,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Disease"
		},
		{
		  "Year": 2022,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2021,
		  "Hive Count": 120,
		  "Average Hive Health": "Poor",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2015,
		  "Location": "Australia",
		  "Bee Population (thousands)": 3687,
		  "Hive Count": 56,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2021,
		  "Location": "UK",
		  "Bee Population (thousands)": 3396,
		  "Hive Count": 113,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2017,
		  "Location": "USA",
		  "Bee Population (thousands)": 2860,
		  "Hive Count": 140,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2016,
		  "Location": "Australia",
		  "Bee Population (thousands)": 2130,
		  "Hive Count": 70,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2020,
		  "Location": "Australia",
		  "Bee Population (thousands)": 2343,
		  "Hive Count": 53,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Medium",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2020,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2459,
		  "Hive Count": 141,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "Low",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2020,
		  "Location": "Australia",
		  "Bee Population (thousands)": 2343,
		  "Hive Count": 53,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Medium",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2016,
		  "Location": "UK",
		  "Bee Population (thousands)": 2466,
		  "Hive Count": 111,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Medium",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2022,
		  "Location": "USA",
		  "Bee Population (thousands)": 3044,
		  "Hive Count": 129,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "High",
		  "Threats": "Disease"
		},
		{
		  "Year": 2023,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2252,
		  "Hive Count": 93,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Low",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2016,
		  "Location": "Australia",
		  "Bee Population (thousands)": 2130,
		  "Hive Count": 70,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2022,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2021,
		  "Hive Count": 120,
		  "Average Hive Health": "Poor",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2021,
		  "Location": "Australia",
		  "Bee Population (thousands)": 3515,
		  "Hive Count": 138,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Medium",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2022,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2021,
		  "Hive Count": 120,
		  "Average Hive Health": "Poor",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2021,
		  "Location": "Australia",
		  "Bee Population (thousands)": 3515,
		  "Hive Count": 138,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Medium",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2016,
		  "Location": "Canada",
		  "Bee Population (thousands)": 3215,
		  "Hive Count": 139,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "High",
		  "Threats": "Disease"
		},
		{
		  "Year": 2023,
		  "Location": "UK",
		  "Bee Population (thousands)": 2871,
		  "Hive Count": 100,
		  "Average Hive Health": "Poor",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Medium",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2023,
		  "Location": "UK",
		  "Bee Population (thousands)": 2871,
		  "Hive Count": 100,
		  "Average Hive Health": "Poor",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Medium",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2016,
		  "Location": "USA",
		  "Bee Population (thousands)": 3459,
		  "Hive Count": 98,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "Low",
		  "Threats": "Disease"
		},
		{
		  "Year": 2022,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2021,
		  "Hive Count": 120,
		  "Average Hive Health": "Poor",
		  "Pesticide Use": "High",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2021,
		  "Location": "UK",
		  "Bee Population (thousands)": 3396,
		  "Hive Count": 113,
		  "Average Hive Health": "Excellent",
		  "Pesticide Use": "Low",
		  "Pollination Activity": "High",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2023,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2252,
		  "Hive Count": 93,
		  "Average Hive Health": "Fair",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Low",
		  "Threats": "Pesticides"
		},
		{
		  "Year": 2020,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2459,
		  "Hive Count": 141,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "Low",
		  "Threats": "Habitat Loss"
		},
		{
		  "Year": 2018,
		  "Location": "USA",
		  "Bee Population (thousands)": 3294,
		  "Hive Count": 108,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "High",
		  "Pollination Activity": "Medium",
		  "Threats": "Climate Change"
		},
		{
		  "Year": 2020,
		  "Location": "Canada",
		  "Bee Population (thousands)": 2459,
		  "Hive Count": 141,
		  "Average Hive Health": "Good",
		  "Pesticide Use": "Medium",
		  "Pollination Activity": "Low",
		  "Threats": "Habitat Loss"
		}
	  ]
]
const Tracker = () => {
	const [selectedLocation, setSelectedLocation] = useState();
	const [filteredData, setFilteredData] = useState([]);
	const handleLocationChange = (location) => {
		setSelectedLocation(location);
		const newData = data.filter(item => item.Location === location);
		setFilteredData(newData);
	  };
	  return (
		<div className="flex flex-col bg-gradient-to-b from-[#FFF3AC] to-[#F4B04E] min-h-screen">
		  <Navbar />
		  <div className="flex grow px-28 py-12 justify-between gap-20 font-lucida">
			<div className="flex flex-col w-3/4 gap-5 text-center">
			  <div className="border-[#64422F] border-8 rounded-lg bg-[#FFF8CC] drop-shadow-xl flex p-5">
				{/* Map content with buttons */}
				<div className="flex flex-col justify-between">
				  <div className="text-xl mb-4">location title</div>
				  <div className="flex gap-4">
					<button onClick={() => handleLocationChange("USA")}>US</button>
					<button onClick={() => handleLocationChange("UK")}>UK</button>
					<button onClick={() => handleLocationChange("Australia")}>Australia</button>
					<button onClick={() => handleLocationChange("Canada")}>Canada</button>
				  </div>
				  {/* Placeholder for actual map content */}
				  <div className="mt-4 flex-grow">[Map Placeholder]</div>
				</div>
			  </div>
			</div>
			<div className="flex flex-col w-1/4 bg-[#FFF8CC] text-center border-[#64422F] border-8 rounded-lg drop-shadow-xl">
  <div className="p-3 overflow-y-auto max-h-screen">
    {/* Data display area */}
    {selectedLocation && filteredData.map((item, index) => (
      <div key={index} className="text-left p-2">
        <p>Year: {item.Year}</p>
        <p>Location: {item.Location}</p>
        <p>Bee Population: {item["Bee Population (thousands)"]}k</p>
        <p>Hive Count: {item["Hive Count"]}</p>
        <p>Average Hive Health: {item["Average Hive Health"]}</p>
        <p>Pesticide Use: {item["Pesticide Use"]}</p>
        <p>Pollination Activity: {item["Pollination Activity"]}</p>
        <p>Threats: {item["Threats"]}</p>
      </div>
    ))}
  </div>
</div>

		  </div>
		</div>
	  );
	};
	
	export default Tracker;
	