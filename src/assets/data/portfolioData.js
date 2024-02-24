import portfolioImg01 from "../images/movierec.png";
import portfolioImg02 from "../images/laptopprice.png";
import portfolioImg03 from "../images/weatherapp.png";
import portfolioImg04 from "../images/consortapp.png";
import portfolioImg05 from "../images/trackerapp.png";
import portfolioImg06 from "../images/gymapp.png";
import portfolioImg07 from "../images/shoeshop.png";
import portfolioImg08 from "../images/spamdetect.png";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Machine Learning",
    title: "Movie Recommender Application",
    description:
      "System is designed to help users discover new movies based on their interests and preferences. By analyzing the content and data of movies, the system provides personalized recommendations by identifying similar movies.",
    technologies: ["Python", "Sci-kit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "https://github.com/SabaaN/Movie-Recommendation-System",
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "UI",
    title: "Consortia App UI",
    description:
      "Friendly and vibrant UI for an application called consortia, for desktop. Rooted in contemporary design paradigms, the Consortia app's interface showcases clean elements that amplify both usability and user engagement.",
    technologies: ["Figma"],
    siteUrl: "https://www.figma.com/file/2uRgv9TahMV9iQDBRAGDQB/consortia-app?type=design&node-id=0%3A1&mode=design&t=Nj2W5zGuuKY4Rr5z-1",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Machine Learning",
    title: "Laptop Price Predictor",
    description:
      "The application is used for predicting laptop prices based on various features. By leveraging machine learning algorithms, this project aims to provide accurate price estimates for laptops, assisting users in making informed purchasing decisions.",
    technologies: ["Python", "Sci-kit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "https://github.com/SabaaN/Laptop-price-predictor",
  },
  {
    id: "04",
    imgUrl: portfolioImg05,
    category: "Web Development",
    title: "Expense Tracking Application",
    description:
      "This Application is a comprehensive financial management tool designed to help users effortlessly track their expenses and income. Built using the MERN stack, it offers an intuitive and visually pleasing experience for managing personal finances.",
    technologies: ["ReactJs", "HTML & CSS", "Node.js", "MongoDB",],
    siteUrl: "https://github.com/SabaaN/Expense-Tracker",
  },
  {
    id: "05",
    imgUrl: portfolioImg03,
    category: "UI",
    title: "Weather App UI",
    description:
      "UI for weather app, for mobile devices. The UI design of the weather app draws inspiration from modern and minimalistic design principles, enhancing usability and user engagement.",
    technologies: ["Figma"],
    siteUrl: "https://www.figma.com/file/XgY614vbRdvpwVBGj6c1Ma/weather-app?type=design&mode=design&t=Nj2W5zGuuKY4Rr5z-1",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Web Development",
    title: "Gym Workout App",
    description:
      "A comprehensive platform designed to assist users in their fitness journey. It offers a range of features, includingworkout plans,  recommendations, and information about different exercises.",
    technologies: ["ReactJs", "MaterialUI", "RapidAPI"],
    siteUrl: "https://github.com/SabaaN/Gym-web-app",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "UI",
    title: "TipToes Shoe Shop UI",
    description:
      "Radiant UI design for an online shoes thrift shop. It embodies an exquisite blend of modern aesthetics and sophisticated design elements, ensuring a visually pleasing atmosphere.",
    technologies: ["Figma"],
    siteUrl: "https://www.figma.com/file/DIwGMQAcjVEeQhUhLz8W5N/TipToes-shoe-shop?type=design&mode=design&t=Nj2W5zGuuKY4Rr5z-1",
  },
  {
    id: "08",
    imgUrl: portfolioImg08,
    category: "Machine Learning",
    title: "Spam Message Detector",
    description:
      "This project aims to develop a machine learning model that can accurately identify spam messages. The model is trained using labeled data, enabling it to learn patterns and features indicative of spam messages",
    technologies: ["Python", "Sci-kit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "#",
  },
];

export default portfolios;
