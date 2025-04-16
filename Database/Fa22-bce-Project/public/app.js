document.getElementById('fetchProperties').addEventListener('click', async () => {
    const tenantID = document.getElementById('tenantID').value;
    const propertyList = document.getElementById('propertyList');
    propertyList.innerHTML = ''; // Clear previous results

    try {
        const response = await fetch(`http://localhost:3000/properties/${tenantID}`);
        const properties = await response.json();

        if (properties.length === 0) {
            propertyList.innerHTML = '<li>No properties found</li>';
        } else {
            properties.forEach(property => {
                const li = document.createElement('li');
                li.textContent = `Description: ${property.Description}, Location: ${property.Location}`;
                propertyList.appendChild(li);
            });
        }
    } catch (error) {
        console.error('Error fetching properties:', error);
        propertyList.innerHTML = '<li>Failed to fetch properties</li>';
    }
});
