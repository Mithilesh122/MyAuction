// For a real auction, set this to false
export const isDemo = false;

// Specify item details
let items = [
  {
    primaryImage: "https://m.media-amazon.com/images/I/71zfIPqKiqL._AC_UL600_FMwebp_QL65_.jpg",
    title: "Globus",
    subtitle: "Men Black Solid Cotton Regular Fit Casual Shirt",
    detail: "Care Instructions: Machine Wash\nFit Type: Regular Fit\nLength: Regular\nFabric Material: 100% Cotton\nPattern: Solid\nOccasion: Daily Wear",
    secondaryImage: "https://m.media-amazon.com/images/I/61eAdn47NGL._UX679_.jpg",
    amount: 999,
    endTime: "2023-05-25T08:30:00-07:00",
  },
  {
    primaryImage: "https://m.media-amazon.com/images/I/71x0SSshrwL._AC_UL600_FMwebp_QL65_.jpg",
    title: "Globus",
    subtitle: "Men Blue Solid Linen Regular Fit Casual Shirt",
    detail: "Care Instructions: Machine Wash\nFit Type: Regular Fit\nLength: Regular\nFabric Material: 100% Cotton\nPattern: Solid\nOccasion: Daily Wear",
    secondaryImage: "https://m.media-amazon.com/images/I/61WHMUkX49L._UX679_.jpg",
    amount: 999,
    endTime: "2023-05-25T08:30:00-07:00",
  },
  {
    primaryImage: "https://m.media-amazon.com/images/I/81oMuLDFamL._UY879_.jpg",
    title: "ANCITA TEXTILE PVT LTD",
    subtitle: "Men's Printed Cotton Buttoned Regular Fit Collared Fullsleeve",
    detail: "Care Instructions: Machine Wash\nFit Type: Regular Fit\nLength: Regular\nFabric Material: 100% Cotton\nPattern: Solid\nOccasion: Daily Wear",
    secondaryImage: "https://m.media-amazon.com/images/I/81U3lo4gtsL._UY879_.jpg",
    amount: 499,
    endTime: "2023-05-25T08:30:00-07:00",
  },
  {
    primaryImage: "https://m.media-amazon.com/images/I/71MaGTXl7ML._AC_UL600_FMwebp_QL65_.jpg",
    title: "Lymio",
    subtitle: "Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men",
    detail: "Care Instructions: Machine Wash\nFit Type: Regular Fit\nLength: Regular\nFabric Material: 100% Cotton\nPattern: Solid\nOccasion: Daily Wear",
    secondaryImage: "https://m.media-amazon.com/images/I/71pM2fMgmRL._UY879_.jpg",
    amount: 400,
    endTime: "2023-05-25T08:30:00-07:00",
  },
  {
    primaryImage: "https://m.media-amazon.com/images/I/518ZK8FAqcL._AC_UL600_FMwebp_QL65_.jpg",
    title: "Mountanya",
    subtitle: "Casual Regular Fit Tribal Print Full Sleeve Shirt for Men,",
    detail: "Care Instructions: Machine Wash\nFit Type: Regular Fit\nLength: Regular\nFabric Material: 100% Cotton\nPattern: Solid\nOccasion: Daily Wear",
    secondaryImage: "https://m.media-amazon.com/images/I/518ZK8FAqcL._AC_UL600_FMwebp_QL65_.jpg",
    amount: 700,
    endTime: "2023-05-25T08:30:00-07:00",
  },
  {
    primaryImage: "https://m.media-amazon.com/images/I/61YQd1wdQBL._UY879_.jpg",
    title: "Dennis Lingo",
    subtitle: "Men Casual Shirts",
    detail: "Care Instructions: Machine Wash\nFit Type: Regular Fit\nLength: Regular\nFabric Material: 100% Cotton\nPattern: Solid\nOccasion: Daily Wear",
    secondaryImage: "https://m.media-amazon.com/images/I/61-2gQ-7qTL._UY879_.jpg",
    amount: 800,
    endTime: "2023-05-25T08:30:00-07:00",
  },
  {
    primaryImage: "https://m.media-amazon.com/images/I/618Wek95laS._AC_UL600_FMwebp_QL65_.jpg",
    title: "Dennis Lingo",
    subtitle: "Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar",
    detail: "Care Instructions: Machine Wash\nFit Type: Regular Fit\nLength: Regular\nFabric Material: 100% Cotton\nPattern: Solid\nOccasion: Daily Wear",
    secondaryImage: "https://m.media-amazon.com/images/I/61hq+LfAdOS._UY879_.jpg",
    amount: 999,
    endTime: "2023-05-25T08:30:00-07:00",
  },
  {
    primaryImage: "https://m.media-amazon.com/images/I/71T3EQknkBL._AC_UL600_FMwebp_QL65_.jpg",
    title: "Allen Solly",
    subtitle: "Men's Slim Fit Shirt",
    detail: "Care Instructions: Machine Wash\nFit Type: Regular Fit\nLength: Regular\nFabric Material: 100% Cotton\nPattern: Solid\nOccasion: Daily Wear",
    secondaryImage: "https://m.media-amazon.com/images/I/719TWPk3dQL._UY879_.jpg",
    amount: 100,
    endTime: "2023-05-25T08:30:00-07:00",
  },
  {
    primaryImage: "https://m.media-amazon.com/images/I/81aDUnOxgyL._AC_UL600_FMwebp_QL65_.jpg",
    title: "Lymio",
    subtitle: "Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men",
    detail: "Care Instructions: Machine Wash\nFit Type: Regular Fit\nLength: Regular\nFabric Material: 100% Cotton\nPattern: Solid\nOccasion: Daily Wear",
    secondaryImage: "https://m.media-amazon.com/images/I/91+LCo0oPvL._UY879_.jpg",
    amount: 1200,
    endTime: "2023-05-25T08:30:00-07:00",
  },
  {
    primaryImage: "https://m.media-amazon.com/images/I/71HSM7+SH-L._AC_UL600_FMwebp_QL65_.jpg",
    title: "Amazon Brand - Symbol",
    subtitle: "Men's Regular Fit Formal Shirt",
    detail: "Care Instructions: Machine Wash\nFit Type: Regular Fit\nLength: Regular\nFabric Material: 100% Cotton\nPattern: Solid\nOccasion: Daily Wear",
    secondaryImage: "https://m.media-amazon.com/images/I/712VHlRgOiL._UX569_.jpg",
    amount: 600,
    endTime: "2023-05-25T08:30:00-07:00",
  },
  {
    primaryImage: "https://m.media-amazon.com/images/I/41JVgTrS9RL.jpg",
    title: "U-TURN",
    subtitle: "U-TURN Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Striped Shirt",
    detail: "Care Instructions: Machine Wash\nFit Type: Regular Fit\nLength: Regular\nFabric Material: 100% Cotton\nPattern: Solid\nOccasion: Daily Wear",
    secondaryImage: "https://m.media-amazon.com/images/I/41lh7rBm4vL.jpg",
    amount: 300,
    endTime: "2023-05-25T08:30:00-07:00",
  },
  {
    primaryImage: "https://m.media-amazon.com/images/I/71UkW9i6uRL._AC_UL600_FMwebp_QL65_.jpg",
    title: "Lymio",
    subtitle: "Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men",
    detail: "Care Instructions: Machine Wash\nFit Type: Regular Fit\nLength: Regular\nFabric Material: 100% Cotton\nPattern: Solid\nOccasion: Daily Wear",
    secondaryImage: "https://m.media-amazon.com/images/I/91QyUuoFueL._UY879_.jpg",
    amount: 700,
    endTime: "2023-05-25T08:30:00-07:00",
  },
];

// Fill missing fields with random information
async function generateRandomItemData(items) {
  // Random cat names
  await $.getJSON(
    "https://random-data-api.com/api/name/random_name",
    { size: items.length },
    (data) => {
      data.forEach((elem, i) => {
        items[i].title ||= elem.name;
      });
    }
  );
  // Random lorem ipsum cat descriptions
  await $.getJSON(
    "https://random-data-api.com/api/lorem_ipsum/random_lorem_ipsum",
    { size: items.length },
    (data) => {
      data.forEach((elem, i) => {
        items[i].subtitle ||= elem.short_sentence;
        items[i].detail ||= elem.very_long_sentence;
      });
    }
  );
  // Random cat images
  for (let i = 0; i < items.length; i++) {
    items[i].primaryImage ||= "https://cataas.com/cat/cute?random=" + i;
    items[i].secondaryImage ||= "https://cataas.com/cat/cute?random=" + i;
  }
  return items;
}

export async function getItems() {
  items = isDemo ? await generateRandomItemData(items) : items;
  // Insert the index from the unsorted array as the item ID
  items.forEach((item, idx) => (item.id = idx));
  // Parse endTime from ISO 8601 string
  items.forEach((item) => (item.endTime = new Date(item.endTime)));
  // Sort items in ascending end time
  items.sort((a, b) => a["endTime"] - b["endTime"]);
  return items;
}
