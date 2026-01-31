# 🎬 Spoiler-Safe Reviews

A full-stack MERN application that allows users to share movie reviews while keeping spoilers hidden with a smooth blur effect.

## ✨ Features

- **Two-Part Review System**: Separate "Safe Summary" and "Spoiler Content" sections
- **Smooth Blur Effect**: Beautiful CSS blur transition when revealing spoilers
- **Interactive UI**: Click to reveal/hide spoilers with smooth animations
- **Star Rating System**: 5-star rating with interactive selection
- **Search & Filter**: Find reviews by movie title, reviewer, or genre
- **Like System**: Show appreciation for helpful reviews
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern Dark Theme**: Eye-friendly dark mode with gradient accents
- **Real-time Updates**: Instant feedback on all actions

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication (prepared for future use)
- **bcryptjs** - Password hashing

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Icons** - Icon library
- **Context API** - State management

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** (comes with Node.js)

## 🚀 Quick Start

### 1. Clone or Download the Project

```bash
# If you have the folder, navigate to it
cd spoiler-safe-reviews
```

### 2. Install Dependencies

Run this command in the root directory (this will install both server and client dependencies):

```bash
npm run install-all
```

Or install separately:

```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

### 3. Start MongoDB

Make sure MongoDB is running on your system:

**Windows:**
```bash
mongod
```

**macOS (with Homebrew):**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

### 4. Configure Environment Variables (Optional)

The project comes with default settings, but you can customize them:

Create a `.env` file in the root directory (already included):
```
MONGODB_URI=mongodb://localhost:27017/spoiler-reviews
PORT=5000
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

### 5. Start the Application

**Option 1: Run both server and client together (Recommended)**
```bash
npm run dev
```

**Option 2: Run separately**

Terminal 1 (Server):
```bash
npm start
```

Terminal 2 (Client):
```bash
npm run client
```

### 6. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/api/health

## 📁 Project Structure

```
spoiler-safe-reviews/
├── client/                    # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── Header.js
│   │   │   └── ReviewCard.js
│   │   ├── pages/            # Page components
│   │   │   ├── Home.js
│   │   │   └── CreateReview.js
│   │   ├── context/          # State management
│   │   │   └── ReviewContext.js
│   │   ├── styles/           # CSS files
│   │   │   ├── index.css
│   │   │   ├── App.css
│   │   │   ├── Header.css
│   │   │   ├── ReviewCard.css
│   │   │   ├── Home.css
│   │   │   └── CreateReview.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                    # Express backend
│   ├── models/               # Mongoose models
│   │   ├── Review.js
│   │   └── User.js
│   ├── routes/               # API routes
│   │   ├── reviewRoutes.js
│   │   └── userRoutes.js
│   ├── controllers/          # Route controllers
│   │   ├── reviewController.js
│   │   └── userController.js
│   ├── middleware/           # Custom middleware
│   │   └── auth.js
│   └── server.js             # Server entry point
├── .env                       # Environment variables
├── .gitignore
├── package.json              # Root package.json
└── README.md
```

## 🎯 Key Implementation Details

### Database Design

The `Review` model stores both types of content separately:

```javascript
{
  movieTitle: String,
  userName: String,
  rating: Number (1-5),
  safeSummary: String,      // Visible to everyone
  spoilerContent: String,    // Hidden by default
  genre: String,
  likes: Number,
  createdAt: Date
}
```

### Blur Effect Implementation

The spoiler blur is achieved using CSS filters with smooth transitions:

```css
.spoiler-content.blurred {
  filter: blur(12px);
  transform: scale(0.98);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.spoiler-content.revealed {
  filter: blur(0);
  transform: scale(1);
}
```

### State Management

React Context API manages global state for reviews, eliminating prop drilling and providing clean data flow.

## 🔌 API Endpoints

### Reviews
- `GET /api/reviews` - Get all reviews
- `GET /api/reviews/:id` - Get single review
- `POST /api/reviews` - Create new review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review
- `POST /api/reviews/:id/like` - Like a review

### Users (Authentication Ready)
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (requires auth)

## 🎨 Design Highlights

- **Modern Dark Theme**: Eye-friendly color scheme with gradient accents
- **Smooth Animations**: All interactions have polished transitions
- **Responsive Grid**: Adapts from desktop to mobile seamlessly
- **Interactive Elements**: Hover effects, star ratings, and animated icons
- **Accessibility**: Proper semantic HTML and ARIA labels

## 🧪 Testing the Application

1. **Create a Review**: Click "Write Review" and fill out the form
2. **View Reviews**: See all reviews on the homepage
3. **Reveal Spoiler**: Click the "Reveal Spoiler" button on any review
4. **Like Reviews**: Click the heart icon to like a review
5. **Search**: Use the search box to find specific movies or reviewers
6. **Filter**: Select a genre to filter reviews

## 🚢 Deployment

### Backend (Heroku/Railway)

1. Create account on Heroku or Railway
2. Set environment variables
3. Deploy using Git

### Frontend (Vercel/Netlify)

1. Build the client: `cd client && npm run build`
2. Deploy the build folder

### Database (MongoDB Atlas)

1. Create free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Update `MONGODB_URI` in `.env`

## 📝 Available Scripts

```bash
npm start              # Start backend server
npm run server         # Start backend with nodemon
npm run client         # Start React frontend
npm run dev           # Run both concurrently
npm run install-all   # Install all dependencies
npm run build         # Build frontend for production
```

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running: `mongod`
- Check if port 27017 is available
- Verify MongoDB installation

**Port Already in Use:**
- Change PORT in `.env` file
- Kill process using the port

**Cannot GET /api/reviews:**
- Make sure server is running
- Check if MongoDB is connected
- Verify backend URL in client

## 🎁 Unique Features That Stand Out

1. **Smooth Blur Animation**: Not just a toggle - smooth cubic-bezier transition
2. **Dual-State Spoiler Button**: Changes color and icon when revealed
3. **Pulse Warning Badge**: Animated warning over blurred content
4. **Interactive Star Rating**: With hover effects and smooth scaling
5. **Heartbeat Like Animation**: Fun animation on like button hover
6. **Gradient Branding**: Modern gradient effects throughout
7. **Responsive Everything**: From desktop to mobile, everything adapts
8. **Clean Code Architecture**: Well-organized, commented, and maintainable

## 👨‍💻 Development Notes

This project demonstrates:
- Clean separation of concerns
- RESTful API design
- Responsive CSS without frameworks
- React best practices (hooks, context)
- MongoDB schema design
- Error handling and validation
- Smooth UI/UX transitions

## 📄 License

MIT License - Feel free to use this project for learning or your portfolio!

## 🙏 Acknowledgments

Built as a hackathon selection project showcasing full-stack development skills with attention to UI/UX details and clean code practices.

---

**Good luck with your hackathon! 🚀**
