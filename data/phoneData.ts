export interface Phone {
  id: number;
  image: string;
  model: string;
  tagline: string;
  description: string;
  location?: string;
  followers: string;
}


export const members: {
  id: number;
  image: string;
  tagline: string;
  followers: string;
  location: string;
}[] = [
  { id: 1, image: "/images/Emily_Miller.jpeg", tagline: "Emily Miller", followers: "83.5k Followers", location: "Ohio, US" },
  { id: 2, image: "/images/Jennifer_Alford.jpeg", tagline: "Jennifer Alford", followers: "1.9k Followers", location: "Iowa, US" },
  { id: 3, image: "/images/Nathan_Weynschenk.jpeg", tagline: "Nathan Weynschenk", followers: "900 Followers", location: "Canada" },
  { id: 4, image: "/images/MJ_Haislip.jpeg", tagline: "MJ Haislip", followers: "5k Followers", location: "Kansas, US" },
  { id: 5, image: "/images/Paul_Paulino.jpg", tagline: "Paul Paulino", followers: "2.1k Followers", location: "California, US" },
  { id: 6, image: "/images/Shannon_Scalise.jpg", tagline: "Shannon Scalise", followers: "10k Followers", location: "Ohio, US" },
  { id: 7, image: "/images/Jessalyn_Tester.jpeg", tagline: "Jessalyn Tester", followers: "17k Followers", location: "Ohio, US" },
  { id: 8, image: "/images/Rebecca_Feigin.jpeg", tagline: "Becky Feigin", followers: "7.1k Followers", location: "Virginia, USA" },
  { id: 9, image: "/images/Martha_Loveless.jpg", tagline: "Martha Loveless", followers: "1.2k Followers", location: "California, US" },
  { id: 10, image: "/images/Elena_Grubac.jpg", tagline: "Elena Grubac", followers: "800 Followers", location: "Nevada, US" },
  { id: 11, image: "/images/Alex_Gettlin.jpg", tagline: "Alex Gettlin", followers: "3.3k Followers", location: "Georgia, US" },
  { id: 12, image: "/images/Mike_Provenzano.jpeg", tagline: "Mike Provenzano", followers: "19k Followers", location: "Florida, US" },
  { id: 13, image: "/images/Magda_Baez.jpg", tagline: "Magda Baez", followers: "900 Followers", location: "New York, US" },
  { id: 14, image: "/images/ReneeDawson.jpeg", tagline: "Renee Dawson", followers: "1.2k Followers", location: "Indiana, US" },
  { id: 15, image: "/images/Alison_Soja.jpeg", tagline: "Alison Soja", followers: "1.4k Followers", location: "Kensas, US" },
  { id: 16, image: "/images/Brooke_Embry.jpg", tagline: "Brooke Embry", followers: "3k Followers", location: "South Carolina, US" },
  { id: 17, image: "/images/Bianca_Beldini.png", tagline: "Bianca Beldini", followers: "152k Followers", location: "New York, US" },
  { id: 18, image: "/images/Betty_Ann.jpg", tagline: "Betty Ann Oakley", followers: "1.6k Followers", location: "Canada" },
  { id: 19, image: "/images/Katy_Abram.jpeg", tagline: "Katy Abram", followers: "11k Followers", location: "Pennsylvania, US" },
  { id: 20, image: "/images/Megan_Herrmann.jpeg", tagline: "Megan Hermann", followers: "200 Followers", location: "Colorado, US" },
  { id: 21, image: "/images/Chris_Friesen.jpeg", tagline: "Christopher Friesen", followers: "314 Followers", location: "Alberta, Canada" },
  { id: 22, image: "/images/Sarah-2.6k-Twitter.png", tagline: "Sarah Franz", followers: "31.5k Followers", location: "Alabama, US" },
  { id: 23, image: "/images/Andrew_Renschen.png", tagline: "Andrew Renschen", followers: "3k Followers", location: "Minnesota, US" },
  { id: 24, image: "/images/Simply_star.jpg", tagline: "Istarlin Halane", followers: "7.5k Followers", location: "Alberta, Canada" },
  { id: 25, image: "/images/andrew_james.jpeg", tagline: "Andrew James", followers: "2.7k Followers", location: "Minnesota, USA" },
  { id: 26, image: "/images/angela_ward.png", tagline: "Angela Ward", followers: "24k Followers", location: "North Essex, UK" },
  { id: 27, image: "/images/brittany_haughton.jpg", tagline: "Brittany Haughton", followers: "137 Followers", location: "Texas, USA" },
  { id: 28, image: "/images/joyce_tarabelli.jpeg", tagline: "Joyce Tarabelli", followers: "21.1k Followers", location: "" },
  { id: 29, image: "/images/chuck_lasker.jpg", tagline: "Chuck Lasker", followers: "9.4k Followers", location: "Carolina, US" },
  { id: 30, image: "/images/Leon-1.4k-Twitter.png", tagline: "Leon", followers: "1.4k Followers", location: "UK" },
  { id: 31, image: "/images/Julie3kTwitter.jpg", tagline: "Julie", followers: "3K Followers", location: "Vancouver, Canada" },
  { id: 32, image: "/images/Jess1.2kTwitter.png", tagline: "Jess", followers: "1.2k Followers", location: "North Carolina, US" },
  { id: 33, image: "/images/Alex1.5kTwitter.jpg", tagline: "Alex", followers: "1.5k Followers", location: "Florida, US" },
  { id: 34, image: "/images/Rebecca_Feigin.jpeg", tagline: "Rebecca Feigin", followers: "10k Followers", location: "South Carolina, US" },
];


export const phones: Phone[] = [
  {
    id: 1,
    image: "/images/Sarah-2.6k-Twitter.png",
    model: "",
    tagline: "Sarah Franz",
    description: "",
    location: "Huntsville, Alabama US",
    followers: "31.5k Followers",
  },
  {
    id: 2,
    image: "/images/Leon-1.4k-Twitter.png",
    model: "",
    tagline: "Leon ",
    description: "A17 Pro chip. Action button. 48MP camera. Titanium design.",
    // location: "#4E5851",
    followers: "1.4k Followers",
  },
  {
    id: 3,
    image: "/images/Julie3kTwitter.jpg",
    model: "",
    tagline: "Julie ",
    description: "",
    // location: "#201D1C",
    followers: "3K Followers",
  },
  {
    id: 4,
    image: "/images/Jess1.2kTwitter.png",
    model: "",
    tagline: "Jess ",
    description:
      "The largest iPhone display, incredible battery life, and Dynamic Island.",
    // location: "#3B3B3D",
    followers: "1.2k Followers",
  },
   {
    id: 5,
    image: "/images/Brooke_Embry.jpg",
    model: "",
    tagline: "Brooke Embry",
    description: "",
    location: "Charleston, South Carolina",
    followers: "3k Followers",
  },
  {
    id: 6,
    image: "/images/Alex1.5kTwitter.jpg",
    model: "",
    tagline: "Alex ",
    description: "",
    // location: "#505050",
    followers: "1.5k Followers",
  },
  {
    id: 7,
    image: "/images/Alex_Gettlin.jpg",
    model: "",
    tagline: "Alex Gettlin",
    description: "",
    location: "Atlanta Georgia - USA",
    followers: "3k Followers",
  },
  {
    id: 8,
    image: "/images/Alison_Soja.jpeg",
    model: "",
    tagline: "Alison Soja",
    description: "",
    location: "Kensas - US",
    followers: "1.4k Followers",
  },
  {
    id: 9,
    image: "/images/Betty_Ann.jpg",
    model: "",
    tagline: "Betty Ann",
    description: "",
    location: "Canada",
    followers: "1.6k Followers",
  },
  {
    id: 10,
    image: "/images/Bianca_Beldini.png",
    model: "",
    tagline: "Bianca Beldini",
    description: "",
    location: "New York",
    followers: "152k Followers",
  },
   {
    id: 11,
    image: "/images/Chris_Friesen.jpeg",
    model: "",
    tagline: "Chris Firesen",
    description: "",
    location: "Alberta, Canada",
    followers: "314 Followers",
  },
     {
    id: 12,
    image: "/images/Elena_Grubac.jpg",
    model: "",
    tagline: "Elena Grubac",
    description: "",
    location: "Las Vegas Nevada, US",
    followers: "800 Followers",
  },
     {
    id: 13,
    image: "/images/Emily_Miller.jpeg",
    model: "",
    tagline: "Emily Miller",
    description: "",
    location: "Cleveland, Ohio US",
    followers: "83.5k Followers",
  },
   {
    id: 14,
    image: "/images/Jennifer_Alford.jpeg",
    model: "",
    tagline: "Jennifer Alford",
    description: "",
    location: "Iowa, US",
    followers: "2k Followers",
  },
  {
    id: 15,
    image: "/images/Jessalyn_Tester.jpeg",
    model: "",
    tagline: "Jessalyn Tester",
    description: "",
    location: "Ohio State, US",
    followers: "17k Followers",
  },
    {
    id: 16,
    image: "/images/Katy_Abram.jpeg",
    model: "",
    tagline: "Katy Abram",
    description: "",
    location: "Pennsylvania US",
    followers: "11k Followers",
  },
  {
    id: 17,
    image: "/images/Magda_Baez.jpg",
    model: "",
    tagline: "Magda Baez",
    description: "",
    location: "New York, US",
    followers: "900 Followers",
  },
   {
    id: 18,
    image: "/images/Martha_Loveless.jpg",
    model: "",
    tagline: "Martha Loveless",
    description: "",
    location: "Sacramento, California US",
    followers: "1.2k Followers",
  },
    {
    id: 19,
    image: "/images/Megan_Herrmann.jpeg",
    model: "",
    tagline: "Megan Hermann",
    description: "",
    location: "Colorado, US",
    followers: "200 Followers",
  },

   {
    id: 20,
    image: "/images/Mike_Provenzano.jpeg",
    model: "",
    tagline: "Mike Provenzano",
    description: "",
    location: "Florida, US",
    followers: "19k Followers",
  },
    {
    id: 21,
    image: "/images/MJ_Haislip.jpeg",
    model: "",
    tagline: "MJ Haislip",
    description: "",
    location: "Olathe. Kansas City US",
    followers: "5k Followers",
  },
     {
    id: 22,
    image: "/images/Nathan_Weynschenk.jpeg",
    model: "",
    tagline: "Nathan Weynschenk",
    description: "",
    location: "Canada",
    followers: "900 Followers",
  },
     {
    id: 23,
    image: "/images/Paul_Paulino.jpg",
    model: "",
    tagline: "Paul Paulino",
    description: "",
    location: "California, US",
    followers: "2.1k Followers",
  },
     {
    id: 24,
    image: "/images/Rebecca_Feigin.jpeg",
    model: "",
    tagline: "Rebecca Feigin",
    description: "",
    location: "Charleston, South Carolina",
    followers: "",
  },
  {
    id: 25,
    image: "/images/ReneeDawson.jpeg",
    model: "",
    tagline: "Renee Dawson",
    description: "",
    location: "Fort Wayne, Indiana US",
    followers: "1.2k Followers",
  },
  {
    id: 26,
    image: "/images/Shannon_Scalise.jpg",
    model: "",
    tagline: "Shannon Scalise",
    description: "",
    location: "Ohio State, US",
    followers: "10k Followers",
  },
];