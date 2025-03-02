# Capstone Project Documentation: Educational Module Platform

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Data Structures](#data-structures)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Setup Instructions](#setup-instructions)
- [Web App Demonstation](#web-app-demonstration)

## Introduction
This project is a web application designed as an educational module platform. It provides a structured way to organize and present learning content across different subjects. Users can browse subjects and access individual modules within those subjects.

## Features
- **Interactive Learning Modules**: Structured courses in IoT, Blockchain, ML, and Cloud Computing
- **Progress Tracking**: Real-time progress monitoring at course/module level (shown in `app/dashboard/page.tsx:7-53`)
- **Admin Dashboard**: Student management and analytics (shown in `app/admin/students/page.tsx:6-58`)
- **AI-Powered Assistant**: Integrated query system with GPT-2 integration (shown in `components/ai-agent.tsx:83-105`)
- **Role-Based Access**: Separate interfaces for students, teachers, and admins
- **Interactive UI Components**: Resizable panels, progress visualizations, and real-time updates
- **Student Analytics**: Track active users and course progress (shown in `components/admin/active-students.tsx:11-49`)

## Technologies Used
- **Frontend**: 
  - Next.js 15.1.6
  - React 19
  - Apollo Client
  - shadcn/ui + Tailwind CSS
  - Framer Motion
- **Backend**:
  - Node.js
  - Apollo Server
  - GraphQL
- **Database**: MongoDB
- **AI Integration**:
  - Hugging Face Transformers
  - Custom Flask API (Python)
- **State Management**:
  - Zustand
  - React Hook Form
- **Utilities**:
  - Zod for validation
  - Lucide React icons
  - React Hot Toast

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Komallsood/capstone-project.git
    ```
2. Install the required dependencies:
    ```bash
    npm i
    uv pip install -r requirements.txt
    ```
3. Set up the environment variables (see below).
4. Run the application:
    ```bash
    npm run dev
    python ai_model_server.py
    ```

## Environment Variables
- `PORT`: The port number for the application (default: 3000)

## Data Structures
- **Subjects**: Each subject has an `id` (e.g., "iot"), a `name` (e.g., "Internet of Things").
- **Modules**: Each module belongs to a subject and has an `id` (e.g., "iot-basics"), a `title` (e.g., "IoT Fundamentals"), and `content` (the learning material).


## API Endpoints (Tentative)
- `GET /api/login`: Returns a list of all subjects.
- `GET /api/subjects/:id/modules`: Returns a list of modules for a specific subject.
- `GET /api/modules/:id`: Returns the content for a specific module.
- (Add descriptions for all other endpoints, including request parameters, response format, etc.)

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these guidelines:
1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Open a pull request with a clear description of the changes.

## Setup Instructions
1. **Create and Activate a Virtual Environment**
    ```bash
    python -m venv venv
    source venv/bin/activate
    ```
2. **Install Required Python Packages**
    See the `requirements.txt` file available with the following content:
    ```plaintext
    Flask
    Flask-CORS
    transformers
    ```
    Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. **Download and Save the GPT-2 Model Locally**
    Create a script named `download_model.py`:
    ```python
    from transformers import GPT2LMHeadModel, GPT2Tokenizer

    model_name = "gpt2"
    model = GPT2LMHeadModel.from_pretrained(model_name)
    tokenizer = GPT2Tokenizer.from_pretrained(model_name)

    model.save_pretrained("./model")
    tokenizer.save_pretrained("./model")
    ```
    Run the script to download the model:
    ```bash
    python download_model.py
    ```
    ![GPT-2 Model Setup](assets/gpt2_download.png)

4. **Set Up the Flask Server**
    Create a script named `ai_model_server.py`:
    ```python
    from flask import Flask, request, jsonify
    from transformers import GPT2LMHeadModel, GPT2Tokenizer

    app = Flask(__name__)
    model = GPT2LMHeadModel.from_pretrained("./model")
    tokenizer = GPT2Tokenizer.from_pretrained("./model")

    @app.route('/generate', methods=['POST'])
    def generate():
        input_text = request.json.get('input_text')
        inputs = tokenizer.encode(input_text, return_tensors='pt')
        outputs = model.generate(inputs, max_length=50)
        generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
        return jsonify({'generated_text': generated_text})

    if __name__ == '__main__':
        app.run(port=5000)
    ```
    Run the Flask server:
    ```bash
    python ai_model_server.py
    ```
    ![Flask Server Running](assets/flask_server.png)

5. **Run the React Application**
    Ensure the React application is correctly configured to interact with the Flask server. Start the React application:
    ```bash
    npm start
    ```
    ![React Application Running](assets/react_app.png)


### Web App Demonstration

#### Login Page
![Login Page](assets/login_page.png)

#### Student Login
![Student Login](assets/student_login.png)

#### Module Dashboard
![Dashboard](assets/dashboard_page.png)

#### Enrolled Subjects Panel
![Module Content](assets/enrolled_subjects.png)

#### Troubleshoot chat window
![Troubleshoot](assets/troubleshoot.png)

### AI Agent query window
![AI Agent](assets/ai_agent_ui.png)
