# Niroshan's Portfolio

This repository contains the source code for personal portfolio website, showcasing my skills, projects, and experience. The project consists of a backend built with Spring Boot and MongoDB, and a frontend developed using React, Vite, TypeScript, and Tailwind CSS.

## Features

- **Dynamic Portfolio**: Highlights personal information, skills, and projects.
- **Interactive UI**: Built with React and styled using Tailwind CSS for a responsive, modern design.
- **Contact Form**: Allows users to send messages directly, integrated with Gmail SMTP for email communication.
- **Scalable Architecture**: Backend powered by Spring Boot and MongoDB for efficient data management.

## Installation Guide

Follow the instructions below to set up and run the project locally.

### Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Niroshan2812/NiroshanPortfolio.git
   cd NiroshanPortfolio/backend
   ```

2. **Configure MongoDB**:

   - Ensure MongoDB is installed and running locally or on a server.
   - Update the `application.properties` file with your MongoDB connection details:

     ```properties
     spring.data.mongodb.uri=mongodb://localhost:27017/your-database(Use MongoDB Compass)
     spring.data.mongodb.database=DatabaseName
    
     ```

3. **Configure Gmail SMTP**:

   - In the `application.properties` file, add your Gmail SMTP credentials:

     ```properties
     spring.mail.host=smtp.gmail.com
     spring.mail.port=587
     spring.mail.username=your-email@gmail.com
     spring.mail.password=your-email-password
     spring.mail.properties.mail.smtp.auth=true
     spring.mail.properties.mail.smtp.starttls.enable=true
     ```

   - Ensure "Allow less secure apps" is enabled in your Gmail account settings.

4. **Build and run the backend**:

   ```bash
   ./mvnw clean install
   ./mvnw spring-boot:run
   ```

   The backend should now be running on `http://localhost:8080`.

### Frontend Setup

1. **Navigate to the frontend directory**:

   ```bash
   cd ../portfolio
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   - Create a `.env` file in the `portfolio` directory with the following content:

     ```env
     VITE_BACKEND_URL=http://localhost:8080
     ```

4. **Run the frontend**:

   ```bash
   npm run dev
   ```

   The frontend should now be running on `http://localhost:3000`.

## Usage

- Open your browser and navigate to `http://localhost:3000` to access the portfolio.
- Explore various sections like About, Projects, and Contact.
- Use the contact form to send messages; they will be delivered to the configured email address.

## Technologies Used

### Backend:

- Spring Boot
- MongoDB
- Gmail SMTP

### Frontend:

- React
- Vite
- TypeScript
- Tailwind CSS

## API Documentation

The backend exposes the following endpoints:

- **Contact Form**: Handles message submissions from the frontend.
  - **Endpoint**: `POST /api/contact`
  - **Payload**:

    ```json
      Example Format
      {
    "name": "Name of project",
    "shortDescription": "Short Description",
    "description": " Detail Descriptiom",
    "githubLink": "https://github.com/Your repo",
    "imageUrls": [
    "SS for project"
    ],
    "technology": [
    "React Native",
    "JavaScript"
    ],
    "technologyimg": [
    "Used Technology (PNG required )"
    ]
    }


## Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes and push the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please reach out:

- **Email**: [your-email@gmail.com](mailto:your-email@gmail.com)
- **GitHub**: [Niroshan2812](https://github.com/Niroshan2812)

---

Thank you for visiting my portfolio repository! Your feedback and suggestions are highly appreciated.



Preview,,
![image](https://github.com/user-attachments/assets/1dd655e7-235d-479f-a71f-f3add473babf)
