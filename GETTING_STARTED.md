# 🚀 Getting Started with Spoiler-Safe Reviews

Welcome! This guide will help you get the project up and running in minutes.

## 📦 What's Included

Your project folder contains:

```
spoiler-safe-reviews/
├── 📄 README.md              - Complete project documentation
├── 📄 SETUP_GUIDE.md         - Quick setup instructions
├── 📄 DEPLOYMENT.md          - How to deploy to production
├── 📄 PROJECT_SHOWCASE.md    - What makes this project unique
├── 📄 GETTING_STARTED.md     - This file
├── 📄 sample-data.js         - Sample reviews for testing
├── 🔧 setup.sh               - Automated setup script (Mac/Linux)
├── 📦 package.json           - Root dependencies & scripts
├── 🔒 .env                   - Environment variables
├── 🚫 .gitignore             - Git ignore rules
│
├── 📁 client/                - React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      - Reusable UI components
│   │   ├── pages/           - Page components
│   │   ├── context/         - State management
│   │   └── styles/          - CSS files
│   └── package.json
│
└── 📁 server/                - Express Backend
    ├── models/              - Database schemas
    ├── routes/              - API routes
    ├── controllers/         - Business logic
    ├── middleware/          - Auth & validation
    └── server.js            - Server entry point
```

---

## ⚡ Quick Start (3 Steps)

### Step 1: Install Dependencies

Open terminal in the project folder and run:

```bash
npm run install-all
```

This will install all dependencies for both server and client.

**Or use the automated script (Mac/Linux):**
```bash
./setup.sh
```

---

### Step 2: Start MongoDB

**Before running the app, you MUST start MongoDB!**

Open a **separate terminal** and run:

**Windows:**
```bash
mongod
```

**Mac (with Homebrew):**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

**Keep this terminal open!** MongoDB needs to run in the background.

---

### Step 3: Run the Application

In your **main terminal**, run:

```bash
npm run dev
```

This starts both the backend (port 5000) and frontend (port 3000).

**You should see:**
```
🚀 Server is running on port 5000
📍 API: http://localhost:5000/api
✅ MongoDB Connected Successfully

Compiled successfully!
```

---

## 🌐 Access the Application

1. **Frontend**: Open http://localhost:3000 in your browser
2. **Backend API**: http://localhost:5000/api
3. **Health Check**: http://localhost:5000/api/health

---

## 🧪 Test the Application

### Create Your First Review

1. Click **"Write Review"** in the navigation
2. Fill in the form:
   - Movie: "The Sixth Sense"
   - Your Name: "Your Name"
   - Rating: Select 5 stars
   - Safe Summary: "Amazing thriller with great performances"
   - Spoiler Content: "Bruce Willis is dead the whole time"
   - Genre: "Thriller"
3. Click **"Post Review"**
4. You'll be redirected to the home page
5. See your review with the **blurred spoiler section**
6. Click **"Reveal Spoiler"** to see the blur effect! ✨

### Try Other Features

- **Search**: Type movie names or reviewer names in the search box
- **Filter**: Select different genres from the dropdown
- **Like**: Click the heart icon on any review
- **Delete**: Click the trash icon to remove a review

---

## 📚 Documentation Files

### For Setup & Usage
- **README.md** - Full project documentation with detailed explanations
- **SETUP_GUIDE.md** - Quick reference for common tasks
- **sample-data.js** - Pre-written reviews you can insert for testing

### For Development
- **PROJECT_SHOWCASE.md** - Technical highlights and unique features
- **DEPLOYMENT.md** - How to deploy to production (Vercel, Railway, etc.)

### For Hackathon Judges
Review **PROJECT_SHOWCASE.md** to see:
- What makes this project unique
- Technical innovations
- Architecture decisions
- Code quality highlights

---

## 🛠️ Available Commands

```bash
# Development
npm run dev              # Run both frontend & backend
npm run server          # Run backend only (with auto-reload)
npm run client          # Run frontend only

# Production
npm start               # Start production server

# Installation
npm run install-all     # Install all dependencies
npm install             # Install server dependencies
cd client && npm install # Install client dependencies

# Build
npm run build           # Build frontend for production
```

---

## ❓ Common Issues & Solutions

### "Cannot connect to MongoDB"

**Problem**: MongoDB is not running  
**Solution**: 
```bash
# Open a new terminal and run:
mongod

# Keep this terminal open while using the app
```

### "Port 3000 already in use"

**Problem**: Another app is using port 3000  
**Solution**: Stop the other app or kill the process:

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

### "Port 5000 already in use"

**Problem**: Another app is using port 5000  
**Solution**: Edit `.env` file and change PORT to 5001:
```
PORT=5001
```

### "Module not found"

**Problem**: Dependencies not installed  
**Solution**: Run `npm run install-all` again

### MongoDB connection string error

**Problem**: Wrong MongoDB URI  
**Solution**: Check `.env` file, should be:
```
MONGODB_URI=mongodb://localhost:27017/spoiler-reviews
```

---

## 🎯 Project Features

### ✨ User Features
- Create movie reviews with separate spoiler sections
- Smooth blur effect to hide spoilers
- Click to reveal/hide spoilers
- Like reviews
- Search by movie or reviewer
- Filter by genre
- Star rating system
- Responsive design (works on all devices)

### 🔧 Technical Features
- MERN Stack (MongoDB, Express, React, Node.js)
- Context API for state management
- RESTful API design
- JWT authentication ready
- Form validation
- Error handling
- Beautiful UI animations
- Clean code architecture

---

## 📖 Learning Resources

If you're new to any of these technologies:

- **React**: https://react.dev/learn
- **Node.js**: https://nodejs.org/en/docs/
- **Express**: https://expressjs.com/
- **MongoDB**: https://www.mongodb.com/docs/manual/
- **Mongoose**: https://mongoosejs.com/docs/

---

## 🎨 Customize the App

### Change Colors

Edit `client/src/styles/index.css`:
```css
:root {
  --primary-color: #6366f1;  /* Change this */
  --secondary-color: #ec4899; /* And this */
  /* ... */
}
```

### Add New Features

1. **Frontend**: Add components in `client/src/components/`
2. **Backend**: Add routes in `server/routes/`
3. **Database**: Modify schemas in `server/models/`

---

## 🚀 Deploy to Production

Ready to deploy? Check **DEPLOYMENT.md** for:
- Free hosting options (Vercel, Railway, Render)
- MongoDB Atlas setup (free cloud database)
- Environment variable configuration
- Step-by-step deployment guides

---

## 🤝 Contributing

This is a hackathon project, but feel free to:
- Add new features
- Fix bugs
- Improve documentation
- Enhance the UI

---

## 📞 Support

Stuck? Check:
1. **README.md** for detailed documentation
2. **SETUP_GUIDE.md** for quick fixes
3. Console errors in browser (F12)
4. Terminal logs for server errors

---

## 🎉 You're Ready!

You now have:
- ✅ A fully functional MERN application
- ✅ Beautiful, responsive UI
- ✅ Unique spoiler-blur feature
- ✅ Production-ready code
- ✅ Complete documentation

**Good luck with your hackathon! 🚀**

---

## 📝 Checklist

Before submitting:
- [ ] Tested create review functionality
- [ ] Verified blur effect works
- [ ] Tested on mobile (resize browser)
- [ ] Checked for console errors
- [ ] Read PROJECT_SHOWCASE.md
- [ ] Pushed code to GitHub
- [ ] (Optional) Deployed to production
- [ ] Prepared demo for judges

---

Made with ❤️ for the Hackathon Selection Project
