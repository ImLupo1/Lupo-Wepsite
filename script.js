function search() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const paragraphs = document.querySelectorAll("#content p");

  paragraphs.forEach(p => {
    const text = p.textContent.toLowerCase();
    if (text.includes(input)) {
      p.style.backgroundColor = "#ffff99"; // تمييز الجملة
    } else {
      p.style.backgroundColor = "transparent"; // إزالة التمييز
    }
  });
}
