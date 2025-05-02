const portfolios = [
  {
    id: "01",
    category: "Machine Learning",
    title: "GenreSense",
    description:
      "Developed a machine learning model to classify music genres from audio files using features like MFCCs, spectral contrast, and tempo. Trained on the GTZAN dataset, the model achieved high accuracy using neural networks (CNNs and RCNNs). React for front-end",
    technologies: ["Python", "TensorFlow/Keras", "Librosa", "Scikitlearn", "NumPy"],
    siteUrl: "#",
    type: "Music Genre Classfication"
  },
  {
    id: "02",
    category: "Web Development",
    title: "CVForge",
    description:
      "Developed a responsive web application that generates professional resumes from user input. Users fill a form, view the resume in real time and the app formats and exports a clean resume in PDF format.",
    technologies: ["React.js", "Node.js", "HTML/CSS", "jsPDF"],
    siteUrl: "#",
    type: "Resume Maker"
  },
  {
    id: "03",
    category: "Machine Learning",
    title: "ImageStory",
    description:
      "Implemented a deep learning model to generate natural language captions for images. Combined CNNs for image feature extraction with LSTMs for sequence generation.",
    technologies: ["Python", "TensorFlow/Keras", "CNN", "LSTM"],
    siteUrl: "#",
    type: "Image Caption Generator"
  }, 
  {
    id: "04",
    category: "Machine Learning",
    title: "ColorRevive",
    description:
      "Developed an AI-based tool to automatically colorize black-and-white images using deep CNN architecture. The model was trained on historical images to produce realistic colorization. Used  Encoder-decoder architectures and loss functions like MSE or perceptual loss",
    technologies: ["Python", "TensorFlow/Keras", "OpenCV", "Matplotlib", "NumPy"],
    siteUrl: "#",
    type: "Image Colorizer"
  },
  {
    id: "05",
    category: "Blockchain",
    title: "FundChain",
    description:
      "A decentralized crowdfunding platform where users can create campaigns and receive funds in cryptocurrency. Smart contracts ensure transparency and automatic fund release.",
    technologies: ["Solidity", "Web3.js", "React.js", "Hardhat"],
    siteUrl: "#",
    type: "Crowdfunding DApp"
  },
  {
    id: "06",
    category: "Machine Learning",
    title: "NewsFlash AI",
    description:
      " An NLP-based model that generates news headlines from input text using transformer architectures. Used techniques including tokenization, padding, and embedding layers. Implemented encoder-decoder architecture using LSTMs.",
    technologies: ["Python", "Scikit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "#",
    type: "News Headline Generation"
  },
  {
    id: "07",
    category: "Web Development",
    title: "BudgetBuddy",
    description:
      "This Application is a comprehensive financial management tool designed to help users effortlessly track their expenses and income. Built using the MERN stack, it offers an intuitive and visually pleasing experience for managing personal finances.",
    technologies: ["ReactJs", "HTML & CSS", "Node.js", "MongoDB",],
    siteUrl: "https://github.com/SabaaN/Expense-Tracker",
    type: "Expense Tracking Application"
  },
  {
    id: "08",
    category: "Machine Learning",
    title: "ChirpDetect",
    description:
      "Trained a CNN model to identify bird species from audio recordings using spectrogram analysis. Achieved high accuracy on a custom dataset of capuchin bird sounds.",
    technologies: ["Python", "Librosa", "TensorFlow/Keras"],
    siteUrl: "#",
    type: "Birds Audio Classification"
  },
  {
    id: "09",
    category: "Machine Learning",
    title: "GastroAI",
    description:
      "A medical AI model to detect H. pylori bacteria in endoscopic images using deep learning. Assisted in early diagnosis with high precision. Used pre-trained Models (ResNet50 and MobileNet with hyperparameter tuning for higher accuracy). Front-end built on react and FAST API",
    technologies: ["Python", "TensorFlow/Keras", "FAST API", "React"],
    siteUrl: "#",
    type: " H-pylori Detection Deep Learning"
  },
  {
    id: "10",
    category: "Machine Learning",
    title: "PDFPal",
    description:
      "An AI-powered chatbot that answers queries by analyzing uploaded documents using NLP techniques. Supports PDF, DOCX, and text files. Front-end built with python GUI.",
    technologies: ["Python", "LangChain", "HuggingFace LLM", "FAISS"],
    siteUrl: "#",
    type: "Documents Chat Bot"
  },
  {
    id: "11",
    category: "Web Development",
    title: "FlexFlow",
    description:
      "A comprehensive platform designed to assist users in their fitness journey. It offers a range of features, includingworkout plans,  recommendations, and information about different exercises.",
    technologies: ["ReactJs", "MaterialUI", "RapidAPI"],
    siteUrl: "https://github.com/SabaaN/Gym-web-app",
    type: "Gym Exercise/workout Website"
  },
  {
    id: "12",
    category: "other",
    title: "CV Labs",
    description:
      "Implemented various CV projects like virtual mouse, virtual painter, virtual speaker tracker, using OpenCV.",
    technologies: ["Python", "OpenCV", "NumPy"],
    siteUrl: "#",
    type: "Computer Vision Projects with OpenCV"
  },
  {
    id: "13",
    category: "Machine Learning",
    title: "CineMatch",
    description:
      "System is designed to help users discover new movies based on their interests and preferences. By analyzing the content and data of movies, the system provides personalized recommendations by identifying similar movies.",
    technologies: ["Python", "Scikit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "https://github.com/SabaaN/Movie-Recommendation-System",
    type: "Movie Recommender Application"
  },
  {
    id: "14",
    category: "other",
    title: "PyAssistant",
    description:
      "A voice-controlled virtual assistant that performs tasks like web searches, reminders, and system commands.",
    technologies: ["Python", "PyAudio"],
    siteUrl: "#",
    type: "Desktop Virtual Assistant"
  },
  {
    id: "15",
    category: "Machine Learning",
    title: "SpamShield",
    description:
      "This project aims to develop a machine learning model that can accurately identify spam messages. The model is trained using labeled data, enabling it to learn patterns and features indicative of spam messages",
    technologies: ["Python", "Scikit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "#",
    type: "Spam Message Detector"
  },

  {
    id: "16",
    category: "Machine Learning",
    title: "Laptop PricePulse",
    description:
      "The application is used for predicting laptop prices based on various features. By leveraging machine learning algorithms, this project aims to provide accurate price estimates for laptops, assisting users in making informed purchasing decisions.",
    technologies: ["Python", "Scikit learn", "Numpy", "Pandas", "Streamlit"],
    siteUrl: "https://github.com/SabaaN/Laptop-price-predictor",
    type: "Laptop Price Predictor"
  },
  
];

export default portfolios;
