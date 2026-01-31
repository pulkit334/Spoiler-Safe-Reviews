# 🚀 Quick Setup Guide

## One-Command Setup (After Prerequisites)

```bash
# 1. Navigate to project
cd spoiler-safe-reviews

# 2. Install everything
npm run install-all

# 3. Start MongoDB (in a separate terminal)
mongod

# 4. Run the app
npm run dev
```

## That's it! 🎉

- Frontend: http://localhost:3000
- Backend: http://localhost:5000/api

---

## Prerequisites Check

Before running the one-command setup, ensure you have:

### ✅ Node.js
```bash
node --version  # Should be v14 or higher
```
If not installed: https://nodejs.org/

### ✅ MongoDB
```bash
mongod --version  # Should be 4.4 or higher
```
If not installed: https://www.mongodb.com/try/download/community

---

## Common Issues & Solutions

### Issue: "Cannot connect to MongoDB"
**Solution:** 
```bash
# Start MongoDB in a separate terminal
mongod
```

### Issue: "Port 3000 already in use"
**Solution:**
```bash
# Kill the process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Issue: "Port 5000 already in use"
**Solution:**
Edit `.env` file and change:
```
PORT=5001
```

---

## Project Structure at a Glance

```
spoiler-safe-reviews/
├── client/              # React Frontend (Port 3000)
├── server/              # Express Backend (Port 5000)
├── package.json         # Root dependencies
└── README.md            # Full documentation
```

---

## Testing the Features

1. **Visit** http://localhost:3000
2. **Click** "Write Review" in navigation
3. **Fill** the review form with:
   - Movie: "The Sixth Sense"
   - Your Name: "John Doe"
   - Rating: 5 stars
   - Safe Summary: "Amazing thriller with great acting"
   - Spoiler: "Bruce Willis is dead the whole time"
4. **Click** "Post Review"
5. **See** your review on homepage
6. **Click** "Reveal Spoiler" to see the blur effect!

---

## What Makes This Project Stand Out?

✨ **Smooth blur animation** - Not just a toggle, but a beautiful transition  
🎯 **Clean separation** - Safe content vs Spoiler content  
🎨 **Modern UI** - Dark theme with gradient accents  
📱 **Fully responsive** - Works on all devices  
⚡ **Fast & efficient** - Context API for state management  
🔒 **Scalable** - Authentication ready for future features  

---

## Next Steps

- [ ] Add more reviews
- [ ] Try the search functionality
- [ ] Test the like feature
- [ ] Filter by genre
- [ ] Deploy to production (see README.md for deployment guide)

---

**Need help?** Check the full README.md for detailed information!

Happy coding! 🎬
