import "./globals.css";


export const metadata = {
  title: "thala clothing - a place for all fasion",
  description: "Explore Thala Clothing's collection of vibrant printed t-shirts for men and women. Stand out with trendy designs and high-quality fabrics. Shop now!",
  ketwords: "Printed t-shirts, graphic tees, trendy fashion, men's clothing, women's clothing, unique designs"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
