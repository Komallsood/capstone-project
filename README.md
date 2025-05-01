# 🎓 Smart Module Dashboard (An interactive classroom learning)

A modern, full-stack educational platform built with Next.js 15, featuring role-based access control, course management, and student progress tracking.

![Next.js](https://img.shields.io/badge/next.js-15.1.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/react-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5.0.0-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/prisma-6.6.0-blue?style=for-the-badge&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/postgresql-16.0-blue?style=for-the-badge&logo=postgresql)

## ✨ Features

### 🎯 Core Features
- **Role-Based Access Control**
  - Admin dashboard for system management
  - Teacher portal for course creation and management
  - Student dashboard for learning and progress tracking

- **Course Management**
  - Create and organize courses with modules
  - Upload and manage educational content
  - Track student progress and engagement

- **Student Experience**
  - Course enrollment system
  - Progress tracking and analytics
  - Interactive learning interface

### 🛠️ Technical Stack
- **Frontend**
  - Next.js 15 with App Router
  - React 19 with TypeScript
  - TailwindCSS for styling
  - Radix UI components
  - Framer Motion animations

- **Backend**
  - Next.js API routes
  - Prisma ORM for database operations
  - PostgreSQL database
  - NextAuth.js for authentication

- **DevOps**
  - Docker containerization
  - Multi-stage builds
  - Automated deployment

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Komallsood/capstone-project.git
   cd capstone-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file with:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   ```

4. **Initialize the database**
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

### Docker Deployment
```bash
docker build -t capstone-project .
docker run -p 3000:3000 \
  -e DATABASE_URL="your-database-url" \
  -e NEXTAUTH_URL="your-nextauth-url" \
  -e NEXTAUTH_SECRET="your-nextauth-secret" \
  capstone-project
```

## 📁 Project Structure
```
├── app/                    # Next.js App Router
│   ├── admin/             # Admin routes
│   ├── teacher/           # Teacher routes
│   ├── dashboard/         # Student dashboard
│   └── api/               # API routes
├── components/            # React components
│   ├── admin/            # Admin components
│   ├── teacher/          # Teacher components
│   └── ui/               # Shared UI components
├── prisma/               # Database schema
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🔐 Authentication
The platform uses NextAuth.js for authentication with the following roles:
- **Admin**: Full system access
- **Teacher**: Course management
- **Student**: Course access and learning

## 📚 API Documentation

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/session` - Get current session

### Admin
- `GET /api/admin/teachers` - List teachers
- `POST /api/admin/teachers` - Create teacher
- `PUT /api/admin/teachers/:id` - Update teacher
- `DELETE /api/admin/teachers/:id` - Delete teacher

### Courses
- `GET /api/courses` - List courses
- `POST /api/courses` - Create course
- `GET /api/courses/:id` - Get course details
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course

## 📸 Screenshots

### Authentication
| Login Page | Registration Page |
|------------|------------------|
| ![Login Page](./assets/login_page.png) | ![Registration Page](./assets/register_page.png) |

### Admin Dashboard
| Teacher Management | Course Overview |
|-------------------|----------------|
| ![Teacher Management](./assets/teacher_dashboard.png) | ![Course Overview](./assets/admin-courses.png) |

### Teacher Portal
| Course Creation | Content Management |
|----------------|-------------------|
| ![Course Creation](./assets/teacher-create-course.png) | ![Content Management](./assets/teacher-content.png) |

### Student Dashboard
| Course List | Learning Interface |
|------------|-------------------|
| ![Course List](./assets/student-courses.png) | ![Learning Interface](./assets/student-learning.png) |

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments
- Next.js team for the amazing framework
- Prisma team for the excellent ORM
- All contributors and maintainers
