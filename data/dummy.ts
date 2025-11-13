import { Movie } from "@/types/movie";

export const user = {
  name: "Nott Nott",
  email: "nottnott@gmail.com",
  avatar: "/avatar.jpg",
}

export const movies: Movie[] = [
  {
    _id: "1",
    title: "The Silent Horizon",
    director: { _id: "d1", name: "Ava Reynolds", phoneNo: "+1 202 555 0192" },
    year: 2022,
  },
  {
    _id: "2",
    title: "Echoes of Tomorrow",
    director: { _id: "d2", name: "Liam Carter", phoneNo: "+1 202 555 0147" },
    year: 2023,
  },
  {
    _id: "3",
    title: "Velvet Skies",
    director: { _id: "d3", name: "Sophia Kim", phoneNo: "+1 202 555 0168" },
    year: 2021,
  },
  {
    _id: "4",
    title: "Fragments of Light",
    director: { _id: "d4", name: "Noah Patel", phoneNo: "+1 202 555 0184" },
    year: 2019,
  },
  {
    _id: "5",
    title: "Midnight Mirage",
    director: { _id: "d5", name: "Maya Thompson", phoneNo: "+1 202 555 0129" },
    year: 2020,
  },
  {
    _id: "6",
    title: "Beyond the River",
    director: { _id: "d6", name: "Ethan Ross", phoneNo: "+1 202 555 0175" },
    year: 2024,
  },
  {
    _id: "7",
    title: "Crimson Whispers",
    director: { _id: "d7", name: "Olivia Garcia", phoneNo: "+1 202 555 0156" },
    year: 2018,
  },
  {
    _id: "8",
    title: "The Quantum Veil",
    director: { _id: "d8", name: "Lucas Nguyen", phoneNo: "+1 202 555 0198" },
    year: 2025,
  },
  {
    _id: "9",
    title: "Whispering Shadows",
    director: { _id: "d9", name: "Isabella Rivera", phoneNo: "+1 202 555 0134" },
    year: 2023,
  },
  {
    _id: "10",
    title: "The Lost Frequency",
    director: { _id: "d10", name: "Henry Brooks", phoneNo: "+1 202 555 0112" },
    year: 2020,
  },
];
