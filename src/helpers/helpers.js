const iconsMapping = {
  adults: 'icon-adults',
  transmission: 'icon-automatic',
  engine: 'icon-petrol',
  airConditioner: 'icon-air-conditioner',
  bathroom: 'icon-shower',
  kitchen: 'icon-kitchen',
  beds: 'icon-beds',
  TV: 'icon-tv',
  CD: 'icon-cd',
  radio: 'icon-radio',
  shower: 'icon-shower',
  toilet: 'icon-toilet',
  freezer: 'icon-freezer',
  hob: 'icon-hob',
  microwave: 'icon-microwave',
  gas: 'icon-gas',
  water: 'icon-water',
};

const descriptionsMapping = {
  adults: '{} adults',
  transmission: '{}',
  engine: '{}',
  airConditioner: '{} Air conditioner',
  bathroom: 'Bathroom',
  kitchen: 'Kitchen',
  beds: '{} beds',
  TV: 'TV',
  CD: 'CD',
  radio: 'Radio',
  shower: 'Shower',
  toilet: 'Toilet',
  freezer: 'Freezer',
  hob: '{} hob',
  microwave: 'Microwave',
  gas: 'Gas',
  water: 'Water',
};

const getIconName = key => iconsMapping[key] || '';

const getDescription = (key, value) => {
  const template = descriptionsMapping[key] || '';
  return template.replace('{}', value);
};

const generateEquipmentList = data => {
  const equipmentList = [];

  for (const [key, value] of Object.entries(data)) {
    if (!iconsMapping.hasOwnProperty(key)) {
      continue;
    }

    if (
      (typeof value === 'number' && value > 0) ||
      (typeof value === 'string' && value.trim() !== '')
    ) {
      equipmentList.push({
        icon: getIconName(key),
        description: getDescription(key, value),
      });
    }
  }

  if (data.details) {
    for (const [key, value] of Object.entries(data.details)) {
      if (!iconsMapping.hasOwnProperty(key)) {
        continue;
      }

      if (
        (typeof value === 'number' && value > 0) ||
        (typeof value === 'string' && value.trim() !== '')
      ) {
        equipmentList.push({
          icon: getIconName(key),
          description: getDescription(key, value),
        });
      }
    }
  }

  return equipmentList;
};

export { generateEquipmentList };
