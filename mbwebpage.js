// ---- Data ----

const navLinks = ["Home", "Products", "Delivery", "About", "Contact"];

const products = [
  { name: "Football", price: 947, image: "images/football.jpeg" },
  { name: "Cricket Kit", price: 1845, image: "images/cricketkit.jpeg" },
  { name: "Running Shoes", price: 1123, image: "images/shoes.jpeg" },
  { name: "Gym Equipment", price: 700, image: "images/dumbbell.jpeg" },
];

const features = [
  {
    icon: "🚚",
    title: "Fast Delivery",
    text: "Same-day delivery available.",
  },
  {
    icon: "🏆",
    title: "Premium Quality",
    text: "100% Genuine Sports Products.",
  },
  {
    icon: "💳",
    title: "Secure Payment",
    text: "Safe & Trusted Online Payment.",
  },
];

// ---- Render functions ----

function renderNav() {
  const nav = document.getElementById("nav-links");
  navLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = link;
    nav.appendChild(a);
  });
}

function renderProducts() {
  const container = document.getElementById("product-container");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const title = document.createElement("h3");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    container.appendChild(card);
  });
}

function renderFeatures() {
  const container = document.getElementById("features-container");

  features.forEach((feature) => {
    const featureEl = document.createElement("div");
    featureEl.className = "feature";

    const title = document.createElement("h3");
    title.textContent = `${feature.icon} ${feature.title}`;

    const text = document.createElement("p");
    text.textContent = feature.text;

    featureEl.appendChild(title);
    featureEl.appendChild(text);
    container.appendChild(featureEl);
  });
}

// ---- Init ----

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderProducts();
  renderFeatures();
});