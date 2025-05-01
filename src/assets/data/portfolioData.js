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
    category: "Machine Learning",
    title: "Music Genre Classfication",
    description:
      "Developed a machine learning model to classify music tracks into different genres using audio features like MFCCs, spectral contrast, and tempo. The model was trained on the GTZAN dataset and achieved high accuracy using NNs (CNNs and RCNNs). React for front-end",
    technologies: ["Python", "TensorFlow/Keras", "Librosa", "Scikit-learn", "NumPy"],
    siteUrl: "#",
  },
  {
    id: "02",
    category: "Web Development",
    title: "Resume Maker",
    description:
      "Friendly and vibrant UI for an application called consortia, for desktop. Rooted in contemporary design paradigms, the Consortia app's interface showcases clean elements that amplify both usability and user engagement.",
    technologies: ["Figma"],
    siteUrl: "https://www.figma.com/file/2uRgv9TahMV9iQDBRAGDQB/consortia-app?type=design&node-id=0%3A1&mode=design&t=Nj2W5zGuuKY4Rr5z-1",
  },
  {
    id: "03",
    category: "Machine Learning",
    title: "Image Caption Generator",
    description:
      "This project aims to develop a machine learning model that can accurately identify spam messages. The model is trained using labeled data, enabling it to learn patterns and features indicative of spam messages",
    technologies: ["Python", "Sci-kit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "#",
  }, 
  {
    id: "04",
    category: "Machine Learning",
    title: "Image Colorizer",
    description:
      "This project aims to develop a machine learning model that can accurately identify spam messages. The model is trained using labeled data, enabling it to learn patterns and features indicative of spam messages",
    technologies: ["Python", "Sci-kit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "#",
  },
  {
    id: "05",
    category: "Machine Learning",
    title: "Crowdfunding DApp",
    description:
      "This project aims to develop a machine learning model that can accurately identify spam messages. The model is trained using labeled data, enabling it to learn patterns and features indicative of spam messages",
    technologies: ["Python", "Sci-kit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "#",
  },
  {
    id: "06",
    category: "Machine Learning",
    title: "News Headline Generation",
    description:
      "This project aims to develop a machine learning model that can accurately identify spam messages. The model is trained using labeled data, enabling it to learn patterns and features indicative of spam messages",
    technologies: ["Python", "Sci-kit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "#",
  },
  {
    id: "07",
    category: "Web Development",
    title: "Expense Tracking Application",
    description:
      "This Application is a comprehensive financial management tool designed to help users effortlessly track their expenses and income. Built using the MERN stack, it offers an intuitive and visually pleasing experience for managing personal finances.",
    technologies: ["ReactJs", "HTML & CSS", "Node.js", "MongoDB",],
    siteUrl: "https://github.com/SabaaN/Expense-Tracker",
  },
  {
    id: "08",
    category: "Machine Learning",
    title: "Audio Classifier for Birds",
    description:
      "This project aims to develop a machine learning model that can accurately identify spam messages. The model is trained using labeled data, enabling it to learn patterns and features indicative of spam messages",
    technologies: ["Python", "Sci-kit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "#",
  },
  {
    id: "09",
    category: "Machine Learning",
    title: "H-pylori Detection",
    description:
      "This project aims to develop a machine learning model that can accurately identify spam messages. The model is trained using labeled data, enabling it to learn patterns and features indicative of spam messages",
    technologies: ["Python", "Sci-kit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "#",
  },
  {
    id: "10",
    category: "Machine Learning",
    title: "Documents Chat Bot",
    description:
      "This project aims to develop a machine learning model that can accurately identify spam messages. The model is trained using labeled data, enabling it to learn patterns and features indicative of spam messages",
    technologies: ["Python", "Sci-kit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "#",
  },
  {
    id: "11",
    category: "Web Development",
    title: "Gym Workout App",
    description:
      "A comprehensive platform designed to assist users in their fitness journey. It offers a range of features, includingworkout plans,  recommendations, and information about different exercises.",
    technologies: ["ReactJs", "MaterialUI", "RapidAPI"],
    siteUrl: "https://github.com/SabaaN/Gym-web-app",
  },
  {
    id: "12",
    category: "Machine Learning",
    title: "Computer Vision Projects with OpenCV",
    description:
      "This project aims to develop a machine learning model that can accurately identify spam messages. The model is trained using labeled data, enabling it to learn patterns and features indicative of spam messages",
    technologies: ["Python", "Sci-kit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "#",
  },
  {
    id: "13",
    category: "Machine Learning",
    title: "Movie Recommender Application",
    description:
      "System is designed to help users discover new movies based on their interests and preferences. By analyzing the content and data of movies, the system provides personalized recommendations by identifying similar movies.",
    technologies: ["Python", "Sci-kit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "https://github.com/SabaaN/Movie-Recommendation-System",
  },
  {
    id: "14",
    category: "Machine Learning",
    title: "Laptop Price Predictor",
    description:
      "The application is used for predicting laptop prices based on various features. By leveraging machine learning algorithms, this project aims to provide accurate price estimates for laptops, assisting users in making informed purchasing decisions.",
    technologies: ["Python", "Sci-kit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "https://github.com/SabaaN/Laptop-price-predictor",
  },
  {
    id: "15",
    category: "Machine Learning",
    title: "Spam Message Detector",
    description:
      "This project aims to develop a machine learning model that can accurately identify spam messages. The model is trained using labeled data, enabling it to learn patterns and features indicative of spam messages",
    technologies: ["Python", "Sci-kit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "#",
  },
  {
    id: "16",
    category: "Machine Learning",
    title: "Virtual Assistant",
    description:
      "This project aims to develop a machine learning model that can accurately identify spam messages. The model is trained using labeled data, enabling it to learn patterns and features indicative of spam messages",
    technologies: ["Python", "Sci-kit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "#",
  },
  
];

export default portfolios;
