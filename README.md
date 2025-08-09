# 🍷 Aqqaru – Your Gateway to the World of Wine

Aqqaru is a modern web platform designed for wine enthusiasts to access knowledge, explore, and share their experiences.  
Users can read articles about wines, publish their own posts, leave comments, and interact with the community.

## ✨ Features

- 📚 **Wine Knowledge Base:** Grape varieties, wine regions, production techniques, and tasting notes.
- ✍️ **User-Generated Content:** Members can add their own posts and articles.
- 💬 **Comments & Reviews:** Share opinions and experiences with the community.
- 🔍 **Smart Search & Filtering:** Quickly access the wine or content you are looking for.
- 📱 **Responsive Design:** Enjoy a smooth experience on any device.


### **Backend** *(Future Scope)*
- **Node.js** – High-performance JavaScript runtime.  
- **Express.js** – Minimal and flexible backend framework.  

### **Database** *(Future Scope)*
- **MongoDB** – NoSQL database for flexible content management.  

### **Version Control**
- **Git & GitHub** – Code versioning and collaboration.  

---

## 🚀 Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/f-banipal/gubarru.git   
2. **Navigate to the project folder**  
   ```bash
   cd gubarru
3. **Install dependencies**  
   ```bash
   yarn install
   # or
   npm install
4. **Run the development server**  
   ```bash
   yarn dev
   # or
   npm run dev

Then open  http://localhost:3000 in your browser.

5. **📂 Project Structure**
```bash
src/
 ├─ app/
 │   ├─ layout.tsx              # Ana layout (Header, Footer dahil)
 │   ├─ page.tsx                # Ana sayfa
 │   ├─ wines/
 │   │    ├─ page.tsx           # Şarap listesi sayfası
 │   │    └─ [id]/page.tsx      # Tek şarap detay sayfası
 │   ├─ articles/
 │   │    ├─ page.tsx           # Makaleler listesi
 │   │    └─ [id]/page.tsx      # Makale detay sayfası
 │   ├─ videos/page.tsx         # Videolar sayfası
 │   ├─ experiences/page.tsx    # Kullanıcı tecrübeleri
 │   ├─ auth/
 │   │    ├─ login/page.tsx     # Login sayfası
 │   │    ├─ register/page.tsx  # Kayıt sayfası
 │   │    └─ profile/page.tsx   # Profil sayfası
 │   ├─ favicon.ico
 │   ├─ globals.css
 │   └─ page.module.css
 │
 ├─ components/
 │   ├─ Header.tsx
 │   ├─ Footer.tsx
 │   ├─ WineCard.tsx
 │   ├─ ArticleCard.tsx
 │   ├─ VideoPlayer.tsx
 │   └─ index.ts                # Toplu export
 │
 ├─ features/
 │   ├─ wines/
 │   │    ├─ WineList.tsx
 │   │    └─ WineDetails.tsx
 │   ├─ articles/
 │   │    ├─ ArticleList.tsx
 │   │    └─ ArticleDetails.tsx
 │   └─ auth/
 │        ├─ LoginForm.tsx
 │        └─ RegisterForm.tsx
 │
 ├─ lib/
 │   ├─ axiosInstance.ts        # API ayarları
 │   └─ auth.ts                 # Auth helper
 │
 ├─ services/
 │   ├─ wineService.ts          # Şarap API istekleri
 │   ├─ articleService.ts       # Makale API istekleri
 │   ├─ videoService.ts         # Video API istekleri
 │   └─ authService.ts          # Auth API istekleri
 │
 ├─ hooks/
 │   ├─ useAuth.ts
 │   └─ useFetch.ts
 │
 ├─ context/
 │   └─ AuthContext.tsx
 │
 ├─ styles/
 │   ├─ variables.scss
 │   ├─ mixins.scss
 │   └─ globals.scss
 │
 ├─ assets/
 │   ├─ images/
 │   │    └─ logo.png
 │   ├─ icons/
 │   │    └─ wine-glass.svg
 │   └─ videos/
 │        └─ intro.mp4
 │
 ├─ types/
 │   ├─ wine.ts
 │   ├─ article.ts
 │   └─ user.ts
 │
 ├─ utils/
 │   ├─ formatDate.ts
 │   ├─ formatPrice.ts
 │   └─ index.ts
 │
 └─ tests/
     ├─ WineCard.test.tsx
     └─ ArticleCard.test.tsx

```

6. **🚢 Deployment**
   
The easiest way to deploy your Next.js app is via Vercel:
   ```bash
   vercel deploy
   ```
   Read [the Next.js deployment documentation](https://nextjs.org/docs/app/getting-started/deploying)
 for more details.


 1. **Licence**
 ```bash
 This project is licensed under the MIT License.
 ```
