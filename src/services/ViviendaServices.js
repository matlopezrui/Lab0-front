export async function getAllHouses() {
    try {
        const response = await fetch('http://localhost:8000/viviendas/');
        const jsonData = await response.json();
        console.log(jsonData)
        return jsonData;
    } catch (error) {
        return [];
    }
}

export async function createUser(data) {
    const response = await fetch("/persona", {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ persona: data })
    })
    return await response.json();
}