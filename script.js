document.getElementById('reportBtn').addEventListener('click', function() {
    document.getElementById('reportForm').classList.remove('hidden');
});

document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const vehicle = document.getElementById('vehicle').value;
    const plate = document.getElementById('plate').value;
    const location = document.getElementById('location').value;

    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'red';
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('CAMINHÃO ROUBADO', canvas.width / 2, 100);

    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText(`Veículo: ${vehicle}`, canvas.width / 2, 160);
    ctx.fillText(`Placa: ${plate}`, canvas.width / 2, 210);
    ctx.fillText(`Local do Roubo: ${location}`, canvas.width / 2, 260);
    ctx.fillText('Se tiver informações, ligue para a central:', canvas.width / 2, 310);
    ctx.fillText('0800 702 700', canvas.width / 2, 360);

    canvas.toBlob(function(blob) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'alerta_caminhao_roubado.jpg';
        link.click();
    }, 'image/jpeg');
});