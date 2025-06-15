# XFirebase  
Welcome to the **XFirebase** project! A modern social media-like application built using **React**, **Firebase**, and **AWS S3**. Users can post tweets with images, like others' posts, and manage their profiles. The app supports both **Google** and **Email/Password** authentication with email verification and real-time Firestore integration.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Bullseye.png" alt="Bullseye" width="25" height="25" /> Project Overview  
XFirebase enables users to:
- Sign up or log in using **Google** or **Email/Password**
- Add profile photos and usernames during signup
- Post tweets with optional images (max 2MB)
- Edit or delete their own tweets
- Like tweets from other users
- View all tweets in real-time
- Store tweet images and avatars on **AWS S3**
- Navigate with a fully responsive interface

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" /> Features   
- Firebase Authentication (Google & Email/Password)  
- Email verification for new users  
- Realtime Firestore Database integration  
- Secure image upload with **AWS S3** (2MB limit)  
- Tweet CRUD: Create, Read, Update, Delete  
- Like functionality  
- Profile management with avatars  
- Responsive UI with **Tailwind CSS**  
- Toast notifications for better UX  

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hammer%20and%20Wrench.png" alt="Hammer and Wrench" width="25" height="25" /> Technologies Used 
- **React** (UI Development)  
- **Firebase Auth & Firestore** (Backend)  
- **AWS S3** (`@aws-sdk/client-s3`) for image storage  
- **React Router v7** (Routing)  
- **Tailwind CSS** (Styling)  
- **Moment.js** (Time Formatting)  
- **React Icons** (UI Enhancements)  
- **React Toastify** (Notifications)  
- **uuid** (Unique IDs)  
- **React Responsive** (Mobile Adaptability)

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Desktop%20Computer.png" alt="Desktop Computer" width="25" height="25" /> Demo  
You can view a demo of the project by visiting the following link:  
[XFirebase Demo](https://ozanxfirebase.netlify.app/)

## Preview
![foto1](https://github.com/user-attachments/assets/1ce431fe-55a1-47e2-b431-4091b01bdc22)
![foto2](https://github.com/user-attachments/assets/5ef39e3d-d40d-4c1d-9a48-c82c390af0d1)


## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Wrench.png" alt="Wrench" width="25" height="25" /> Installation
```bash
# Clone the repository
git clone https://github.com/ozandmrcn/XFirebase.git

# Navigate to the project folder
cd XFirebase

# Install the required dependencies
npm install

# Create a .env file in the root directory and add your firebase and aws configuration:
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-firebase-app-id

VITE_AWS_BUCKET_NAME=your-aws-bucket-name
VITE_AWS_ACCESS_KEY_ID=your-aws-access-key-id
VITE_AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
VITE_AWS_REGION=your-aws-region
VITE_AWS_S3_URL=your-aws-s3-url

# Run development server
npm run dev
```
### Setup NOTES:
> ⚠️ You must set up a Firebase project and enable **Google Authentication**, **Email/Password**, and **Firestore**.
> ⚠️ Email verification is required for login via email.
> ⚠️ Create an **S3 Bucket** on AWS and configure credentials for image upload.

## 📧 Contact  
For any questions or feedback, feel free to contact:  
**Ozan Demircan** - ozandmrcn47@gmail.com
