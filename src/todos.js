const date1 = new Date(2024, 6, 18, 10, 12);
const date2 = new Date(2025, 2, 26, 10, 12);

const todos = [
  {
    title: "Изучить React19",
    desc: "Да поскорее",
    img: "",
    done: true,
    createdAt: date1.toLocaleString(),
    key: date1.getTime(),
  },
  {
    title: "Изучить еще что нибудь",
    desc: "Да поскорее уже",
    img: "",
    done: false,
    createdAt: date2.toLocaleString(),
    key: date2.getTime(),
  },
];

export default todos;
