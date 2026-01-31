# 📦 Complete Installation Guide

## 📋 Prerequisites

Before you start, make sure you have:

### 1. Node.js (v16 or higher)
```bash
node --version
```
Should show v16.x.x or higher. If not installed: https://nodejs.org/

### 2. npm (comes with Node.js)
```bash
npm --version
```
Should show 8.x.x or higher

### 3. MongoDB (v4.4 or higher)
```bash
mongod --version
```
If not installed: https://www.mongodb.com/try/download/community

---

## 🚀 Installation Steps

### Step 1: Extract the Project

Extract `spoiler-safe-reviews.zip` to your desired location.

```bash
cd spoiler-safe-reviews
```

---

### Step 2: Install Dependencies

**Method 1: One Command (Recommended)**
```bash
npm run install-all
```

**Method 2: Manual Install**
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

**Expected output:**
```
✅ Installed X packages
✅ No vulnerabilities found (or only minor warnings)
```

---

### Step 3: Start MongoDB

**IMPORTANT:** MongoDB must be running before starting the app!

**Windows:**
```bash
# Open a new terminal and run:
mongod
```

**macOS (with Homebrew):**
```bash
brew services start mongodb-community
# OR run in terminal:
mongod
```

**Linux:**
```bash
sudo systemctl start mongod
# OR run in terminal:
mongod
```

**Keep this terminal open!** MongoDB needs to stay running.

---

### Step 4: Start the Application

You have two options:

#### **Option A: Run Both Together**
```bash
npm run dev
```

You should see:
```
[0] 🚀 Server is running on port 5000
[0] ✅ MongoDB Connected Successfully
[1] Compiled successfully!
[1] webpack compiled successfully
```

Browser will auto-open at http://localhost:3000

---

#### **Option B: Run Separately (Recommended for Debugging)**

**Terminal 1 - Backend:**
```bash
npm start
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

---

## ✅ Verify Installation

### 1. Check Backend Health
Open: http://localhost:5000/api/health

Should return:
```json
{
  "status": "OK",
  "message": "Spoiler-Safe Reviews API is running",
  "mongodb": "Connected"
}
```

### 2. Check Frontend
Open: http://localhost:3000

You should see the Spoiler-Safe Reviews homepage!

### 3. Test Creating a Review
1. Click "Write Review"
2. Fill in all fields
3. Click "Post Review"
4. You should be redirected to the homepage with your review visible

---

## 🐛 Troubleshooting

### Error: "Cannot find module..."

**Solution:**
```bash
# Clean install
rm -rf node_modules package-lock.json
rm -rf client/node_modules client/package-lock.json
npm run install-all
```

---

### Error: "MongoDB connection failed"

**Possible causes:**

1. **MongoDB is not running**
   ```bash
   # Start MongoDB
   mongod
   ```

2. **Port 27017 is in use**
   ```bash
   # Check what's using port 27017
   # Windows:
   netstat -ano | findstr :27017
   
   # Mac/Linux:
   lsof -i :27017
   ```

3. **Wrong MongoDB URI**
   
   Check `.env` file:
   ```
   MONGODB_URI=mongodb://localhost:27017/spoiler-reviews
   ```

---

### Error: "Port 3000 already in use"

**Solution:**

Kill the process using port 3000:

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

Or change the port by creating `client/.env.local`:
```
PORT=3001
```

---

### Error: "Port 5000 already in use"

**Solution:**

Edit `.env` file in root:
```
PORT=5001
```

Then update `client/package.json` proxy:
```json
"proxy": "http://localhost:5001"
```

---

### Webpack Dev Server Errors

If you see webpack-related errors:

**Solution 1:** Use separate terminals
```bash
# Terminal 1
npm start

# Terminal 2
cd client
npm start
```

**Solution 2:** Clear cache
```bash
cd client
rm -rf node_modules/.cache
npm start
```

---

### npm WARN deprecated...

**These warnings are normal!** As long as the app runs, you're fine.

To hide them:
```bash
npm install --legacy-peer-deps
```

---

## 📁 Project Structure

```
spoiler-safe-reviews/
├── server/              # Backend (Express + MongoDB)
│   ├── models/         # Database schemas
│   ├── routes/         # API endpoints
│   ├── controllers/    # Business logic
│   └── server.js       # Entry point
├── client/             # Frontend (React)
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── pages/      # Pages
│   │   ├── context/    # State management
│   │   └── styles/     # CSS files
│   └── public/
├── package.json        # Root dependencies
└── .env               # Configuration
```

---

## 🎯 Next Steps

1. **Test the app** - Create a review and test the blur effect
2. **Read the docs** - Check out README.md for full documentation
3. **Customize** - Add your own features
4. **Deploy** - See DEPLOYMENT.md for hosting instructions

---

## 📞 Still Having Issues?

Check these files:
- **QUICK_FIX.md** - Common solutions
- **README.md** - Full documentation
- **GETTING_STARTED.md** - Usage guide

---

## ✨ You're All Set!

Your development environment is ready. Happy coding! 🚀

**Quick Reference:**
- Frontend: http://localhost:3000
- Backend: http://localhost:5000/api
- Health: http://localhost:5000/api/health
