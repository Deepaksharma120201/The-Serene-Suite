# 🏨 The Serene Suite

A modern hotel management dashboard for managing cabins, guests, bookings, and revenue — built with React and powered by Supabase.

## 🚀 Tech Stack

- **Frontend**: React.js, React Router, React Query
- **Backend-as-a-Service**: Supabase (PostgreSQL + Auth + API)
- **Styling**: Styled Components
- **State Management**: React Query, Context API
- **Icons**: React Icons
- **Date Utilities**: date-fns

## ✨ Features

- 🔐 **Authentication** – Login and secure route access using Supabase Auth
- 🧳 **Cabin Management** – Add, update, and delete cabins with images
- 📆 **Booking Management** – Create, update, cancel bookings
- 👥 **Guest Management** – View and manage guest information
- 📊 **Dashboard** – View key business metrics (occupancy, revenue, bookings)
- 🔍 **Filtering and Sorting** – Search and sort bookings, guests, and cabins
- 📥 **File Uploads** – Upload and store cabin images securely
- 📦 **Reusable Components** – Button, Modal, Sidebar, Loader, Table, etc.

## 📁 Project Structure

```
serene-suite/
├── public/
│   └── favicon.ico, index.html, ...
├── src/
│   ├── app/                    # Routing and layout
│   ├── components/             # Shared reusable UI components
│   ├── features/
│   │   ├── cabins/
│   │   ├── bookings/
│   │   ├── guests/
│   ├── services/               # Supabase client & API functions
│   ├── hooks/                  # Custom React hooks (useBookings, useCabins, etc.)
│   ├── context/                # Theme and Auth context providers
│   ├── styles/                 # Styled components or global styles
│   └── index.js                # App entry point
```

## 🧪 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/Deepaksharma120201/The-Serene-Suite.git
cd serene-suite

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Create a .env file and add:
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key

# 4. Start the development server
npm start
```

## 🔑 Supabase Setup

- Go to [https://supabase.com](https://supabase.com) and create a new project.
- Enable authentication and storage.
- Create tables: `cabins`, `bookings`, `guests`, and configure RLS (Row-Level Security).
- Upload SQL schema if provided.

## 🙋‍♀️ Contribution

We welcome contributions!  
Feel free to fork this repo, open issues, and submit pull requests.

## 📜 License

This project is licensed under the MIT License.

## ✉️ Contact

📧 deepaksharma120201@gamil.com
🌐 [github.com/Deepaksharma120201](https://github.com/Deepaksharma120201)
