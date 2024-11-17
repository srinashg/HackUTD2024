import random
import csv
import datetime
import os
import requests
import json

############################APIKEY#################################

api_key = 'IIdx2Lv1ByawQcwgt7Ko6Vsc5OtSsLHRdUu76ZQC'
url = f'https://api.eia.gov/v2/electricity/state-electricity-profiles/summary/data/?frequency=annual&data[0]=average-retail-price&data[1]=carbon-dioxide-lbs&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000&api_key={api_key}'
response = requests.get(url)
###################################################################

# Define the number of records you want to generate
NUM_RECORDS = 100

# Define building names for randomness
buildings = [
    "Building 1", "Building 2", "Building 3", "Building 4", "Building 5"
]

# Define device types and corresponding devices
device_type_to_devices = {
    "HVAC": ["ACU", "HU"], #electric and gas
    "Lighting System": ["Fluorescent Lights", "LED Lights", "Incandescent Lights"], #electric
    "Appliances": ["Refrigerator", "Dishwasher", "Washing Machine"] #electric and water
}

device_types = list(device_type_to_devices.keys())

# Function to generate random data for building consumption
def generate_building_data():
    building_name = random.choice(buildings)
    
    # Randomly choose device type
    device_type = random.choice(device_types)
    
    # Get devices associated with the selected device type
    devices_for_type = device_type_to_devices[device_type]
    
    # Randomly choose a device from the allowed list for the selected type
    device = random.choice(devices_for_type)
    
    energy_consumption = random.randint(100000, 500000)  # kWh
    water_consumption = random.randint(200000, 1000000)  # gallons
    gas_consumption = random.randint(1000, 5000)  # therms
    carbon_footprint = round(energy_consumption * 0.92)  # CO2 in kg, assuming 0.92 kg CO2 per kWh

    # Random date within the past year
    start_date = datetime.datetime(2023, 1, 1)
    end_date = datetime.datetime(2024, 1, 1)
    timestamp = start_date + (end_date - start_date) * random.random()
    avg_CO2_emission = 10
    avg_retail_price = 10

    return {
        "building_name": building_name,
        "device_type": device_type,
        "device": device,
        "energy_consumption": energy_consumption,
        "water_consumption": water_consumption,
        "gas_consumption": gas_consumption,
        "carbon_footprint": carbon_footprint,
        "timestamp": timestamp.strftime("%Y-%m-%d %H:%M:%S")
    }

# Function to write the data to a CSV file
def write_to_csv(filename="building_data.csv", num_records=NUM_RECORDS):
    fieldnames = ["building_name", "device_type", "device", "energy_consumption", "water_consumption", "gas_consumption", "carbon_footprint", "timestamp"]
    
    with open(filename, mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        
        for _ in range(num_records):
            data = generate_building_data()
            writer.writerow(data)
        print(f"{num_records} records written to {filename}.")

# Call the function to generate the dataset
write_to_csv()

#response = requests.get('https://api.eia.gov/v2/electricity/state-electricity-profiles/summary/data/?frequency=annual&data[0]=average-retail-price&data[1]=carbon-dioxide-lbs&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000')
#print(response.status_code)
print(response.json())