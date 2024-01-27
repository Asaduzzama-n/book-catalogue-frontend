eBook Web Platform

Welcome to our eBook web platform! This platform provides a secure and feature-rich environment for users to purchase, read, and review eBooks.

Features
DRM Protection: Prevents copy-paste and print screen to protect eBook content.
Authentication: Uses access and refresh token-based authentication to prevent unauthorized access.
eBook Preview: Allows users to preview a partial part of the eBook before making a purchase.
SSL Commerz Integration: Securely handles payments using SSL Commerz for a seamless transaction experience.
Epub Reader: Enables users to read purchased eBooks using an Epub reader.
User Interaction: Users can give reviews, update their profiles, and more.
Internationalization (i18next): Supports Bangla and English languages.
Dark and Light Themes: Provides theme options for a personalized reading experience.
Technologies Used
React
Redux Toolkit
TypeScript
React Hook Form
Tailwind CSS
Authentication
When a user logs in, an access token is provided and stored in local storage with a short lifespan.
A refresh token is also provided and stored in secured cookies with a longer lifespan.
If the access token becomes invalid, the refresh token is used to obtain a new access token for continued access to protected routes.
Getting Started
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/ebook-platform.git
Install Dependencies:

bash
Copy code
cd ebook-platform
npm install
Set Up Environment Variables:
Copy the .env.example file to .env and configure your environment variables, including SSL Commerz credentials.

Run the Application:

bash
Copy code
npm start
Contributing
We welcome contributions! If you find a bug or have an enhancement, please create an issue or submit a pull request.

License
This project is licensed under the MIT License.

Contact
For any inquiries or issues, please contact asad_uzzaman@outlook.com.

© 2024 Asaduzzaman. All rights reserved.
