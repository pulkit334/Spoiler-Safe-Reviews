# 🚀 Deployment Guide

## Hosting Options

### Free Hosting Solutions

1. **Frontend**: Vercel, Netlify, or GitHub Pages
2. **Backend**: Railway, Render, or Fly.io
3. **Database**: MongoDB Atlas (Free tier available)

---

## Option 1: Deploy to Railway (Easiest Full-Stack)

### Step 1: Prepare for Deployment

1. Create a GitHub repository and push your code
2. Sign up at [Railway.app](https://railway.app/)

### Step 2: Deploy Backend

1. Click "New Project" → "Deploy from GitHub repo"
2. Select your repository
3. Railway will auto-detect the Node.js app
4. Add environment variables:
   - `MONGODB_URI`: (from MongoDB Atlas)
   - `JWT_SECRET`: (generate a random string)
   - `NODE_ENV`: production
5. Deploy!

### Step 3: Deploy Frontend

1. Build your React app: `cd client && npm run build`
2. Deploy the `client/build` folder to Vercel or Netlify
3. Update API calls to point to your Railway backend URL

---

## Option 2: Deploy to Render

### Backend (Render)

1. Sign up at [Render.com](https://render.com/)
2. New → Web Service
3. Connect GitHub repository
4. Settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node
5. Add environment variables
6. Deploy!

### Frontend (Vercel)

1. Sign up at [Vercel.com](https://vercel.com/)
2. Import your GitHub repository
3. Framework Preset: Create React App
4. Root Directory: `client`
5. Environment Variables:
   - `REACT_APP_API_URL`: Your backend URL
6. Deploy!

---

## Option 3: MongoDB Atlas Setup (Database)

### Step 1: Create Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for free
3. Create a new cluster (M0 Free tier)
4. Choose a cloud provider and region

### Step 2: Configure Access

1. Database Access → Add New User
   - Username: admin
   - Password: (generate secure password)
   - Role: Read and write to any database

2. Network Access → Add IP Address
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Or add specific IP addresses

### Step 3: Get Connection String

1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your actual password
5. Replace `myFirstDatabase` with `spoiler-reviews`

Example:
```
mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/spoiler-reviews?retryWrites=true&w=majority
```

### Step 4: Update Environment Variables

Add this to your deployment platform's environment variables:
```
MONGODB_URI=mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/spoiler-reviews?retryWrites=true&w=majority
```

---

## Environment Variables Summary

### Backend (.env)
```
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000
JWT_SECRET=super_secret_random_string_change_this
NODE_ENV=production
```

### Frontend (if needed)
```
REACT_APP_API_URL=https://your-backend-url.com/api
```

---

## Update Client to Use Environment Variables

In `client/src/context/ReviewContext.js`, update axios calls:

```javascript
const API_URL = process.env.REACT_APP_API_URL || '/api';

// Then use it in requests
const response = await axios.get(`${API_URL}/reviews`);
```

---

## Testing Your Deployment

1. **Test Backend**:
   ```
   GET https://your-backend-url.com/api/health
   ```
   Should return: `{ status: 'OK', message: '...', mongodb: 'Connected' }`

2. **Test Frontend**:
   - Visit your frontend URL
   - Create a review
   - Verify it appears in the list

3. **Test Database**:
   - Check MongoDB Atlas → Collections
   - Verify reviews are being saved

---

## Common Deployment Issues

### Issue: CORS Errors
**Solution**: Update CORS in `server/server.js`:
```javascript
app.use(cors({
  origin: ['https://your-frontend-url.com'],
  credentials: true
}));
```

### Issue: Environment Variables Not Working
**Solution**: 
- Restart the deployment after adding env vars
- Check spelling and format
- No spaces around `=` in env vars

### Issue: MongoDB Connection Timeout
**Solution**:
- Verify MongoDB Atlas IP whitelist
- Check connection string format
- Ensure password doesn't contain special characters (or URL encode them)

---

## Performance Optimization

### Backend
```javascript
// Add compression
const compression = require('compression');
app.use(compression());

// Add rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use('/api/', limiter);
```

### Frontend
- The production build is already optimized
- Consider adding lazy loading for routes
- Use React.memo for expensive components

---

## Monitoring

### Free Monitoring Tools
- **Railway/Render**: Built-in logs and metrics
- **MongoDB Atlas**: Query performance and usage stats
- **Vercel**: Analytics and performance insights

---

## SSL/HTTPS

All mentioned platforms (Vercel, Railway, Render, Netlify) provide:
- ✅ Free SSL certificates
- ✅ Automatic HTTPS
- ✅ Custom domain support

---

## Post-Deployment Checklist

- [ ] Backend is accessible via HTTPS
- [ ] Frontend can communicate with backend
- [ ] MongoDB connection is stable
- [ ] Can create reviews successfully
- [ ] Can view all reviews
- [ ] Spoiler reveal/hide works
- [ ] Like functionality works
- [ ] Search and filter work
- [ ] Responsive on mobile
- [ ] No console errors

---

## Custom Domain (Optional)

### For Vercel:
1. Go to your project settings
2. Add custom domain
3. Update DNS records with your domain provider

### For Railway:
1. Project Settings → Domains
2. Add custom domain
3. Update DNS with CNAME record

---

## Cost Estimate

With free tiers:
- **MongoDB Atlas**: Free (512 MB storage)
- **Railway**: Free tier or $5/month
- **Vercel**: Free for personal projects
- **Total**: $0-5/month

---

## Scaling Considerations

If your app grows:
1. Upgrade MongoDB Atlas tier
2. Add Redis for caching
3. Implement CDN for static assets
4. Add database indexes for better performance
5. Consider load balancing for backend

---

**Your app is now live! 🎉**

Share your deployed link:
- Frontend: https://your-app.vercel.app
- Backend: https://your-api.railway.app
- GitHub: https://github.com/yourusername/spoiler-safe-reviews

Good luck! 🚀
