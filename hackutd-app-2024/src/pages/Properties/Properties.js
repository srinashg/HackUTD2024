
const Properties = [
      {
        id: 1,
        name: "Greenwood Apartments",
        address: "123 Main St, Springfield",
        sustainability: "Sustainable",
        weeklyCost: "$300",
        weeklyCarbonFootprint: "200 kg CO2",
        resources: {
          electricity: {
            totalCost: "$180",
            devices: [
              { name: "Air Conditioner", category: "HVAC", usage: "70 kWh" },
              { name: "Dishwasher", category: "Appliances", usage: "40 kWh" },
            ],
          },
          water: {
            totalCost: "$80",
            devices: [
              { name: "Dishwasher", category: "Appliances", usage: "200 gallons" },
              { name: "Shower", category: "Appliances", usage: "150 gallons" },
            ],
          },
          gas: {
            totalCost: "$40",
            devices: [
              { name: "Heater", category: "HVAC", usage: "30 kWh" },
              { name: "Dishwasher", category: "Appliances", usage: "10 kWh" },
            ],
          },
        },
      },
      {
        id: 2,
        name: "Willow Towers",
        address: "456 Oak Lane, Metropolis",
        sustainability: "Somewhat Sustainable",
        weeklyCost: "$400",
        weeklyCarbonFootprint: "300 kg CO2",
        resources: {
          electricity: {
            totalCost: "$250",
            devices: [
              { name: "Refrigerator", category: "Appliances", usage: "90 kWh" },
              { name: "Lighting", category: "Lighting", usage: "60 kWh" },
            ],
          },
          water: {
            totalCost: "$100",
            devices: [
              { name: "Washing Machine", category: "Appliances", usage: "300 gallons" },
            ],
          },
          gas: {
            totalCost: "$50",
            devices: [
              { name: "Boiler", category: "HVAC", usage: "40 kWh" },
            ],
          },
        },
      },
    ];
export default Properties;