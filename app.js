const labels = document.querySelectorAll('.form-control label');

// through each label (email and password)
labels.forEach(label => {
    //split each label into array of chars then loop through each letter adding a span with transition-delay styling
    label.innerHTML = label.textContent.split('').map((letter, index) => {
       return `<span style="transition-delay: ${index * 50}ms">${letter}</span>`;
    }).join(''); //join back together
});